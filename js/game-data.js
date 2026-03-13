// Dungeon Clicker - Game Data

// === EQUIPMENT GRADES (5등급) ===
const EQUIPMENT_GRADES = {
    common: { name: '일반', key: 'equipment.common', color: '#e0e0e0', borderColor: '#808080', textColor: '#333' },      // 흰색 테두리
    uncommon: { name: '고급', key: 'equipment.uncommon', color: '#16a34a', borderColor: '#16a34a', textColor: '#fff' },    // 초록 테두리
    rare: { name: '희귀', key: 'equipment.rare', color: '#0ea5e9', borderColor: '#0ea5e9', textColor: '#fff' },           // 파랑 테두리
    epic: { name: '전설', key: 'equipment.epic', color: '#7c3aed', borderColor: '#7c3aed', textColor: '#fff' },           // 보라 테두리
    legendary: { name: '신화', key: 'equipment.legendary', color: '#f97316', borderColor: '#f97316', textColor: '#fff' }  // 주황 테두리
};

// === EQUIPMENT (100 items across 10 tiers) ===
const EQUIPMENT_DEFS = [
    // ═══ Tier 1: 마을 주변 (Village) ═══
    { id: 'wooden_sword',   name: '나무 검',         icon: '🗡️', baseCost: 3,      baseIncome: 1,     costMul: 1.10, desc: '모험의 시작, 첫 번째 무기', ally: null, grade: 'common' },
    { id: 'leather_shield', name: '가죽 방패',       icon: '🛡️', baseCost: 6,      baseIncome: 1.5,   costMul: 1.10, desc: '기본적인 방어력을 제공', ally: null, grade: 'common' },
    { id: 'iron_dagger',    name: '철 단검',         icon: '🔪', baseCost: 12,     baseIncome: 3,     costMul: 1.11, desc: '빠른 연속 공격이 가능', ally: null, grade: 'common' },
    { id: 'iron_helm',      name: '철 투구',         icon: '⛑️', baseCost: 28,     baseIncome: 6,     costMul: 1.11, desc: '머리를 보호하는 철 투구', ally: null, grade: 'uncommon' },
    { id: 'iron_armor',     name: '철 갑옷',         icon: '⚔️', baseCost: 65,     baseIncome: 13,    costMul: 1.12, desc: '단단한 철로 제련된 갑옷', ally: null, grade: 'uncommon' },
    { id: 'steel_sword',    name: '강철 장검',       icon: '⚔️', baseCost: 150,    baseIncome: 28,    costMul: 1.12, desc: '장인이 벼린 강철의 검', ally: null, grade: 'uncommon' },
    { id: 'recruit_bow',    name: '수비대의 활',     icon: '🏹', baseCost: 350,    baseIncome: 55,    costMul: 1.13, desc: '마을 수비대 궁수의 활', ally: 'archer', grade: 'rare' },
    { id: 'acolyte_staff',  name: '수습 지팡이',     icon: '🪄', baseCost: 800,    baseIncome: 100,   costMul: 1.13, desc: '마법 수련에 쓰이는 지팡이', ally: 'mage', grade: 'rare' },
    { id: 'squire_plate',   name: '견습 기사 갑옷',  icon: '🛡️', baseCost: 1800,   baseIncome: 180,   costMul: 1.13, desc: '기사 수련생의 무거운 갑옷', ally: null, grade: 'rare' },
    { id: 'master_blade',   name: '대장장이의 명검', icon: '🗡️', baseCost: 4000,   baseIncome: 320,   costMul: 1.13, desc: '마을 최고 장인의 역작', ally: null, grade: 'epic' },
    // ═══ Tier 2: 숲의 던전 (Forest) ═══
    { id: 'hunters_bow',    name: '사냥꾼의 활',     icon: '🏹', baseCost: 18000,     baseIncome: 550,     costMul: 1.13, desc: '숲의 노련한 사냥꾼의 활', ally: 'archer', grade: 'epic' },
    { id: 'wolf_cloak',     name: '늑대 가죽 망토',  icon: '🐺', baseCost: 40000,     baseIncome: 1000,    costMul: 1.13, desc: '늑대의 가죽으로 만든 망토', ally: null, grade: 'rare' },
    { id: 'poison_blade',   name: '독날 검',         icon: '🗡️', baseCost: 90000,    baseIncome: 1900,    costMul: 1.13, desc: '독이 묻은 날카로운 검', ally: null, grade: 'rare' },
    { id: 'thorn_whip',     name: '가시 채찍',       icon: '🌿', baseCost: 200000,   baseIncome: 3400,    costMul: 1.13, desc: '가시로 뒤덮인 마법 채찍', ally: null, grade: 'epic' },
    { id: 'forest_staff',   name: '숲의 지팡이',     icon: '🪄', baseCost: 450000,   baseIncome: 5800,    costMul: 1.13, desc: '자연의 힘이 깃든 지팡이', ally: 'druid', grade: 'epic' },
    { id: 'elven_boots',    name: '엘프 부츠',       icon: '👢', baseCost: 1000000,   baseIncome: 10000,   costMul: 1.13, desc: '엘프의 민첩함이 깃든 부츠', ally: null, grade: 'legendary' },
    { id: 'oak_shield',     name: '참나무 대방패',   icon: '🛡️', baseCost: 2200000,   baseIncome: 18000,   costMul: 1.13, desc: '세계수 조각으로 만든 방패', ally: null, grade: 'legendary' },
    { id: 'spirit_bow',     name: '정령의 활',       icon: '🏹', baseCost: 4800000,  baseIncome: 32000,   costMul: 1.12, desc: '정령이 축복한 신비의 활', ally: 'elf_archer', grade: 'legendary' },
    { id: 'druid_robe',     name: '드루이드 로브',   icon: '🧙', baseCost: 10500000,  baseIncome: 56000,   costMul: 1.12, desc: '자연과 소통하는 마법 로브', ally: 'druid', grade: 'legendary' },
    { id: 'forest_crown',   name: '숲 왕의 왕관',    icon: '👑', baseCost: 23000000,  baseIncome: 100000,  costMul: 1.12, desc: '숲을 다스리는 왕의 왕관', ally: null, grade: 'legendary' },
    // ═══ Tier 3: 화산 던전 (Volcano) ═══
    { id: 'flame_sword',    name: '화염 검',         icon: '🔥', baseCost: 50e6,   baseIncome: 170000,   costMul: 1.12, desc: '불꽃이 타오르는 마검', ally: null, grade: 'epic' },
    { id: 'lava_shield',    name: '용암 방패',       icon: '🛡️', baseCost: 110e6,   baseIncome: 300000,   costMul: 1.12, desc: '녹지 않는 용암석 방패', ally: null, grade: 'epic' },
    { id: 'fire_staff',     name: '화염 지팡이',     icon: '🔥', baseCost: 240e6,   baseIncome: 530000,   costMul: 1.12, desc: '화산의 마력이 담긴 지팡이', ally: 'fire_mage', grade: 'epic' },
    { id: 'obsidian_blade', name: '흑요석 검',       icon: '🗡️', baseCost: 520e6,   baseIncome: 920000,  costMul: 1.11, desc: '화산에서 태어난 흑요석 칼날', ally: null, grade: 'legendary' },
    { id: 'magma_gauntlet', name: '마그마 건틀릿',   icon: '🧤', baseCost: 1.15e9,   baseIncome: 1600000,  costMul: 1.11, desc: '용암으로 단련된 장갑', ally: null, grade: 'legendary' },
    { id: 'salamander_mail',name: '불도마뱀 갑옷',   icon: '🦎', baseCost: 2.5e9,     baseIncome: 2800000,  costMul: 1.11, desc: '화염에 면염인 비늘 갑옷', ally: null, grade: 'legendary' },
    { id: 'volcano_hammer', name: '화산 망치',       icon: '🔨', baseCost: 5.5e9,    baseIncome: 4800000,  costMul: 1.11, desc: '화산의 분노를 담은 대형 망치', ally: 'fire_golem', grade: 'legendary' },
    { id: 'phoenix_feather',name: '불사조 깃털',     icon: '🪶', baseCost: 12e9,    baseIncome: 8400000, costMul: 1.10, desc: '불사조의 신성한 깃털 장식', ally: 'phoenix_ally', grade: 'legendary' },
    { id: 'inferno_robe',   name: '지옥불 로브',     icon: '🔥', baseCost: 26e9,    baseIncome: 14400000, costMul: 1.10, desc: '지옥불이 수놓인 마법 로브', ally: null, grade: 'legendary' },
    { id: 'volcano_heart',  name: '화산의 심장',     icon: '❤️‍🔥', baseCost: 57e9,  baseIncome: 25600000, costMul: 1.10, desc: '화산 깊은 곳의 핵심 결정', ally: null, grade: 'legendary' },
    // ═══ Tier 4: 심연 (Abyss) ═══
    { id: 'shadow_blade',   name: '그림자 검',       icon: '⚔️', baseCost: 120e9,   baseIncome: 44e6,    costMul: 1.10, desc: '어둠에서 태어난 검', ally: 'shadow' },
    { id: 'soul_gem',       name: '영혼석',          icon: '💎', baseCost: 260e9,   baseIncome: 76e6,    costMul: 1.10, desc: '영혼의 힘을 증폭시키는 보석', ally: null, grade: 'rare' },
    { id: 'necro_tome',     name: '사령술서',        icon: '📖', baseCost: 560e9,  baseIncome: 132e6,   costMul: 1.10, desc: '죽은 자를 부리는 금서', ally: 'skeleton' },
    { id: 'abyssal_scythe', name: '심연의 낫',       icon: '⚔️', baseCost: 1.2e12,  baseIncome: 228e6,   costMul: 1.09, desc: '저승사자의 대낫', ally: null, grade: 'rare' },
    { id: 'void_armor',     name: '공허의 갑옷',     icon: '🛡️', baseCost: 2.6e12,    baseIncome: 400e6,   costMul: 1.09, desc: '심연의 공허로 만든 갑옷', ally: null, grade: 'rare' },
    { id: 'banshee_wail',   name: '밴시의 울음',     icon: '👻', baseCost: 5.6e12,   baseIncome: 688e6,   costMul: 1.09, desc: '귀를 찢는 비명의 마법 구슬', ally: 'banshee' },
    { id: 'blood_chalice',  name: '피의 성배',       icon: '🏆', baseCost: 12e12,   baseIncome: 1.2e9,   costMul: 1.09, desc: '뱀파이어 군주의 성배', ally: null, grade: 'rare' },
    { id: 'demon_horn',     name: '악마의 뿔',       icon: '😈', baseCost: 26e12,   baseIncome: 2.08e9,   costMul: 1.09, desc: '악마에게서 빼앗은 뿔 장식', ally: 'demon_ally' },
    { id: 'abyss_eye',      name: '심연의 눈',       icon: '👁️', baseCost: 56e12,  baseIncome: 3.6e9,   costMul: 1.08, desc: '모든 것을 꿰뚫어 보는 눈', ally: null, grade: 'rare' },
    { id: 'death_mantle',   name: '죽음의 군주 망토',icon: '💀', baseCost: 120e12,  baseIncome: 6.24e9,   costMul: 1.08, desc: '죽음을 지배하는 군주의 망토', ally: 'death_knight' },
    // ═══ Tier 5: 용의 둥지 (Dragon's Nest) ═══
    { id: 'dragon_fang',    name: '드래곤 송곳니',   icon: '🐉', baseCost: 260e12,  baseIncome: 10.8e9,  costMul: 1.08, desc: '드래곤의 이빨로 만든 검', ally: null, grade: 'rare' },
    { id: 'dragon_scale',   name: '드래곤 비늘 갑옷',icon: '🐲', baseCost: 560e12,  baseIncome: 18.4e9,    costMul: 1.08, desc: '용의 비늘로 만든 갑옷', ally: 'dragon_pet' },
    { id: 'wyrmfire_staff',  name: '용화 지팡이',    icon: '🪄', baseCost: 1.2e15,  baseIncome: 32e9,    costMul: 1.08, desc: '용의 숨결이 담긴 지팡이', ally: 'fire_dragon' },
    { id: 'wyvern_lance',   name: '와이번 창',       icon: '⚔️', baseCost: 2.6e15,    baseIncome: 56e9,    costMul: 1.07, desc: '와이번의 뼈로 만든 창', ally: null, grade: 'rare' },
    { id: 'hydra_fang',     name: '히드라의 이빨',   icon: '🐍', baseCost: 5.6e15,   baseIncome: 96e9,   costMul: 1.07, desc: '자라나는 독니로 만든 무기', ally: null, grade: 'rare' },
    { id: 'ancient_relic',  name: '고대의 유물',     icon: '🏺', baseCost: 12e15,   baseIncome: 168e9,   costMul: 1.07, desc: '태초의 힘이 봉인된 유물', ally: null, grade: 'rare' },
    { id: 'bone_dragon_bow',name: '뼈 드래곤 활',    icon: '🦴', baseCost: 26e15,   baseIncome: 288e9,   costMul: 1.07, desc: '언데드 드래곤의 뼈 활', ally: 'bone_dragon' },
    { id: 'titan_hammer',   name: '타이탄 망치',     icon: '🔨', baseCost: 56e15,  baseIncome: 496e9,   costMul: 1.07, desc: '거신이 사용하던 대형 망치', ally: 'titan_ally' },
    { id: 'dragon_heart',   name: '용의 심장',       icon: '❤️', baseCost: 120e15,  baseIncome: 880e9,  costMul: 1.06, desc: '드래곤 로드의 심장 결정', ally: null, grade: 'rare' },
    { id: 'dragonlord_crown',name:'용왕의 왕관',     icon: '👑', baseCost: 260e15,  baseIncome: 1.52e12,  costMul: 1.06, desc: '모든 용을 지배하는 왕관', ally: 'dragon_lord' },
    // ═══ Tier 6: 신들의 영역 (Divine) ═══
    { id: 'god_blade',      name: '신의 검',         icon: '⚜️', baseCost: 560e15,  baseIncome: 2.56e12,  costMul: 1.06, desc: '신이 내린 축복의 검', ally: 'angel' },
    { id: 'celestial_armor',name: '천상의 갑옷',     icon: '🔱', baseCost: 1.2e18,  baseIncome: 4.4e12,  costMul: 1.06, desc: '하늘의 광채를 담은 갑옷', ally: null, grade: 'rare' },
    { id: 'infinity_orb',   name: '무한의 오브',     icon: '🔮', baseCost: 2.6e18,    baseIncome: 7.6e12,  costMul: 1.06, desc: '무한한 마력의 수정구', ally: 'archmage' },
    { id: 'seraphim_wings', name: '세라핌의 날개',   icon: '👼', baseCost: 5.6e18,   baseIncome: 13.2e12, costMul: 1.05, desc: '천사장의 날개 장식', ally: 'seraphim' },
    { id: 'world_tree_bow', name: '세계수의 활',     icon: '🌳', baseCost: 12e18,   baseIncome: 22.4e12,   costMul: 1.05, desc: '세계수 가지로 만든 신궁', ally: 'elf_ranger' },
    { id: 'astral_blade',   name: '성광의 검',       icon: '✨', baseCost: 26e18,   baseIncome: 38.4e12,   costMul: 1.05, desc: '별빛을 품은 성스러운 검', ally: null, grade: 'rare' },
    { id: 'divine_shield',  name: '신성 방패',       icon: '🛡️', baseCost: 56e18,  baseIncome: 67.2e12,   costMul: 1.05, desc: '어떤 공격도 막아내는 방패', ally: null, grade: 'rare' },
    { id: 'sun_staff',      name: '태양의 지팡이',   icon: '☀️', baseCost: 120e18,  baseIncome: 116e12,  costMul: 1.05, desc: '태양의 힘을 모으는 지팡이', ally: 'sun_spirit' },
    { id: 'judgment_hammer', name: '심판의 망치',    icon: '⚒️', baseCost: 260e18,  baseIncome: 200e12,  costMul: 1.04, desc: '신이 내린 심판의 무기', ally: null, grade: 'rare' },
    { id: 'hero_crown',     name: '영웅의 왕관',     icon: '👑', baseCost: 560e18,  baseIncome: 344e12,  costMul: 1.04, desc: '세계를 구한 영웅의 왕관', ally: 'hero_army' },
    // ═══ Tier 7: 차원의 틈 (Rift) ═══
    { id: 'rift_blade',     name: '균열의 검',       icon: '🌀', baseCost: 2.8e21,  baseIncome: 740e12,  costMul: 1.04, desc: '차원을 베는 검', ally: null, grade: 'rare' },
    { id: 'time_dagger',    name: '시간의 단검',     icon: '⏰', baseCost: 6e21,    baseIncome: 1.3e15,  costMul: 1.04, desc: '시간을 멈추는 단검', ally: 'time_phantom' },
    { id: 'void_gauntlet',  name: '공허 건틀릿',     icon: '🕳️', baseCost: 13e21,   baseIncome: 2.2e15,  costMul: 1.04, desc: '공허의 힘을 뿜는 장갑', ally: null, grade: 'rare' },
    { id: 'star_bow',       name: '별의 활',         icon: '⭐', baseCost: 28e21,   baseIncome: 3.8e15,  costMul: 1.04, desc: '별의 에너지를 쏘는 활', ally: 'star_archer' },
    { id: 'crystal_staff',  name: '결정 지팡이',     icon: '💎', baseCost: 60e21,   baseIncome: 6.5e15,  costMul: 1.03, desc: '차원 결정으로 만든 지팡이', ally: null, grade: 'rare' },
    { id: 'ether_armor',    name: '에테르 갑옷',     icon: '🛡️', baseCost: 130e21,  baseIncome: 11e15,   costMul: 1.03, desc: '에테르로 짠 투명한 갑옷', ally: null, grade: 'rare' },
    { id: 'dimension_axe',  name: '차원 도끼',       icon: '⚔️', baseCost: 280e21,  baseIncome: 19e15,   costMul: 1.03, desc: '차원을 가르는 거대 도끼', ally: 'rift_warrior' },
    { id: 'cosmic_tome',    name: '우주의 서',       icon: '📖', baseCost: 600e21,  baseIncome: 33e15,   costMul: 1.03, desc: '우주의 진리가 적힌 서적', ally: 'cosmic_mage' },
    { id: 'infinity_shield', name: '무한 방패',      icon: '🛡️', baseCost: 1.3e24,  baseIncome: 56e15,   costMul: 1.03, desc: '무한히 재생하는 방패', ally: null, grade: 'rare' },
    { id: 'rift_crown',     name: '차원왕의 왕관',   icon: '👑', baseCost: 2.8e24,  baseIncome: 96e15,   costMul: 1.03, desc: '차원을 지배하는 자의 왕관', ally: 'dimension_lord' },
    // ═══ Tier 8: 태초의 혼돈 (Chaos) ═══
    { id: 'chaos_blade',    name: '혼돈의 검',       icon: '💥', baseCost: 6e24,    baseIncome: 165e15,  costMul: 1.03, desc: '혼돈에서 태어난 불안정한 검', ally: null, grade: 'rare' },
    { id: 'primal_staff',   name: '원초의 지팡이',   icon: '🌊', baseCost: 13e24,   baseIncome: 285e15,  costMul: 1.03, desc: '태초의 원소력이 깃든 지팡이', ally: 'primal_spirit' },
    { id: 'world_turtle',   name: '거북 등껍질',     icon: '🐢', baseCost: 28e24,   baseIncome: 490e15,  costMul: 1.02, desc: '세계를 등에 진 거북의 조각', ally: null, grade: 'rare' },
    { id: 'time_dragon_fang',name:'시간용의 송곳니', icon: '🐉', baseCost: 60e24,   baseIncome: 840e15,  costMul: 1.02, desc: '시간을 초월한 용의 이빨', ally: 'time_dragon' },
    { id: 'star_giant_axe', name: '별 거인의 도끼',  icon: '⭐', baseCost: 130e24,  baseIncome: 1.45e18, costMul: 1.02, desc: '별을 깎아 만든 거대 도끼', ally: null, grade: 'rare' },
    { id: 'element_gauntlet',name:'원소 타이탄 장갑', icon: '🌍', baseCost: 280e24,  baseIncome: 2.5e18,  costMul: 1.02, desc: '4원소의 힘이 융합된 장갑', ally: 'element_titan' },
    { id: 'fate_scale',     name: '운명의 천칭',     icon: '⚖️', baseCost: 600e24,  baseIncome: 4.3e18,  costMul: 1.02, desc: '운명을 재는 심판의 천칭', ally: null, grade: 'rare' },
    { id: 'chaos_orb',      name: '혼돈의 오브',     icon: '🔮', baseCost: 1.3e27,  baseIncome: 7.4e18,  costMul: 1.02, desc: '태초의 혼돈이 응축된 구체', ally: 'chaos_spirit' },
    { id: 'eternal_eye',    name: '영원의 눈',       icon: '👁️', baseCost: 2.8e27,  baseIncome: 12.7e18, costMul: 1.02, desc: '영원을 관측하는 거대한 눈', ally: null, grade: 'rare' },
    { id: 'primordial_crown',name:'태초의 왕관',     icon: '👑', baseCost: 6e27,    baseIncome: 22e18,   costMul: 1.02, desc: '태초의 존재가 쓰던 왕관', ally: 'primordial' },
    // ═══ Tier 9: 신화의 영역 (Mythic) ═══
    { id: 'odin_spear',     name: '오딘의 창',       icon: '⚡', baseCost: 13e27,   baseIncome: 38e18,   costMul: 1.02, desc: '절대 빗나가지 않는 신의 창', ally: 'valkyrie' },
    { id: 'thor_hammer',    name: '토르의 망치',     icon: '🔨', baseCost: 28e27,   baseIncome: 65e18,   costMul: 1.02, desc: '번개를 내리치는 신의 망치', ally: 'thunder_god' },
    { id: 'hades_helm',     name: '하데스의 투구',   icon: '💀', baseCost: 60e27,   baseIncome: 112e18,  costMul: 1.01, desc: '투명해지는 명계의 투구', ally: null, grade: 'rare' },
    { id: 'poseidon_trident',name:'포세이돈의 삼지창',icon: '🔱', baseCost: 130e27,  baseIncome: 193e18,  costMul: 1.01, desc: '바다를 지배하는 삼지창', ally: 'sea_god' },
    { id: 'ares_shield',    name: '아레스의 방패',   icon: '🛡️', baseCost: 280e27,  baseIncome: 330e18,  costMul: 1.01, desc: '전쟁의 신이 들던 방패', ally: null, grade: 'rare' },
    { id: 'athena_aegis',   name: '아테나의 이지스', icon: '🦉', baseCost: 600e27,  baseIncome: 570e18,  costMul: 1.01, desc: '지혜의 여신의 완벽한 방어구', ally: 'owl_spirit' },
    { id: 'zeus_bolt',      name: '제우스의 벼락',   icon: '⚡', baseCost: 1.3e30,  baseIncome: 980e18,  costMul: 1.01, desc: '하늘의 왕이 던지는 벼락', ally: 'zeus_spirit' },
    { id: 'kronos_scythe',  name: '크로노스의 낫',   icon: '⏳', baseCost: 2.8e30,  baseIncome: 1.7e21,  costMul: 1.01, desc: '시간 자체를 베는 거대한 낫', ally: null, grade: 'rare' },
    { id: 'gaia_blessing',  name: '가이아의 축복',   icon: '🌍', baseCost: 6e30,    baseIncome: 2.9e21,  costMul: 1.01, desc: '대지의 어머니의 신성한 힘', ally: 'gaia_spirit', grade: 'legendary' },
    { id: 'chaos_origin',   name: '카오스의 근원',   icon: '🌑', baseCost: 13e30,   baseIncome: 5e21,    costMul: 1.01, desc: '만물의 시작이자 끝의 힘', ally: null, grade: 'legendary' },
    // ═══ Tier 10: 세계의 끝 (Endworld) ═══
    { id: 'jormungandr_fang',name:'요르문간드의 이빨',icon: '🐍', baseCost: 28e30,   baseIncome: 8.6e21,  costMul: 1.01, desc: '세계를 감싸는 뱀의 이빨', ally: 'world_serpent', grade: 'legendary' },
    { id: 'surtr_flame',    name: '수르트의 불꽃검', icon: '🔥', baseCost: 60e30,   baseIncome: 14.8e21, costMul: 1.01, desc: '세계를 불태우는 거인의 검', ally: null, grade: 'legendary' },
    { id: 'fenrir_claw',    name: '펜리르의 발톱',   icon: '🐺', baseCost: 130e30,  baseIncome: 25.5e21, costMul: 1.01, desc: '신도 삼킨 늑대의 발톱', ally: 'fenrir_spirit', grade: 'legendary' },
    { id: 'emperor_scepter',name: '심연 황제의 홀',  icon: '👑', baseCost: 280e30,  baseIncome: 44e21,   costMul: 1.01, desc: '심연의 모든 것을 지배하는 홀', ally: null, grade: 'legendary' },
    { id: 'destroyer_blade', name: '파괴자의 검',    icon: '💥', baseCost: 600e30,  baseIncome: 75e21,   costMul: 1.01, desc: '차원을 파괴하는 궁극의 검', ally: 'destroyer', grade: 'legendary' },
    { id: 'eternal_shield', name: '영겁의 방패',     icon: '🛡️', baseCost: 1.3e33,  baseIncome: 130e21,  costMul: 1.01, desc: '영원히 부서지지 않는 방패', ally: null, grade: 'legendary' },
    { id: 'universe_heart', name: '우주의 심장',     icon: '💜', baseCost: 2.8e33,  baseIncome: 224e21,  costMul: 1.01, desc: '우주의 핵심 에너지 결정', ally: 'cosmos', grade: 'legendary' },
    { id: 'time_end_blade', name: '시간의 종말 검',  icon: '⏰', baseCost: 6e33,    baseIncome: 385e21,  costMul: 1.01, desc: '시간이 멈춘 곳에서 온 검', ally: 'time_lord', grade: 'legendary' },
    { id: 'absolute_blade', name: '절대자의 검',     icon: '✨', baseCost: 13e33,   baseIncome: 660e21,  costMul: 1.01, desc: '존재의 근원을 관통하는 검', ally: null, grade: 'legendary' },
    { id: 'final_crown',    name: '???의 왕관',     icon: '❓', baseCost: 28e33,   baseIncome: 1.14e24, costMul: 1.01, desc: '이것이 진정한 끝인가...?', ally: 'ultimate', grade: 'legendary' },
];

// Equipment alias for backwards compatibility
const EQUIPMENT = EQUIPMENT_DEFS.map(e => ({
    id: e.id, name: e.name, icon: e.icon,
    baseCost: e.baseCost, baseIncome: e.baseIncome,
    costMultiplier: e.costMul, description: e.desc,
    allyType: e.ally
}));

const SKILLS = [
    { id: 'critical', name: '크리티컬 스트라이크', icon: '💥', desc: '공격력 증가', cost: 25, type: 'click', multiplier: 1.5, maxLevel: 10, costMultiplier: 2.3, effectMultiplier: 1.5, requires: { gold: 10 } },
    { id: 'summon', name: '영웅 소환', icon: '🦸', desc: '자동 공격 증가', cost: 75, type: 'auto', multiplier: 1.5, maxLevel: 10, costMultiplier: 2.3, effectMultiplier: 1.5, requires: { gold: 30 } },
    { id: 'power_slash', name: '파워 슬래시', icon: '⚡', desc: '공격력 대폭 증가', cost: 400, type: 'click', multiplier: 1.6, maxLevel: 10, costMultiplier: 2.3, effectMultiplier: 1.6, requires: { gold: 150 } },
    { id: 'haste', name: '속도 강화', icon: '💨', desc: '공격 속도 증가', cost: 1000, type: 'speed', multiplier: 1.4, maxLevel: 10, costMultiplier: 2.3, effectMultiplier: 1.4, requires: { gold: 400 } },
    { id: 'army', name: '용사단', icon: '⚔️', desc: '자동 공격 크게 증가', cost: 2500, type: 'auto', multiplier: 1.6, maxLevel: 10, costMultiplier: 2.3, effectMultiplier: 1.6, requires: { gold: 1000 } },
    { id: 'lightning', name: '번개 참격', icon: '🌩️', desc: '공격력 극대 증가', cost: 7500, type: 'click', multiplier: 1.7, maxLevel: 10, costMultiplier: 2.3, effectMultiplier: 1.7, requires: { gold: 2500 } },
    { id: 'legion', name: '전설의 군단', icon: '🏰', desc: '자동 공격 극대 증가', cost: 25000, type: 'auto', multiplier: 1.7, maxLevel: 10, costMultiplier: 2.3, effectMultiplier: 1.7, requires: { gold: 10000 } },
    { id: 'boss_hunter', name: '보스 사냥꾼', icon: '🎯', desc: '클릭 DPS 보너스', cost: 50000, type: 'golden', multiplier: 1.08, maxLevel: 10, costMultiplier: 2.3, effectMultiplier: 1.08, requires: { gold: 25000 } },
];

const DUNGEON_RANKS = [
    { min: 0, title: '마을 초보자', icon: '🌱', i18nKey: 'ranks.beginner' },
    { min: 100, title: '수련생', icon: '🗡️', i18nKey: 'ranks.trainee' },
    { min: 1000, title: '모험가', icon: '🎒', i18nKey: 'ranks.adventurer' },
    { min: 10000, title: '전사', icon: '⚔️', i18nKey: 'ranks.warrior' },
    { min: 100000, title: '기사', icon: '🛡️', i18nKey: 'ranks.knight' },
    { min: 1000000, title: '용사', icon: '🦸', i18nKey: 'ranks.hero' },
    { min: 10000000, title: '전설의 용사', icon: '⭐', i18nKey: 'ranks.legend' },
    { min: 100000000, title: '드래곤 슬레이어', icon: '🐉', i18nKey: 'ranks.dragonslayer' },
    { min: 1000000000, title: '대마법사', icon: '🔮', i18nKey: 'ranks.archmage' },
    { min: 10000000000, title: '신의 대리인', icon: '👑', i18nKey: 'ranks.godscall' },
    { min: 100000000000, title: '세계의 수호자', icon: '🌍', i18nKey: 'ranks.guardian' }
];

const DUNGEON_MILESTONES = [
    { amount: 100, message: '첫 번째 던전을 클리어했습니다!', i18nKey: 'milestones.first' },
    { amount: 1000, message: '숲의 던전 정복! 장비를 강화하세요.', i18nKey: 'milestones.forest' },
    { amount: 10000, message: '화산 던전 돌파! 전투력이 성장하고 있습니다.', i18nKey: 'milestones.volcano' },
    { amount: 100000, message: '심연의 던전 클리어! 기사의 자격이 있습니다.', i18nKey: 'milestones.abyss' },
    { amount: 1000000, message: '드래곤의 둥지를 정복했습니다!', i18nKey: 'milestones.dragon' },
    { amount: 10000000, message: '전설의 던전 클리어! 대단합니다!', i18nKey: 'milestones.legend' },
    { amount: 100000000, message: '신들의 시련을 통과했습니다!', i18nKey: 'milestones.divine' },
    { amount: 1000000000, message: '어둠의 군주를 쓰러뜨렸습니다!', i18nKey: 'milestones.darkness' }
];

function getRankForGold(totalEarned) {
    let result = DUNGEON_RANKS[0];
    for (const t of DUNGEON_RANKS) {
        if (totalEarned >= t.min) result = t;
        else break;
    }
    return result;
}

// Gold unit suffixes per language
const GOLD_UNITS_KO = ['만','억','조','경','해','자','양','구','간'];
const GOLD_UNITS_EN = ['K','M','B','T','Qa','Qi','Sx','Sp','Oc'];
const GOLD_UNITS_JA = ['万','億','兆','京','垓','秭','穣','溝','澗'];
const GOLD_UNITS_ZH = ['万','亿','兆','京','垓','秭','穰','沟','涧'];

function getGoldUnits() {
    if (typeof i18n !== 'undefined') {
        const lang = i18n.getCurrentLanguage();
        if (lang === 'ko') return GOLD_UNITS_KO;
        if (lang === 'ja') return GOLD_UNITS_JA;
        if (lang === 'zh') return GOLD_UNITS_ZH;
    }
    return GOLD_UNITS_EN;
}

// Thresholds: 1e4, 1e8, 1e12, 1e16, 1e20, 1e24, 1e28, 1e32, 1e36
const GOLD_THRESHOLDS = [1e4, 1e8, 1e12, 1e16, 1e20, 1e24, 1e28, 1e32, 1e36];

function formatGold(amount) {
    const units = getGoldUnits();
    for (let i = GOLD_THRESHOLDS.length - 1; i >= 0; i--) {
        if (amount >= GOLD_THRESHOLDS[i]) {
            const val = amount / GOLD_THRESHOLDS[i];
            return (i === 0 ? val.toFixed(1) : val.toFixed(2)) + units[i];
        }
    }
    return Math.floor(amount).toLocaleString();
}

function formatGoldShort(amount) {
    const units = getGoldUnits();
    for (let i = GOLD_THRESHOLDS.length - 1; i >= 0; i--) {
        if (amount >= GOLD_THRESHOLDS[i]) {
            const val = amount / GOLD_THRESHOLDS[i];
            return (i === 0 ? val.toFixed(0) : val.toFixed(1)) + units[i];
        }
    }
    return Math.floor(amount).toLocaleString();
}

const DUNGEON_TIERS = [
    { id: 1,  name: '마을 주변',     icon: '🏘️', theme: 'village' },
    { id: 2,  name: '숲의 던전',     icon: '🌲', theme: 'forest' },
    { id: 3,  name: '화산 던전',     icon: '🌋', theme: 'volcano' },
    { id: 4,  name: '심연',         icon: '🕳️', theme: 'abyss' },
    { id: 5,  name: '용의 둥지',     icon: '🐉', theme: 'dragon' },
    { id: 6,  name: '신들의 영역',   icon: '⚡', theme: 'divine' },
    { id: 7,  name: '차원의 틈',     icon: '🌀', theme: 'rift' },
    { id: 8,  name: '태초의 혼돈',   icon: '🌊', theme: 'chaos' },
    { id: 9,  name: '신화의 영역',   icon: '⚡', theme: 'mythic' },
    { id: 10, name: '세계의 끝',     icon: '🌌', theme: 'endworld' },
];

// === MONSTERS (100+ types across 10 tiers) ===
const MONSTERS = [
    // Tier 1: 마을 주변 (10 types)
    { name: '슬라임', emoji: '🟢', baseHP: 3, goldReward: 5, tier: 1, color: '#34d399', glow: 'rgba(52,211,153,0.5)', ambient: 'leaf' },
    { name: '고블린', emoji: '👺', baseHP: 5, goldReward: 7, tier: 1, color: '#a3e635', glow: 'rgba(163,230,53,0.5)', ambient: 'leaf' },
    { name: '박쥐', emoji: '🦇', baseHP: 7, goldReward: 10, tier: 1, color: '#94a3b8', glow: 'rgba(148,163,184,0.5)', ambient: 'leaf' },
    { name: '들쥐', emoji: '🐀', baseHP: 4, goldReward: 6, tier: 1, color: '#a8a29e', glow: 'rgba(168,162,158,0.4)', ambient: 'leaf' },
    { name: '전갈', emoji: '🦂', baseHP: 6, goldReward: 8, tier: 1, color: '#d97706', glow: 'rgba(217,119,6,0.4)', ambient: 'leaf' },
    { name: '뱀', emoji: '🐍', baseHP: 8, goldReward: 11, tier: 1, color: '#65a30d', glow: 'rgba(101,163,13,0.4)', ambient: 'leaf' },
    { name: '버섯괴물', emoji: '🍄', baseHP: 5, goldReward: 7, tier: 1, color: '#dc2626', glow: 'rgba(220,38,38,0.4)', ambient: 'spore' },
    { name: '해골 전사', emoji: '💀', baseHP: 9, goldReward: 12, tier: 1, color: '#e5e5e5', glow: 'rgba(229,229,229,0.4)', ambient: 'leaf' },
    { name: '멧돼지', emoji: '🐗', baseHP: 10, goldReward: 13, tier: 1, color: '#78716c', glow: 'rgba(120,113,108,0.4)', ambient: 'leaf' },
    { name: '도적', emoji: '🥷', baseHP: 12, goldReward: 15, tier: 1, color: '#475569', glow: 'rgba(71,85,105,0.4)', ambient: 'leaf' },
    // Tier 2: 숲의 던전 (10 types)
    { name: '늑대', emoji: '🐺', baseHP: 15, goldReward: 18, tier: 2, color: '#64748b', glow: 'rgba(100,116,139,0.5)', ambient: 'leaf' },
    { name: '독거미', emoji: '🕷️', baseHP: 20, goldReward: 22, tier: 2, color: '#a855f7', glow: 'rgba(168,85,247,0.5)', ambient: 'spore' },
    { name: '트롤', emoji: '👹', baseHP: 28, goldReward: 30, tier: 2, color: '#65a30d', glow: 'rgba(101,163,13,0.5)', ambient: 'leaf' },
    { name: '오크', emoji: '👹', baseHP: 18, goldReward: 20, tier: 2, color: '#854d0e', glow: 'rgba(133,77,14,0.5)', ambient: 'leaf' },
    { name: '나무 정령', emoji: '🌳', baseHP: 22, goldReward: 24, tier: 2, color: '#15803d', glow: 'rgba(21,128,61,0.5)', ambient: 'leaf' },
    { name: '곰', emoji: '🐻', baseHP: 25, goldReward: 27, tier: 2, color: '#92400e', glow: 'rgba(146,64,14,0.5)', ambient: 'leaf' },
    { name: '요정 도둑', emoji: '🧚', baseHP: 16, goldReward: 20, tier: 2, color: '#ec4899', glow: 'rgba(236,72,153,0.5)', ambient: 'spore' },
    { name: '식인 식물', emoji: '🌿', baseHP: 24, goldReward: 26, tier: 2, color: '#16a34a', glow: 'rgba(22,163,74,0.5)', ambient: 'leaf' },
    { name: '코볼트', emoji: '🐕', baseHP: 19, goldReward: 21, tier: 2, color: '#b45309', glow: 'rgba(180,83,9,0.5)', ambient: 'leaf' },
    { name: '숲 마녀', emoji: '🧙', baseHP: 30, goldReward: 33, tier: 2, color: '#7c3aed', glow: 'rgba(124,58,237,0.5)', ambient: 'spore' },
    // Tier 3: 화산 던전 (10 types)
    { name: '화염 정령', emoji: '🔥', baseHP: 40, goldReward: 42, tier: 3, color: '#f97316', glow: 'rgba(249,115,22,0.6)', ambient: 'ember' },
    { name: '용암 골렘', emoji: '🗿', baseHP: 55, goldReward: 55, tier: 3, color: '#ef4444', glow: 'rgba(239,68,68,0.5)', ambient: 'ember' },
    { name: '불사조', emoji: '🐦‍🔥', baseHP: 75, goldReward: 72, tier: 3, color: '#fbbf24', glow: 'rgba(251,191,36,0.6)', ambient: 'ember' },
    { name: '화염 박쥐', emoji: '🦇', baseHP: 35, goldReward: 38, tier: 3, color: '#ea580c', glow: 'rgba(234,88,12,0.5)', ambient: 'ember' },
    { name: '화산 도마뱀', emoji: '🦎', baseHP: 45, goldReward: 46, tier: 3, color: '#dc2626', glow: 'rgba(220,38,38,0.5)', ambient: 'ember' },
    { name: '용암 슬라임', emoji: '🟠', baseHP: 50, goldReward: 50, tier: 3, color: '#f97316', glow: 'rgba(249,115,22,0.5)', ambient: 'ember' },
    { name: '이프리트', emoji: '🧞', baseHP: 65, goldReward: 62, tier: 3, color: '#b91c1c', glow: 'rgba(185,28,28,0.6)', ambient: 'ember' },
    { name: '화염 기사', emoji: '⚔️', baseHP: 70, goldReward: 68, tier: 3, color: '#dc2626', glow: 'rgba(220,38,38,0.6)', ambient: 'ember' },
    { name: '마그마 웜', emoji: '🐛', baseHP: 60, goldReward: 58, tier: 3, color: '#ea580c', glow: 'rgba(234,88,12,0.5)', ambient: 'ember' },
    { name: '불의 군주', emoji: '👹', baseHP: 85, goldReward: 80, tier: 3, color: '#ef4444', glow: 'rgba(239,68,68,0.6)', ambient: 'ember' },
    // Tier 4: 심연 (10 types)
    { name: '리치', emoji: '💀', baseHP: 100, goldReward: 95, tier: 4, color: '#06b6d4', glow: 'rgba(6,182,212,0.5)', ambient: 'soul' },
    { name: '뱀파이어', emoji: '🧛', baseHP: 130, goldReward: 120, tier: 4, color: '#dc2626', glow: 'rgba(220,38,38,0.5)', ambient: 'soul' },
    { name: '악마', emoji: '😈', baseHP: 170, goldReward: 155, tier: 4, color: '#7c3aed', glow: 'rgba(124,58,237,0.6)', ambient: 'soul' },
    { name: '그림자 암살자', emoji: '🥷', baseHP: 110, goldReward: 100, tier: 4, color: '#1e293b', glow: 'rgba(30,41,59,0.5)', ambient: 'soul' },
    { name: '밴시', emoji: '👻', baseHP: 120, goldReward: 110, tier: 4, color: '#a78bfa', glow: 'rgba(167,139,250,0.5)', ambient: 'soul' },
    { name: '미이라', emoji: '🧟', baseHP: 140, goldReward: 130, tier: 4, color: '#a16207', glow: 'rgba(161,98,7,0.5)', ambient: 'soul' },
    { name: '데스 나이트', emoji: '⚔️', baseHP: 160, goldReward: 148, tier: 4, color: '#1e1b4b', glow: 'rgba(30,27,75,0.5)', ambient: 'soul' },
    { name: '심연의 촉수', emoji: '🐙', baseHP: 150, goldReward: 140, tier: 4, color: '#581c87', glow: 'rgba(88,28,135,0.5)', ambient: 'soul' },
    { name: '저주받은 기사', emoji: '🛡️', baseHP: 180, goldReward: 165, tier: 4, color: '#4338ca', glow: 'rgba(67,56,202,0.5)', ambient: 'soul' },
    { name: '네크로맨서', emoji: '🧙', baseHP: 200, goldReward: 180, tier: 4, color: '#4c1d95', glow: 'rgba(76,29,149,0.6)', ambient: 'soul' },
    // Tier 5: 용의 둥지 (10 types)
    { name: '드래곤', emoji: '🐉', baseHP: 250, goldReward: 220, tier: 5, color: '#f59e0b', glow: 'rgba(245,158,11,0.6)', ambient: 'ember' },
    { name: '고대 용', emoji: '🐲', baseHP: 350, goldReward: 300, tier: 5, color: '#ef4444', glow: 'rgba(239,68,68,0.6)', ambient: 'ember' },
    { name: '얼음 드래곤', emoji: '🐉', baseHP: 280, goldReward: 245, tier: 5, color: '#06b6d4', glow: 'rgba(6,182,212,0.6)', ambient: 'soul' },
    { name: '독 드래곤', emoji: '🐲', baseHP: 300, goldReward: 265, tier: 5, color: '#84cc16', glow: 'rgba(132,204,22,0.6)', ambient: 'spore' },
    { name: '뼈 드래곤', emoji: '🦴', baseHP: 320, goldReward: 280, tier: 5, color: '#d6d3d1', glow: 'rgba(214,211,209,0.5)', ambient: 'soul' },
    { name: '용의 수호자', emoji: '🛡️', baseHP: 340, goldReward: 295, tier: 5, color: '#b45309', glow: 'rgba(180,83,9,0.6)', ambient: 'ember' },
    { name: '와이번', emoji: '🦅', baseHP: 260, goldReward: 230, tier: 5, color: '#15803d', glow: 'rgba(21,128,61,0.5)', ambient: 'ember' },
    { name: '히드라', emoji: '🐍', baseHP: 380, goldReward: 330, tier: 5, color: '#059669', glow: 'rgba(5,150,105,0.6)', ambient: 'ember' },
    { name: '바실리스크', emoji: '🐊', baseHP: 400, goldReward: 350, tier: 5, color: '#65a30d', glow: 'rgba(101,163,13,0.6)', ambient: 'spore' },
    { name: '드래곤 로드', emoji: '🐉', baseHP: 450, goldReward: 390, tier: 5, color: '#dc2626', glow: 'rgba(220,38,38,0.7)', ambient: 'ember' },
    // Tier 6: 신들의 영역 (10 types)
    { name: '타이탄', emoji: '⚡', baseHP: 550, goldReward: 470, tier: 6, color: '#fbbf24', glow: 'rgba(251,191,36,0.7)', ambient: 'lightning' },
    { name: '어둠의 군주', emoji: '👿', baseHP: 700, goldReward: 600, tier: 6, color: '#a855f7', glow: 'rgba(168,85,247,0.7)', ambient: 'lightning' },
    { name: '대천사', emoji: '😇', baseHP: 600, goldReward: 510, tier: 6, color: '#fef3c7', glow: 'rgba(254,243,199,0.7)', ambient: 'lightning' },
    { name: '크라켄', emoji: '🐙', baseHP: 650, goldReward: 555, tier: 6, color: '#0e7490', glow: 'rgba(14,116,144,0.6)', ambient: 'soul' },
    { name: '세계 뱀', emoji: '🐍', baseHP: 750, goldReward: 640, tier: 6, color: '#059669', glow: 'rgba(5,150,105,0.7)', ambient: 'lightning' },
    { name: '혼돈의 기사', emoji: '⚔️', baseHP: 800, goldReward: 680, tier: 6, color: '#7f1d1d', glow: 'rgba(127,29,29,0.7)', ambient: 'lightning' },
    { name: '빛의 수호자', emoji: '🌟', baseHP: 850, goldReward: 720, tier: 6, color: '#fbbf24', glow: 'rgba(251,191,36,0.8)', ambient: 'lightning' },
    { name: '허공의 파괴자', emoji: '🌀', baseHP: 900, goldReward: 765, tier: 6, color: '#6d28d9', glow: 'rgba(109,40,217,0.7)', ambient: 'lightning' },
    { name: '태양의 화신', emoji: '☀️', baseHP: 1000, goldReward: 850, tier: 6, color: '#f59e0b', glow: 'rgba(245,158,11,0.8)', ambient: 'lightning' },
    { name: '종말의 수호자', emoji: '💀', baseHP: 1200, goldReward: 1000, tier: 6, color: '#1e1b4b', glow: 'rgba(30,27,75,0.8)', ambient: 'lightning' },
    // Tier 7: 차원의 틈 (10 types)
    { name: '차원 균열자', emoji: '🌀', baseHP: 1500, goldReward: 1250, tier: 7, color: '#7c3aed', glow: 'rgba(124,58,237,0.7)', ambient: 'lightning' },
    { name: '시간의 파수꾼', emoji: '⏰', baseHP: 1700, goldReward: 1420, tier: 7, color: '#06b6d4', glow: 'rgba(6,182,212,0.7)', ambient: 'soul' },
    { name: '공허의 군주', emoji: '🕳️', baseHP: 1900, goldReward: 1580, tier: 7, color: '#1e1b4b', glow: 'rgba(30,27,75,0.7)', ambient: 'soul' },
    { name: '별의 포식자', emoji: '⭐', baseHP: 2100, goldReward: 1750, tier: 7, color: '#fbbf24', glow: 'rgba(251,191,36,0.7)', ambient: 'lightning' },
    { name: '차원의 마왕', emoji: '👿', baseHP: 2400, goldReward: 2000, tier: 7, color: '#dc2626', glow: 'rgba(220,38,38,0.7)', ambient: 'lightning' },
    { name: '우주 해파리', emoji: '🪼', baseHP: 1600, goldReward: 1340, tier: 7, color: '#c084fc', glow: 'rgba(192,132,252,0.6)', ambient: 'soul' },
    { name: '결정 거인', emoji: '💎', baseHP: 2000, goldReward: 1660, tier: 7, color: '#22d3ee', glow: 'rgba(34,211,238,0.7)', ambient: 'lightning' },
    { name: '에테르 드래곤', emoji: '🐲', baseHP: 2200, goldReward: 1830, tier: 7, color: '#a78bfa', glow: 'rgba(167,139,250,0.7)', ambient: 'lightning' },
    { name: '차원 수문장', emoji: '🛡️', baseHP: 2600, goldReward: 2160, tier: 7, color: '#4338ca', glow: 'rgba(67,56,202,0.7)', ambient: 'lightning' },
    { name: '무한의 존재', emoji: '♾️', baseHP: 3000, goldReward: 2500, tier: 7, color: '#e9d5ff', glow: 'rgba(233,213,255,0.8)', ambient: 'lightning' },
    // Tier 8: 태초의 혼돈 (10 types)
    { name: '원초적 혼돈', emoji: '🌊', baseHP: 3500, goldReward: 2900, tier: 8, color: '#0284c7', glow: 'rgba(2,132,199,0.7)', ambient: 'soul' },
    { name: '태초의 불꽃', emoji: '🔥', baseHP: 4000, goldReward: 3300, tier: 8, color: '#dc2626', glow: 'rgba(220,38,38,0.8)', ambient: 'ember' },
    { name: '세계 거북', emoji: '🐢', baseHP: 5000, goldReward: 4100, tier: 8, color: '#059669', glow: 'rgba(5,150,105,0.7)', ambient: 'leaf' },
    { name: '시간의 용', emoji: '🐉', baseHP: 4500, goldReward: 3700, tier: 8, color: '#7c3aed', glow: 'rgba(124,58,237,0.8)', ambient: 'lightning' },
    { name: '별의 거인', emoji: '⭐', baseHP: 5500, goldReward: 4500, tier: 8, color: '#fbbf24', glow: 'rgba(251,191,36,0.8)', ambient: 'lightning' },
    { name: '원소 타이탄', emoji: '🌍', baseHP: 6000, goldReward: 4900, tier: 8, color: '#15803d', glow: 'rgba(21,128,61,0.8)', ambient: 'ember' },
    { name: '운명의 심판자', emoji: '⚖️', baseHP: 6500, goldReward: 5300, tier: 8, color: '#fef3c7', glow: 'rgba(254,243,199,0.8)', ambient: 'lightning' },
    { name: '혼돈의 화신', emoji: '💥', baseHP: 7000, goldReward: 5700, tier: 8, color: '#ef4444', glow: 'rgba(239,68,68,0.8)', ambient: 'ember' },
    { name: '영원의 감시자', emoji: '👁️', baseHP: 8000, goldReward: 6500, tier: 8, color: '#a855f7', glow: 'rgba(168,85,247,0.8)', ambient: 'lightning' },
    { name: '태초의 존재', emoji: '🌌', baseHP: 10000, goldReward: 8000, tier: 8, color: '#1e1b4b', glow: 'rgba(30,27,75,0.9)', ambient: 'lightning' },
    // Tier 9: 신화의 영역 (10 types)
    { name: '오딘', emoji: '⚡', baseHP: 12000, goldReward: 9600, tier: 9, color: '#fbbf24', glow: 'rgba(251,191,36,0.9)', ambient: 'lightning' },
    { name: '토르', emoji: '🔨', baseHP: 14000, goldReward: 11200, tier: 9, color: '#3b82f6', glow: 'rgba(59,130,246,0.8)', ambient: 'lightning' },
    { name: '하데스', emoji: '💀', baseHP: 16000, goldReward: 12800, tier: 9, color: '#4c1d95', glow: 'rgba(76,29,149,0.8)', ambient: 'soul' },
    { name: '포세이돈', emoji: '🔱', baseHP: 18000, goldReward: 14400, tier: 9, color: '#0284c7', glow: 'rgba(2,132,199,0.8)', ambient: 'soul' },
    { name: '아레스', emoji: '⚔️', baseHP: 20000, goldReward: 16000, tier: 9, color: '#dc2626', glow: 'rgba(220,38,38,0.8)', ambient: 'ember' },
    { name: '아테나', emoji: '🦉', baseHP: 22000, goldReward: 17600, tier: 9, color: '#d97706', glow: 'rgba(217,119,6,0.8)', ambient: 'lightning' },
    { name: '제우스', emoji: '⚡', baseHP: 25000, goldReward: 20000, tier: 9, color: '#fbbf24', glow: 'rgba(251,191,36,0.9)', ambient: 'lightning' },
    { name: '크로노스', emoji: '⏳', baseHP: 30000, goldReward: 24000, tier: 9, color: '#6d28d9', glow: 'rgba(109,40,217,0.9)', ambient: 'lightning' },
    { name: '가이아', emoji: '🌍', baseHP: 35000, goldReward: 28000, tier: 9, color: '#15803d', glow: 'rgba(21,128,61,0.9)', ambient: 'leaf' },
    { name: '카오스', emoji: '🌑', baseHP: 50000, goldReward: 40000, tier: 9, color: '#0f172a', glow: 'rgba(15,23,42,0.9)', ambient: 'lightning' },
    // Tier 10: 세계의 끝 (10 types)
    { name: '세계의 뱀 요르문간드', emoji: '🐍', baseHP: 60000, goldReward: 48000, tier: 10, color: '#059669', glow: 'rgba(5,150,105,0.9)', ambient: 'lightning' },
    { name: '파괴신 수르트', emoji: '🔥', baseHP: 75000, goldReward: 60000, tier: 10, color: '#dc2626', glow: 'rgba(220,38,38,0.9)', ambient: 'ember' },
    { name: '세계 늑대 펜리르', emoji: '🐺', baseHP: 90000, goldReward: 72000, tier: 10, color: '#475569', glow: 'rgba(71,85,105,0.9)', ambient: 'lightning' },
    { name: '심연의 황제', emoji: '👑', baseHP: 110000, goldReward: 88000, tier: 10, color: '#7c3aed', glow: 'rgba(124,58,237,0.9)', ambient: 'lightning' },
    { name: '차원의 파괴자', emoji: '💥', baseHP: 130000, goldReward: 104000, tier: 10, color: '#ef4444', glow: 'rgba(239,68,68,0.9)', ambient: 'ember' },
    { name: '영겁의 수호자', emoji: '🛡️', baseHP: 160000, goldReward: 128000, tier: 10, color: '#fbbf24', glow: 'rgba(251,191,36,0.9)', ambient: 'lightning' },
    { name: '우주의 심장', emoji: '💜', baseHP: 200000, goldReward: 160000, tier: 10, color: '#a855f7', glow: 'rgba(168,85,247,0.9)', ambient: 'lightning' },
    { name: '시간의 종말', emoji: '⏰', baseHP: 250000, goldReward: 200000, tier: 10, color: '#06b6d4', glow: 'rgba(6,182,212,0.9)', ambient: 'lightning' },
    { name: '절대적 존재', emoji: '✨', baseHP: 350000, goldReward: 280000, tier: 10, color: '#fef3c7', glow: 'rgba(254,243,199,0.9)', ambient: 'lightning' },
    { name: '??? (최종)', emoji: '❓', baseHP: 500000, goldReward: 400000, tier: 10, color: '#e9d5ff', glow: 'rgba(233,213,255,1)', ambient: 'lightning' },
];

// High-quality SVG Monster Art - Clicker Heroes inspired
// Bold outlines, cartoon shading, detailed features, dynamic poses
const MONSTER_SVG = {
    '슬라임': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="s1" cx="40%" cy="35%"><stop offset="0%" stop-color="#a7f3d0"/><stop offset="60%" stop-color="#34d399"/><stop offset="100%" stop-color="#059669"/></radialGradient>
            <radialGradient id="s2" cx="30%" cy="20%"><stop offset="0%" stop-color="#fff" stop-opacity="0.5"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
        </defs>
        <!-- Shadow -->
        <ellipse cx="60" cy="104" rx="38" ry="8" fill="rgba(0,0,0,0.25)"/>
        <!-- Body -->
        <path d="M18 75c0-30 6-42 14-48 3-2 5-1 7 2l5 8c2-3 5-6 8-6 4 0 7 4 8 6l5-8c2-3 4-4 7-2 8 6 14 18 14 48 0 16-16 28-34 28S18 91 18 75z" fill="url(#s1)" stroke="#047857" stroke-width="2.5"/>
        <!-- Drip left -->
        <path d="M22 82c-2 4-4 10-2 16 1 3 3 4 4 2 1-3 0-8 1-12z" fill="#34d399" stroke="#047857" stroke-width="1.5"/>
        <!-- Drip right -->
        <path d="M90 78c2 6 3 12 1 18-1 2-3 3-4 1-1-4 0-10 0-14z" fill="#34d399" stroke="#047857" stroke-width="1.5"/>
        <!-- Highlight -->
        <ellipse cx="42" cy="52" rx="18" ry="14" fill="url(#s2)"/>
        <!-- Left eye white -->
        <ellipse cx="42" cy="66" rx="10" ry="12" fill="#fff" stroke="#047857" stroke-width="2"/>
        <!-- Right eye white -->
        <ellipse cx="72" cy="66" rx="10" ry="12" fill="#fff" stroke="#047857" stroke-width="2"/>
        <!-- Left pupil -->
        <ellipse cx="44" cy="68" rx="5" ry="7" fill="#064e3b"/><circle cx="42" cy="64" r="2.5" fill="#fff"/>
        <!-- Right pupil -->
        <ellipse cx="74" cy="68" rx="5" ry="7" fill="#064e3b"/><circle cx="72" cy="64" r="2.5" fill="#fff"/>
        <!-- Cute mouth -->
        <path d="M47 82c5 6 18 6 22 0" stroke="#064e3b" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <!-- Cheek blush -->
        <ellipse cx="32" cy="76" rx="5" ry="3" fill="#f0abfc" opacity="0.3"/>
        <ellipse cx="82" cy="76" rx="5" ry="3" fill="#f0abfc" opacity="0.3"/>
        <!-- Highlight spot -->
        <ellipse cx="34" cy="54" rx="6" ry="4" fill="#fff" opacity="0.25" transform="rotate(-20 34 54)"/>
    </svg>`,
    '고블린': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gb1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#bef264"/><stop offset="100%" stop-color="#4d7c0f"/></linearGradient>
            <linearGradient id="gb2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a16207"/><stop offset="100%" stop-color="#713f12"/></linearGradient>
        </defs>
        <ellipse cx="58" cy="108" rx="24" ry="6" fill="rgba(0,0,0,0.2)"/>
        <!-- Left ear -->
        <path d="M24 52l-16-10c-2-1-2-4 0-5l14-2z" fill="#84cc16" stroke="#365314" stroke-width="2"/>
        <path d="M14 40l8 4" stroke="#bef264" stroke-width="1.5" opacity="0.5"/>
        <!-- Right ear -->
        <path d="M92 52l16-10c2-1 2-4 0-5l-14-2z" fill="#84cc16" stroke="#365314" stroke-width="2"/>
        <path d="M102 40l-8 4" stroke="#bef264" stroke-width="1.5" opacity="0.5"/>
        <!-- Body -->
        <ellipse cx="58" cy="80" rx="18" ry="22" fill="url(#gb1)" stroke="#365314" stroke-width="2.5"/>
        <!-- Vest -->
        <path d="M42 68c0 8 2 20 6 28h20c4-8 6-20 6-28-4-4-12-6-16-6s-12 2-16 6z" fill="url(#gb2)" stroke="#422006" stroke-width="1.5"/>
        <path d="M56 62v34" stroke="#422006" stroke-width="1" opacity="0.5"/>
        <!-- Head -->
        <ellipse cx="58" cy="50" rx="22" ry="20" fill="url(#gb1)" stroke="#365314" stroke-width="2.5"/>
        <!-- Eyebrow left -->
        <path d="M40 38l12 2" stroke="#365314" stroke-width="3" stroke-linecap="round"/>
        <!-- Eyebrow right -->
        <path d="M66 40l12-2" stroke="#365314" stroke-width="3" stroke-linecap="round"/>
        <!-- Left eye -->
        <ellipse cx="47" cy="47" rx="7" ry="8" fill="#fff" stroke="#365314" stroke-width="2"/>
        <ellipse cx="49" cy="48" rx="4" ry="5" fill="#1a2e05"/><circle cx="47" cy="45" r="2" fill="#fff"/>
        <!-- Right eye -->
        <ellipse cx="69" cy="47" rx="7" ry="8" fill="#fff" stroke="#365314" stroke-width="2"/>
        <ellipse cx="71" cy="48" rx="4" ry="5" fill="#1a2e05"/><circle cx="69" cy="45" r="2" fill="#fff"/>
        <!-- Nose -->
        <ellipse cx="58" cy="54" rx="4" ry="3" fill="#65a30d" stroke="#365314" stroke-width="1.5"/>
        <!-- Mean grin -->
        <path d="M46 60c4 6 16 6 22 0" stroke="#365314" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M50 61l-2 4" stroke="#fef9c3" stroke-width="2" stroke-linecap="round"/>
        <path d="M66 61l2 4" stroke="#fef9c3" stroke-width="2" stroke-linecap="round"/>
        <!-- Legs -->
        <rect x="44" y="96" width="8" height="12" rx="4" fill="#4d7c0f" stroke="#365314" stroke-width="1.5"/>
        <rect x="64" y="96" width="8" height="12" rx="4" fill="#4d7c0f" stroke="#365314" stroke-width="1.5"/>
        <!-- Dagger -->
        <g transform="rotate(-30 95 65)">
            <rect x="90" y="58" width="3" height="18" rx="1" fill="#94a3b8" stroke="#475569" stroke-width="1"/>
            <rect x="87" y="74" width="9" height="4" rx="1.5" fill="#78350f" stroke="#422006" stroke-width="1"/>
            <path d="M91.5 58l-1-8 2.5 0z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.5"/>
        </g>
    </svg>`,
    '박쥐': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bt1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#334155"/></linearGradient>
            <linearGradient id="bt2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#64748b"/><stop offset="100%" stop-color="#1e293b"/></linearGradient>
        </defs>
        <!-- Left wing -->
        <path d="M46 52c-4-2-10-2-16 2-6 4-12 2-18-2-2-2 0-4 2-3 4 2 8 0 10-4 2-4 0-10-4-16-2-2 1-4 3-2 6 6 12 10 16 8 2-2 6-8 6-14 0-2 2-3 3-1 2 6 2 14-2 20l-1 11z" fill="url(#bt2)" stroke="#1e293b" stroke-width="2"/>
        <!-- Right wing -->
        <path d="M74 52c4-2 10-2 16 2 6 4 12 2 18-2 2-2 0-4-2-3-4 2-8 0-10-4-2-4 0-10 4-16 2-2-1-4-3-2-6 6-12 10-16 8-2-2-6-8-6-14 0-2-2-3-3-1-2 6-2 14 2 20l1 11z" fill="url(#bt2)" stroke="#1e293b" stroke-width="2"/>
        <!-- Wing membrane lines -->
        <path d="M28 34l14 20M20 48l22 6M38 22l6 30" stroke="#475569" stroke-width="1" opacity="0.4"/>
        <path d="M92 34l-14 20M100 48l-22 6M82 22l-6 30" stroke="#475569" stroke-width="1" opacity="0.4"/>
        <!-- Body -->
        <ellipse cx="60" cy="58" rx="16" ry="20" fill="url(#bt1)" stroke="#1e293b" stroke-width="2.5"/>
        <!-- Belly -->
        <ellipse cx="60" cy="64" rx="10" ry="12" fill="#94a3b8" opacity="0.3"/>
        <!-- Ears -->
        <path d="M48 40l-6-16 10 10z" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
        <path d="M72 40l6-16-10 10z" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
        <path d="M45 32l4 6" stroke="#a78bfa" stroke-width="1" opacity="0.5"/>
        <path d="M75 32l-4 6" stroke="#a78bfa" stroke-width="1" opacity="0.5"/>
        <!-- Eyes -->
        <ellipse cx="52" cy="52" rx="6" ry="7" fill="#fbbf24" stroke="#1e293b" stroke-width="2"/>
        <ellipse cx="52" cy="53" rx="3" ry="5" fill="#78350f"/><circle cx="50" cy="50" r="1.5" fill="#fef3c7"/>
        <ellipse cx="68" cy="52" rx="6" ry="7" fill="#fbbf24" stroke="#1e293b" stroke-width="2"/>
        <ellipse cx="68" cy="53" rx="3" ry="5" fill="#78350f"/><circle cx="66" cy="50" r="1.5" fill="#fef3c7"/>
        <!-- Mouth with fangs -->
        <path d="M53 66c3 3 10 3 14 0" stroke="#1e293b" stroke-width="2" fill="none"/>
        <path d="M55 66l-2 5" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round"/>
        <path d="M65 66l2 5" stroke="#f1f5f9" stroke-width="2" stroke-linecap="round"/>
        <!-- Feet -->
        <path d="M52 76c-1 3 0 5 2 5s3-2 2-5" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>
        <path d="M62 76c-1 3 0 5 2 5s3-2 2-5" fill="#475569" stroke="#1e293b" stroke-width="1.5"/>
    </svg>`,
    '늑대': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="wf1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#94a3b8"/><stop offset="100%" stop-color="#475569"/></linearGradient>
        </defs>
        <ellipse cx="60" cy="106" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
        <!-- Tail -->
        <path d="M84 70c8-4 16-2 20 4 2 6-2 12-8 14-4 1-8-1-10-4" fill="#64748b" stroke="#334155" stroke-width="2"/>
        <!-- Back legs -->
        <rect x="70" y="88" width="10" height="18" rx="5" fill="#64748b" stroke="#334155" stroke-width="2"/>
        <rect x="58" y="90" width="10" height="16" rx="5" fill="#64748b" stroke="#334155" stroke-width="2"/>
        <!-- Body -->
        <ellipse cx="58" cy="72" rx="28" ry="22" fill="url(#wf1)" stroke="#334155" stroke-width="2.5"/>
        <!-- Chest fur -->
        <path d="M36 65c4 8 8 16 14 20 6-4 10-12 14-20-6-2-12-3-14-3s-8 1-14 3z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1" opacity="0.6"/>
        <!-- Front legs -->
        <rect x="30" y="86" width="10" height="20" rx="5" fill="#64748b" stroke="#334155" stroke-width="2"/>
        <rect x="42" y="88" width="10" height="18" rx="5" fill="#64748b" stroke="#334155" stroke-width="2"/>
        <!-- Head -->
        <ellipse cx="38" cy="52" rx="20" ry="18" fill="url(#wf1)" stroke="#334155" stroke-width="2.5"/>
        <!-- Snout -->
        <ellipse cx="25" cy="58" rx="12" ry="8" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
        <ellipse cx="25" cy="54" rx="6" ry="4" fill="#cbd5e1" opacity="0.4"/>
        <!-- Nose -->
        <ellipse cx="16" cy="56" rx="4" ry="3" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
        <!-- Ears -->
        <path d="M30 38l-8-22 14 14z" fill="#64748b" stroke="#334155" stroke-width="2"/>
        <path d="M46 38l8-22-14 14z" fill="#64748b" stroke="#334155" stroke-width="2"/>
        <path d="M25 22l5 12" stroke="#e2e8f0" stroke-width="1.5" opacity="0.4"/>
        <path d="M51 22l-5 12" stroke="#e2e8f0" stroke-width="1.5" opacity="0.4"/>
        <!-- Eyes -->
        <ellipse cx="32" cy="48" rx="5" ry="6" fill="#fbbf24" stroke="#334155" stroke-width="2"/>
        <ellipse cx="32" cy="49" rx="3" ry="4" fill="#78350f"/><circle cx="31" cy="46" r="1.5" fill="#fef3c7"/>
        <ellipse cx="44" cy="48" rx="5" ry="6" fill="#fbbf24" stroke="#334155" stroke-width="2"/>
        <ellipse cx="44" cy="49" rx="3" ry="4" fill="#78350f"/><circle cx="43" cy="46" r="1.5" fill="#fef3c7"/>
        <!-- Snarl mouth -->
        <path d="M16 62c4 4 14 4 20 0" stroke="#334155" stroke-width="2" fill="none"/>
        <path d="M19 62l-1 4" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M30 64l0 3" stroke="#f1f5f9" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`,
    '독거미': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="sp1" cx="40%" cy="30%"><stop offset="0%" stop-color="#d8b4fe"/><stop offset="100%" stop-color="#6d28d9"/></radialGradient>
            <radialGradient id="sp2" cx="40%" cy="30%"><stop offset="0%" stop-color="#c084fc"/><stop offset="100%" stop-color="#581c87"/></radialGradient>
        </defs>
        <!-- Legs -->
        <g stroke="#581c87" stroke-width="3" stroke-linecap="round" fill="none">
            <path d="M38 52c-8-6-18-8-26-2"/><path d="M82 52c8-6 18-8 26-2"/>
            <path d="M36 60c-12-2-24 2-30 10"/><path d="M84 60c12-2 24 2 30 10"/>
            <path d="M38 68c-10 4-18 14-18 24"/><path d="M82 68c10 4 18 14 18 24"/>
            <path d="M42 74c-6 8-8 18-4 26"/><path d="M78 74c6 8 8 18 4 26"/>
        </g>
        <!-- Leg joints -->
        <circle cx="12" cy="50" r="3" fill="#7c3aed"/><circle cx="108" cy="50" r="3" fill="#7c3aed"/>
        <circle cx="6" cy="70" r="3" fill="#7c3aed"/><circle cx="114" cy="70" r="3" fill="#7c3aed"/>
        <circle cx="20" cy="92" r="3" fill="#7c3aed"/><circle cx="100" cy="92" r="3" fill="#7c3aed"/>
        <circle cx="38" cy="100" r="3" fill="#7c3aed"/><circle cx="82" cy="100" r="3" fill="#7c3aed"/>
        <!-- Abdomen -->
        <ellipse cx="60" cy="72" rx="24" ry="20" fill="url(#sp2)" stroke="#3b0764" stroke-width="2.5"/>
        <!-- Abdomen pattern (hourglass) -->
        <path d="M54 64l6 8-6 8M66 64l-6 8 6 8" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
        <ellipse cx="60" cy="72" rx="6" ry="4" fill="#ef4444" opacity="0.6"/>
        <!-- Cephalothorax -->
        <circle cx="60" cy="46" r="18" fill="url(#sp1)" stroke="#3b0764" stroke-width="2.5"/>
        <!-- Eyes (8 eyes - spider!) -->
        <circle cx="52" cy="40" r="5" fill="#ef4444" stroke="#3b0764" stroke-width="1.5"/>
        <circle cx="52" cy="40" r="2.5" fill="#450a0a"/><circle cx="50" cy="38" r="1.5" fill="#fca5a5"/>
        <circle cx="68" cy="40" r="5" fill="#ef4444" stroke="#3b0764" stroke-width="1.5"/>
        <circle cx="68" cy="40" r="2.5" fill="#450a0a"/><circle cx="66" cy="38" r="1.5" fill="#fca5a5"/>
        <!-- Small eyes -->
        <circle cx="56" cy="34" r="2.5" fill="#ef4444" stroke="#3b0764" stroke-width="1"/>
        <circle cx="64" cy="34" r="2.5" fill="#ef4444" stroke="#3b0764" stroke-width="1"/>
        <circle cx="48" cy="44" r="2" fill="#ef4444" stroke="#3b0764" stroke-width="1"/>
        <circle cx="72" cy="44" r="2" fill="#ef4444" stroke="#3b0764" stroke-width="1"/>
        <!-- Chelicerae (fangs) -->
        <path d="M55 54c-1 4-2 10-1 14" stroke="#e9d5ff" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M65 54c1 4 2 10 1 14" stroke="#e9d5ff" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Pedipalps -->
        <path d="M50 50l-6 4" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M70 50l6 4" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,
    '트롤': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="tr1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a3e635"/><stop offset="100%" stop-color="#3f6212"/></linearGradient>
        </defs>
        <ellipse cx="58" cy="110" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
        <!-- Club -->
        <g transform="rotate(20 100 40)">
            <rect x="94" y="40" width="8" height="45" rx="3" fill="#78350f" stroke="#422006" stroke-width="2"/>
            <ellipse cx="98" cy="36" rx="12" ry="10" fill="#92400e" stroke="#422006" stroke-width="2"/>
            <circle cx="92" cy="32" r="3" fill="#78716c" stroke="#57534e" stroke-width="1"/>
            <circle cx="102" cy="30" r="2.5" fill="#78716c" stroke="#57534e" stroke-width="1"/>
            <circle cx="106" cy="38" r="2" fill="#78716c" stroke="#57534e" stroke-width="1"/>
        </g>
        <!-- Legs -->
        <rect x="34" y="88" width="14" height="22" rx="6" fill="#4d7c0f" stroke="#365314" stroke-width="2"/>
        <rect x="62" y="88" width="14" height="22" rx="6" fill="#4d7c0f" stroke="#365314" stroke-width="2"/>
        <!-- Body -->
        <ellipse cx="55" cy="68" rx="30" ry="28" fill="url(#tr1)" stroke="#365314" stroke-width="2.5"/>
        <!-- Belly -->
        <ellipse cx="55" cy="74" rx="18" ry="14" fill="#bef264" opacity="0.3" stroke="#65a30d" stroke-width="1"/>
        <!-- Left arm -->
        <path d="M26 55c-8 4-14 14-12 24l2 1 14-16z" fill="#4d7c0f" stroke="#365314" stroke-width="2"/>
        <!-- Right arm (holding club) -->
        <path d="M84 55c6 4 10 10 10 18" fill="none" stroke="#365314" stroke-width="2"/>
        <ellipse cx="86" cy="58" rx="8" ry="10" fill="#4d7c0f" stroke="#365314" stroke-width="2"/>
        <!-- Head -->
        <ellipse cx="55" cy="38" rx="22" ry="20" fill="url(#tr1)" stroke="#365314" stroke-width="2.5"/>
        <!-- Ears -->
        <path d="M33 32l-8-14 12 6z" fill="#65a30d" stroke="#365314" stroke-width="2"/>
        <path d="M77 32l8-14-12 6z" fill="#65a30d" stroke="#365314" stroke-width="2"/>
        <!-- Brow ridge -->
        <path d="M36 32c6-4 14-4 20-2 6-2 14-2 20 2" stroke="#365314" stroke-width="3" fill="none"/>
        <!-- Eyes (small, angry) -->
        <ellipse cx="45" cy="38" rx="5" ry="4" fill="#fef9c3" stroke="#365314" stroke-width="2"/>
        <circle cx="46" cy="38" r="3" fill="#1a2e05"/>
        <ellipse cx="65" cy="38" rx="5" ry="4" fill="#fef9c3" stroke="#365314" stroke-width="2"/>
        <circle cx="66" cy="38" r="3" fill="#1a2e05"/>
        <!-- Nose -->
        <ellipse cx="55" cy="44" rx="6" ry="4" fill="#65a30d" stroke="#365314" stroke-width="2"/>
        <circle cx="52" cy="44" r="1.5" fill="#365314"/><circle cx="58" cy="44" r="1.5" fill="#365314"/>
        <!-- Tusks + Mouth -->
        <path d="M42 52c5 5 18 5 26 0" stroke="#365314" stroke-width="2.5" fill="none"/>
        <path d="M44 52l-4 8" stroke="#fef9c3" stroke-width="3" stroke-linecap="round"/>
        <path d="M66 52l4 8" stroke="#fef9c3" stroke-width="3" stroke-linecap="round"/>
    </svg>`,
    '화염 정령': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="fe1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#991b1b"/><stop offset="30%" stop-color="#dc2626"/><stop offset="60%" stop-color="#f97316"/><stop offset="100%" stop-color="#fde68a"/></linearGradient>
            <linearGradient id="fe2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
            <radialGradient id="fe3" cx="50%" cy="50%"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#f97316" stop-opacity="0"/></radialGradient>
        </defs>
        <!-- Core glow -->
        <circle cx="58" cy="60" r="35" fill="url(#fe3)" opacity="0.4"/>
        <ellipse cx="58" cy="105" rx="22" ry="5" fill="rgba(239,68,68,0.2)"/>
        <!-- Main flame body -->
        <path d="M36 95c-6-18-4-36 2-50 3 10 8 16 14 14-2-16 6-32 14-42 4 16 6 22 12 20 4-8 8-16 10-22 4 12 6 28 2 46-2 10-4 18-8 24l2 8c-6 4-14 6-24 6s-18-2-24-4z" fill="url(#fe1)" stroke="#b91c1c" stroke-width="2"/>
        <!-- Inner flame -->
        <path d="M44 90c-2-14 0-28 4-38 2 8 6 12 10 10 0-12 4-22 10-28 2 10 4 16 8 14 4 10 6 22 2 36-2 6-8 10-18 10s-14-2-16-4z" fill="url(#fe2)" opacity="0.7"/>
        <!-- Core -->
        <ellipse cx="58" cy="68" rx="12" ry="16" fill="#fef3c7" opacity="0.4"/>
        <!-- Eyes -->
        <ellipse cx="48" cy="60" rx="6" ry="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
        <ellipse cx="48" cy="62" rx="3.5" ry="5" fill="#7c2d12"/><circle cx="46" cy="58" r="2" fill="#fff"/>
        <ellipse cx="68" cy="60" rx="6" ry="8" fill="#fff" stroke="#b91c1c" stroke-width="2"/>
        <ellipse cx="68" cy="62" rx="3.5" ry="5" fill="#7c2d12"/><circle cx="66" cy="58" r="2" fill="#fff"/>
        <!-- Mouth -->
        <path d="M50 76c4 4 12 4 16 0" stroke="#7c2d12" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <!-- Flame wisps -->
        <path d="M30 60c-4-10 0-24 6-32" stroke="#fde68a" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.5"/>
        <path d="M82 55c2-8 6-18 4-28" stroke="#fde68a" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.5"/>
        <path d="M46 28c-2-6 0-14 4-18" stroke="#fde68a" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.4"/>
        <!-- Embers -->
        <circle cx="34" cy="42" r="2" fill="#fbbf24" opacity="0.7"/><circle cx="78" cy="38" r="1.5" fill="#fbbf24" opacity="0.6"/>
        <circle cx="26" cy="55" r="1.5" fill="#f97316" opacity="0.5"/><circle cx="86" cy="50" r="2" fill="#f97316" opacity="0.5"/>
    </svg>`,
    '용암 골렘': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#78716c"/><stop offset="100%" stop-color="#292524"/></linearGradient>
            <linearGradient id="lg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#ef4444"/></linearGradient>
        </defs>
        <ellipse cx="60" cy="110" rx="30" ry="6" fill="rgba(0,0,0,0.25)"/>
        <!-- Legs -->
        <rect x="36" y="90" width="16" height="18" rx="6" fill="#44403c" stroke="#1c1917" stroke-width="2.5"/>
        <path d="M38 95h12" stroke="#f97316" stroke-width="1.5" opacity="0.6"/>
        <rect x="68" y="90" width="16" height="18" rx="6" fill="#44403c" stroke="#1c1917" stroke-width="2.5"/>
        <path d="M70 95h12" stroke="#f97316" stroke-width="1.5" opacity="0.6"/>
        <!-- Body (rocky) -->
        <path d="M30 48c-2 8-4 20-2 32 1 8 6 14 14 16h36c8-2 13-8 14-16 2-12 0-24-2-32-4-6-12-10-30-10s-26 4-30 10z" fill="url(#lg1)" stroke="#1c1917" stroke-width="2.5"/>
        <!-- Lava cracks -->
        <path d="M40 55l8 12-4 14M70 50l-6 16 4 18" stroke="url(#lg2)" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M50 48l2 20M74 54l-2 14" stroke="#f97316" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.6"/>
        <!-- Lava glow from cracks -->
        <path d="M40 55l8 12-4 14" stroke="#fbbf24" stroke-width="1" stroke-linecap="round" fill="none" opacity="0.4"/>
        <!-- Arms -->
        <rect x="20" y="52" width="14" height="36" rx="7" fill="#57534e" stroke="#1c1917" stroke-width="2.5"/>
        <path d="M24 60h6M24 70h6" stroke="#f97316" stroke-width="1.5" opacity="0.5"/>
        <rect x="86" y="52" width="14" height="36" rx="7" fill="#57534e" stroke="#1c1917" stroke-width="2.5"/>
        <path d="M90 60h6M90 70h6" stroke="#f97316" stroke-width="1.5" opacity="0.5"/>
        <!-- Fists -->
        <circle cx="27" cy="90" r="8" fill="#44403c" stroke="#1c1917" stroke-width="2"/>
        <circle cx="93" cy="90" r="8" fill="#44403c" stroke="#1c1917" stroke-width="2"/>
        <!-- Head -->
        <path d="M38 28c-4-6 0-14 6-18l6 8 10-14 10 14 6-8c6 4 10 12 6 18l-2 6H40z" fill="#57534e" stroke="#1c1917" stroke-width="2.5"/>
        <rect x="38" y="32" width="44" height="22" rx="4" fill="url(#lg1)" stroke="#1c1917" stroke-width="2.5"/>
        <!-- Eyes (lava) -->
        <rect x="44" y="36" rx="3" width="12" height="10" fill="#ef4444" stroke="#1c1917" stroke-width="2"/>
        <ellipse cx="50" cy="41" rx="3" ry="3" fill="#fbbf24"/>
        <rect x="64" y="36" rx="3" width="12" height="10" fill="#ef4444" stroke="#1c1917" stroke-width="2"/>
        <ellipse cx="70" cy="41" rx="3" ry="3" fill="#fbbf24"/>
        <!-- Mouth -->
        <path d="M48 52h24" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
        <path d="M48 52h24" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round" opacity="0.5"/>
    </svg>`,
    '불사조': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="ph1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#fde68a"/><stop offset="40%" stop-color="#f97316"/><stop offset="100%" stop-color="#dc2626"/></linearGradient>
            <linearGradient id="ph2" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#fef3c7"/></linearGradient>
            <radialGradient id="ph3"><stop offset="0%" stop-color="#fef3c7" stop-opacity="0.6"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <circle cx="60" cy="55" r="40" fill="url(#ph3)"/>
        <!-- Tail feathers -->
        <path d="M30 85c-8 6-16 16-18 28" stroke="#ef4444" stroke-width="3" stroke-linecap="round" fill="none"/>
        <path d="M36 88c-6 8-10 18-8 28" stroke="#f97316" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M42 90c-2 8-2 18 2 26" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" fill="none"/>
        <!-- Left wing -->
        <path d="M30 50c-10-6-20-18-22-32 4 4 10 6 16 4-2-8 2-18 8-24 2 8 4 14 8 12 2-6 6-14 10-18-2 10 0 18 4 22l-6 10z" fill="url(#ph1)" stroke="#b91c1c" stroke-width="2"/>
        <!-- Right wing -->
        <path d="M80 50c10-6 20-18 22-32-4 4-10 6-16 4 2-8-2-18-8-24-2 8-4 14-8 12-2-6-6-14-10-18 2 10 0 18-4 22l6 10z" fill="url(#ph1)" stroke="#b91c1c" stroke-width="2"/>
        <!-- Body -->
        <ellipse cx="56" cy="62" rx="20" ry="24" fill="url(#ph1)" stroke="#b91c1c" stroke-width="2.5"/>
        <!-- Chest -->
        <ellipse cx="56" cy="68" rx="12" ry="14" fill="url(#ph2)" opacity="0.6"/>
        <!-- Head -->
        <circle cx="56" cy="40" r="14" fill="#f97316" stroke="#b91c1c" stroke-width="2.5"/>
        <!-- Head crest/crown -->
        <path d="M48 30c-2-8 0-14 4-18" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M54 28c0-8 2-14 4-18" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M60 30c2-8 4-12 8-14" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="52" cy="12" r="2" fill="#fbbf24"/><circle cx="58" cy="10" r="2" fill="#ef4444"/><circle cx="68" cy="16" r="2" fill="#fbbf24"/>
        <!-- Eyes -->
        <ellipse cx="50" cy="38" rx="4" ry="5" fill="#fff" stroke="#7c2d12" stroke-width="1.5"/>
        <ellipse cx="50" cy="39" rx="2.5" ry="3.5" fill="#7c2d12"/><circle cx="49" cy="37" r="1.5" fill="#fef3c7"/>
        <ellipse cx="64" cy="38" rx="4" ry="5" fill="#fff" stroke="#7c2d12" stroke-width="1.5"/>
        <ellipse cx="64" cy="39" rx="2.5" ry="3.5" fill="#7c2d12"/><circle cx="63" cy="37" r="1.5" fill="#fef3c7"/>
        <!-- Beak -->
        <path d="M54 44l3 6 5-4z" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>
    </svg>`,
    '리치': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="li1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
            <radialGradient id="li2"><stop offset="0%" stop-color="#06b6d4" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <circle cx="60" cy="55" r="35" fill="url(#li2)"/>
        <ellipse cx="60" cy="108" rx="24" ry="5" fill="rgba(0,0,0,0.2)"/>
        <!-- Staff -->
        <line x1="90" y1="15" x2="90" y2="105" stroke="#78716c" stroke-width="3"/>
        <circle cx="90" cy="14" r="8" fill="none" stroke="#06b6d4" stroke-width="2.5"/>
        <circle cx="90" cy="14" r="4" fill="#06b6d4" opacity="0.8"/>
        <circle cx="90" cy="14" r="2" fill="#fff" opacity="0.6"/>
        <!-- Robe body -->
        <path d="M30 40c-2 8-6 28-4 50 0 8 4 14 10 16h48c6-2 10-8 10-16 2-22-2-42-4-50-6-8-16-14-30-14s-24 6-30 14z" fill="url(#li1)" stroke="#0f172a" stroke-width="2.5"/>
        <!-- Robe details -->
        <path d="M60 40v66" stroke="#164e63" stroke-width="1.5" opacity="0.3"/>
        <path d="M40 50c10 4 20 4 30 0" stroke="#164e63" stroke-width="1" opacity="0.3"/>
        <!-- Robe trim -->
        <path d="M36 100c8 4 20 6 30 6s22-2 30-6" stroke="#06b6d4" stroke-width="2" opacity="0.4"/>
        <!-- Skull face -->
        <ellipse cx="58" cy="48" rx="18" ry="20" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
        <!-- Hood -->
        <path d="M30 40c0-10 10-22 30-22s30 12 30 22c-4-8-14-14-30-14s-26 6-30 14z" fill="#1e293b" stroke="#0f172a" stroke-width="2.5"/>
        <path d="M34 40c0-8 10-18 26-18s26 10 26 18" fill="#0f172a" stroke="#0f172a" stroke-width="1"/>
        <!-- Eye sockets -->
        <ellipse cx="50" cy="46" rx="7" ry="8" fill="#0c4a6e" stroke="#0f172a" stroke-width="2"/>
        <ellipse cx="50" cy="46" rx="4" ry="5" fill="#06b6d4"/><circle cx="48" cy="44" r="2" fill="#fff" opacity="0.8"/>
        <ellipse cx="66" cy="46" rx="7" ry="8" fill="#0c4a6e" stroke="#0f172a" stroke-width="2"/>
        <ellipse cx="66" cy="46" rx="4" ry="5" fill="#06b6d4"/><circle cx="64" cy="44" r="2" fill="#fff" opacity="0.8"/>
        <!-- Nose hole -->
        <path d="M56 54l2 4 4-4" fill="#475569"/>
        <!-- Jaw -->
        <path d="M44 60c6 6 18 6 28 0" stroke="#64748b" stroke-width="2" fill="none"/>
        <path d="M46 60v4M50 62v3M54 62v4M58 62v3M62 62v4M66 62v3M70 60v4" stroke="#94a3b8" stroke-width="1.5"/>
        <!-- Floating runes -->
        <circle cx="28" cy="60" r="3" fill="#06b6d4" opacity="0.4"/>
        <circle cx="20" cy="75" r="2" fill="#06b6d4" opacity="0.3"/>
        <circle cx="32" cy="85" r="2.5" fill="#06b6d4" opacity="0.25"/>
    </svg>`,
    '뱀파이어': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="vp1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7f1d1d"/><stop offset="100%" stop-color="#1c1917"/></linearGradient>
        </defs>
        <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
        <!-- Cape spread -->
        <path d="M18 38c-4 16-8 40-2 62 2 6 6 8 10 6l16-20 18 22 18-22 16 20c4 2 8 0 10-6 6-22 2-46-2-62-8-10-22-18-42-18S26 28 18 38z" fill="url(#vp1)" stroke="#450a0a" stroke-width="2"/>
        <!-- Cape inner (red lining) -->
        <path d="M32 46c-2 14-2 32 2 48l14-16 12 18 12-18 14 16c4-16 4-34 2-48-6-6-14-10-28-10s-22 4-28 10z" fill="#991b1b" opacity="0.6"/>
        <!-- Body/Suit -->
        <rect x="42" y="52" width="36" height="40" rx="6" fill="#1c1917" stroke="#0f172a" stroke-width="1.5"/>
        <!-- Vest detail -->
        <path d="M60 52v40" stroke="#450a0a" stroke-width="1"/>
        <circle cx="56" cy="60" r="1.5" fill="#fbbf24"/><circle cx="56" cy="68" r="1.5" fill="#fbbf24"/><circle cx="56" cy="76" r="1.5" fill="#fbbf24"/>
        <!-- Head -->
        <ellipse cx="60" cy="40" rx="18" ry="20" fill="#fef2f2" stroke="#d6d3d1" stroke-width="2"/>
        <!-- Hair -->
        <path d="M42 32c0-10 6-18 18-18s18 8 18 18c-2-6-8-10-18-10s-16 4-18 10z" fill="#1c1917" stroke="#0f172a" stroke-width="2"/>
        <!-- Widow's peak -->
        <path d="M52 24l8 8 8-8" fill="#1c1917"/>
        <!-- Eyebrows -->
        <path d="M46 34l8-2" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M66 32l8 2" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Eyes -->
        <ellipse cx="52" cy="38" rx="5" ry="6" fill="#dc2626" stroke="#450a0a" stroke-width="2"/>
        <ellipse cx="52" cy="39" rx="3" ry="4" fill="#450a0a"/><circle cx="50" cy="36" r="1.5" fill="#fca5a5"/>
        <ellipse cx="68" cy="38" rx="5" ry="6" fill="#dc2626" stroke="#450a0a" stroke-width="2"/>
        <ellipse cx="68" cy="39" rx="3" ry="4" fill="#450a0a"/><circle cx="66" cy="36" r="1.5" fill="#fca5a5"/>
        <!-- Nose -->
        <path d="M58 44l2 4 2-2" stroke="#d6d3d1" stroke-width="1.5" fill="none"/>
        <!-- Mouth with fangs -->
        <path d="M52 50c4 4 12 4 16 0" stroke="#991b1b" stroke-width="2" fill="none"/>
        <path d="M54 50l-3 7" stroke="#f5f5f4" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M66 50l3 7" stroke="#f5f5f4" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Blood drip -->
        <circle cx="53" cy="58" r="1.5" fill="#dc2626"/>
    </svg>`,
    '악마': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="dm1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#4c1d95"/></linearGradient>
            <radialGradient id="dm2"><stop offset="0%" stop-color="#c084fc" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <circle cx="60" cy="55" r="40" fill="url(#dm2)"/>
        <ellipse cx="60" cy="110" rx="28" ry="5" fill="rgba(0,0,0,0.2)"/>
        <!-- Wings -->
        <path d="M20 50c-6-8-8-20-4-32 6 6 14 8 20 4 2-8 8-16 14-20-2 12 0 20 6 22l-10 14z" fill="#6d28d9" stroke="#3b0764" stroke-width="2"/>
        <path d="M100 50c6-8 8-20 4-32-6 6-14 8-20 4-2-8-8-16-14-20 2 12 0 20-6 22l10 14z" fill="#6d28d9" stroke="#3b0764" stroke-width="2"/>
        <!-- Wing membrane -->
        <path d="M8 18l16 22M20 10l8 26M30 24l-4 14" stroke="#581c87" stroke-width="1.5" opacity="0.4"/>
        <path d="M112 18l-16 22M100 10l-8 26M90 24l4 14" stroke="#581c87" stroke-width="1.5" opacity="0.4"/>
        <!-- Tail -->
        <path d="M60 96c-4 4-12 8-18 4 0-2 2-4 4-4l-2-4c2-2 4-2 6 0" stroke="#7c3aed" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M42 100l-4-2 2-6" fill="#ef4444" stroke="#dc2626" stroke-width="1.5"/>
        <!-- Legs -->
        <rect x="42" y="88" width="12" height="18" rx="5" fill="#6d28d9" stroke="#3b0764" stroke-width="2"/>
        <rect x="66" y="88" width="12" height="18" rx="5" fill="#6d28d9" stroke="#3b0764" stroke-width="2"/>
        <!-- Body -->
        <ellipse cx="60" cy="68" rx="24" ry="26" fill="url(#dm1)" stroke="#3b0764" stroke-width="2.5"/>
        <!-- Chest muscles -->
        <path d="M48 60c4 4 8 4 12 0" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.3"/>
        <path d="M60 60c4 4 8 4 12 0" stroke="#7c3aed" stroke-width="1.5" fill="none" opacity="0.3"/>
        <!-- Arms -->
        <path d="M36 62c-6 4-10 12-8 22" fill="none" stroke="#3b0764" stroke-width="2"/>
        <ellipse cx="34" cy="60" rx="6" ry="8" fill="#7c3aed" stroke="#3b0764" stroke-width="2"/>
        <circle cx="28" cy="84" r="5" fill="#6d28d9" stroke="#3b0764" stroke-width="2"/>
        <path d="M84 62c6 4 10 12 8 22" fill="none" stroke="#3b0764" stroke-width="2"/>
        <ellipse cx="86" cy="60" rx="6" ry="8" fill="#7c3aed" stroke="#3b0764" stroke-width="2"/>
        <circle cx="92" cy="84" r="5" fill="#6d28d9" stroke="#3b0764" stroke-width="2"/>
        <!-- Head -->
        <ellipse cx="60" cy="42" rx="18" ry="18" fill="url(#dm1)" stroke="#3b0764" stroke-width="2.5"/>
        <!-- Horns -->
        <path d="M44 30c-4-8-8-18-4-26" stroke="#fbbf24" stroke-width="4" stroke-linecap="round" fill="none"/>
        <path d="M76 30c4-8 8-18 4-26" stroke="#fbbf24" stroke-width="4" stroke-linecap="round" fill="none"/>
        <!-- Eyes -->
        <ellipse cx="52" cy="40" rx="6" ry="7" fill="#fbbf24" stroke="#3b0764" stroke-width="2"/>
        <ellipse cx="52" cy="41" rx="3.5" ry="5" fill="#1a0033"/><circle cx="50" cy="38" r="2" fill="#fef3c7"/>
        <ellipse cx="68" cy="40" rx="6" ry="7" fill="#fbbf24" stroke="#3b0764" stroke-width="2"/>
        <ellipse cx="68" cy="41" rx="3.5" ry="5" fill="#1a0033"/><circle cx="66" cy="38" r="2" fill="#fef3c7"/>
        <!-- Evil grin -->
        <path d="M48 52c5 6 16 6 24 0" stroke="#1a0033" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <path d="M50 52l-1 4" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
        <path d="M60 54v3" stroke="#fbbf24" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M70 52l1 4" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    '드래곤': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="dr1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#92400e"/></linearGradient>
            <linearGradient id="dr2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fde68a"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient>
        </defs>
        <ellipse cx="60" cy="108" rx="30" ry="5" fill="rgba(0,0,0,0.2)"/>
        <!-- Wings -->
        <path d="M22 48c-8-8-12-22-6-36 6 8 14 10 22 6 0-10 6-20 14-26 0 14 0 24 6 24l-10 14z" fill="#d97706" stroke="#92400e" stroke-width="2"/>
        <path d="M98 48c8-8 12-22 6-36-6 8-14 10-22 6 0-10-6-20-14-26 0 14 0 24-6 24l10 14z" fill="#d97706" stroke="#92400e" stroke-width="2"/>
        <!-- Wing membrane -->
        <path d="M16 12l8 26M24 18l6 20" stroke="#b45309" stroke-width="1.5" opacity="0.3"/>
        <path d="M104 12l-8 26M96 18l-6 20" stroke="#b45309" stroke-width="1.5" opacity="0.3"/>
        <!-- Tail -->
        <path d="M76 88c6 4 14 6 22 4 4-2 6-6 4-8" stroke="#b45309" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M100 82l6 4-2-6z" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
        <!-- Body -->
        <ellipse cx="58" cy="68" rx="26" ry="28" fill="url(#dr1)" stroke="#78350f" stroke-width="2.5"/>
        <!-- Belly scales -->
        <ellipse cx="58" cy="74" rx="14" ry="18" fill="url(#dr2)" opacity="0.6" stroke="#d97706" stroke-width="1"/>
        <path d="M48 64h20M46 72h24M48 80h20M50 88h16" stroke="#b45309" stroke-width="0.8" opacity="0.3"/>
        <!-- Arms -->
        <ellipse cx="32" cy="62" rx="6" ry="10" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <ellipse cx="84" cy="62" rx="6" ry="10" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <!-- Legs -->
        <rect x="38" y="90" width="12" height="16" rx="5" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <rect x="66" y="90" width="12" height="16" rx="5" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <!-- Head -->
        <ellipse cx="58" cy="38" rx="20" ry="18" fill="url(#dr1)" stroke="#78350f" stroke-width="2.5"/>
        <!-- Snout -->
        <ellipse cx="58" cy="48" rx="12" ry="6" fill="#d97706" stroke="#78350f" stroke-width="2"/>
        <!-- Horns -->
        <path d="M40 26l-8-18" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/>
        <path d="M76 26l8-18" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/>
        <!-- Spikes -->
        <path d="M46 22l-2-8 4 4z" fill="#d97706"/><path d="M70 22l2-8-4 4z" fill="#d97706"/>
        <!-- Eyes -->
        <ellipse cx="48" cy="36" rx="6" ry="7" fill="#fef3c7" stroke="#78350f" stroke-width="2"/>
        <ellipse cx="49" cy="37" rx="3" ry="5" fill="#78350f"/><circle cx="47" cy="34" r="2" fill="#fff"/>
        <ellipse cx="68" cy="36" rx="6" ry="7" fill="#fef3c7" stroke="#78350f" stroke-width="2"/>
        <ellipse cx="69" cy="37" rx="3" ry="5" fill="#78350f"/><circle cx="67" cy="34" r="2" fill="#fff"/>
        <!-- Nostrils -->
        <circle cx="53" cy="47" r="2" fill="#78350f"/><circle cx="63" cy="47" r="2" fill="#78350f"/>
        <!-- Fire breath hint -->
        <path d="M46 52c2 4 8 4 10 2" stroke="#ef4444" stroke-width="2" fill="none" opacity="0.5"/>
    </svg>`,
    '고대 용': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="ad1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="100%" stop-color="#7f1d1d"/></linearGradient>
            <linearGradient id="ad2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fca5a5"/><stop offset="100%" stop-color="#ef4444"/></linearGradient>
            <radialGradient id="ad3"><stop offset="0%" stop-color="#ef4444" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <circle cx="60" cy="55" r="42" fill="url(#ad3)"/>
        <ellipse cx="60" cy="108" rx="32" ry="5" fill="rgba(0,0,0,0.25)"/>
        <!-- Massive wings -->
        <path d="M18 44c-10-10-14-26-6-40 8 10 18 12 28 6 0-12 8-22 16-28 0 16-2 28 6 28l-12 16z" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2.5"/>
        <path d="M102 44c10-10 14-26 6-40-8 10-18 12-28 6 0-12-8-22-16-28 0 16 2 28-6 28l12 16z" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2.5"/>
        <!-- Wing veins -->
        <path d="M12 4l12 30M20 10l10 24M30 16l6 18" stroke="#991b1b" stroke-width="1.5" opacity="0.3"/>
        <path d="M108 4l-12 30M100 10l-10 24M90 16l-6 18" stroke="#991b1b" stroke-width="1.5" opacity="0.3"/>
        <!-- Tail -->
        <path d="M78 86c8 4 18 6 26 2 4-2 4-8 0-10" stroke="#991b1b" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M102 76l8 4-4-8z" fill="#ef4444" stroke="#991b1b" stroke-width="1.5"/>
        <!-- Body -->
        <ellipse cx="58" cy="66" rx="28" ry="30" fill="url(#ad1)" stroke="#7f1d1d" stroke-width="2.5"/>
        <!-- Belly -->
        <ellipse cx="58" cy="72" rx="16" ry="20" fill="url(#ad2)" opacity="0.5" stroke="#ef4444" stroke-width="1"/>
        <path d="M46 60h24M44 68h28M46 76h24M48 84h20" stroke="#dc2626" stroke-width="0.8" opacity="0.3"/>
        <!-- Battle scars -->
        <path d="M72 56l8 16" stroke="#fef2f2" stroke-width="2" opacity="0.4"/>
        <path d="M38 50l-4 10" stroke="#fef2f2" stroke-width="1.5" opacity="0.3"/>
        <!-- Arms -->
        <ellipse cx="30" cy="60" rx="8" ry="12" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
        <ellipse cx="86" cy="60" rx="8" ry="12" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
        <!-- Legs -->
        <rect x="36" y="90" width="14" height="18" rx="6" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
        <rect x="66" y="90" width="14" height="18" rx="6" fill="#991b1b" stroke="#7f1d1d" stroke-width="2"/>
        <!-- Head -->
        <ellipse cx="58" cy="34" rx="22" ry="20" fill="url(#ad1)" stroke="#7f1d1d" stroke-width="2.5"/>
        <!-- Double horns -->
        <path d="M38 22l-10-20" stroke="#fef2f2" stroke-width="4" stroke-linecap="round"/>
        <path d="M78 22l10-20" stroke="#fef2f2" stroke-width="4" stroke-linecap="round"/>
        <path d="M44 18l-4-12" stroke="#fca5a5" stroke-width="3" stroke-linecap="round"/>
        <path d="M72 18l4-12" stroke="#fca5a5" stroke-width="3" stroke-linecap="round"/>
        <!-- Crown spikes -->
        <path d="M48 16l-1-6 3 3z" fill="#dc2626"/><path d="M54 14v-6l2 3z" fill="#dc2626"/>
        <path d="M62 14v-6l2 3z" fill="#dc2626"/><path d="M68 16l1-6-3 3z" fill="#dc2626"/>
        <!-- Eyes (fierce) -->
        <ellipse cx="48" cy="32" rx="7" ry="8" fill="#fef2f2" stroke="#7f1d1d" stroke-width="2"/>
        <ellipse cx="49" cy="34" rx="4" ry="6" fill="#450a0a"/><circle cx="47" cy="30" r="2.5" fill="#fbbf24"/>
        <ellipse cx="68" cy="32" rx="7" ry="8" fill="#fef2f2" stroke="#7f1d1d" stroke-width="2"/>
        <ellipse cx="69" cy="34" rx="4" ry="6" fill="#450a0a"/><circle cx="67" cy="30" r="2.5" fill="#fbbf24"/>
        <!-- Snout -->
        <ellipse cx="58" cy="44" rx="10" ry="5" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/>
        <circle cx="53" cy="43" r="2" fill="#7f1d1d"/><circle cx="63" cy="43" r="2" fill="#7f1d1d"/>
        <!-- Teeth -->
        <path d="M48 48c4 3 16 3 20 0" stroke="#7f1d1d" stroke-width="2" fill="none"/>
        <path d="M52 48l-2 5" stroke="#fef2f2" stroke-width="2" stroke-linecap="round"/>
        <path d="M58 50l0 4" stroke="#fef2f2" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M64 48l2 5" stroke="#fef2f2" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    '타이탄': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="tt1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fde68a"/><stop offset="100%" stop-color="#b45309"/></linearGradient>
            <linearGradient id="tt2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient>
            <radialGradient id="tt3"><stop offset="0%" stop-color="#fbbf24" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <circle cx="60" cy="55" r="38" fill="url(#tt3)"/>
        <ellipse cx="60" cy="110" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
        <!-- Lightning bolts background -->
        <path d="M16 20l4 16-6 2 8 18" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.5"/>
        <path d="M104 24l-4 14 6 2-8 16" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" fill="none" opacity="0.5"/>
        <!-- Legs -->
        <rect x="40" y="88" width="14" height="22" rx="6" fill="#b45309" stroke="#78350f" stroke-width="2.5"/>
        <!-- Armor shin -->
        <rect x="42" y="96" width="10" height="8" rx="2" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
        <rect x="66" y="88" width="14" height="22" rx="6" fill="#b45309" stroke="#78350f" stroke-width="2.5"/>
        <rect x="68" y="96" width="10" height="8" rx="2" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
        <!-- Body -->
        <rect x="36" y="40" width="48" height="52" rx="8" fill="url(#tt1)" stroke="#78350f" stroke-width="2.5"/>
        <!-- Armor chest plate -->
        <path d="M42 44c6-2 12-2 18 0v20c-4 4-10 4-18 0z" fill="url(#tt2)" stroke="#92400e" stroke-width="1.5"/>
        <path d="M60 44c6-2 12-2 18 0v20c-4 4-10 4-18 0z" fill="url(#tt2)" stroke="#92400e" stroke-width="1.5"/>
        <!-- Belt -->
        <rect x="38" y="76" width="44" height="6" rx="2" fill="#78350f" stroke="#422006" stroke-width="1.5"/>
        <circle cx="60" cy="79" r="4" fill="#fbbf24" stroke="#92400e" stroke-width="1.5"/>
        <!-- Arms -->
        <rect x="22" y="44" width="16" height="38" rx="7" fill="#d97706" stroke="#78350f" stroke-width="2.5"/>
        <!-- Armband -->
        <rect x="24" y="52" width="12" height="4" rx="1.5" fill="#fbbf24" stroke="#92400e" stroke-width="1"/>
        <rect x="82" y="44" width="16" height="38" rx="7" fill="#d97706" stroke="#78350f" stroke-width="2.5"/>
        <rect x="84" y="52" width="12" height="4" rx="1.5" fill="#fbbf24" stroke="#92400e" stroke-width="1"/>
        <!-- Fists -->
        <circle cx="30" cy="84" r="8" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <circle cx="90" cy="84" r="8" fill="#b45309" stroke="#78350f" stroke-width="2"/>
        <!-- Head -->
        <ellipse cx="60" cy="30" rx="18" ry="18" fill="url(#tt1)" stroke="#78350f" stroke-width="2.5"/>
        <!-- Helmet/Crown -->
        <path d="M42 24c0-10 6-18 18-18s18 8 18 18" fill="#d97706" stroke="#78350f" stroke-width="2"/>
        <path d="M46 24l-2-10 6 4z" fill="#fbbf24"/><path d="M56 20v-12l4 6z" fill="#fbbf24"/>
        <path d="M64 20v-12l4 6z" fill="#fbbf24"/><path d="M74 24l2-10-6 4z" fill="#fbbf24"/>
        <!-- Eyes -->
        <ellipse cx="52" cy="30" rx="6" ry="7" fill="#fff" stroke="#78350f" stroke-width="2"/>
        <ellipse cx="52" cy="31" rx="3.5" ry="5" fill="#78350f"/><circle cx="50" cy="28" r="2" fill="#fff"/>
        <ellipse cx="68" cy="30" rx="6" ry="7" fill="#fff" stroke="#78350f" stroke-width="2"/>
        <ellipse cx="68" cy="31" rx="3.5" ry="5" fill="#78350f"/><circle cx="66" cy="28" r="2" fill="#fff"/>
        <!-- Stern mouth -->
        <path d="M50 42c4 3 14 3 20 0" stroke="#78350f" stroke-width="2.5" fill="none"/>
    </svg>`,
    '어둠의 군주': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="dl1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#1e1b4b"/></linearGradient>
            <linearGradient id="dl2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#6d28d9"/></linearGradient>
            <radialGradient id="dl3"><stop offset="0%" stop-color="#c084fc" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
        </defs>
        <circle cx="60" cy="55" r="45" fill="url(#dl3)"/>
        <ellipse cx="60" cy="110" rx="28" ry="5" fill="rgba(0,0,0,0.25)"/>
        <!-- Dark energy tendrils -->
        <path d="M20 80c-6 6-10 16-6 24" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.4"/>
        <path d="M100 80c6 6 10 16 6 24" stroke="#7c3aed" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.4"/>
        <path d="M14 90c-2 4 0 10 4 14" stroke="#a855f7" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.3"/>
        <path d="M106 90c2 4 0 10-4 14" stroke="#a855f7" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.3"/>
        <!-- Cape/Robe -->
        <path d="M22 34c-4 18-8 44-2 66 2 6 6 8 12 6l14-18 14 20 14-20 14 18c6 2 10 0 12-6 6-22 2-48-2-66-8-12-20-20-38-20S30 22 22 34z" fill="url(#dl1)" stroke="#1e1b4b" stroke-width="2.5"/>
        <!-- Armor body -->
        <path d="M38 40c0 8 0 30 4 44h36c4-14 4-36 4-44-6-8-14-12-22-12s-16 4-22 12z" fill="#2e1065" stroke="#1e1b4b" stroke-width="2"/>
        <!-- Armor plate -->
        <path d="M46 44l14 8 14-8v16l-14 8-14-8z" fill="#4c1d95" stroke="#6d28d9" stroke-width="1.5"/>
        <path d="M60 52v8" stroke="#a855f7" stroke-width="1" opacity="0.6"/>
        <!-- Shoulder armor -->
        <ellipse cx="36" cy="42" rx="10" ry="8" fill="url(#dl2)" stroke="#3b0764" stroke-width="2"/>
        <path d="M30 38l-4-6" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="84" cy="42" rx="10" ry="8" fill="url(#dl2)" stroke="#3b0764" stroke-width="2"/>
        <path d="M90 38l4-6" stroke="#c084fc" stroke-width="2" stroke-linecap="round"/>
        <!-- Arms -->
        <rect x="24" y="46" width="12" height="32" rx="5" fill="#2e1065" stroke="#1e1b4b" stroke-width="2"/>
        <rect x="84" y="46" width="12" height="32" rx="5" fill="#2e1065" stroke="#1e1b4b" stroke-width="2"/>
        <!-- Gauntlets -->
        <circle cx="30" cy="80" r="7" fill="#4c1d95" stroke="#3b0764" stroke-width="2"/>
        <circle cx="90" cy="80" r="7" fill="#4c1d95" stroke="#3b0764" stroke-width="2"/>
        <!-- Energy orb in hand -->
        <circle cx="90" cy="80" r="4" fill="#c084fc" opacity="0.6"/>
        <circle cx="90" cy="80" r="2" fill="#e9d5ff" opacity="0.8"/>
        <!-- Helmet -->
        <path d="M38 20c0-10 8-16 22-16s22 6 22 16c0 4-2 8-4 10H42c-2-2-4-6-4-10z" fill="#2e1065" stroke="#1e1b4b" stroke-width="2.5"/>
        <!-- Helmet horns -->
        <path d="M40 14l-8-12" stroke="#c084fc" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M80 14l8-12" stroke="#c084fc" stroke-width="3.5" stroke-linecap="round"/>
        <!-- Helmet crown -->
        <path d="M48 6l2-4 4 2 6-4 6 4 4-2 2 4" fill="#4c1d95" stroke="#7c3aed" stroke-width="1.5"/>
        <!-- Face opening -->
        <rect x="44" y="18" width="32" height="16" rx="4" fill="#0a0118"/>
        <!-- Glowing eyes -->
        <ellipse cx="52" cy="26" rx="5" ry="6" fill="#c084fc" stroke="#a855f7" stroke-width="1.5"/>
        <ellipse cx="52" cy="27" rx="3" ry="4" fill="#e9d5ff"/><circle cx="50" cy="24" r="1.5" fill="#fff"/>
        <ellipse cx="68" cy="26" rx="5" ry="6" fill="#c084fc" stroke="#a855f7" stroke-width="1.5"/>
        <ellipse cx="68" cy="27" rx="3" ry="4" fill="#e9d5ff"/><circle cx="66" cy="24" r="1.5" fill="#fff"/>
        <!-- Energy particles -->
        <circle cx="24" cy="64" r="2.5" fill="#a855f7" opacity="0.5"/>
        <circle cx="96" cy="68" r="2" fill="#c084fc" opacity="0.4"/>
        <circle cx="18" cy="50" r="1.5" fill="#a855f7" opacity="0.3"/>
        <circle cx="102" cy="54" r="2" fill="#c084fc" opacity="0.3"/>
    </svg>`,
};

function getMonsterHP(monster, killCount) {
    const n = MONSTERS.length;
    const cycle = Math.floor(killCount / n);
    const posInCycle = killCount % n;
    const setInCycle = Math.floor(posInCycle / 10);
    const progressScale = 1 + setInCycle * 0.2;
    const cycleScale = Math.pow(1.5, cycle);

    const originalHP = Math.floor(monster.baseHP * cycleScale * progressScale);

    if (cycle === 0) {
        return Math.max(monster.baseHP, originalHP);
    }

    // NG+ fix: prevent HP drop when cycling back to weaker monsters
    const maxBaseHP = MONSTERS[n - 1].baseHP;
    const maxProgressScale = 2.8;
    const prevCycleEndHP = maxBaseHP * Math.pow(1.5, cycle - 1) * maxProgressScale;
    const thisCycleEndHP = maxBaseHP * cycleScale * maxProgressScale;
    const t = posInCycle / (n - 1);
    const floorHP = prevCycleEndHP + (thisCycleEndHP - prevCycleEndHP) * t;

    return Math.max(originalHP, Math.floor(floorHP));
}

function getMonsterGoldReward(monster, killCount, isBoss, isTierBoss) {
    const n = MONSTERS.length;
    const cycle = Math.floor(killCount / n);
    const posInCycle = killCount % n;
    const setInCycle = Math.floor(posInCycle / 10);
    const progressScale = 1 + setInCycle * 0.2;
    const cycleScale = Math.pow(1.5, cycle);

    const originalGold = Math.floor(monster.goldReward * cycleScale * progressScale);

    let base;
    if (cycle === 0) {
        base = Math.max(monster.goldReward, originalGold);
    } else {
        // Match HP floor scaling for balanced gold rewards
        const maxGold = MONSTERS[n - 1].goldReward;
        const maxProgressScale = 2.8;
        const prevCycleEndGold = maxGold * Math.pow(1.5, cycle - 1) * maxProgressScale;
        const thisCycleEndGold = maxGold * cycleScale * maxProgressScale;
        const t = posInCycle / (n - 1);
        const floorGold = prevCycleEndGold + (thisCycleEndGold - prevCycleEndGold) * t;
        base = Math.max(originalGold, Math.floor(floorGold));
    }

    if (isTierBoss) return base * 10;
    if (isBoss) return base * 5;
    return base;
}

// Get current tier/stage info for UI display
function getStageInfo(killCount) {
    const cycle = Math.floor(killCount / MONSTERS.length);
    const posInCycle = killCount % MONSTERS.length;
    const tierIndex = Math.floor(posInCycle / 10); // 0-9
    const stageInTier = (posInCycle % 10) + 1; // 1-10
    const tier = DUNGEON_TIERS[tierIndex] || DUNGEON_TIERS[0];
    return {
        cycle: cycle + 1,     // New Game+ number (1 = first playthrough)
        tierIndex: tierIndex,  // 0-9
        tierNum: tierIndex + 1, // 1-10
        tierName: tier.name,
        tierIcon: tier.icon,
        tierTheme: tier.theme,
        stage: stageInTier,    // 1-10 within tier
        totalStage: posInCycle + 1, // 1-100 overall
        isTierBoss: stageInTier === 10, // Last monster in tier = tier boss
        isMidBoss: stageInTier === 5,   // Halfway = mini boss
    };
}

// === ACHIEVEMENTS (15개 업적) ===
const ACHIEVEMENTS = [
    // 기본 전투 업적
    { id: 'first_step', icon: '🐣', name: 'First Step', key: 'achievement.firstStep', desc: 'key', descKey: 'achievement.firstStepDesc', condition: () => totalClicks >= 1, condition_label: 'totalClicks >= 1' },
    { id: 'slayer_100', icon: '⚔️', name: 'Warrior Path', key: 'achievement.slayer100', desc: 'key', descKey: 'achievement.slayer100Desc', condition: () => killCount >= 100, condition_label: 'killCount >= 100' },
    { id: 'slayer_1000', icon: '💀', name: 'Slayer', key: 'achievement.slayer1000', desc: 'key', descKey: 'achievement.slayer1000Desc', condition: () => killCount >= 1000, condition_label: 'killCount >= 1000' },

    // 골드 업적
    { id: 'wealth_10k', icon: '💰', name: 'Rich', key: 'achievement.wealth10k', desc: 'key', descKey: 'achievement.wealth10kDesc', condition: () => totalEarned >= 10000, condition_label: 'totalEarned >= 10000' },
    { id: 'wealth_1m', icon: '🏦', name: 'Billionaire', key: 'achievement.wealth1m', desc: 'key', descKey: 'achievement.wealth1mDesc', condition: () => totalEarned >= 1000000, condition_label: 'totalEarned >= 1000000' },

    // 장비 업적
    { id: 'equipment_10', icon: '🛡️', name: 'Equipment Master', key: 'achievement.equipment10', desc: 'key', descKey: 'achievement.equipment10Desc', condition: () => Object.keys(ownedEquipment || {}).length >= 10, condition_label: 'equipmentCount >= 10' },

    // 스킬 업적
    { id: 'skill_master', icon: '⭐', name: 'Skill Master', key: 'achievement.skillMaster', desc: 'key', descKey: 'achievement.skillMasterDesc', condition: () => Object.values(skillLevels || {}).filter(l => l >= 5).length >= 5, condition_label: 'skillLevel5+ >= 5' },

    // 환생 업적
    { id: 'prestige_first', icon: '👑', name: 'Reborn', key: 'achievement.prestigeFirst', desc: 'key', descKey: 'achievement.prestigeFirstDesc', condition: () => prestigeCount >= 1, condition_label: 'prestigeCount >= 1' },
    { id: 'prestige_5', icon: '🔥', name: 'Serial Reborn', key: 'achievement.prestige5', desc: 'key', descKey: 'achievement.prestige5Desc', condition: () => prestigeCount >= 5, condition_label: 'prestigeCount >= 5' },

    // 보스 업적
    { id: 'boss_hunter', icon: '🏆', name: 'Boss Hunter', key: 'achievement.bossHunter', desc: 'key', descKey: 'achievement.bossHunterDesc', condition: () => (bossKills || 0) >= 10, condition_label: 'bossKills >= 10' },

    // 클릭 업적
    { id: 'click_1k', icon: '⚡', name: 'Click King', key: 'achievement.click1k', desc: 'key', descKey: 'achievement.click1kDesc', condition: () => totalClicks >= 1000, condition_label: 'totalClicks >= 1000' },
    { id: 'click_10k', icon: '🎯', name: 'Click Master', key: 'achievement.click10k', desc: 'key', descKey: 'achievement.click10kDesc', condition: () => totalClicks >= 10000, condition_label: 'totalClicks >= 10000' },

    // 특수 업적
    { id: 'golden_monster', icon: '🌟', name: 'Golden Hunter', key: 'achievement.goldenMonster', desc: 'key', descKey: 'achievement.goldenMonsterDesc', condition: () => (goldenKills || 0) >= 5, condition_label: 'goldenKills >= 5' },
    { id: 'dps_100', icon: '📈', name: 'DPS 100', key: 'achievement.dps100', desc: 'key', descKey: 'achievement.dps100Desc', condition: () => totalCPS >= 100, condition_label: 'totalCPS >= 100' },
    { id: 'dungeon_master', icon: '🏰', name: 'Dungeon Master', key: 'achievement.dungeonMaster', desc: 'key', descKey: 'achievement.dungeonMasterDesc', condition: () => currentTier >= 10, condition_label: 'currentTier >= 10' },

    // New retention achievements
    { id: 'speed_clicker', icon: '💨', name: 'Speed Clicker', key: 'achievement.speedClicker', desc: 'key', descKey: 'achievement.speedClickerDesc', condition: () => (clickCombo || 0) >= 10, condition_label: 'clickCombo >= 10 (10 clicks/sec proxy)' },
    { id: 'first_purchase', icon: '🛒', name: 'First Purchase', key: 'achievement.firstPurchase', desc: 'key', descKey: 'achievement.firstPurchaseDesc', condition: () => Object.keys(ownedEquipment || {}).length >= 1, condition_label: 'equipmentCount >= 1' },
    { id: 'millionaire_hold', icon: '💎', name: 'Millionaire', key: 'achievement.millionaire', desc: 'key', descKey: 'achievement.millionaireDesc', condition: () => (typeof gold !== 'undefined' && gold >= 1000000), condition_label: 'gold >= 1000000' },
    { id: 'combo_master', icon: '🔥', name: 'Combo Master', key: 'achievement.comboMaster', desc: 'key', descKey: 'achievement.comboMasterDesc', condition: () => (clickCombo || 0) >= 30, condition_label: 'clickCombo >= 30' },
    { id: 'pet_owner', icon: '🐾', name: 'Pet Owner', key: 'achievement.petOwner', desc: 'key', descKey: 'achievement.petOwnerDesc', condition: () => Object.values(pets || {}).some(p => p && p.unlocked), condition_label: 'any pet unlocked' },
];

// === GOLD MILESTONES (currency celebration thresholds) ===
const GOLD_MILESTONES = [
    { amount: 1000, i18nKey: 'goldMilestone.g1k', icon: '💰', color: '#FFD700' },
    { amount: 10000, i18nKey: 'goldMilestone.g10k', icon: '💰', color: '#FFD700' },
    { amount: 100000, i18nKey: 'goldMilestone.g100k', icon: '💎', color: '#00BFFF' },
    { amount: 1000000, i18nKey: 'goldMilestone.g1m', icon: '👑', color: '#FF6600' },
    { amount: 10000000, i18nKey: 'goldMilestone.g10m', icon: '🏆', color: '#FF4500' },
    { amount: 100000000, i18nKey: 'goldMilestone.g100m', icon: '⭐', color: '#8b5cf6' },
    { amount: 1000000000, i18nKey: 'goldMilestone.g1b', icon: '🌟', color: '#FF00FF' }
];
