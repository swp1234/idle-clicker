# Season System - Idle Clicker

## Overview

The Season System adds dynamic seasonal content to the Idle Clicker game that automatically adapts based on the current month. Each season features unique visual themes, particle effects, and special bonus monsters.

## Features

### 1. Automatic Season Detection
- **Spring** (February-April): Cherry blossom theme with pink/green colors
- **Summer** (May-July): Wave/water theme with cyan/blue colors
- **Autumn** (August-October): Falling leaves theme with orange/brown colors
- **Winter** (November-January): Snowfall theme with white/silver colors

The system automatically detects the current month and applies the appropriate season theme.

### 2. Seasonal Particle Effects

Each season has unique animated particles that fall from the top of the screen:

#### Spring - Cherry Blossom
- Emoji: 🌸
- Animation: Gently falling with rotation
- Duration: 20 seconds per particle

#### Summer - Water Droplets
- Emoji: 💧
- Animation: Falling with sine wave movement
- Duration: 18 seconds per particle

#### Autumn - Falling Leaves
- Emoji: 🍁
- Animation: Zigzag motion with rotation
- Duration: 22 seconds per particle

#### Winter - Snowflakes
- Emoji: ❄️
- Animation: Slow descent with scaling
- Duration: 25 seconds per particle

### 3. Seasonal Bonus Monsters

Special monsters appear randomly (8% spawn chance) with bonuses:

#### Spring - Flower Monster 🌺
- **Bonus Type:** Gold +30%
- **Effect:** Defeated monsters drop 30% more gold
- **Description:** seasonalMonsterFlower

#### Summer - Ice Monster ❄️
- **Bonus Type:** Cooldown Reduction
- **Effect:** Skill cooldown reduced by 15%
- **Description:** seasonalMonsterIce

#### Autumn - Pumpkin Monster 🎃
- **Bonus Type:** Experience +30%
- **Effect:** Prestige points increased by 30%
- **Description:** seasonalMonsterPumpkin

#### Winter - Snowman Monster ⛄
- **Bonus Type:** All Bonuses +15%
- **Effect:** All reward bonuses increased by 15%
- **Description:** seasonalMonsterSnowman

### 4. Visual Theme Changes

CSS variables are dynamically updated based on season:
- `--season-primary`: Primary color for UI elements
- `--season-secondary`: Secondary color for accents
- `--season-theme`: Theme identifier for particle effects

Background orbs also change color to match the season.

## Implementation Files

### Core System
- **`js/season-system.js`** - Main season system class
  - Detects current season based on month
  - Manages seasonal themes and particles
  - Handles seasonal monster spawning and bonuses
  - Calculates seasonal multipliers

### Integration Points
- **`js/app.js`** - Main game engine
  - Initializes seasonSystem in init()
  - Detects seasonal monsters in spawnMonster()
  - Applies seasonal bonuses in onMonsterDeath()

### Styling
- **`css/style.css`** - Season CSS
  - CSS variables for seasonal colors
  - Particle animations (cherry-blossom, wave, falling-leaves, snowfall)
  - Seasonal monster styling with glow effects
  - Theme-specific orb colors

### Localization (12 Languages)
- **`js/locales/ko.json`** - Korean
- **`js/locales/en.json`** - English
- **`js/locales/zh.json`** - Chinese (Simplified)
- **`js/locales/ja.json`** - Japanese
- **`js/locales/es.json`** - Spanish
- **`js/locales/pt.json`** - Portuguese (Brazilian)
- **`js/locales/hi.json`** - Hindi
- **`js/locales/ru.json`** - Russian
- **`js/locales/id.json`** - Indonesian
- **`js/locales/tr.json`** - Turkish
- **`js/locales/de.json`** - German
- **`js/locales/fr.json`** - French

Each locale file includes:
- `monsters.flowerMonster/iceMonster/pumpkinMonster/snowmanMonster`
- `seasons.*` - Full seasonal translations

### HTML Integration
- **`index.html`**
  - Added seasonal-particles container in bg-effects
  - Added script tag for season-system.js (loaded before app.js)

## Usage

The season system is automatically initialized when the game loads:

```javascript
// In app.js init() function
seasonSystem = new SeasonSystem();
seasonSystem.init();
```

### Key Methods

```javascript
// Detect current season (called automatically)
seasonSystem.detectSeason();

// Apply seasonal theme to CSS
seasonSystem.applySeasonalTheme();

// Start particle effect animation
seasonSystem.startParticleEffect();

// Check if monster should be seasonal
const bonus = seasonSystem.shouldSpawnSeasonalMonster();

// Get bonus multiplier for current seasonal monster
const multiplier = seasonSystem.calculateSeasonalBonus(bonusType);

// Get info for UI display
const info = seasonSystem.getSeasonalUIInfo();
```

## Performance Optimization

- Particle count limited per season (12-20 particles)
- CSS animations used instead of JavaScript for smooth performance
- `will-change` property applied to particles
- Particles are cleaned up after animation completes
- Seasonal detection happens once per init

## Compatibility

- Modern browsers (Chrome, Safari, Firefox, Edge)
- Mobile optimized with touch-friendly animations
- Graceful fallback if seasonSystem not available
- Respects existing game systems (events, pets, equipment, etc.)

## Future Enhancements

Possible extensions to the seasonal system:

1. **Seasonal Dungeons** - Tier-specific monsters change with seasons
2. **Seasonal Events** - Special quests or challenges per season
3. **Seasonal Achievements** - Season-specific unlock conditions
4. **Seasonal Cosmetics** - Seasonal pet skins or equipment themes
5. **Seasonal Music** - Different background music per season
6. **Regional Seasons** - Different seasons based on user location
7. **Custom Seasons** - Developer ability to create custom seasonal themes

## Debugging

To see all seasonal data in console:
```javascript
console.log(seasonSystem.getAllSeasonalData());
```

To manually change season for testing:
```javascript
seasonSystem.currentSeason = 'spring'; // or 'summer', 'autumn', 'winter'
seasonSystem.applySeasonalTheme();
seasonSystem.startParticleEffect();
```

## Translation Keys

All i18n keys follow the pattern:
- `monsters.flowerMonster` - Monster name
- `seasons.spring` - Season name
- `seasons.seasonalMonsterFlower` - Seasonal monster description with season
- `seasons.bonusGold` - Bonus description

## Notes

- Seasonal bonuses are applied before pet bonuses in the damage calculation
- Golden monsters take precedence over seasonal bonuses
- Seasonal particles use CSS animations for better performance
- Particle emojis are emoji characters for wide compatibility
- Season detection runs on page load and can be refreshed with seasonSystem.refresh()
