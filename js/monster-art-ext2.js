// Monster Art Extension 2 - Additional High-Tier SVG Illustrations
// Extends MONSTER_SVG with remaining monsters from Tier 5-10
// Style: Clicker Heroes-inspired with bold outlines, high fantasy epic designs

(function() {
    if (typeof MONSTER_SVG === 'undefined') return;

    Object.assign(MONSTER_SVG, {
        // ═══ Tier 5 Remaining Monsters ═══
        '독 드래곤': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pd1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#84cc16"/><stop offset="100%" stop-color="#15803d"/></linearGradient>
                <radialGradient id="pd2"><stop offset="0%" stop-color="#a3e635" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="55" r="42" fill="url(#pd2)"/>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M18 44c-10-10-14-26-6-40 8 10 18 12 28 6 0-12 8-22 16-28 0 16-2 28 6 28l-12 16z" fill="#4ade80" stroke="#15803d" stroke-width="2.5"/>
            <path d="M102 44c10-10 14-26 6-40-8 10-18 12-28 6 0-12-8-22-16-28 0 16 2 28-6 28l12 16z" fill="#4ade80" stroke="#15803d" stroke-width="2.5"/>
            <path d="M12 4l12 30M20 10l10 24" stroke="#84cc16" stroke-width="1.5" opacity="0.3"/>
            <path d="M108 4l-12 30M100 10l-10 24" stroke="#84cc16" stroke-width="1.5" opacity="0.3"/>
            <path d="M78 86c8 4 18 6 26 2 4-2 4-8 0-10" stroke="#15803d" stroke-width="4" fill="none" stroke-linecap="round"/>
            <path d="M102 76l8 4-4-8z" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
            <ellipse cx="58" cy="68" rx="26" ry="28" fill="url(#pd1)" stroke="#15803d" stroke-width="2.5"/>
            <path d="M46 60h24M44 68h28M46 76h24" stroke="#22c55e" stroke-width="1" opacity="0.5"/>
            <ellipse cx="58" cy="38" rx="20" ry="18" fill="url(#pd1)" stroke="#15803d" stroke-width="2.5"/>
            <path d="M40 26l-8-18" stroke="#84cc16" stroke-width="4" stroke-linecap="round"/>
            <path d="M76 26l8-18" stroke="#84cc16" stroke-width="4" stroke-linecap="round"/>
            <ellipse cx="48" cy="36" rx="6" ry="7" fill="#fef3c7" stroke="#15803d" stroke-width="2"/><ellipse cx="49" cy="37" rx="3" ry="5" fill="#15803d"/><circle cx="47" cy="34" r="2" fill="#fff"/>
            <ellipse cx="68" cy="36" rx="6" ry="7" fill="#fef3c7" stroke="#15803d" stroke-width="2"/><ellipse cx="69" cy="37" rx="3" ry="5" fill="#15803d"/><circle cx="67" cy="34" r="2" fill="#fff"/>
            <path d="M46 52c2 4 8 4 10 2" stroke="#15803d" stroke-width="2" fill="none"/>
            <!-- Poison fog -->
            <circle cx="28" cy="48" r="2.5" fill="#84cc16" opacity="0.4"/><circle cx="88" cy="45" r="2" fill="#84cc16" opacity="0.3"/>
        </svg>`,

        '용의 수호자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="dg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#92400e"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="40" y="62" width="40" height="34" rx="4" fill="#b45309" stroke="#78350f" stroke-width="2.5"/>
            <rect x="44" y="68" width="32" height="10" rx="2" fill="url(#dg1)" stroke="#92400e" stroke-width="1.5"/>
            <ellipse cx="50" cy="62" rx="5" ry="7" fill="#d97706" stroke="#78350f" stroke-width="2"/>
            <ellipse cx="70" cy="62" rx="5" ry="7" fill="#d97706" stroke="#78350f" stroke-width="2"/>
            <ellipse cx="60" cy="40" rx="18" ry="18" fill="url(#dg1)" stroke="#78350f" stroke-width="2.5"/>
            <path d="M45 32c0-8 5-14 15-14s15 6 15 14" fill="#78350f"/>
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#fef3c7" stroke="#78350f" stroke-width="2"/><circle cx="50" cy="37" r="2" fill="#78350f"/>
            <ellipse cx="70" cy="36" rx="5" ry="7" fill="#fef3c7" stroke="#78350f" stroke-width="2"/><circle cx="70" cy="37" r="2" fill="#78350f"/>
            <path d="M48 48c6 3 14 3 18 0" stroke="#78350f" stroke-width="2" fill="none"/>
            <line x1="90" y1="55" x2="105" y2="75" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
            <polygon points="105,75 101,73 104,81" fill="#fbbf24" stroke="#78350f" stroke-width="1"/>
        </svg>`,

        '와이번': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="wy1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#047857"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M20 55c-8-8-10-20-2-32 6 6 14 8 20 4 0-10 6-18 12-22-2 12 0 20 4 22l-10 14z" fill="url(#wy1)" stroke="#047857" stroke-width="2.5"/>
            <path d="M80 80c6 4 14 6 20 4 2-4-2-10-6-10" stroke="#047857" stroke-width="3" fill="none" stroke-linecap="round"/>
            <ellipse cx="60" cy="70" rx="22" ry="26" fill="url(#wy1)" stroke="#047857" stroke-width="2.5"/>
            <ellipse cx="60" cy="38" rx="18" ry="16" fill="url(#wy1)" stroke="#047857" stroke-width="2.5"/>
            <ellipse cx="50" cy="34" rx="5" ry="7" fill="#fff" stroke="#047857" stroke-width="2"/><circle cx="50" cy="35" r="2" fill="#1a1a1a"/>
            <ellipse cx="70" cy="34" rx="5" ry="7" fill="#fff" stroke="#047857" stroke-width="2"/><circle cx="70" cy="35" r="2" fill="#1a1a1a"/>
            <path d="M48 48c6 3 14 3 18 0" stroke="#047857" stroke-width="2" fill="none"/>
        </svg>`,

        '바실리스크': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bs1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e"/><stop offset="100%" stop-color="#059669"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M60 80c8 0 14-8 14-16s-6-20-14-24c-8 4-14 16-14 24s6 16 14 16z" fill="url(#bs1)" stroke="#059669" stroke-width="2.5"/>
            <path d="M50 50c-2-8-4-16-2-24 2-6 6-8 10-6 2 6 2 14 0 22M70 50c2-8 4-16 2-24-2-6-6-8-10-6-2 6-2 14 0 22" fill="#16a34a" stroke="#059669" stroke-width="2.5"/>
            <ellipse cx="60" cy="35" rx="10" ry="12" fill="url(#bs1)" stroke="#059669" stroke-width="2"/>
            <circle cx="54" cy="30" r="6" fill="#fff" stroke="#059669" stroke-width="2"/><circle cx="54" cy="31" r="3" fill="#ef4444"/>
            <circle cx="66" cy="30" r="6" fill="#fff" stroke="#059669" stroke-width="2"/><circle cx="66" cy="31" r="3" fill="#ef4444"/>
            <path d="M56 42l-4 6M64 42l4 6" fill="#059669" stroke="#0f3d1a" stroke-width="1.5"/>
        </svg>`,

        // ═══ Tier 6 Monsters ═══
        '세계 뱀': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ws1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#047857"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="105" rx="24" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M50 80c-4 6-6 14-2 22 2 6 8 8 12 4 4 6 10 6 14 2 4-6 2-16-2-22-4-4-12-4-16-4z" fill="url(#ws1)" stroke="#047857" stroke-width="2.5"/>
            <path d="M45 50c-2-8-2-16 0-22 2-6 8-8 12-4 0-10 4-18 8-22-2 10 2 18 6 20l-8 12z" fill="#10b981" stroke="#047857" stroke-width="2.5"/>
            <path d="M75 50c2-8 2-16 0-22-2-6-8-8-12-4 0-10-4-18-8-22 2 10-2 18-6 20l8 12z" fill="#10b981" stroke="#047857" stroke-width="2.5"/>
            <ellipse cx="60" cy="35" rx="12" ry="14" fill="url(#ws1)" stroke="#047857" stroke-width="2"/>
            <circle cx="54" cy="30" r="4" fill="#fff" stroke="#047857" stroke-width="1.5"/><circle cx="54" cy="31" r="2" fill="#1a1a1a"/>
            <circle cx="66" cy="30" r="4" fill="#fff" stroke="#047857" stroke-width="1.5"/><circle cx="66" cy="31" r="2" fill="#1a1a1a"/>
            <path d="M58 42l-2 5M62 42l2 5" stroke="#f5f5f5" stroke-width="1.5" stroke-linecap="round"/>
        </svg>`,

        '혼돈의 기사': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ck2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7f1d1d"/><stop offset="100%" stop-color="#1a1a1a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="40" y="62" width="40" height="34" rx="4" fill="url(#ck2)" stroke="#1a1a1a" stroke-width="2.5"/>
            <rect x="44" y="68" width="32" height="10" rx="2" fill="#b91c1c" stroke="#7f1d1d" stroke-width="1.5"/>
            <ellipse cx="50" cy="62" rx="5" ry="7" fill="#7f1d1d" stroke="#1a1a1a" stroke-width="2"/>
            <ellipse cx="70" cy="62" rx="5" ry="7" fill="#7f1d1d" stroke="#1a1a1a" stroke-width="2"/>
            <ellipse cx="60" cy="40" rx="18" ry="18" fill="#2d2d2d" stroke="#1a1a1a" stroke-width="2.5"/>
            <path d="M45 32c0-8 5-14 15-14s15 6 15 14" fill="#1a1a1a"/>
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#dc2626" stroke="#1a1a1a" stroke-width="2"/><circle cx="50" cy="37" r="2" fill="#7f1d1d"/>
            <ellipse cx="70" cy="36" rx="5" ry="7" fill="#dc2626" stroke="#1a1a1a" stroke-width="2"/><circle cx="70" cy="37" r="2" fill="#7f1d1d"/>
            <path d="M48 48c6 3 14 3 18 0" stroke="#1a1a1a" stroke-width="2" fill="none"/>
            <line x1="90" y1="55" x2="105" y2="75" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/>
        </svg>`,

        '빛의 수호자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="lsg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
                <radialGradient id="lsg2"><stop offset="0%" stop-color="#fef3c7" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="40" fill="url(#lsg2)"/>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.1)"/>
            <rect x="40" y="62" width="40" height="34" rx="4" fill="#f59e0b" stroke="#b45309" stroke-width="2.5"/>
            <rect x="44" y="68" width="32" height="10" rx="2" fill="url(#lsg1)" stroke="#b45309" stroke-width="1.5"/>
            <ellipse cx="60" cy="42" rx="18" ry="18" fill="url(#lsg1)" stroke="#b45309" stroke-width="2.5"/>
            <circle cx="60" cy="38" r="8" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
            <path d="M56 36l-2-4 1 2z" fill="#f59e0b"/><path d="M64 36l2-4-1 2z" fill="#f59e0b"/>
            <ellipse cx="50" cy="42" rx="5" ry="7" fill="#fff" stroke="#b45309" stroke-width="2"/><circle cx="50" cy="43" r="2" fill="#78350f"/>
            <ellipse cx="70" cy="42" rx="5" ry="7" fill="#fff" stroke="#b45309" stroke-width="2"/><circle cx="70" cy="43" r="2" fill="#78350f"/>
            <path d="M48 54c6 3 14 3 18 0" stroke="#b45309" stroke-width="2" fill="none"/>
        </svg>`,

        '허공의 파괴자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="vd1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#3f0f59"/></linearGradient>
                <radialGradient id="vd2"><stop offset="0%" stop-color="#c084fc" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="42" fill="url(#vd2)"/>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M30 70c-4-12-2-26 4-38 2 8 6 14 10 12 0-12 4-22 8-28-2 12 2 22 6 26l-8 12z" fill="url(#vd1)" stroke="#3f0f59" stroke-width="2.5"/>
            <path d="M90 70c4-12 2-26-4-38-2 8-6 14-10 12 0-12-4-22-8-28 2 12-2 22-6 26l8 12z" fill="url(#vd1)" stroke="#3f0f59" stroke-width="2.5"/>
            <ellipse cx="60" cy="52" rx="20" ry="24" fill="url(#vd1)" stroke="#3f0f59" stroke-width="2.5"/>
            <ellipse cx="52" cy="48" rx="6" ry="8" fill="#fbbf24" stroke="#3f0f59" stroke-width="2"/><circle cx="52" cy="49" r="2" fill="#7c2d12"/>
            <ellipse cx="68" cy="48" rx="6" ry="8" fill="#fbbf24" stroke="#3f0f59" stroke-width="2"/><circle cx="68" cy="49" r="2" fill="#7c2d12"/>
            <path d="M50 62c5 4 10 4 20 0" stroke="#3f0f59" stroke-width="2" fill="none"/>
        </svg>`,

        '태양의 화신': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ss1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
                <radialGradient id="ss2"><stop offset="0%" stop-color="#fef3c7" stop-opacity="0.6"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="44" fill="url(#ss2)"/>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.1)"/>
            <circle cx="60" cy="58" r="24" fill="url(#ss1)" stroke="#d97706" stroke-width="2.5"/>
            <circle cx="60" cy="58" r="18" fill="#fef3c7" opacity="0.4"/>
            <path d="M60 18l4 10-4-2-4 10z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
            <path d="M18 58l10 4-2-4 10-4z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
            <path d="M102 58l-10 4 2-4-10-4z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
            <path d="M60 98l-4-10 4 2 4-10z" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
            <ellipse cx="54" cy="54" rx="5" ry="7" fill="#fff" stroke="#d97706" stroke-width="2"/><circle cx="54" cy="55" r="2" fill="#78350f"/>
            <ellipse cx="66" cy="54" rx="5" ry="7" fill="#fff" stroke="#d97706" stroke-width="2"/><circle cx="66" cy="55" r="2" fill="#78350f"/>
            <path d="M52 66c4 3 12 3 16 0" stroke="#d97706" stroke-width="2" fill="none"/>
        </svg>`,

        '종말의 수호자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="eg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1e1b4b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M40 95c-4 6-2 10 4 12h32c6-2 8-6 4-12l-4-30h-32z" fill="#2e1065" stroke="#0f172a" stroke-width="2.5"/>
            <rect x="44" y="65" width="32" height="22" rx="3" fill="url(#eg1)" stroke="#0f172a" stroke-width="2"/>
            <rect x="50" y="70" width="20" height="6" rx="2" fill="#7c3aed" stroke="#0f172a" stroke-width="1"/>
            <ellipse cx="60" cy="40" rx="18" ry="18" fill="#1a1a1a" stroke="#0f172a" stroke-width="2.5"/>
            <path d="M48 35c0-8 4-14 12-14s12 6 12 14" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>
            <ellipse cx="50" cy="40" rx="5" ry="7" fill="#06b6d4" stroke="#0f172a" stroke-width="2"/><circle cx="50" cy="41" r="2" fill="#fff"/>
            <ellipse cx="70" cy="40" rx="5" ry="7" fill="#06b6d4" stroke="#0f172a" stroke-width="2"/><circle cx="70" cy="41" r="2" fill="#fff"/>
            <path d="M48 52c6 3 14 3 18 0" stroke="#0f172a" stroke-width="2" fill="none"/>
        </svg>`,

        // ═══ Tier 7 Monsters ═══
        '차원 균열자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="rcr1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#6d28d9"/></linearGradient>
                <radialGradient id="rcr2"><stop offset="0%" stop-color="#d8b4fe" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="42" fill="url(#rcr2)"/>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M30 50c-4 20-6 38-2 56 2 6 6 8 12 6l16-20 16 24 16-24 16 20c6 2 10 0 12-6 4-18 2-36-2-56-8-12-20-20-38-20S38 38 30 50z" fill="url(#rcr1)" stroke="#6d28d9" stroke-width="2"/>
            <ellipse cx="60" cy="52" rx="18" ry="20" fill="#7c3aed" stroke="#6d28d9" stroke-width="2"/>
            <path d="M50 48c5 4 10 4 20 0" stroke="#6d28d9" stroke-width="2" fill="none"/>
            <ellipse cx="52" cy="46" rx="4" ry="6" fill="#fff" stroke="#6d28d9" stroke-width="1.5"/><circle cx="52" cy="47" r="1.5" fill="#4c1d95"/>
            <ellipse cx="68" cy="46" rx="4" ry="6" fill="#fff" stroke="#6d28d9" stroke-width="1.5"/><circle cx="68" cy="47" r="1.5" fill="#4c1d95"/>
        </svg>`,

        '시간의 파수꾼': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="tg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#0369a1"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <circle cx="60" cy="58" r="20" fill="none" stroke="#0369a1" stroke-width="2.5"/>
            <circle cx="60" cy="58" r="16" fill="none" stroke="#06b6d4" stroke-width="2" opacity="0.5"/>
            <path d="M60 38v40M42 58h36" stroke="#06b6d4" stroke-width="2"/>
            <circle cx="60" cy="38" r="2" fill="#0369a1"/><circle cx="60" cy="78" r="2" fill="#0369a1"/>
            <circle cx="42" cy="58" r="2" fill="#0369a1"/><circle cx="78" cy="58" r="2" fill="#0369a1"/>
            <ellipse cx="60" cy="75" rx="22" ry="20" fill="url(#tg1)" stroke="#0369a1" stroke-width="2.5"/>
            <ellipse cx="52" cy="70" rx="5" ry="7" fill="#cffafe" stroke="#0369a1" stroke-width="1.5"/><circle cx="52" cy="71" r="1.5" fill="#0369a1"/>
            <ellipse cx="68" cy="70" rx="5" ry="7" fill="#cffafe" stroke="#0369a1" stroke-width="1.5"/><circle cx="68" cy="71" r="1.5" fill="#0369a1"/>
        </svg>`,

        '공허의 군주': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="vl2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M30 50c-6 20-8 40-2 60 2 6 6 8 12 6l18-22 18 26 18-26 18 22c6 2 10 0 12-6 6-20 2-40-2-60-8-14-22-24-40-24S38 36 30 50z" fill="url(#vl2)" stroke="#0f172a" stroke-width="2.5"/>
            <ellipse cx="60" cy="52" rx="20" ry="22" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
            <ellipse cx="52" cy="48" rx="5" ry="7" fill="#06b6d4" stroke="#0f172a" stroke-width="1.5"/><circle cx="52" cy="49" r="2" fill="#0c4a6e"/>
            <ellipse cx="68" cy="48" rx="5" ry="7" fill="#06b6d4" stroke="#0f172a" stroke-width="1.5"/><circle cx="68" cy="49" r="2" fill="#0c4a6e"/>
            <path d="M50 62c5 4 10 4 20 0" stroke="#0f172a" stroke-width="2" fill="none"/>
        </svg>`,

        '별의 포식자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sp2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#b45309"/></linearGradient>
                <radialGradient id="sp3"><stop offset="0%" stop-color="#fef3c7" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="42" fill="url(#sp3)"/>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <circle cx="60" cy="60" r="24" fill="url(#sp2)" stroke="#b45309" stroke-width="2.5"/>
            <path d="M60 20l3 8-3-2-3 8z" fill="#fbbf24"/><path d="M28 52l8 3-2-3 8 3z" fill="#fbbf24"/>
            <path d="M92 52l-8 3 2-3-8 3z" fill="#fbbf24"/><path d="M60 100l-3-8 3 2 3-8z" fill="#fbbf24"/>
            <ellipse cx="54" cy="56" rx="4" ry="6" fill="#1a1a1a" stroke="#b45309" stroke-width="1.5"/><circle cx="54" cy="57" r="1.5" fill="#fbbf24"/>
            <ellipse cx="66" cy="56" rx="4" ry="6" fill="#1a1a1a" stroke="#b45309" stroke-width="1.5"/><circle cx="66" cy="57" r="1.5" fill="#fbbf24"/>
        </svg>`,

        '차원의 마왕': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="dm3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#7f1d1d"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M35 50c-6-12-4-28 2-40 2 10 6 16 12 14 0-14 6-26 12-32 4 14 6 22 10 20 2-8 4-16 4-22 2 14 2 28-2 42-2 10-4 18-8 24l2 6c-6 4-14 6-24 6s-18-2-24-4z" fill="url(#dm3)" stroke="#7f1d1d" stroke-width="2.5"/>
            <ellipse cx="60" cy="52" rx="18" ry="20" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2"/>
            <ellipse cx="52" cy="48" rx="5" ry="7" fill="#fef3c7" stroke="#7f1d1d" stroke-width="2"/><circle cx="52" cy="49" r="2" fill="#7c2d12"/>
            <ellipse cx="68" cy="48" rx="5" ry="7" fill="#fef3c7" stroke="#7f1d1d" stroke-width="2"/><circle cx="68" cy="49" r="2" fill="#7c2d12"/>
            <path d="M50 62c5 4 10 4 20 0" stroke="#7f1d1d" stroke-width="2" fill="none"/>
        </svg>`,

        '우주 해파리': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cj1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#6d28d9"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
            <ellipse cx="60" cy="48" rx="22" ry="24" fill="url(#cj1)" stroke="#6d28d9" stroke-width="2.5"/>
            <path d="M40 72c-4 8-6 16-2 24" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M50 76c-2 8-2 16 2 24" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M60 78c0 8 0 16 2 24" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M70 76c2 8 2 16-2 24" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" fill="none"/>
            <path d="M80 72c4 8 6 16 2 24" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" fill="none"/>
            <circle cx="40" cy="96" r="2" fill="#c084fc"/><circle cx="50" cy="100" r="2" fill="#c084fc"/>
            <circle cx="60" cy="102" r="2" fill="#c084fc"/><circle cx="70" cy="100" r="2" fill="#c084fc"/>
            <circle cx="80" cy="96" r="2" fill="#c084fc"/>
            <ellipse cx="54" cy="42" rx="5" ry="7" fill="#fff" stroke="#6d28d9" stroke-width="1.5"/><circle cx="54" cy="43" r="1.5" fill="#6d28d9"/>
            <ellipse cx="66" cy="42" rx="5" ry="7" fill="#fff" stroke="#6d28d9" stroke-width="1.5"/><circle cx="66" cy="43" r="1.5" fill="#6d28d9"/>
        </svg>`,

        '결정 거인': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#67e8f9"/><stop offset="100%" stop-color="#0369a1"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="40" y="62" width="40" height="34" rx="4" fill="url(#cg1)" stroke="#0369a1" stroke-width="2.5"/>
            <rect x="44" y="68" width="32" height="10" rx="2" fill="#06b6d4" stroke="#0369a1" stroke-width="1.5"/>
            <ellipse cx="60" cy="40" rx="20" ry="18" fill="url(#cg1)" stroke="#0369a1" stroke-width="2.5"/>
            <path d="M48 35c0-8 4-14 12-14s12 6 12 14" fill="#0369a1" opacity="0.3"/>
            <ellipse cx="50" cy="38" rx="5" ry="7" fill="#fff" stroke="#0369a1" stroke-width="2"/><circle cx="50" cy="39" r="2" fill="#0369a1"/>
            <ellipse cx="70" cy="38" rx="5" ry="7" fill="#fff" stroke="#0369a1" stroke-width="2"/><circle cx="70" cy="39" r="2" fill="#0369a1"/>
            <path d="M48 50c6 3 14 3 18 0" stroke="#0369a1" stroke-width="2" fill="none"/>
        </svg>`,

        '에테르 드래곤': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ed1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e9d5ff"/><stop offset="100%" stop-color="#a78bfa"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M20 48c-8-8-12-22-6-36 6 8 14 10 22 6 0-10 6-20 14-26 0 14 0 24 6 24l-10 14z" fill="url(#ed1)" stroke="#7c3aed" stroke-width="2"/>
            <path d="M100 48c8-8 12-22 6-36-6 8-14 10-22 6 0-10-6-20-14-26 0 14 0 24-6 24l10 14z" fill="url(#ed1)" stroke="#7c3aed" stroke-width="2"/>
            <path d="M76 88c6 4 14 6 22 4 4-2 6-6 4-8" stroke="#7c3aed" stroke-width="4" fill="none" stroke-linecap="round"/>
            <ellipse cx="58" cy="68" rx="26" ry="28" fill="url(#ed1)" stroke="#7c3aed" stroke-width="2.5"/>
            <ellipse cx="58" cy="38" rx="20" ry="18" fill="url(#ed1)" stroke="#7c3aed" stroke-width="2.5"/>
            <ellipse cx="48" cy="36" rx="6" ry="7" fill="#fef3c7" stroke="#7c3aed" stroke-width="2"/><circle cx="48" cy="37" r="2" fill="#7c3aed"/>
            <ellipse cx="68" cy="36" rx="6" ry="7" fill="#fef3c7" stroke="#7c3aed" stroke-width="2"/><circle cx="68" cy="37" r="2" fill="#7c3aed"/>
        </svg>`,

        '차원 수문장': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="dg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#312e81"/><stop offset="100%" stop-color="#1a1a4b"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="38" y="50" width="44" height="50" rx="4" fill="url(#dg2)" stroke="#1a1a4b" stroke-width="2.5"/>
            <rect x="44" y="60" width="32" height="12" rx="2" fill="#4c1d95" stroke="#1a1a4b" stroke-width="1.5"/>
            <rect x="44" y="80" width="32" height="12" rx="2" fill="#4c1d95" stroke="#1a1a4b" stroke-width="1.5"/>
            <ellipse cx="60" cy="38" rx="18" ry="16" fill="#1a1a4b" stroke="#1a1a4b" stroke-width="2"/>
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#4c1d95" stroke="#1a1a4b" stroke-width="1.5"/><circle cx="50" cy="37" r="1.5" fill="#c084fc"/>
            <ellipse cx="70" cy="36" rx="5" ry="7" fill="#4c1d95" stroke="#1a1a4b" stroke-width="1.5"/><circle cx="70" cy="37" r="1.5" fill="#c084fc"/>
        </svg>`,

        '무한의 존재': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="ie1"><stop offset="0%" stop-color="#e9d5ff" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="45" fill="url(#ie1)"/>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.1)"/>
            <circle cx="60" cy="60" r="22" fill="none" stroke="#c084fc" stroke-width="2.5"/>
            <circle cx="60" cy="60" r="18" fill="none" stroke="#e9d5ff" stroke-width="2" opacity="0.5"/>
            <path d="M60 38v44M38 60h44" stroke="#e9d5ff" stroke-width="2"/>
            <circle cx="38" cy="60" r="3" fill="#c084fc"/><circle cx="82" cy="60" r="3" fill="#c084fc"/>
            <circle cx="60" cy="38" r="3" fill="#c084fc"/><circle cx="60" cy="82" r="3" fill="#c084fc"/>
            <circle cx="43" cy="45" r="2" fill="#a855f7" opacity="0.6"/><circle cx="77" cy="45" r="2" fill="#a855f7" opacity="0.6"/>
            <circle cx="43" cy="75" r="2" fill="#a855f7" opacity="0.6"/><circle cx="77" cy="75" r="2" fill="#a855f7" opacity="0.6"/>
        </svg>`,

        // ═══ Tier 8-10 Remaining Monsters (신화급) ═══
        '원초적 혼돈': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pc1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#0c4a6e"/><stop offset="50%" stop-color="#0284c7"/><stop offset="100%" stop-color="#7dd3fc"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <ellipse cx="60" cy="60" rx="28" ry="32" fill="url(#pc1)" stroke="#0369a1" stroke-width="2.5"/>
            <path d="M40 40c-6-10-8-20-2-30 4 6 10 8 14 4-2-8 2-16 6-22-2 10 2 18 6 22l-8 12z" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/>
            <path d="M80 40c6-10 8-20 2-30-4 6-10 8-14 4 2-8-2-16-6-22 2 10-2 18-6 22l8 12z" fill="#0ea5e9" stroke="#0369a1" stroke-width="2"/>
            <ellipse cx="52" cy="50" rx="6" ry="8" fill="#fff" stroke="#0369a1" stroke-width="2"/><circle cx="52" cy="51" r="2" fill="#0369a1"/>
            <ellipse cx="68" cy="50" rx="6" ry="8" fill="#fff" stroke="#0369a1" stroke-width="2"/><circle cx="68" cy="51" r="2" fill="#0369a1"/>
        </svg>`,

        '태초의 불꽃': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pf1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#7f1d1d"/><stop offset="30%" stop-color="#dc2626"/><stop offset="70%" stop-color="#f97316"/><stop offset="100%" stop-color="#fde68a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M35 95c-6-20-4-40 4-55 2 10 6 18 12 16 0-16 8-30 14-38 4 16 6 26 10 24 2-8 4-18 4-26 2 16 2 32-2 48-2 12-4 20-8 28l2 8c-6 4-16 6-26 6s-20-2-26-4z" fill="url(#pf1)" stroke="#b91c1c" stroke-width="2.5"/>
            <ellipse cx="60" cy="58" rx="20" ry="22" fill="#ef4444" stroke="#b91c1c" stroke-width="2.5"/>
            <ellipse cx="52" cy="54" rx="5" ry="7" fill="#fef3c7" stroke="#b91c1c" stroke-width="2"/><circle cx="52" cy="55" r="2" fill="#7c2d12"/>
            <ellipse cx="68" cy="54" rx="5" ry="7" fill="#fef3c7" stroke="#b91c1c" stroke-width="2"/><circle cx="68" cy="55" r="2" fill="#7c2d12"/>
        </svg>`,

        '세계 거북': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="wt1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#86efac"/><stop offset="100%" stop-color="#16a34a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="90" rx="32" ry="12" fill="url(#wt1)" stroke="#15803d" stroke-width="2.5"/>
            <ellipse cx="60" cy="60" rx="28" ry="22" fill="#22c55e" stroke="#15803d" stroke-width="2.5"/>
            <path d="M42 70l-6 12M60 72l0 14M78 70l6 12" fill="#15803d" stroke="#0f3d1a" stroke-width="1.5"/>
            <circle cx="50" cy="48" r="8" fill="#86efac" stroke="#15803d" stroke-width="2"/><circle cx="70" cy="48" r="8" fill="#86efac" stroke="#15803d" stroke-width="2"/>
            <ellipse cx="50" cy="45" rx="3" ry="5" fill="#fff" stroke="#15803d" stroke-width="1"/><circle cx="50" cy="46" r="1" fill="#1a1a1a"/>
            <ellipse cx="70" cy="45" rx="3" ry="5" fill="#fff" stroke="#15803d" stroke-width="1"/><circle cx="70" cy="46" r="1" fill="#1a1a1a"/>
        </svg>`,

        '시간의 용': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="td1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c084fc"/><stop offset="100%" stop-color="#5b21b6"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M18 48c-10-10-14-26-6-40 8 10 18 12 28 6 0-12 8-22 16-28 0 16-2 28 6 28l-12 16z" fill="url(#td1)" stroke="#581c87" stroke-width="2.5"/>
            <path d="M102 48c10-10 14-26 6-40-8 10-18 12-28 6 0-12-8-22-16-28 0 16 2 28-6 28l12 16z" fill="url(#td1)" stroke="#581c87" stroke-width="2.5"/>
            <path d="M76 88c8 4 18 6 26 2 4-2 4-8 0-10" stroke="#581c87" stroke-width="4" fill="none" stroke-linecap="round"/>
            <ellipse cx="58" cy="68" rx="28" ry="30" fill="url(#td1)" stroke="#581c87" stroke-width="2.5"/>
            <ellipse cx="58" cy="38" rx="22" ry="20" fill="url(#td1)" stroke="#581c87" stroke-width="2.5"/>
            <circle cx="48" cy="34" r="8" fill="#a78bfa" stroke="#581c87" stroke-width="2"/>
            <path d="M44 32l-2-4 1 2z" fill="#d8b4fe"/>
        </svg>`,

        '별의 거인': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="36" y="48" width="48" height="52" rx="6" fill="url(#sg1)" stroke="#b45309" stroke-width="2.5"/>
            <rect x="42" y="54" width="36" height="10" rx="2" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/>
            <rect x="44" y="72" width="32" height="8" rx="2" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>
            <ellipse cx="60" cy="38" rx="20" ry="18" fill="url(#sg1)" stroke="#b45309" stroke-width="2.5"/>
            <circle cx="60" cy="32" r="6" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#fff" stroke="#b45309" stroke-width="2"/><circle cx="50" cy="37" r="2" fill="#78350f"/>
            <ellipse cx="70" cy="36" rx="5" ry="7" fill="#fff" stroke="#b45309" stroke-width="2"/><circle cx="70" cy="37" r="2" fill="#78350f"/>
        </svg>`,

        '원소 타이탄': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="et1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="33%" stop-color="#22c55e"/><stop offset="66%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="38" y="50" width="44" height="50" rx="6" fill="url(#et1)" stroke="#1f2937" stroke-width="2.5"/>
            <rect x="44" y="60" width="32" height="12" rx="2" fill="#1f2937" stroke="#1f2937" stroke-width="1"/>
            <rect x="44" y="80" width="32" height="12" rx="2" fill="#1f2937" stroke="#1f2937" stroke-width="1"/>
            <ellipse cx="60" cy="38" rx="20" ry="18" fill="#1f2937" stroke="#1f2937" stroke-width="2.5"/>
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#fff" stroke="#1f2937" stroke-width="2"/><circle cx="50" cy="37" r="2" fill="#1f2937"/>
            <ellipse cx="70" cy="36" rx="5" ry="7" fill="#fff" stroke="#1f2937" stroke-width="2"/><circle cx="70" cy="37" r="2" fill="#1f2937"/>
        </svg>`,

        '운명의 심판자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="jd1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#9ca3af"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 80c-4 6-2 10 4 12h32c6-2 8-6 4-12l-4-30h-32z" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2.5"/>
            <rect x="44" y="52" width="32" height="22" rx="2" fill="url(#jd1)" stroke="#9ca3af" stroke-width="2"/>
            <ellipse cx="60" cy="38" rx="18" ry="18" fill="#f5f5f4" stroke="#9ca3af" stroke-width="2.5"/>
            <circle cx="60" cy="32" r="8" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
            <path d="M56 30l-2-4 1 2z" fill="#f97316"/>
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#06b6d4" stroke="#9ca3af" stroke-width="2"/><circle cx="50" cy="37" r="2" fill="#0369a1"/>
            <ellipse cx="70" cy="36" rx="5" ry="7" fill="#06b6d4" stroke="#9ca3af" stroke-width="2"/><circle cx="70" cy="37" r="2" fill="#0369a1"/>
        </svg>`,

        '혼돈의 화신': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cc1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="50%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="34" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M30 55c-6-15-4-32 4-48 2 12 6 20 12 18 0-16 8-28 14-34 4 16 6 26 10 24 2-10 4-18 4-28 2 18 2 36-2 54-2 14-4 22-8 30l2 8c-8 4-18 6-28 6S36 71 30 55z" fill="url(#cc1)" stroke="#450a0a" stroke-width="2.5"/>
            <ellipse cx="60" cy="58" rx="22" ry="26" fill="#7c2d12" stroke="#450a0a" stroke-width="2.5"/>
            <ellipse cx="52" cy="52" rx="6" ry="8" fill="#fef3c7" stroke="#450a0a" stroke-width="2"/><circle cx="52" cy="53" r="2" fill="#7c2d12"/>
            <ellipse cx="68" cy="52" rx="6" ry="8" fill="#fef3c7" stroke="#450a0a" stroke-width="2"/><circle cx="68" cy="53" r="2" fill="#7c2d12"/>
        </svg>`,

        '영원의 감시자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ew1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#4c1d95"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="34" ry="6" fill="rgba(0,0,0,0.2)"/>
            <circle cx="60" cy="60" r="26" fill="url(#ew1)" stroke="#4c1d95" stroke-width="2.5"/>
            <circle cx="60" cy="60" r="16" fill="#7c3aed" opacity="0.3"/>
            <circle cx="60" cy="60" r="8" fill="#c084fc" opacity="0.6"/>
            <circle cx="60" cy="60" r="4" fill="#fff" opacity="0.8"/>
            <path d="M60 20v80M20 60h80" stroke="#a855f7" stroke-width="2" opacity="0.5"/>
            <circle cx="20" cy="60" r="2" fill="#c084fc"/><circle cx="100" cy="60" r="2" fill="#c084fc"/>
            <circle cx="60" cy="20" r="2" fill="#c084fc"/><circle cx="60" cy="100" r="2" fill="#c084fc"/>
        </svg>`,

        '태초의 존재': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="pb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="50%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
                <radialGradient id="pb2"><stop offset="0%" stop-color="#e9d5ff" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="48" fill="url(#pb2)"/>
            <ellipse cx="60" cy="108" rx="36" ry="6" fill="rgba(0,0,0,0.25)"/>
            <ellipse cx="60" cy="65" rx="32" ry="36" fill="url(#pb1)" stroke="#0f172a" stroke-width="2.5"/>
            <ellipse cx="52" cy="55" rx="8" ry="10" fill="#c084fc" stroke="#0f172a" stroke-width="2"/><circle cx="52" cy="56" r="3" fill="#e9d5ff"/>
            <ellipse cx="68" cy="55" rx="8" ry="10" fill="#c084fc" stroke="#0f172a" stroke-width="2"/><circle cx="68" cy="56" r="3" fill="#e9d5ff"/>
            <path d="M50 72c5 6 10 6 20 0" stroke="#0f172a" stroke-width="2.5" fill="none"/>
        </svg>`,

        // ═══ Tier 9 Mythic Gods ═══
        '토르': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="th1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff"/><stop offset="100%" stop-color="#d1d5db"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="40" y="62" width="40" height="34" rx="4" fill="#64748b" stroke="#1e293b" stroke-width="2.5"/>
            <rect x="44" y="68" width="32" height="10" rx="2" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5"/>
            <ellipse cx="60" cy="40" rx="18" ry="18" fill="url(#th1)" stroke="#64748b" stroke-width="2.5"/>
            <path d="M48 34c0-8 4-14 12-14s12 6 12 14" fill="#64748b" opacity="0.3"/>
            <ellipse cx="50" cy="38" rx="5" ry="7" fill="#0c4a6e" stroke="#64748b" stroke-width="2"/><circle cx="50" cy="39" r="2" fill="#06b6d4"/>
            <ellipse cx="70" cy="38" rx="5" ry="7" fill="#0c4a6e" stroke="#64748b" stroke-width="2"/><circle cx="70" cy="39" r="2" fill="#06b6d4"/>
            <path d="M48 50c6 3 14 3 18 0" stroke="#1e293b" stroke-width="2" fill="none"/>
            <line x1="92" y1="55" x2="108" y2="75" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"/>
            <polygon points="108,75 104,71 106,83" fill="#3b82f6" stroke="#1e293b" stroke-width="1.5"/>
        </svg>`,

        '하데스': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="hd1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3f0f59"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M40 50c-4 20-6 38-2 56 2 6 6 8 12 6l16-20 16 24 16-24 16 20c6 2 10 0 12-6 4-18 2-36-2-56-8-12-20-20-38-20S48 38 40 50z" fill="url(#hd1)" stroke="#0f172a" stroke-width="2.5"/>
            <ellipse cx="60" cy="52" rx="18" ry="20" fill="#1a1a4b" stroke="#0f172a" stroke-width="2"/>
            <ellipse cx="52" cy="48" rx="5" ry="7" fill="#06b6d4" stroke="#0f172a" stroke-width="2"/><circle cx="52" cy="49" r="2" fill="#0c4a6e"/>
            <ellipse cx="68" cy="48" rx="5" ry="7" fill="#06b6d4" stroke="#0f172a" stroke-width="2"/><circle cx="68" cy="49" r="2" fill="#0c4a6e"/>
            <circle cx="60" cy="38" r="8" fill="#5b21b6" stroke="#0f172a" stroke-width="2"/>
        </svg>`,

        '포세이돈': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ps1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#0369a1"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 50c-4 20-6 38-2 56 2 6 6 8 12 6l16-20 16 24 16-24 16 20c6 2 10 0 12-6 4-18 2-36-2-56-8-12-20-20-38-20S48 38 40 50z" fill="url(#ps1)" stroke="#0369a1" stroke-width="2.5"/>
            <ellipse cx="60" cy="52" rx="18" ry="20" fill="#0c4a6e" stroke="#0369a1" stroke-width="2"/>
            <ellipse cx="52" cy="48" rx="5" ry="7" fill="#cffafe" stroke="#0369a1" stroke-width="2"/><circle cx="52" cy="49" r="2" fill="#0369a1"/>
            <ellipse cx="68" cy="48" rx="5" ry="7" fill="#cffafe" stroke="#0369a1" stroke-width="2"/><circle cx="68" cy="49" r="2" fill="#0369a1"/>
            <line x1="90" y1="45" x2="108" y2="30" stroke="#0ea5e9" stroke-width="4" stroke-linecap="round"/>
            <polygon points="108,30 105,36 110,36" fill="#0ea5e9" stroke="#0369a1" stroke-width="1.5"/>
        </svg>`,

        '아레스': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ar2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#7f1d1d"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="40" y="62" width="40" height="34" rx="4" fill="url(#ar2)" stroke="#7f1d1d" stroke-width="2.5"/>
            <rect x="44" y="68" width="32" height="10" rx="2" fill="#b91c1c" stroke="#7f1d1d" stroke-width="1.5"/>
            <ellipse cx="60" cy="40" rx="18" ry="18" fill="#fef2f2" stroke="#d6d3d1" stroke-width="2.5"/>
            <path d="M45 32c0-8 5-14 15-14s15 6 15 14" fill="#7f1d1d" opacity="0.3"/>
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/><circle cx="50" cy="37" r="2" fill="#7f1d1d"/>
            <ellipse cx="70" cy="36" rx="5" ry="7" fill="#dc2626" stroke="#7f1d1d" stroke-width="2"/><circle cx="70" cy="37" r="2" fill="#7f1d1d"/>
            <path d="M48 50c6 3 14 3 18 0" stroke="#7f1d1d" stroke-width="2" fill="none"/>
            <line x1="90" y1="55" x2="105" y2="75" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/>
        </svg>`,

        '아테나': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="at2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f5f5f4"/><stop offset="100%" stop-color="#d97706"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 50c-4 20-6 38-2 56 2 6 6 8 12 6l16-20 16 24 16-24 16 20c6 2 10 0 12-6 4-18 2-36-2-56-8-12-20-20-38-20S48 38 40 50z" fill="#b45309" stroke="#92400e" stroke-width="2.5"/>
            <ellipse cx="60" cy="52" rx="18" ry="20" fill="url(#at2)" stroke="#92400e" stroke-width="2"/>
            <ellipse cx="52" cy="48" rx="5" ry="7" fill="#fff" stroke="#92400e" stroke-width="2"/><circle cx="52" cy="49" r="2" fill="#78350f"/>
            <ellipse cx="68" cy="48" rx="5" ry="7" fill="#fff" stroke="#92400e" stroke-width="2"/><circle cx="68" cy="49" r="2" fill="#78350f"/>
            <circle cx="60" cy="35" r="10" fill="#f59e0b" stroke="#92400e" stroke-width="2"/>
            <path d="M56 32l4-6 4 6" fill="#fbbf24" stroke="#92400e" stroke-width="1"/>
        </svg>`,

        '크로노스': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cr1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#9f7aea"/><stop offset="100%" stop-color="#553399"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M35 55c-6-15-4-32 4-48 2 12 6 20 12 18 0-16 8-28 14-34 4 16 6 26 10 24 2-10 4-18 4-28 2 18 2 36-2 54-2 14-4 22-8 30l2 8c-8 4-18 6-28 6S41 71 35 55z" fill="url(#cr1)" stroke="#553399" stroke-width="2.5"/>
            <ellipse cx="60" cy="58" rx="20" ry="24" fill="#6d28d9" stroke="#553399" stroke-width="2"/>
            <circle cx="60" cy="35" r="10" fill="#c084fc" stroke="#553399" stroke-width="2"/>
            <path d="M60 25v20" stroke="#a855f7" stroke-width="2.5"/>
        </svg>`,

        '가이아': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ga1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#166534"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M30 50c-6 20-8 40-2 60 2 6 6 8 12 6l18-22 18 26 18-26 18 22c6 2 10 0 12-6 6-20 2-40-2-60-8-14-22-24-40-24S38 36 30 50z" fill="url(#ga1)" stroke="#15803d" stroke-width="2.5"/>
            <ellipse cx="60" cy="52" rx="20" ry="22" fill="#22c55e" stroke="#15803d" stroke-width="2"/>
            <ellipse cx="52" cy="48" rx="5" ry="7" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><circle cx="52" cy="49" r="2" fill="#15803d"/>
            <ellipse cx="68" cy="48" rx="5" ry="7" fill="#dcfce7" stroke="#15803d" stroke-width="2"/><circle cx="68" cy="49" r="2" fill="#15803d"/>
            <circle cx="60" cy="32" r="8" fill="#84cc16" stroke="#15803d" stroke-width="2"/>
        </svg>`,

        '카오스': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ch1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0f172a"/><stop offset="50%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
                <radialGradient id="ch2"><stop offset="0%" stop-color="#e9d5ff" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="50" fill="url(#ch2)"/>
            <ellipse cx="60" cy="108" rx="38" ry="6" fill="rgba(0,0,0,0.25)"/>
            <ellipse cx="60" cy="65" rx="36" ry="40" fill="url(#ch1)" stroke="#0f172a" stroke-width="2.5"/>
            <circle cx="60" cy="60" r="20" fill="none" stroke="#e9d5ff" stroke-width="1.5" opacity="0.5"/>
            <ellipse cx="52" cy="55" rx="7" ry="9" fill="#c084fc" stroke="#0f172a" stroke-width="2"/><circle cx="52" cy="56" r="2" fill="#e9d5ff"/>
            <ellipse cx="68" cy="55" rx="7" ry="9" fill="#c084fc" stroke="#0f172a" stroke-width="2"/><circle cx="68" cy="56" r="2" fill="#e9d5ff"/>
            <path d="M50 74c5 6 10 6 20 0" stroke="#0f172a" stroke-width="2.5" fill="none"/>
        </svg>`,

        // ═══ Tier 10 Final Bosses ═══
        '세계의 뱀 요르문간드': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="yd1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#064e3b"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="105" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M50 80c-4 8-6 16-2 26 2 6 8 8 12 4 4 8 10 8 14 2 4-8 2-18-2-26-4-4-14-4-18-4z" fill="url(#yd1)" stroke="#064e3b" stroke-width="2.5"/>
            <path d="M40 50c-2-10-2-18 0-28 2-8 10-10 14-4 0-12 4-22 10-28-2 12 4 22 8 26l-12 18z" fill="#10b981" stroke="#064e3b" stroke-width="2.5"/>
            <path d="M80 50c2-10 2-18 0-28-2-8-10-10-14-4 0-12-4-22-10-28 2 12-4 22-8 26l12 18z" fill="#10b981" stroke="#064e3b" stroke-width="2.5"/>
            <ellipse cx="60" cy="32" rx="14" ry="18" fill="url(#yd1)" stroke="#064e3b" stroke-width="2.5"/>
            <circle cx="54" cy="26" r="5" fill="#fff" stroke="#064e3b" stroke-width="2"/><circle cx="54" cy="27" r="2" fill="#1a1a1a"/>
            <circle cx="66" cy="26" r="5" fill="#fff" stroke="#064e3b" stroke-width="2"/><circle cx="66" cy="27" r="2" fill="#1a1a1a"/>
        </svg>`,

        '파괴신 수르트': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sr1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#7f1d1d"/><stop offset="30%" stop-color="#dc2626"/><stop offset="70%" stop-color="#f97316"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M32 55c-8-18-4-36 6-52 2 12 8 20 14 18 0-18 8-32 16-40 4 18 6 28 10 26 2-10 4-20 4-30 2 18 2 36-2 56-2 14-4 24-8 32l2 10c-8 4-20 6-30 6S40 69 32 55z" fill="url(#sr1)" stroke="#b91c1c" stroke-width="2.5"/>
            <ellipse cx="60" cy="60" rx="22" ry="28" fill="#ef4444" stroke="#b91c1c" stroke-width="2.5"/>
            <ellipse cx="52" cy="54" rx="6" ry="8" fill="#fef3c7" stroke="#b91c1c" stroke-width="2"/><circle cx="52" cy="55" r="2" fill="#7c2d12"/>
            <ellipse cx="68" cy="54" rx="6" ry="8" fill="#fef3c7" stroke="#b91c1c" stroke-width="2"/><circle cx="68" cy="55" r="2" fill="#7c2d12"/>
        </svg>`,

        '세계 늑대 펜리르': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fw2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4b5563"/><stop offset="100%" stop-color="#1e293b"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <ellipse cx="62" cy="72" rx="28" ry="24" fill="url(#fw2)" stroke="#1e293b" stroke-width="2.5"/>
            <ellipse cx="50" cy="48" rx="18" ry="18" fill="url(#fw2)" stroke="#1e293b" stroke-width="2.5"/>
            <path d="M34 62l-14-6-10 10 10 4z" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
            <path d="M86 62l14-6 10 10-10 4z" fill="#64748b" stroke="#1e293b" stroke-width="2"/>
            <ellipse cx="40" cy="46" rx="5" ry="7" fill="#fff" stroke="#1e293b" stroke-width="2"/><circle cx="40" cy="47" r="2.5" fill="#1e293b"/>
            <ellipse cx="60" cy="46" rx="5" ry="7" fill="#fff" stroke="#1e293b" stroke-width="2"/><circle cx="60" cy="47" r="2.5" fill="#1e293b"/>
            <path d="M40 58c8 6 20 6 30 0" stroke="#1e293b" stroke-width="2.5" fill="none"/>
        </svg>`,

        '심연의 황제': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ae1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#1e1b4b"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="34" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M28 60c-6-18-2-36 6-52 2 12 8 18 14 16 0-18 6-30 12-36 2 16 4 26 8 24 2-10 2-20 2-30 2 18 0 38-4 56-2 14-4 24-8 32l2 10c-8 4-20 6-30 6S34 74 28 60z" fill="url(#ae1)" stroke="#1e1b4b" stroke-width="2.5"/>
            <circle cx="60" cy="55" r="18" fill="#4c1d95" stroke="#1e1b4b" stroke-width="2"/>
            <ellipse cx="52" cy="50" rx="5" ry="7" fill="#c084fc" stroke="#1e1b4b" stroke-width="2"/><circle cx="52" cy="51" r="2" fill="#e9d5ff"/>
            <ellipse cx="68" cy="50" rx="5" ry="7" fill="#c084fc" stroke="#1e1b4b" stroke-width="2"/><circle cx="68" cy="51" r="2" fill="#e9d5ff"/>
            <circle cx="60" cy="32" r="10" fill="#9f1239" stroke="#1e1b4b" stroke-width="2"/>
        </svg>`,

        '차원의 파괴자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="dd1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="50%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="36" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M25 55c-8-20-4-40 6-56 2 14 8 22 14 20 0-20 8-32 16-40 4 18 6 30 10 26 2-12 4-22 4-34 2 20 2 40-2 60-2 16-4 26-8 34l2 10c-10 4-22 6-32 6S33 71 25 55z" fill="url(#dd1)" stroke="#450a0a" stroke-width="2.5"/>
            <ellipse cx="60" cy="60" rx="24" ry="30" fill="#7c2d12" stroke="#450a0a" stroke-width="2.5"/>
            <ellipse cx="52" cy="52" rx="6" ry="8" fill="#fef3c7" stroke="#450a0a" stroke-width="2"/><circle cx="52" cy="53" r="2" fill="#7c2d12"/>
            <ellipse cx="68" cy="52" rx="6" ry="8" fill="#fef3c7" stroke="#450a0a" stroke-width="2"/><circle cx="68" cy="53" r="2" fill="#7c2d12"/>
        </svg>`,

        '영겁의 수호자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="eg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#92400e"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="34" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="36" y="48" width="48" height="52" rx="6" fill="url(#eg2)" stroke="#78350f" stroke-width="2.5"/>
            <rect x="42" y="56" width="36" height="12" rx="2" fill="#f59e0b" stroke="#78350f" stroke-width="1.5"/>
            <rect x="44" y="76" width="32" height="10" rx="2" fill="#d97706" stroke="#78350f" stroke-width="1.5"/>
            <ellipse cx="60" cy="36" rx="20" ry="18" fill="url(#eg2)" stroke="#78350f" stroke-width="2.5"/>
            <circle cx="60" cy="28" r="8" fill="#fde68a" stroke="#78350f" stroke-width="2"/>
            <path d="M56 26l-2-5 1 2z" fill="#fbbf24"/><path d="M64 26l2-5-1 2z" fill="#fbbf24"/>
            <ellipse cx="50" cy="34" rx="5" ry="7" fill="#fff" stroke="#78350f" stroke-width="2"/><circle cx="50" cy="35" r="2" fill="#78350f"/>
            <ellipse cx="70" cy="34" rx="5" ry="7" fill="#fff" stroke="#78350f" stroke-width="2"/><circle cx="70" cy="35" r="2" fill="#78350f"/>
        </svg>`,

        '우주의 심장': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="ch3"><stop offset="0%" stop-color="#d8b4fe"/><stop offset="60%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#3b0764"/></radialGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="34" ry="6" fill="rgba(0,0,0,0.2)"/>
            <circle cx="60" cy="60" r="32" fill="url(#ch3)" stroke="#3b0764" stroke-width="2.5"/>
            <circle cx="60" cy="60" r="22" fill="#a855f7" opacity="0.4"/>
            <circle cx="60" cy="60" r="12" fill="#e9d5ff" opacity="0.6"/>
            <circle cx="60" cy="60" r="6" fill="#fff" opacity="0.8"/>
            <path d="M60 18v84M18 60h84" stroke="#c084fc" stroke-width="2" opacity="0.4"/>
            <circle cx="18" cy="60" r="2" fill="#d8b4fe"/><circle cx="102" cy="60" r="2" fill="#d8b4fe"/>
            <circle cx="60" cy="18" r="2" fill="#d8b4fe"/><circle cx="60" cy="102" r="2" fill="#d8b4fe"/>
        </svg>`,

        '시간의 종말': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="te1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#0c4a6e"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="34" ry="6" fill="rgba(0,0,0,0.2)"/>
            <ellipse cx="60" cy="60" rx="32" ry="36" fill="url(#te1)" stroke="#0c4a6e" stroke-width="2.5"/>
            <circle cx="60" cy="60" r="24" fill="none" stroke="#0ea5e9" stroke-width="2"/>
            <circle cx="60" cy="60" r="18" fill="none" stroke="#06b6d4" stroke-width="1.5" opacity="0.5"/>
            <path d="M60 24v72M24 60h72" stroke="#06b6d4" stroke-width="2" opacity="0.4"/>
            <circle cx="24" cy="60" r="3" fill="#0ea5e9"/><circle cx="96" cy="60" r="3" fill="#0ea5e9"/>
            <ellipse cx="52" cy="54" rx="6" ry="8" fill="#cffafe" stroke="#0c4a6e" stroke-width="2"/><circle cx="52" cy="55" r="2" fill="#0c4a6e"/>
            <ellipse cx="68" cy="54" rx="6" ry="8" fill="#cffafe" stroke="#0c4a6e" stroke-width="2"/><circle cx="68" cy="55" r="2" fill="#0c4a6e"/>
        </svg>`,

        '절대적 존재': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ab1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#1f2937"/></linearGradient>
                <radialGradient id="ab2"><stop offset="0%" stop-color="#fef3c7" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="50" fill="url(#ab2)"/>
            <ellipse cx="60" cy="108" rx="36" ry="6" fill="rgba(0,0,0,0.25)"/>
            <ellipse cx="60" cy="65" rx="34" ry="38" fill="url(#ab1)" stroke="#1f2937" stroke-width="2.5"/>
            <ellipse cx="52" cy="55" rx="8" ry="10" fill="#fbbf24" stroke="#1f2937" stroke-width="2"/><circle cx="52" cy="56" r="3" fill="#fff"/>
            <ellipse cx="68" cy="55" rx="8" ry="10" fill="#fbbf24" stroke="#1f2937" stroke-width="2"/><circle cx="68" cy="56" r="3" fill="#fff"/>
            <path d="M50 76c5 6 10 6 20 0" stroke="#1f2937" stroke-width="2.5" fill="none"/>
            <circle cx="60" cy="32" r="10" fill="#fff" stroke="#1f2937" stroke-width="2"/>
        </svg>`,

        '??? (최종)': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="final"><stop offset="0%" stop-color="#e9d5ff"/><stop offset="50%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#2d1b69"/></radialGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="38" ry="6" fill="rgba(0,0,0,0.25)"/>
            <circle cx="60" cy="60" r="50" fill="url(#final)" stroke="#2d1b69" stroke-width="3"/>
            <circle cx="60" cy="60" r="40" fill="none" stroke="#c084fc" stroke-width="2" opacity="0.6"/>
            <circle cx="60" cy="60" r="28" fill="none" stroke="#a855f7" stroke-width="1.5" opacity="0.5"/>
            <path d="M60 10v100M10 60h100" stroke="#c084fc" stroke-width="2.5" opacity="0.4"/>
            <circle cx="10" cy="60" r="3" fill="#e9d5ff"/><circle cx="110" cy="60" r="3" fill="#e9d5ff"/>
            <circle cx="60" cy="10" r="3" fill="#e9d5ff"/><circle cx="60" cy="110" r="3" fill="#e9d5ff"/>
            <text x="60" y="65" font-size="24" font-weight="bold" text-anchor="middle" fill="#e9d5ff" opacity="0.8">?</text>
        </svg>`,
    });
})();
