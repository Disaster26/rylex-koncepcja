/* Konfigurator konserwatorów RYLEX - podgląd koncepcyjny.
   DANE: przepisane 1:1 z podstron rylex.eu/konserwator-pozzetti-rylex-4d ... -14d (26.10.2026).
   Ceny netto. Opcje dodatkowe i ich ceny pochodzą z tabel "Dodatkowe (opcje)" na tych podstronach,
   uchwyt do kuwet z rylex.eu/akcesoria-i-wyposazenie. Do potwierdzenia przez RYLEX: czy cena kuwet
   (90 zł) i uchwytu (50 zł) jest za sztukę - w konfiguratorze liczone za sztukę. */
(function () {
  'use strict';

  var MODELE = [
    { id: '4d', nazwa: 'RYLEX 4D', komory: 4, zapas: 2, poj: '205 l', wym: '764 × 694 × 875 mm', moc: '143 W', energia: '1,15 kWh / doba', temp: '-5 do -23°C', cena: 6290, wysylka: 250, foto: 'img/k4.jpg', foto_cover: true,
      url: 'https://rylex.eu/konserwator-pozzetti-rylex-4d/', opis: 'Kompaktowy - do mniejszych punktów, food trucków i lokali.',
      opc: { plexi: 490, ral: 490, blat: 290 } },
    { id: '6d', nazwa: 'RYLEX 6D', komory: 6, zapas: 6, poj: '331 l', wym: '1094 × 694 × 880 mm', moc: '195 W', energia: '1,56 kWh / doba', temp: '-5 do -20°C', cena: 6990, wysylka: 250, foto: 'img/k6.jpg',
      url: 'https://rylex.eu/konserwator-pozzetti-rylex-6d/', opis: 'Wymiary jak 8D, ale z dodatkowym fragmentem blatu roboczego.',
      opc: { plexi: 790, ral: 590, blat: 590 } },
    { id: '8d', nazwa: 'RYLEX 8D', komory: 8, zapas: 6, poj: '331 l', wym: '1094 × 694 × 880 mm', moc: '195 W', energia: '1,56 kWh / doba', temp: '-5 do -20°C', cena: 7290, wysylka: 250, foto: 'img/k8.jpg',
      url: 'https://rylex.eu/konserwator-pozzetti-rylex-8d/', opis: 'Wygodna organizacja pracy w typowym punkcie sprzedaży lodów.',
      opc: { plexi: 790, ral: 590, blat: 590 } },
    { id: '10d', nazwa: 'RYLEX 10D', komory: 10, zapas: 8, poj: '426 l', wym: '1344 × 694 × 880 mm', moc: '210 W', energia: '1,62 kWh / doba', temp: '-5 do -20°C', cena: 7790, wysylka: 300, foto: 'img/k10.jpg',
      url: 'https://rylex.eu/konserwator-pozzetti-rylex-10d/', opis: 'Więcej smaków przy zachowaniu płynności obsługi.',
      opc: { plexi: 790, ral: 590, blat: 590 } },
    { id: '12d', nazwa: 'RYLEX 12D', komory: 12, zapas: 10, poj: '503 l', wym: '1544 × 694 × 880 mm', moc: '265 W', energia: '2,11 kWh / doba', temp: '-5 do -24°C', cena: 8290, wysylka: 350, foto: 'img/k12.jpg',
      url: 'https://rylex.eu/konserwator-pozzetti-rylex-12d/', opis: 'Jednoczesne przechowywanie i sprzedaż większej liczby smaków.',
      opc: { plexi: 890, ral: 690, blat: 690 } },
    { id: '14d', nazwa: 'RYLEX 14D', komory: 14, zapas: 12, poj: '602 l', wym: '1804 × 694 × 880 mm', moc: '320 W', energia: '2,49 kWh / doba', temp: '-5 do -24°C', cena: 9290, wysylka: 350, foto: 'img/k14.jpg',
      url: 'https://rylex.eu/konserwator-pozzetti-rylex-14d/', opis: 'Największa wersja w ofercie.',
      opc: { plexi: 990, ral: 790, blat: 790 } }
  ];

  /* Opcje: cena stała albo zależna od modelu (klucz w MODELE[].opc). ilosc = liczona w sztukach. */
  var OPCJE = [
    { id: 'plexi', nazwa: 'Szyba z plexi', opis: 'Gięta z 3 stron, typ Pozzetti', zModelu: 'plexi', foto: 'img/o_plexi.jpg' },
    { id: 'kola', nazwa: 'Kółka obrotowe', opis: 'Podwójne z hamulcami, nośność kompletu do 400 kg', cena: 290 },
    { id: 'blat', nazwa: 'Blat', opis: 'Stal nierdzewna', zModelu: 'blat' },
    { id: 'narozniki', nazwa: 'Narożniki', opis: 'Polerowana stal nierdzewna', cena: 190 },
    { id: 'ral', nazwa: 'Malowanie RAL', opis: 'Dowolny kolor z palety RAL', zModelu: 'ral', foto: 'img/o_ral.jpg', pole: 'Numer koloru RAL, np. RAL 4010' },
    { id: 'reklama', nazwa: 'Reklama magnetyczna lub okleina', opis: 'Grafika na froncie konserwatora', cena: 350, foto: 'img/o_reklama.jpg' },
    { id: 'myjka', nazwa: 'Myjka gałkownic', opis: 'Nieprzepływowa', cena: 190, foto: 'img/o_myjka.jpg' },
    { id: 'stojak', nazwa: 'Stojak na wafle', opis: 'Stal nierdzewna', cena: 99, foto: 'img/o_stojak.jpg' },
    { id: 'kuwety', nazwa: 'Kuwety włoskie', opis: 'Ø 200 mm, h = 250 mm, cena za sztukę', cena: 90, ilosc: true, foto: 'img/o_kuwety.jpg' },
    { id: 'uchwyt', nazwa: 'Uchwyt do kuwet Pozzetti', opis: 'Stal AISI 304, cena za sztukę', cena: 50, ilosc: true, foto: 'img/o_uchwyt.jpg' }
  ];

  var stan = { model: '8d', opcje: {}, ral: '', krok: 1 };
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var zl = function (n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' zł'; };
  var model = function () { return MODELE.filter(function (m) { return m.id === stan.model; })[0]; };
  var cenaOpcji = function (o) { return o.zModelu ? model().opc[o.zModelu] : o.cena; };

  /* ---------- lista modeli (kafle) ---------- */
  $('#listaModeli').innerHTML = MODELE.map(function (m) {
    return '<article class="model' + (m.foto_cover ? ' foto-cover' : '') + '">' +
      '<div class="model-foto"><img src="' + m.foto + '" alt="Konserwator ' + m.nazwa + '" width="900" height="675" loading="lazy"></div>' +
      '<div class="model-tr"><h3>' + m.nazwa + '</h3>' +
      '<p class="model-opis">' + m.opis + '</p>' +
      '<dl><div><dt>Komory</dt><dd>' + m.komory + ' + ' + m.zapas + ' kuwet w zapasie</dd></div>' +
      '<div><dt>Pojemność</dt><dd>' + m.poj + '</dd></div>' +
      '<div><dt>Wymiary</dt><dd>' + m.wym + '</dd></div></dl>' +
      '<p class="model-krotko">' + m.komory + ' komór, ' + m.poj + '</p>' +
      '<p class="model-cena">' + zl(m.cena) + ' <small>netto + wysyłka ' + zl(m.wysylka) + '</small></p>' +
      '<div class="model-akcje"><button type="button" class="btn" data-konfiguruj="' + m.id + '">Konfiguruj</button>' +
      '<a href="' + m.url + '" class="lnk">Karta produktu</a></div></div></article>';
  }).join('');

  /* ---------- tabela danych ---------- */
  (function () {
    var w = [['Model', function (m) { return m.nazwa; }], ['Kuwety', function (m) { return m.komory + ' + ' + m.zapas; }], ['Pojemność', function (m) { return m.poj; }],
      ['Wymiary', function (m) { return m.wym; }], ['Moc', function (m) { return m.moc; }], ['Zużycie energii', function (m) { return m.energia; }],
      ['Zakres temperatur', function (m) { return m.temp; }], ['Cena netto', function (m) { return zl(m.cena); }], ['Wysyłka netto', function (m) { return zl(m.wysylka); }]];
    var h = '<thead><tr>' + w.map(function (k) { return '<th scope="col">' + k[0] + '</th>'; }).join('') + '</tr></thead><tbody>';
    MODELE.forEach(function (m) { h += '<tr>' + w.map(function (k, i) { return i ? '<td>' + k[1](m) + '</td>' : '<th scope="row">' + k[1](m) + '</th>'; }).join('') + '</tr>'; });
    $('#tabela').innerHTML = h + '</tbody>';
  })();

  /* ---------- krok 1: wybór modelu ---------- */
  function rysujWybor() {
    $('#wyborModelu').innerHTML = MODELE.map(function (m) {
      return '<label class="wm' + (m.id === stan.model ? ' wyb' : '') + '"><input type="radio" name="model" value="' + m.id + '"' + (m.id === stan.model ? ' checked' : '') + '>' +
        '<img src="' + m.foto + '" alt="" width="900" height="675">' +
        '<span class="wm-t"><strong>' + m.nazwa + '</strong><span>' + m.komory + ' komór, ' + m.poj + '</span></span>' +
        '<span class="wm-c">' + zl(m.cena) + '</span></label>';
    }).join('');
  }
  $('#wyborModelu').addEventListener('change', function (e) {
    if (e.target.name === 'model') { stan.model = e.target.value; odswiez(); }
  });

  /* ---------- krok 2: opcje ---------- */
  function rysujOpcje() {
    $('#opcje').innerHTML = OPCJE.map(function (o) {
      var wl = stan.opcje[o.id] > 0;
      var h = '<div class="opc' + (wl ? ' wl' : '') + (o.foto ? '' : ' bez-foto') + '" data-opc="' + o.id + '">';
      if (o.foto) h += '<img src="' + o.foto + '" alt="" width="320" height="240" loading="lazy">';
      h += '<div class="opc-t"><strong>' + o.nazwa + '</strong><span>' + o.opis + '</span>';
      if (o.pole && wl) h += '<input class="opc-pole" type="text" maxlength="40" placeholder="' + o.pole + '" value="' + stan.ral.replace(/"/g, '') + '" aria-label="' + o.pole + '">';
      h += '</div><div class="opc-p"><span class="opc-c">' + zl(cenaOpcji(o)) + '</span>';
      if (o.ilosc) {
        h += '<span class="ile"><button type="button" data-ile="-1" aria-label="Mniej: ' + o.nazwa + '">-</button><output>' + (stan.opcje[o.id] || 0) + '</output><button type="button" data-ile="1" aria-label="Więcej: ' + o.nazwa + '">+</button></span>';
      } else {
        h += '<label class="przel"><input type="checkbox"' + (wl ? ' checked' : '') + ' aria-label="Dodaj: ' + o.nazwa + '"><span>' + (wl ? 'Dodano' : 'Dodaj') + '</span></label>';
      }
      return h + '</div></div>';
    }).join('');
  }
  $('#opcje').addEventListener('click', function (e) {
    var b = e.target.closest('[data-ile]'); if (!b) return;
    var id = b.closest('.opc').dataset.opc;
    stan.opcje[id] = Math.max(0, Math.min(60, (stan.opcje[id] || 0) + Number(b.dataset.ile)));
    odswiez();
  });
  $('#opcje').addEventListener('change', function (e) {
    if (e.target.type !== 'checkbox') return;
    var id = e.target.closest('.opc').dataset.opc;
    stan.opcje[id] = e.target.checked ? 1 : 0;
    odswiez();
    if (id === 'ral' && e.target.checked) { var p = $('.opc-pole'); if (p) p.focus(); }
  });
  $('#opcje').addEventListener('input', function (e) {
    if (e.target.classList.contains('opc-pole')) { stan.ral = e.target.value; rysujSume(); }
  });

  /* ---------- wyliczenia ---------- */
  function pozycje() {
    var m = model(), p = [{ n: 'Konserwator ' + m.nazwa, c: m.cena }];
    OPCJE.forEach(function (o) {
      var ile = stan.opcje[o.id] || 0; if (!ile) return;
      var n = o.nazwa + (o.ilosc ? ' × ' + ile : '') + (o.id === 'ral' && stan.ral.trim() ? ' (' + stan.ral.trim() + ')' : '');
      p.push({ n: n, c: cenaOpcji(o) * ile });
    });
    return p;
  }
  function sumy() {
    var p = pozycje(), netto = p.reduce(function (a, x) { return a + x.c; }, 0), w = model().wysylka;
    return { p: p, netto: netto, wysylka: w, razem: netto + w, brutto: Math.round((netto + w) * 1.23) };
  }
  function wykonanie() {
    return { st: ($('input[name="sterowanie"]:checked') || {}).value, pk: ($('input[name="pokrywki"]:checked') || {}).value };
  }

  function rysujSume() {
    var s = sumy(), m = model(), wk = wykonanie();
    $('#bokModel').textContent = m.nazwa + ', ' + m.komory + ' komór';
    $('#bokFoto').src = m.foto;
    $('#bokLista').innerHTML = s.p.slice(1).map(function (x) { return '<li><span>' + x.n + '</span><span>' + zl(x.c) + '</span></li>'; }).join('') ||
      '<li class="pusto">Bez wyposażenia dodatkowego</li>';
    $('#bokSuma').textContent = zl(s.razem);
    $('#pasekModel').textContent = m.nazwa + (s.p.length > 1 ? ' + ' + (s.p.length - 1) + ' opc.' : '') + ', z wysyłką';
    $('#pasekSuma').textContent = zl(s.razem) + ' netto';
    $$('.nazwaModelu').forEach(function (x) { x.textContent = m.nazwa; });
    $('#podsumowanie').innerHTML =
      '<div class="ps-model"><img src="' + m.foto + '" alt="" width="900" height="675"><div><strong>' + m.nazwa + '</strong><span>' + m.komory + ' komór + ' + m.zapas + ' kuwet w zapasie, ' + m.poj + ', ' + m.wym + '</span>' +
      '<span>Sterowanie ' + wk.st + ', pokrywki ' + wk.pk + '</span></div></div>' +
      '<table class="ps"><tbody>' + s.p.map(function (x) { return '<tr><td>' + x.n + '</td><td>' + zl(x.c) + '</td></tr>'; }).join('') +
      '<tr class="ps-pod"><td>Razem urządzenie i wyposażenie</td><td>' + zl(s.netto) + '</td></tr>' +
      '<tr><td>Wysyłka</td><td>' + zl(s.wysylka) + '</td></tr>' +
      '<tr class="ps-suma"><td>Razem netto</td><td>' + zl(s.razem) + '</td></tr>' +
      '<tr class="ps-brutto"><td>Razem brutto (VAT 23%)</td><td>' + zl(s.brutto) + '</td></tr></tbody></table>';
  }

  function odswiez() { rysujWybor(); rysujOpcje(); rysujSume(); }

  /* ---------- kroki ---------- */
  function idzDo(k, przewin) {
    stan.krok = k;
    $$('[data-panel]').forEach(function (p) { p.hidden = Number(p.dataset.panel) !== k; });
    $$('#kroki button').forEach(function (b) { b.setAttribute('aria-selected', String(Number(b.dataset.krok) === k)); });
    $('#pasekDalej').textContent = ['', 'Dalej: opcje', 'Podsumowanie', 'Zapytaj o wycenę', ''][k];
    $('#pasekDalej').hidden = k === 4;
    if (przewin) {
      var y = $('#kroki').getBoundingClientRect().top + scrollY - $('.top').offsetHeight - 12;
      if (Math.abs(scrollY - y) > 40) scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  $('#kroki').addEventListener('click', function (e) { var b = e.target.closest('[data-krok]'); if (b) idzDo(Number(b.dataset.krok), false); });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-dalej]'); if (b) { idzDo(Number(b.dataset.dalej), true); return; }
    var k = e.target.closest('[data-konfiguruj]');
    if (k) { stan.model = k.dataset.konfiguruj; odswiez(); idzDo(2, true); }
  });
  $('#pasekDalej').addEventListener('click', function () {
    if (stan.krok < 4) idzDo(stan.krok + 1, true); else idzDo(4, true);
  });
  $$('input[name="sterowanie"], input[name="pokrywki"]').forEach(function (i) { i.addEventListener('change', rysujSume); });

  /* ---------- zapytanie: mailto z gotową treścią (nic nie jest wysyłane z tej strony) ---------- */
  $('#formZap').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, imie = f.imie.value.trim(), tel = f.tel.value.trim();
    if (!imie || !tel) { $('#formBlad').hidden = false; (imie ? f.tel : f.imie).focus(); return; }
    $('#formBlad').hidden = true;
    var s = sumy(), m = model(), wk = wykonanie();
    var linie = ['Dzień dobry,', '', 'proszę o wycenę konserwatora w konfiguracji:', '',
      'Model: ' + m.nazwa + ' (' + m.komory + ' komór, ' + m.poj + ', ' + m.wym + ')',
      'Sterowanie: ' + wk.st, 'Pokrywki: ' + wk.pk, '', 'Wyposażenie dodatkowe:'];
    if (s.p.length > 1) s.p.slice(1).forEach(function (x) { linie.push('- ' + x.n + ': ' + zl(x.c) + ' netto'); });
    else linie.push('- brak');
    linie.push('', 'Orientacyjnie z konfiguratora: ' + zl(s.razem) + ' netto z wysyłką (' + zl(s.wysylka) + ')', '',
      'Imię i nazwisko: ' + imie, 'Telefon: ' + tel);
    if (f.email.value.trim()) linie.push('E-mail: ' + f.email.value.trim());
    if (f.miasto.value.trim()) linie.push('Miejscowość dostawy: ' + f.miasto.value.trim());
    if (f.uwagi.value.trim()) linie.push('', 'Uwagi: ' + f.uwagi.value.trim());
    linie.push('', 'Pozdrawiam');
    var url = 'mailto:rylex@interia.pl?subject=' + encodeURIComponent('Zapytanie o wycenę: konserwator ' + m.nazwa) +
      '&body=' + encodeURIComponent(linie.join('\r\n'));
    window.__ostatniMailto = url;
    location.href = url;
  });

  /* ---------- menu, pasek dolny ---------- */
  var burger = $('#burger'), menu = $('#menu');
  burger.addEventListener('click', function () {
    var o = !menu.classList.contains('otw'); menu.classList.toggle('otw', o); burger.setAttribute('aria-expanded', String(o));
    document.body.classList.toggle('menu-otw', o);
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) { menu.classList.remove('otw'); burger.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-otw'); } });

  if ('IntersectionObserver' in window) {
    var mob = $('#mob'), poHero = false, wKonf = false, pasek = $('#konfPasek');
    var ustaw = function () { mob.classList.toggle('widac', poHero && !wKonf); };
    new IntersectionObserver(function (e) { poHero = !e[0].isIntersecting && e[0].boundingClientRect.top < 0; ustaw(); }).observe($('#heroAkcje'));
    new IntersectionObserver(function (e) { wKonf = e[0].isIntersecting; ustaw(); pasek.classList.toggle('widac', wKonf); }, { rootMargin: '-30% 0px -30% 0px' }).observe($('.konf'));
  }

  odswiez();
  idzDo(1, false);
})();
