// Idle Clicker Empire - Main Engine
(function() {
    'use strict';

    // Game state
    let money = 0;
    let totalEarned = 0;
    let totalClicks = 0;
    let clickValue = 1;
    let clickMultiplier = 1;
    let autoMultiplier = 1;
    let speedMultiplier = 1;
    let goldenTouchRate = 0;
    let ownedBusinesses = {};
    let purchasedUpgrades = {};
    let lastSaveTime = Date.now();
    let lastTickTime = Date.now();
    let passedMilestones = {};
    let autoIncomePerSec = 0;

    // DOM refs
    const moneyDisplay = document.getElementById('money-display');
    const perSecDisplay = document.getElementById('per-sec-display');
    const titleDisplay = document.getElementById('title-display');
    const titleIcon = document.getElementById('title-icon');
    const clickArea = document.getElementById('click-area');
    const clickEmoji = document.getElementById('click-emoji');
    const businessList = document.getElementById('business-list');
    const upgradeList = document.getElementById('upgrade-list');
    const totalEarnedEl = document.getElementById('stat-earned');
    const totalClicksEl = document.getElementById('stat-clicks');
    const clickValueEl = document.getElementById('stat-click-value');
    const businessCountEl = document.getElementById('stat-businesses');

    // Init
    function init() {
        loadState();
        calculateOfflineEarnings();
        renderBusinesses();
        renderUpgrades();
        updateDisplay();
        startGameLoop();
        setupEvents();
    }

    // Click
    function handleClick(e) {
        const baseClick = clickValue * clickMultiplier;
        const goldenBonus = autoIncomePerSec * goldenTouchRate;
        const earned = baseClick + goldenBonus;
        money += earned;
        totalEarned += earned;
        totalClicks++;

        showClickEffect(e, earned);
        animateClickArea();
        updateDisplay();
    }

    function showClickEffect(e, amount) {
        const popup = document.createElement('div');
        popup.className = 'click-popup';
        popup.textContent = '+' + formatMoneyShort(amount);

        const rect = clickArea.getBoundingClientRect();
        let x, y;
        if (e.touches) {
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }

        popup.style.left = x + 'px';
        popup.style.top = y + 'px';
        clickArea.appendChild(popup);
        setTimeout(() => popup.remove(), 800);
    }

    function animateClickArea() {
        clickEmoji.style.transform = 'scale(0.85)';
        setTimeout(() => { clickEmoji.style.transform = 'scale(1)'; }, 100);
    }

    // Game Loop (auto income)
    function startGameLoop() {
        setInterval(() => {
            const now = Date.now();
            const dt = (now - lastTickTime) / 1000;
            lastTickTime = now;

            if (autoIncomePerSec > 0) {
                const earned = autoIncomePerSec * dt;
                money += earned;
                totalEarned += earned;
            }

            updateDisplay();

            // Auto save every 5 seconds
            if (now - lastSaveTime > 5000) {
                saveState();
                lastSaveTime = now;
            }
        }, 100);
    }

    function recalculateAutoIncome() {
        let total = 0;
        for (const biz of BUSINESSES) {
            const count = ownedBusinesses[biz.id] || 0;
            if (count > 0) {
                total += biz.baseIncome * count;
            }
        }
        autoIncomePerSec = total * autoMultiplier * speedMultiplier;
    }

    // Business
    function buyBusiness(bizId) {
        const biz = BUSINESSES.find(b => b.id === bizId);
        if (!biz) return;

        const count = ownedBusinesses[biz.id] || 0;
        const cost = Math.floor(biz.baseCost * Math.pow(biz.costMultiplier, count));

        if (money >= cost) {
            money -= cost;
            ownedBusinesses[biz.id] = count + 1;
            recalculateAutoIncome();
            renderBusinesses();
            renderUpgrades();
            updateDisplay();
            saveState();
        }
    }

    function getBusinessCost(biz) {
        const count = ownedBusinesses[biz.id] || 0;
        return Math.floor(biz.baseCost * Math.pow(biz.costMultiplier, count));
    }

    function renderBusinesses() {
        businessList.innerHTML = BUSINESSES.map(biz => {
            const count = ownedBusinesses[biz.id] || 0;
            const cost = getBusinessCost(biz);
            const canAfford = money >= cost;
            const income = biz.baseIncome * autoMultiplier * speedMultiplier;
            const totalIncome = income * count;

            return `
                <div class="biz-card ${canAfford ? '' : 'locked'}" data-biz="${biz.id}">
                    <div class="biz-icon">${biz.icon}</div>
                    <div class="biz-info">
                        <div class="biz-name">${biz.name} <span class="biz-count">${count > 0 ? '×' + count : ''}</span></div>
                        <div class="biz-desc">${biz.description}</div>
                        <div class="biz-income">${count > 0 ? formatMoneyShort(totalIncome) + '/초' : formatMoneyShort(income) + '/초 (개당)'}</div>
                    </div>
                    <div class="biz-action">
                        <div class="biz-cost">${formatMoneyShort(cost)}</div>
                        <button class="biz-buy-btn ${canAfford ? '' : 'disabled'}" onclick="buyBiz('${biz.id}')">구매</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Upgrades
    function buyUpgrade(upgradeId) {
        if (purchasedUpgrades[upgradeId]) return;
        const upgrade = UPGRADES.find(u => u.id === upgradeId);
        if (!upgrade || money < upgrade.cost) return;

        money -= upgrade.cost;
        purchasedUpgrades[upgradeId] = true;

        switch (upgrade.type) {
            case 'click':
                clickMultiplier *= upgrade.multiplier;
                break;
            case 'auto':
                autoMultiplier *= upgrade.multiplier;
                recalculateAutoIncome();
                break;
            case 'speed':
                speedMultiplier *= upgrade.multiplier;
                recalculateAutoIncome();
                break;
            case 'golden':
                goldenTouchRate = upgrade.multiplier;
                break;
        }

        renderUpgrades();
        renderBusinesses();
        updateDisplay();
        saveState();
    }

    function renderUpgrades() {
        const available = UPGRADES.filter(u => {
            if (purchasedUpgrades[u.id]) return false;
            if (u.requires && totalEarned < u.requires.money) return false;
            return true;
        });

        if (available.length === 0) {
            upgradeList.innerHTML = '<p class="empty-msg">모든 업그레이드를 구매했습니다!</p>';
            return;
        }

        upgradeList.innerHTML = available.map(u => {
            const canAfford = money >= u.cost;
            return `
                <div class="upgrade-card ${canAfford ? '' : 'locked'} ${purchasedUpgrades[u.id] ? 'purchased' : ''}" data-upgrade="${u.id}">
                    <div class="upgrade-icon">${u.icon}</div>
                    <div class="upgrade-info">
                        <div class="upgrade-name">${u.name}</div>
                        <div class="upgrade-desc">${u.desc}</div>
                    </div>
                    <div class="upgrade-action">
                        <div class="upgrade-cost">${formatMoneyShort(u.cost)}</div>
                        <button class="upgrade-buy-btn ${canAfford ? '' : 'disabled'}" onclick="buyUpg('${u.id}')">구매</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Display
    function updateDisplay() {
        moneyDisplay.textContent = formatMoney(money);
        perSecDisplay.textContent = formatMoneyShort(autoIncomePerSec) + '/초';

        const titleInfo = getTitleForMoney(totalEarned);
        titleDisplay.textContent = titleInfo.title;
        titleIcon.textContent = titleInfo.icon;

        totalEarnedEl.textContent = formatMoneyShort(totalEarned);
        totalClicksEl.textContent = totalClicks.toLocaleString();
        clickValueEl.textContent = formatMoneyShort(clickValue * clickMultiplier);
        businessCountEl.textContent = Object.values(ownedBusinesses).reduce((s, c) => s + c, 0);

        // Check milestones
        checkMilestones();

        // Update buy button states
        BUSINESSES.forEach(biz => {
            const cost = getBusinessCost(biz);
            const card = document.querySelector(`.biz-card[data-biz="${biz.id}"]`);
            if (card) {
                const btn = card.querySelector('.biz-buy-btn');
                if (money >= cost) {
                    card.classList.remove('locked');
                    btn.classList.remove('disabled');
                } else {
                    card.classList.add('locked');
                    btn.classList.add('disabled');
                }
            }
        });

        UPGRADES.forEach(u => {
            const card = document.querySelector(`.upgrade-card[data-upgrade="${u.id}"]`);
            if (card && !purchasedUpgrades[u.id]) {
                const btn = card.querySelector('.upgrade-buy-btn');
                if (money >= u.cost) {
                    card.classList.remove('locked');
                    btn.classList.remove('disabled');
                } else {
                    card.classList.add('locked');
                    btn.classList.add('disabled');
                }
            }
        });
    }

    function checkMilestones() {
        for (const m of MILESTONES) {
            if (totalEarned >= m.amount && !passedMilestones[m.amount]) {
                passedMilestones[m.amount] = true;
                showMilestone(m.message);
            }
        }
    }

    function showMilestone(message) {
        const toast = document.createElement('div');
        toast.className = 'milestone-toast';
        toast.innerHTML = `<span class="milestone-icon">🎉</span><span>${message}</span>`;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Offline earnings
    function calculateOfflineEarnings() {
        try {
            const savedTime = localStorage.getItem('idleClicker_lastTime');
            if (savedTime && autoIncomePerSec > 0) {
                const offlineSeconds = Math.min((Date.now() - parseInt(savedTime)) / 1000, 43200); // max 12h
                if (offlineSeconds > 10) {
                    const earned = autoIncomePerSec * offlineSeconds * 0.5; // 50% offline efficiency
                    money += earned;
                    totalEarned += earned;
                    const hours = Math.floor(offlineSeconds / 3600);
                    const mins = Math.floor((offlineSeconds % 3600) / 60);
                    const timeStr = hours > 0 ? `${hours}시간 ${mins}분` : `${mins}분`;
                    setTimeout(() => {
                        showMilestone(`오프라인 ${timeStr} 동안 ${formatMoney(earned)} 벌었습니다!`);
                    }, 500);
                }
            }
        } catch (e) {}
    }

    // Persistence
    function saveState() {
        try {
            localStorage.setItem('idleClicker', JSON.stringify({
                money, totalEarned, totalClicks, clickValue,
                clickMultiplier, autoMultiplier, speedMultiplier, goldenTouchRate,
                ownedBusinesses, purchasedUpgrades, passedMilestones
            }));
            localStorage.setItem('idleClicker_lastTime', Date.now().toString());
        } catch (e) {}
    }

    function loadState() {
        try {
            const saved = localStorage.getItem('idleClicker');
            if (saved) {
                const s = JSON.parse(saved);
                money = s.money || 0;
                totalEarned = s.totalEarned || 0;
                totalClicks = s.totalClicks || 0;
                clickValue = s.clickValue || 1;
                clickMultiplier = s.clickMultiplier || 1;
                autoMultiplier = s.autoMultiplier || 1;
                speedMultiplier = s.speedMultiplier || 1;
                goldenTouchRate = s.goldenTouchRate || 0;
                ownedBusinesses = s.ownedBusinesses || {};
                purchasedUpgrades = s.purchasedUpgrades || {};
                passedMilestones = s.passedMilestones || {};
                recalculateAutoIncome();
            }
        } catch (e) {}
    }

    // Premium
    function showInterstitialAd() {
        return new Promise((resolve) => {
            const overlay = document.getElementById('interstitial-overlay');
            const closeBtn = document.getElementById('btn-close-ad');
            overlay.classList.remove('hidden');
            closeBtn.disabled = true;
            let seconds = 5;
            closeBtn.textContent = `닫기 (${seconds})`;
            const timer = setInterval(() => {
                seconds--;
                closeBtn.textContent = `닫기 (${seconds})`;
                if (seconds <= 0) {
                    clearInterval(timer);
                    closeBtn.disabled = false;
                    closeBtn.textContent = '닫기';
                }
            }, 1000);
            closeBtn.addEventListener('click', function handler() {
                closeBtn.removeEventListener('click', handler);
                overlay.classList.add('hidden');
                resolve();
            });
        });
    }

    function showPremiumAnalysis() {
        const titleInfo = getTitleForMoney(totalEarned);
        const bizCount = Object.values(ownedBusinesses).reduce((s, c) => s + c, 0);
        const topBiz = BUSINESSES.filter(b => (ownedBusinesses[b.id] || 0) > 0)
            .sort((a, b) => (ownedBusinesses[b.id] * b.baseIncome) - (ownedBusinesses[a.id] * a.baseIncome));

        // Strategy recommendation
        let strategy = '';
        if (autoIncomePerSec === 0) {
            strategy = '아직 자동 수익이 없습니다! 레모네이드 가판대부터 구매하여 수동 수입을 자동화하세요.';
        } else if (autoIncomePerSec < 100) {
            strategy = '초반에는 클릭 수익과 저가 사업에 집중하세요. 업그레이드로 클릭 수익을 높이면 빠르게 성장합니다.';
        } else if (autoIncomePerSec < 10000) {
            strategy = '자동 수익이 안정되고 있습니다. 효율 개선 업그레이드를 구매하면 모든 사업의 수익이 2배가 됩니다!';
        } else {
            strategy = '사업 제국이 잘 성장하고 있습니다. 고급 사업(IT 기업, 항공사, 은행)에 투자하면 기하급수적 성장이 가능합니다.';
        }

        // Next milestone
        const nextMilestone = MILESTONES.find(m => totalEarned < m.amount);
        const progress = nextMilestone ? Math.min(100, (totalEarned / nextMilestone.amount * 100)).toFixed(1) : 100;

        const content = document.getElementById('premium-content');
        content.innerHTML = `
            <div class="premium-stat-grid">
                <div class="prem-stat"><span class="prem-val">${titleInfo.icon} ${titleInfo.title}</span><span class="prem-lbl">현재 등급</span></div>
                <div class="prem-stat"><span class="prem-val">${formatMoneyShort(autoIncomePerSec)}/초</span><span class="prem-lbl">자동 수익</span></div>
                <div class="prem-stat"><span class="prem-val">${bizCount}개</span><span class="prem-lbl">사업체</span></div>
                <div class="prem-stat"><span class="prem-val">${formatMoneyShort(totalEarned)}</span><span class="prem-lbl">총 수익</span></div>
            </div>
            <div class="prem-section">
                <h4>📊 사업 포트폴리오</h4>
                ${topBiz.length > 0 ? topBiz.map(b => {
                    const count = ownedBusinesses[b.id];
                    const income = b.baseIncome * count * autoMultiplier * speedMultiplier;
                    return `<p>${b.icon} ${b.name} ×${count} → ${formatMoneyShort(income)}/초</p>`;
                }).join('') : '<p>아직 사업체가 없습니다.</p>'}
            </div>
            <div class="prem-section">
                <h4>💡 전략 추천</h4>
                <p>${strategy}</p>
            </div>
            ${nextMilestone ? `
            <div class="prem-section">
                <h4>🎯 다음 목표</h4>
                <p>${nextMilestone.message}</p>
                <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
                <p class="progress-text">${progress}% 달성</p>
            </div>
            ` : '<div class="prem-section"><h4>🏆 모든 목표 달성!</h4><p>축하합니다! 모든 마일스톤을 클리어했습니다.</p></div>'}
        `;

        document.getElementById('premium-result').classList.remove('hidden');
        document.getElementById('premium-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Reset
    function resetGame() {
        if (!confirm('정말 모든 데이터를 초기화하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) return;
        localStorage.removeItem('idleClicker');
        localStorage.removeItem('idleClicker_lastTime');
        location.reload();
    }

    // Events
    function setupEvents() {
        clickArea.addEventListener('click', handleClick);
        clickArea.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleClick(e);
        }, { passive: false });

        document.getElementById('btn-premium').addEventListener('click', async () => {
            await showInterstitialAd();
            showPremiumAnalysis();
        });

        document.getElementById('btn-reset').addEventListener('click', resetGame);

        document.getElementById('btn-share').addEventListener('click', () => {
            const titleInfo = getTitleForMoney(totalEarned);
            const text = `Idle Clicker Empire\n등급: ${titleInfo.icon} ${titleInfo.title}\n총 수익: ${formatMoney(totalEarned)}\n자동 수익: ${formatMoneyShort(autoIncomePerSec)}/초\n\nhttps://swp1234.github.io/idle-clicker/`;
            if (navigator.share) {
                navigator.share({ title: 'Idle Clicker Empire', text });
            } else if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => alert('결과가 복사되었습니다!'));
            }
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
                document.getElementById('tab-' + btn.dataset.tab).classList.remove('hidden');
            });
        });
    }

    // Expose to global for onclick handlers
    window.buyBiz = buyBusiness;
    window.buyUpg = buyUpgrade;

    // SW
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js')
                .then(r => console.log('SW registered:', r.scope))
                .catch(e => console.log('SW failed:', e));
        });
    }

    init();
})();
