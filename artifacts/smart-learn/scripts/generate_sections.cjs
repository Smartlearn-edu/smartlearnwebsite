const fs = require('fs');
const path = require('path');

const SECTIONS_DIR = path.join(__dirname, '..', 'public', 'sections');
const CATALOG_PATH = path.join(__dirname, '..', 'public', 'catalog.json');

if (!fs.existsSync(SECTIONS_DIR)) {
  fs.mkdirSync(SECTIONS_DIR, { recursive: true });
}

// Helper to escape HTML/JS for JSON safely handled by Node.
const sections = [
  // ----------------------------------------------------
  // FAQ 1: Simple List
  // ----------------------------------------------------
  {
    id: 'faq-simple-list',
    name: 'FAQ - Minimalist List',
    category: 'FAQ',
    variant: 'Simple List',
    description: 'A clean, minimalist vertical list of frequently asked questions and answers without any hidden toggles.',
    tags: ['faq', 'simple', 'list', 'minimal'],
    image_count: 0,
    html: `<!-- sl-section: faq-simple-list | v1.0 -->
<div class="sl-faq-simple-list">
  <div class="sl-container">
    <div class="sl-header">
      <h2 class="sl-title" data-sl-edit="text">Frequently Asked Questions</h2>
      <p class="sl-subtitle" data-sl-edit="text">Everything you need to know about the product and billing.</p>
    </div>
    <div class="sl-list">
      <div class="sl-item">
        <h3 class="sl-q" data-sl-edit="text">Is there a free trial available?</h3>
        <p class="sl-a" data-sl-edit="text">Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.</p>
      </div>
      <div class="sl-item">
        <h3 class="sl-q" data-sl-edit="text">Can I change my plan later?</h3>
        <p class="sl-a" data-sl-edit="text">Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
      </div>
      <div class="sl-item">
        <h3 class="sl-q" data-sl-edit="text">What is your cancellation policy?</h3>
        <p class="sl-a" data-sl-edit="text">We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.</p>
      </div>
    </div>
  </div>
</div>`,
    css: `.sl-faq-simple-list { padding: 5rem 2rem; width: 100%; font-family: var(--smartlearn-body-font, system-ui); background: transparent; }
.sl-faq-simple-list .sl-container { max-width: 800px; margin: 0 auto; }
.sl-faq-simple-list .sl-header { text-align: center; margin-bottom: 4rem; }
.sl-faq-simple-list .sl-title { font-size: 2.5rem; font-weight: 800; color: var(--smartlearn-text); margin-bottom: 1rem; font-family: var(--smartlearn-heading-font, system-ui); }
.sl-faq-simple-list .sl-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); line-height: 1.6; }
.sl-faq-simple-list .sl-list { display: flex; flex-direction: column; gap: 2.5rem; }
.sl-faq-simple-list .sl-item { border-bottom: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.1)); padding-bottom: 2.5rem; }
.sl-faq-simple-list .sl-item:last-child { border-bottom: none; padding-bottom: 0; }
.sl-faq-simple-list .sl-q { font-size: 1.25rem; font-weight: 600; color: var(--smartlearn-text); margin-bottom: 1rem; }
.sl-faq-simple-list .sl-a { font-size: 1rem; color: var(--smartlearn-text-muted); line-height: 1.7; margin: 0; }`,
    js: ``
  },

  // ----------------------------------------------------
  // FAQ 2: Accordion
  // ----------------------------------------------------
  {
    id: 'faq-accordion',
    name: 'FAQ - Interactive Accordion',
    category: 'FAQ',
    variant: 'Accordion',
    description: 'A space-saving accordion layout where users click to reveal answers.',
    tags: ['faq', 'accordion', 'interactive', 'collapsible'],
    image_count: 0,
    html: `<!-- sl-section: faq-accordion | v1.0 -->
<div class="sl-faq-accordion">
  <div class="sl-container">
    <div class="sl-header">
      <h2 class="sl-title" data-sl-edit="text">Got Questions?</h2>
      <p class="sl-subtitle" data-sl-edit="text">We've got answers.</p>
    </div>
    <div class="sl-accordion">
      <div class="sl-item">
        <button class="sl-q-btn">
          <span data-sl-edit="text">How does the AI tutoring work?</span>
          <svg class="sl-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div class="sl-a-wrapper">
          <div class="sl-a-content">
            <p data-sl-edit="text">The AI tutor analyzes your learning patterns and provides real-time hints and explanations tailored exactly to your current understanding level.</p>
          </div>
        </div>
      </div>
      <div class="sl-item">
        <button class="sl-q-btn">
          <span data-sl-edit="text">Can I integrate this with existing LMS?</span>
          <svg class="sl-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div class="sl-a-wrapper">
          <div class="sl-a-content">
            <p data-sl-edit="text">Yes, we support LTI 1.3 standard which makes integration with Moodle, Canvas, and Blackboard seamless and secure.</p>
          </div>
        </div>
      </div>
      <div class="sl-item">
        <button class="sl-q-btn">
          <span data-sl-edit="text">Is my data private?</span>
          <svg class="sl-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div class="sl-a-wrapper">
          <div class="sl-a-content">
            <p data-sl-edit="text">Absolutely. We are fully GDPR and FERPA compliant. Your learning data is never sold or shared with third parties.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    css: `.sl-faq-accordion { padding: 5rem 2rem; width: 100%; font-family: var(--smartlearn-body-font, system-ui); }
.sl-faq-accordion .sl-container { max-width: 800px; margin: 0 auto; }
.sl-faq-accordion .sl-header { text-align: center; margin-bottom: 3rem; }
.sl-faq-accordion .sl-title { font-size: 2.5rem; font-weight: 800; color: var(--smartlearn-text); margin-bottom: 1rem; }
.sl-faq-accordion .sl-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); }
.sl-faq-accordion .sl-accordion { display: flex; flex-direction: column; gap: 1rem; }
.sl-faq-accordion .sl-item { background: var(--smartlearn-card-bg, rgba(30,41,59,0.7)); border: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.1)); border-radius: var(--smartlearn-radius, 8px); overflow: hidden; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.sl-faq-accordion .sl-q-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; background: transparent; border: none; color: var(--smartlearn-text); font-size: 1.125rem; font-weight: 600; cursor: pointer; text-align: left; }
.sl-faq-accordion .sl-icon { width: 20px; height: 20px; transition: transform 0.3s ease; color: var(--smartlearn-primary); flex-shrink: 0; margin-left: 1rem; }
.sl-faq-accordion .sl-item.active .sl-icon { transform: rotate(180deg); }
.sl-faq-accordion .sl-a-wrapper { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
.sl-faq-accordion .sl-a-content { padding: 0 1.5rem 1.5rem 1.5rem; color: var(--smartlearn-text-muted); line-height: 1.7; border-top: 1px solid transparent; transition: border-color 0.3s ease; }
.sl-faq-accordion .sl-item.active .sl-a-content { border-top-color: var(--smartlearn-card-border, rgba(255,255,255,0.1)); padding-top: 1.5rem; }`,
    js: `(function() {
  const sections = document.querySelectorAll('.sl-faq-accordion');
  sections.forEach(section => {
    const items = section.querySelectorAll('.sl-item');
    items.forEach(item => {
      const btn = item.querySelector('.sl-q-btn');
      const wrapper = item.querySelector('.sl-a-wrapper');
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all others (optional accordion behavior)
        items.forEach(i => {
          i.classList.remove('active');
          i.querySelector('.sl-a-wrapper').style.maxHeight = null;
        });

        if (!isActive) {
          item.classList.add('active');
          wrapper.style.maxHeight = wrapper.scrollHeight + "px";
        }
      });
    });
  });
})();`
  },

  // ----------------------------------------------------
  // FAQ 3: Grid
  // ----------------------------------------------------
  {
    id: 'faq-grid',
    name: 'FAQ - Information Grid',
    category: 'FAQ',
    variant: 'Grid Cards',
    description: 'A 2-column grid displaying questions as individual glassmorphism cards.',
    tags: ['faq', 'grid', 'cards', 'glassmorphism'],
    image_count: 0,
    html: `<!-- sl-section: faq-grid | v1.0 -->
<div class="sl-faq-grid">
  <div class="sl-container">
    <div class="sl-header">
      <h2 class="sl-title" data-sl-edit="text">Answers at a Glance</h2>
      <p class="sl-subtitle" data-sl-edit="text">Quick responses to your most pressing questions.</p>
    </div>
    <div class="sl-grid">
      <div class="sl-card">
        <div class="sl-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
        <h3 class="sl-q" data-sl-edit="text">How do I reset my password?</h3>
        <p class="sl-a" data-sl-edit="text">Click on the "Forgot Password" link on the login page. An email with a secure reset link will be sent to your registered address immediately.</p>
      </div>
      <div class="sl-card">
        <div class="sl-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
        <h3 class="sl-q" data-sl-edit="text">Where can I find support?</h3>
        <p class="sl-a" data-sl-edit="text">Our support team is available 24/7 via the live chat widget in the bottom right corner, or you can email support@smartlearn.edu.</p>
      </div>
      <div class="sl-card">
        <div class="sl-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
        <h3 class="sl-q" data-sl-edit="text">Are my payments secure?</h3>
        <p class="sl-a" data-sl-edit="text">All transactions are processed through Stripe with bank-level AES-256 encryption. We never store your credit card data on our servers.</p>
      </div>
      <div class="sl-card">
        <div class="sl-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
        <h3 class="sl-q" data-sl-edit="text">Do you offer certificates?</h3>
        <p class="sl-a" data-sl-edit="text">Yes, upon completing 100% of a course's modules and passing the final assessment, an accredited digital certificate is automatically issued.</p>
      </div>
    </div>
  </div>
</div>`,
    css: `.sl-faq-grid { padding: 5rem 2rem; width: 100%; font-family: var(--smartlearn-body-font, system-ui); }
.sl-faq-grid .sl-container { max-width: 1200px; margin: 0 auto; }
.sl-faq-grid .sl-header { text-align: center; margin-bottom: 4rem; }
.sl-faq-grid .sl-title { font-size: 2.5rem; font-weight: 800; color: var(--smartlearn-text); margin-bottom: 1rem; }
.sl-faq-grid .sl-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); }
.sl-faq-grid .sl-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.sl-faq-grid .sl-card { background: var(--smartlearn-card-bg, rgba(30,41,59,0.7)); border: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.1)); border-radius: var(--smartlearn-radius, 12px); padding: 2rem; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); transition: transform 0.3s ease; }
.sl-faq-grid .sl-card:hover { transform: translateY(-5px); }
.sl-faq-grid .sl-icon-wrap { width: 48px; height: 48px; background: rgba(99, 102, 241, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--smartlearn-primary); margin-bottom: 1.5rem; }
.sl-faq-grid .sl-q { font-size: 1.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 1rem; }
.sl-faq-grid .sl-a { font-size: 1rem; color: var(--smartlearn-text-muted); line-height: 1.6; }`,
    js: ``
  },

  // ----------------------------------------------------
  // FAQ 4: Split Layout
  // ----------------------------------------------------
  {
    id: 'faq-split',
    name: 'FAQ - Split Layout with CTA',
    category: 'FAQ',
    variant: 'Split Accordion',
    description: 'Left side holds a large title and call-to-action, right side has the accordion questions.',
    tags: ['faq', 'split', 'accordion', 'cta'],
    image_count: 0,
    html: `<!-- sl-section: faq-split | v1.0 -->
<div class="sl-faq-split">
  <div class="sl-container">
    <div class="sl-grid">
      <div class="sl-left">
        <h2 class="sl-title" data-sl-edit="text">Have any questions?</h2>
        <p class="sl-subtitle" data-sl-edit="text">Can't find the answer you're looking for? Don't hesitate to contact our friendly team.</p>
        <a href="#" class="sl-btn" data-sl-edit="link">Contact Support</a>
      </div>
      <div class="sl-right">
        <div class="sl-accordion">
          <div class="sl-item">
            <button class="sl-q-btn"><span data-sl-edit="text">What payment methods do you accept?</span><span class="sl-icon">+</span></button>
            <div class="sl-a-wrapper"><div class="sl-a-content"><p data-sl-edit="text">We accept all major credit cards, PayPal, and bank transfers for annual enterprise plans.</p></div></div>
          </div>
          <div class="sl-item">
            <button class="sl-q-btn"><span data-sl-edit="text">How do I cancel my subscription?</span><span class="sl-icon">+</span></button>
            <div class="sl-a-wrapper"><div class="sl-a-content"><p data-sl-edit="text">You can cancel anytime from your account dashboard under Billing settings.</p></div></div>
          </div>
          <div class="sl-item">
            <button class="sl-q-btn"><span data-sl-edit="text">Is there a discount for non-profits?</span><span class="sl-icon">+</span></button>
            <div class="sl-a-wrapper"><div class="sl-a-content"><p data-sl-edit="text">Yes, we offer a 50% discount for registered non-profit organizations. Contact us with your details.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    css: `.sl-faq-split { padding: 6rem 2rem; width: 100%; font-family: var(--smartlearn-body-font, system-ui); }
.sl-faq-split .sl-container { max-width: 1200px; margin: 0 auto; }
.sl-faq-split .sl-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: flex-start; }
@media (max-width: 900px) { .sl-faq-split .sl-grid { grid-template-columns: 1fr; } }
.sl-faq-split .sl-title { font-size: 3rem; font-weight: 800; color: var(--smartlearn-text); margin-bottom: 1rem; line-height: 1.2; }
.sl-faq-split .sl-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); line-height: 1.6; margin-bottom: 2rem; }
.sl-faq-split .sl-btn { display: inline-block; background: var(--smartlearn-primary); color: #fff !important; padding: 0.8rem 2rem; border-radius: var(--smartlearn-radius, 8px); font-weight: 600; text-decoration: none; transition: 0.3s; }
.sl-faq-split .sl-btn:hover { background: var(--smartlearn-primary-hover); transform: translateY(-2px); }
.sl-faq-split .sl-accordion { display: flex; flex-direction: column; gap: 1rem; }
.sl-faq-split .sl-item { background: var(--smartlearn-card-bg, rgba(30,41,59,0.7)); border: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.1)); border-radius: var(--smartlearn-radius, 8px); backdrop-filter: blur(12px); overflow: hidden; }
.sl-faq-split .sl-q-btn { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1.5rem; background: transparent; border: none; color: var(--smartlearn-text); font-size: 1.125rem; font-weight: 600; cursor: pointer; text-align: left; }
.sl-faq-split .sl-icon { font-size: 1.5rem; font-weight: 300; transition: transform 0.3s; color: var(--smartlearn-primary); }
.sl-faq-split .sl-item.active .sl-icon { transform: rotate(45deg); }
.sl-faq-split .sl-a-wrapper { max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; }
.sl-faq-split .sl-a-content { padding: 0 1.5rem 1.5rem 1.5rem; color: var(--smartlearn-text-muted); line-height: 1.7; }`,
    js: `(function() {
  const sections = document.querySelectorAll('.sl-faq-split');
  sections.forEach(section => {
    const items = section.querySelectorAll('.sl-item');
    items.forEach(item => {
      const btn = item.querySelector('.sl-q-btn');
      const wrapper = item.querySelector('.sl-a-wrapper');
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => { i.classList.remove('active'); i.querySelector('.sl-a-wrapper').style.maxHeight = null; });
        if (!isActive) { item.classList.add('active'); wrapper.style.maxHeight = wrapper.scrollHeight + "px"; }
      });
    });
  });
})();`
  },

  // ----------------------------------------------------
  // FAQ 5: Tabbed
  // ----------------------------------------------------
  {
    id: 'faq-tabbed',
    name: 'FAQ - Categorized Tabs',
    category: 'FAQ',
    variant: 'Tabbed Categories',
    description: 'Switch between different FAQ categories using a sleek tab interface.',
    tags: ['faq', 'tabs', 'categories', 'interactive'],
    image_count: 0,
    html: `<!-- sl-section: faq-tabbed | v1.0 -->
<div class="sl-faq-tabbed">
  <div class="sl-container">
    <div class="sl-header">
      <h2 class="sl-title" data-sl-edit="text">Frequently Asked Questions</h2>
    </div>
    <div class="sl-tabs">
      <button class="sl-tab active" data-target="general" data-sl-edit="text">General</button>
      <button class="sl-tab" data-target="billing" data-sl-edit="text">Billing</button>
      <button class="sl-tab" data-target="tech" data-sl-edit="text">Technical</button>
    </div>
    
    <div class="sl-tab-content active" id="general">
      <div class="sl-card">
        <h3 class="sl-q" data-sl-edit="text">What is SmartLearn?</h3>
        <p class="sl-a" data-sl-edit="text">SmartLearn is an advanced AI-powered LMS theme designed to enhance learning experiences through personalized interfaces.</p>
      </div>
      <div class="sl-card">
        <h3 class="sl-q" data-sl-edit="text">Who is it for?</h3>
        <p class="sl-a" data-sl-edit="text">It is built for universities, schools, and corporate training centers using Moodle.</p>
      </div>
    </div>
    
    <div class="sl-tab-content" id="billing">
      <div class="sl-card">
        <h3 class="sl-q" data-sl-edit="text">How does billing work?</h3>
        <p class="sl-a" data-sl-edit="text">We offer monthly and annual subscriptions. Annual plans include a 20% discount.</p>
      </div>
    </div>
    
    <div class="sl-tab-content" id="tech">
      <div class="sl-card">
        <h3 class="sl-q" data-sl-edit="text">Do I need a powerful server?</h3>
        <p class="sl-a" data-sl-edit="text">No, our theme is highly optimized and works on any standard Moodle hosting environment.</p>
      </div>
    </div>
  </div>
</div>`,
    css: `.sl-faq-tabbed { padding: 5rem 2rem; width: 100%; font-family: var(--smartlearn-body-font, system-ui); }
.sl-faq-tabbed .sl-container { max-width: 800px; margin: 0 auto; }
.sl-faq-tabbed .sl-header { text-align: center; margin-bottom: 2rem; }
.sl-faq-tabbed .sl-title { font-size: 2.5rem; font-weight: 800; color: var(--smartlearn-text); }
.sl-faq-tabbed .sl-tabs { display: flex; justify-content: center; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }
.sl-faq-tabbed .sl-tab { background: transparent; border: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.2)); color: var(--smartlearn-text-muted); padding: 0.5rem 1.5rem; border-radius: 20px; font-weight: 600; cursor: pointer; transition: 0.3s; }
.sl-faq-tabbed .sl-tab:hover { border-color: var(--smartlearn-primary); color: var(--smartlearn-text); }
.sl-faq-tabbed .sl-tab.active { background: var(--smartlearn-primary); border-color: var(--smartlearn-primary); color: #fff; }
.sl-faq-tabbed .sl-tab-content { display: none; flex-direction: column; gap: 1.5rem; animation: fade 0.3s ease; }
.sl-faq-tabbed .sl-tab-content.active { display: flex; }
@keyframes fade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.sl-faq-tabbed .sl-card { background: var(--smartlearn-card-bg, rgba(30,41,59,0.7)); border: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.1)); border-radius: var(--smartlearn-radius, 8px); padding: 2rem; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
.sl-faq-tabbed .sl-q { font-size: 1.25rem; font-weight: 700; color: var(--smartlearn-text); margin-bottom: 1rem; }
.sl-faq-tabbed .sl-a { font-size: 1rem; color: var(--smartlearn-text-muted); line-height: 1.6; }`,
    js: `(function() {
  const sections = document.querySelectorAll('.sl-faq-tabbed');
  sections.forEach(section => {
    const tabs = section.querySelectorAll('.sl-tab');
    const contents = section.querySelectorAll('.sl-tab-content');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-target');
        
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        contents.forEach(c => {
          c.classList.remove('active');
          if (c.id === targetId) c.classList.add('active');
        });
      });
    });
  });
})();`
  },

  // ----------------------------------------------------
  // TESTIMONIAL 1: Grid
  // ----------------------------------------------------
  {
    id: 'testimonial-grid',
    name: 'Testimonials - 3-Column Grid',
    category: 'Testimonials',
    variant: 'Cards Grid',
    description: 'A neat 3-column grid showing user reviews, names, and avatars.',
    tags: ['testimonials', 'grid', 'cards', 'reviews'],
    image_count: 3,
    html: `<!-- sl-section: testimonial-grid | v1.0 -->
<div class="sl-testimonial-grid">
  <div class="sl-container">
    <div class="sl-header">
      <h2 class="sl-title" data-sl-edit="text">Loved by Learners Worldwide</h2>
      <p class="sl-subtitle" data-sl-edit="text">Don't just take our word for it.</p>
    </div>
    <div class="sl-grid">
      <div class="sl-card">
        <p class="sl-quote" data-sl-edit="text">"SmartLearn has completely transformed how I study. The AI recommendations are spot on every time."</p>
        <div class="sl-author">
          <img src="{{image1}}" alt="Author" class="sl-avatar" data-sl-edit="image">
          <div>
            <div class="sl-name" data-sl-edit="text">Sarah Jenkins</div>
            <div class="sl-role" data-sl-edit="text">Computer Science Student</div>
          </div>
        </div>
      </div>
      <div class="sl-card">
        <p class="sl-quote" data-sl-edit="text">"As a professor, this theme gives me the exact metrics I need to identify struggling students early."</p>
        <div class="sl-author">
          <img src="{{image2}}" alt="Author" class="sl-avatar" data-sl-edit="image">
          <div>
            <div class="sl-name" data-sl-edit="text">Dr. Robert Chen</div>
            <div class="sl-role" data-sl-edit="text">University Professor</div>
          </div>
        </div>
      </div>
      <div class="sl-card">
        <p class="sl-quote" data-sl-edit="text">"The glassmorphism UI makes our corporate training portal look like a million bucks."</p>
        <div class="sl-author">
          <img src="{{image3}}" alt="Author" class="sl-avatar" data-sl-edit="image">
          <div>
            <div class="sl-name" data-sl-edit="text">Emily Rodriguez</div>
            <div class="sl-role" data-sl-edit="text">HR Director</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    css: `.sl-testimonial-grid { padding: 5rem 2rem; width: 100%; font-family: var(--smartlearn-body-font, system-ui); }
.sl-testimonial-grid .sl-container { max-width: 1200px; margin: 0 auto; }
.sl-testimonial-grid .sl-header { text-align: center; margin-bottom: 4rem; }
.sl-testimonial-grid .sl-title { font-size: 2.5rem; font-weight: 800; color: var(--smartlearn-text); margin-bottom: 1rem; }
.sl-testimonial-grid .sl-subtitle { font-size: 1.125rem; color: var(--smartlearn-text-muted); }
.sl-testimonial-grid .sl-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.sl-testimonial-grid .sl-card { background: var(--smartlearn-card-bg, rgba(30,41,59,0.7)); border: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.1)); border-radius: var(--smartlearn-radius, 12px); padding: 2.5rem; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; justify-content: space-between; }
.sl-testimonial-grid .sl-quote { font-size: 1.125rem; color: var(--smartlearn-text); line-height: 1.6; font-style: italic; margin-bottom: 2rem; }
.sl-testimonial-grid .sl-author { display: flex; align-items: center; gap: 1rem; }
.sl-testimonial-grid .sl-avatar { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
.sl-testimonial-grid .sl-name { font-weight: 700; color: var(--smartlearn-text); font-size: 1rem; }
.sl-testimonial-grid .sl-role { color: var(--smartlearn-text-muted); font-size: 0.875rem; }`,
    js: ``
  },

  // ----------------------------------------------------
  // TESTIMONIAL 2: Carousel / Slider
  // ----------------------------------------------------
  {
    id: 'testimonial-carousel',
    name: 'Testimonials - Interactive Carousel',
    category: 'Testimonials',
    variant: 'Single Carousel',
    description: 'A large featured testimonial with next/prev buttons to cycle through reviews.',
    tags: ['testimonials', 'carousel', 'slider', 'interactive'],
    image_count: 3,
    html: `<!-- sl-section: testimonial-carousel | v1.0 -->
<div class="sl-testimonial-carousel">
  <div class="sl-container">
    
    <div class="sl-carousel-track">
      <div class="sl-slide active">
        <div class="sl-content">
          <svg class="sl-quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p class="sl-quote-text" data-sl-edit="text">"The best investment our school has ever made. The AI capabilities are unmatched."</p>
          <div class="sl-author">
            <img src="{{image1}}" class="sl-avatar" data-sl-edit="image">
            <div><div class="sl-name" data-sl-edit="text">Principal Skinner</div><div class="sl-role" data-sl-edit="text">Springfield Elementary</div></div>
          </div>
        </div>
      </div>
      <div class="sl-slide">
        <div class="sl-content">
          <svg class="sl-quote-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          <p class="sl-quote-text" data-sl-edit="text">"Our students' test scores improved by 40% after implementing SmartLearn's adaptive paths."</p>
          <div class="sl-author">
            <img src="{{image2}}" class="sl-avatar" data-sl-edit="image">
            <div><div class="sl-name" data-sl-edit="text">Edna Krabappel</div><div class="sl-role" data-sl-edit="text">4th Grade Teacher</div></div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="sl-controls">
      <button class="sl-ctrl-btn sl-prev">←</button>
      <button class="sl-ctrl-btn sl-next">→</button>
    </div>
    
  </div>
</div>`,
    css: `.sl-testimonial-carousel { padding: 6rem 2rem; width: 100%; font-family: var(--smartlearn-body-font, system-ui); }
.sl-testimonial-carousel .sl-container { max-width: 900px; margin: 0 auto; position: relative; }
.sl-testimonial-carousel .sl-carousel-track { position: relative; min-height: 400px; }
.sl-testimonial-carousel .sl-slide { position: absolute; inset: 0; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; display: flex; align-items: center; justify-content: center; }
.sl-testimonial-carousel .sl-slide.active { opacity: 1; pointer-events: auto; z-index: 2; }
.sl-testimonial-carousel .sl-content { text-align: center; background: var(--smartlearn-card-bg, rgba(30,41,59,0.7)); border: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.1)); padding: 4rem; border-radius: var(--smartlearn-radius, 16px); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); width: 100%; }
.sl-testimonial-carousel .sl-quote-icon { width: 40px; height: 40px; color: var(--smartlearn-primary); opacity: 0.5; margin-bottom: 2rem; }
.sl-testimonial-carousel .sl-quote-text { font-size: 2rem; font-weight: 600; color: var(--smartlearn-text); line-height: 1.4; margin-bottom: 3rem; }
@media (max-width: 768px) { .sl-testimonial-carousel .sl-quote-text { font-size: 1.5rem; } .sl-testimonial-carousel .sl-content { padding: 2rem; } }
.sl-testimonial-carousel .sl-author { display: flex; align-items: center; justify-content: center; gap: 1rem; }
.sl-testimonial-carousel .sl-avatar { width: 60px; height: 60px; border-radius: 50%; object-fit: cover; }
.sl-testimonial-carousel .sl-name { font-weight: 700; color: var(--smartlearn-text); font-size: 1.125rem; text-align: left; }
.sl-testimonial-carousel .sl-role { color: var(--smartlearn-text-muted); font-size: 0.875rem; text-align: left; }
.sl-testimonial-carousel .sl-controls { display: flex; justify-content: center; gap: 1rem; margin-top: 2rem; }
.sl-testimonial-carousel .sl-ctrl-btn { width: 48px; height: 48px; border-radius: 50%; background: transparent; border: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.2)); color: var(--smartlearn-text); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; font-size: 1.2rem; }
.sl-testimonial-carousel .sl-ctrl-btn:hover { background: var(--smartlearn-primary); border-color: var(--smartlearn-primary); color: #fff; }`,
    js: `(function() {
  const sections = document.querySelectorAll('.sl-testimonial-carousel');
  sections.forEach(section => {
    const slides = section.querySelectorAll('.sl-slide');
    const nextBtn = section.querySelector('.sl-next');
    const prevBtn = section.querySelector('.sl-prev');
    if(!slides.length || !nextBtn || !prevBtn) return;
    
    let currentIndex = 0;
    
    const updateCarousel = () => {
      slides.forEach((s, idx) => {
        s.classList.toggle('active', idx === currentIndex);
      });
    };
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  });
})();`
  },

  // ----------------------------------------------------
  // TESTIMONIAL 3: Split (Highlight)
  // ----------------------------------------------------
  {
    id: 'testimonial-split',
    name: 'Testimonials - Split Highlight',
    category: 'Testimonials',
    variant: 'Split Story',
    description: 'A striking split layout featuring a large image on one side and an impactful story/quote on the other.',
    tags: ['testimonials', 'split', 'story', 'impact'],
    image_count: 1,
    html: `<!-- sl-section: testimonial-split | v1.0 -->
<div class="sl-testimonial-split">
  <div class="sl-container">
    <div class="sl-grid">
      <div class="sl-image-wrapper">
        <img src="{{image1}}" alt="Student success" class="sl-img" data-sl-edit="image">
        <div class="sl-floating-badge">
          <div class="sl-badge-num">100%</div>
          <div class="sl-badge-text">Success Rate</div>
        </div>
      </div>
      <div class="sl-content">
        <h2 class="sl-title" data-sl-edit="text">A life-changing learning experience.</h2>
        <p class="sl-quote" data-sl-edit="text">"I was struggling to balance my full-time job with my master's degree. The SmartLearn adaptive paths automatically restructured my syllabus to focus only on my weak points. I graduated with honors while saving hundreds of hours of study time."</p>
        <div class="sl-author">
          <div class="sl-name" data-sl-edit="text">Michael Chang</div>
          <div class="sl-role" data-sl-edit="text">Data Science Graduate</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    css: `.sl-testimonial-split { padding: 6rem 2rem; width: 100%; font-family: var(--smartlearn-body-font, system-ui); }
.sl-testimonial-split .sl-container { max-width: 1200px; margin: 0 auto; }
.sl-testimonial-split .sl-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
@media (max-width: 900px) { .sl-testimonial-split .sl-grid { grid-template-columns: 1fr; } }
.sl-testimonial-split .sl-image-wrapper { position: relative; width: 100%; aspect-ratio: 4/5; border-radius: var(--smartlearn-radius, 16px); overflow: hidden; }
.sl-testimonial-split .sl-img { width: 100%; height: 100%; object-fit: cover; }
.sl-testimonial-split .sl-floating-badge { position: absolute; bottom: 2rem; right: -1rem; background: var(--smartlearn-card-bg, rgba(30,41,59,0.9)); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid var(--smartlearn-card-border, rgba(255,255,255,0.1)); padding: 1.5rem; border-radius: var(--smartlearn-radius, 12px); text-align: center; box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
.sl-testimonial-split .sl-badge-num { font-size: 2rem; font-weight: 800; color: var(--smartlearn-primary); }
.sl-testimonial-split .sl-badge-text { font-size: 0.875rem; color: var(--smartlearn-text); text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
.sl-testimonial-split .sl-title { font-size: 3rem; font-weight: 800; color: var(--smartlearn-text); line-height: 1.1; margin-bottom: 2rem; }
.sl-testimonial-split .sl-quote { font-size: 1.25rem; color: var(--smartlearn-text-muted); line-height: 1.8; margin-bottom: 3rem; position: relative; }
.sl-testimonial-split .sl-author { border-left: 3px solid var(--smartlearn-primary); padding-left: 1.5rem; }
.sl-testimonial-split .sl-name { font-weight: 700; color: var(--smartlearn-text); font-size: 1.125rem; }
.sl-testimonial-split .sl-role { color: var(--smartlearn-text-muted); font-size: 0.875rem; }`,
    js: ``
  }
];

// Write individual JSON files
const existingCatalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf-8'));
const allSections = existingCatalog.sections || [];

sections.forEach(s => {
  const fileData = {
    smartlearn_section: true,
    format_version: "1.0",
    meta: {
      name: s.name,
      category: s.category,
      variant: s.variant,
      description: s.description,
      tags: s.tags,
      image_count: s.image_count
    },
    html: s.html,
    css: s.css,
    js: s.js
  };

  const filename = s.id + '.json';
  fs.writeFileSync(path.join(SECTIONS_DIR, filename), JSON.stringify(fileData, null, 2));

  // Check if it exists in catalog
  const existingIdx = allSections.findIndex(x => x.id === s.id);
  const catalogEntry = {
    id: s.id,
    name: s.name,
    category: s.category,
    variant: s.variant,
    description: s.description,
    tags: s.tags,
    image_count: s.image_count,
    preview_image: "",
    download_url: '/sections/' + filename,
    is_premium: false,
    is_new: true,
    popularity: Math.floor(Math.random() * 100) + 50
  };

  if (existingIdx > -1) {
    allSections[existingIdx] = catalogEntry;
  } else {
    allSections.push(catalogEntry);
  }
});

// Save updated catalog
existingCatalog.sections = allSections;
fs.writeFileSync(CATALOG_PATH, JSON.stringify(existingCatalog, null, 2));

console.log('Generated 8 sections successfully!');
