// hamzad.js - محاسبه همزاد (قرین) + تزریق خودکار UI
const HAMZAD_RESULTS = {
  1: "قرین علوی قویتر است پس اسم مناسب است",
  2: "قرین علوی قویتر است و بسیار خیر می‌بیند",
  3: "قرین سفلی بسیار از قرین علوی قویتر است؛ اسم مناسب نیست و فقر می‌آورد",
  4: "مناسب است؛ قرین علوی قویتر است",
  5: "قرین سفلی قویتر است خیلی خیلی زیاد",
  6: "قرین علوی قویتر است و شخص خیر زیادی می‌بیند",
  7: "قرین علوی قویتر است و شخص خیر زیادی می‌بیند",
  8: "قرین علوی قویتر است و شخص خیر زیادی می‌بیند",
  9: "قرین سفلی زیاد قویتر از قرین علوی نیست؛ حامل این اسم همیشه مریض و بدحال خواهد بود",
  10: "قرین از جنس شیطانی است؛ اگر شخص نجنبد و مشکل را حل نکند، بدبخت خواهد شد",
  11: "اسم مناسب است",
  12: "مناسب است",
  13: "تابع قرینی دارد: أم‌الصبیان",
  14: "تابع قرینی دارد: أم‌الصبیان",
  15: "بسیار مناسب است",
  16: "قرین علوی با قرین سفلی در یک اندازه هستند",
  17: "قرین سفلی قویتر است",
  18: "مناسب است",
  19: "اسم مناسب است و برای صاحب اسم رزق بسیار می‌آورد",
  20: "قرین سفلی قویتر است خیلی خیلی زیاد",
  21: "تابع قرینی دارد: أم‌الصبیان (قرین سفلی بیش از اندازه قوی است)",
  22: "مناسب است",
  23: "اسم خوب است؛ هر دو قرین در یک اندازه‌اند اما حامل اسم از چیزی می‌ترسد که از جن به او ضرر می‌رسد",
  24: "مناسب است",
  25: "هر دو قرین در یک اندازه‌اند ولی این شخص ممکن است در تصادف یا اتفاقی بدنش توسط جن تسخیر شود",
  26: "مناسب است و خیر و رزق برایش می‌آورد",
  27: "قرین علوی بسیار قویتر است و این شخص خیر زیادی در زندگی می‌بیند",
  28: "هر دو قرین در یک اندازه‌اند ولی ممکن است در خواب/حمام/تصادف بدنش توسط جن تسخیر شود"
};

const ABJAD_HAMZAD = {
  'ا':1,'آ':1,'أ':1,'إ':1,'ب':2,'پ':2,'ج':3,'چ':3,'د':4,
  'ه':5,'ة':5,'و':6,'ز':7,'ژ':7,'ح':8,'ط':9,
  'ی':10,'ئ':10,'ک':20,'گ':20,'ل':30,'م':40,'ن':50,
  'س':60,'ع':70,'ف':80,'ص':90,'ق':100,'ر':200,'ش':300,
  'ت':400,'ث':500,'خ':600,'ذ':700,'ض':800,'ظ':900,'غ':1000
};

function cleanNameHamzad(str) {
  return (str || "").replace(/موسئ/g,"موسا").replace(/مصطفئ/g,"مصطفا").replace(/چ/g,"ج").replace(/ژ/g,"ز").replace(/گ/g,"ک").replace(/ئ/g,"ی").replace(/ء/g,"").replace(/\s+/g,"").trim();
}

function jalaliToGregorianHamzad(jy, jm, jd) {
  jy += 1595;
  let days = -355668 + (365 * jy) + Math.floor(jy / 33) * 8 + Math.floor(((jy % 33) + 3) / 4) + jd;
  if (jm < 7) days += (jm - 1) * 31; else days += (jm - 7) * 30 + 186;
  let gy = 400 * Math.floor(days / 146097); days %= 146097;
  if (days > 36524) { gy += 100 * Math.floor(--days / 36524); days %= 36524; if (days >= 365) days++; }
  gy += 4 * Math.floor(days / 1461); days %= 1461;
  if (days > 365) { gy += Math.floor((days - 1) / 365); days = (days - 1) % 365; }
  let gd = days + 1;
  const sal_a = [0,31,(gy%4===0&&gy%100!==0||gy%400===0)?29:28,31,30,31,30,31,31,30,31,30,31];
  let gm = 0; for (; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];
  return [gy, gm, gd];
}

function decomposeHamzad(num) {
  const parts = [], units = [1000,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1];
  let n = Math.abs(Math.floor(num || 0));
  for (let u of units) while (n >= u) { parts.push(u); n -= u; }
  return parts;
}

const abjadValueToLetterH = {1:'ا',2:'ب',3:'ج',4:'د',5:'ه',6:'و',7:'ز',8:'ح',9:'ط',10:'ی',20:'ک',30:'ل',40:'م',50:'ن',60:'س',70:'ع',80:'ف',90:'ص',100:'ق',200:'ر',300:'ش',400:'ت',500:'ث',600:'خ',700:'ذ',800:'ض',900:'ظ',1000:'غ'};

function getDateLettersHamzad(y, m, d) {
  return [...decomposeHamzad(y), ...decomposeHamzad(m), ...decomposeHamzad(d)].map(v => abjadValueToLetterH[v] || '').filter(Boolean);
}

function letterScoreHamzad(ch) {
  const val = ABJAD_HAMZAD[ch] || 0;
  if (val === 0) return 0;
  return String(val).replace(/0/g, '').split('').reduce((a, b) => a + Number(b), 0);
}

function reduceBy28(n) {
  if (n <= 0) return 28;
  const r = n % 28;
  return r === 0 ? 28 : r;
}

function calculateHamzad() {
  const name = cleanNameHamzad(document.getElementById('hamzad-name').value);
  const mother = cleanNameHamzad(document.getElementById('hamzad-mother').value);
  const cal = document.getElementById('hamzad-calendar').value;
  const y = parseInt(document.getElementById('hamzad-year').value, 10);
  const m = parseInt(document.getElementById('hamzad-month').value, 10);
  const d = parseInt(document.getElementById('hamzad-day').value, 10);
  const resultBox = document.getElementById('hamzad-result');
  const numEl = document.getElementById('hamzad-number');
  const textEl = document.getElementById('hamzad-text');
  if (!name || !mother || isNaN(y) || isNaN(m) || isNaN(d) || m < 1 || m > 12 || d < 1 || d > 31) {
    resultBox.style.display = 'block';
    numEl.textContent = '';
    textEl.innerHTML = '<span style="color:#ff6b6b;">لطفاً همه فیلدها را با مقادیر معتبر پر کنید.</span>';
    return;
  }
  let gy = y, gm = m, gd = d;
  if (cal === 'jalali') [gy, gm, gd] = jalaliToGregorianHamzad(y, m, d);
  const allLetters = [...name.split(''), ...mother.split(''), ...getDateLettersHamzad(gy, gm, gd)];
  const uniqueLetters = [...new Set(allLetters.filter(ch => ABJAD_HAMZAD[ch]))];
  let total = uniqueLetters.reduce((sum, ch) => sum + letterScoreHamzad(ch), 0);
  const finalNum = reduceBy28(total);
  resultBox.style.display = 'block';
  numEl.textContent = 'عدد نهایی: ' + finalNum;
  textEl.textContent = HAMZAD_RESULTS[finalNum] || 'نتیجه نامشخص';
}

function clearHamzad() {
  document.getElementById('hamzad-name').value = '';
  document.getElementById('hamzad-mother').value = '';
  document.getElementById('hamzad-year').value = '';
  document.getElementById('hamzad-month').value = '';
  document.getElementById('hamzad-day').value = '';
  document.getElementById('hamzad-calendar').value = 'jalali';
  document.getElementById('hamzad-result').style.display = 'none';
}

// --- تزریق خودکار UI ---
(function() {
  function injectHamzadUI() {
    document.querySelectorAll('.nav-btn').forEach(function(btn) {
      if (btn.getAttribute('onclick') === "openModal('ramlModal')") {
        var icon = btn.querySelector('i');
        if (icon) icon.className = 'fas fa-user-friends';
        btn.childNodes.forEach(function(n) {
          if (n.nodeType === 3 && n.textContent.trim()) n.textContent = ' محاسبه همزاد';
        });
      }
    });
    var modal = document.getElementById('ramlModal');
    if (!modal) return;
    modal.innerHTML = '<div class="modal-content"><div class="modal-header"><button class="close-btn" onclick="closeModal(\'ramlModal\')"><i class="fas fa-times"></i></button><h2 class="modal-title">محاسبه همزاد (قرین)</h2></div><div class="modal-body"><p style="color:#d1c4e9;text-align:center;margin-bottom:18px;font-size:0.95em;">منظور از <strong style="color:#ffcc00;">قرین</strong> همان <strong style="color:#ffcc00;">همزاد</strong> است</p><div class="form-group"><label for="hamzad-name">نام شخص</label><input type="text" id="hamzad-name" placeholder="مثال: میعاد" autocomplete="off"></div><div class="form-group"><label for="hamzad-mother">نام مادر</label><input type="text" id="hamzad-mother" placeholder="مثال: وفیه" autocomplete="off"></div><div class="form-group"><label for="hamzad-calendar">نوع تقویم</label><select id="hamzad-calendar"><option value="jalali">شمسی</option><option value="gregorian">میلادی</option></select></div><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;"><div class="form-group"><label for="hamzad-year">سال</label><input type="number" id="hamzad-year" placeholder="۱۳۶۲" inputmode="numeric"></div><div class="form-group"><label for="hamzad-month">ماه</label><input type="number" id="hamzad-month" placeholder="۱–۱۲" inputmode="numeric"></div><div class="form-group"><label for="hamzad-day">روز</label><input type="number" id="hamzad-day" placeholder="۱–۳۱" inputmode="numeric"></div></div><div style="display:flex;gap:10px;margin-top:10px;"><button class="btn" style="flex:1;" onclick="calculateHamzad()">محاسبه</button><button class="btn" style="flex:1;background:linear-gradient(135deg,#555,#333);color:#fff;" onclick="clearHamzad()">پاک کردن</button></div><div id="hamzad-result" class="result-box" style="display:none;margin-top:18px;"><h3 style="color:#ffcc00;margin-bottom:10px;">نتیجه محاسبه</h3><p id="hamzad-number" style="font-size:1.4em;font-weight:bold;color:#ffcc00;"></p><p id="hamzad-text" style="color:#ffffff;line-height:1.7;margin-top:10px;"></p></div></div><div class="modal-footer">محاسبه همزاد - کاری از استاد میعاد جابری‌پور</div></div>';
  }
  window.closeModal = function(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.position = '';
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', injectHamzadUI);
  else injectHamzadUI();
})();
