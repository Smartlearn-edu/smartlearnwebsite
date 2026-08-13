const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const sectionsDir = path.join(publicDir, 'sections');
const catalogPath = path.join(publicDir, 'catalog.json');

// Ensure sections directory exists
if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
}

// Helper to escape HTML for JSON
function clean(str) {
  return str.trim();
}

const sections = [
  {
    id: "pricing-classic",
    name: "Classic Grid",
    category: "Pricing",
    variant: "3-Tier Classic",
    description: "A reliable, professional 3-tier pricing table. Perfectly aligned features and a configurable featured plan.",
    tags: ["pricing", "grid", "saas", "classic", "tiers"],
    image_count: 0,
    preview_image: "",
    html: clean(`
<!-- sl-section: pricing-classic | v1.0 -->
<div class="sl-pricing-classic sl-py-20">
    <div class="container">
        <div class="text-center sl-mb-12">
            <h2 class="sl-section-title" data-sl-edit="text">Flexible Plans for Every Institution</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Choose the plan that fits your learning goals. No hidden fees.</p>
        </div>
        <div class="sl-pricing-grid">
            <!-- Plan 1 -->
            <div class="sl-pricing-card">
                <div class="sl-pricing-header">
                    <h3 class="sl-plan-name" data-sl-edit="text">Free</h3>
                    <p class="sl-plan-desc" data-sl-edit="text">Perfect for individuals starting out.</p>
                    <div class="sl-price-wrap">
                        <span class="sl-price" data-sl-edit="text">$0</span>
                    </div>
                    <p class="sl-billing-period" data-sl-edit="text">Free forever</p>
                </div>
                <div class="sl-pricing-body">
                    <ul class="sl-feature-list">
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Basic course access</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Community support</span></li>
                    </ul>
                </div>
                <div class="sl-pricing-footer">
                    <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="Get Started">Get Started</a>
                </div>
            </div>

            <!-- Plan 2 -->
            <div class="sl-pricing-card" data-featured="true">
                <div class="sl-pricing-badge" data-sl-edit="text">Most Popular</div>
                <div class="sl-pricing-header">
                    <h3 class="sl-plan-name" data-sl-edit="text">Professional</h3>
                    <p class="sl-plan-desc" data-sl-edit="text">For serious educators and small teams.</p>
                    <div class="sl-price-wrap">
                        <span class="sl-currency" data-sl-edit="text">$</span>
                        <span class="sl-price" data-sl-edit="text">49</span>
                        <span class="sl-period" data-sl-edit="text">/ mo</span>
                    </div>
                    <p class="sl-billing-period" data-sl-edit="text">Billed annually</p>
                </div>
                <div class="sl-pricing-body">
                    <ul class="sl-feature-list">
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Unlimited course access</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Custom certificates</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Priority instructor support</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Progress tracking tools</span></li>
                    </ul>
                </div>
                <div class="sl-pricing-footer">
                    <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="Upgrade to Pro">Upgrade to Pro</a>
                </div>
            </div>

            <!-- Plan 3 -->
            <div class="sl-pricing-card">
                <div class="sl-pricing-header">
                    <h3 class="sl-plan-name" data-sl-edit="text">Enterprise</h3>
                    <p class="sl-plan-desc" data-sl-edit="text">Custom solutions for large institutions.</p>
                    <div class="sl-price-wrap">
                        <span class="sl-price" data-sl-edit="text">Custom</span>
                    </div>
                    <p class="sl-billing-period" data-sl-edit="text">Contact us for pricing</p>
                </div>
                <div class="sl-pricing-body">
                    <ul class="sl-feature-list">
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Everything in Pro</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Custom learning paths</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Advanced API access</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Dedicated success manager</span></li>
                    </ul>
                </div>
                <div class="sl-pricing-footer">
                    <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="Contact Sales">Contact Sales</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-pricing-classic {
    position: relative;
    padding: 5rem 0;
}
.sl-pricing-classic .sl-py-20 { padding: 5rem 0; }
.sl-pricing-classic .sl-mb-12 { margin-bottom: 3rem; }
.sl-pricing-classic .text-center { text-align: center; }

.sl-pricing-classic .sl-section-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--smartlearn-text);
}
.sl-pricing-classic .sl-section-subtitle {
    font-size: 1.125rem;
    color: var(--smartlearn-text-muted);
    max-width: 600px;
    margin: 0 auto;
}

.sl-pricing-classic .sl-pricing-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1140px;
    margin: 0 auto;
    align-items: stretch;
}

.sl-pricing-classic .sl-pricing-card {
    flex: 1 1 300px;
    max-width: 350px;
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
    border-radius: 1rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (prefers-reduced-motion: no-preference) {
    .sl-pricing-classic .sl-pricing-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    }
}

.sl-pricing-classic .sl-pricing-card[data-featured="true"] {
    border: 2px solid var(--smartlearn-primary);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
    z-index: 10;
}

@media (prefers-reduced-motion: no-preference) {
    .sl-pricing-classic .sl-pricing-card[data-featured="true"]:hover {
        transform: scale(1.02) translateY(-5px);
    }
}

@media (max-width: 991px) {
    .sl-pricing-classic .sl-pricing-card[data-featured="true"] {
        transform: scale(1);
    }
    @media (prefers-reduced-motion: no-preference) {
        .sl-pricing-classic .sl-pricing-card[data-featured="true"]:hover {
            transform: translateY(-5px);
        }
    }
}

.sl-pricing-classic .sl-pricing-badge {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--smartlearn-primary);
    color: #FFFFFF;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.25rem 1rem;
    border-radius: 9999px;
}

.sl-pricing-classic .sl-pricing-header {
    text-align: center;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
}

.sl-pricing-classic .sl-plan-name {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--smartlearn-text);
    margin-bottom: 0.5rem;
}

.sl-pricing-classic .sl-plan-desc {
    font-size: 0.875rem;
    color: var(--smartlearn-text-muted);
    margin-bottom: 1.5rem;
    min-height: 42px;
}

.sl-pricing-classic .sl-price-wrap {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 0.25rem;
    color: var(--smartlearn-text);
    min-height: 48px;
}

.sl-pricing-classic .sl-currency {
    font-size: 1.5rem;
    font-weight: 600;
}

.sl-pricing-classic .sl-price {
    font-size: 3rem;
    font-weight: 800;
    line-height: 1;
}

.sl-pricing-classic .sl-period {
    font-size: 1rem;
    color: var(--smartlearn-text-muted);
    margin-left: 0.25rem;
}

.sl-pricing-classic .sl-billing-period {
    font-size: 0.875rem;
    color: var(--smartlearn-text-muted);
    margin: 0;
    min-height: 21px;
}

.sl-pricing-classic .sl-pricing-body {
    flex-grow: 1;
    margin-bottom: 2rem;
}

.sl-pricing-classic .sl-feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sl-pricing-classic .sl-feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    color: var(--smartlearn-text);
    font-size: 0.9375rem;
}

.sl-pricing-classic .sl-feature-item:last-child {
    margin-bottom: 0;
}

.sl-pricing-classic .sl-feature-icon {
    color: var(--smartlearn-primary);
    margin-right: 0.75rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.2rem;
}

.sl-pricing-classic .sl-pricing-footer {
    margin-top: auto;
}

.sl-pricing-classic .sl-btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.sl-pricing-classic .sl-btn-outline {
    background-color: transparent;
    border: 1px solid var(--smartlearn-text);
    color: var(--smartlearn-text);
}

.sl-pricing-classic .sl-btn-outline:hover {
    background-color: var(--smartlearn-text);
    color: var(--smartlearn-bg);
}

.sl-pricing-classic .sl-btn-primary {
    background-color: var(--smartlearn-primary);
    border: 1px solid var(--smartlearn-primary);
    color: #FFFFFF;
}

.sl-pricing-classic .sl-btn-primary:hover {
    background-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
    border-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
}
    `),
    js: ""
  },
  {
    id: "pricing-toggle",
    name: "Glassmorphism Toggle",
    category: "Pricing",
    variant: "Monthly/Yearly Switch",
    description: "An interactive pricing section featuring a toggle switch for billing periods and glassmorphism cards.",
    tags: ["pricing", "interactive", "toggle", "glassmorphism", "subscriptions"],
    image_count: 0,
    preview_image: "",
    html: clean(`
<!-- sl-section: pricing-toggle | v1.0 -->
<div class="sl-pricing-toggle sl-py-20">
    <div class="container">
        <div class="text-center sl-mb-10">
            <h2 class="sl-section-title" data-sl-edit="text">Simple, Transparent Pricing</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Invest in your team's education with our predictable pricing plans.</p>
        </div>

        <div class="sl-toggle-container">
            <span class="sl-toggle-label sl-label-monthly" data-sl-edit="text" aria-hidden="true">Monthly</span>
            <button class="sl-toggle-switch" aria-pressed="false" aria-label="Toggle yearly billing">
                <span class="sl-toggle-knob"></span>
            </button>
            <span class="sl-toggle-label sl-label-yearly" aria-hidden="true">
                <span data-sl-edit="text">Yearly</span> 
                <span class="sl-save-badge" data-sl-edit="text">Save 20%</span>
            </span>
        </div>

        <div class="sl-pricing-grid">
            <!-- Plan 1 -->
            <div class="sl-pricing-card">
                <div class="sl-pricing-header">
                    <h3 class="sl-plan-name" data-sl-edit="text">Starter</h3>
                    <div class="sl-price-wrap">
                        <span class="sl-currency" data-sl-edit="text">$</span>
                        <span class="sl-price" data-monthly="29" data-yearly="23" data-sl-edit="text">29</span>
                        <span class="sl-period" data-sl-edit="text">/ mo</span>
                    </div>
                    <p class="sl-plan-desc" data-sl-edit="text">Essential tools for individual instructors.</p>
                </div>
                <div class="sl-pricing-body">
                    <ul class="sl-feature-list">
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Up to 5 courses</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Standard analytics</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Email support</span></li>
                    </ul>
                </div>
                <div class="sl-pricing-footer">
                    <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="Start Free Trial">Start Free Trial</a>
                </div>
            </div>

            <!-- Plan 2 -->
            <div class="sl-pricing-card" data-featured="true">
                <div class="sl-pricing-badge" data-sl-edit="text">Recommended</div>
                <div class="sl-pricing-header">
                    <h3 class="sl-plan-name" data-sl-edit="text">Professional</h3>
                    <div class="sl-price-wrap">
                        <span class="sl-currency" data-sl-edit="text">$</span>
                        <span class="sl-price" data-monthly="79" data-yearly="63" data-sl-edit="text">79</span>
                        <span class="sl-period" data-sl-edit="text">/ mo</span>
                    </div>
                    <p class="sl-plan-desc" data-sl-edit="text">Advanced features for growing learning academies.</p>
                </div>
                <div class="sl-pricing-body">
                    <ul class="sl-feature-list">
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Unlimited courses</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Advanced reporting</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">AI Learning Assistant</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Priority 24/7 support</span></li>
                    </ul>
                </div>
                <div class="sl-pricing-footer">
                    <a href="#" class="sl-btn sl-btn-primary" data-sl-edit="link" data-sl-edit-text="Subscribe Now">Subscribe Now</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-pricing-toggle {
    position: relative;
    padding: 5rem 0;
    overflow: hidden;
}

.sl-pricing-toggle::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -10%;
    width: 60%;
    height: 100%;
    background: radial-gradient(circle, var(--smartlearn-primary) 0%, transparent 60%);
    opacity: 0.05;
    z-index: 0;
    pointer-events: none;
}

.sl-pricing-toggle .container {
    position: relative;
    z-index: 1;
}

.sl-pricing-toggle .sl-py-20 { padding: 5rem 0; }
.sl-pricing-toggle .sl-mb-10 { margin-bottom: 2.5rem; }
.sl-pricing-toggle .text-center { text-align: center; }

.sl-pricing-toggle .sl-section-title {
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--smartlearn-text);
}

.sl-pricing-toggle .sl-section-subtitle {
    font-size: 1.125rem;
    color: var(--smartlearn-text-muted);
    max-width: 600px;
    margin: 0 auto;
}

.sl-pricing-toggle .sl-toggle-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 3.5rem;
}

.sl-pricing-toggle .sl-toggle-label {
    font-size: 1rem;
    font-weight: 600;
    color: var(--smartlearn-text);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;
}

.sl-pricing-toggle .sl-label-monthly.inactive {
    color: var(--smartlearn-text-muted);
}

.sl-pricing-toggle .sl-save-badge {
    background-color: var(--smartlearn-primary);
    color: #FFFFFF;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
}

.sl-pricing-toggle .sl-toggle-switch {
    position: relative;
    width: 60px;
    height: 32px;
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.1));
    border-radius: 9999px;
    border: 2px solid transparent;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;
}

.sl-pricing-toggle .sl-toggle-switch:focus-visible {
    box-shadow: 0 0 0 3px var(--smartlearn-primary);
}

.sl-pricing-toggle .sl-toggle-switch[aria-pressed="true"] {
    background-color: var(--smartlearn-primary);
}

.sl-pricing-toggle .sl-toggle-knob {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 24px;
    height: 24px;
    background-color: #FFFFFF;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
    .sl-pricing-toggle .sl-toggle-knob,
    .sl-pricing-toggle .sl-toggle-switch {
        transition: none;
    }
}

.sl-pricing-toggle .sl-toggle-switch[aria-pressed="true"] .sl-toggle-knob {
    transform: translateX(28px);
}

.sl-pricing-toggle .sl-pricing-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.sl-pricing-toggle .sl-pricing-card {
    flex: 1 1 350px;
    max-width: 420px;
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
    border-radius: 1.5rem;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.sl-pricing-toggle .sl-pricing-card[data-featured="true"] {
    border: 2px solid var(--smartlearn-primary);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.sl-pricing-toggle .sl-pricing-badge {
    position: absolute;
    top: -12px;
    right: 2rem;
    background-color: var(--smartlearn-primary);
    color: #FFFFFF;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.25rem 1rem;
    border-radius: 9999px;
}

.sl-pricing-toggle .sl-pricing-header {
    margin-bottom: 2rem;
}

.sl-pricing-toggle .sl-plan-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--smartlearn-text);
    margin-bottom: 1rem;
}

.sl-pricing-toggle .sl-price-wrap {
    display: flex;
    align-items: baseline;
    margin-bottom: 0.5rem;
    color: var(--smartlearn-text);
    min-height: 56px;
}

.sl-pricing-toggle .sl-currency {
    font-size: 1.5rem;
    font-weight: 600;
}

.sl-pricing-toggle .sl-price {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1;
    transition: opacity 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
    .sl-pricing-toggle .sl-price {
        transition: none;
    }
}

.sl-pricing-toggle .sl-price.fade-out {
    opacity: 0;
}

.sl-pricing-toggle .sl-period {
    font-size: 1rem;
    color: var(--smartlearn-text-muted);
    margin-left: 0.25rem;
}

.sl-pricing-toggle .sl-plan-desc {
    font-size: 0.875rem;
    color: var(--smartlearn-text-muted);
    margin: 0;
    min-height: 42px;
}

.sl-pricing-toggle .sl-pricing-body {
    flex-grow: 1;
    margin-bottom: 2.5rem;
}

.sl-pricing-toggle .sl-feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sl-pricing-toggle .sl-feature-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    color: var(--smartlearn-text);
    font-size: 0.9375rem;
}

.sl-pricing-toggle .sl-feature-item:last-child {
    margin-bottom: 0;
}

.sl-pricing-toggle .sl-feature-icon {
    color: var(--smartlearn-primary);
    margin-right: 0.75rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.2rem;
}

.sl-pricing-toggle .sl-pricing-footer {
    margin-top: auto;
}

.sl-pricing-toggle .sl-btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 0.875rem 1.5rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.sl-pricing-toggle .sl-btn-outline {
    background-color: transparent;
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.2));
    color: var(--smartlearn-text);
}

.sl-pricing-toggle .sl-btn-outline:hover {
    background-color: var(--smartlearn-card-border, rgba(0,0,0,0.1));
}

.sl-pricing-toggle .sl-btn-primary {
    background-color: var(--smartlearn-primary);
    border: 1px solid var(--smartlearn-primary);
    color: #FFFFFF;
}

.sl-pricing-toggle .sl-btn-primary:hover {
    background-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
    border-color: var(--smartlearn-primary-hover, var(--smartlearn-text));
}
    `),
    js: clean(`
(function() {
    const root = document.querySelector('.sl-pricing-toggle');
    if (!root) return;

    const toggleBtn = root.querySelector('.sl-toggle-switch');
    const labelMonthly = root.querySelector('.sl-label-monthly');
    const priceElements = root.querySelectorAll('.sl-price');

    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', function() {
        const isYearly = this.getAttribute('aria-pressed') === 'true';
        const newState = !isYearly;
        
        this.setAttribute('aria-pressed', newState);
        
        if (newState) {
            labelMonthly.classList.add('inactive');
        } else {
            labelMonthly.classList.remove('inactive');
        }

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        priceElements.forEach(function(el) {
            if (prefersReducedMotion) {
                el.innerText = newState ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
            } else {
                el.classList.add('fade-out');
                setTimeout(function() {
                    el.innerText = newState ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
                    el.classList.remove('fade-out');
                }, 300); // Matches CSS transition
            }
        });
    });
})();
    `)
  },
  {
    id: "pricing-premium",
    name: "Premium Accent",
    category: "Pricing",
    variant: "High-Impact Emphasis",
    description: "A striking layout that uses dynamic gradients based on theme variables to highly accentuate a premium tier.",
    tags: ["pricing", "premium", "accent", "gradient", "high-conversion"],
    image_count: 0,
    preview_image: "",
    html: clean(`
<!-- sl-section: pricing-premium | v1.0 -->
<div class="sl-pricing-premium sl-py-20">
    <div class="container">
        <div class="text-center sl-mb-16">
            <h2 class="sl-section-title" data-sl-edit="text">Scale Your Learning Environment</h2>
            <p class="sl-section-subtitle" data-sl-edit="text">Built for organizations that demand the best.</p>
        </div>
        
        <div class="sl-pricing-grid">
            <!-- Plan 1 -->
            <div class="sl-pricing-card">
                <div class="sl-pricing-header">
                    <h3 class="sl-plan-name" data-sl-edit="text">Standard</h3>
                    <p class="sl-plan-desc" data-sl-edit="text">The essentials for growing teams.</p>
                    <div class="sl-price-wrap">
                        <span class="sl-currency" data-sl-edit="text">$</span>
                        <span class="sl-price" data-sl-edit="text">99</span>
                        <span class="sl-period" data-sl-edit="text">/ mo</span>
                    </div>
                </div>
                <div class="sl-pricing-body">
                    <ul class="sl-feature-list">
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Up to 500 active users</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Standard reporting</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Email support</span></li>
                    </ul>
                </div>
                <div class="sl-pricing-footer">
                    <a href="#" class="sl-btn sl-btn-outline" data-sl-edit="link" data-sl-edit-text="Choose Standard">Choose Standard</a>
                </div>
            </div>

            <!-- Plan 2 (Premium Accent) -->
            <div class="sl-pricing-card sl-premium-card" data-featured="true">
                <div class="sl-pricing-header">
                    <h3 class="sl-plan-name" data-sl-edit="text">Enterprise Academy</h3>
                    <p class="sl-plan-desc sl-premium-desc" data-sl-edit="text">Full white-labeling and dedicated infrastructure.</p>
                    <div class="sl-price-wrap">
                        <span class="sl-currency" data-sl-edit="text">$</span>
                        <span class="sl-price" data-sl-edit="text">499</span>
                        <span class="sl-period sl-premium-desc" data-sl-edit="text">/ mo</span>
                    </div>
                </div>
                <div class="sl-pricing-body">
                    <ul class="sl-feature-list">
                        <li class="sl-feature-item"><span class="sl-feature-icon sl-premium-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Unlimited active users</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon sl-premium-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Custom domains & white-label</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon sl-premium-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Dedicated account manager</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon sl-premium-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">Advanced API & Webhooks</span></li>
                        <li class="sl-feature-item"><span class="sl-feature-icon sl-premium-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg></span><span data-sl-edit="text">99.9% Uptime SLA</span></li>
                    </ul>
                </div>
                <div class="sl-pricing-footer">
                    <a href="#" class="sl-btn sl-btn-white" data-sl-edit="link" data-sl-edit-text="Contact Enterprise Sales">Contact Enterprise Sales</a>
                </div>
            </div>
        </div>
    </div>
</div>
    `),
    css: clean(`
.sl-pricing-premium {
    position: relative;
    padding: 5rem 0;
}

.sl-pricing-premium .sl-py-20 { padding: 5rem 0; }
.sl-pricing-premium .sl-mb-16 { margin-bottom: 4rem; }
.sl-pricing-premium .text-center { text-align: center; }

.sl-pricing-premium .sl-section-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    color: var(--smartlearn-text);
}

.sl-pricing-premium .sl-section-subtitle {
    font-size: 1.125rem;
    color: var(--smartlearn-text-muted);
    max-width: 600px;
    margin: 0 auto;
}

.sl-pricing-premium .sl-pricing-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    align-items: stretch;
}

.sl-pricing-premium .sl-pricing-card {
    flex: 1 1 320px;
    max-width: 400px;
    background-color: var(--smartlearn-card-bg);
    border: 1px solid var(--smartlearn-card-border, rgba(0,0,0,0.08));
    border-radius: 1.5rem;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    position: relative;
}

/* Premium Card uses a gradient built from primary and a slightly darker transparent overlay */
.sl-pricing-premium .sl-premium-card {
    background: linear-gradient(135deg, var(--smartlearn-primary) 0%, rgba(0,0,0,0.8) 100%);
    background-color: var(--smartlearn-primary);
    color: #FFFFFF;
    border: none;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: scale(1.05);
    z-index: 10;
}

@media (max-width: 991px) {
    .sl-pricing-premium .sl-premium-card {
        transform: scale(1);
    }
}

.sl-pricing-premium .sl-pricing-header {
    margin-bottom: 2.5rem;
}

.sl-pricing-premium .sl-plan-name {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--smartlearn-text);
    margin-bottom: 0.5rem;
}

.sl-pricing-premium .sl-premium-card .sl-plan-name {
    color: #FFFFFF;
}

.sl-pricing-premium .sl-plan-desc {
    font-size: 1rem;
    color: var(--smartlearn-text-muted);
    margin-bottom: 1.5rem;
    line-height: 1.6;
    min-height: 48px;
}

.sl-pricing-premium .sl-premium-desc {
    color: rgba(255, 255, 255, 0.8);
}

.sl-pricing-premium .sl-price-wrap {
    display: flex;
    align-items: baseline;
    color: var(--smartlearn-text);
    min-height: 64px;
}

.sl-pricing-premium .sl-premium-card .sl-price-wrap {
    color: #FFFFFF;
}

.sl-pricing-premium .sl-currency {
    font-size: 1.5rem;
    font-weight: 600;
}

.sl-pricing-premium .sl-price {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1;
}

.sl-pricing-premium .sl-period {
    font-size: 1rem;
    color: var(--smartlearn-text-muted);
    margin-left: 0.5rem;
}

.sl-pricing-premium .sl-pricing-body {
    flex-grow: 1;
    margin-bottom: 3rem;
}

.sl-pricing-premium .sl-feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sl-pricing-premium .sl-feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    color: var(--smartlearn-text);
    font-size: 1rem;
}

.sl-pricing-premium .sl-premium-card .sl-feature-item {
    color: #FFFFFF;
}

.sl-pricing-premium .sl-feature-item:last-child {
    margin-bottom: 0;
}

.sl-pricing-premium .sl-feature-icon {
    color: var(--smartlearn-primary);
    margin-right: 1rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.05);
    padding: 0.25rem;
    border-radius: 50%;
}

.sl-pricing-premium .sl-premium-icon {
    color: #FFFFFF;
    background-color: rgba(255, 255, 255, 0.2);
}

.sl-pricing-premium .sl-pricing-footer {
    margin-top: auto;
}

.sl-pricing-premium .sl-btn {
    display: block;
    width: 100%;
    text-align: center;
    padding: 1rem 1.5rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1.125rem;
    text-decoration: none;
    transition: all 0.2s ease;
}

.sl-pricing-premium .sl-btn-outline {
    background-color: transparent;
    border: 2px solid var(--smartlearn-card-border, rgba(0,0,0,0.1));
    color: var(--smartlearn-text);
}

.sl-pricing-premium .sl-btn-outline:hover {
    border-color: var(--smartlearn-text);
}

.sl-pricing-premium .sl-btn-white {
    background-color: #FFFFFF;
    border: 2px solid #FFFFFF;
    color: var(--smartlearn-primary);
}

.sl-pricing-premium .sl-btn-white:hover {
    background-color: transparent;
    color: #FFFFFF;
}
    `),
    js: ""
  }
];

// Update catalog.json
let catalog = {};
if (fs.existsSync(catalogPath)) {
  catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
} else {
  catalog = { version: "1.0", updated: new Date().toISOString().split('T')[0], sections: [] };
}

sections.forEach(sec => {
  const fileData = {
    smartlearn_section: true,
    format_version: "1.0",
    meta: {
      name: sec.name,
      category: sec.category,
      variant: sec.variant,
      description: sec.description,
      tags: sec.tags,
      image_count: sec.image_count
    },
    html: sec.html,
    css: sec.css,
    js: sec.js
  };

  const filename = sec.id + '.json';
  fs.writeFileSync(path.join(sectionsDir, filename), JSON.stringify(fileData, null, 2));

  // Add to catalog if not exists
  const existingIndex = catalog.sections.findIndex(s => s.id === sec.id);
  const catalogEntry = {
    id: sec.id,
    name: sec.name,
    category: sec.category,
    variant: sec.variant,
    description: sec.description,
    tags: sec.tags,
    image_count: sec.image_count,
    preview_image: sec.preview_image,
    download_url: '/sections/' + filename
  };

  if (existingIndex >= 0) {
    catalog.sections[existingIndex] = catalogEntry;
  } else {
    catalog.sections.push(catalogEntry);
  }
});

catalog.updated = new Date().toISOString().split('T')[0];
fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2));

console.log('Pricing sections generated successfully!');
