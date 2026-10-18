/* =============================================================
   EDIT THESE: shop settings, images, products and prices
   ============================================================= */

const SHOP = {
    whatsapp: "923000000000",
    freeShipOver: 5000,
    shipping: 250,
};

// Free Unsplash photos. Swap any id to change a picture everywhere.
const PHOTO = {
    mixed: "1633327999180-f844ad9b1033",
    mixed2: "1641291361624-38b69b86b1cf",
    market: "1710857397974-f0617001c39e",
    table: "1724675007843-3be518bed385",
    almond: "1608797178974-15b35a64ede9",
    almond2: "1631815333332-e3ffb24e2bf8",
    cashew: "1726771517475-e7acdd34cd8a",
    cashew2: "1573555657105-47a0bb37c3ea",
    pistachio: "1704079662049-d00890d21a69",
    pistachio2: "1551238875-13b9d38454db",
    walnut: "1524593000379-d4729b2c4f99",
    walnut2: "1635843108103-9af0ea224a19",
    dates: "1556843824-256570ca21c4",
    raisins: "1691657917109-c6e027eac44a",
    giftOrange: "1647221598272-9aa015392c81",
    giftMint: "1707944145479-12755f0434d8",
    giftBlack: "1674620213535-9b2a2553ef40",
};

const photo = (key, w = 600) =>
    `https://images.unsplash.com/photo-${PHOTO[key]}?auto=format&fit=crop&w=${w}&q=70`;

// Prices are per 500g (Rs.). 250g is half, 1kg is double.
const PRODUCTS = [
    { id: "mix", name: "Premium Mixed Dry Fruits", ur: "پریمیم مکس میوہ جات", cat: "mix", was: 1999, img: "mixed", tag: "Bestseller" },
    { id: "walg", name: "American Akhrot Giri", ur: "امریکن اخروٹ گری", cat: "nuts", was: 2499, img: "walnut2", tag: "Fresh" },
    { id: "almg", name: "Almond Giri Large", ur: "بادام گری بڑی", cat: "nuts", was: 1899, img: "almond", tag: "Fresh" },
    { id: "dat", name: "Luscious Khajoor", ur: "رسیلی کھجور", cat: "dates", was: 1299, img: "dates", tag: "Soft & sweet" },
    { id: "pis", name: "Roasted Pista", ur: "بھنا ہوا پستہ", cat: "nuts", was: 3200, img: "pistachio", tag: "Roasted" },
    { id: "kaj", name: "Kaju Giri Whole", ur: "کاجو گری سالم", cat: "nuts", was: 2800, img: "cashew", tag: "Whole" },
    { id: "kis", name: "Seedless Kishmish", ur: "بے بیج کشمش", cat: "dates", was: 900, img: "raisins", tag: "Seedless" },
    { id: "wal", name: "Akhrot with Shell", ur: "چھلکے والا اخروٹ", cat: "nuts", was: 1100, img: "walnut", tag: "In shell" },
    { id: "alm2", name: "Badam Kagzi Select", ur: "بادام کاغذی", cat: "nuts", was: 2100, img: "almond2", tag: "Select" },
    { id: "trt", name: "Dry Fruit Treat Mix", ur: "ڈرائی فروٹ ٹریٹ مکس", cat: "mix", was: 2299, img: "mixed2", tag: "Fruit + nuts" },
    { id: "kajr", name: "Kaju Roasted Salted", ur: "کاجو بھنا نمکین", cat: "nuts", was: 2900, img: "cashew2", tag: "Roasted" },
    { id: "pisr", name: "Pista Kernel Raw", ur: "پستہ گری کچا", cat: "nuts", was: 3400, img: "pistachio2", tag: "Raw" },
];

const CATS = [
    { key: "all", label: "All", ur: "سب" },
    { key: "nuts", label: "Giri & Nuts", ur: "گری" },
    { key: "dates", label: "Khajoor & Kishmish", ur: "کھجور" },
    { key: "mix", label: "Mixed Mewa", ur: "مکس" },
];

const SALE = 0.20;

const WEIGHTS = [
    { k: "250g", m: 0.5 },
    { k: "500g", m: 1 },
    { k: "1kg", m: 2 }
];

const QUOTES = [
    "روز مٹھی بھر بادام، صحت کا پکا انتظام",
    "کھجور کی مٹھاس، دسترخوان کی جان",
    "اخروٹ کا ایک دانہ، دماغ کا خزانہ",
    "مہمان کی عزت، میوے کی طشتری",
    "پستہ، کاجو، کشمش، ہر دانے میں خلوص",
];

const GIFT_SETS = [
    {
        id: "eid",
        name: "Eid Mubarak Box",
        ur: "عید مبارک ڈبہ",
        price: 3499,
        img: "giftOrange",
        items: ["Almond Giri 250g", "Kaju Giri 250g", "Khajoor 500g", "Kishmish 250g"]
    },
    {
        id: "shd",
        name: "Shaadi Tohfa Box",
        ur: "شادی تحفہ ڈبہ",
        price: 5999,
        img: "giftBlack",
        items: ["Pista 250g", "Kaju Giri 250g", "Badam Kagzi 250g", "Akhrot Giri 250g", "Khajoor 500g"]
    },
    {
        id: "fam",
        name: "Family Treat Box",
        ur: "فیملی ٹریٹ ڈبہ",
        price: 2799,
        img: "giftMint",
        items: ["Mixed Mewa 500g", "Khajoor 250g", "Akhrot Giri 250g"]
    },
];

const BOXES = [
    { id: "classic", name: "Classic Box", price: 450, max: 4 },
    { id: "premium", name: "Premium Wooden Box", price: 950, max: 6 },
];

const GIFT_ITEMS = [
    { id: "g1", name: "Almond Giri", price: 950 },
    { id: "g2", name: "Kaju Giri", price: 1400 },
    { id: "g3", name: "Roasted Pista", price: 1600 },
    { id: "g4", name: "Akhrot Giri", price: 1250 },
    { id: "g5", name: "Khajoor", price: 650 },
    { id: "g6", name: "Kishmish", price: 450 },
];

const RIBBONS = [
    { id: "Maroon", c: "#5c1220" },
    { id: "Gold", c: "#d99a2b" },
    { id: "Green", c: "#46663a" },
    { id: "Cream", c: "#efe3c4" },
];

/* ============================ helpers ============================ */

const $ = (s, r = document) => r.querySelector(s);

const rs = n => "Rs. " + Math.round(n).toLocaleString("en-PK");

const salePrice = was =>
    Math.round(was * (1 - SALE) / 10) * 10 - 1;

const FALLBACK = "data:image/svg+xml;utf8," + encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><defs><radialGradient id='g' cx='50%' cy='40%' r='75%'><stop offset='0' stop-color='#f0d08a'/><stop offset='1' stop-color='#a8641b'/></radialGradient></defs><rect width='400' height='400' fill='url(#g)'/><g fill='#5c1220' opacity='.85'><ellipse cx='150' cy='190' rx='46' ry='66' transform='rotate(-24 150 190)'/><ellipse cx='248' cy='214' rx='40' ry='60' transform='rotate(22 248 214)'/><circle cx='200' cy='130' r='34'/></g></svg>"
);

// Any image that fails to load shows a warm placeholder instead of a broken icon.
document.addEventListener("error", e => {
    const t = e.target;

    if (t && t.tagName === "IMG" && t.src !== FALLBACK) {
        t.src = FALLBACK;
    }
}, true);

let toastTimer;

function toast(msg) {
    const t = $("#toast");

    t.textContent = msg;
    t.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(
        () => t.classList.remove("show"),
        2200
    );
}

/* ============================ quotes ============================ */

(function () {
    const html = QUOTES.map(q => `<span>${q}</span>`).join("");

    $("#quoteTrack").innerHTML = html + html;
})();

/* ============================ products ============================ */

let activeCat = "all";

const chosenW = {};

PRODUCTS.forEach(p => chosenW[p.id] = 1);

function renderFilters() {
    $("#filters").innerHTML = CATS.map(c =>
        `<button class="chip" data-cat="${c.key}" aria-pressed="${c.key === activeCat}">${c.label}<span class="urdu">${c.ur}</span></button>`
    ).join("");
}

function priceFor(p, wi) {
    const m = WEIGHTS[wi].m;

    return {
        now: salePrice(p.was) * m,
        was: p.was * m
    };
}

function renderProducts() {
    const list = PRODUCTS.filter(
        p => activeCat === "all" || p.cat === activeCat
    );

    $("#productGrid").innerHTML = list.map(p => {
        const wi = chosenW[p.id];
        const pr = priceFor(p, wi);

        return `
    <article class="card" data-id="${p.id}">
      <div class="ph">
        <span class="badge">20% OFF</span>
        <img src="${photo(p.img, 600)}" alt="${p.name}" loading="lazy">
        <span class="tag">${p.tag}</span>
      </div>

      <div class="body">
        <h3>${p.name}</h3>
        <div class="ur-name">${p.ur}</div>

        <div class="weights" role="group" aria-label="Weight">
          ${WEIGHTS.map((w, i) =>
            `<button data-w="${i}" aria-pressed="${i === wi}">${w.k}</button>`
        ).join("")}
        </div>

        <div class="price">
          <span class="now">${rs(pr.now)}</span>
          <span class="was">${rs(pr.was)}</span>
        </div>

        <button class="btn btn-dark" data-add="${p.id}">Add to Cart</button>
      </div>
    </article>`;
    }).join("");
}

$("#filters").addEventListener("click", e => {
    const b = e.target.closest("[data-cat]");

    if (!b) return;

    activeCat = b.dataset.cat;

    renderFilters();
    renderProducts();
});

$("#productGrid").addEventListener("click", e => {
    const card = e.target.closest(".card");

    if (!card) return;

    const id = card.dataset.id;
    const p = PRODUCTS.find(x => x.id === id);

    const wb = e.target.closest("[data-w]");

    if (wb) {
        chosenW[id] = +wb.dataset.w;

        const pr = priceFor(p, chosenW[id]);

        card.querySelectorAll("[data-w]").forEach(b => {
            b.setAttribute("aria-pressed", b === wb);
        });

        card.querySelector(".now").textContent = rs(pr.now);
        card.querySelector(".was").textContent = rs(pr.was);

        return;
    }

    if (e.target.closest("[data-add]")) {
        const wi = chosenW[id];
        const pr = priceFor(p, wi);

        addToCart({
            key: `${id}-${WEIGHTS[wi].k}`,
            name: p.name,
            detail: WEIGHTS[wi].k,
            price: pr.now,
            img: photo(p.img, 160)
        });
    }
});

/* ============================ gift sets ============================ */

$("#giftGrid").innerHTML = GIFT_SETS.map(g => `
  <article class="gift-card">
    <div class="ph">
      <img src="${photo(g.img, 800)}" alt="${g.name}" loading="lazy">
    </div>

    <div class="body">
      <h3>${g.name}</h3>
      <div class="urdu">${g.ur}</div>

      <ul>
        ${g.items.map(i => `<li>${i}</li>`).join("")}
      </ul>

      <div class="price">
        <span class="now">${rs(g.price)}</span>
      </div>

      <button class="btn btn-dark" data-gift="${g.id}">Add to Cart</button>
    </div>
  </article>
`).join("");

$("#giftGrid").addEventListener("click", e => {
    const b = e.target.closest("[data-gift]");

    if (!b) return;

    const g = GIFT_SETS.find(x => x.id === b.dataset.gift);

    addToCart({
        key: "set-" + g.id,
        name: g.name,
        detail: "Ready-made gift box",
        price: g.price,
        img: photo(g.img, 160)
    });
});

/* ============================ gift builder ============================ */

const gs = {
    box: "classic",
    items: new Set(),
    ribbon: "Maroon"
};

$("#boxOpts").innerHTML = BOXES.map((b, i) => `
  <div class="opt">
    <input type="radio" name="box" id="box-${b.id}" value="${b.id}" ${i === 0 ? "checked" : ""}>

    <label for="box-${b.id}">
      <span>${b.name}<br><small>Up to ${b.max} packs</small></span>
      <small>${rs(b.price)}</small>
    </label>
  </div>
`).join("");

$("#itemOpts").innerHTML = GIFT_ITEMS.map(it => `
  <div class="opt">
    <input type="checkbox" id="${it.id}" value="${it.id}">

    <label for="${it.id}">
      <span>${it.name}</span>
      <small>${rs(it.price)}</small>
    </label>
  </div>
`).join("");

$("#ribbonOpts").innerHTML = RIBBONS.map((r, i) => `
  <div class="opt">
    <input type="radio" name="ribbon" id="rb-${r.id}" value="${r.id}" ${i === 0 ? "checked" : ""}>

    <label for="rb-${r.id}">
      <span>
        <i class="swatch" style="background:${r.c}"></i>
        ${r.id}
      </span>
    </label>
  </div>
`).join("");

function boxObj() {
    return BOXES.find(b => b.id === gs.box);
}

function renderBuilder() {
    const box = boxObj();
    const n = gs.items.size;
    const full = n >= box.max;

    document.querySelectorAll("#itemOpts input").forEach(i => {
        i.disabled = full && !i.checked;
    });

    $("#pickCount").textContent = `${n} / ${box.max} chosen`;

    $("#prevBox").textContent = `${box.name} · ${gs.ribbon} ribbon`;

    const msg = $("#giftMsg").value.trim();

    $("#prevMsg").textContent = msg || "آپ کے لیے، محبت کے ساتھ";

    $("#prevMsg").style.direction =
        /[؀-ۿ]/.test(msg) || !msg ? "rtl" : "ltr";

    const picked = GIFT_ITEMS.filter(i => gs.items.has(i.id));

    const itemsTotal = picked.reduce((s, i) => s + i.price, 0);

    const total = box.price + itemsTotal;

    $("#giftSummary").innerHTML =
        `<li><span>${box.name}</span><span>${rs(box.price)}</span></li>` +

        (
            picked.length
                ? picked.map(i =>
                    `<li><span>${i.name} 250g</span><span>${rs(i.price)}</span></li>`
                ).join("")
                : `<li><span style="color:var(--ink-soft)">No mewa chosen yet</span><span>-</span></li>`
        ) +

        `<li class="total"><span>Total</span><span>${rs(total)}</span></li>`;

    const hint = $("#giftHint");

    hint.classList.remove("warn");

    hint.textContent = full
        ? "Your box is full. Remove a pack to swap it."
        : "";

    return { box, picked, total, msg };
}

$("#builder").addEventListener("change", e => {
    const t = e.target;

    if (t.name === "box") {
        gs.box = t.value;

        const max = boxObj().max;

        while (gs.items.size > max) {
            const last = [...gs.items].pop();

            gs.items.delete(last);

            document.getElementById(last).checked = false;
        }

    } else if (t.name === "ribbon") {
        gs.ribbon = t.value;

    } else if (t.type === "checkbox") {
        t.checked
            ? gs.items.add(t.value)
            : gs.items.delete(t.value);
    }

    renderBuilder();
});

$("#giftMsg").addEventListener("input", () => {
    $("#msgCount").textContent = `${$("#giftMsg").value.length} / 80`;

    renderBuilder();
});

$("#addGift").addEventListener("click", () => {
    const { box, picked, total, msg } = renderBuilder();

    if (!picked.length) {
        const h = $("#giftHint");

        h.textContent = "Choose at least one pack of mewa for your box.";
        h.classList.add("warn");

        return;
    }

    const detail =
        `${picked.map(i => i.name).join(", ")} · ${gs.ribbon} ribbon` +
        (msg ? ` · Card: "${msg}"` : "");

    addToCart({
        key: `custom-${Date.now()}`,
        name: `Custom ${box.name}`,
        detail,
        price: total,
        img: photo("giftOrange", 160)
    });
});

/* ============================ cart ============================ */

let cart = [];

try {
    cart = JSON.parse(localStorage.getItem("nc_cart") || "[]");
} catch (_) {
    cart = [];
}

const save = () => {
    try {
        localStorage.setItem("nc_cart", JSON.stringify(cart));
    } catch (_) { }
};

function addToCart(item) {
    const ex = cart.find(c => c.key === item.key);

    if (ex) {
        ex.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    save();
    renderCart();

    toast(`${item.name} added to your tokri`);
}

function totals() {
    const sub = cart.reduce((s, c) => s + c.price * c.qty, 0);

    const ship = !cart.length
        ? 0
        : (sub >= SHOP.freeShipOver ? 0 : SHOP.shipping);

    return {
        sub,
        ship,
        total: sub + ship
    };
}

function renderCart() {
    const count = cart.reduce((s, c) => s + c.qty, 0);

    $("#cartCount").textContent = count;

    const body = $("#cartBody");
    const foot = $("#cartFoot");

    if (!cart.length) {
        body.innerHTML = `
      <div class="empty">
        <span class="urdu">ٹوکری خالی ہے</span>
        Your tokri is empty. Add some mewa to begin.
      </div>
    `;

        foot.innerHTML = `
      <a href="#shop" class="btn btn-dark btn-block" id="startShop">
        Start Shopping
      </a>
    `;

        return;
    }

    body.innerHTML = cart.map((c, i) => `
    <div class="line">
      <img src="${c.img}" alt="">

      <div>
        <div class="t">${c.name}</div>
        <div class="d">${c.detail}</div>

        <div class="qty">
          <button data-dec="${i}" aria-label="Decrease">&minus;</button>
          <span>${c.qty}</span>
          <button data-inc="${i}" aria-label="Increase">+</button>
        </div>
      </div>

      <div>
        <div class="p">${rs(c.price * c.qty)}</div>
        <button class="rm" data-rm="${i}">Remove</button>
      </div>
    </div>
  `).join("");

    const t = totals();

    const left = SHOP.freeShipOver - t.sub;

    foot.innerHTML = `
    <div class="row">
      <span>Subtotal</span>
      <span>${rs(t.sub)}</span>
    </div>

    <div class="row">
      <span>Delivery</span>
      <span>${t.ship ? rs(t.ship) : "Free"}</span>
    </div>

    <div class="ship-note">
      ${left > 0
            ? `Add ${rs(left)} more for free delivery`
            : "You have free delivery"}
    </div>

    <div class="row total">
      <span>Total</span>
      <span>${rs(t.total)}</span>
    </div>

    <button class="btn btn-brass btn-block" id="checkout">
      Order on WhatsApp
    </button>

    <div class="fine">
      You confirm address and payment on WhatsApp.
      Cash on delivery available.
    </div>
  `;
}

$("#cartBody").addEventListener("click", e => {
    const inc = e.target.closest("[data-inc]");
    const dec = e.target.closest("[data-dec]");
    const rm = e.target.closest("[data-rm]");

    if (inc) {
        cart[+inc.dataset.inc].qty++;

    } else if (dec) {
        const i = +dec.dataset.dec;

        if (--cart[i].qty <= 0) {
            cart.splice(i, 1);
        }

    } else if (rm) {
        cart.splice(+rm.dataset.rm, 1);

    } else {
        return;
    }

    save();
    renderCart();
});

$("#cartFoot").addEventListener("click", e => {
    if (e.target.closest("#startShop")) {
        closeCart();
        return;
    }

    if (!e.target.closest("#checkout")) return;

    const t = totals();

    const lines = cart.map(c =>
        `• ${c.name} (${c.detail}) x${c.qty} = ${rs(c.price * c.qty)}`
    ).join("\n");

    const text =
        `Assalam o Alaikum NutriCrunch! I would like to order:\n\n${lines}\n\n` +
        `Subtotal: ${rs(t.sub)}\n` +
        `Delivery: ${t.ship ? rs(t.ship) : "Free"}\n` +
        `Total: ${rs(t.total)}\n\n` +
        `Name:\nAddress:\nCity:`;

    window.open(
        `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener"
    );
});

const drawer = $("#drawer");
const overlay = $("#overlay");

function openCart() {
    drawer.classList.add("open");
    overlay.classList.add("open");

    drawer.setAttribute("aria-hidden", "false");

    $("#closeCart").focus();
}

function closeCart() {
    drawer.classList.remove("open");
    overlay.classList.remove("open");

    drawer.setAttribute("aria-hidden", "true");

    $("#openCart").focus();
}

$("#openCart").addEventListener("click", openCart);
$("#closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.addEventListener("keydown", e => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
        closeCart();
    }
});

/* WhatsApp float button */

$("#waFloat").href =
    `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(
        "Assalam o Alaikum! I have a question about NutriCrunch."
    )}`;

/* init */

renderFilters();
renderProducts();
renderBuilder();
renderCart();