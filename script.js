/* =================================================================
   Northwind — Interactions
   ================================================================= */

(() => {
  /* ----- Scroll reveal ----- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ----- Animated number counter (dashboard balance) ----- */
  const formatGrouped = (n) => n.toLocaleString("en-US");

  const animateCount = (el) => {
    const target = Number(el.dataset.count || "0");
    if (!target) return;
    const duration = 1600;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const v = Math.floor(target * ease(t));
      // Show as currency (no cents — cents are rendered separately)
      el.textContent = formatGrouped(Math.floor(v / 100));
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = formatGrouped(Math.floor(target / 100));
    };
    requestAnimationFrame(tick);
  };

  const countEls = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && countEls.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    countEls.forEach((el) => cio.observe(el));
  } else {
    countEls.forEach(animateCount);
  }

  /* ----- Nav: solidify on scroll ----- */
  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 12) nav.style.boxShadow = "0 20px 50px -20px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04) inset";
      else nav.style.boxShadow = "";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----- Live ticker: subtle value jitter ----- */
  const tickerItems = document.querySelectorAll(".ticker__item");
  if (tickerItems.length) {
    setInterval(() => {
      const i = Math.floor(Math.random() * tickerItems.length);
      const node = tickerItems[i];
      node.style.transition = "color .4s ease";
      const flash = Math.random() > 0.5 ? "#26ffd0" : "#ff5d6c";
      const prev = node.style.color;
      node.style.color = flash;
      setTimeout(() => (node.style.color = prev), 380);
    }, 1400);
  }

  /* ----- Dashboard range buttons (visual only) ----- */
  document.querySelectorAll(".dashboard__range button").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement
        .querySelectorAll("button")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  /* ----- Smooth anchor scroll ----- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
