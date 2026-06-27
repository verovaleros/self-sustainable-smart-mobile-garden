/* Mobile nav toggle + active section highlighting */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Close the mobile menu after clicking a link (closest handles links with children)
  if (navLinks && header) {
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        header.classList.remove("open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Highlight the nav link for the section currently in view.
  // Map each section id to its nav link once, then on every scroll pick the
  // topmost section still intersecting and light only that link — so the
  // highlight is never stale (top/footer) and never order-dependent at edges.
  var links = Array.prototype.slice.call(
    document.querySelectorAll('.nav-links a[href^="#"]')
  );
  var linkFor = {};
  var sections = [];
  links.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    var el = document.getElementById(id);
    if (el) {
      linkFor[id] = a;
      sections.push(el);
    }
  });

  if ("IntersectionObserver" in window && sections.length) {
    var visible = {};
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible[entry.target.id] = entry.isIntersecting;
        });
        // Topmost currently-intersecting section, in document order.
        var currentId = null;
        for (var i = 0; i < sections.length; i++) {
          if (visible[sections[i].id]) {
            currentId = sections[i].id;
            break;
          }
        }
        links.forEach(function (a) {
          a.classList.toggle("active", a === linkFor[currentId]);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      observer.observe(s);
    });
  }
})();
