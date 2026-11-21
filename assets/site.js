window.RK = {
  whatsapp: "",
  centre: "Akhlaspur, Bhabua, Kaimur, Bihar",
  session: "2026–27"
};

const QUESTIONS = [
  {
    topic: "GS · Harappa",
    hi: "हड़प्पा आज किस देश में है?",
    en: "Harappa is in which country today?",
    options: ["भारत / India", "पाकिस्तान / Pakistan", "अफगानिस्तान / Afghanistan", "नेपाल / Nepal"],
    answer: 1,
    why: "पहला मिला नगर हड़प्पा था, और वह आज के पाकिस्तान में है। The first city found was Harappa, in present-day Pakistan."
  },
  {
    topic: "GS · Harappa",
    hi: "वृहत् स्नानागार कहाँ मिला?",
    en: "Where is the Great Bath?",
    options: ["लोथल / Lothal", "कालीबंगन / Kalibangan", "मोहनजोदड़ो / Mohenjodaro", "धोलावीरा / Dholavira"],
    answer: 2,
    why: "वृहत् स्नानागार मोहनजोदड़ो के दुर्ग में है। The Great Bath is in the citadel at Mohenjodaro."
  },
  {
    topic: "GS · Harappa",
    hi: "लोथल किस नदी के पास बसा था?",
    en: "Lothal stood near which river system?",
    options: ["गंगा / Ganga", "साबरमती की सहायक नदी / A tributary of the Sabarmati", "यमुना / Yamuna", "नर्मदा / Narmada"],
    answer: 1,
    why: "लोथल साबरमती की सहायक नदी पर था, खम्भात की खाड़ी के पास। Lothal was on a tributary of the Sabarmati, near the Gulf of Khambhat."
  },
  {
    topic: "Class 10 · Acids",
    hi: "क्षार में फिनॉल्फथेलिन का रंग क्या होता है?",
    en: "What colour is phenolphthalein in a base?",
    options: ["लाल / Red", "रंगहीन / Colourless", "गाढ़ा गुलाबी / Deep pink", "पीला / Yellow"],
    answer: 2,
    why: "अम्ल में फिनॉल्फथेलिन रंगहीन रहता है। क्षार में गाढ़ा गुलाबी। Phenolphthalein stays colourless in acid and turns deep pink in base."
  },
  {
    topic: "Class 10 · Acids",
    hi: "साबुन लगाने पर हल्दी का दाग किस रंग का हो जाता है?",
    en: "A turmeric stain turns which colour with soap?",
    options: ["नीला / Blue", "लाल-भूरा / Reddish brown", "हरा / Green", "काला / Black"],
    answer: 1,
    why: "हल्दी प्राकृतिक सूचक है। साबुन क्षार है, इसलिए दाग लाल-भूरा होता है। Turmeric is a natural indicator. Soap is basic, so the stain turns reddish brown."
  },
  {
    topic: "Class 10 · Acids",
    hi: "लिटमस किससे बनता है?",
    en: "Litmus is obtained from?",
    options: ["लाल पत्तागोभी / Red cabbage", "लाइकेन / Lichen", "हल्दी / Turmeric", "गुड़हल / Hibiscus"],
    answer: 1,
    why: "लिटमस लाइकेन से मिलता है। अम्ल में लाल, क्षार में नीला। Litmus comes from lichen. Red in acid, blue in base."
  },
  {
    topic: "Quant · Percentage",
    hi: "क्रय मूल्य ₹200 है। वस्तु क्रय मूल्य के 5/2 पर बिकती है। लाभ कितना है?",
    en: "Cost price is ₹200. The article is sold at 5/2 of the cost price. Profit is?",
    options: ["₹200", "₹250", "₹300", "₹400"],
    answer: 2,
    why: "विक्रय मूल्य = 5/2 × 200 = 500। लाभ = 500 − 200 = 300। Selling price = 500. Profit = 300."
  },
  {
    topic: "Quant · Percentage",
    hi: "घड़ी ₹3,000 में खरीदी और ₹3,500 में बेची। लाभ प्रतिशत?",
    en: "A watch bought for ₹3,000 is sold for ₹3,500. Profit percent?",
    options: ["1/5", "50/3 %", "3/20", "1/4"],
    answer: 1,
    why: "लाभ = 500। 500/3000 = 1/6। प्रतिशत = (1/6) × 100 = 50/3 %. Profit fraction is 1/6, which is 50/3 percent."
  },
  {
    topic: "Quant · Number system",
    hi: "इनमें से कौन-सा कथन RK नियम के अनुसार सही है?",
    en: "Which statement matches the RK rule?",
    options: [
      "0 प्राकृतिक संख्या है / 0 is a natural number",
      "π = 22/7 / pi equals 22/7",
      "1 न अभाज्य है न भाज्य / 1 is neither prime nor composite",
      "प्राकृतिक संख्या 0 से शुरू होती है / Natural numbers start at 0"
    ],
    answer: 2,
    why: "1 न अभाज्य है, न भाज्य। 0 प्राकृतिक नहीं है। 22/7 परिमेय है, π अपरिमेय है। 1 is neither prime nor composite."
  },
  {
    topic: "Board · Class 10 Maths",
    hi: "a = x³y² और b = xy³, जहाँ x और y अभाज्य हैं। HCF(a, b) क्या है?",
    en: "a = x³y² and b = xy³, with x and y prime. HCF(a, b) is?",
    options: ["xy", "xy²", "x³y³", "x²y²"],
    answer: 1,
    why: "HCF में हर अभाज्य की छोटी घात रहती है। x की छोटी घात 1 है, y की 2। So HCF = xy²."
  }
];

(function () {
  const root = document.body.dataset.root || "";
  const page = document.body.dataset.page || "";
  const links = [
    ["School", "school.html", "school"],
    ["Sarkari exams", "exams.html", "exams"],
    ["Free notes", "library.html", "library"],
    ["Practice", "practice.html", "practice"],
    ["The centre", "about.html", "about"]
  ];

  const top = document.getElementById("top");
  if (top) {
    top.innerHTML = `
      <a class="skip" href="#main">Skip to content</a>
      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="${root}index.html">
            <span class="mark">RK</span>
            <span class="brand-name"><strong>RK INSTITUTION</strong><span>Akhlaspur · Bhabua</span></span>
          </a>
          <button class="menu-btn" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
          <nav class="nav" id="site-nav">
            ${links.map(([label, href, id]) => `<a href="${root}${href}" ${page === id ? 'aria-current="page"' : ""}>${label}</a>`).join("")}
            <a class="btn" href="${root}admit.html">Take admission</a>
          </nav>
        </div>
      </header>`;
    const btn = top.querySelector(".menu-btn");
    const nav = top.querySelector("#site-nav");
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  const foot = document.getElementById("foot");
  if (foot) {
    foot.innerHTML = `
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-grid">
            <div>
              <h3>RK Institution</h3>
              <p>Classroom coaching for Class 1 to 10, and one All-Exam Foundation for Bihar Police, Railway, SSC CGL, SSC MTS, and BPSC.</p>
              <p>${window.RK.centre}<br>Academic session ${window.RK.session}</p>
            </div>
            <div>
              <h3>Study</h3>
              <ul>
                <li><a href="${root}school.html">Class 1–10</a></li>
                <li><a href="${root}exams.html">Government exams</a></li>
                <li><a href="${root}library.html">Free notes</a></li>
                <li><a href="${root}practice.html">Practice desk</a></li>
              </ul>
            </div>
            <div>
              <h3>Visit</h3>
              <ul>
                <li><a href="${root}about.html">How the centre teaches</a></li>
                <li><a href="${root}admit.html">Admission enquiry</a></li>
              </ul>
            </div>
          </div>
          <p class="fine">Facts on this site come from RK Institution notes for session ${window.RK.session}. GS facts follow NCERT. Fees, batch timings, and the centre phone are confirmed at the desk.</p>
        </div>
      </footer>`;
  }

  const app = document.getElementById("practice-app");
  if (app) mountQuiz(app, QUESTIONS);

  document.querySelectorAll("[data-filter]").forEach((bar) => {
    const buttons = [...bar.querySelectorAll("button")];
    const grid = document.querySelector(bar.dataset.filter);
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
        button.setAttribute("aria-pressed", "true");
        const key = button.dataset.key;
        grid.querySelectorAll("[data-tags]").forEach((card) => {
          card.hidden = key !== "all" && !card.dataset.tags.includes(key);
        });
      });
    });
  });

  const form = document.getElementById("admit-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const text = [
        "RK Institution admission",
        `Name: ${data.get("name")}`,
        `For: ${data.get("track")}`,
        `Phone: ${data.get("phone")}`,
        data.get("note") ? `Note: ${data.get("note")}` : ""
      ].filter(Boolean).join("\n");
      const box = document.getElementById("admit-result");
      box.hidden = false;
      const number = String(window.RK.whatsapp || "").replace(/\D/g, "");
      if (number.length >= 10) {
        window.open(`https://wa.me/${number}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
        box.textContent = "WhatsApp is open with your enquiry. Send it to the centre.";
      } else {
        box.innerHTML = `<p>Copy this message and send it to the centre. Add the centre WhatsApp number in <code>website/assets/site.js</code> as <code>RK.whatsapp</code> and this button will open WhatsApp itself.</p><pre>${text}</pre>`;
      }
    });
  }
})();

function mountQuiz(app, questions) {
  let index = 0;
  let score = 0;
  let locked = false;

  function render() {
    const q = questions[index];
    locked = false;
    app.innerHTML = `
      <p class="eyebrow">${q.topic} · ${index + 1} / ${questions.length}</p>
      <div class="progress" aria-hidden="true"><i style="width:${(index / questions.length) * 100}%"></i></div>
      <h2 class="serif" style="font-size:32px;margin:0 0 6px">${q.hi}</h2>
      <p style="margin-top:0;color:#2a241e">${q.en}</p>
      <div class="options">
        ${q.options.map((option, i) => `<button class="option" type="button" data-i="${i}">${option}</button>`).join("")}
      </div>
      <p id="why" hidden></p>`;
    app.querySelectorAll(".option").forEach((button) => {
      button.addEventListener("click", () => choose(Number(button.dataset.i)));
    });
  }

  function choose(choice) {
    if (locked) return;
    locked = true;
    const q = questions[index];
    if (choice === q.answer) score += 1;
    app.querySelectorAll(".option").forEach((button) => {
      const i = Number(button.dataset.i);
      if (i === q.answer) button.classList.add("good");
      if (i === choice && choice !== q.answer) button.classList.add("bad");
      button.disabled = true;
    });
    const why = app.querySelector("#why");
    why.hidden = false;
    why.textContent = q.why;
    const next = document.createElement("button");
    next.className = "btn ink";
    next.type = "button";
    next.style.marginTop = "16px";
    next.textContent = index === questions.length - 1 ? "See score" : "Next question";
    next.addEventListener("click", () => {
      index += 1;
      if (index >= questions.length) finish();
      else render();
    });
    app.appendChild(next);
  }

  function finish() {
    app.innerHTML = `
      <p class="eyebrow">Practice desk</p>
      <p class="score">${score}/${questions.length}</p>
      <p>${score >= 8 ? "This set is in your hand. Sit the next chapter." : "Read the linked notes once, then run the desk again."}</p>
      <button class="btn ink" type="button" id="again">Try again</button>`;
    app.querySelector("#again").addEventListener("click", () => {
      index = 0;
      score = 0;
      render();
    });
  }

  render();
}
