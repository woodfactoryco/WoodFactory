/* WoodFactory — gallery rendering + lightbox. No dependencies. */
(function () {
  "use strict";

  var grid     = document.getElementById("gallery");
  var lightbox = document.getElementById("lightbox");
  var lbImg    = document.getElementById("lbImg");
  var lbCap    = document.getElementById("lbCap");
  var lbClose  = document.getElementById("lbClose");

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ── build the gallery from gallery.js ── */
  var photos = (typeof GALLERY !== "undefined" && GALLERY) || [];
  var slots  = (typeof EMPTY_SLOTS === "number") ? EMPTY_SLOTS : 0;

  photos.forEach(function (p) {
    var fig = document.createElement("figure");
    fig.className = "shot" + (p.wide ? " wide" : "");
    fig.tabIndex = 0;

    var img = document.createElement("img");
    img.src = p.src;
    img.alt = p.caption || "פרויקט של WoodFactory";
    img.loading = "lazy";
    fig.appendChild(img);

    if (p.caption) {
      var cap = document.createElement("figcaption");
      cap.textContent = p.caption;
      fig.appendChild(cap);
    }

    function open() { openLightbox(p.src, p.caption || ""); }
    fig.addEventListener("click", open);
    fig.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
    });

    grid.appendChild(fig);
  });

  for (var i = 0; i < slots; i++) {
    var slot = document.createElement("div");
    slot.className = "slot";
    slot.innerHTML = "<span>✦</span>תמונה בקרוב";
    grid.appendChild(slot);
  }

  /* ── lightbox ── */
  function openLightbox(src, caption) {
    lbImg.src = src;
    lbImg.alt = caption;
    lbCap.textContent = caption;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  lbClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
})();
