/**
 * Ranking & Personal Records System
 * localStorage 기반 개인 기록 추적 및 랭크 관리
 */

class RankingSystem {
    constructor() {
        this.storageKey = 'idleClicker_personalRecords';
        this.rankThresholds = {
            'BRONZE': { min: 0, max: 100, color: '#CD7F32', icon: '🥉' },
            'SILVER': { min: 100, max: 500, color: '#C0C0C0', icon: '🥈' },
            'GOLD': { min: 500, max: 2000, color: '#FFD700', icon: '🥇' },
            'PLATINUM': { min: 2000, max: 10000, color: '#E5E4E2', icon: '💎' },
            'DIAMOND': { min: 10000, max: 50000, color: '#B9F2FF', icon: '✨' },
            'MASTER': { min: 50000, max: Infinity, color: '#FF6B6B', icon: '👑' }
        };
        this.rankOrder = ['BRONZE', 'SILVER', 'GOLD', 'PLATINUM', 'DIAMOND', 'MASTER'];
        this.personalRecords = this.loadRecords();
    }

    loadRecords() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            if (!saved) return this.getDefaultRecords();

            const records = JSON.parse(saved);
            return {
                highestDPS: records.highestDPS || 0,
                mostKills: records.mostKills || 0,
                highestTier: records.highestTier || 1,
                maxGoldHeld: records.maxGoldHeld || 0,
                totalPrestige: records.totalPrestige || 0,
                maxSingleHit: records.maxSingleHit || 0,
                timestamps: records.timestamps || this.getDefaultTimestamps()
            };
        } catch (e) {
            console.warn('Failed to load personal records:', e.message);
            return this.getDefaultRecords();
        }
    }

    getDefaultRecords() {
        return {
            highestDPS: 0,
            mostKills: 0,
            highestTier: 1,
            maxGoldHeld: 0,
            totalPrestige: 0,
            maxSingleHit: 0,
            timestamps: this.getDefaultTimestamps()
        };
    }

    getDefaultTimestamps() {
        return {
            highestDPS: null,
            mostKills: null,
            highestTier: null,
            maxGoldHeld: null,
            totalPrestige: null,
            maxSingleHit: null
        };
    }

    saveRecords() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.personalRecords));
        } catch (e) {
            console.warn('Failed to save personal records:', e.message);
        }
    }

    /**
     * 게임 데이터로부터 기록 업데이트
     * @param {Object} gameData - { autoIncome, killCount, currentTier, gold, prestigeCount, lastHitDamage }
     * @returns {Object} { newRecords: [...], notifications: [...] }
     */
    updateRecords(gameData) {
        const newRecords = [];
        const notifications = [];

        // 최고 DPS 체크
        const currentDPS = gameData.autoIncome || 0;
        if (currentDPS > this.personalRecords.highestDPS) {
            this.personalRecords.highestDPS = currentDPS;
            this.personalRecords.timestamps.highestDPS = new Date().toISOString();
            newRecords.push('highestDPS');
            notifications.push({
                type: 'dps',
                message: `🏆 신기록! 최고 DPS: ${this.formatNumber(currentDPS)}`,
                icon: '⚡'
            });
        }

        // 최다 처치 체크
        const killCount = gameData.killCount || 0;
        if (killCount > this.personalRecords.mostKills) {
            this.personalRecords.mostKills = killCount;
            this.personalRecords.timestamps.mostKills = new Date().toISOString();
            newRecords.push('mostKills');
            notifications.push({
                type: 'kills',
                message: `🏆 신기록! 최다 처치: ${this.formatNumber(killCount)}`,
                icon: '⚔️'
            });
        }

        // 최고 티어 체크
        const currentTier = gameData.currentTier || 1;
        if (currentTier > this.personalRecords.highestTier) {
            this.personalRecords.highestTier = currentTier;
            this.personalRecords.timestamps.highestTier = new Date().toISOString();
            newRecords.push('highestTier');
            notifications.push({
                type: 'tier',
                message: `🏆 신기록! Tier ${currentTier} 도달`,
                icon: '📈'
            });
        }

        // 최대 금보유 체크
        const currentGold = gameData.gold || 0;
        if (currentGold > this.personalRecords.maxGoldHeld) {
            this.personalRecords.maxGoldHeld = currentGold;
            this.personalRecords.timestamps.maxGoldHeld = new Date().toISOString();
            newRecords.push('maxGoldHeld');
            notifications.push({
                type: 'gold',
                message: `🏆 신기록! 최대 보유 골드: ${this.formatNumber(currentGold)}`,
                icon: '💰'
            });
        }

        // 최다 환생 체크 (누적)
        const totalPrestige = gameData.prestigeCount || 0;
        if (totalPrestige > this.personalRecords.totalPrestige) {
            this.personalRecords.totalPrestige = totalPrestige;
            this.personalRecords.timestamps.totalPrestige = new Date().toISOString();
            newRecords.push('totalPrestige');
            notifications.push({
                type: 'prestige',
                message: `🏆 신기록! 환생 ${totalPrestige}회 달성`,
                icon: '♻️'
            });
        }

        // 최고 단일 히트 데미지 체크
        const maxHitDamage = gameData.lastHitDamage || 0;
        if (maxHitDamage > this.personalRecords.maxSingleHit) {
            this.personalRecords.maxSingleHit = maxHitDamage;
            this.personalRecords.timestamps.maxSingleHit = new Date().toISOString();
            newRecords.push('maxSingleHit');
            notifications.push({
                type: 'hit',
                message: `🏆 신기록! 최대 단일 타격: ${this.formatNumber(maxHitDamage)}`,
                icon: '💥'
            });
        }

        // 변경사항이 있으면 저장
        if (newRecords.length > 0) {
            this.saveRecords();
        }

        return { newRecords, notifications };
    }

    /**
     * 현재 킬 수 기반 랭크 반환
     */
    getRank(killCount) {
        for (const rank of this.rankOrder) {
            const threshold = this.rankThresholds[rank];
            if (killCount >= threshold.min && killCount < threshold.max) {
                return rank;
            }
        }
        return 'MASTER';
    }

    /**
     * 랭크 정보 반환
     */
    getRankInfo(killCount) {
        const rank = this.getRank(killCount);
        const threshold = this.rankThresholds[rank];
        const nextRankIdx = Math.min(this.rankOrder.indexOf(rank) + 1, this.rankOrder.length - 1);
        const nextRank = this.rankOrder[nextRankIdx];
        const nextThreshold = this.rankThresholds[nextRank];

        // 다음 랭크까지의 진도율
        let progress = 0;
        let needed = 0;
        if (rank !== 'MASTER') {
            needed = nextThreshold.min - killCount;
            const total = nextThreshold.min - threshold.min;
            progress = Math.max(0, Math.min(100, ((killCount - threshold.min) / total) * 100));
        } else {
            progress = 100;
        }

        return {
            rank,
            icon: threshold.icon,
            color: threshold.color,
            currentKills: killCount,
            nextRank: nextRank,
            nextThreshold: nextThreshold.min,
            needed,
            progress,
            isMaxRank: rank === 'MASTER'
        };
    }

    /**
     * 개인 기록 데이터 반환 (i18n용 키 포함)
     */
    getPersonalRecordsData() {
        return {
            highestDPS: {
                value: this.personalRecords.highestDPS,
                formatted: this.formatNumber(this.personalRecords.highestDPS),
                timestamp: this.personalRecords.timestamps.highestDPS
            },
            mostKills: {
                value: this.personalRecords.mostKills,
                formatted: this.formatNumber(this.personalRecords.mostKills),
                timestamp: this.personalRecords.timestamps.mostKills
            },
            highestTier: {
                value: this.personalRecords.highestTier,
                formatted: `Tier ${this.personalRecords.highestTier}`,
                timestamp: this.personalRecords.timestamps.highestTier
            },
            maxGoldHeld: {
                value: this.personalRecords.maxGoldHeld,
                formatted: this.formatNumber(this.personalRecords.maxGoldHeld),
                timestamp: this.personalRecords.timestamps.maxGoldHeld
            },
            totalPrestige: {
                value: this.personalRecords.totalPrestige,
                formatted: this.personalRecords.totalPrestige.toString(),
                timestamp: this.personalRecords.timestamps.totalPrestige
            },
            maxSingleHit: {
                value: this.personalRecords.maxSingleHit,
                formatted: this.formatNumber(this.personalRecords.maxSingleHit),
                timestamp: this.personalRecords.timestamps.maxSingleHit
            }
        };
    }

    /**
     * 기록 달성 날짜를 포맷된 문자열로 반환
     */
    formatDate(isoString) {
        if (!isoString) return '—';
        try {
            const date = new Date(isoString);
            return date.toLocaleDateString(i18n.getCurrentLanguage() || 'ko-KR');
        } catch (e) {
            return '—';
        }
    }

    /**
     * 숫자를 포맷된 문자열로 변환 (K, M, B 단위)
     */
    formatNumber(num) {
        if (!num) return '0';
        if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
        if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
        return num.toString();
    }

    /**
     * 모든 기록 초기화 (리셋 시)
     */
    resetRecords() {
        this.personalRecords = this.getDefaultRecords();
        this.saveRecords();
    }
}

// 전역 인스턴스 생성
window.rankingSystem = new RankingSystem();
