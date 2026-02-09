class Tutorial {
    constructor() {
        this.isComplete = localStorage.getItem('tutorialComplete') === 'true';
        this.currentStep = 0;
        this.isActive = false;
        this.steps = [
            {
                id: 'click-monster',
                target: '#click-area',
                title: 'tutorial.step1.title',
                text: 'tutorial.step1.text',
                position: 'bottom'
            },
            {
                id: 'buy-equipment',
                target: '[data-tab="equipment"]',
                title: 'tutorial.step2.title',
                text: 'tutorial.step2.text',
                position: 'top'
            },
            {
                id: 'learn-skills',
                target: '[data-tab="skill"]',
                title: 'tutorial.step3.title',
                text: 'tutorial.step3.text',
                position: 'top'
            },
            {
                id: 'boss-info',
                target: '.stage-progress',
                title: 'tutorial.step4.title',
                text: 'tutorial.step4.text',
                position: 'top'
            },
            {
                id: 'achieve-goals',
                target: '[data-tab="achievement"]',
                title: 'tutorial.step5.title',
                text: 'tutorial.step5.text',
                position: 'top'
            }
        ];
    }

    start() {
        if (this.isComplete) return;
        this.isActive = true;
        this.currentStep = 0;
        this.showStep();
    }

    showStep() {
        if (this.currentStep >= this.steps.length) {
            this.complete();
            return;
        }

        const step = this.steps[this.currentStep];
        const targetElement = document.querySelector(step.target);

        if (!targetElement) {
            this.nextStep();
            return;
        }

        // Create overlay
        this.createOverlay();

        // Highlight target
        this.highlightElement(targetElement, step.position);

        // Show tooltip
        this.showTooltip(targetElement, step);
    }

    createOverlay() {
        // Remove existing overlay
        const existing = document.querySelector('.tutorial-overlay');
        if (existing) existing.remove();

        const overlay = document.createElement('div');
        overlay.className = 'tutorial-overlay';
        overlay.addEventListener('click', () => this.nextStep());
        document.body.appendChild(overlay);
    }

    highlightElement(element, position) {
        const rect = element.getBoundingClientRect();
        const overlay = document.querySelector('.tutorial-overlay');

        // Create spotlight (cutout for the element)
        const spotlight = document.createElement('div');
        spotlight.className = 'tutorial-spotlight';
        spotlight.style.left = (rect.left - 10) + 'px';
        spotlight.style.top = (rect.top - 10) + 'px';
        spotlight.style.width = (rect.width + 20) + 'px';
        spotlight.style.height = (rect.height + 20) + 'px';
        spotlight.style.position = 'fixed';
        spotlight.style.borderRadius = '16px';
        spotlight.style.boxShadow = '0 0 0 9999px rgba(0, 0, 0, 0.8)';
        spotlight.style.zIndex = '9999';
        spotlight.style.pointerEvents = 'none';
        spotlight.style.border = '2px solid rgba(139, 92, 246, 0.8)';
        spotlight.style.animation = 'tutorialPulse 2s ease-in-out infinite';

        overlay.appendChild(spotlight);

        // Store position for tooltip
        overlay.dataset.targetTop = rect.top;
        overlay.dataset.targetLeft = rect.left;
        overlay.dataset.targetWidth = rect.width;
        overlay.dataset.targetHeight = rect.height;
        overlay.dataset.position = position;
    }

    showTooltip(element, step) {
        const overlay = document.querySelector('.tutorial-overlay');
        const rect = element.getBoundingClientRect();

        const tooltip = document.createElement('div');
        tooltip.className = 'tutorial-tooltip';
        tooltip.innerHTML = `
            <div class="tutorial-tooltip-content">
                <h3 class="tutorial-tooltip-title" data-i18n="${step.title}"></h3>
                <p class="tutorial-tooltip-text" data-i18n="${step.text}"></p>
                <div class="tutorial-buttons">
                    <button class="tutorial-skip-btn" data-i18n="tutorial.skip"></button>
                    <button class="tutorial-next-btn" data-i18n="tutorial.next"></button>
                </div>
                <div class="tutorial-progress">
                    <span data-i18n="tutorial.step"></span> ${this.currentStep + 1} / ${this.steps.length}
                </div>
            </div>
        `;

        // Position tooltip
        let top, left;
        if (step.position === 'bottom') {
            top = rect.bottom + 20;
            left = rect.left + rect.width / 2;
        } else {
            top = rect.top - 20;
            left = rect.left + rect.width / 2;
        }

        tooltip.style.position = 'fixed';
        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.zIndex = '10000';

        overlay.appendChild(tooltip);

        // Add event listeners
        tooltip.querySelector('.tutorial-next-btn').addEventListener('click', () => this.nextStep());
        tooltip.querySelector('.tutorial-skip-btn').addEventListener('click', () => this.complete());

        // Update i18n for the tooltip
        if (window.i18n) {
            tooltip.querySelectorAll('[data-i18n]').forEach(el => {
                el.textContent = i18n.t(el.getAttribute('data-i18n'));
            });
        }
    }

    nextStep() {
        this.currentStep++;
        const overlay = document.querySelector('.tutorial-overlay');
        if (overlay) overlay.remove();
        this.showStep();
    }

    complete() {
        localStorage.setItem('tutorialComplete', 'true');
        this.isComplete = true;
        this.isActive = false;
        const overlay = document.querySelector('.tutorial-overlay');
        if (overlay) overlay.remove();
    }

    skip() {
        this.complete();
    }

    reset() {
        localStorage.removeItem('tutorialComplete');
        this.isComplete = false;
    }
}

// Create global tutorial instance
const tutorial = new Tutorial();
