// Idle Clicker - Dopamine Enhancement Effects Module
// Click effects, floating numbers, particle bursts, screen shake

class ClickEffect {
  constructor(x, y, value, color = '#FFD700') {
    this.particles = [];

    // Create floating number
    const textParticle = {
      text: `+${value}`,
      x: x,
      y: y,
      vx: (Math.random() - 0.5) * 3,
      vy: -3 - Math.random() * 2,
      life: 1,
      maxLife: 1.0,
      color: color,
      size: 24 + (value > 100 ? 8 : 0),
      isText: true,
      rotation: Math.random() * 0.2 - 0.1
    };
    this.particles.push(textParticle);

    // Create particles around the number
    const particleCount = Math.min(value / 10, 15);
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount + (Math.random() - 0.5) * 0.3;
      const speed = 2 + Math.random() * 3;

      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 1,
        maxLife: 0.6,
        size: 2 + Math.random() * 3,
        color: color,
        isParticle: true
      });
    }
  }

  update(deltaTime) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= deltaTime / p.maxLife;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      if (p.isText) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        if (p.rotation !== undefined) {
          p.rotation += 0.05;
        }
      } else if (p.isParticle) {
        p.vx *= 0.98;
        p.vy += 0.1;
        p.x += p.vx;
        p.y += p.vy;
      }
    }
  }

  isDone() {
    return this.particles.length === 0;
  }

  draw(ctx, scale, offsetX, offsetY) {
    this.particles.forEach(p => {
      const sx = p.x * scale + offsetX;
      const sy = p.y * scale + offsetY;
      const alpha = p.life;

      ctx.save();
      ctx.globalAlpha = Math.max(0, alpha);

      if (p.isText) {
        ctx.font = `bold ${Math.round(p.size)}px Arial`;
        ctx.fillStyle = p.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 6;
        ctx.filter = `drop-shadow(0 0 ${4 * alpha}px ${p.color})`;

        if (p.rotation !== undefined) {
          ctx.save();
          ctx.translate(sx, sy);
          ctx.rotate(p.rotation);
          ctx.fillText(p.text, 0, 0);
          ctx.restore();
        } else {
          ctx.fillText(p.text, sx, sy);
        }
      } else if (p.isParticle) {
        ctx.fillStyle = p.color;
        ctx.filter = `drop-shadow(0 0 ${3 * alpha}px ${p.color})`;
        ctx.beginPath();
        ctx.arc(sx, sy, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });
  }
}

class MonsterKillEffect {
  constructor(x, y) {
    this.particles = [];

    // Large burst of gold particles
    const burstCount = 30;
    for (let i = 0; i < burstCount; i++) {
      const angle = (Math.PI * 2 * i) / burstCount + (Math.random() - 0.5) * 0.4;
      const speed = 3 + Math.random() * 5;

      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 1,
        maxLife: 0.9,
        size: 3 + Math.random() * 5,
        color: '#FFD700',
        glow: true
      });
    }

    // Add expanding ring
    this.ring = {
      x: x,
      y: y,
      radius: 0,
      maxRadius: 80,
      life: 1,
      maxLife: 0.5,
      color: '#FFD700',
      isRing: true
    };
    this.particles.push(this.ring);
  }

  update(deltaTime) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= deltaTime / p.maxLife;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      if (p.isRing) {
        p.radius = (1 - p.life) * p.maxRadius;
      } else {
        p.vx *= 0.98;
        p.vy += 0.2;
        p.x += p.vx;
        p.y += p.vy;
      }
    }
  }

  isDone() {
    return this.particles.length === 0;
  }

  draw(ctx, scale, offsetX, offsetY) {
    this.particles.forEach(p => {
      const sx = p.x * scale + offsetX;
      const sy = p.y * scale + offsetY;
      const alpha = p.life;

      ctx.save();
      ctx.globalAlpha = Math.max(0, alpha);

      if (p.isRing) {
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, p.radius, 0, Math.PI * 2);
        ctx.stroke();
      } else if (p.glow) {
        ctx.fillStyle = p.color;
        ctx.filter = `drop-shadow(0 0 ${8 * alpha}px ${p.color})`;
        ctx.beginPath();
        ctx.arc(sx, sy, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });
  }
}

class UpgradeAcquiredEffect {
  constructor(x, y, equipmentName) {
    this.particles = [];
    this.lifetime = 0;
    this.maxLife = 1.5;

    // Equipment glow pulse
    const pulseCount = 8;
    for (let i = 0; i < pulseCount; i++) {
      const angle = (Math.PI * 2 * i) / pulseCount;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * 4,
        vy: Math.sin(angle) * 4 - 1,
        life: 1,
        maxLife: 0.8,
        size: 4,
        color: '#8b5cf6',
        isEquipGlow: true
      });
    }

    // Add text
    this.particles.push({
      text: 'NEW!',
      x: x,
      y: y - 30,
      vx: 0,
      vy: -2,
      life: 1,
      maxLife: 1.2,
      color: '#8b5cf6',
      size: 28,
      isText: true
    });
  }

  update(deltaTime) {
    this.lifetime += deltaTime;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= deltaTime / p.maxLife;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      if (p.isText) {
        p.y += p.vy;
      } else {
        p.vx *= 0.96;
        p.vy += 0.1;
        p.x += p.vx;
        p.y += p.vy;
      }
    }
  }

  isDone() {
    return this.particles.length === 0;
  }

  draw(ctx, scale, offsetX, offsetY) {
    this.particles.forEach(p => {
      const sx = p.x * scale + offsetX;
      const sy = p.y * scale + offsetY;
      const alpha = p.life;

      ctx.save();
      ctx.globalAlpha = Math.max(0, alpha);

      if (p.isText) {
        ctx.font = `bold ${Math.round(p.size)}px Arial`;
        ctx.fillStyle = p.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.filter = `drop-shadow(0 0 ${6 * alpha}px ${p.color})`;
        ctx.fillText(p.text, sx, sy);
      } else if (p.isEquipGlow) {
        ctx.fillStyle = p.color;
        ctx.filter = `drop-shadow(0 0 ${6 * alpha}px ${p.color})`;
        ctx.beginPath();
        ctx.arc(sx, sy, p.size * alpha, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    });
  }
}

class MilestoneEffect {
  constructor(text, x, y) {
    this.particles = [];

    // Large confetti burst
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 6;

      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 1,
        maxLife: 1.2,
        size: 3 + Math.random() * 4,
        color: ['#FFD700', '#FF6600', '#8b5cf6', '#ef4444'][Math.floor(Math.random() * 4)],
        rotation: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.15
      });
    }

    // Main text
    this.particles.push({
      text: text,
      x: x,
      y: y,
      vx: 0,
      vy: -2,
      life: 1,
      maxLife: 1.5,
      color: '#FFD700',
      size: 32,
      isMainText: true,
      scale: 1
    });
  }

  update(deltaTime) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= deltaTime / p.maxLife;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      if (p.isMainText) {
        p.y += p.vy;
        p.scale = 1 + Math.sin((1 - p.life) * Math.PI) * 0.2;
      } else {
        p.vx *= 0.97;
        p.vy += 0.15;
        p.x += p.vx;
        p.y += p.vy;
        if (p.rotation !== undefined) {
          p.rotation += p.spin;
        }
      }
    }
  }

  isDone() {
    return this.particles.length === 0;
  }

  draw(ctx, scale, offsetX, offsetY) {
    this.particles.forEach(p => {
      const sx = p.x * scale + offsetX;
      const sy = p.y * scale + offsetY;
      const alpha = p.life;

      ctx.save();
      ctx.globalAlpha = Math.max(0, alpha);

      if (p.isMainText) {
        ctx.font = `bold ${Math.round(p.size)}px Arial`;
        ctx.fillStyle = p.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.filter = `drop-shadow(0 0 ${10 * alpha}px ${p.color})`;

        ctx.translate(sx, sy);
        ctx.scale(p.scale, p.scale);
        ctx.fillText(p.text, 0, 0);
      } else {
        ctx.fillStyle = p.color;

        if (p.rotation !== undefined) {
          ctx.translate(sx, sy);
          ctx.rotate(p.rotation);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(sx, sy, p.size * alpha, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    });
  }
}

// Global effects manager
class EffectsManager {
  constructor() {
    this.clickEffects = [];
    this.killEffects = [];
    this.upgradeEffects = [];
    this.milestoneEffects = [];
  }

  addClickEffect(x, y, value, color = '#FFD700') {
    this.clickEffects.push(new ClickEffect(x, y, value, color));
  }

  addMonsterKillEffect(x, y) {
    this.killEffects.push(new MonsterKillEffect(x, y));
  }

  addUpgradeEffect(x, y, equipmentName) {
    this.upgradeEffects.push(new UpgradeAcquiredEffect(x, y, equipmentName));
  }

  addMilestoneEffect(text, x, y) {
    this.milestoneEffects.push(new MilestoneEffect(text, x, y));
  }

  update(deltaTime) {
    // Update all effect types
    for (let i = this.clickEffects.length - 1; i >= 0; i--) {
      this.clickEffects[i].update(deltaTime);
      if (this.clickEffects[i].isDone()) {
        this.clickEffects.splice(i, 1);
      }
    }

    for (let i = this.killEffects.length - 1; i >= 0; i--) {
      this.killEffects[i].update(deltaTime);
      if (this.killEffects[i].isDone()) {
        this.killEffects.splice(i, 1);
      }
    }

    for (let i = this.upgradeEffects.length - 1; i >= 0; i--) {
      this.upgradeEffects[i].update(deltaTime);
      if (this.upgradeEffects[i].isDone()) {
        this.upgradeEffects.splice(i, 1);
      }
    }

    for (let i = this.milestoneEffects.length - 1; i >= 0; i--) {
      this.milestoneEffects[i].update(deltaTime);
      if (this.milestoneEffects[i].isDone()) {
        this.milestoneEffects.splice(i, 1);
      }
    }
  }

  drawAll(ctx, scale, offsetX, offsetY) {
    this.clickEffects.forEach(e => e.draw(ctx, scale, offsetX, offsetY));
    this.killEffects.forEach(e => e.draw(ctx, scale, offsetX, offsetY));
    this.upgradeEffects.forEach(e => e.draw(ctx, scale, offsetX, offsetY));
    this.milestoneEffects.forEach(e => e.draw(ctx, scale, offsetX, offsetY));
  }

  clear() {
    this.clickEffects = [];
    this.killEffects = [];
    this.upgradeEffects = [];
    this.milestoneEffects = [];
  }
}

// Create global instance
window.effectsManager = new EffectsManager();
