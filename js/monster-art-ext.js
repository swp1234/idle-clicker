// Monster Art Extension - Additional SVG Illustrations
// Extends MONSTER_SVG from game-data.js with more detailed monster designs
// Style: Clicker Heroes-inspired with bold outlines, cartoon shading, dynamic poses

(function() {
    if (typeof MONSTER_SVG === 'undefined') return;

    Object.assign(MONSTER_SVG, {
        // ═══ Tier 1 Additional Monsters ═══
        '들쥐': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="rm1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a16207"/><stop offset="100%" stop-color="#654321"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="106" rx="24" ry="5" fill="rgba(0,0,0,0.2)"/>
            <ellipse cx="60" cy="60" rx="20" ry="18" fill="url(#rm1)" stroke="#3e2723" stroke-width="2.5"/>
            <circle cx="60" cy="36" r="14" fill="url(#rm1)" stroke="#3e2723" stroke-width="2.5"/>
            <path d="M52 32l-8-6 4 2z" fill="#78350f" stroke="#3e2723" stroke-width="2"/><path d="M68 32l8-6-4 2z" fill="#78350f" stroke="#3e2723" stroke-width="2"/>
            <ellipse cx="46" cy="32" rx="5" ry="7" fill="#fff" stroke="#3e2723" stroke-width="2"/><ellipse cx="46" cy="33" rx="2.5" ry="4" fill="#1a1a1a"/><circle cx="44" cy="31" r="1.5" fill="#fff"/>
            <ellipse cx="74" cy="32" rx="5" ry="7" fill="#fff" stroke="#3e2723" stroke-width="2"/><ellipse cx="74" cy="33" rx="2.5" ry="4" fill="#1a1a1a"/><circle cx="72" cy="31" r="1.5" fill="#fff"/>
            <ellipse cx="60" cy="40" rx="4" ry="3" fill="#5c3317" stroke="#3e2723" stroke-width="1.5"/>
            <path d="M50 50c5 4 10 4 20 0" stroke="#3e2723" stroke-width="2" fill="none"/>
            <path d="M50 50l-1 5" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round"/>
            <path d="M70 50l1 5" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round"/>
            <path d="M60 96c-8 2-12 8-8 12s12 2 16-2" fill="#d4a574" stroke="#654321" stroke-width="2"/>
            <path d="M60 96c8 2 12 8 8 12s-12 2-16-2" fill="#d4a574" stroke="#654321" stroke-width="2"/>
        </svg>`,

        '전갈': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sc1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d97706"/><stop offset="100%" stop-color="#78350f"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="5" fill="rgba(0,0,0,0.2)"/>
            <g stroke="#78350f" stroke-width="3" stroke-linecap="round" fill="none">
                <path d="M38 62c-8-4-14-2-18 4"/><path d="M82 62c8-4 14-2 18 4"/>
                <path d="M36 74c-10 2-16 8-14 16"/><path d="M84 74c10 2 16 8 14 16"/>
            </g>
            <ellipse cx="60" cy="68" rx="22" ry="18" fill="url(#sc1)" stroke="#78350f" stroke-width="2.5"/>
            <ellipse cx="60" cy="72" rx="14" ry="10" fill="#f59e0b" opacity="0.4"/>
            <path d="M48 58c2 6 16 6 24 0" stroke="#78350f" stroke-width="2.5" fill="none"/>
            <ellipse cx="52" cy="58" rx="6" ry="8" fill="#fff" stroke="#78350f" stroke-width="2"/><ellipse cx="52" cy="59" rx="3" ry="5" fill="#78350f"/>
            <ellipse cx="68" cy="58" rx="6" ry="8" fill="#fff" stroke="#78350f" stroke-width="2"/><ellipse cx="68" cy="59" rx="3" ry="5" fill="#78350f"/>
            <path d="M60 84c-6 8-8 18-2 26" stroke="#92400e" stroke-width="4" fill="none" stroke-linecap="round"/>
            <path d="M62 108l4 2-2-4z" fill="#92400e" stroke="#78350f" stroke-width="1.5"/>
            <circle cx="20" cy="66" r="2.5" fill="#f59e0b"/><circle cx="100" cy="66" r="2.5" fill="#f59e0b"/>
            <circle cx="22" cy="90" r="2" fill="#f59e0b"/><circle cx="98" cy="90" r="2" fill="#f59e0b"/>
        </svg>`,

        '뱀': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sn1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e"/><stop offset="100%" stop-color="#15803d"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="105" rx="20" ry="4" fill="rgba(0,0,0,0.2)"/>
            <path d="M60 80c8 0 12-8 12-16s-4-20-12-24c-8 4-12 16-12 24s4 16 12 16z" fill="url(#sn1)" stroke="#15803d" stroke-width="2.5"/>
            <path d="M50 50c-2-8-4-16-2-24 2-6 6-8 10-6 2 6 2 14 0 22M70 50c2-8 4-16 2-24-2-6-6-8-10-6-2 6-2 14 0 22" fill="#16a34a" stroke="#15803d" stroke-width="2.5"/>
            <ellipse cx="60" cy="35" rx="8" ry="10" fill="#16a34a" stroke="#15803d" stroke-width="2"/>
            <ellipse cx="55" cy="30" rx="4" ry="5" fill="#fff" stroke="#15803d" stroke-width="1.5"/><circle cx="54" cy="29" r="1.5" fill="#1a1a1a"/>
            <ellipse cx="65" cy="30" rx="4" ry="5" fill="#fff" stroke="#15803d" stroke-width="1.5"/><circle cx="66" cy="29" r="1.5" fill="#1a1a1a"/>
            <path d="M52 40l-4 0" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
            <path d="M68 40l4 0" stroke="#1a1a1a" stroke-width="2" stroke-linecap="round"/>
            <path d="M58 42c1 2 4 2 4 0" stroke="#f59e0b" stroke-width="1.5" fill="none"/>
            <path d="M55 55l3 4-1 3M65 55l-3 4 1 3" fill="#15803d" stroke="#0f3d1a" stroke-width="1"/>
        </svg>`,

        '버섯괴물': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="mg1" cx="40%" cy="30%"><stop offset="0%" stop-color="#fca5a5"/><stop offset="100%" stop-color="#dc2626"/></radialGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="24" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 65c-4 8-6 16-4 24 1 6 5 8 10 6h28c5 2 9 0 10-6 2-8 0-16-4-24-4-6-12-8-20-8s-16 2-20 8z" fill="#7c2d12" stroke="#451a03" stroke-width="2.5"/>
            <path d="M35 50c-8-10-10-22-4-32 6 4 14 4 20 0 0-8 6-16 12-20 2 12 4 24 6 32-4 10-12 16-28 16s-20-4-6-4z" fill="url(#mg1)" stroke="#b91c1c" stroke-width="2.5"/>
            <circle cx="50" cy="45" r="8" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><circle cx="50" cy="45" r="4" fill="#ef4444" opacity="0.6"/>
            <circle cx="70" cy="42" r="7" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><circle cx="70" cy="42" r="3.5" fill="#ef4444" opacity="0.6"/>
            <circle cx="60" cy="55" r="5" fill="#fca5a5" stroke="#b91c1c" stroke-width="2"/><circle cx="60" cy="55" r="2.5" fill="#ef4444" opacity="0.6"/>
            <ellipse cx="52" cy="75" rx="5" ry="6" fill="#fff" stroke="#451a03" stroke-width="1.5"/><circle cx="52" cy="76" r="2" fill="#1a1a1a"/>
            <ellipse cx="68" cy="75" rx="5" ry="6" fill="#fff" stroke="#451a03" stroke-width="1.5"/><circle cx="68" cy="76" r="2" fill="#1a1a1a"/>
            <path d="M48 85c4 3 12 3 16 0" stroke="#451a03" stroke-width="2" fill="none"/>
            <path d="M40 60l-3-4 1-3M80 60l3-4-1-3M45 48l-5-2 1-3" fill="#9f1239" opacity="0.4"/>
        </svg>`,

        '해골 전사': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sk1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#cbd5e1"/><stop offset="100%" stop-color="#94a3b8"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
            <rect x="42" y="72" width="36" height="28" rx="4" fill="#64748b" stroke="#334155" stroke-width="2"/>
            <rect x="45" y="76" width="30" height="8" rx="2" fill="#475569" stroke="#334155" stroke-width="1"/>
            <rect x="52" y="88" width="16" height="8" rx="2" fill="#334155" opacity="0.3"/>
            <line x1="90" y1="60" x2="98" y2="88" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
            <polygon points="98,88 100,82 102,88" fill="#94a3b8" stroke="#334155" stroke-width="1.5"/>
            <ellipse cx="60" cy="48" rx="18" ry="20" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2.5"/>
            <ellipse cx="52" cy="42" rx="7" ry="9" fill="#0f172a" stroke="#334155" stroke-width="2"/>
            <ellipse cx="52" cy="43" rx="3" ry="5" fill="#06b6d4"/><circle cx="50" cy="40" r="1.5" fill="#fff"/>
            <ellipse cx="68" cy="42" rx="7" ry="9" fill="#0f172a" stroke="#334155" stroke-width="2"/>
            <ellipse cx="68" cy="43" rx="3" ry="5" fill="#06b6d4"/><circle cx="66" cy="40" r="1.5" fill="#fff"/>
            <path d="M56 52l2 4 2-4" fill="#0f172a" stroke="#334155" stroke-width="1"/>
            <path d="M50 60c5 4 14 4 20 0" stroke="#334155" stroke-width="2" fill="none"/>
            <path d="M54 60l-2 5" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
            <path d="M66 60l2 5" stroke="#e2e8f0" stroke-width="2" stroke-linecap="round"/>
        </svg>`,

        '멧돼지': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5a4a42"/><stop offset="100%" stop-color="#3e2723"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="106" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <ellipse cx="62" cy="68" rx="24" ry="20" fill="url(#bg1)" stroke="#3e2723" stroke-width="2.5"/>
            <ellipse cx="52" cy="48" rx="16" ry="16" fill="url(#bg1)" stroke="#3e2723" stroke-width="2.5"/>
            <path d="M42 56l-10-4-8 8 8 2z" fill="#8b6f47" stroke="#3e2723" stroke-width="2"/>
            <path d="M78 56l10-4 8 8-8 2z" fill="#8b6f47" stroke="#3e2723" stroke-width="2"/>
            <ellipse cx="38" cy="48" rx="5" ry="6" fill="#fff" stroke="#3e2723" stroke-width="2"/><circle cx="38" cy="49" r="2" fill="#1a1a1a"/>
            <ellipse cx="66" cy="48" rx="5" ry="6" fill="#fff" stroke="#3e2723" stroke-width="2"/><circle cx="66" cy="49" r="2" fill="#1a1a1a"/>
            <ellipse cx="52" cy="38" rx="6" ry="5" fill="#5a4a42" stroke="#3e2723" stroke-width="2"/>
            <ellipse cx="50" cy="88" rx="8" ry="6" fill="#8b6f47" stroke="#3e2723" stroke-width="2"/>
            <ellipse cx="70" cy="88" rx="8" ry="6" fill="#8b6f47" stroke="#3e2723" stroke-width="2"/>
            <path d="M42 60c6 6 16 6 24 0" stroke="#3e2723" stroke-width="2.5" fill="none"/>
            <path d="M48 62l-6 4" stroke="#f5f5f5" stroke-width="3" stroke-linecap="round"/>
            <path d="M72 62l6 4" stroke="#f5f5f5" stroke-width="3" stroke-linecap="round"/>
        </svg>`,

        '도적': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="tf1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#2d3748"/><stop offset="100%" stop-color="#1a202c"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="106" rx="22" ry="5" fill="rgba(0,0,0,0.2)"/>
            <rect x="36" y="60" width="48" height="36" rx="4" fill="#34495e" stroke="#1a202c" stroke-width="2"/>
            <path d="M60 60v36" stroke="#1a202c" stroke-width="1" opacity="0.3"/>
            <rect x="40" y="65" width="8" height="10" rx="2" fill="#7c3aed" stroke="#3b0764" stroke-width="1.5"/>
            <path d="M30 50c-6 6-10 14-8 24l2 1 10-14z" fill="#34495e" stroke="#1a202c" stroke-width="2"/>
            <path d="M38 48c-2 8-2 16 2 22" fill="none" stroke="#1a202c" stroke-width="2"/>
            <path d="M90 50c6 6 10 14 8 24l-2 1-10-14z" fill="#34495e" stroke="#1a202c" stroke-width="2"/>
            <path d="M82 48c2 8 2 16-2 22" fill="none" stroke="#1a202c" stroke-width="2"/>
            <path d="M50 36c-8-4-12-12-8-20l4 4 6-8z" fill="#2d3748" stroke="#1a202c" stroke-width="2"/>
            <circle cx="58" cy="42" r="14" fill="#3e4856" stroke="#1a202c" stroke-width="2.5"/>
            <path d="M40 40c0-8 6-14 18-14s18 6 18 14c-2-4-8-8-18-8s-16 4-18 8z" fill="#1a202c"/>
            <ellipse cx="50" cy="40" rx="5" ry="6" fill="#fff" stroke="#1a202c" stroke-width="1.5"/><circle cx="50" cy="41" r="2.5" fill="#1a1a1a"/>
            <ellipse cx="66" cy="40" rx="5" ry="6" fill="#fff" stroke="#1a202c" stroke-width="1.5"/><circle cx="66" cy="41" r="2.5" fill="#1a1a1a"/>
            <path d="M48 50c6 3 14 3 18 0" stroke="#1a202c" stroke-width="2" fill="none"/>
            <line x1="92" y1="54" x2="104" y2="68" stroke="#94a3b8" stroke-width="2.5" stroke-linecap="round"/>
            <polygon points="104,68 100,66 102,74" fill="#94a3b8" stroke="#1a202c" stroke-width="1.5"/>
        </svg>`,

        // ═══ Tier 2 Additional Monsters ═══
        '오크': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ok1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#6b7280"/><stop offset="100%" stop-color="#374151"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <ellipse cx="60" cy="70" rx="24" ry="26" fill="url(#ok1)" stroke="#111827" stroke-width="2.5"/>
            <path d="M50 64c4 8 16 8 20 0" stroke="#111827" stroke-width="2.5" fill="none"/>
            <ellipse cx="45" cy="64" rx="10" ry="12" fill="#fff" stroke="#111827" stroke-width="2"/><ellipse cx="45" cy="65" rx="5" ry="7" fill="#374151"/><circle cx="43" cy="61" r="2" fill="#fff"/>
            <ellipse cx="75" cy="64" rx="10" ry="12" fill="#fff" stroke="#111827" stroke-width="2"/><ellipse cx="75" cy="65" rx="5" ry="7" fill="#374151"/><circle cx="73" cy="61" r="2" fill="#fff"/>
            <ellipse cx="60" cy="48" rx="20" ry="18" fill="url(#ok1)" stroke="#111827" stroke-width="2.5"/>
            <path d="M38 42l-12-8-2 4 10 6z" fill="#4b5563" stroke="#111827" stroke-width="2"/>
            <path d="M82 42l12-8 2 4-10 6z" fill="#4b5563" stroke="#111827" stroke-width="2"/>
            <ellipse cx="50" cy="46" rx="6" ry="8" fill="#fff" stroke="#111827" stroke-width="2"/><circle cx="50" cy="47" r="3" fill="#111827"/>
            <ellipse cx="70" cy="46" rx="6" ry="8" fill="#fff" stroke="#111827" stroke-width="2"/><circle cx="70" cy="47" r="3" fill="#111827"/>
            <ellipse cx="60" cy="52" rx="5" ry="4" fill="#4b5563" stroke="#111827" stroke-width="1.5"/>
            <path d="M45 56l-8 4" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M75 56l8 4" stroke="#9ca3af" stroke-width="2.5" stroke-linecap="round"/>
            <g transform="rotate(-30 100 70)">
                <rect x="92" y="55" width="4" height="24" rx="2" fill="#6d5d52" stroke="#3e2723" stroke-width="1.5"/>
                <polygon points="96,55 92,48 98,48" fill="#d4a574" stroke="#3e2723" stroke-width="1"/>
            </g>
        </svg>`,

        '나무 정령': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="tf2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#84cc16"/><stop offset="100%" stop-color="#365314"/></linearGradient>
                <radialGradient id="tf3" cx="40%"><stop offset="0%" stop-color="#a3e635" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="35" fill="url(#tf3)"/>
            <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
            <ellipse cx="50" cy="45" rx="12" ry="18" fill="url(#tf2)" stroke="#3f6212" stroke-width="2"/>
            <ellipse cx="70" cy="45" rx="12" ry="18" fill="url(#tf2)" stroke="#3f6212" stroke-width="2"/>
            <path d="M44 52l-8-4" stroke="#65a30d" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M46 60l-10 2" stroke="#65a30d" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M76 52l8-4" stroke="#65a30d" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M74 60l10 2" stroke="#65a30d" stroke-width="2.5" stroke-linecap="round"/>
            <ellipse cx="60" cy="70" rx="22" ry="26" fill="url(#tf2)" stroke="#3f6212" stroke-width="2.5"/>
            <path d="M52 62h16" stroke="#3f6212" stroke-width="1" opacity="0.3"/>
            <path d="M50 72h20" stroke="#3f6212" stroke-width="1" opacity="0.3"/>
            <path d="M50 82h20" stroke="#3f6212" stroke-width="1" opacity="0.3"/>
            <circle cx="50" cy="56" r="6" fill="#a3e635" stroke="#3f6212" stroke-width="2"/><circle cx="50" cy="56" r="3" fill="#65a30d"/>
            <circle cx="70" cy="56" r="6" fill="#a3e635" stroke="#3f6212" stroke-width="2"/><circle cx="70" cy="56" r="3" fill="#65a30d"/>
            <ellipse cx="60" cy="64" rx="5" ry="4" fill="#3f6212"/>
        </svg>`,

        '곰': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="br1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#92400e"/><stop offset="100%" stop-color="#5a3a1a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M60 50c-20 0-26 14-24 28 1 8 6 14 12 16h24c6-2 11-8 12-16 2-14-4-28-24-28z" fill="url(#br1)" stroke="#3e2723" stroke-width="2.5"/>
            <ellipse cx="60" cy="72" rx="14" ry="12" fill="#a3876d" opacity="0.3"/>
            <ellipse cx="60" cy="36" rx="18" ry="18" fill="url(#br1)" stroke="#3e2723" stroke-width="2.5"/>
            <ellipse cx="50" cy="32" rx="6" ry="7" fill="#5a3a1a" stroke="#3e2723" stroke-width="2"/><circle cx="48" cy="30" r="2" fill="#f5f5f5"/>
            <ellipse cx="70" cy="32" rx="6" ry="7" fill="#5a3a1a" stroke="#3e2723" stroke-width="2"/><circle cx="72" cy="30" r="2" fill="#f5f5f5"/>
            <ellipse cx="60" cy="40" rx="5" ry="4" fill="#3e2723" stroke="#1a1a1a" stroke-width="1.5"/>
            <path d="M50 46c5 4 10 4 20 0" stroke="#3e2723" stroke-width="2.5" fill="none"/>
            <rect x="30" y="62" width="12" height="32" rx="6" fill="#6b4423" stroke="#3e2723" stroke-width="2"/>
            <rect x="78" y="62" width="12" height="32" rx="6" fill="#6b4423" stroke="#3e2723" stroke-width="2"/>
            <circle cx="36" cy="96" r="5" fill="#5a3a1a" stroke="#3e2723" stroke-width="1.5"/>
            <circle cx="84" cy="96" r="5" fill="#5a3a1a" stroke="#3e2723" stroke-width="1.5"/>
            <path d="M48 80l-8 4M70 80l8 4" stroke="#3e2723" stroke-width="2" stroke-linecap="round"/>
        </svg>`,

        '요정 도둑': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fte1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e9d5ff"/><stop offset="100%" stop-color="#d8b4fe"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="18" ry="4" fill="rgba(0,0,0,0.2)"/>
            <path d="M50 25c-8-2-14 4-14 12s4 14 10 14 10 8 10 16l-2 16s-2 4 0 6 8 0 8 0 8 2 8 0 2-6 0-6l-2-16c0-8 4-14 10-16s12-6 10-14-6-14-14-12z" fill="url(#fte1)" stroke="#7c3aed" stroke-width="2"/>
            <path d="M42 30l-4-8 6 2z" fill="#a78bfa" stroke="#7c3aed" stroke-width="1.5"/>
            <path d="M78 30l4-8-6 2z" fill="#a78bfa" stroke="#7c3aed" stroke-width="1.5"/>
            <circle cx="60" cy="45" r="12" fill="#f5e6ff" stroke="#7c3aed" stroke-width="2.5"/>
            <ellipse cx="50" cy="43" rx="5" ry="6" fill="#c7d2fe" stroke="#7c3aed" stroke-width="2"/><ellipse cx="50" cy="44" rx="2.5" ry="4" fill="#6366f1"/><circle cx="48" cy="41" r="1.5" fill="#fff"/>
            <ellipse cx="70" cy="43" rx="5" ry="6" fill="#c7d2fe" stroke="#7c3aed" stroke-width="2"/><ellipse cx="70" cy="44" rx="2.5" ry="4" fill="#6366f1"/><circle cx="68" cy="41" r="1.5" fill="#fff"/>
            <path d="M56 52c3 2 6 2 8 0" stroke="#7c3aed" stroke-width="2" fill="none"/>
            <path d="M54 54l-4 2" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"/>
            <path d="M66 54l4 2" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"/>
            <line x1="92" y1="50" x2="104" y2="68" stroke="#7c3aed" stroke-width="2.5" stroke-linecap="round"/>
            <polygon points="104,68 100,66 102,74" fill="#a78bfa" stroke="#7c3aed" stroke-width="1"/>
        </svg>`,

        '식인 식물': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cp1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e"/><stop offset="100%" stop-color="#059669"/></linearGradient>
                <linearGradient id="cp2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#86efac"/><stop offset="100%" stop-color="#22c55e"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="22" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M45 70l-8 12 4 8 8-12z" fill="url(#cp1)" stroke="#15803d" stroke-width="2"/>
            <path d="M75 70l8 12-4 8-8-12z" fill="url(#cp1)" stroke="#15803d" stroke-width="2"/>
            <ellipse cx="60" cy="60" rx="24" ry="28" fill="url(#cp2)" stroke="#15803d" stroke-width="2.5"/>
            <path d="M40 50c0 12 6 28 20 36 14-8 20-24 20-36" fill="url(#cp1)" stroke="#15803d" stroke-width="2.5"/>
            <ellipse cx="52" cy="44" rx="8" ry="10" fill="#fff" stroke="#15803d" stroke-width="2"/><ellipse cx="52" cy="45" rx="4" ry="6" fill="#1a1a1a"/><circle cx="50" cy="41" r="1.5" fill="#22c55e"/>
            <ellipse cx="68" cy="44" rx="8" ry="10" fill="#fff" stroke="#15803d" stroke-width="2"/><ellipse cx="68" cy="45" rx="4" ry="6" fill="#1a1a1a"/><circle cx="66" cy="41" r="1.5" fill="#22c55e"/>
            <path d="M45 65l2 8-1 4M60 70l0 8M75 65l-2 8 1 4" fill="#15803d" stroke="#0f3d1a" stroke-width="1.5"/>
            <ellipse cx="60" cy="35" rx="6" ry="8" fill="#16a34a" stroke="#15803d" stroke-width="2"/>
            <circle cx="45" cy="52" r="3" fill="#1a1a1a"/><circle cx="75" cy="52" r="3" fill="#1a1a1a"/>
        </svg>`,

        '코볼트': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="cb1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#78716c"/><stop offset="100%" stop-color="#44403c"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="24" ry="5" fill="rgba(0,0,0,0.2)"/>
            <ellipse cx="60" cy="68" rx="20" ry="22" fill="url(#cb1)" stroke="#1c1917" stroke-width="2.5"/>
            <path d="M50 92c-8 2-12 6-8 10s12 2 16-2" fill="#6b5b52" stroke="#3e2723" stroke-width="2"/>
            <path d="M70 92c8 2 12 6 8 10s-12 2-16-2" fill="#6b5b52" stroke="#3e2723" stroke-width="2"/>
            <ellipse cx="60" cy="42" rx="16" ry="16" fill="url(#cb1)" stroke="#1c1917" stroke-width="2.5"/>
            <path d="M50 34l-6-12 8 6z" fill="#6b5b52" stroke="#1c1917" stroke-width="2"/>
            <path d="M70 34l6-12-8 6z" fill="#6b5b52" stroke="#1c1917" stroke-width="2"/>
            <ellipse cx="52" cy="40" rx="5" ry="6" fill="#fbbf24" stroke="#1c1917" stroke-width="2"/><ellipse cx="52" cy="41" rx="2.5" ry="4" fill="#78350f"/><circle cx="50" cy="38" r="1.5" fill="#fef3c7"/>
            <ellipse cx="68" cy="40" rx="5" ry="6" fill="#fbbf24" stroke="#1c1917" stroke-width="2"/><ellipse cx="68" cy="41" rx="2.5" ry="4" fill="#78350f"/><circle cx="66" cy="38" r="1.5" fill="#fef3c7"/>
            <path d="M50 52c5 4 10 4 20 0" stroke="#1c1917" stroke-width="2.5" fill="none"/>
            <path d="M50 52l-1 5" stroke="#fef3c7" stroke-width="2" stroke-linecap="round"/>
            <path d="M70 52l1 5" stroke="#fef3c7" stroke-width="2" stroke-linecap="round"/>
        </svg>`,

        '숲 마녀': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fw1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a855f7"/><stop offset="100%" stop-color="#581c87"/></linearGradient>
                <radialGradient id="fw2" cx="50%"><stop offset="0%" stop-color="#d8b4fe" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="65" r="40" fill="url(#fw2)"/>
            <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 50c-4 22-6 38-2 56 1 6 5 8 10 6h40c5 2 9 0 10-6 4-18 2-34-2-56-6-10-18-16-28-16s-22 6-28 16z" fill="url(#fw1)" stroke="#581c87" stroke-width="2"/>
            <path d="M60 35l-2-12-3 6z" fill="#e9d5ff" stroke="#581c87" stroke-width="2"/><path d="M60 35l2-12 3 6z" fill="#e9d5ff" stroke="#581c87" stroke-width="2"/>
            <circle cx="60" cy="50" r="14" fill="#c7d2fe" stroke="#581c87" stroke-width="2.5"/>
            <path d="M50 50c0-8 4-14 10-14s10 6 10 14" fill="#7c3aed" stroke="#581c87" stroke-width="2"/>
            <ellipse cx="52" cy="48" rx="5" ry="6" fill="#fff" stroke="#581c87" stroke-width="2"/><ellipse cx="52" cy="49" rx="2.5" ry="4" fill="#4c0519"/><circle cx="50" cy="46" r="1.5" fill="#e9d5ff"/>
            <ellipse cx="68" cy="48" rx="5" ry="6" fill="#fff" stroke="#581c87" stroke-width="2"/><ellipse cx="68" cy="49" rx="2.5" ry="4" fill="#4c0519"/><circle cx="66" cy="46" r="1.5" fill="#e9d5ff"/>
            <ellipse cx="60" cy="54" rx="5" ry="4" fill="#1a1a1a"/>
            <path d="M50 60c5 4 10 4 20 0" stroke="#581c87" stroke-width="2" fill="none"/>
            <line x1="90" y1="45" x2="102" y2="25" stroke="#e9d5ff" stroke-width="3" stroke-linecap="round"/>
            <circle cx="102" cy="24" r="5" fill="#e9d5ff" stroke="#581c87" stroke-width="1.5"/>
            <path d="M98 22l2-3-1 2z" fill="#a855f7"/>
        </svg>`,

        // ═══ Tier 3 Additional Monsters ═══
        '화염 박쥐': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fb1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="50%" stop-color="#f97316"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
                <radialGradient id="fb2"><stop offset="0%" stop-color="#fef3c7" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="35" fill="url(#fb2)"/>
            <ellipse cx="60" cy="108" rx="24" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M20 55c-6-8-8-20-2-32 6 6 14 8 20 4 2-8 8-14 14-18-2 12 2 22 6 24l-10 14z" fill="url(#fb1)" stroke="#b91c1c" stroke-width="2"/>
            <path d="M100 55c6-8 8-20 2-32-6 6-14 8-20 4-2-8-8-14-14-18 2 12-2 22-6 24l10 14z" fill="url(#fb1)" stroke="#b91c1c" stroke-width="2"/>
            <path d="M18 18l8 24M28 15l8 28M32 25l6 20" stroke="#dc2626" stroke-width="1.5" opacity="0.3"/>
            <path d="M102 18l-8 24M92 15l-8 28M88 25l-6 20" stroke="#dc2626" stroke-width="1.5" opacity="0.3"/>
            <ellipse cx="60" cy="62" rx="16" ry="18" fill="url(#fb1)" stroke="#b91c1c" stroke-width="2.5"/>
            <ellipse cx="52" cy="56" rx="6" ry="7" fill="#fef3c7" stroke="#b91c1c" stroke-width="2"/><ellipse cx="52" cy="57" rx="3" ry="5" fill="#7c2d12"/><circle cx="50" cy="54" r="1.5" fill="#fff"/>
            <ellipse cx="68" cy="56" rx="6" ry="7" fill="#fef3c7" stroke="#b91c1c" stroke-width="2"/><ellipse cx="68" cy="57" rx="3" ry="5" fill="#7c2d12"/><circle cx="66" cy="54" r="1.5" fill="#fff"/>
            <path d="M53 70c3 3 10 3 14 0" stroke="#b91c1c" stroke-width="2" fill="none"/>
            <path d="M55 70l-2 4" stroke="#fef3c7" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M65 70l2 4" stroke="#fef3c7" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="30" cy="42" r="2" fill="#f97316" opacity="0.6"/><circle cx="85" cy="38" r="1.5" fill="#f97316" opacity="0.5"/>
        </svg>`,

        '화산 도마뱀': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="vl1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f97316"/><stop offset="60%" stop-color="#ea580c"/><stop offset="100%" stop-color="#c2410c"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M80 80c6 4 12 6 16 2 2-4-2-10-6-10" stroke="#b45309" stroke-width="3" fill="none" stroke-linecap="round"/>
            <path d="M98 70l4 2-2-3z" fill="#f97316"/>
            <ellipse cx="50" cy="72" rx="8" ry="12" fill="url(#vl1)" stroke="#7c2d12" stroke-width="2"/>
            <ellipse cx="65" cy="68" rx="10" ry="16" fill="url(#vl1)" stroke="#7c2d12" stroke-width="2.5"/>
            <ellipse cx="80" cy="75" rx="8" ry="12" fill="url(#vl1)" stroke="#7c2d12" stroke-width="2"/>
            <ellipse cx="60" cy="52" rx="16" ry="14" fill="url(#vl1)" stroke="#7c2d12" stroke-width="2.5"/>
            <path d="M52 50l-6-4M56 48l-2-6M64 48l2-6M68 50l6-4" fill="#ea580c" stroke="#7c2d12" stroke-width="1.5"/>
            <ellipse cx="50" cy="52" rx="5" ry="6" fill="#fff" stroke="#7c2d12" stroke-width="2"/><ellipse cx="50" cy="53" rx="2.5" ry="4" fill="#7c2d12"/><circle cx="48" cy="50" r="1.5" fill="#fff"/>
            <ellipse cx="70" cy="52" rx="5" ry="6" fill="#fff" stroke="#7c2d12" stroke-width="2"/><ellipse cx="70" cy="53" rx="2.5" ry="4" fill="#7c2d12"/><circle cx="68" cy="50" r="1.5" fill="#fff"/>
            <path d="M56 60c3 2 8 2 8 0" stroke="#7c2d12" stroke-width="1.5" fill="none"/>
        </svg>`,

        '용암 슬라임': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="ls1" cx="40%" cy="35%"><stop offset="0%" stop-color="#fed7aa"/><stop offset="60%" stop-color="#f97316"/><stop offset="100%" stop-color="#c2410c"/></radialGradient>
                <radialGradient id="ls2" cx="30%" cy="20%"><stop offset="0%" stop-color="#fff" stop-opacity="0.4"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
            </defs>
            <ellipse cx="60" cy="104" rx="38" ry="8" fill="rgba(0,0,0,0.25)"/>
            <path d="M18 75c0-30 6-42 14-48 3-2 5-1 7 2l5 8c2-3 5-6 8-6 4 0 7 4 8 6l5-8c2-3 4-4 7-2 8 6 14 18 14 48 0 16-16 28-34 28S18 91 18 75z" fill="url(#ls1)" stroke="#b45309" stroke-width="2.5"/>
            <path d="M28 82c-2 4-3 10-1 14 1 3 3 4 4 2 1-3 0-8 1-12z" fill="#f97316" stroke="#b45309" stroke-width="1.5"/>
            <path d="M88 78c2 6 3 12 1 18-1 2-3 3-4 1-1-4 0-10 0-14z" fill="#f97316" stroke="#b45309" stroke-width="1.5"/>
            <ellipse cx="42" cy="52" rx="18" ry="14" fill="url(#ls2)"/>
            <ellipse cx="42" cy="66" rx="10" ry="12" fill="#fff" stroke="#b45309" stroke-width="2"/>
            <ellipse cx="72" cy="66" rx="10" ry="12" fill="#fff" stroke="#b45309" stroke-width="2"/>
            <ellipse cx="44" cy="68" rx="5" ry="7" fill="#7c2d12"/><circle cx="42" cy="64" r="2.5" fill="#fff"/>
            <ellipse cx="74" cy="68" rx="5" ry="7" fill="#7c2d12"/><circle cx="72" cy="64" r="2.5" fill="#fff"/>
            <path d="M47 82c5 6 18 6 22 0" stroke="#7c2d12" stroke-width="2.5" stroke-linecap="round" fill="none"/>
            <circle cx="28" cy="48" r="3" fill="#fed7aa" opacity="0.8"/><circle cx="84" cy="45" r="2.5" fill="#fed7aa" opacity="0.7"/>
        </svg>`,

        '이프리트': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="if1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#991b1b"/><stop offset="30%" stop-color="#dc2626"/><stop offset="60%" stop-color="#f97316"/><stop offset="100%" stop-color="#fde68a"/></linearGradient>
                <radialGradient id="if2" cx="50%" cy="50%"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#f97316" stop-opacity="0"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="40" fill="url(#if2)" opacity="0.5"/>
            <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 100c-4-12-2-26 4-38 0-4 2-6 4-4 2 8 4 18 4 28l-4 8c-3 3-6 4-8 6z" fill="url(#if1)" stroke="#b91c1c" stroke-width="2"/>
            <path d="M80 100c4-12 2-26-4-38 0-4-2-6-4-4-2 8-4 18-4 28l4 8c3 3 6 4 8 6z" fill="url(#if1)" stroke="#b91c1c" stroke-width="2"/>
            <ellipse cx="60" cy="50" rx="24" ry="26" fill="url(#if1)" stroke="#b91c1c" stroke-width="2.5"/>
            <ellipse cx="52" cy="48" rx="7" ry="9" fill="#fff" stroke="#b91c1c" stroke-width="2"/><ellipse cx="52" cy="49" rx="4" ry="6" fill="#7c2d12"/><circle cx="50" cy="46" r="2" fill="#fff"/>
            <ellipse cx="68" cy="48" rx="7" ry="9" fill="#fff" stroke="#b91c1c" stroke-width="2"/><ellipse cx="68" cy="49" rx="4" ry="6" fill="#7c2d12"/><circle cx="66" cy="46" r="2" fill="#fff"/>
            <path d="M50 60c5 4 10 4 20 0" stroke="#7c2d12" stroke-width="2.5" fill="none"/>
            <path d="M35 55c-2 4 0 10 2 14" stroke="#fde68a" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.5"/>
            <path d="M85 55c2 4 0 10-2 14" stroke="#fde68a" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.5"/>
            <path d="M46 28c-3-8 0-16 4-20" stroke="#fde68a" stroke-width="2" stroke-linecap="round"/>
            <path d="M74 28c3-8 0-16-4-20" stroke="#fde68a" stroke-width="2" stroke-linecap="round"/>
        </svg>`,

        '화염 기사': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fk1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="100%" stop-color="#7f1d1d"/></linearGradient>
                <linearGradient id="fk2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#b45309"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="40" y="62" width="40" height="32" rx="4" fill="url(#fk1)" stroke="#7f1d1d" stroke-width="2.5"/>
            <path d="M55 68v20M65 68v20" stroke="#7f1d1d" stroke-width="1" opacity="0.3"/>
            <rect x="44" y="66" width="32" height="8" rx="2" fill="url(#fk2)" stroke="#b45309" stroke-width="1.5"/>
            <ellipse cx="45" cy="62" rx="6" ry="8" fill="url(#fk1)" stroke="#7f1d1d" stroke-width="2"/>
            <ellipse cx="75" cy="62" rx="6" ry="8" fill="url(#fk1)" stroke="#7f1d1d" stroke-width="2"/>
            <rect x="38" y="48" width="44" height="20" rx="4" fill="#334155" stroke="#1a202c" stroke-width="2.5"/>
            <rect x="42" y="52" width="36" height="12" rx="3" fill="url(#fk2)" stroke="#b45309" stroke-width="1.5"/>
            <ellipse cx="60" cy="38" rx="18" ry="16" fill="#fef2f2" stroke="#d6d3d1" stroke-width="2.5"/>
            <path d="M45 32c0-8 5-14 15-14s15 6 15 14" fill="#1a202c" stroke="#1a202c" stroke-width="2"/>
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#ff6b6b" stroke="#7f1d1d" stroke-width="2"/><ellipse cx="50" cy="37" rx="2.5" ry="4" fill="#7f1d1d"/><circle cx="48" cy="34" r="1.5" fill="#fff"/>
            <ellipse cx="70" cy="36" rx="5" ry="7" fill="#ff6b6b" stroke="#7f1d1d" stroke-width="2"/><ellipse cx="70" cy="37" rx="2.5" ry="4" fill="#7f1d1d"/><circle cx="68" cy="34" r="1.5" fill="#fff"/>
            <path d="M48 48c6 3 14 3 18 0" stroke="#7f1d1d" stroke-width="2" fill="none"/>
            <line x1="90" y1="55" x2="105" y2="75" stroke="#fbbf24" stroke-width="4" stroke-linecap="round"/>
            <polygon points="105,75 101,71 103,82" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>
        </svg>`,

        '마그마 웜': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="mw1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="60%" stop-color="#c2410c"/><stop offset="100%" stop-color="#7c1d12"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="20" ry="4" fill="rgba(0,0,0,0.2)"/>
            <path d="M50 72c-8 4-14 4-18 0-2 6 2 14 8 18 6 4 16 4 20-2 4 6 14 6 20 2 6-4 10-12 8-18-4 4-10 4-18 0z" fill="url(#mw1)" stroke="#7c1d12" stroke-width="2.5"/>
            <path d="M48 50c-4-2-10-2-14 2-4 6-2 14 4 18 6 4 14 2 16-4 2 6 8 8 14 4 6-4 8-12 4-18-4-4-10-4-14-2z" fill="url(#mw1)" stroke="#7c1d12" stroke-width="2.5"/>
            <ellipse cx="60" cy="35" rx="12" ry="14" fill="url(#mw1)" stroke="#7c1d12" stroke-width="2.5"/>
            <path d="M48 60h24" stroke="#7c1d12" stroke-width="1" opacity="0.3"/>
            <path d="M46 75h28" stroke="#7c1d12" stroke-width="1" opacity="0.3"/>
            <path d="M52 33l-3-6 3 2z" fill="#fbbf24" stroke="#7c1d12" stroke-width="1"/>
            <path d="M68 33l3-6-3 2z" fill="#fbbf24" stroke="#7c1d12" stroke-width="1"/>
            <ellipse cx="54" cy="36" rx="4" ry="5" fill="#fff" stroke="#7c1d12" stroke-width="1.5"/><circle cx="54" cy="37" r="1.5" fill="#1a1a1a"/>
            <ellipse cx="66" cy="36" rx="4" ry="5" fill="#fff" stroke="#7c1d12" stroke-width="1.5"/><circle cx="66" cy="37" r="1.5" fill="#1a1a1a"/>
            <path d="M50 45c5 2 10 2 20 0" stroke="#7c1d12" stroke-width="2" fill="none"/>
        </svg>`,

        '불의 군주': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="fl1" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#7f1d1d"/><stop offset="30%" stop-color="#dc2626"/><stop offset="60%" stop-color="#f97316"/><stop offset="100%" stop-color="#fde68a"/></linearGradient>
                <radialGradient id="fl2"><stop offset="0%" stop-color="#fef3c7" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="65" r="42" fill="url(#fl2)"/>
            <ellipse cx="60" cy="110" rx="30" ry="6" fill="rgba(0,0,0,0.25)"/>
            <path d="M35 45c-6-12-4-28 2-40 2 10 6 16 12 14 0-14 6-26 12-32 4 14 6 22 10 20 2-8 4-16 4-22 2 14 2 28-2 42-2 10-4 18-8 24l2 6c-6 4-14 6-24 6s-18-2-24-4z" fill="url(#fl1)" stroke="#7f1d1d" stroke-width="2.5"/>
            <ellipse cx="58" cy="52" rx="20" ry="20" fill="url(#fl1)" stroke="#7f1d1d" stroke-width="2.5"/>
            <circle cx="50" cy="50" r="6" fill="#fff" stroke="#7f1d1d" stroke-width="2"/><circle cx="50" cy="50" r="3" fill="#7c2d12"/>
            <circle cx="66" cy="50" r="6" fill="#fff" stroke="#7f1d1d" stroke-width="2"/><circle cx="66" cy="50" r="3" fill="#7c2d12"/>
            <path d="M50 64c5 4 10 4 20 0" stroke="#7c2d12" stroke-width="2.5" fill="none"/>
            <path d="M48 70l-8 6" stroke="#fde68a" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
            <path d="M72 70l8 6" stroke="#fde68a" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
            <path d="M60 28l-1-8 2 0z" fill="#fde68a" stroke="#7f1d1d" stroke-width="1.5"/>
            <path d="M50 32l-4-6 2 2z" fill="#fbbf24"/><path d="M70 32l4-6-2 2z" fill="#fbbf24"/>
        </svg>`,

        // ═══ Tier 4 Additional Monsters ═══
        '그림자 암살자': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="sa1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4b5563"/><stop offset="100%" stop-color="#1a202c"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="22" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M50 75c-6 6-10 16-6 24s12 6 16 0" fill="#1a202c" stroke="#0f172a" stroke-width="2"/>
            <path d="M70 75c6 6 10 16 6 24s-12 6-16 0" fill="#1a202c" stroke="#0f172a" stroke-width="2"/>
            <ellipse cx="60" cy="65" rx="20" ry="22" fill="url(#sa1)" stroke="#0f172a" stroke-width="2.5"/>
            <ellipse cx="60" cy="70" rx="12" ry="14" fill="#2d3748" opacity="0.4"/>
            <ellipse cx="50" cy="60" rx="7" ry="9" fill="#06b6d4" stroke="#0f172a" stroke-width="2"/><ellipse cx="50" cy="61" rx="4" ry="6" fill="#0c4a6e"/><circle cx="48" cy="58" r="1.5" fill="#06b6d4"/>
            <ellipse cx="70" cy="60" rx="7" ry="9" fill="#06b6d4" stroke="#0f172a" stroke-width="2"/><ellipse cx="70" cy="61" rx="4" ry="6" fill="#0c4a6e"/><circle cx="68" cy="58" r="1.5" fill="#06b6d4"/>
            <path d="M48 72c6 4 12 4 24 0" stroke="#0f172a" stroke-width="2" fill="none"/>
            <rect x="40" y="45" width="40" height="20" rx="3" fill="#2d3748" stroke="#0f172a" stroke-width="2"/>
            <line x1="90" y1="55" x2="105" y2="75" stroke="#4b5563" stroke-width="3" stroke-linecap="round"/>
            <polygon points="105,75 101,73 104,81" fill="#4b5563" stroke="#0f172a" stroke-width="1"/>
        </svg>`,

        '밴시': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bn1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e5e7eb"/><stop offset="100%" stop-color="#d1d5db"/></linearGradient>
                <radialGradient id="bn2"><stop offset="0%" stop-color="#06b6d4" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="38" fill="url(#bn2)"/>
            <ellipse cx="60" cy="108" rx="24" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 60c-4 18-6 34-2 48 0 6 2 8 6 6l18-24 16 28 16-28 18 24c4 2 6 0 6-6 4-14 2-30-2-48-8-12-16-18-28-18s-20 6-28 18z" fill="url(#bn1)" stroke="#9ca3af" stroke-width="2.5"/>
            <ellipse cx="60" cy="48" rx="18" ry="18" fill="#fef2f2" stroke="#9ca3af" stroke-width="2.5"/>
            <path d="M50 50c5 4 10 4 20 0" stroke="#9ca3af" stroke-width="2" fill="none"/>
            <path d="M48 56c3 6 12 8 18 6" stroke="#06b6d4" stroke-width="3" stroke-linecap="round" fill="none"/>
            <ellipse cx="50" cy="44" rx="5" ry="7" fill="#f0abfc" stroke="#9ca3af" stroke-width="2"/><ellipse cx="50" cy="45" rx="2.5" ry="4" fill="#a855f7"/><circle cx="48" cy="42" r="1.5" fill="#fff"/>
            <ellipse cx="70" cy="44" rx="5" ry="7" fill="#f0abfc" stroke="#9ca3af" stroke-width="2"/><ellipse cx="70" cy="45" rx="2.5" ry="4" fill="#a855f7"/><circle cx="68" cy="42" r="1.5" fill="#fff"/>
            <path d="M60 28c-2-6 0-14 4-18" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
        </svg>`,

        '미이라': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="mm1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f5deb3"/><stop offset="100%" stop-color="#d2b48c"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="26" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 95c-2 4-2 8 2 10h36c4-2 4-6 2-10l-2-28h-36z" fill="url(#mm1)" stroke="#8b7355" stroke-width="2"/>
            <path d="M44 67l2 2M50 65l2 2M56 67l2 2M62 65l2 2M68 67l2 2M74 65l2 2" stroke="#8b7355" stroke-width="1"/>
            <path d="M40 75h40M40 85h40" stroke="#8b7355" stroke-width="0.8" opacity="0.3"/>
            <ellipse cx="60" cy="52" rx="20" ry="20" fill="url(#mm1)" stroke="#8b7355" stroke-width="2.5"/>
            <path d="M48 45l1 1M52 43l1 1M58 42l1 1M64 43l1 1M68 45l1 1" stroke="#8b7355" stroke-width="1" opacity="0.4"/>
            <ellipse cx="50" cy="48" rx="6" ry="8" fill="#0f172a" stroke="#8b7355" stroke-width="2"/><ellipse cx="50" cy="49" rx="3" ry="5" fill="#fbbf24"/><circle cx="48" cy="46" r="1.5" fill="#fff"/>
            <ellipse cx="70" cy="48" rx="6" ry="8" fill="#0f172a" stroke="#8b7355" stroke-width="2"/><ellipse cx="70" cy="49" rx="3" ry="5" fill="#fbbf24"/><circle cx="68" cy="46" r="1.5" fill="#fff"/>
            <path d="M56 56l2 4 2-4" fill="#8b7355"/>
            <path d="M48 62c6 4 12 4 24 0" stroke="#8b7355" stroke-width="2" fill="none"/>
            <rect x="28" y="55" width="10" height="30" rx="4" fill="url(#mm1)" stroke="#8b7355" stroke-width="2"/>
            <rect x="82" y="55" width="10" height="30" rx="4" fill="url(#mm1)" stroke="#8b7355" stroke-width="2"/>
        </svg>`,

        '데스 나이트': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="dk1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#7c3aed"/><stop offset="100%" stop-color="#1e1b4b"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 95c-4 6-2 10 4 12h32c6-2 8-6 4-12l-4-30h-32z" fill="#2e1065" stroke="#1e1b4b" stroke-width="2.5"/>
            <rect x="44" y="65" width="32" height="22" rx="3" fill="url(#dk1)" stroke="#1e1b4b" stroke-width="2"/>
            <path d="M55 70v15M65 70v15" stroke="#1e1b4b" stroke-width="1" opacity="0.3"/>
            <rect x="40" y="45" width="40" height="20" rx="3" fill="#3b0764" stroke="#1e1b4b" stroke-width="2.5"/>
            <ellipse cx="60" cy="35" rx="18" ry="18" fill="#1a1a1a" stroke="#1e1b4b" stroke-width="2.5"/>
            <path d="M45 30c0-8 5-14 15-14s15 6 15 14" fill="#1e1b4b" stroke="#1e1b4b" stroke-width="2"/>
            <ellipse cx="50" cy="33" rx="5" ry="7" fill="#c084fc" stroke="#3b0764" stroke-width="2"/><ellipse cx="50" cy="34" rx="2.5" ry="4" fill="#e9d5ff"/><circle cx="48" cy="31" r="1.5" fill="#fff"/>
            <ellipse cx="70" cy="33" rx="5" ry="7" fill="#c084fc" stroke="#3b0764" stroke-width="2"/><ellipse cx="70" cy="34" rx="2.5" ry="4" fill="#e9d5ff"/><circle cx="68" cy="31" r="1.5" fill="#fff"/>
            <path d="M48 45c6 3 14 3 18 0" stroke="#1e1b4b" stroke-width="2" fill="none"/>
            <line x1="90" y1="55" x2="108" y2="80" stroke="#7c3aed" stroke-width="4" stroke-linecap="round"/>
            <polygon points="108,80 104,76 106,88" fill="#7c3aed" stroke="#3b0764" stroke-width="1.5"/>
        </svg>`,

        '심연의 촉수': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="at1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#581c87"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="24" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 70c-4-8-6-18-2-26 2 6 6 10 10 8 0-10 4-18 8-22-2 10 2 18 6 20l-6 10z" fill="url(#at1)" stroke="#581c87" stroke-width="2"/>
            <path d="M80 70c4-8 6-18 2-26-2 6-6 10-10 8 0-10-4-18-8-22 2 10-2 18-6 20l6 10z" fill="url(#at1)" stroke="#581c87" stroke-width="2"/>
            <path d="M50 65c-2 8-2 16 0 24" stroke="#a78bfa" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M60 62c0 10 0 20 2 28" stroke="#a78bfa" stroke-width="4" stroke-linecap="round" fill="none"/>
            <path d="M70 65c2 8 2 16 0 24" stroke="#a78bfa" stroke-width="4" stroke-linecap="round" fill="none"/>
            <circle cx="50" cy="89" r="3" fill="#a78bfa"/><circle cx="60" cy="90" r="3" fill="#a78bfa"/><circle cx="70" cy="89" r="3" fill="#a78bfa"/>
            <ellipse cx="60" cy="50" rx="18" ry="18" fill="url(#at1)" stroke="#581c87" stroke-width="2.5"/>
            <ellipse cx="52" cy="48" rx="5" ry="7" fill="#fef3c7" stroke="#581c87" stroke-width="2"/><circle cx="52" cy="49" r="2" fill="#7c3aed"/>
            <ellipse cx="68" cy="48" rx="5" ry="7" fill="#fef3c7" stroke="#581c87" stroke-width="2"/><circle cx="68" cy="49" r="2" fill="#7c3aed"/>
            <circle cx="56" cy="40" r="2.5" fill="#a78bfa"/><circle cx="64" cy="40" r="2.5" fill="#a78bfa"/>
        </svg>`,

        '저주받은 기사': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ck1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#334155"/><stop offset="50%" stop-color="#1a1a1a"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="26" ry="6" fill="rgba(0,0,0,0.2)"/>
            <rect x="40" y="62" width="40" height="34" rx="4" fill="url(#ck1)" stroke="#0f172a" stroke-width="2.5"/>
            <path d="M42 68l3 4 4-2 3 4 4-3 3 4 4-2 3 4" stroke="#ef4444" stroke-width="1.5" opacity="0.5"/>
            <rect x="44" y="70" width="32" height="10" rx="2" fill="#475569" stroke="#0f172a" stroke-width="1.5"/>
            <rect x="50" y="88" width="20" height="6" rx="2" fill="#1e293b" opacity="0.3"/>
            <ellipse cx="50" cy="62" rx="5" ry="7" fill="#5a5a5a" stroke="#0f172a" stroke-width="2"/>
            <ellipse cx="70" cy="62" rx="5" ry="7" fill="#5a5a5a" stroke="#0f172a" stroke-width="2"/>
            <rect x="36" y="50" width="48" height="18" rx="3" fill="#1a1a1a" stroke="#0f172a" stroke-width="2.5"/>
            <path d="M40 56l6-4 6 4 6-4 6 4 6-4 6 4" stroke="#ef4444" stroke-width="1" opacity="0.4"/>
            <ellipse cx="60" cy="38" rx="18" ry="16" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>
            <path d="M45 30c0-8 5-14 15-14s15 6 15 14" fill="#1a1a1a" stroke="#0f172a" stroke-width="2"/>
            <ellipse cx="50" cy="36" rx="5" ry="7" fill="#ef4444" stroke="#0f172a" stroke-width="2"/><ellipse cx="50" cy="37" rx="2.5" ry="4" fill="#7f1d1d"/><circle cx="48" cy="34" r="1.5" fill="#fca5a5"/>
            <ellipse cx="70" cy="36" rx="5" ry="7" fill="#ef4444" stroke="#0f172a" stroke-width="2"/><ellipse cx="70" cy="37" rx="2.5" ry="4" fill="#7f1d1d"/><circle cx="68" cy="34" r="1.5" fill="#fca5a5"/>
            <path d="M48 48c6 3 14 3 18 0" stroke="#0f172a" stroke-width="2" fill="none"/>
            <line x1="90" y1="58" x2="104" y2="78" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
        </svg>`,

        '네크로맨서': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="nm1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient>
                <radialGradient id="nm2"><stop offset="0%" stop-color="#06b6d4" stop-opacity="0.3"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="35" fill="url(#nm2)"/>
            <ellipse cx="60" cy="108" rx="24" ry="5" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 50c-4 20-6 38-2 56 0 6 4 8 10 6h40c6 2 10 0 10-6 4-18 2-36-2-56-6-10-18-16-28-16s-22 6-28 16z" fill="url(#nm1)" stroke="#0f172a" stroke-width="2.5"/>
            <path d="M60 35l0-10" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M54 32l-3-6 2 2z" fill="#06b6d4"/><path d="M66 32l3-6-2 2z" fill="#06b6d4"/>
            <circle cx="60" cy="50" r="14" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>
            <path d="M50 50c0-8 4-14 10-14s10 6 10 14" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
            <ellipse cx="52" cy="48" rx="5" ry="6" fill="#06b6d4" stroke="#0f172a" stroke-width="2"/><ellipse cx="52" cy="49" rx="2.5" ry="4" fill="#0c4a6e"/><circle cx="50" cy="46" r="1.5" fill="#fff"/>
            <ellipse cx="68" cy="48" rx="5" ry="6" fill="#06b6d4" stroke="#0f172a" stroke-width="2"/><ellipse cx="68" cy="49" rx="2.5" ry="4" fill="#0c4a6e"/><circle cx="66" cy="46" r="1.5" fill="#fff"/>
            <path d="M48 60c6 4 12 4 24 0" stroke="#0f172a" stroke-width="2" fill="none"/>
            <line x1="90" y1="45" x2="104" y2="25" stroke="#06b6d4" stroke-width="3" stroke-linecap="round"/>
            <circle cx="104" cy="24" r="5" fill="none" stroke="#06b6d4" stroke-width="2"/>
            <path d="M100 20l4 4M108 20l-4 4" stroke="#06b6d4" stroke-width="1.5"/>
        </svg>`,

        // ═══ Tier 5 Additional Monsters ═══
        '얼음 드래곤': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="id1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0ea5e9"/><stop offset="100%" stop-color="#0369a1"/></linearGradient>
                <linearGradient id="id2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#06b6d4"/><stop offset="100%" stop-color="#0c4a6e"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M22 48c-8-8-12-22-6-36 6 8 14 10 22 6 0-10 6-20 14-26 0 14 0 24 6 24l-10 14z" fill="url(#id1)" stroke="#0369a1" stroke-width="2"/>
            <path d="M98 48c8-8 12-22 6-36-6 8-14 10-22 6 0-10-6-20-14-26 0 14 0 24-6 24l10 14z" fill="url(#id1)" stroke="#0369a1" stroke-width="2"/>
            <path d="M16 12l8 26M24 18l6 20" stroke="#0ea5e9" stroke-width="1.5" opacity="0.3"/>
            <path d="M104 12l-8 26M96 18l-6 20" stroke="#0ea5e9" stroke-width="1.5" opacity="0.3"/>
            <path d="M76 88c6 4 14 6 22 4 4-2 6-6 4-8" stroke="#0369a1" stroke-width="4" fill="none" stroke-linecap="round"/>
            <path d="M100 82l6 4-2-6z" fill="url(#id1)" stroke="#0369a1" stroke-width="1.5"/>
            <ellipse cx="58" cy="68" rx="26" ry="28" fill="url(#id1)" stroke="#0369a1" stroke-width="2.5"/>
            <ellipse cx="58" cy="74" rx="14" ry="18" fill="url(#id2)" opacity="0.6" stroke="#0369a1" stroke-width="1"/>
            <path d="M48 64h20M46 72h24M48 80h20M50 88h16" stroke="#0369a1" stroke-width="0.8" opacity="0.3"/>
            <ellipse cx="58" cy="38" rx="20" ry="18" fill="url(#id1)" stroke="#0369a1" stroke-width="2.5"/>
            <path d="M40 26l-8-18" stroke="#06b6d4" stroke-width="4" stroke-linecap="round"/>
            <path d="M76 26l8-18" stroke="#06b6d4" stroke-width="4" stroke-linecap="round"/>
            <ellipse cx="48" cy="36" rx="6" ry="7" fill="#cffafe" stroke="#0369a1" stroke-width="2"/><ellipse cx="49" cy="37" rx="3" ry="5" fill="#0369a1"/><circle cx="47" cy="34" r="2" fill="#fff"/>
            <ellipse cx="68" cy="36" rx="6" ry="7" fill="#cffafe" stroke="#0369a1" stroke-width="2"/><ellipse cx="69" cy="37" rx="3" ry="5" fill="#0369a1"/><circle cx="67" cy="34" r="2" fill="#fff"/>
            <path d="M46 52c2 4 8 4 10 2" stroke="#0369a1" stroke-width="2" fill="none" opacity="0.5"/>
        </svg>`,

        '뼈 드래곤': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bd1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f5f5f4"/><stop offset="100%" stop-color="#d4d4d8"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M22 48c-8-8-12-22-6-36 6 8 14 10 22 6 0-10 6-20 14-26 0 14 0 24 6 24l-10 14z" fill="url(#bd1)" stroke="#78716c" stroke-width="2"/>
            <path d="M98 48c8-8 12-22 6-36-6 8-14 10-22 6 0-10-6-20-14-26 0 14 0 24-6 24l10 14z" fill="url(#bd1)" stroke="#78716c" stroke-width="2"/>
            <path d="M18 18l8 26M28 14l6 24" stroke="#a8a29e" stroke-width="1.5" opacity="0.3"/>
            <path d="M102 18l-8 26M92 14l-6 24" stroke="#a8a29e" stroke-width="1.5" opacity="0.3"/>
            <path d="M76 88c6 4 14 6 22 4 4-2 6-6 4-8" stroke="#78716c" stroke-width="4" fill="none" stroke-linecap="round"/>
            <path d="M100 82l6 4-2-6z" fill="url(#bd1)" stroke="#78716c" stroke-width="1.5"/>
            <ellipse cx="58" cy="68" rx="26" ry="28" fill="url(#bd1)" stroke="#78716c" stroke-width="2.5"/>
            <path d="M46 60h24M44 68h28M46 76h24M48 84h20" stroke="#78716c" stroke-width="1" opacity="0.4"/>
            <ellipse cx="58" cy="38" rx="20" ry="18" fill="url(#bd1)" stroke="#78716c" stroke-width="2.5"/>
            <path d="M40 26l-8-18" stroke="#a8a29e" stroke-width="4" stroke-linecap="round"/>
            <path d="M76 26l8-18" stroke="#a8a29e" stroke-width="4" stroke-linecap="round"/>
            <path d="M44 18l-4-12 3 3z" fill="#d4d4d8"/><path d="M70 18l4-12-3 3z" fill="#d4d4d8"/>
            <ellipse cx="48" cy="36" rx="6" ry="7" fill="#1a1a1a" stroke="#78716c" stroke-width="2"/><ellipse cx="49" cy="37" rx="3" ry="5" fill="#2d2d2d"/><circle cx="47" cy="34" r="2" fill="#a8a29e"/>
            <ellipse cx="68" cy="36" rx="6" ry="7" fill="#1a1a1a" stroke="#78716c" stroke-width="2"/><ellipse cx="69" cy="37" rx="3" ry="5" fill="#2d2d2d"/><circle cx="67" cy="34" r="2" fill="#a8a29e"/>
            <ellipse cx="58" cy="46" rx="10" ry="5" fill="#d4d4d8" stroke="#78716c" stroke-width="2"/>
        </svg>`,

        '히드라': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="hy1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#16a34a"/><stop offset="100%" stop-color="#047857"/></linearGradient>
                <linearGradient id="hy2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e"/><stop offset="100%" stop-color="#15803d"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M30 50c-6 8-8 18-2 28 4 6 12 8 18 4-2-8 2-16 6-22" fill="url(#hy1)" stroke="#047857" stroke-width="2.5"/>
            <path d="M60 42c0 10 2 20 6 26" fill="url(#hy1)" stroke="#047857" stroke-width="2.5"/>
            <path d="M90 50c6 8 8 18 2 28-4 6-12 8-18 4 2-8-2-16-6-22" fill="url(#hy1)" stroke="#047857" stroke-width="2.5"/>
            <ellipse cx="30" cy="30" rx="14" ry="16" fill="url(#hy2)" stroke="#047857" stroke-width="2.5"/>
            <ellipse cx="60" cy="28" rx="14" ry="16" fill="url(#hy2)" stroke="#047857" stroke-width="2.5"/>
            <ellipse cx="90" cy="30" rx="14" ry="16" fill="url(#hy2)" stroke="#047857" stroke-width="2.5"/>
            <ellipse cx="26" cy="26" rx="5" ry="7" fill="#fff" stroke="#047857" stroke-width="2"/><circle cx="26" cy="27" r="2" fill="#1a1a1a"/>
            <ellipse cx="34" cy="26" rx="5" ry="7" fill="#fff" stroke="#047857" stroke-width="2"/><circle cx="34" cy="27" r="2" fill="#1a1a1a"/>
            <ellipse cx="56" cy="24" rx="5" ry="7" fill="#fff" stroke="#047857" stroke-width="2"/><circle cx="56" cy="25" r="2" fill="#1a1a1a"/>
            <ellipse cx="64" cy="24" rx="5" ry="7" fill="#fff" stroke="#047857" stroke-width="2"/><circle cx="64" cy="25" r="2" fill="#1a1a1a"/>
            <ellipse cx="86" cy="26" rx="5" ry="7" fill="#fff" stroke="#047857" stroke-width="2"/><circle cx="86" cy="27" r="2" fill="#1a1a1a"/>
            <ellipse cx="94" cy="26" rx="5" ry="7" fill="#fff" stroke="#047857" stroke-width="2"/><circle cx="94" cy="27" r="2" fill="#1a1a1a"/>
            <path d="M24 38l-3 6M32 38l1 6M54 36l-1 6M66 36l1 6M84 38l3 6M96 38l-1 6" stroke="#f5f5f5" stroke-width="2" stroke-linecap="round"/>
            <ellipse cx="60" cy="75" rx="20" ry="24" fill="url(#hy1)" stroke="#047857" stroke-width="2.5"/>
        </svg>`,

        '드래곤 로드': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="dl2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#92400e"/></linearGradient>
                <radialGradient id="dl3"><stop offset="0%" stop-color="#fef3c7" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="55" r="42" fill="url(#dl3)"/>
            <ellipse cx="60" cy="110" rx="32" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M18 44c-10-10-14-26-6-40 8 10 18 12 28 6 0-12 8-22 16-28 0 16-2 28 6 28l-12 16z" fill="#d97706" stroke="#92400e" stroke-width="2.5"/>
            <path d="M102 44c10-10 14-26 6-40-8 10-18 12-28 6 0-12-8-22-16-28 0 16 2 28-6 28l12 16z" fill="#d97706" stroke="#92400e" stroke-width="2.5"/>
            <path d="M12 4l12 30M20 10l10 24" stroke="#b45309" stroke-width="1.5" opacity="0.3"/>
            <path d="M108 4l-12 30M100 10l-10 24" stroke="#b45309" stroke-width="1.5" opacity="0.3"/>
            <path d="M78 86c8 4 18 6 26 2 4-2 4-8 0-10" stroke="#b45309" stroke-width="5" fill="none" stroke-linecap="round"/>
            <path d="M102 76l8 4-4-8z" fill="#d97706" stroke="#92400e" stroke-width="1.5"/>
            <ellipse cx="58" cy="66" rx="28" ry="30" fill="url(#dl2)" stroke="#78350f" stroke-width="2.5"/>
            <ellipse cx="58" cy="72" rx="16" ry="20" fill="#fde68a" opacity="0.6" stroke="#d97706" stroke-width="1"/>
            <path d="M46 60h24M44 68h28M46 76h24M48 84h20" stroke="#b45309" stroke-width="0.8" opacity="0.3"/>
            <ellipse cx="58" cy="38" rx="22" ry="20" fill="url(#dl2)" stroke="#78350f" stroke-width="2.5"/>
            <path d="M40 26l-10-20" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/>
            <path d="M76 26l10-20" stroke="#fde68a" stroke-width="4" stroke-linecap="round"/>
            <path d="M44 18l-4-12 3 3z" fill="#d97706"/><path d="M70 18l4-12-3 3z" fill="#d97706"/>
            <circle cx="60" cy="30" r="8" fill="#fbbf24" stroke="#78350f" stroke-width="2"/>
            <path d="M56 28l-2-4 2 1z" fill="#f59e0b"/>
            <ellipse cx="48" cy="36" rx="7" ry="8" fill="#fef3c7" stroke="#78350f" stroke-width="2"/><ellipse cx="49" cy="37" rx="4" ry="6" fill="#78350f"/><circle cx="47" cy="34" r="2" fill="#fff"/>
            <ellipse cx="68" cy="36" rx="7" ry="8" fill="#fef3c7" stroke="#78350f" stroke-width="2"/><ellipse cx="69" cy="37" rx="4" ry="6" fill="#78350f"/><circle cx="67" cy="34" r="2" fill="#fff"/>
        </svg>`,

        // ═══ Tier 6+ Boss Monsters ═══
        '대천사': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="ar1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fef3c7"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
                <radialGradient id="ar2"><stop offset="0%" stop-color="#fef3c7" stop-opacity="0.5"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="40" fill="url(#ar2)"/>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.1)"/>
            <path d="M20 50c-6-8-8-20-4-32 6 6 14 8 20 4 2-8 8-16 14-20-2 12 0 20 6 22l-10 14z" fill="#fbbf24" stroke="#b45309" stroke-width="2.5"/>
            <path d="M100 50c6-8 8-20 4-32-6 6-14 8-20 4-2-8-8-16-14-20 2 12 0 20-6 22l10 14z" fill="#fbbf24" stroke="#b45309" stroke-width="2.5"/>
            <path d="M16 18l8 26M28 14l6 24" stroke="#f59e0b" stroke-width="1.5" opacity="0.3"/>
            <path d="M104 18l-8 26M92 14l-6 24" stroke="#f59e0b" stroke-width="1.5" opacity="0.3"/>
            <circle cx="60" cy="52" r="16" fill="#fff" stroke="#b45309" stroke-width="2.5"/>
            <ellipse cx="52" cy="50" rx="6" ry="8" fill="#fbbf24" stroke="#b45309" stroke-width="2"/><ellipse cx="52" cy="51" rx="3" ry="5" fill="#78350f"/><circle cx="50" cy="48" r="2" fill="#fff"/>
            <ellipse cx="68" cy="50" rx="6" ry="8" fill="#fbbf24" stroke="#b45309" stroke-width="2"/><ellipse cx="68" cy="51" rx="3" ry="5" fill="#78350f"/><circle cx="66" cy="48" r="2" fill="#fff"/>
            <path d="M50 62c5 3 10 3 20 0" stroke="#b45309" stroke-width="2" fill="none"/>
            <circle cx="60" cy="35" r="6" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
            <path d="M56 33l-2-4 1 2z" fill="#f59e0b"/><path d="M64 33l2-4-1 2z" fill="#f59e0b"/>
        </svg>`,

        '크라켄': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="kr1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0c4a6e"/><stop offset="100%" stop-color="#082f49"/></linearGradient>
            </defs>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M35 65c-4-8-6-18-2-28 4 6 10 8 14 4 0-10 4-18 8-24-2 10 2 18 6 22l-8 12z" fill="url(#kr1)" stroke="#082f49" stroke-width="2.5"/>
            <path d="M60 58c0 12 2 24 6 32" fill="url(#kr1)" stroke="#082f49" stroke-width="2.5"/>
            <path d="M85 65c4-8 6-18 2-28-4 6-10 8-14 4 0-10-4-18-8-24 2 10-2 18-6 22l8 12z" fill="url(#kr1)" stroke="#082f49" stroke-width="2.5"/>
            <ellipse cx="35" cy="45" rx="10" ry="14" fill="#1e3a4c" stroke="#082f49" stroke-width="2"/>
            <ellipse cx="60" cy="40" rx="10" ry="14" fill="#1e3a4c" stroke="#082f49" stroke-width="2"/>
            <ellipse cx="85" cy="45" rx="10" ry="14" fill="#1e3a4c" stroke="#082f49" stroke-width="2"/>
            <circle cx="33" cy="40" r="3" fill="#06b6d4" opacity="0.6"/><circle cx="37" cy="40" r="3" fill="#06b6d4" opacity="0.6"/>
            <circle cx="58" cy="34" r="3" fill="#06b6d4" opacity="0.6"/><circle cx="62" cy="34" r="3" fill="#06b6d4" opacity="0.6"/>
            <circle cx="83" cy="40" r="3" fill="#06b6d4" opacity="0.6"/><circle cx="87" cy="40" r="3" fill="#06b6d4" opacity="0.6"/>
            <circle cx="28" cy="80" r="4" fill="url(#kr1)" stroke="#082f49" stroke-width="2"/>
            <circle cx="60" cy="95" r="4" fill="url(#kr1)" stroke="#082f49" stroke-width="2"/>
            <circle cx="92" cy="82" r="4" fill="url(#kr1)" stroke="#082f49" stroke-width="2"/>
            <circle cx="45" cy="88" r="3" fill="url(#kr1)" stroke="#082f49" stroke-width="1.5"/>
            <circle cx="75" cy="92" r="3" fill="url(#kr1)" stroke="#082f49" stroke-width="1.5"/>
        </svg>`,

        '제우스': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="zs1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f5f5f4"/><stop offset="100%" stop-color="#d4d4d8"/></linearGradient>
                <radialGradient id="zs2"><stop offset="0%" stop-color="#fbbf24" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="55" r="38" fill="url(#zs2)"/>
            <ellipse cx="60" cy="108" rx="28" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M40 90c-4 6-2 10 4 12h32c6-2 8-6 4-12l-4-28h-32z" fill="#d4d4d8" stroke="#94a3b8" stroke-width="2.5"/>
            <rect x="42" y="65" width="36" height="22" rx="3" fill="url(#zs1)" stroke="#94a3b8" stroke-width="2"/>
            <rect x="44" y="70" width="32" height="8" rx="2" fill="#cbd5e1" stroke="#94a3b8" stroke-width="1.5"/>
            <path d="M60 92l-2 8 2-2 2 2z" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>
            <ellipse cx="60" cy="50" rx="20" ry="20" fill="url(#zs1)" stroke="#94a3b8" stroke-width="2.5"/>
            <path d="M48 45c0-8 6-14 12-14s12 6 12 14" fill="#94a3b8" stroke="#94a3b8" stroke-width="2"/>
            <ellipse cx="50" cy="48" rx="6" ry="8" fill="#0c4a6e" stroke="#94a3b8" stroke-width="2"/><ellipse cx="50" cy="49" rx="3" ry="5" fill="#06b6d4"/><circle cx="48" cy="46" r="2" fill="#fff"/>
            <ellipse cx="70" cy="48" rx="6" ry="8" fill="#0c4a6e" stroke="#94a3b8" stroke-width="2"/><ellipse cx="70" cy="49" rx="3" ry="5" fill="#06b6d4"/><circle cx="68" cy="46" r="2" fill="#fff"/>
            <path d="M48 60c6 4 12 4 24 0" stroke="#94a3b8" stroke-width="2" fill="none"/>
            <path d="M28 50l4-8-2 4z" fill="#fbbf24"/><path d="M92 50l-4-8 2 4z" fill="#fbbf24"/>
            <path d="M20 30l12 10M88 32l12 8" stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>
        </svg>`,

        '오딘': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="od1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c084fc"/><stop offset="100%" stop-color="#6d28d9"/></linearGradient>
                <radialGradient id="od2"><stop offset="0%" stop-color="#e9d5ff" stop-opacity="0.4"/><stop offset="100%" stop-color="transparent"/></radialGradient>
            </defs>
            <circle cx="60" cy="60" r="40" fill="url(#od2)"/>
            <ellipse cx="60" cy="108" rx="30" ry="6" fill="rgba(0,0,0,0.2)"/>
            <path d="M35 75c-4 8-2 16 4 20h42c6-4 8-12 4-20l-4-28h-42z" fill="#3b0764" stroke="#1e1b4b" stroke-width="2.5"/>
            <rect x="40" y="52" width="40" height="22" rx="3" fill="url(#od1)" stroke="#1e1b4b" stroke-width="2"/>
            <rect x="44" y="58" width="32" height="8" rx="2" fill="#c084fc" stroke="#1e1b4b" stroke-width="1.5"/>
            <ellipse cx="60" cy="42" rx="18" ry="20" fill="#f5f5f4" stroke="#94a3b8" stroke-width="2.5"/>
            <path d="M48 38c0-8 6-14 12-14s12 6 12 14" fill="#94a3b8" stroke="#94a3b8" stroke-width="2"/>
            <ellipse cx="48" cy="42" rx="5" ry="7" fill="#1a1a1a" stroke="#94a3b8" stroke-width="2"/><circle cx="48" cy="43" r="2" fill="#06b6d4"/>
            <path d="M65 40l-8-2 4 2z" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="2"/>
            <ellipse cx="68" cy="42" rx="5" ry="7" fill="#fbbf24" stroke="#94a3b8" stroke-width="2"/><ellipse cx="68" cy="43" rx="2.5" ry="4" fill="#78350f"/><circle cx="66" cy="40" r="1.5" fill="#fff"/>
            <path d="M48 54c6 4 12 4 24 0" stroke="#1a1b4b" stroke-width="2" fill="none"/>
            <line x1="100" y1="45" x2="112" y2="25" stroke="#c084fc" stroke-width="3" stroke-linecap="round"/>
            <polygon points="112,25 108,23 110,32" fill="#a855f7" stroke="#6d28d9" stroke-width="1.5"/>
        </svg>`,
    });
})();
