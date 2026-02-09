// Season System - Dynamic seasonal content, themes, and bonuses
class SeasonSystem {
    constructor() {
        this.currentSeason = null;
        this.seasonData = {
            spring: {
                name: 'spring',
                months: [2, 3, 4], // Feb, Mar, Apr (12-Feb also for overlap)
                emoji: '🌸',
                color: '#10b981',
                colorSecondary: '#ec4899',
                particleEmoji: '🌸',
                particleCount: 15,
                theme: 'cherry-blossom',
                monsterBonus: {
                    type: 'goldBoost',
                    name: 'flowerMonster',
                    emoji: '🌺',
                    description: 'seasonalMonsterFlower',
                    bonusPercent: 30,
                    spawnChance: 0.08
                }
            },
            summer: {
                name: 'summer',
                months: [5, 6, 7], // May, Jun, Jul
                emoji: '☀️',
                color: '#06b6d4',
                colorSecondary: '#3b82f6',
                particleEmoji: '💧',
                particleCount: 12,
                theme: 'wave',
                monsterBonus: {
                    type: 'cooldownReduction',
                    name: 'iceMonster',
                    emoji: '❄️',
                    description: 'seasonalMonsterIce',
                    cooldownReduction: 0.15, // 15% cooldown reduction
                    spawnChance: 0.08
                }
            },
            autumn: {
                name: 'autumn',
                months: [8, 9, 10], // Aug, Sep, Oct
                emoji: '🍂',
                color: '#f97316',
                colorSecondary: '#d97706',
                particleEmoji: '🍁',
                particleCount: 18,
                theme: 'falling-leaves',
                monsterBonus: {
                    type: 'experienceBoost',
                    name: 'pumpkinMonster',
                    emoji: '🎃',
                    description: 'seasonalMonsterPumpkin',
                    bonusPercent: 30,
                    spawnChance: 0.08
                }
            },
            winter: {
                name: 'winter',
                months: [11, 0, 1], // Nov, Dec, Jan (month 0 = January)
                emoji: '❄️',
                color: '#e0f2fe',
                colorSecondary: '#60a5fa',
                particleEmoji: '❄️',
                particleCount: 20,
                theme: 'snowfall',
                monsterBonus: {
                    type: 'allBonusBoost',
                    name: 'snowmanMonster',
                    emoji: '⛄',
                    description: 'seasonalMonsterSnowman',
                    bonusPercent: 15, // All bonuses +15%
                    spawnChance: 0.08
                }
            }
        };
    }

    /**
     * Initialize season system and detect current season
     */
    init() {
        this.detectSeason();
        this.applySeasonalTheme();
        this.startParticleEffect();
    }

    /**
     * Detect current season based on current month
     */
    detectSeason() {
        const month = new Date().getMonth(); // 0-11 (January is 0, December is 11)

        for (const [seasonKey, seasonInfo] of Object.entries(this.seasonData)) {
            if (seasonInfo.months.includes(month)) {
                this.currentSeason = seasonKey;
                return seasonKey;
            }
        }

        // Fallback to winter if somehow month not found
        this.currentSeason = 'winter';
        return 'winter';
    }

    /**
     * Get current season data
     */
    getCurrentSeasonData() {
        return this.seasonData[this.currentSeason];
    }

    /**
     * Apply seasonal theme to CSS variables
     */
    applySeasonalTheme() {
        const seasonData = this.getCurrentSeasonData();
        const root = document.documentElement;

        // Update CSS variables for seasonal colors
        root.style.setProperty('--season-primary', seasonData.color);
        root.style.setProperty('--season-secondary', seasonData.colorSecondary);
        root.style.setProperty('--season-theme', seasonData.theme);

        // Add seasonal class to body for theme-specific CSS
        document.body.classList.add(`season-${this.currentSeason}`);
    }

    /**
     * Start seasonal particle effect
     */
    startParticleEffect() {
        const seasonData = this.getCurrentSeasonData();
        const particleContainer = document.getElementById('seasonal-particles');

        if (!particleContainer) return;

        // Clear existing particles
        particleContainer.innerHTML = '';

        // Create particles based on season
        const particleCount = seasonData.particleCount;
        for (let i = 0; i < particleCount; i++) {
            const particle = this.createParticle(seasonData, i);
            particleContainer.appendChild(particle);
        }
    }

    /**
     * Create individual particle element
     */
    createParticle(seasonData, index) {
        const particle = document.createElement('div');
        particle.className = `seasonal-particle ${seasonData.theme}`;
        particle.textContent = seasonData.particleEmoji;

        // Random positioning and animation delay
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 3;
        const randomDuration = 15 + Math.random() * 10;

        particle.style.left = randomLeft + '%';
        particle.style.animationDelay = randomDelay + 's';
        particle.style.animationDuration = randomDuration + 's';

        return particle;
    }

    /**
     * Determine if monster should be seasonal bonus monster
     * Returns the seasonal monster type if true, null otherwise
     */
    shouldSpawnSeasonalMonster() {
        const seasonData = this.getCurrentSeasonData();
        const chance = Math.random();

        if (chance < seasonData.monsterBonus.spawnChance) {
            return seasonData.monsterBonus;
        }
        return null;
    }

    /**
     * Get seasonal monster bonus details
     */
    getSeasonalMonsterBonus() {
        return this.getCurrentSeasonData().monsterBonus;
    }

    /**
     * Calculate bonus multiplier based on seasonal monster type
     * @param {string} bonusType - Type of bonus to apply (goldBoost, cooldownReduction, etc)
     * @returns {number} Bonus multiplier or reduction value
     */
    calculateSeasonalBonus(bonusType) {
        const seasonData = this.getCurrentSeasonData();
        const bonus = seasonData.monsterBonus;

        switch (bonus.type) {
            case 'goldBoost':
                return 1 + (bonus.bonusPercent / 100); // e.g., 1.3 for +30%
            case 'experienceBoost':
                return 1 + (bonus.bonusPercent / 100);
            case 'cooldownReduction':
                return bonus.cooldownReduction; // Direct reduction value
            case 'allBonusBoost':
                return 1 + (bonus.bonusPercent / 100); // +15% to all stats
            default:
                return 1;
        }
    }

    /**
     * Get seasonal monster display info
     */
    getSeasonalMonsterDisplay() {
        const bonus = this.getCurrentSeasonData().monsterBonus;
        return {
            emoji: bonus.emoji,
            name: bonus.name,
            description: bonus.description
        };
    }

    /**
     * Get seasonal info for UI display
     */
    getSeasonalUIInfo() {
        const seasonData = this.getCurrentSeasonData();
        return {
            seasonName: seasonData.name,
            emoji: seasonData.emoji,
            color: seasonData.color,
            theme: seasonData.theme,
            monsterEmoji: seasonData.monsterBonus.emoji,
            monsterName: seasonData.monsterBonus.name
        };
    }

    /**
     * Refresh seasonal theme (useful for theme switching or time-based updates)
     */
    refresh() {
        this.detectSeason();
        this.applySeasonalTheme();
    }

    /**
     * Get all seasonal data for debugging/info
     */
    getAllSeasonalData() {
        return {
            currentSeason: this.currentSeason,
            seasonData: this.seasonData
        };
    }
}

// Export for use in app.js
window.SeasonSystem = SeasonSystem;
