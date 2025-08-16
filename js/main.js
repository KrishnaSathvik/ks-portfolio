// Year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// Mobile nav
const navBtn = document.getElementById('navBtn');
const navDrawer = document.getElementById('navDrawer');
navBtn?.addEventListener('click', () => navDrawer.classList.toggle('hidden'));
navDrawer?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navDrawer.classList.add('hidden'))
);

// EmailJS
(function initEmailJS() {
  // your public key from EmailJS
  emailjs.init({ publicKey: 'Y4GV402rZ348jDsIl' });
})();

const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = 'Sending…';

  const data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim()
  };

  try {
    await emailjs.send('service_z4k2e9o', 'template_1leyq7q', data);
    msg.textContent = 'Thanks! I’ll reply soon.';
    form.reset();
  } catch (err) {
    console.error(err);
    msg.textContent = 'Something went wrong. Try again or email me directly.';
  }
});
