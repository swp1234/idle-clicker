// Dungeon Clicker - Main Engine
(async function() {
    'use strict';

    // Initialize i18n
    await i18n.loadTranslations(i18n.getCurrentLanguage());
    i18n.updateUI();

    const langToggle = document.getElementById('lang-toggle');
    const langMenu = document.getElementById('lang-menu');
    const langOptions = document.querySelectorAll('.lang-option');

    document.querySelector(`[data-lang="${i18n.getCurrentLanguage()}"]`)?.classList.add('active');

    langToggle?.addEventListener('click', () => langMenu.classList.toggle('hidden'));

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) langMenu?.classList.add('hidden');
    });

    langOptions.forEach(opt => {
        opt.addEventListener('click', async () => {
            await i18n.setLanguage(opt.getAttribute('data-lang'));
            langOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            langMenu.classList.add('hidden');
        });
    });

    // Game state
    let gold = 0;
    let totalEarned = 0;
    let totalClicks = 0;
    let clickValue = 3;
    let clickMultiplier = 1;
    let autoMultiplier = 1;
    let speedMultiplier = 1;
    let goldenTouchBonus = 0;
    let autoIncomePerSec = 0;
    let ownedEquipment = {};
    let purchasedSkills = {};
    let lastSaveTime = Date.now();
    let lastTickTime = Date.now();
    let milestoneIndex = 0;
    let activeTab = 'equipment';

    // Monster state
    let currentMonsterIndex = 0;
    let monsterHP = 0;
    let monsterMaxHP = 0;
    let killCount = 0;
    let isBoss = false;
    let monsterDying = false;
    let currentTier = 1;
    let ambientInterval = null;

    // Helper: Map Korean monster names to i18n keys
    function getMonsterNameKey(koreanName) {
        const monsterMap = {
            '슬라임': 'monsters.slime',
            '고블린': 'monsters.goblin',
            '박쥐': 'monsters.bat',
            '들쥐': 'monsters.rat',
            '전갈': 'monsters.scorpion',
            '뱀': 'monsters.snake',
            '버섯괴물': 'monsters.mushroom',
            '해골 전사': 'monsters.skeleton',
            '멧돼지': 'monsters.boar',
            '도적': 'monsters.thief',
            '늑대': 'monsters.wolf',
            '독거미': 'monsters.spider',
            '트롤': 'monsters.troll',
            '오크': 'monsters.orc',
            '나무 정령': 'monsters.treent',
            '곰': 'monsters.bear',
            '요정 도둑': 'monsters.fairy',
            '식인 식물': 'monsters.carnivorous',
            '코볼트': 'monsters.kobold',
            '숲 마녀': 'monsters.witch',
            '화염 정령': 'monsters.flame_spirit',
            '용암 골렘': 'monsters.lava_golem',
            '불사조': 'monsters.phoenix',
            '화염 박쥐': 'monsters.flame_bat',
            '화산 도마뱀': 'monsters.volcano_lizard',
            '용암 슬라임': 'monsters.lava_slime',
            '이프리트': 'monsters.ifrit',
            '화염 기사': 'monsters.flame_knight',
            '마그마 웜': 'monsters.magma_worm',
            '불의 군주': 'monsters.fire_lord',
            '리치': 'monsters.lich',
            '뱀파이어': 'monsters.vampire',
            '악마': 'monsters.demon',
            '그림자 암살자': 'monsters.shadow_assassin',
            '밴시': 'monsters.banshee',
            '미이라': 'monsters.mummy',
            '데스 나이트': 'monsters.death_knight',
            '심연의 촉수': 'monsters.tentacle',
            '저주받은 기사': 'monsters.cursed_knight',
            '네크로맨서': 'monsters.necromancer',
            '드래곤': 'monsters.dragon',
            '고대 용': 'monsters.ancient_dragon',
            '얼음 드래곤': 'monsters.ice_dragon',
            '독 드래곤': 'monsters.poison_dragon',
            '뼈 드래곤': 'monsters.bone_dragon',
            '용의 수호자': 'monsters.dragon_guardian',
            '와이번': 'monsters.wyvern',
            '히드라': 'monsters.hydra',
            '바실리스크': 'monsters.basilisk',
            '드래곤 로드': 'monsters.dragon_lord',
            '타이탄': 'monsters.titan',
            '어둠의 군주': 'monsters.dark_lord',
            '대천사': 'monsters.archangel',
            '크라켄': 'monsters.kraken',
            '세계 뱀': 'monsters.world_snake',
            '혼돈의 기사': 'monsters.chaos_knight',
            '빛의 수호자': 'monsters.light_guardian',
            '허공의 파괴자': 'monsters.void_destroyer',
            '태양의 화신': 'monsters.sun_incarnation',
            '종말의 수호자': 'monsters.apocalypse_guardian',
            '차원 균열자': 'monsters.dimension_breaker',
            '시간의 파수꾼': 'monsters.time_keeper',
            '공허의 군주': 'monsters.void_lord',
            '별의 포식자': 'monsters.star_predator',
            '차원의 마왕': 'monsters.dimension_demon',
            '우주 해파리': 'monsters.cosmic_jellyfish',
            '결정 거인': 'monsters.crystal_giant',
            '에테르 드래곤': 'monsters.ether_dragon',
            '차원 수문장': 'monsters.dimension_guardian',
            '무한의 존재': 'monsters.infinity_being',
            '원초적 혼돈': 'monsters.primordial_chaos',
            '태초의 불꽃': 'monsters.primordial_flame',
            '세계 거북': 'monsters.world_turtle',
            '시간의 용': 'monsters.time_dragon',
            '별의 거인': 'monsters.star_giant',
            '원소 타이탄': 'monsters.element_titan',
            '운명의 심판자': 'monsters.fate_judge',
            '혼돈의 화신': 'monsters.chaos_incarnation',
            '영원의 감시자': 'monsters.eternal_watcher',
            '태초의 존재': 'monsters.primordial_being',
            '오딘': 'monsters.odin',
            '토르': 'monsters.thor',
            '하데스': 'monsters.hades',
            '포세이돈': 'monsters.poseidon',
            '아레스': 'monsters.ares',
            '아테나': 'monsters.athena',
            '제우스': 'monsters.zeus',
            '크로노스': 'monsters.kronos',
            '가이아': 'monsters.gaia',
            '카오스': 'monsters.chaos',
            '세계의 뱀 요르문간드': 'monsters.jormungandr',
            '파괴신 수르트': 'monsters.surtr',
            '세계 늑대 펜리르': 'monsters.fenrir',
            '심연의 황제': 'monsters.abyss_emperor',
            '차원의 파괴자': 'monsters.dimension_destroyer',
            '영겁의 수호자': 'monsters.eternal_guardian',
            '우주의 심장': 'monsters.universe_heart',
            '시간의 종말': 'monsters.time_end',
            '절대적 존재': 'monsters.absolute',
            '??? (최종)': 'monsters.unknown'
        };
        return monsterMap[koreanName] || 'monsters.unknown';
    }

    // DOM
    const goldDisplay = document.getElementById('gold-display');
    const perSecDisplay = document.getElementById('per-sec-display');
    const titleDisplay = document.getElementById('title-display');
    const clickArea = document.getElementById('click-area');
    const monsterEmojiEl = document.getElementById('monster-emoji');
    const monsterNameEl = document.getElementById('monster-name');
    const monsterLevelEl = document.getElementById('monster-level');
    const monsterAuraEl = document.getElementById('monster-aura');
    const hpBar = document.getElementById('hp-bar');
    const hpFill = document.getElementById('hp-fill');
    const hpText = document.getElementById('hp-text');
    const killCountEl = document.getElementById('kill-count');
    const equipmentList = document.getElementById('equipment-list');
    const skillList = document.getElementById('skill-list');
    const container = document.querySelector('.container');
    const dungeonStage = document.getElementById('dungeon-stage');
    const ambientContainer = document.getElementById('ambient-particles');
    const tierLabelEl = document.getElementById('tier-label');
    const tierIconEl = document.getElementById('tier-icon');
    const tierNameEl = document.getElementById('tier-name');

    // Init
    function init() {
        loadState();
        recalculateAutoIncome();
        spawnMonster();
        calculateOfflineEarnings();
        updateDisplay();
        renderEquipment();
        renderSkills();
        startGameLoop();
        setupEvents();
    }

    // === Monster Visual System ===

    function applyMonsterVisuals(monster) {
        // Set monster glow
        if (monsterEmojiEl) {
            monsterEmojiEl.style.filter = `drop-shadow(0 0 20px ${monster.glow}) drop-shadow(0 0 10px ${monster.glow}) drop-shadow(0 0 4px ${monster.glow})`;
        }

        // Monster glow background
        const glowBg = document.getElementById('monster-glow-bg');
        if (glowBg) {
            glowBg.style.background = `radial-gradient(circle, ${monster.glow}, transparent 70%)`;
            glowBg.style.boxShadow = `0 0 60px ${monster.glow}`;
        }

        // Monster aura ring
        if (monsterAuraEl) {
            monsterAuraEl.style.borderColor = monster.color;
            monsterAuraEl.style.boxShadow = `0 0 24px ${monster.glow}, inset 0 0 24px ${monster.glow}`;
        }

        // Inner aura
        const innerAura = document.querySelector('.monster-aura-inner');
        if (innerAura) {
            innerAura.style.borderColor = monster.color;
        }

        // Monster name color tint
        if (monsterNameEl && !isBoss) {
            monsterNameEl.style.color = monster.color;
            monsterNameEl.style.textShadow = `0 0 10px ${monster.glow}`;
        }

        // Apply tier theme
        applyTierTheme(monster.tier);

        // Start ambient particles
        startAmbientParticles(monster.ambient);
    }

    function applyTierTheme(tier) {
        if (tier === currentTier && dungeonStage.className.includes('tier-')) return;

        const tierData = DUNGEON_TIERS.find(t => t.id === tier);
        if (!tierData) return;

        const oldTier = currentTier;
        currentTier = tier;

        // Remove all tier classes
        if (dungeonStage) {
            dungeonStage.className = 'dungeon-stage tier-' + tierData.theme;
        }

        // Tier transition flash
        if (oldTier !== tier && dungeonStage) {
            const flash = document.createElement('div');
            flash.className = 'tier-transition-flash';
            flash.style.background = `radial-gradient(circle, ${MONSTERS.find(m => m.tier === tier)?.glow || 'rgba(255,255,255,0.3)'}, transparent)`;
            dungeonStage.appendChild(flash);
            setTimeout(() => flash.remove(), 800);
        }

        // Update tier label
        if (tierIconEl) tierIconEl.textContent = tierData.icon;
        if (tierNameEl) {
            const tierKey = `dungeon.${tierData.theme}`;
            tierNameEl.textContent = i18n.t(tierKey);
            tierNameEl.setAttribute('data-i18n', tierKey);
        }
        if (tierLabelEl) {
            const m = MONSTERS.find(m => m.tier === tier);
            if (m) {
                tierLabelEl.style.borderColor = m.glow;
                tierLabelEl.style.background = `rgba(${hexToRgb(m.color)}, 0.12)`;
            }
        }
    }

    function hexToRgb(hex) {
        hex = hex.replace('#', '');
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `${r},${g},${b}`;
    }

    // === Ambient Particle System ===

    function startAmbientParticles(type) {
        if (ambientInterval) clearInterval(ambientInterval);
        if (!ambientContainer) return;

        // Clear existing
        ambientContainer.innerHTML = '';

        // Spawn rate & count vary by type
        const config = {
            leaf:      { interval: 800,  count: 1 },
            spore:     { interval: 600,  count: 1 },
            ember:     { interval: 400,  count: 2 },
            soul:      { interval: 700,  count: 1 },
            lightning: { interval: 1200, count: 1 },
        };
        const c = config[type] || config.leaf;

        ambientInterval = setInterval(() => {
            for (let i = 0; i < c.count; i++) {
                spawnAmbientParticle(type);
            }
        }, c.interval);

        // Spawn initial batch
        for (let i = 0; i < 4; i++) {
            spawnAmbientParticle(type);
        }
    }

    function spawnAmbientParticle(type) {
        if (!ambientContainer) return;

        // Limit active particles
        if (ambientContainer.children.length > 20) return;

        const p = document.createElement('div');
        p.className = 'ambient-p ' + type;

        const x = Math.random() * 100;
        const startY = 80 + Math.random() * 20;
        p.style.left = x + '%';
        p.style.bottom = '-10px';

        const dur = 3 + Math.random() * 4;
        const delay = Math.random() * 2;
        const dx = (Math.random() - 0.5) * 60;

        p.style.setProperty('--dur', dur + 's');
        p.style.setProperty('--delay', delay + 's');
        p.style.setProperty('--dx', dx + 'px');

        // Color variations per type
        if (type === 'ember') {
            const colors = ['#f97316', '#ef4444', '#fbbf24', '#f59e0b'];
            p.style.background = colors[Math.floor(Math.random() * colors.length)];
            p.style.boxShadow = `0 0 8px ${p.style.background}`;
        } else if (type === 'soul') {
            const colors = ['rgba(6,182,212,0.6)', 'rgba(124,58,237,0.5)', 'rgba(59,130,246,0.5)'];
            p.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;
        }

        ambientContainer.appendChild(p);

        // Self-cleanup
        setTimeout(() => p.remove(), (dur + delay) * 1000);
    }

    // === Monster System ===

    function spawnMonster() {
        currentMonsterIndex = killCount % MONSTERS.length;
        isBoss = (killCount > 0 && killCount % 10 === 0);

        const monster = MONSTERS[currentMonsterIndex];
        monsterMaxHP = getMonsterHP(monster, killCount);
        if (isBoss) monsterMaxHP *= 3;
        monsterHP = monsterMaxHP;
        monsterDying = false;

        // Update DOM
        if (monsterEmojiEl) {
            // Use SVG illustration if available, fallback to emoji
            if (typeof MONSTER_SVG !== 'undefined' && MONSTER_SVG[monster.name]) {
                monsterEmojiEl.innerHTML = MONSTER_SVG[monster.name];
            } else {
                monsterEmojiEl.textContent = monster.emoji;
            }
            monsterEmojiEl.className = 'monster-emoji spawning';
            setTimeout(() => {
                monsterEmojiEl.classList.remove('spawning');
            }, 400);
        }

        // Get translated monster name
        const monsterNameKey = getMonsterNameKey(monster.name);
        const translatedMonsterName = i18n.t(monsterNameKey);
        const displayName = isBoss ? '[ BOSS ] ' + translatedMonsterName : translatedMonsterName;
        if (monsterNameEl) {
            monsterNameEl.textContent = displayName;
            monsterNameEl.className = isBoss ? 'monster-name boss-name' : 'monster-name';
        }

        const level = Math.floor(killCount / MONSTERS.length) + 1;
        if (monsterLevelEl) monsterLevelEl.textContent = 'Lv.' + level;

        // Boss visual
        if (clickArea) {
            clickArea.classList.toggle('boss', isBoss);
        }

        // Apply visual theme
        applyMonsterVisuals(monster);

        updateHPBar();
    }

    function updateHPBar() {
        if (!hpFill || !hpText || !hpBar) return;

        const pct = Math.max(0, monsterHP / monsterMaxHP * 100);
        hpFill.style.width = pct + '%';

        // Color based on HP %
        hpFill.classList.remove('medium', 'low');
        if (pct <= 30) {
            hpFill.classList.add('low');
            hpBar.classList.add('danger');
        } else if (pct <= 60) {
            hpFill.classList.add('medium');
            hpBar.classList.remove('danger');
        } else {
            hpBar.classList.remove('danger');
        }

        hpText.textContent = formatGoldShort(Math.max(0, Math.ceil(monsterHP))) + ' / ' + formatGoldShort(monsterMaxHP);
    }

    function damageMonster(damage, isClick) {
        if (monsterDying || monsterHP <= 0) return;

        monsterHP -= damage;

        if (isClick) {
            showDamageNumber(damage);
            shakeScreen();
            flashMonster();
            spawnHitParticles();
            showSlashEffect();
        }

        updateHPBar();

        if (monsterHP <= 0) {
            monsterHP = 0;
            onMonsterDeath();
        }
    }

    function onMonsterDeath() {
        monsterDying = true;
        const monster = MONSTERS[currentMonsterIndex];
        const reward = getMonsterGoldReward(monster, killCount, isBoss);

        gold += reward;
        totalEarned += reward;

        // Gold pulse
        if (goldDisplay) {
            goldDisplay.classList.add('pulse');
            setTimeout(() => goldDisplay.classList.remove('pulse'), 300);
        }

        // Show gold reward float
        showGoldEarnFloat(reward);

        // Death animation
        if (monsterEmojiEl) {
            monsterEmojiEl.className = 'monster-emoji dying';
        }

        // Death particles (use monster color)
        spawnDeathParticles(monster.color);

        // Play sound effects
        if (sfx) {
            if (isBoss) {
                sfx.levelUp();
            } else {
                sfx.explosion();
            }
            sfx.coin();
        }

        // Boss defeat flash
        if (isBoss) {
            const flash = document.createElement('div');
            flash.className = 'boss-defeat-flash';
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 600);
            const monsterNameKey = getMonsterNameKey(monster.name);
            const translatedName = i18n.t(monsterNameKey);
            showMilestone('BOSS ' + translatedName + ' ' + i18n.t('game.kill') + '! +' + formatGoldShort(reward) + ' ' + i18n.t('game.bossDefeated'));
        }

        killCount++;
        if (killCountEl) killCountEl.textContent = killCount;

        // Spawn next monster after delay
        setTimeout(() => {
            spawnMonster();
            updateDisplay();
        }, 500);
    }

    // === Hit Effects ===

    function showDamageNumber(damage) {
        if (!clickArea) return;
        const popup = document.createElement('div');
        popup.className = 'damage-float';
        if (damage >= clickValue * clickMultiplier * 3) popup.classList.add('crit');
        popup.textContent = '-' + formatGoldShort(damage);

        // Random position around center
        const offsetX = (Math.random() - 0.5) * 60;
        popup.style.left = (80 + offsetX) + 'px';
        popup.style.top = '30px';
        clickArea.appendChild(popup);
        setTimeout(() => popup.remove(), 800);
    }

    function shakeScreen() {
        if (!container) return;
        container.classList.remove('shake');
        void container.offsetWidth;
        container.classList.add('shake');
        setTimeout(() => container.classList.remove('shake'), 150);
    }

    function flashMonster() {
        if (!monsterEmojiEl || monsterDying) return;
        monsterEmojiEl.classList.remove('hit', 'knockback');
        void monsterEmojiEl.offsetWidth;
        monsterEmojiEl.classList.add('hit', 'knockback');
        setTimeout(() => {
            if (!monsterDying) {
                monsterEmojiEl.classList.remove('hit', 'knockback');
            }
        }, 200);
    }

    function spawnHitParticles() {
        if (!clickArea) return;
        const monster = MONSTERS[currentMonsterIndex];
        const colors = [monster.color, '#fbbf24', '#fff', monster.color, '#ef4444'];
        for (let i = 0; i < 8; i++) {
            const p = document.createElement('div');
            p.className = 'hit-particle';
            p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            p.style.left = '50%';
            p.style.top = '45%';
            const angle = Math.random() * Math.PI * 2;
            const dist = 40 + Math.random() * 70;
            p.style.setProperty('--px', Math.cos(angle) * dist + 'px');
            p.style.setProperty('--py', Math.sin(angle) * dist + 'px');
            clickArea.appendChild(p);
            setTimeout(() => p.remove(), 600);
        }
    }

    function spawnDeathParticles(monsterColor) {
        if (!clickArea) return;
        const colors = [monsterColor, '#fbbf24', '#ef4444', monsterColor, '#fff'];
        for (let i = 0; i < 16; i++) {
            const p = document.createElement('div');
            p.className = 'death-particle';
            p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            p.style.left = '50%';
            p.style.top = '45%';
            const angle = Math.random() * Math.PI * 2;
            const dist = 50 + Math.random() * 100;
            p.style.setProperty('--px', Math.cos(angle) * dist + 'px');
            p.style.setProperty('--py', Math.sin(angle) * dist + 'px');
            p.style.width = (4 + Math.random() * 6) + 'px';
            p.style.height = p.style.width;
            clickArea.appendChild(p);
            setTimeout(() => p.remove(), 800);
        }
    }

    function showSlashEffect() {
        if (!clickArea) return;
        const slash = document.createElement('div');
        slash.className = 'slash-effect';
        slash.style.left = '30px';
        slash.style.top = '25px';
        clickArea.appendChild(slash);
        setTimeout(() => slash.remove(), 500);
    }

    function showGoldEarnFloat(amount) {
        if (!clickArea) return;
        const el = document.createElement('div');
        el.className = 'gold-earn-float';
        el.textContent = '+' + formatGoldShort(amount) + ' G';
        el.style.left = '50%';
        el.style.top = '75%';
        el.style.transform = 'translateX(-50%)';
        clickArea.appendChild(el);
        setTimeout(() => el.remove(), 1000);
    }

    // Click
    function handleClick(e) {
        if (monsterDying) return;

        const baseClick = clickValue * clickMultiplier;
        const autoBonus = autoIncomePerSec * goldenTouchBonus;
        const damage = baseClick + autoBonus;

        totalClicks++;
        if (sfx) sfx.hit();
        damageMonster(damage, true);
        updateDisplay();
    }

    // Game Loop
    function startGameLoop() {
        setInterval(() => {
            const now = Date.now();
            const dt = (now - lastTickTime) / 1000;
            lastTickTime = now;

            // Auto DPS damages monster
            if (autoIncomePerSec > 0 && !monsterDying) {
                const autoDamage = autoIncomePerSec * dt * speedMultiplier;
                damageMonster(autoDamage, false);
            }

            updateDisplay();
            checkMilestones();

            if (now - lastSaveTime > 5000) {
                saveState();
                lastSaveTime = now;
            }
        }, 100);
    }

    // Income
    function recalculateAutoIncome() {
        let total = 0;
        for (const equip of EQUIPMENT) {
            const count = ownedEquipment[equip.id] || 0;
            if (count > 0) {
                total += equip.baseIncome * count;
            }
        }
        autoIncomePerSec = total * autoMultiplier;
    }

    // Equipment
    function getEquipmentCost(equip) {
        const count = ownedEquipment[equip.id] || 0;
        return Math.floor(equip.baseCost * Math.pow(equip.costMultiplier, count));
    }

    function buyEquipment(equipId) {
        const equip = EQUIPMENT.find(b => b.id === equipId);
        if (!equip) return;
        const cost = getEquipmentCost(equip);
        if (gold < cost) return;

        gold -= cost;
        ownedEquipment[equipId] = (ownedEquipment[equipId] || 0) + 1;
        if (sfx) sfx.place();
        recalculateAutoIncome();
        renderEquipment();
        updateDisplay();
    }

    function renderEquipment() {
        if (!equipmentList) return;
        equipmentList.innerHTML = EQUIPMENT.map(equip => {
            const count = ownedEquipment[equip.id] || 0;
            const cost = getEquipmentCost(equip);
            const income = equip.baseIncome * autoMultiplier * speedMultiplier;
            const canBuy = gold >= cost;
            const totalIncome = income * count;

            return `
                <div class="equip-card ${canBuy ? 'can-buy' : ''}" onclick="window._buyEquip('${equip.id}')">
                    <div class="equip-icon">${equip.icon}</div>
                    <div class="equip-info">
                        <div class="equip-name">${equip.name} <span class="equip-count">${count > 0 ? 'Lv.' + count : ''}</span></div>
                        <div class="equip-desc">${equip.description}</div>
                        <div class="equip-income">+${formatGoldShort(income)} DPS ${count > 0 ? '(합계: ' + formatGoldShort(totalIncome) + ')' : ''}</div>
                    </div>
                    <div class="equip-cost ${canBuy ? '' : 'expensive'}">
                        <span>🪙 ${formatGoldShort(cost)}</span>
                    </div>
                </div>`;
        }).join('');
    }

    // Skills
    function buySkill(skillId) {
        if (purchasedSkills[skillId]) return;
        const skill = SKILLS.find(u => u.id === skillId);
        if (!skill || gold < skill.cost) return;

        gold -= skill.cost;
        purchasedSkills[skillId] = true;

        if (sfx) sfx.levelUp();

        switch (skill.type) {
            case 'click':
                clickMultiplier *= skill.multiplier;
                break;
            case 'auto':
                autoMultiplier *= skill.multiplier;
                recalculateAutoIncome();
                break;
            case 'speed':
                speedMultiplier *= skill.multiplier;
                break;
            case 'golden':
                goldenTouchBonus = skill.multiplier;
                break;
        }

        renderSkills();
        updateDisplay();
    }

    function renderSkills() {
        if (!skillList) return;
        const available = SKILLS.filter(s => {
            if (purchasedSkills[s.id]) return true;
            return totalEarned >= (s.requires?.gold || 0);
        });

        skillList.innerHTML = available.map(skill => {
            const purchased = purchasedSkills[skill.id];
            const canBuy = !purchased && gold >= skill.cost;

            return `
                <div class="skill-card ${purchased ? 'purchased' : ''} ${canBuy ? 'can-buy' : ''}" onclick="window._buySkill('${skill.id}')">
                    <div class="skill-icon">${skill.icon}</div>
                    <div class="skill-info">
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-desc">${skill.desc}</div>
                    </div>
                    <div class="skill-cost ${purchased ? 'done' : canBuy ? '' : 'expensive'}">
                        ${purchased ? '✅ 습득' : '🪙 ' + formatGoldShort(skill.cost)}
                    </div>
                </div>`;
        }).join('');
    }

    // Display
    function updateDisplay() {
        if (goldDisplay) goldDisplay.textContent = formatGold(gold);

        const displayIncome = autoIncomePerSec * speedMultiplier;
        if (perSecDisplay) {
            const perSecSuffix = i18n.t('game.perSec');
            // Find and update only the number part, keep the i18n span
            const children = Array.from(perSecDisplay.children);
            perSecDisplay.textContent = formatGoldShort(displayIncome) + ' DPS' + perSecSuffix;
        }

        const rank = getRankForGold(totalEarned);
        if (titleDisplay) titleDisplay.textContent = rank.icon + ' ' + rank.title;

        // Stats
        const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
        set('stat-total-earned', formatGold(totalEarned));
        set('stat-total-clicks', totalClicks.toLocaleString());
        set('stat-click-power', formatGoldShort(clickValue * clickMultiplier));
        set('stat-equip-count', Object.values(ownedEquipment).reduce((s, c) => s + c, 0));
        const autoDPSSuffix = i18n.t('game.perSec');
        set('stat-auto-income', formatGoldShort(displayIncome) + autoDPSSuffix);
        set('stat-rank', rank.icon + ' ' + rank.title);
    }

    // Milestones
    function checkMilestones() {
        while (milestoneIndex < DUNGEON_MILESTONES.length && totalEarned >= DUNGEON_MILESTONES[milestoneIndex].amount) {
            showMilestone(DUNGEON_MILESTONES[milestoneIndex].message);
            milestoneIndex++;
        }
    }

    function showMilestone(message) {
        const toast = document.createElement('div');
        toast.className = 'milestone-toast';
        toast.innerHTML = `<span class="milestone-icon">⚔️</span> ${message}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Offline
    function calculateOfflineEarnings() {
        const savedTime = localStorage.getItem('dungeonClicker_lastTime');
        if (!savedTime || isNaN(parseInt(savedTime))) return;

        const offlineSeconds = Math.min((Date.now() - parseInt(savedTime)) / 1000, 43200);
        if (isNaN(offlineSeconds) || offlineSeconds < 0) return;
        if (offlineSeconds > 10 && autoIncomePerSec > 0) {
            const dps = autoIncomePerSec * speedMultiplier;
            const offlineDamageTotal = dps * offlineSeconds * 0.5;
            let remainingDamage = offlineDamageTotal;
            let offlineGold = 0;
            let offlineKills = 0;

            while (remainingDamage > 0 && offlineKills < 1000) {
                const mIdx = (killCount + offlineKills) % MONSTERS.length;
                const isBossCheck = ((killCount + offlineKills) > 0 && (killCount + offlineKills) % 10 === 0);
                const monster = MONSTERS[mIdx];
                let hp = getMonsterHP(monster, killCount + offlineKills);
                if (isBossCheck) hp *= 3;

                if (remainingDamage >= hp) {
                    remainingDamage -= hp;
                    const reward = getMonsterGoldReward(monster, killCount + offlineKills, isBossCheck);
                    offlineGold += reward;
                    offlineKills++;
                } else {
                    break;
                }
            }

            if (offlineGold > 0) {
                gold += offlineGold;
                totalEarned += offlineGold;
                killCount += offlineKills;
                if (killCountEl) killCountEl.textContent = killCount;

                const hours = Math.floor(offlineSeconds / 3600);
                const mins = Math.floor((offlineSeconds % 3600) / 60);
                // For offline display, keep simple format or translate hour/minute words
                const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
                showMilestone(`${i18n.t('game.offlineEarnings')} ${timeStr}: ${offlineKills}${i18n.t('game.monsterKill')} ${formatGold(offlineGold)} ${i18n.t('game.goldEarned')}! (50%)`);
            }
        }
    }

    // Save/Load
    function saveState() {
        try {
            localStorage.setItem('dungeonClicker', JSON.stringify({
                gold, totalEarned, totalClicks, clickValue,
                clickMultiplier, autoMultiplier, speedMultiplier, goldenTouchBonus,
                ownedEquipment, purchasedSkills, milestoneIndex,
                killCount, currentMonsterIndex
            }));
            localStorage.setItem('dungeonClicker_lastTime', Date.now().toString());
        } catch (e) {}
    }

    function loadState() {
        try {
            const d = JSON.parse(localStorage.getItem('dungeonClicker'));
            if (d) {
                gold = d.gold || 0;
                totalEarned = d.totalEarned || 0;
                totalClicks = d.totalClicks || 0;
                clickValue = d.clickValue || 1;
                clickMultiplier = d.clickMultiplier || 1;
                autoMultiplier = d.autoMultiplier || 1;
                speedMultiplier = d.speedMultiplier || 1;
                goldenTouchBonus = d.goldenTouchBonus || 0;
                ownedEquipment = d.ownedEquipment || {};
                purchasedSkills = d.purchasedSkills || {};
                milestoneIndex = d.milestoneIndex || 0;
                killCount = d.killCount || 0;
                currentMonsterIndex = d.currentMonsterIndex || 0;
            }
        } catch (e) {}
    }

    // Interstitial
    let _adInterval = null;
    function showInterstitialAd() {
        return new Promise(resolve => {
            const overlay = document.getElementById('interstitial-overlay');
            if (!overlay) { resolve(); return; }
            overlay.classList.remove('hidden');

            let count = 5;
            const countdownEl = overlay.querySelector('.countdown-number');
            const closeBtn = overlay.querySelector('.close-ad-btn');
            if (countdownEl) countdownEl.textContent = count;
            if (closeBtn) closeBtn.classList.add('hidden');

            if (_adInterval) clearInterval(_adInterval);
            _adInterval = setInterval(() => {
                count--;
                if (countdownEl) countdownEl.textContent = count;
                if (count <= 0) {
                    clearInterval(_adInterval);
                    _adInterval = null;
                    if (closeBtn) closeBtn.classList.remove('hidden');
                }
            }, 1000);

            const close = () => {
                if (_adInterval) { clearInterval(_adInterval); _adInterval = null; }
                overlay.classList.add('hidden');
                resolve();
            };
            if (closeBtn) closeBtn.onclick = close;
        });
    }

    // Premium
    async function showPremiumAnalysis() {
        if (totalEarned === 0 && totalClicks === 0) {
            alert(i18n.t('game.playMore'));
            return;
        }

        await showInterstitialAd();

        const rank = getRankForGold(totalEarned);
        const displayIncome = autoIncomePerSec * speedMultiplier;
        const clickPower = clickValue * clickMultiplier;
        const equipCount = Object.values(ownedEquipment).reduce((s, c) => s + c, 0);

        const topEquip = EQUIPMENT.filter(b => (ownedEquipment[b.id] || 0) > 0)
            .sort((a, b) => (ownedEquipment[b.id] * b.baseIncome) - (ownedEquipment[a.id] * a.baseIncome));
        const perSecSuffix = i18n.t('game.perSec');
        const topEquipHTML = topEquip.slice(0, 3).map(b =>
            `<div class="pa-item">${b.icon} ${b.name} (Lv.${ownedEquipment[b.id]}): ${formatGoldShort(b.baseIncome * ownedEquipment[b.id] * autoMultiplier)}${perSecSuffix}</div>`
        ).join('');

        const nextEquip = EQUIPMENT.find(b => (ownedEquipment[b.id] || 0) === 0);
        const suggestion = nextEquip
            ? `${i18n.t('game.nextEquip').split('을')[0]}을 ${nextEquip.name}"${i18n.t('game.nextEquip').split('을')[1]}`
            : i18n.t('game.allEquip');

        const nextRank = DUNGEON_RANKS.find(t => t.min > totalEarned);
        const rankProgress = nextRank ? `${i18n.t('game.nextRank')} ${formatGold(nextRank.min - totalEarned)} 골드` : i18n.t('game.maxRank');

        const currentMonster = MONSTERS[currentMonsterIndex];
        const monsterNameKey = currentMonster ? getMonsterNameKey(currentMonster.name) : '';
        const translatedMonsterName = currentMonster ? i18n.t(monsterNameKey) : '';
        const monsterInfo = currentMonster ? `${i18n.t('game.currentOpponent')}: ${currentMonster.emoji} ${translatedMonsterName}` : '';

        const premiumContent = document.getElementById('premium-content');
        if (premiumContent) {
            premiumContent.innerHTML = `
                <div class="pa-section">
                    <h3>⚔️ ${i18n.t('game.battleAnalysis')}</h3>
                    <div class="pa-item">${i18n.t('game.attackPower')}: ${formatGold(clickPower)} / ${i18n.t('game.clickPower')}</div>
                    <div class="pa-item">${i18n.t('game.autoDPS')}: ${formatGoldShort(displayIncome)}${perSecSuffix}</div>
                    <div class="pa-item">${i18n.t('game.ownedEquip')}: ${equipCount}개</div>
                    <div class="pa-item">${i18n.t('game.totalAttacks')}: ${totalClicks.toLocaleString()}회</div>
                    <div class="pa-item">${i18n.t('game.totalGoldEarned')}: ${formatGold(totalEarned)}</div>
                    <div class="pa-item">${i18n.t('game.monsterKilled')}: ${killCount}마리</div>
                    <div class="pa-item">${monsterInfo}</div>
                </div>
                <div class="pa-section">
                    <h3>🏆 ${i18n.t('game.topEquip')}</h3>
                    ${topEquipHTML || '<div class="pa-item">' + i18n.t('game.noEquip') + '</div>'}
                </div>
                <div class="pa-section">
                    <h3>📈 ${i18n.t('game.growthGuide')}</h3>
                    <div class="pa-item">${suggestion}</div>
                    <div class="pa-item">${rankProgress}</div>
                </div>
            `;
            premiumContent.classList.remove('hidden');
        }
    }

    // Reset
    function resetGame() {
        if (confirm(i18n.t('game.confirmReset'))) {
            localStorage.removeItem('dungeonClicker');
            localStorage.removeItem('dungeonClicker_lastTime');
            location.reload();
        }
    }

    // Events
    function setupEvents() {
        clickArea.addEventListener('click', handleClick);
        clickArea.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleClick(e);
        }, { passive: false });

        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
                btn.classList.add('active');
                const tab = btn.dataset.tab;
                document.getElementById('panel-' + tab)?.classList.add('active');
                activeTab = tab;
            });
        });

        const resetBtn = document.getElementById('btn-reset');
        if (resetBtn) resetBtn.addEventListener('click', resetGame);

        const shareBtn = document.getElementById('btn-share');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                const gameTitle = i18n.t('game.title');
                const text = `${gameTitle}: ${killCount}${i18n.t('game.monsterKill')} ${formatGold(totalEarned)} ${i18n.t('game.goldEarned2')}`;
                if (navigator.share) {
                    navigator.share({ title: gameTitle, text, url: location.href }).catch(() => {});
                } else {
                    navigator.clipboard.writeText(text + ' ' + location.href).then(() => {
                        showMilestone(i18n.t('game.linkCopied'));
                    }).catch(() => {});
                }
            });
        }

        window._buyEquip = buyEquipment;
        window._buySkill = buySkill;
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }

    init();
})();
