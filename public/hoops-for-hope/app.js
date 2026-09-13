/* ============================================================
   18 HOURS OF HOPE — Landing Page JS

   ▶ TO GO LIVE: Update the CONFIG block below.
     1. Replace each Stripe Payment Link URL with one you create
        in your Stripe dashboard (Products → Payment Links).
     2. Replace formspreeEndpoint with your Formspree form URL
        (or wire it to your own backend).
     3. Update event date / location once finalized.
   ============================================================ */

const CONFIG = {
  // Stripe Payment Links — create these in your Stripe dashboard
  // and paste the resulting URLs here.
  paymentLinks: {
    donate:               'https://donate.stripe.com/REPLACE_ME_GENERIC_DONATION',
    donate_25:            'https://buy.stripe.com/REPLACE_ME_25',
    donate_50:            'https://buy.stripe.com/REPLACE_ME_50',
    donate_100:           'https://buy.stripe.com/REPLACE_ME_100',
    donate_250:           'https://buy.stripe.com/REPLACE_ME_250',
    donate_500:           'https://buy.stripe.com/REPLACE_ME_500',
    donate_1000:          'https://buy.stripe.com/REPLACE_ME_1000',
    break_5min:           'https://buy.stripe.com/REPLACE_ME_BREAK_5',
    break_15min:          'https://buy.stripe.com/REPLACE_ME_BREAK_15',
    rebounder_individual: 'https://buy.stripe.com/REPLACE_ME_REBOUNDER_IND',
    rebounder_corporate:  'https://buy.stripe.com/REPLACE_ME_REBOUNDER_CORP',
    breakfast_ticket:     'https://buy.stripe.com/REPLACE_ME_BREAKFAST',
    dinner_ticket:        'https://buy.stripe.com/REPLACE_ME_DINNER',
    hour_sponsor:         'https://buy.stripe.com/REPLACE_ME_HOUR_SPONSOR',
    community_sponsor:    'https://buy.stripe.com/REPLACE_ME_COMMUNITY',
    presenting_sponsor:   'mailto:hello@hopefullcollective.org?subject=Presenting%20Sponsor%20Inquiry',
  },

  // Formspree endpoint for slot bookings, pledges, newsletter signups.
  // Sign up at formspree.io (free tier), create a form, paste the endpoint URL here.
  formspreeEndpoint: 'https://formspree.io/f/REPLACE_ME',

  // Event details
  event: {
    date: 'Saturday, October 17, 2026',  // ← update this
    location: 'Loudoun County, VA — Venue TBA',  // ← update this
    contactEmail: 'hello@hopefullcollective.org',
  },
};

// Themed hours from the event PDF — order maps to the 8 AM start
const THEMED_HOURS = [
  { time: '8:00 AM',  theme: 'First Shot',           sponsored: false, milestone: true },
  { time: '9:00 AM',  theme: 'Corporate Leadership', sponsored: false },
  { time: '10:00 AM', theme: 'Student Athlete',      sponsored: false },
  { time: '11:00 AM', theme: 'Youth Basketball',     sponsored: false },
  { time: '12:00 PM', theme: 'First Responders',     sponsored: false },
  { time: '1:00 PM',  theme: 'Coaches',              sponsored: false },
  { time: '2:00 PM',  theme: 'Community Leaders',    sponsored: false },
  { time: '3:00 PM',  theme: 'Mental Wellness',      sponsored: false },
  { time: '4:00 PM',  theme: 'Parents & Families',   sponsored: false },
  { time: '5:00 PM',  theme: 'Local Influencer',     sponsored: false },
  { time: '6:00 PM',  theme: 'Dinner Hour',          sponsored: false },
  { time: '7:00 PM',  theme: 'Community Push',       sponsored: false },
  { time: '8:00 PM',  theme: 'Celebrity Shooters',   sponsored: false },
  { time: '9:00 PM',  theme: 'Late Push',            sponsored: false },
  { time: '10:00 PM', theme: 'Night Owl',            sponsored: false },
  { time: '11:00 PM', theme: 'Power Hour',           sponsored: false },
  { time: '12:00 AM', theme: 'Midnight Crew',        sponsored: false },
  { time: '1:00 AM',  theme: 'Final Countdown',      sponsored: false },
];

/* ============================================================
   UTILITIES
   ============================================================ */

const $  = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

function showToast(message, type = '') {
  const toast = $('#toast');
  toast.textContent = message;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

function isPlaceholder(url) {
  return !url || url.includes('REPLACE_ME');
}

function openPaymentLink(key) {
  const url = CONFIG.paymentLinks[key];
  if (isPlaceholder(url)) {
    showToast('Payment link not configured yet. Update CONFIG.paymentLinks in app.js.', 'error');
    console.warn('[18 Hours of Hope] Missing Stripe Payment Link for:', key);
    return;
  }
  window.open(url, '_blank', 'noopener');
}

function formatMoney(n) {
  return '$' + Number(n).toLocaleString();
}

/* ============================================================
   DONATE SECTION
   ============================================================ */

function initDonate() {
  const buttons = $$('.amount-btn');
  const customInput = $('#custom-amount');
  const display = $('.donate-amount-display');
  const submitBtn = $('#donate-btn');
  let selected = 100;

  const setSelected = (amount, fromCustom = false) => {
    selected = Number(amount) || 0;
    display.textContent = selected ? formatMoney(selected) : '';

    buttons.forEach((b) => {
      const match = !fromCustom && Number(b.dataset.amount) === selected;
      b.classList.toggle('active', match);
      b.setAttribute('aria-checked', match ? 'true' : 'false');
    });

    if (!fromCustom) customInput.value = '';
  };

  buttons.forEach((b) => {
    b.addEventListener('click', () => setSelected(b.dataset.amount));
  });

  customInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (val === '') {
      setSelected(100);
      return;
    }
    setSelected(val, true);
  });

  submitBtn.addEventListener('click', () => {
    if (!selected || selected < 1) {
      showToast('Pick or enter a donation amount.', 'error');
      return;
    }
    // Try a tier-specific link first; fall back to generic donate page
    const tierKey = `donate_${selected}`;
    const links = CONFIG.paymentLinks;
    if (links[tierKey] && !isPlaceholder(links[tierKey])) {
      openPaymentLink(tierKey);
    } else if (!isPlaceholder(links.donate)) {
      openPaymentLink('donate');
    } else {
      showToast('Payment link not configured yet. Update CONFIG in app.js.', 'error');
    }
  });

  setSelected(100);
}

/* ============================================================
   DIRECT PURCHASE BUTTONS (data-purchase="key")
   ============================================================ */

function initPurchaseButtons() {
  $$('[data-purchase]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openPaymentLink(el.dataset.purchase);
    });
  });
}

/* ============================================================
   SCHEDULE / HOURS GRID
   ============================================================ */

function renderHoursGrid() {
  const grid = $('#hours-grid');
  if (!grid) return;
  grid.innerHTML = THEMED_HOURS.map((h, i) => {
    const status = h.sponsored ? 'Sponsored' : 'Open · Tap to support';
    const sponsoredClass = h.sponsored ? ' sponsored' : '';
    return `
      <button class="hour-card${sponsoredClass}" data-hour-index="${i}" type="button">
        <span class="hour-arrow" aria-hidden="true">↗</span>
        <div class="hour-time">${h.time}</div>
        <div class="hour-theme">${h.theme} Hour</div>
        <div class="hour-status">${status}</div>
      </button>
    `;
  }).join('');

  $$('.hour-card', grid).forEach((card) => {
    card.addEventListener('click', () => {
      const i = Number(card.dataset.hourIndex);
      openSlotPicker({ mode: 'rebounder', preselectIndex: i });
    });
  });
}

/* ============================================================
   MODAL SYSTEM
   ============================================================ */

const modal = $('#modal');
const modalBody = $('#modal-body');
let lastFocus = null;

function openModal(html) {
  lastFocus = document.activeElement;
  modalBody.innerHTML = html;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Focus first input or close button
  const firstInput = modal.querySelector('input, select, button:not([data-close-modal])');
  if (firstInput) setTimeout(() => firstInput.focus(), 50);
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  modalBody.innerHTML = '';
  if (lastFocus) lastFocus.focus();
}

function initModalListeners() {
  $$('[data-close-modal]').forEach((el) =>
    el.addEventListener('click', closeModal)
  );
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
}

/* ============================================================
   SLOT PICKER MODAL — Rebounder or Hour Sponsor
   ============================================================ */

function openSlotPicker({ mode = 'rebounder', preselectIndex = null } = {}) {
  const isSponsor = mode === 'sponsor';
  const title = isSponsor ? 'Sponsor an Hour' : 'Be Drew\'s Rebounder';
  const eyebrow = isSponsor ? 'Hour Sponsorship · $1,000' : 'Rebounder Hour';

  const intro = isSponsor
    ? 'Pick the hour your business wants to align with. We\'ll confirm and send a sponsor packet within 24 hours.'
    : 'Pick an hour to suit up as Drew\'s rebounder. We\'ll confirm your slot and send a payment link within 24 hours.';

  const slotsHtml = THEMED_HOURS.map((h, i) => {
    const taken = h.sponsored ? 'taken' : '';
    const selected = preselectIndex === i ? 'selected' : '';
    return `
      <button type="button" class="slot-option ${taken} ${selected}" data-slot-index="${i}" ${h.sponsored ? 'disabled' : ''}>
        <span class="slot-option-time">${h.time}</span>
        <span class="slot-option-theme">${h.theme} Hour</span>
      </button>
    `;
  }).join('');

  const roleToggleHtml = isSponsor ? '' : `
    <label>
      Sign-up Type
      <div class="role-toggle">
        <button type="button" class="active" data-role="individual">
          <span>Individual</span>
          <span class="role-price">$250</span>
        </button>
        <button type="button" data-role="corporate">
          <span>Corporate</span>
          <span class="role-price">$500</span>
        </button>
      </div>
    </label>
  `;

  openModal(`
    <div class="modal-eyebrow">${eyebrow}</div>
    <h3>${title}</h3>
    <p>${intro}</p>
    <form class="modal-form" id="slot-form" novalidate>
      <label>
        Pick Your Hour
        <div class="slot-list">${slotsHtml}</div>
      </label>
      ${roleToggleHtml}
      <div class="form-row">
        <label>
          First Name
          <input type="text" name="firstName" required />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" required />
        </label>
      </div>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" required placeholder="(555) 123-4567" />
      </label>
      ${isSponsor ? `
        <label>
          Company / Organization
          <input type="text" name="company" required />
        </label>
      ` : ''}
      <label>
        Notes (optional)
        <textarea name="notes" placeholder="${isSponsor ? 'Anything you want us to know about your goals for the hour.' : 'Tell us anything we should know!'}"></textarea>
      </label>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">
          ${isSponsor ? 'Submit Sponsorship Inquiry' : 'Reserve My Hour'}
        </button>
        <p class="modal-note">No payment now. We'll review availability and email you a confirmation + secure payment link within 24 hours.</p>
      </div>
    </form>
  `);

  // Slot selection
  let selectedSlot = preselectIndex !== null ? THEMED_HOURS[preselectIndex] : null;
  const slotButtons = $$('.slot-option', modal);

  slotButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('taken')) return;
      slotButtons.forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedSlot = THEMED_HOURS[Number(btn.dataset.slotIndex)];
    });
  });

  // Role toggle (rebounder only)
  let role = 'individual';
  if (!isSponsor) {
    const roleBtns = $$('[data-role]', modal);
    roleBtns.forEach((b) => {
      b.addEventListener('click', () => {
        roleBtns.forEach((x) => x.classList.remove('active'));
        b.classList.add('active');
        role = b.dataset.role;
      });
    });
  }

  // Form submit
  $('#slot-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!selectedSlot) {
      showToast('Pick an hour first.', 'error');
      return;
    }

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    payload.slot_time = selectedSlot.time;
    payload.slot_theme = selectedSlot.theme + ' Hour';
    payload.signup_type = isSponsor ? 'Hour Sponsor' : 'Rebounder';
    if (!isSponsor) payload.rebounder_role = role;
    payload.amount = isSponsor ? '$1,000' : (role === 'corporate' ? '$500' : '$250');

    await submitForm(payload, e.target.querySelector('button[type=submit]'));
  });
}

/* ============================================================
   PLEDGE FORM (per-shot)
   ============================================================ */

function openPledgeForm() {
  openModal(`
    <div class="modal-eyebrow">Per-Shot Pledge</div>
    <h3>Pledge Per Made Free Throw</h3>
    <p>Pick how much you'll donate for every free throw Drew makes. We'll calculate the total at the end of the day and email you a payment link.</p>
    <form class="modal-form" id="pledge-form" novalidate>
      <label>
        Pledge Amount Per Made Shot
        <div class="role-toggle" style="grid-template-columns: repeat(3, 1fr);">
          <button type="button" data-pledge="1"><span>$1</span><span class="role-price">≈ $2,500</span></button>
          <button type="button" data-pledge="2" class="active"><span>$2</span><span class="role-price">≈ $5,000</span></button>
          <button type="button" data-pledge="5"><span>$5</span><span class="role-price">≈ $12,500</span></button>
        </div>
      </label>
      <label>
        Or Custom Amount Per Shot
        <input type="number" name="customPledge" min="1" step="0.5" placeholder="e.g. 3" />
      </label>
      <div class="form-row">
        <label>
          First Name
          <input type="text" name="firstName" required />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" required />
        </label>
      </div>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" placeholder="(555) 123-4567" />
      </label>
      <label class="checkbox-row">
        <input type="checkbox" name="cap" value="yes" />
        <span>Cap my total pledge (we'll ask for the cap before the event)</span>
      </label>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Submit Pledge</button>
        <p class="modal-note">No charge today. We'll email a payment link after the event with your final total based on shots made.</p>
      </div>
    </form>
  `);

  let pledge = 2;
  const pledgeBtns = $$('[data-pledge]', modal);
  pledgeBtns.forEach((b) => {
    b.addEventListener('click', () => {
      pledgeBtns.forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      pledge = Number(b.dataset.pledge);
      $('input[name="customPledge"]', modal).value = '';
    });
  });

  $('input[name="customPledge"]', modal).addEventListener('input', (e) => {
    if (e.target.value) {
      pledgeBtns.forEach((x) => x.classList.remove('active'));
      pledge = Number(e.target.value);
    }
  });

  $('#pledge-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const payload = Object.fromEntries(fd.entries());
    payload.pledge_per_shot = '$' + pledge;
    payload.signup_type = 'Per-Shot Pledge';
    await submitForm(payload, e.target.querySelector('button[type=submit]'));
  });
}

/* ============================================================
   FORM SUBMISSION (Formspree or fallback)
   ============================================================ */

async function submitForm(payload, submitBtn) {
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting…';
  }

  try {
    if (isPlaceholder(CONFIG.formspreeEndpoint)) {
      // No backend configured — log to console + show success-style toast
      console.warn('[18 Hours of Hope] Formspree endpoint not configured. Payload:', payload);
      await new Promise((r) => setTimeout(r, 600));
      closeModal();
      showToast(`Got it! We'll be in touch at ${payload.email}. (Demo mode — wire up Formspree in app.js)`, 'success');
      return;
    }

    const res = await fetch(CONFIG.formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Submit failed');
    closeModal();
    showToast(`Thanks ${payload.firstName || ''}! Confirmation email is on the way.`, 'success');
  } catch (err) {
    console.error(err);
    showToast('Something went wrong. Please email ' + CONFIG.event.contactEmail + '.', 'error');
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
    }
  }
}

/* ============================================================
   ACTION DISPATCHER (data-action="...")
   ============================================================ */

function initActionButtons() {
  $$('[data-action]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const action = el.dataset.action;
      if (action === 'open-slot-picker') {
        openSlotPicker({ mode: el.dataset.mode || 'rebounder' });
      } else if (action === 'open-pledge-form') {
        openPledgeForm();
      }
    });
  });
}

/* ============================================================
   NEWSLETTER FORM
   ============================================================ */

function initNewsletter() {
  const form = $('#newsletter-form');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type=email]').value;
    const btn = form.querySelector('button');
    btn.disabled = true;
    btn.textContent = '…';

    if (isPlaceholder(CONFIG.formspreeEndpoint)) {
      await new Promise((r) => setTimeout(r, 400));
      showToast('Thanks! We\'ll keep you posted. (Demo mode)', 'success');
      form.reset();
      btn.disabled = false;
      btn.textContent = 'Sign Up';
      return;
    }

    try {
      const res = await fetch(CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, signup_type: 'Newsletter' }),
      });
      if (!res.ok) throw new Error();
      showToast('Thanks! You\'re on the list.', 'success');
      form.reset();
    } catch {
      showToast('Could not subscribe — try again later.', 'error');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Sign Up';
    }
  });
}

/* ============================================================
   EVENT INFO POPULATION
   ============================================================ */

function populateEventInfo() {
  $('#event-date').textContent = CONFIG.event.date;
  $('#event-location').textContent = CONFIG.event.location;
  $('#year').textContent = new Date().getFullYear();
}

/* ============================================================
   MOBILE MENU
   ============================================================ */

function initMobileMenu() {
  const btn = $('.mobile-menu-btn');
  const nav = $('.main-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.style.display = open ? 'flex' : '';
  });
}

/* ============================================================
   COUNTER ANIMATIONS (hero stats)
   ============================================================ */

function animateCounters() {
  const els = $$('[data-counter]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.counter);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      observer.unobserve(el);

      function step(now) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        const val = Math.round(target * eased);
        el.textContent = prefix + val.toLocaleString() + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }, { threshold: 0.4 });

  els.forEach((el) => observer.observe(el));
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  populateEventInfo();
  renderHoursGrid();
  initDonate();
  initPurchaseButtons();
  initActionButtons();
  initModalListeners();
  initNewsletter();
  initMobileMenu();
  animateCounters();
});
