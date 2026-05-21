const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const revealItems = document.querySelectorAll(".reveal");
const countItems = document.querySelectorAll("[data-count]");
const spendInput = document.querySelector("[data-spend]");
const spendLabel = document.querySelector("[data-spend-label]");
const savingsLabel = document.querySelector("[data-savings]");

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  notation: "compact",
});

function updateCalculator() {
  if (!spendInput || !spendLabel || !savingsLabel) {
    return;
  }

  const monthlySpend = Number(spendInput.value);
  const annualOpportunity = monthlySpend * 12 * 0.22;

  spendLabel.textContent = moneyFormatter.format(monthlySpend);
  savingsLabel.textContent = moneyFormatter.format(annualOpportunity);
}

function animateCount(element) {
  const target = Number(element.dataset.count);
  const duration = 1100;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);

    element.textContent = Math.round(target * eased).toString();

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

if (navToggle && navbar && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen.toString());
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navbar.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  countItems.forEach((item) => countObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
  countItems.forEach((item) => {
    item.textContent = item.dataset.count;
  });
}

if (spendInput) {
  spendInput.addEventListener("input", updateCalculator);
  updateCalculator();
}
