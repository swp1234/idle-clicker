// Idle Clicker Empire - Game Data

const BUSINESSES = [
    {
        id: 'lemonade',
        name: '레모네이드 가판대',
        icon: '🍋',
        baseCost: 10,
        baseIncome: 1,
        costMultiplier: 1.15,
        description: '작은 시작, 큰 꿈의 첫걸음'
    },
    {
        id: 'bakery',
        name: '동네 빵집',
        icon: '🥐',
        baseCost: 100,
        baseIncome: 5,
        costMultiplier: 1.15,
        description: '갓 구운 빵 냄새가 솔솔'
    },
    {
        id: 'cafe',
        name: '카페',
        icon: '☕',
        baseCost: 500,
        baseIncome: 20,
        costMultiplier: 1.15,
        description: '커피 한 잔의 여유'
    },
    {
        id: 'restaurant',
        name: '레스토랑',
        icon: '🍽️',
        baseCost: 2000,
        baseIncome: 80,
        costMultiplier: 1.14,
        description: '미식가들의 성지'
    },
    {
        id: 'hotel',
        name: '호텔',
        icon: '🏨',
        baseCost: 10000,
        baseIncome: 300,
        costMultiplier: 1.13,
        description: '편안한 휴식을 제공합니다'
    },
    {
        id: 'mall',
        name: '쇼핑몰',
        icon: '🏬',
        baseCost: 50000,
        baseIncome: 1000,
        costMultiplier: 1.12,
        description: '쇼핑의 천국'
    },
    {
        id: 'factory',
        name: '공장',
        icon: '🏭',
        baseCost: 200000,
        baseIncome: 3500,
        costMultiplier: 1.11,
        description: '대량 생산의 시대'
    },
    {
        id: 'tech',
        name: 'IT 기업',
        icon: '💻',
        baseCost: 1000000,
        baseIncome: 12000,
        costMultiplier: 1.10,
        description: '기술이 미래를 바꾼다'
    },
    {
        id: 'airline',
        name: '항공사',
        icon: '✈️',
        baseCost: 5000000,
        baseIncome: 40000,
        costMultiplier: 1.09,
        description: '하늘길을 연다'
    },
    {
        id: 'bank',
        name: '글로벌 은행',
        icon: '🏦',
        baseCost: 25000000,
        baseIncome: 150000,
        costMultiplier: 1.08,
        description: '돈이 돈을 버는 구조'
    }
];

const UPGRADES = [
    { id: 'click2x', name: '터보 클릭', icon: '👆', desc: '클릭 수익 2배', cost: 500, type: 'click', multiplier: 2, requires: { money: 200 } },
    { id: 'click5x', name: '파워 클릭', icon: '💪', desc: '클릭 수익 5배', cost: 5000, type: 'click', multiplier: 5, requires: { money: 2000 } },
    { id: 'click10x', name: '메가 클릭', icon: '⚡', desc: '클릭 수익 10배', cost: 50000, type: 'click', multiplier: 10, requires: { money: 20000 } },
    { id: 'auto2x', name: '효율 개선', icon: '📈', desc: '자동 수익 2배', cost: 2000, type: 'auto', multiplier: 2, requires: { money: 1000 } },
    { id: 'auto5x', name: '자동화 시스템', icon: '🤖', desc: '자동 수익 5배', cost: 25000, type: 'auto', multiplier: 5, requires: { money: 10000 } },
    { id: 'auto10x', name: 'AI 경영', icon: '🧠', desc: '자동 수익 10배', cost: 500000, type: 'auto', multiplier: 10, requires: { money: 200000 } },
    { id: 'speed2x', name: '빠른 생산', icon: '⏩', desc: '수익 주기 2배 빠르게', cost: 10000, type: 'speed', multiplier: 2, requires: { money: 5000 } },
    { id: 'golden', name: '골든 터치', icon: '✨', desc: '클릭 시 자동 수익의 1% 보너스', cost: 100000, type: 'golden', multiplier: 0.01, requires: { money: 50000 } },
];

const TITLES = [
    { min: 0, title: '무일푼', icon: '😅' },
    { min: 100, title: '용돈 모으기', icon: '🪙' },
    { min: 1000, title: '알바생', icon: '💼' },
    { min: 10000, title: '소상공인', icon: '🏪' },
    { min: 100000, title: '사업가', icon: '📊' },
    { min: 1000000, title: '백만장자', icon: '💰' },
    { min: 10000000, title: '천만장자', icon: '🤑' },
    { min: 100000000, title: '억만장자', icon: '💎' },
    { min: 1000000000, title: '재벌', icon: '👑' },
    { min: 10000000000, title: '세계 부호', icon: '🌍' },
    { min: 100000000000, title: '우주 재벌', icon: '🚀' }
];

const MILESTONES = [
    { amount: 100, message: '첫 100원을 벌었습니다!' },
    { amount: 1000, message: '1,000원 달성! 가판대를 업그레이드하세요.' },
    { amount: 10000, message: '10,000원! 사업이 성장하고 있습니다.' },
    { amount: 100000, message: '100,000원! 본격적인 사업가 입니다.' },
    { amount: 1000000, message: '백만장자가 되었습니다!' },
    { amount: 10000000, message: '천만장자! 대단합니다!' },
    { amount: 100000000, message: '억만장자의 반열에 올랐습니다!' },
    { amount: 1000000000, message: '10억 돌파! 재벌의 시작입니다!' }
];

function getTitleForMoney(totalEarned) {
    let result = TITLES[0];
    for (const t of TITLES) {
        if (totalEarned >= t.min) result = t;
        else break;
    }
    return result;
}

function formatMoney(amount) {
    if (amount >= 1e12) return (amount / 1e12).toFixed(2) + '조';
    if (amount >= 1e8) return (amount / 1e8).toFixed(2) + '억';
    if (amount >= 1e4) return (amount / 1e4).toFixed(1) + '만';
    return Math.floor(amount).toLocaleString();
}

function formatMoneyShort(amount) {
    if (amount >= 1e12) return (amount / 1e12).toFixed(1) + '조';
    if (amount >= 1e8) return (amount / 1e8).toFixed(1) + '억';
    if (amount >= 1e4) return (amount / 1e4).toFixed(0) + '만';
    return Math.floor(amount).toLocaleString();
}
