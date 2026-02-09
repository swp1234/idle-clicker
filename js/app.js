// Dungeon Clicker - Main Engine
(async function() {
    'use strict';

    // Hide loader when page fully loads
    window.addEventListener('load', () => {
        const loader = document.getElementById('app-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 300);
        }
    });

    // Initialize i18n with error handling
    try {
        await i18n.loadTranslations(i18n.getCurrentLanguage());
        i18n.updateUI();
    } catch (e) {
        console.warn('i18n load failed:', e.message);
    }

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
            // Re-render dynamic content after language change
            if (window._refreshUI) window._refreshUI();
        });
    });

    // Game state
    let gold = 0;
    let totalEarned = 0;
    let totalClicks = 0;
    let clickValue = 3;  // IMPROVED: Initial click value (was 1, now 3 for better early game feel)
    let clickMultiplier = 1;
    let autoMultiplier = 1;
    let speedMultiplier = 1;
    let goldenTouchBonus = 0;
    let autoIncomePerSec = 0;
    let ownedEquipment = {};
    let purchasedSkills = {};
    let skillLevels = {};
    let lastSaveTime = Date.now();
    let lastTickTime = Date.now();
    let milestoneIndex = 0;
    let activeTab = 'equipment';
    let setBonus = 0;  // 장비 세트 보너스 배수 (기본 1.0, 세트당 1.2)

    // Monster state
    let currentMonsterIndex = 0;
    let monsterHP = 0;
    let monsterMaxHP = 0;
    let killCount = 0;
    let isBoss = false;
    let monsterDying = false;
    let currentTier = 1;
    let ambientInterval = null;
    let clickCombo = 0;
    let comboTimeout = null;
    let totalCPS = 0;
    let cpsDisplay = null;
    let goldenMonsterActive = false;
    let goldenMonsterTimeout = null;
    let goldenMonsterCountdown = 10;
    let nextGoldenTime = 0;

    // Prestige state
    let prestigePoints = 0;
    let prestigeCount = 0;

    // Achievement state
    let achievements = {};
    let bossKills = 0;
    let goldenKills = 0;

    // Event System state
    let eventSystem = null;
    let activeEvent = null;
    let eventGoldRushMultiplier = 1;
    let eventMonsterHPMultiplier = 1;
    let eventEquipmentCostMultiplier = 1;
    let eventSkillExpMultiplier = 1;

    // Daily Missions state
    let dailyMissions = {
        lastReset: null,
        missions: [
            { id: 'kill_100', name: 'Kill 100 Monsters', target: 100, current: 0, reward: { gold: 1000, xp: 100 }, difficulty: 'easy', completed: false },
            { id: 'gold_10k', name: 'Earn 10,000 Gold', target: 10000, current: 0, reward: { gold: 2000, xp: 200 }, difficulty: 'normal', completed: false },
            { id: 'boss_1', name: 'Defeat 1 Boss', target: 1, current: 0, reward: { gold: 3000, xp: 300 }, difficulty: 'hard', completed: false }
        ]
    };

    // Pet System state
    const PET_DATA = {
        cat: { name: 'cat', emoji: '🐱', type: 'autoAttack', bonus: 0.01, description: 'petCatDesc' },
        dog: { name: 'dog', emoji: '🐕', type: 'goldBonus', bonus: 0.20, description: 'petDogDesc' },
        eagle: { name: 'eagle', emoji: '🦅', type: 'critChance', bonus: 0.15, description: 'petEagleDesc' },
        dragon: { name: 'dragon', emoji: '🐉', type: 'attackPower', bonus: 0.30, description: 'petDragonDesc' },
        unicorn: { name: 'unicorn', emoji: '🦄', type: 'allStats', bonus: 0.10, description: 'petUnicornDesc' }
    };
    let pets = {}; // { cat: {level: 1, unlocked: false}, ... }
    let activePet = null; // 'cat', 'dog', etc.
    let petLevels = {}; // { cat: 5, dog: 3, ... }

    // Initialize pet state
    Object.keys(PET_DATA).forEach(petName => {
        pets[petName] = { level: 1, unlocked: false };
        petLevels[petName] = 1;
    });

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
        // Validate critical DOM elements exist
        if (!clickArea) {
            console.error('Critical error: click-area element not found in DOM');
            return;
        }

        // Initialize event system
        eventSystem = new EventSystem();

        loadState();
        initAchievements();
        initDailyMissions();

        // Initialize and start event system after loading state
        if (eventSystem) {
            eventSystem.init();
        }

        recalculateAutoIncome();
        spawnMonster();
        calculateOfflineEarnings();
        updateDisplay();
        updatePrestigeDisplay();
        updateRankingUI();
        renderEquipment();
        renderSkills();
        renderAchievements();
        startGameLoop();
        setupEvents();

        // Onboarding hint for new users
        if (totalClicks === 0 && killCount === 0) {
            showTapHint();
        }

        // Start tutorial for new players
        setTimeout(() => {
            if (tutorial && !tutorial.isComplete && totalClicks === 0) {
                tutorial.start();
            }
        }, 500);
    }

    function showTapHint() {
        if (!dungeonStage) return;
        const hint = document.createElement('div');
        hint.className = 'tap-hint';
        hint.id = 'tap-hint';
        const tapText = i18n.t('game.tapHint') || 'TAP TO ATTACK!';
        hint.textContent = '👆 ' + tapText;
        dungeonStage.appendChild(hint);
    }

    function removeTapHint() {
        const hint = document.getElementById('tap-hint');
        if (hint) {
            hint.style.transition = 'opacity 0.5s';
            hint.style.opacity = '0';
            setTimeout(() => hint.remove(), 500);
        }
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

    let isTierBoss = false;

    function spawnMonster() {
        currentMonsterIndex = killCount % MONSTERS.length;
        const stageInfo = getStageInfo(killCount);

        // Boss logic: tier boss at stage 10 of each tier, mini boss at stage 5
        isTierBoss = stageInfo.isTierBoss;
        isBoss = stageInfo.isTierBoss || stageInfo.isMidBoss;

        const monster = MONSTERS[currentMonsterIndex];
        monsterMaxHP = getMonsterHP(monster, killCount);
        if (isTierBoss) {
            monsterMaxHP *= 10; // Tier boss: 10x HP
        } else if (isBoss) {
            monsterMaxHP *= 5;  // Mini boss: 5x HP
        }
        // Event: Monster Festival - reduce HP
        monsterMaxHP = Math.floor(monsterMaxHP * eventMonsterHPMultiplier);
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
        const bossLabel = isTierBoss
            ? (i18n.t('game.tierBossLabel') || 'TIER BOSS')
            : (i18n.t('game.bossLabel') || 'BOSS');
        const displayName = isBoss ? '[ ' + bossLabel + ' ] ' + translatedMonsterName : translatedMonsterName;
        if (monsterNameEl) {
            monsterNameEl.textContent = displayName;
            monsterNameEl.className = isBoss ? 'monster-name boss-name' : 'monster-name';
            if (isTierBoss) monsterNameEl.classList.add('tier-boss-name');
        }

        const level = Math.floor(killCount / MONSTERS.length) + 1;
        if (monsterLevelEl) monsterLevelEl.textContent = 'Lv.' + level;

        // Boss visual
        if (clickArea) {
            clickArea.classList.remove('boss', 'tier-boss');
            if (isTierBoss) {
                clickArea.classList.add('boss', 'tier-boss');
            } else if (isBoss) {
                clickArea.classList.add('boss');
            }
        }

        // Boss warning effect
        if (isBoss && dungeonStage) {
            dungeonStage.classList.add('boss-incoming');
            setTimeout(() => {
                dungeonStage.classList.remove('boss-incoming');
            }, 1000);
        }

        // Play boss appearance sound
        if (isBoss && sfx) {
            sfx.bossAppear();
        }

        // Apply visual theme
        applyMonsterVisuals(monster);

        // Update stage progress display
        updateStageDisplay(stageInfo);

        updateHPBar();
    }

    function updateStageDisplay(stageInfo) {
        const stageEl = document.getElementById('stage-progress');
        if (!stageEl) return;

        const cycleLabel = stageInfo.cycle > 1 ? ' NG+' + (stageInfo.cycle - 1) : '';
        const tierName = i18n.t('dungeon.' + stageInfo.tierTheme) || stageInfo.tierName;

        // 중간 체크포인트 표시 (5마리 처치 시)
        let midpointLabel = '';
        if (stageInfo.stage === 5) {
            midpointLabel = `<div style="font-size: 11px; color: var(--gold); margin-top: 2px; text-shadow: 0 0 8px var(--gold-glow);">⭐ ${i18n.t('game.halfway') || '절반 돌파!'}</div>`;
        }

        stageEl.innerHTML = `
            <div class="stage-tier">${stageInfo.tierIcon} ${tierName}${cycleLabel}</div>
            <div class="stage-bar-wrap">
                <div class="stage-bar-fill" style="width: ${stageInfo.stage * 10}%"></div>
                <span class="stage-bar-text">${stageInfo.stage} / 10</span>
            </div>
            ${midpointLabel}
        `;
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

        // Record for ranking system
        if (isClick) {
            window.lastHitDamage = Math.max(window.lastHitDamage || 0, damage);
        }

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
        let reward = getMonsterGoldReward(monster, killCount, isBoss, isTierBoss);
        let killedMonster = 'normal';

        // Golden Monster: 3배 보상
        if (goldenMonsterActive) {
            reward *= 3;
            goldenKills++;
            killedMonster = 'golden';
            endGoldenMonster();
        }

        // Event: Gold Rush bonus
        reward = Math.floor(reward * eventGoldRushMultiplier);

        // Pet: Gold bonus (dog: +20%)
        if (activePet === 'dog' && pets.dog.unlocked) {
            const petLevel = petLevels.dog || 1;
            const petLevelMultiplier = 1 + (petLevel - 1) * 0.05;
            const goldBonus = PET_DATA.dog.bonus * petLevelMultiplier;
            reward = Math.floor(reward * (1 + goldBonus));
        }

        // Pet: Allstats bonus (unicorn: +10% 골드)
        if (activePet === 'unicorn' && pets.unicorn.unlocked) {
            const petLevel = petLevels.unicorn || 1;
            const petLevelMultiplier = 1 + (petLevel - 1) * 0.05;
            const allBonus = PET_DATA.unicorn.bonus * petLevelMultiplier;
            reward = Math.floor(reward * (1 + allBonus));
        }

        gold += reward;
        totalEarned += reward;

        // Update daily mission progress for gold earning
        updateMissionProgress('gold_10k', reward);

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

        // Add dopamine kill effect
        if (window.effectsManager && clickArea) {
          const rect = clickArea.getBoundingClientRect();
          window.effectsManager.addMonsterKillEffect(rect.width / 2, rect.height / 2);
        }

        // Play sound effects
        if (sfx) {
            if (isTierBoss) {
                sfx.bossDefeat();
            } else if (isBoss) {
                sfx.levelUpNew();
            } else {
                sfx.explosion();
            }
            sfx.coinCollect();
        }

        // Tier Boss defeat: massive celebration with enhanced effects
        if (isTierBoss) {
            const flash = document.createElement('div');
            flash.className = 'boss-defeat-flash tier-boss-flash';
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 1000);

            // Intensive screen shake for tier boss
            if (container) {
                container.classList.remove('shake');
                void container.offsetWidth;
                container.classList.add('shake');
                setTimeout(() => container.classList.remove('shake'), 150);
                setTimeout(() => {
                    container.classList.add('shake');
                    setTimeout(() => container.classList.remove('shake'), 150);
                }, 200);
            }

            const stageInfo = getStageInfo(killCount);
            const tierName = i18n.t('dungeon.' + stageInfo.tierTheme) || stageInfo.tierName;
            const monsterNameKey = getMonsterNameKey(monster.name);
            const translatedName = i18n.t(monsterNameKey);
            const defeatText = i18n.t('game.bossDefeated') || 'BOSS DEFEATED';
            const rewardMsg = stageInfo.tierIcon + ' ' + tierName + ' ' + (i18n.t('game.tierCleared') || 'CLEARED') + '! ' + translatedName + ' +' + formatGoldShort(reward) + 'G';

            // 크게 표시되는 보상
            showMilestone(defeatText + '! ✨✨✨');
            setTimeout(() => showMilestone(rewardMsg), 400);

            if (window.effectsManager && clickArea) {
              const rect = clickArea.getBoundingClientRect();
              window.effectsManager.addMilestoneEffect('TIER CLEARED!', rect.width / 2, rect.height / 2);
            }
            // 대형 컨페티 폭발
            spawnMassiveConfetti();
            setTimeout(() => spawnMassiveConfetti(), 400);
        } else if (isBoss) {
            // Mini boss defeat - enhanced
            const flash = document.createElement('div');
            flash.className = 'boss-defeat-flash';
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 600);

            // Screen shake for boss
            if (container) {
                container.classList.remove('shake');
                void container.offsetWidth;
                container.classList.add('shake');
                setTimeout(() => container.classList.remove('shake'), 150);
            }

            const monsterNameKey = getMonsterNameKey(monster.name);
            const translatedName = i18n.t(monsterNameKey);
            const defeatText = i18n.t('game.bossDefeated') || 'BOSS DEFEATED!';
            showMilestone(defeatText + ' ' + translatedName + ' +' + formatGoldShort(reward) + 'G');

            if (window.effectsManager && clickArea) {
              const rect = clickArea.getBoundingClientRect();
              window.effectsManager.addMilestoneEffect('BOSS DEFEATED!', rect.width / 2, rect.height / 2);
            }
            // Regular confetti for mini boss
            spawnConfetti();
        }

        killCount++;
        if (isBoss) bossKills++;
        if (isTierBoss) bossKills++;
        if (killedMonster === 'golden') goldenKills++;

        // Update daily missions
        updateMissionProgress('kill_100', 1);
        if (isBoss || isTierBoss) {
            updateMissionProgress('boss_1', 1);
        }

        if (killCountEl) {
            const stageInfo = getStageInfo(killCount);
            killCountEl.innerHTML = `<span>${killCount}</span> <span>${stageInfo.stage}/${10}</span>`;
        }

        // Check achievements
        checkAchievements();

        // Spawn next monster after delay (longer for boss)
        const spawnDelay = isTierBoss ? 1000 : isBoss ? 700 : 500;
        setTimeout(() => {
            spawnMonster();
            updateDisplay();
        }, spawnDelay);
    }

    // === Hit Effects ===

    function showDamageNumber(damage) {
        if (!clickArea) return;
        const popup = document.createElement('div');
        popup.className = 'damage-float';
        const isCrit = damage >= clickValue * clickMultiplier * 3;
        if (isCrit) popup.classList.add('crit');
        popup.textContent = '-' + formatGoldShort(damage);

        // More varied position around center
        const offsetX = (Math.random() - 0.5) * 80;
        const offsetY = 20 + Math.random() * 30;
        popup.style.left = (80 + offsetX) + 'px';
        popup.style.top = offsetY + 'px';

        // Vary size based on damage relative to monster max HP
        const impactRatio = Math.min(damage / monsterMaxHP, 0.5);
        if (impactRatio > 0.1) {
            popup.style.fontSize = (22 + impactRatio * 16) + 'px';
        }

        clickArea.appendChild(popup);
        setTimeout(() => popup.remove(), 800);

        // Add dopamine click effect
        if (window.effectsManager) {
          const color = isCrit ? '#FF6600' : '#FFD700';
          window.effectsManager.addClickEffect(80 + offsetX, 80, damage, color, isCrit);
          if (isCrit) {
            window.effectsManager.addCriticalHitEffect(80 + offsetX, 80);
          }
        }

        // Play sound
        if (isCrit) {
          if (sfx) sfx.criticalHit();
        }
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

    // Helper: Calculate pet bonus multiplier
    function getPetBonusMultiplier() {
        if (!activePet || !pets[activePet] || !pets[activePet].unlocked) return 1;
        const petLevel = petLevels[activePet] || 1;
        const petLevelMultiplier = 1 + (petLevel - 1) * 0.05; // 레벨당 5% 증가

        const petInfo = PET_DATA[activePet];
        switch (petInfo.type) {
            case 'attackPower': // 드래곤: +30% 공격력
                return 1 + (petInfo.bonus * petLevelMultiplier);
            case 'allStats': // 유니콘: +10% 올스탯
                return 1 + (petInfo.bonus * petLevelMultiplier);
            default:
                return 1;
        }
    }

    // Click with dopamine enhancement
    function handleClick(e) {
        if (monsterDying || monsterHP <= 0) return;

        // Remove onboarding hint on first click
        if (totalClicks === 0) removeTapHint();

        const prestigeBonus = 1 + (prestigePoints * 0.15);  // IMPROVED: Stronger prestige bonus
        const petBonus = getPetBonusMultiplier();
        const baseClick = clickValue * clickMultiplier * prestigeBonus * petBonus;
        const autoBonus = autoIncomePerSec * goldenTouchBonus;
        const damage = Math.max(1, baseClick + autoBonus);

        totalClicks++;

        // Combo system
        clickCombo++;
        clearTimeout(comboTimeout);
        comboTimeout = setTimeout(() => { clickCombo = 0; }, 2000);

        // Show combo indicator every 5 clicks
        if (clickCombo > 1 && clickCombo % 5 === 0) {
            showComboIndicator('x' + clickCombo + '!');
        }

        if (sfx) sfx.hit();
        damageMonster(damage, true);
        updateDisplay();

        // Check click achievements
        checkAchievements();
    }

    // Combo display
    function showComboIndicator(text) {
        const indicator = document.createElement('div');
        indicator.className = 'combo-indicator';
        indicator.textContent = text;
        document.body.appendChild(indicator);
        setTimeout(() => indicator.remove(), 600);
    }

    // Golden Monster 타이머 업데이트
    function updateGoldenMonsterTimer() {
        if (!goldenMonsterActive) return;
        goldenMonsterCountdown--;
        if (goldenMonsterCountdown <= 0) {
            // Golden monster escaped
            showGoldenMonsterEscape();
            endGoldenMonster();
        }
    }

    function showGoldenMonsterEscape() {
        const msg = document.createElement('div');
        msg.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: rgba(251, 191, 36, 0.2); border: 2px solid #fbbf24;
            color: #fbbf24; padding: 20px 40px; border-radius: 12px;
            font-size: 18px; font-weight: 700; z-index: 60;
            text-shadow: 0 0 12px rgba(251, 191, 36, 0.8);
            animation: slideUp 0.5s ease forwards;
        `;
        msg.textContent = i18n.t('game.goldenEscape') || '⭐ GOLDEN MONSTER ESCAPED!';
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 2000);
    }

    function endGoldenMonster() {
        goldenMonsterActive = false;
        if (goldenMonsterTimeout) clearTimeout(goldenMonsterTimeout);
        if (monsterEmojiEl && !monsterDying) {
            monsterEmojiEl.style.filter = '';
        }
        if (clickArea) {
            clickArea.classList.remove('golden-monster');
        }
    }

    // Game Loop
    function startGameLoop() {
        let lastClickTime = Date.now();
        let clicksPerSecond = 0;

        setInterval(() => {
            const now = Date.now();
            const dt = (now - lastTickTime) / 1000;
            lastTickTime = now;

            // Update event system
            if (eventSystem) {
                eventSystem.update(now);
                // Update event banner timer every tick
                const countdown = document.getElementById('event-countdown');
                if (countdown && eventSystem.currentEvent) {
                    countdown.textContent = eventSystem.getRemainingTime();
                }
            }

            // Check for golden monster spawn
            if (!goldenMonsterActive && !monsterDying && now >= nextGoldenTime) {
                if (Math.random() < 0.05) { // 약 5% 확률
                    activateGoldenMonster();
                    nextGoldenTime = now + (120000 + Math.random() * 60000); // 2-3분
                }
            }

            // Update golden monster countdown
            if (goldenMonsterActive) {
                updateGoldenMonsterTimer();
            }

            // Auto DPS damages monster
            if (autoIncomePerSec > 0 && !monsterDying && monsterHP > 0) {
                const autoDamage = autoIncomePerSec * dt * speedMultiplier;
                if (autoDamage > 0) {
                    damageMonster(autoDamage, false);
                }
            }

            // Pet auto attack (cat pet: 1 click per second)
            if (activePet === 'cat' && pets.cat.unlocked && !monsterDying && monsterHP > 0) {
                const petLevel = petLevels.cat || 1;
                const petDamageMultiplier = 1 + (petLevel - 1) * 0.05; // 레벨당 5% 증가
                const prestigeBonus = 1 + (prestigePoints * 0.15);
                const petDamage = clickValue * clickMultiplier * prestigeBonus * petDamageMultiplier;

                // Auto attack every second (1000ms)
                let lastPetAttackTime = window._lastPetAttackTime || 0;
                if (now - lastPetAttackTime >= 1000) {
                    window._lastPetAttackTime = now;
                    if (petDamage > 0) {
                        damageMonster(petDamage, false);
                    }
                }
            }

            // Update CPS display
            if (clickCombo > 0) {
                clicksPerSecond = Math.round((clickCombo / Math.max(1, (Date.now() - lastClickTime) / 1000)) * 100) / 100;
            }
            updateCPSDisplay(clicksPerSecond);

            updateDisplay();
            checkMilestones();

            // Update dopamine effects
            if (window.effectsManager) {
                window.effectsManager.update(dt);
            }

            if (now - lastSaveTime > 5000) {
                saveState();
                lastSaveTime = now;

                // Update ranking system
                if (window.rankingSystem) {
                    const result = window.rankingSystem.updateRecords({
                        autoIncome: autoIncomePerSec,
                        killCount: killCount,
                        currentTier: currentTier,
                        gold: gold,
                        prestigeCount: prestigeCount,
                        lastHitDamage: window.lastHitDamage || 0
                    });

                    // Show notifications for new records
                    if (result.notifications.length > 0) {
                        result.notifications.forEach(notif => {
                            showRecordNotification(notif);
                        });
                    }

                    // Update ranking UI
                    updateRankingUI();
                }
            }
        }, 100);
    }

    function activateGoldenMonster() {
        goldenMonsterActive = true;
        goldenMonsterCountdown = 10;

        if (monsterEmojiEl) {
            // 황금 아우라 적용
            monsterEmojiEl.style.filter = `drop-shadow(0 0 20px #fbbf24) drop-shadow(0 0 40px rgba(251, 191, 36, 0.6)) brightness(1.2)`;
        }

        if (clickArea) {
            clickArea.classList.add('golden-monster');
        }

        // 화면 플래시
        const flash = document.createElement('div');
        flash.style.cssText = `
            position: fixed; inset: 0; pointer-events: none; z-index: 35;
            background: radial-gradient(circle, rgba(251, 191, 36, 0.5), transparent);
            animation: screenFlash 0.4s ease forwards;
        `;
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 400);

        // 출현 메시지
        const msg = document.createElement('div');
        msg.style.cssText = `
            position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%);
            background: rgba(251, 191, 36, 0.3); border: 3px solid #fbbf24;
            color: #fbbf24; padding: 16px 32px; border-radius: 12px;
            font-size: 20px; font-weight: 900; z-index: 60;
            text-shadow: 0 0 16px rgba(251, 191, 36, 0.8);
            animation: slideUp 0.5s ease forwards;
            letter-spacing: 2px;
        `;
        msg.textContent = '⭐ ' + (i18n.t('game.goldenAppear') || 'GOLDEN MONSTER') + ' ⭐';
        document.body.appendChild(msg);
        setTimeout(() => msg.remove(), 2000);

        if (sfx) sfx.goldenMonster();

        // 10초 타이머 카운트다운 UI
        const timerEl = document.createElement('div');
        timerEl.id = 'golden-timer';
        timerEl.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            font-size: 48px; font-weight: 900; color: #fbbf24;
            text-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
            z-index: 65; pointer-events: none;
        `;
        document.body.appendChild(timerEl);

        // 1초마다 카운트다운 표시
        const timerInterval = setInterval(() => {
            if (goldenMonsterActive && goldenMonsterCountdown > 0) {
                timerEl.textContent = goldenMonsterCountdown.toString();
            } else {
                clearInterval(timerInterval);
                timerEl.remove();
            }
        }, 100);

        // 10초 후 자동 종료
        if (goldenMonsterTimeout) clearTimeout(goldenMonsterTimeout);
        goldenMonsterTimeout = setTimeout(() => {
            endGoldenMonster();
            timerEl.remove();
        }, 10000);
    }

    // CPS Display
    function updateCPSDisplay(cps) {
        if (!cpsDisplay) {
            cpsDisplay = document.createElement('div');
            cpsDisplay.className = 'cps-display';
            document.body.appendChild(cpsDisplay);
        }
        if (clickCombo > 0) {
            cpsDisplay.textContent = cps + ' CPS';
            cpsDisplay.style.display = 'block';
        } else {
            cpsDisplay.style.display = 'none';
        }
    }

    // 세트 보너스 계산 (같은 등급 3개 이상 = 20% DPS +)
    function calculateSetBonus() {
        const gradeCounts = {
            common: 0, uncommon: 0, rare: 0, epic: 0, legendary: 0
        };

        for (const equip of EQUIPMENT) {
            const count = ownedEquipment[equip.id] || 0;
            if (count > 0) {
                const grade = EQUIPMENT_DEFS.find(e => e.id === equip.id)?.grade || 'common';
                gradeCounts[grade] += count;
            }
        }

        setBonus = 1.0;
        let activeSets = 0;
        for (const grade in gradeCounts) {
            if (gradeCounts[grade] >= 3) {
                setBonus *= 1.2;  // 각 세트당 20% 보너스
                activeSets++;
            }
        }

        return activeSets;  // 활성 세트 개수 반환
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
        const prestigeBonus = 1 + (prestigePoints * 0.15);  // IMPROVED: Stronger prestige bonus
        autoIncomePerSec = total * autoMultiplier * prestigeBonus * setBonus;
    }

    // Equipment
    function getEquipmentCost(equip) {
        const count = ownedEquipment[equip.id] || 0;
        const baseCost = Math.floor(equip.baseCost * Math.pow(equip.costMultiplier, count));
        return Math.floor(baseCost * eventEquipmentCostMultiplier);
    }

    function buyEquipment(equipId) {
        const equip = EQUIPMENT.find(b => b.id === equipId);
        if (!equip) return;
        const cost = getEquipmentCost(equip);
        if (gold < cost) return;

        gold -= cost;
        ownedEquipment[equipId] = (ownedEquipment[equipId] || 0) + 1;
        if (sfx) sfx.equipmentBuy();

        // Check set bonus before update
        const oldSets = calculateSetBonus();

        // Add dopamine upgrade effect
        if (window.effectsManager && clickArea) {
          const rect = clickArea.getBoundingClientRect();
          const equipName = getEquipName(equip);
          window.effectsManager.addUpgradeEffect(rect.width / 2, rect.height / 2, equipName);
          // Screen shake on upgrade
          if (container) {
            container.classList.add('shake');
            setTimeout(() => container.classList.remove('shake'), 150);
          }
          // Screen flash effect
          showScreenFlash();
          // Confetti effect
          spawnConfetti();
        }

        // Recalculate with new equipment
        calculateSetBonus();
        const equipDef = EQUIPMENT_DEFS.find(e => e.id === equipId);
        const grade = equipDef?.grade || 'common';
        const gradeName = EQUIPMENT_GRADES[grade]?.name || grade;

        // Check if set bonus completed
        const gradeCounts = {};
        for (const e of EQUIPMENT) {
            const cnt = ownedEquipment[e.id] || 0;
            if (cnt > 0) {
                const g = EQUIPMENT_DEFS.find(x => x.id === e.id)?.grade || 'common';
                gradeCounts[g] = (gradeCounts[g] || 0) + cnt;
            }
        }

        if (gradeCounts[grade] === 3) {
            // 새로운 세트 완성!
            const gradeKey = EQUIPMENT_GRADES[grade]?.key || 'equipment.common';
            const setMsg = i18n.t('equipment.setBonus') || 'SET BONUS! +20% DPS';
            showMilestone(setMsg + ' - ' + gradeName);
            if (sfx) sfx.levelUpNew();
        }

        recalculateAutoIncome();
        renderEquipment();
        updateDisplay();
    }

    // Screen flash effect
    function showScreenFlash() {
        const flash = document.createElement('div');
        flash.className = 'screen-flash';
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 400);
    }

    // Confetti burst
    function spawnConfetti() {
        const confettiCount = 30;
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.innerHTML = ['🎉', '⭐', '✨', '🌟'][Math.floor(Math.random() * 4)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = window.innerHeight / 2 + 'px';
            confetti.style.setProperty('--duration', (0.8 + Math.random() * 0.4) + 's');
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 1200);
        }
    }

    // 대형 컨페티 폭발 (보스 처치)
    function spawnMassiveConfetti() {
        const confettiCount = 60;
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.innerHTML = ['💥', '🎆', '✨', '⭐', '🌟', '💫'][Math.floor(Math.random() * 6)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = window.innerHeight / 2 + 'px';
            confetti.style.fontSize = (16 + Math.random() * 12) + 'px';
            confetti.style.setProperty('--duration', (1 + Math.random() * 0.8) + 's');
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 1800);
        }
    }

    function getEquipName(equip) {
        const key = 'equipment.' + equip.id + '.name';
        const translated = i18n.t(key);
        return translated !== key ? translated : equip.name;
    }

    function getEquipDesc(equip) {
        const key = 'equipment.' + equip.id + '.desc';
        const translated = i18n.t(key);
        return translated !== key ? translated : equip.description;
    }

    function renderEquipment() {
        if (!equipmentList) return;
        const totalLabel = i18n.t('game.total') || 'Total';

        // 등급별 카운트 계산 (세트 보너스 표시용)
        const gradeCounts = {};
        for (const equip of EQUIPMENT) {
            const cnt = ownedEquipment[equip.id] || 0;
            if (cnt > 0) {
                const equipDef = EQUIPMENT_DEFS.find(e => e.id === equip.id);
                const grade = equipDef?.grade || 'common';
                gradeCounts[grade] = (gradeCounts[grade] || 0) + cnt;
            }
        }

        equipmentList.innerHTML = EQUIPMENT.map(equip => {
            const equipDef = EQUIPMENT_DEFS.find(e => e.id === equip.id);
            const grade = equipDef?.grade || 'common';
            const gradeInfo = EQUIPMENT_GRADES[grade] || EQUIPMENT_GRADES.common;
            const count = ownedEquipment[equip.id] || 0;
            const cost = getEquipmentCost(equip);
            const income = equip.baseIncome * autoMultiplier * speedMultiplier * setBonus;
            const canBuy = gold >= cost;
            const totalIncome = income * count;

            // 세트 보너스 표시
            const gradeCount = gradeCounts[grade] || 0;
            const setIndicator = gradeCount >= 3 ? '✨ SET!' : (gradeCount > 0 ? `${gradeCount}/3` : '');

            return `
                <div class="equip-card ${canBuy ? 'can-buy' : ''} equip-grade-${grade}" onclick="window._buyEquip('${equip.id}')">
                    <div class="equip-border" style="border-color: ${gradeInfo.borderColor}; box-shadow: 0 0 12px ${gradeInfo.borderColor};">
                        <div class="equip-icon">${equip.icon}</div>
                        <div class="equip-info">
                            <div class="equip-name" style="color: ${gradeInfo.textColor};">
                                ${getEquipName(equip)}
                                <span class="equip-count">${count > 0 ? 'Lv.' + count : ''}</span>
                                <span class="equip-grade" style="color: ${gradeInfo.borderColor}; font-size: 11px; font-weight: bold;">${gradeInfo.name}</span>
                            </div>
                            <div class="equip-desc">${getEquipDesc(equip)}</div>
                            <div class="equip-income">+${formatGoldShort(income)} DPS ${count > 0 ? '(' + totalLabel + ': ' + formatGoldShort(totalIncome) + ')' : ''}</div>
                            ${setIndicator ? `<div class="equip-set-indicator">${setIndicator}</div>` : ''}
                        </div>
                        <div class="equip-cost ${canBuy ? '' : 'expensive'}">
                            <span>🪙 ${formatGoldShort(cost)}</span>
                        </div>
                    </div>
                </div>`;
        }).join('');
    }

    // Skills - 스킬 비용 계산
    function getSkillCost(skill, level) {
        const baseCost = skill.cost;
        return Math.floor(baseCost * Math.pow(skill.costMultiplier, level));
    }

    // 스킬 현재 레벨 가져오기
    function getSkillLevel(skillId) {
        return skillLevels[skillId] || 0;
    }

    // 스킬 효과값 계산
    function getSkillEffectValue(skill, level) {
        const baseMultiplier = skill.multiplier;
        return Math.pow(skill.effectMultiplier, level) * baseMultiplier;
    }

    // Skills - 레벨업 시스템
    function buySkill(skillId) {
        const skill = SKILLS.find(u => u.id === skillId);
        if (!skill) return;

        const currentLevel = getSkillLevel(skillId);
        if (currentLevel >= skill.maxLevel) return; // 최대 레벨 도달

        const cost = getSkillCost(skill, currentLevel);
        if (gold < cost) return;

        gold -= cost;
        skillLevels[skillId] = currentLevel + 1;
        purchasedSkills[skillId] = true;

        if (sfx) sfx.skillUnlock();

        // 스킬 효과 적용
        const newLevel = getSkillLevel(skillId);
        const newEffect = getSkillEffectValue(skill, newLevel);
        const oldEffect = newLevel > 1 ? getSkillEffectValue(skill, newLevel - 1) : 1;
        const effectBonus = newEffect / oldEffect;

        switch (skill.type) {
            case 'click':
                clickMultiplier = (clickMultiplier / oldEffect) * newEffect;
                break;
            case 'auto':
                autoMultiplier = (autoMultiplier / oldEffect) * newEffect;
                recalculateAutoIncome();
                break;
            case 'speed':
                speedMultiplier = (speedMultiplier / oldEffect) * newEffect;
                break;
            case 'golden':
                goldenTouchBonus = (goldenTouchBonus === 0 ? 1 : goldenTouchBonus) * effectBonus;
                break;
        }

        // Add dopamine skill unlock effect
        if (window.effectsManager && clickArea) {
          const rect = clickArea.getBoundingClientRect();
          window.effectsManager.addMilestoneEffect('SKILL LVL UP!', rect.width / 2, rect.height / 2);
          // Screen shake on skill unlock
          if (container) {
            container.classList.add('shake');
            setTimeout(() => container.classList.remove('shake'), 150);
          }
        }

        renderSkills();
        updateDisplay();
    }

    function renderSkills() {
        if (!skillList) return;
        const available = SKILLS.filter(s => {
            const level = getSkillLevel(s.id);
            if (level > 0) return true;
            return totalEarned >= (s.requires?.gold || 0);
        });

        skillList.innerHTML = available.map(skill => {
            const level = getSkillLevel(skill.id);
            const isMaxLevel = level >= skill.maxLevel;
            const cost = getSkillCost(skill, level);
            const canBuy = !isMaxLevel && gold >= cost;
            const skillName = i18n.t('skills.' + skill.id) || skill.name;
            const skillDesc = i18n.t('skills.' + skill.id + '_desc') || skill.desc;
            const maxLevelText = i18n.t('skill.maxLevel') || 'Max Level!';
            const progressPct = (level / skill.maxLevel) * 100;
            const levelDisplay = `Lv.${level}/${skill.maxLevel}`;

            return `
                <div class="skill-card ${level > 0 ? 'purchased' : ''} ${canBuy ? 'can-buy' : ''}" onclick="window._buySkill('${skill.id}')">
                    <div class="skill-icon">${skill.icon}</div>
                    <div class="skill-info">
                        <div class="skill-name">${skillName} <span class="skill-level">${levelDisplay}</span></div>
                        <div class="skill-desc">${skillDesc}</div>
                        <div class="skill-progress">
                            <div class="skill-progress-bar">
                                <div class="skill-progress-fill" style="width: ${progressPct}%"></div>
                            </div>
                        </div>
                    </div>
                    <div class="skill-cost ${isMaxLevel ? 'max-level' : canBuy ? '' : 'expensive'}">
                        ${isMaxLevel ? '⭐ ' + maxLevelText : '🪙 ' + formatGoldShort(cost)}
                    </div>
                </div>`;
        }).join('');
    }

    function getRankTitle(rank) {
        if (rank.i18nKey) {
            const translated = i18n.t(rank.i18nKey);
            return translated !== rank.i18nKey ? translated : rank.title;
        }
        return rank.title;
    }

    // Display
    function updateDisplay() {
        if (goldDisplay) goldDisplay.textContent = formatGold(gold);

        const displayIncome = autoIncomePerSec * speedMultiplier;
        if (perSecDisplay) {
            const perSecSuffix = i18n.t('game.perSec');
            perSecDisplay.textContent = formatGoldShort(displayIncome) + ' DPS' + perSecSuffix;
        }

        const rank = getRankForGold(totalEarned);
        const rankTitle = getRankTitle(rank);
        if (titleDisplay) titleDisplay.textContent = rank.icon + ' ' + rankTitle;

        // Stats
        const set = (id, val) => { const e = document.getElementById(id); if (e) e.textContent = val; };
        set('stat-total-earned', formatGold(totalEarned));
        set('stat-total-clicks', totalClicks.toLocaleString());
        set('stat-click-power', formatGoldShort(clickValue * clickMultiplier));
        set('stat-equip-count', Object.values(ownedEquipment).reduce((s, c) => s + c, 0));
        const autoDPSSuffix = i18n.t('game.perSec');
        set('stat-auto-income', formatGoldShort(displayIncome) + autoDPSSuffix);
        set('stat-rank', rank.icon + ' ' + rankTitle);

        // Update ranking display
        updateRankingUI();
    }

    // Milestones
    function checkMilestones() {
        while (milestoneIndex < DUNGEON_MILESTONES.length && totalEarned >= DUNGEON_MILESTONES[milestoneIndex].amount) {
            const milestone = DUNGEON_MILESTONES[milestoneIndex];
            const msg = milestone.i18nKey ? i18n.t(milestone.i18nKey) : milestone.message;
            showMilestone(msg);
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
        const savedTime = localStorage.getItem('dungeonClicker_lastOnline');
        if (!savedTime || isNaN(parseInt(savedTime))) return;

        const offlineSeconds = Math.min((Date.now() - parseInt(savedTime)) / 1000, 28800); // Max 8 hours
        if (isNaN(offlineSeconds) || offlineSeconds < 0) return;
        if (offlineSeconds > 60 && autoIncomePerSec > 0) { // Only show modal if offline > 1 minute
            const dps = autoIncomePerSec * speedMultiplier;
            const offlineDamageTotal = dps * offlineSeconds * 0.5; // 50% of normal DPS
            let remainingDamage = offlineDamageTotal;
            let offlineGold = 0;
            let offlineKills = 0;

            while (remainingDamage > 0 && offlineKills < 1000) {
                const totalKills = killCount + offlineKills;
                const mIdx = totalKills % MONSTERS.length;
                const offStageInfo = getStageInfo(totalKills);
                const isBossCheck = offStageInfo.isTierBoss || offStageInfo.isMidBoss;
                const isTierBossCheck = offStageInfo.isTierBoss;
                const monster = MONSTERS[mIdx];
                let hp = getMonsterHP(monster, totalKills);
                if (isTierBossCheck) hp *= 10;
                else if (isBossCheck) hp *= 5;

                if (remainingDamage >= hp) {
                    remainingDamage -= hp;
                    const reward = getMonsterGoldReward(monster, totalKills, isBossCheck, isTierBossCheck);
                    offlineGold += reward;
                    offlineKills++;
                } else {
                    break;
                }
            }

            if (offlineGold > 0 && offlineSeconds >= 60) {
                // Store offline earnings for modal
                localStorage.setItem('pendingOfflineEarnings', JSON.stringify({
                    gold: offlineGold,
                    kills: offlineKills,
                    seconds: offlineSeconds,
                    timestamp: Date.now()
                }));

                // Show offline earnings modal
                showOfflineEarningsModal(offlineGold, offlineKills, offlineSeconds);
            }
        }
    }

    // Show offline earnings modal
    function showOfflineEarningsModal(offlineGold, offlineKills, offlineSeconds) {
        const hours = Math.floor(offlineSeconds / 3600);
        const mins = Math.floor((offlineSeconds % 3600) / 60);
        const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;

        const overlay = document.createElement('div');
        overlay.className = 'offline-modal-overlay';
        overlay.id = 'offline-modal';

        const modal = document.createElement('div');
        modal.className = 'offline-modal';
        modal.innerHTML = `
            <div class="offline-modal-content">
                <div class="offline-modal-header">
                    <span class="offline-modal-icon">⏰</span>
                </div>
                <h2 class="offline-modal-title" data-i18n="offline.title">오프라인 수입</h2>
                <p class="offline-modal-away" data-i18n="offline.away">${timeStr} 동안 자리를 비웠습니다!</p>
                <div class="offline-modal-earnings">
                    <div class="offline-modal-gold">
                        💰 <span data-i18n="offline.earned">${formatGold(offlineGold)} 골드</span>
                    </div>
                    <div class="offline-modal-details">
                        ${offlineKills} ${i18n.t('game.kill') || '처치'}
                    </div>
                </div>
                <div class="offline-modal-buttons">
                    <button class="offline-btn offline-btn-collect" id="offline-collect-btn">
                        <span data-i18n="offline.collect">받기</span>
                    </button>
                    <button class="offline-btn offline-btn-double" id="offline-double-btn" onclick="window._showOfflineAd && window._showOfflineAd()">
                        <span data-i18n="offline.double">광고 보고 2배 받기</span>
                    </button>
                </div>
            </div>
        `;

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Update UI text
        i18n.updateUI();

        // Add animation
        setTimeout(() => modal.classList.add('show'), 10);

        // Collect button
        const collectBtn = document.getElementById('offline-collect-btn');
        if (collectBtn) {
            collectBtn.addEventListener('click', () => {
                claimOfflineEarnings(false);
                overlay.remove();
            });
        }
    }

    // Claim offline earnings
    function claimOfflineEarnings(doubled = false) {
        const pending = localStorage.getItem('pendingOfflineEarnings');
        if (!pending) return;

        try {
            const data = JSON.parse(pending);
            let claimGold = data.gold;

            if (doubled) {
                claimGold *= 2;
            }

            gold += claimGold;
            totalEarned += claimGold;
            killCount += data.kills;

            if (killCountEl) {
                const stageInfo = getStageInfo(killCount);
                killCountEl.innerHTML = `<span>${killCount}</span> <span>${stageInfo.stage}/${10}</span>`;
            }

            // Show milestone
            const hours = Math.floor(data.seconds / 3600);
            const mins = Math.floor((data.seconds % 3600) / 60);
            const timeStr = hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
            const multiplier = doubled ? ' x2!' : '';
            showMilestone(`${i18n.t('game.offlineEarnings')} ${timeStr}: +${formatGold(claimGold)} Gold${multiplier}`);

            // Show particle effect
            spawnOfflineGoldParticles(claimGold);

            // Update display
            updateDisplay();
            checkAchievements();

            // Clear pending
            localStorage.removeItem('pendingOfflineEarnings');
        } catch (e) {
            console.warn('Claim offline earnings failed:', e);
        }
    }

    // Spawn gold particles for offline claim
    function spawnOfflineGoldParticles(amount) {
        if (!clickArea) return;
        const count = Math.min(30, Math.floor(Math.log(amount) * 5));
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'offline-gold-particle';
            p.textContent = '💰';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = '50%';
            p.style.fontSize = (12 + Math.random() * 8) + 'px';
            const angle = (Math.PI * 2 * i) / count;
            const dist = 60 + Math.random() * 80;
            p.style.setProperty('--px', Math.cos(angle) * dist + 'px');
            p.style.setProperty('--py', Math.sin(angle) * dist + 'px');
            clickArea.appendChild(p);
            setTimeout(() => p.remove(), 1000);
        }
    }

    // === Event System ===
    class EventSystem {
        constructor() {
            this.events = [
                {
                    id: 'gold-rush',
                    name: 'event.goldRush',
                    icon: '💰',
                    color: '#fbbf24',
                    duration: 30,
                    description: 'event.goldRushDesc',
                    apply: () => {
                        eventGoldRushMultiplier = 2;
                    },
                    remove: () => {
                        eventGoldRushMultiplier = 1;
                    }
                },
                {
                    id: 'monster-fest',
                    name: 'event.monsterFest',
                    icon: '⚡',
                    color: '#ec4899',
                    duration: 30,
                    description: 'event.monsterFestDesc',
                    apply: () => {
                        eventMonsterHPMultiplier = 0.5;
                    },
                    remove: () => {
                        eventMonsterHPMultiplier = 1;
                    }
                },
                {
                    id: 'equip-sale',
                    name: 'event.equipSale',
                    icon: '🛍️',
                    color: '#06b6d4',
                    duration: 30,
                    description: 'event.equipSaleDesc',
                    apply: () => {
                        eventEquipmentCostMultiplier = 0.7;
                    },
                    remove: () => {
                        eventEquipmentCostMultiplier = 1;
                    }
                },
                {
                    id: 'exp-boost',
                    name: 'event.expBoost',
                    icon: '✨',
                    color: '#8b5cf6',
                    duration: 30,
                    description: 'event.expBoostDesc',
                    apply: () => {
                        eventSkillExpMultiplier = 2;
                    },
                    remove: () => {
                        eventSkillExpMultiplier = 1;
                    }
                }
            ];
            this.currentEvent = null;
            this.eventEndTime = 0;
            this.eventInterval = null;
            this.nextEventTime = 0;
        }

        init() {
            this.scheduleNextEvent();
        }

        scheduleNextEvent() {
            // Events occur every 5 minutes (300 seconds)
            const nextInterval = 300 + Math.random() * 60; // 5-6 minutes
            this.nextEventTime = Date.now() + (nextInterval * 1000);
        }

        update(now) {
            // Check if it's time to start a new event
            if (!this.currentEvent && now >= this.nextEventTime) {
                this.startRandomEvent();
            }

            // Check if current event should end
            if (this.currentEvent && now >= this.eventEndTime) {
                this.endEvent();
            }
        }

        startRandomEvent() {
            const randomEvent = this.events[Math.floor(Math.random() * this.events.length)];
            this.currentEvent = randomEvent;
            this.eventEndTime = Date.now() + (randomEvent.duration * 1000);

            randomEvent.apply();
            this.showEventBanner();

            // Play event sound
            if (sfx && sfx.eventStart) {
                sfx.eventStart();
            }
        }

        endEvent() {
            if (this.currentEvent) {
                this.currentEvent.remove();
                this.showEventEndBanner();

                // Play event end sound
                if (sfx && sfx.eventEnd) {
                    sfx.eventEnd();
                }

                this.currentEvent = null;
                this.scheduleNextEvent();
            }
        }

        showEventBanner() {
            if (!this.currentEvent) return;

            const existing = document.getElementById('event-banner');
            if (existing) existing.remove();

            const banner = document.createElement('div');
            banner.id = 'event-banner';
            banner.className = 'event-banner event-active';
            banner.style.borderColor = this.currentEvent.color;
            banner.style.backgroundColor = `${this.currentEvent.color}15`;

            const title = i18n.t(this.currentEvent.name) || this.currentEvent.name;
            const desc = i18n.t(this.currentEvent.description) || this.currentEvent.description;

            banner.innerHTML = `
                <div class="event-icon" style="color: ${this.currentEvent.color};">
                    ${this.currentEvent.icon}
                </div>
                <div class="event-content">
                    <div class="event-title">${title}</div>
                    <div class="event-desc">${desc}</div>
                    <div class="event-timer">
                        <span class="event-countdown" id="event-countdown">${this.currentEvent.duration}</span>s
                    </div>
                </div>
            `;

            // Insert after the ad banner
            const adBanner = document.querySelector('.ad-banner');
            if (adBanner) {
                adBanner.after(banner);
            } else {
                const container = document.querySelector('.container');
                if (container) container.insertBefore(banner, container.firstChild);
            }
        }

        showEventEndBanner() {
            if (!this.currentEvent) return;

            const banner = document.getElementById('event-banner');
            if (banner) {
                banner.classList.remove('event-active');
                banner.classList.add('event-inactive');

                setTimeout(() => banner.remove(), 500);
            }
        }

        getRemainingTime() {
            if (!this.currentEvent) return 0;
            const remaining = Math.max(0, this.eventEndTime - Date.now());
            return Math.ceil(remaining / 1000);
        }

        saveState() {
            return {
                currentEvent: this.currentEvent ? this.currentEvent.id : null,
                eventEndTime: this.eventEndTime,
                nextEventTime: this.nextEventTime
            };
        }

        loadState(data) {
            if (data && data.currentEvent) {
                const event = this.events.find(e => e.id === data.currentEvent);
                if (event && Date.now() < data.eventEndTime) {
                    this.currentEvent = event;
                    this.eventEndTime = data.eventEndTime;
                    event.apply();
                    this.showEventBanner();
                }
            }
            if (data && data.nextEventTime) {
                this.nextEventTime = data.nextEventTime;
            }
        }
    }

    // Save/Load (with enhanced error handling)
    function saveState() {
        try {
            if (typeof localStorage === 'undefined') return;
            const eventState = eventSystem ? eventSystem.saveState() : null;
            localStorage.setItem('dungeonClicker', JSON.stringify({
                gold, totalEarned, totalClicks, clickValue,
                clickMultiplier, autoMultiplier, speedMultiplier, goldenTouchBonus,
                ownedEquipment, purchasedSkills, skillLevels, milestoneIndex,
                killCount, currentMonsterIndex, currentTier, prestigePoints, prestigeCount, setBonus,
                bossKills, goldenKills,
                pets, activePet, petLevels,
                eventState
            }));
            localStorage.setItem('dungeonClicker_lastOnline', Date.now().toString());
            localStorage.setItem('achievements', JSON.stringify(achievements));
            localStorage.setItem('dungeonClicker_dailyMissions', JSON.stringify(dailyMissions));
        } catch (e) {
            console.warn('Save failed (storage unavailable):', e.message);
        }
    }

    function loadState() {
        try {
            if (typeof localStorage === 'undefined') return;
            const saved = localStorage.getItem('dungeonClicker');
            if (!saved) return;

            let d = null;
            try {
                d = JSON.parse(saved);
            } catch (parseErr) {
                console.warn('Save data corrupted, resetting:', parseErr.message);
                localStorage.removeItem('dungeonClicker');
                return;
            }

            if (d && typeof d === 'object') {
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
                skillLevels = d.skillLevels || {};
                milestoneIndex = d.milestoneIndex || 0;
                killCount = d.killCount || 0;
                currentMonsterIndex = d.currentMonsterIndex || 0;
                currentTier = d.currentTier || 1;
                prestigePoints = d.prestigePoints || 0;
                prestigeCount = d.prestigeCount || 0;
                setBonus = d.setBonus || 1.0;
                bossKills = d.bossKills || 0;
                goldenKills = d.goldenKills || 0;
                pets = d.pets || pets;
                activePet = d.activePet || null;
                petLevels = d.petLevels || petLevels;

                // Load event system state
                if (eventSystem && d.eventState) {
                    eventSystem.loadState(d.eventState);
                }
            }
            // Load achievements from localStorage
            const savedAchievements = localStorage.getItem('achievements');
            if (savedAchievements) {
                try {
                    achievements = JSON.parse(savedAchievements);
                } catch (e) {
                    console.warn('Achievements corrupted, resetting');
                    achievements = {};
                }
            }

            // Load daily missions from localStorage
            const savedDailyMissions = localStorage.getItem('dungeonClicker_dailyMissions');
            if (savedDailyMissions) {
                try {
                    dailyMissions = JSON.parse(savedDailyMissions);
                } catch (e) {
                    console.warn('Daily missions corrupted, resetting');
                    dailyMissions = getDailyMissionsTemplate();
                }
            }
        } catch (e) {
            console.warn('Load failed (storage unavailable):', e.message);
        }
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

    // Show offline ad and claim doubled earnings
    async function showOfflineAdAndDouble() {
        await showInterstitialAd();
        claimOfflineEarnings(true);

        const offlineModal = document.getElementById('offline-modal');
        if (offlineModal) offlineModal.remove();
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
            `<div class="pa-item">${b.icon} ${getEquipName(b)} (Lv.${ownedEquipment[b.id]}): ${formatGoldShort(b.baseIncome * ownedEquipment[b.id] * autoMultiplier)}${perSecSuffix}</div>`
        ).join('');

        const nextEquip = EQUIPMENT.find(b => (ownedEquipment[b.id] || 0) === 0);
        const nextEquipName = nextEquip ? getEquipName(nextEquip) : '';
        const suggestion = nextEquip
            ? `"${nextEquipName}" - ${i18n.t('game.nextEquip')}`
            : i18n.t('game.allEquip');

        const nextRank = DUNGEON_RANKS.find(t => t.min > totalEarned);
        const rankProgress = nextRank ? `${i18n.t('game.nextRank')} ${formatGold(nextRank.min - totalEarned)}` : i18n.t('game.maxRank');

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
                    <div class="pa-item">${i18n.t('game.ownedEquip')}: ${equipCount}</div>
                    <div class="pa-item">${i18n.t('game.totalAttacks')}: ${totalClicks.toLocaleString()}</div>
                    <div class="pa-item">${i18n.t('game.totalGoldEarned')}: ${formatGold(totalEarned)}</div>
                    <div class="pa-item">${i18n.t('game.monsterKilled')}: ${killCount}</div>
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
            localStorage.removeItem('dungeonClicker_lastOnline');
            localStorage.removeItem('dungeonClicker_lastTime');
            localStorage.removeItem('achievements');
            localStorage.removeItem('pendingOfflineEarnings');
            localStorage.removeItem('dungeonClicker_dailyMissions');
            if (window.rankingSystem) {
                window.rankingSystem.resetRecords();
            }
            location.reload();
        }
    }

    // Events
    function setupEvents() {
        // Ensure clickArea is available before binding
        const clickAreaElement = document.getElementById('click-area');
        if (!clickAreaElement) {
            console.error('click-area element not found');
            return;
        }

        clickAreaElement.addEventListener('click', handleClick);
        clickAreaElement.addEventListener('touchstart', (e) => {
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

                // Render achievements when tab opens
                if (tab === 'achievement') {
                    renderAchievements();
                }

                // Render pets when tab opens
                if (tab === 'pet') {
                    renderPets();
                }
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

        const prestigeBtn = document.getElementById('btn-prestige');
        if (prestigeBtn) {
            prestigeBtn.addEventListener('click', performPrestige);
        }

        window._buyEquip = buyEquipment;
        window._buySkill = buySkill;
        window._showPremium = showPremiumAnalysis;
        window._prestige = performPrestige;
        window._showOfflineAd = showOfflineAdAndDouble;
        window._claimMissionReward = claimMissionReward;
        window._refreshUI = function() {
            renderEquipment();
            renderSkills();
            renderPets();
            renderDailyMissions();
            updateDisplay();
            updatePrestigeDisplay();
            spawnMonster();
        };
    }

    // === Daily Missions System ===
    function initDailyMissions() {
        try {
            const saved = localStorage.getItem('dungeonClicker_dailyMissions');
            if (saved) {
                try {
                    dailyMissions = JSON.parse(saved);
                } catch (e) {
                    console.warn('Daily missions corrupted, resetting');
                    dailyMissions = getDailyMissionsTemplate();
                }
            } else {
                dailyMissions = getDailyMissionsTemplate();
            }

            // Check if day has changed (auto reset)
            const today = getDateString();
            if (dailyMissions.lastReset !== today) {
                resetDailyMissions();
            }
        } catch (e) {
            console.warn('Failed to init daily missions:', e);
            dailyMissions = getDailyMissionsTemplate();
        }
        saveDailyMissions();
        renderDailyMissions();
        startMissionsTimer();
    }

    function getDailyMissionsTemplate() {
        return {
            lastReset: getDateString(),
            missions: [
                { id: 'kill_100', name: 'Kill 100 Monsters', target: 100, current: 0, reward: { gold: 1000, xp: 100 }, difficulty: 'easy', completed: false, claimed: false },
                { id: 'gold_10k', name: 'Earn 10,000 Gold', target: 10000, current: 0, reward: { gold: 2000, xp: 200 }, difficulty: 'normal', completed: false, claimed: false },
                { id: 'boss_1', name: 'Defeat 1 Boss', target: 1, current: 0, reward: { gold: 3000, xp: 300 }, difficulty: 'hard', completed: false, claimed: false }
            ]
        };
    }

    function getDateString() {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    }

    function resetDailyMissions() {
        dailyMissions = getDailyMissionsTemplate();
        saveDailyMissions();
    }

    function updateMissionProgress(missionId, amount) {
        const mission = dailyMissions.missions.find(m => m.id === missionId);
        if (mission && !mission.completed) {
            mission.current = Math.min(mission.current + amount, mission.target);
            if (mission.current >= mission.target) {
                mission.completed = true;
                showMissionCompletedToast(mission);
                if (sfx && sfx.success) sfx.success();
            }
            saveDailyMissions();
            renderDailyMissions();
        }
    }

    function saveDailyMissions() {
        try {
            localStorage.setItem('dungeonClicker_dailyMissions', JSON.stringify(dailyMissions));
        } catch (e) {
            console.warn('Failed to save daily missions:', e);
        }
    }

    function showMissionCompletedToast(mission) {
        const toast = document.createElement('div');
        toast.className = 'mission-toast';
        toast.innerHTML = `📋 ${i18n.t('dailyMissions.missionCompleted') || 'Mission Completed!'} +${mission.reward.gold} Gold`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function renderDailyMissions() {
        const missionsList = document.getElementById('missions-list');
        if (!missionsList) return;

        missionsList.innerHTML = '';
        const completedCount = dailyMissions.missions.filter(m => m.completed).length;

        // Update progress
        const progressLabel = document.getElementById('progress-label');
        if (progressLabel) progressLabel.textContent = `${completedCount} / ${dailyMissions.missions.length}`;

        const progressFill = document.getElementById('missions-progress-fill');
        if (progressFill) {
            const percent = (completedCount / dailyMissions.missions.length) * 100;
            progressFill.style.width = percent + '%';
        }

        dailyMissions.missions.forEach(mission => {
            const card = document.createElement('div');
            card.className = `mission-card ${mission.completed ? 'completed' : ''} ${mission.difficulty}`;

            const progressPercent = (mission.current / mission.target) * 100;
            const difficultyIcon = mission.difficulty === 'easy' ? '⭐' : mission.difficulty === 'normal' ? '⭐⭐' : '⭐⭐⭐';

            const missionKey = `dailyMissions.${mission.id}`;
            const missionName = i18n.t(missionKey) || mission.name;

            card.innerHTML = `
                <div class="mission-header">
                    <div class="mission-title">
                        <span class="difficulty-icon">${difficultyIcon}</span>
                        <span class="mission-name">${missionName}</span>
                    </div>
                    ${mission.completed ? '<div class="mission-checkmark">✓</div>' : ''}
                </div>
                <div class="mission-progress">
                    <div class="progress-bar-wrap">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                        <span class="progress-text">${mission.current} / ${mission.target}</span>
                    </div>
                </div>
                <div class="mission-rewards">
                    <span class="reward-badge">💰 +${mission.reward.gold}</span>
                    <span class="reward-badge">⭐ +${mission.reward.xp}</span>
                </div>
                ${mission.completed && !mission.claimed ?
                    `<button class="claim-btn" onclick="window._claimMissionReward('${mission.id}')"><span data-i18n="dailyMissions.claim">수령</span></button>`
                    : mission.claimed ? '<div class="claimed-badge"><span data-i18n="dailyMissions.claimed">수령됨</span></div>' : ''}
            `;

            missionsList.appendChild(card);
        });

        // Update daily bonus info
        const allCompleted = dailyMissions.missions.every(m => m.completed && m.claimed);
        const bonusGold = document.getElementById('bonus-gold');
        const bonusXp = document.getElementById('bonus-xp');
        if (bonusGold) bonusGold.textContent = dailyMissions.missions.reduce((sum, m) => sum + m.reward.gold, 0);
        if (bonusXp) bonusXp.textContent = dailyMissions.missions.reduce((sum, m) => sum + m.reward.xp, 0);
    }

    function claimMissionReward(missionId) {
        const mission = dailyMissions.missions.find(m => m.id === missionId);
        if (!mission || !mission.completed || mission.claimed) return;

        mission.claimed = true;
        gold += mission.reward.gold;
        totalEarned += mission.reward.gold;

        saveDailyMissions();
        renderDailyMissions();
        updateDisplay();

        const toast = document.createElement('div');
        toast.className = 'reward-toast';
        toast.textContent = `✓ ${mission.reward.gold} ${i18n.t('game.goldEarned') || 'Gold Earned!'}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2000);
    }

    function startMissionsTimer() {
        setInterval(() => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);

            const diff = tomorrow - now;
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            const timerValue = document.getElementById('timer-value');
            if (timerValue) {
                timerValue.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }

            // Check if day changed
            const today = getDateString();
            if (dailyMissions.lastReset !== today) {
                resetDailyMissions();
            }
        }, 1000);
    }

    // === Achievement System ===
    function initAchievements() {
        // Load achievements from localStorage
        const saved = localStorage.getItem('achievements');
        if (saved) {
            try {
                achievements = JSON.parse(saved);
            } catch (e) {
                achievements = {};
            }
        }
        // Initialize all achievements as false if not loaded
        if (!achievements) achievements = {};
        ACHIEVEMENTS.forEach(ach => {
            if (!(ach.id in achievements)) {
                achievements[ach.id] = false;
            }
        });
    }

    function checkAchievements() {
        if (!ACHIEVEMENTS) return;

        ACHIEVEMENTS.forEach(ach => {
            if (!achievements[ach.id]) {
                try {
                    if (ach.condition && ach.condition()) {
                        achievements[ach.id] = true;
                        showAchievementToast(ach);
                        if (sfx && sfx.success) sfx.success();
                    }
                } catch (e) {
                    // Silent fail for condition checks
                }
            }
        });
    }

    function showAchievementToast(achievement) {
        const toast = document.createElement('div');
        toast.className = 'achievement-toast';
        const name = i18n.t(achievement.key) || achievement.name;
        toast.textContent = `🏆 ${i18n.t('game.achievementUnlocked') || 'Achievement Unlocked!'} ${name}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    function renderAchievements() {
        const achievementList = document.getElementById('achievement-list');
        if (!achievementList || !ACHIEVEMENTS) return;

        achievementList.innerHTML = '';
        let unlockedCount = 0;

        ACHIEVEMENTS.forEach(ach => {
            const isUnlocked = achievements[ach.id];
            if (isUnlocked) unlockedCount++;

            const card = document.createElement('div');
            card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;

            const name = i18n.t(ach.key) || ach.name;
            const desc = i18n.t(ach.descKey) || ach.desc;

            card.innerHTML = `
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-name">${name}</div>
                <div class="achievement-desc">${desc}</div>
                ${isUnlocked ? '<div class="achievement-checkmark">✓</div>' : ''}
            `;

            achievementList.appendChild(card);
        });

        // Update progress bar
        const progressFill = document.getElementById('achievement-progress-fill');
        const progressPercent = (unlockedCount / ACHIEVEMENTS.length) * 100;
        if (progressFill) {
            progressFill.style.width = progressPercent + '%';
        }

        const counter = document.getElementById('achievement-counter');
        if (counter) {
            counter.textContent = `${unlockedCount} / ${ACHIEVEMENTS.length}`;
        }
    }

    // === Pet System ===
    function renderPets() {
        const petList = document.getElementById('pet-list');
        const activePetDisplay = document.getElementById('active-pet-emoji');
        const activePetName = document.getElementById('active-pet-name');
        const activePetLevel = document.getElementById('active-pet-level');
        const activePetBonus = document.getElementById('active-pet-bonus');

        if (!petList) return;

        // Update active pet display
        if (activePet && pets[activePet] && pets[activePet].unlocked) {
            const petInfo = PET_DATA[activePet];
            activePetDisplay.textContent = petInfo.emoji;
            activePetName.textContent = i18n.t(`pet.${activePet}`) || petInfo.name;
            const level = petLevels[activePet] || 1;
            activePetLevel.textContent = `${i18n.t('pet.level') || 'Level'}: ${level}`;
            const levelMultiplier = 1 + (level - 1) * 0.05;
            const bonusPercent = Math.round(petInfo.bonus * levelMultiplier * 100);
            activePetBonus.textContent = `${petInfo.emoji} +${bonusPercent}%`;
        } else {
            activePetDisplay.textContent = '🐱';
            activePetName.textContent = i18n.t('pet.none') || 'None';
            activePetLevel.textContent = '';
            activePetBonus.textContent = '';
        }

        // Render pet cards
        petList.innerHTML = '';
        Object.entries(PET_DATA).forEach(([petKey, petInfo]) => {
            const petState = pets[petKey];
            const level = petLevels[petKey] || 1;
            const isUnlocked = petState.unlocked;
            const isActive = activePet === petKey;

            const card = document.createElement('div');
            card.className = `pet-card ${isActive ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}`;

            const levelMultiplier = 1 + (level - 1) * 0.05;
            const bonusPercent = Math.round(petInfo.bonus * levelMultiplier * 100);

            let levelUpCost = 10000 * Math.pow(1.5, level - 1);
            const canLevelUp = isUnlocked && gold >= levelUpCost && level < 10;

            let bonusText = '';
            switch (petInfo.type) {
                case 'autoAttack':
                    bonusText = `${i18n.t('pet.autoAttack') || 'Auto Attack'}: 1/sec`;
                    break;
                case 'goldBonus':
                    bonusText = `${i18n.t('pet.goldBonus') || 'Gold Bonus'}: +${bonusPercent}%`;
                    break;
                case 'critChance':
                    bonusText = `${i18n.t('pet.critChance') || 'Crit Chance'}: +${bonusPercent}%`;
                    break;
                case 'attackPower':
                    bonusText = `${i18n.t('pet.attackPower') || 'Attack Power'}: +${bonusPercent}%`;
                    break;
                case 'allStats':
                    bonusText = `${i18n.t('pet.allStats') || 'All Stats'}: +${bonusPercent}%`;
                    break;
            }

            const progressPercent = ((level - 1) / 9) * 100;

            card.innerHTML = `
                <div class="pet-emoji">${petInfo.emoji}</div>
                <div class="pet-info">
                    <div class="pet-name">${i18n.t(`pet.${petKey}`) || petInfo.name}</div>
                    <div class="pet-stats">
                        <div>${bonusText}</div>
                        ${isUnlocked ? `<div>${i18n.t('pet.level') || 'Level'}: ${level}/10</div>` : '<div>' + (i18n.t('pet.locked') || 'Locked') + '</div>'}
                    </div>
                    <div class="pet-bonus">${i18n.t(`pet.${petInfo.description}`) || ''}</div>
                    ${isUnlocked ? `<div class="pet-level-bar"><div class="pet-level-fill" style="width: ${progressPercent}%"></div></div>` : ''}
                </div>
                <div class="pet-actions">
                    ${!isUnlocked && gold >= 50000 ? `<button class="pet-btn select" onclick="window._buyPet('${petKey}')">${i18n.t('pet.unlock') || 'Unlock'}</button>` : ''}
                    ${isUnlocked && !isActive ? `<button class="pet-btn select" onclick="window._selectPet('${petKey}')">${i18n.t('pet.select') || 'Select'}</button>` : ''}
                    ${isActive ? `<button class="pet-btn select" style="background: rgba(52, 211, 153, 0.3);">${i18n.t('pet.active') || 'Active'}</button>` : ''}
                    ${isUnlocked && level < 10 ? `<button class="pet-btn levelup ${canLevelUp ? '' : 'disabled'}" onclick="window._levelUpPet('${petKey}')" ${canLevelUp ? '' : 'disabled'}>${i18n.t('pet.levelUp') || 'Level Up'} ${formatGoldShort(levelUpCost)}</button>` : ''}
                </div>
            `;

            petList.appendChild(card);
        });
    }

    function buyPet(petKey) {
        const cost = 50000;
        if (gold < cost) {
            showMilestone(i18n.t('pet.insufficientGold') || 'Insufficient gold!');
            return;
        }

        gold -= cost;
        pets[petKey].unlocked = true;
        if (!activePet) {
            activePet = petKey;
        }
        saveState();
        renderPets();
        showMilestone(i18n.t(`pet.${petKey}`) + ' ' + (i18n.t('pet.unlocked') || 'unlocked!'));
    }

    function selectPet(petKey) {
        if (pets[petKey] && pets[petKey].unlocked) {
            activePet = petKey;
            saveState();
            renderPets();
            showMilestone(i18n.t(`pet.${petKey}`) + ' ' + (i18n.t('pet.selected') || 'selected!'));
        }
    }

    function levelUpPet(petKey) {
        if (!pets[petKey] || !pets[petKey].unlocked) return;

        const level = petLevels[petKey] || 1;
        if (level >= 10) return;

        const cost = 10000 * Math.pow(1.5, level - 1);
        if (gold < cost) {
            showMilestone(i18n.t('pet.insufficientGold') || 'Insufficient gold!');
            return;
        }

        gold -= cost;
        petLevels[petKey] = level + 1;
        pets[petKey].level = level + 1;
        saveState();
        renderPets();
        showMilestone(i18n.t(`pet.${petKey}`) + ` Lv.${level + 1}!`);
    }

    // === Prestige System ===
    function getPrestigePointsAtTier(tier) {
        const tiers = [0, 5, 12, 25, 50, 85, 140];  // IMPROVED: Much more generous prestige rewards for faster re-growth
        return tier >= tiers.length ? tiers[tiers.length - 1] : tiers[tier];
    }

    function updatePrestigeDisplay() {
        const prestigePointsEl = document.getElementById('prestige-points');
        const prestigeCountEl = document.getElementById('prestige-count');
        const prestigeBonusEl = document.getElementById('prestige-bonus');
        const nextPrestigeEl = document.getElementById('next-prestige-points');
        const prestigeBtnEl = document.getElementById('btn-prestige');
        const prestigeRequireEl = document.getElementById('prestige-require-text');

        if (prestigePointsEl) prestigePointsEl.textContent = prestigePoints.toString();
        if (prestigeCountEl) prestigeCountEl.textContent = prestigeCount.toString();

        const bonusMultiplier = 1 + (prestigePoints * 0.15);  // IMPROVED: Stronger prestige bonus (+15% per point vs 10%)
        if (prestigeBonusEl) {
            prestigeBonusEl.textContent = '+' + (prestigePoints * 15) + '%';  // Display updated bonus
        }

        const nextPoints = getPrestigePointsAtTier(currentTier);
        if (nextPrestigeEl) nextPrestigeEl.textContent = nextPoints.toString();

        const canPrestige = currentTier >= 5;
        if (prestigeBtnEl) {
            prestigeBtnEl.disabled = !canPrestige;
        }

        if (prestigeRequireEl) {
            if (canPrestige) {
                prestigeRequireEl.textContent = i18n.t('game.prestigeDesc') || 'Reset all progress and gain permanent bonuses';
            } else {
                prestigeRequireEl.textContent = i18n.t('game.prestigeRequire') || 'Tier 5 or higher to prestige';
            }
        }
    }

    function performPrestige() {
        if (currentTier < 5) {
            alert(i18n.t('game.prestigeRequire') || 'You cannot prestige yet!');
            return;
        }

        const confirm_msg = i18n.t('game.prestigeConfirm') || 'Are you sure you want to prestige? All progress will be reset!';
        if (!confirm(confirm_msg)) return;

        // Get prestige points for this tier
        const earnedPoints = getPrestigePointsAtTier(currentTier);
        prestigePoints += earnedPoints;
        prestigeCount += 1;

        // Check prestige achievements
        checkAchievements();

        // Play prestige sound
        if (sfx) sfx.prestige();

        // Apply bonuses based on prestige count
        let startingGold = 0;
        let clickMultiplierBonus = 1;
        let autoDPSBonus = 0;

        if (prestigeCount >= 1) startingGold = 100;
        if (prestigeCount >= 3) {
            startingGold = 500;
            clickMultiplierBonus = 2;
        }
        if (prestigeCount >= 5) {
            startingGold = 2000;
            autoDPSBonus = autoIncomePerSec > 0 ? 1 : 0;
        }
        if (prestigeCount >= 10) {
            startingGold *= 2;
            clickMultiplierBonus *= 2;
            if (autoDPSBonus > 0) autoDPSBonus *= 2;
        }

        // Play prestige animation
        playPrestigeAnimation();

        // Reset game state (but keep prestige points and count)
        setTimeout(() => {
            gold = startingGold;
            totalEarned = startingGold;
            totalClicks = 0;
            clickValue = 1 * clickMultiplierBonus;
            clickMultiplier = 1;
            autoMultiplier = 1 + autoDPSBonus;
            speedMultiplier = 1;
            goldenTouchBonus = 0;
            ownedEquipment = {};
            purchasedSkills = {};
            skillLevels = {};
            milestoneIndex = 0;
            killCount = 0;
            currentMonsterIndex = 0;
            clickCombo = 0;
            goldenMonsterActive = false;

            recalculateAutoIncome();
            spawnMonster();
            updateDisplay();
            updatePrestigeDisplay();
            renderEquipment();
            renderSkills();
            saveState();

            // Show prestige reward toast
            const rewardMsg = i18n.t('game.prestige') + ' +' + earnedPoints + '포인트';
            showMilestone(rewardMsg || 'PRESTIGED! +' + earnedPoints + ' Points');
        }, 1500);
    }

    function playPrestigeAnimation() {
        // Whiteout effect
        const whiteout = document.createElement('div');
        whiteout.className = 'prestige-whiteout';
        document.body.appendChild(whiteout);

        // Prestige text
        setTimeout(() => {
            const text = document.createElement('div');
            text.className = 'prestige-text';
            text.textContent = 'PRESTIGE!';
            document.body.appendChild(text);

            // Confetti
            createPrestigeConfetti();

            // Clean up
            setTimeout(() => {
                whiteout.remove();
                text.remove();
            }, 2000);
        }, 750);
    }

    function createPrestigeConfetti() {
        const colors = ['#8b5cf6', '#ef4444', '#fbbf24', '#34d399', '#06b6d4'];
        const count = 50;

        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'prestige-confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '50%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (Math.random() * 8 + 4) + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.borderRadius = '50%';
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 2000);
        }
    }

    // Ranking System UI Functions
    function updateRankingUI() {
        if (!window.rankingSystem) return;

        const rankInfo = window.rankingSystem.getRankInfo(killCount);
        const records = window.rankingSystem.getPersonalRecordsData();

        // Update Rank Badge
        const rankIcon = document.getElementById('rank-icon');
        const rankName = document.getElementById('rank-name');
        if (rankIcon) rankIcon.textContent = rankInfo.icon;
        if (rankName) {
            const rankKey = 'ranking.rank' + rankInfo.rank;
            rankName.textContent = i18n.t(rankKey) || rankInfo.rank;
        }

        // Update Rank Progress
        const progressFill = document.getElementById('rank-progress-fill');
        const progressText = document.getElementById('rank-progress-text');
        if (progressFill) progressFill.style.width = rankInfo.progress + '%';
        if (progressText) {
            if (rankInfo.isMaxRank) {
                progressText.textContent = i18n.t('ranking.maxRank') || 'MAX RANK';
            } else {
                progressText.textContent = `${rankInfo.currentKills} / ${rankInfo.nextThreshold}`;
            }
        }

        // Update Records
        const updateRecord = (id, dateName, record) => {
            const valEl = document.getElementById(id);
            const dateEl = document.getElementById(dateName);
            if (valEl) valEl.textContent = record.formatted;
            if (dateEl) dateEl.textContent = window.rankingSystem.formatDate(record.timestamp);
        };

        updateRecord('record-dps', 'record-dps-date', records.highestDPS);
        updateRecord('record-kills', 'record-kills-date', records.mostKills);
        updateRecord('record-tier', 'record-tier-date', records.highestTier);
        updateRecord('record-gold', 'record-gold-date', records.maxGoldHeld);
        updateRecord('record-prestige', 'record-prestige-date', records.totalPrestige);
        updateRecord('record-hit', 'record-hit-date', records.maxSingleHit);
    }

    function showRecordNotification(notif) {
        const toast = document.createElement('div');
        toast.className = 'record-toast';
        toast.innerHTML = `<span>${notif.icon}</span> ${notif.message}`;
        document.body.appendChild(toast);

        // Auto-remove
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // Ensure all init happens after DOM is loaded
    function safeInit() {
        try {
            init();
        } catch (e) {
            console.error('Initialization error:', e);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', safeInit);
    } else {
        safeInit();
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }

    // Global error handler
    window.addEventListener('error', (e) => {
        console.warn('Caught error:', e.message, e.stack);
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.warn('Unhandled promise rejection:', e.reason);
    });
})();
