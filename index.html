<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>Каталог коллекционера</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml">

  <style>
    :root{
      --bg:#0b0f1a;
      --text:#eaf0ff;
      --muted:#9fb0d0;
      --brand:#7c5cff;
      --brand2:#00d4ff;
      --shadow: 0 10px 30px rgba(0,0,0,.35);
      --radius: 18px;

      --site-hero: radial-gradient(1200px 600px at 20% 0%, rgba(124,92,255,.25), transparent 60%),
                   radial-gradient(900px 500px at 90% 10%, rgba(0,212,255,.18), transparent 55%);

      --modal-inset: clamp(12px, 3.5vw, 28px);
      --sheet-radius: 22px;
    }

    *{box-sizing:border-box}
    body{
      margin:0;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans", "Helvetica Neue", sans-serif;
      background: var(--site-hero), var(--bg);
      color:var(--text);
      overflow-x:hidden;
    }

    header{
      position:sticky; top:0; z-index:10;
      backdrop-filter: blur(10px);
      background: rgba(11,15,26,.72);
      border-bottom: 1px solid rgba(255,255,255,.06);
    }
    .wrap{max-width:1200px; margin:0 auto; padding:16px;}

    .top{
      display:flex; gap:12px; align-items:center; justify-content:space-between;
      flex-wrap:wrap;
    }
    .brand{display:flex; align-items:center; gap:10px; min-width:0;}
    .logo{
      width:38px; height:38px; border-radius:12px;
      background: linear-gradient(135deg, var(--brand), var(--brand2));
      box-shadow: var(--shadow);
      flex:0 0 auto;
    }
    h1{font-size:18px; margin:0; line-height:1.15}
    .sub{color:var(--muted); font-size:13px; margin-top:2px}

    .row{display:flex; gap:10px; flex-wrap:wrap; align-items:center}

    .tabs{
      display:flex; gap:8px; flex-wrap:wrap;
      padding: 6px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,.10);
      background: rgba(18,26,42,.55);
      width: fit-content;
    }
    .tab{
      border: none;
      padding: 9px 12px;
      border-radius: 999px;
      cursor:pointer;
      color: var(--muted);
      background: transparent;
      font-weight: 800;
    }
    .tab[aria-selected="true"]{
      color: var(--text);
      background: linear-gradient(135deg, rgba(124,92,255,.85), rgba(0,212,255,.55));
    }

    input, select, button, textarea{
      border-radius: 14px;
      border: 1px solid rgba(255,255,255,.10);
      background: rgba(18,26,42,.85);
      color: var(--text);
      padding: 11px 12px;
      outline:none;
      min-width: 0;
    }
    textarea{min-height:90px; resize: vertical}
    input::placeholder{color:rgba(159,176,208,.75)}

    .btn{
      cursor:pointer;
      border: none;
      font-weight: 900;
      padding: 11px 14px;
      transition: transform .06s ease;
      background: linear-gradient(135deg, rgba(124,92,255,.95), rgba(0,212,255,.70));
    }
    .btn:active{transform: scale(.98)}
    .btnGhost{
      background: rgba(18,26,42,.75);
      border: 1px solid rgba(255,255,255,.12);
      font-weight: 900;
      cursor:pointer;
    }

    .pill{
      display:inline-flex; gap:8px; align-items:center;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.08);
      color: var(--muted);
      font-size: 12px;
      user-select:none;
    }

    .controls{
      display:grid;
      grid-template-columns: 1.3fr .85fr .95fr auto auto;
      gap:10px;
      align-items:center;
      width:100%;
      margin-top:12px;
    }
    @media (max-width: 980px){
      .controls{grid-template-columns: 1fr 1fr 1fr; }
    }
    @media (max-width: 560px){
      .controls{grid-template-columns: 1fr; }
      .row{width:100%}
      .tabs{width:100%}
      .tab{flex:1}
      #addBtn{flex:1}
    }

    main{padding: 16px 0 40px}

    .grid{
      display:grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 14px;
    }
    .card{
      grid-column: span 4;
      background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02));
      border: 1px solid rgba(255,255,255,.08);
      border-radius: var(--radius);
      overflow:hidden;
      box-shadow: var(--shadow);
      min-width: 0;
    }
    @media (max-width: 980px){ .card{grid-column: span 6;} }
    @media (max-width: 620px){ .card{grid-column: span 12;} }

    .thumb{
      height: 130px;
      background: linear-gradient(135deg, rgba(124,92,255,.25), rgba(0,212,255,.18));
      display:flex; align-items:flex-end; justify-content:space-between;
      padding: 12px;
      gap:10px;
      position:relative;
    }
    .thumb.hasPhoto{
      background-size: cover;
      background-position: center;
    }
    .thumb.hasPhoto::before{
      content:"";
      position:absolute; inset:0;
      background: linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.55));
    }
    .thumb > *{position:relative; z-index:1;}

    .badge{
      font-size: 12px;
      padding: 6px 10px;
      border-radius: 999px;
      background: rgba(0,0,0,.25);
      border: 1px solid rgba(255,255,255,.10);
      white-space:nowrap;
    }

    .body{padding: 12px 12px 14px}
    .title{font-weight: 950; margin:0; font-size: 15px; line-height: 1.25}
    .meta{color: var(--muted); font-size: 12.5px; margin-top:6px; line-height:1.35}
    .actions{display:flex; gap:8px; margin-top:12px; flex-wrap:wrap}
    .actions button{flex:1}

    .empty{
      padding: 22px;
      border-radius: var(--radius);
      border: 1px dashed rgba(255,255,255,.18);
      background: rgba(255,255,255,.03);
      color: var(--muted);
    }

    /* ===== Modal / Window (desktop) + Bottom sheet (mobile) ===== */
    .modalBackdrop{
      position: fixed; inset:0;
      background: rgba(0,0,0,.55);
      display:none;
      align-items:center; justify-content:center;
      padding: var(--modal-inset);
      z-index:100;
      overscroll-behavior: contain;
    }
    .modalBackdrop[aria-hidden="false"]{display:flex;}

    .modal{
      width: min(920px, calc(100vw - (var(--modal-inset) * 2)));
      max-height: calc(100dvh - (var(--modal-inset) * 2));
      border-radius: 22px;
      border: 1px solid rgba(255,255,255,.10);
      background: rgba(18,26,42,.94);
      box-shadow: var(--shadow);
      overflow: hidden;
      display:flex;
      flex-direction: column;
      min-width: 0;
      transform: translateY(0);
      will-change: transform;
    }

    .modalTop{
      padding: 12px 14px;
      display:flex; align-items:center; justify-content:space-between; gap:12px;
      border-bottom: 1px solid rgba(255,255,255,.08);
      background: rgba(255,255,255,.03);
      flex: 0 0 auto;
      position: relative;
    }

    .handle{
      position:absolute;
      left: 50%;
      top: 8px;
      transform: translateX(-50%);
      width: 52px;
      height: 6px;
      border-radius: 999px;
      background: rgba(255,255,255,.18);
      display:none;
    }

    .modalTop strong{font-size: 14px; padding-top: 6px;}
    .x{
      width: 38px; height: 38px; border-radius: 14px;
      border: 1px solid rgba(255,255,255,.14);
      background: rgba(0,0,0,.18);
      color: var(--text);
      cursor:pointer;
      display:grid; place-items:center;
      font-weight:900;
      flex: 0 0 auto;
      -webkit-tap-highlight-color: transparent;
    }

    .modalContent{
      padding: 14px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      flex: 1 1 auto;
      min-height: 0;
    }

    .formGrid{
      display:grid; gap:12px;
      grid-template-columns: repeat(12, 1fr);
      min-width: 0;
    }
    .field{grid-column: span 6; display:flex; flex-direction:column; gap:6px; min-width:0}
    .field.full{grid-column: span 12}
    @media (max-width: 760px){ .field{grid-column: span 12} }

    label{color: var(--muted); font-size: 12px}
    .help{color: rgba(159,176,208,.75); font-size: 12px}

    .photoCard{
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,.10);
      background: rgba(0,0,0,.12);
      padding: 12px;
      display:grid;
      grid-template-columns: 140px 1fr;
      gap: 12px;
      align-items: start;
      min-width: 0;
    }
    @media (max-width: 560px){
      .photoCard{grid-template-columns: 1fr;}
    }
    .photoPreview{
      width: 140px; height: 140px;
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,.12);
      background: rgba(0,0,0,.18);
      background-size: cover;
      background-position:center;
      box-shadow: var(--shadow);
    }
    @media (max-width: 560px){
      .photoPreview{width: 100%; height: 180px;}
    }
    .photoActions{
      display:flex;
      gap:10px;
      flex-wrap: wrap;
      min-width:0;
    }
    .photoActions button{
      flex: 1 1 160px;
      white-space: nowrap;
    }
    .fileHidden{display:none;}
    .hide{display:none !important;}

    /* Mobile bottom-sheet mode */
    @media (max-width: 560px){
      .modalBackdrop{
        align-items:flex-end;
        padding: 0;
      }
      .modal{
        width: 100vw;
        max-height: 92dvh;
        border-radius: var(--sheet-radius) var(--sheet-radius) 0 0;
        border-left: none;
        border-right: none;
        border-bottom: none;
      }
      .handle{display:block;}
      .modalTop strong{padding-top: 12px;}
    }
  </style>
</head>

<body>
<header>
  <div class="wrap">
    <div class="top">
      <div class="brand">
        <div class="logo" aria-hidden="true"></div>
        <div style="min-width:0;">
          <h1>Каталог коллекционера</h1>
          <div class="sub">каталог • вишлист • коллекция • заметки</div>
        </div>
      </div>

      <div class="row">
        <div class="tabs" role="tablist" aria-label="Режимы">
          <button class="tab" aria-selected="true" data-view="all">Каталог</button>
          <button class="tab" aria-selected="false" data-view="wish">Вишлист</button>
          <button class="tab" aria-selected="false" data-view="owned">Коллекция</button>
        </div>
        <button class="btn" id="addBtn">＋ Добавить</button>
      </div>
    </div>

    <div class="controls" role="search">
      <input id="q" placeholder="Поиск: имя / линейка / персонаж…" autocomplete="off"/>
      <select id="brand"><option value="all">Все бренды</option></select>
      <select id="sort">
        <option value="name_asc">Имя: A→Я</option>
        <option value="name_desc">Имя: Я→A</option>
        <option value="recent">Недавние</option>
      </select>
      <button class="btnGhost" id="exportBtn">Экспорт JSON</button>
      <button class="btnGhost" id="importBtn">Импорт JSON</button>
      <input id="importFile" type="file" accept="application/json" hidden />
    </div>

    <div style="margin-top:12px; display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
      <span class="pill" id="stats"></span>
      <span class="pill">Офлайн (localStorage)</span>
    </div>
  </div>
</header>

<main class="wrap">
  <section id="list" class="grid" aria-live="polite"></section>
  <div id="empty" class="empty" style="display:none; margin-top:14px;">Пусто.</div>
</main>

<!-- Modal -->
<div class="modalBackdrop" id="modal" aria-hidden="true">
  <div class="modal" role="dialog" aria-modal="true" aria-labelledby="mTitle" id="sheet">
    <div class="modalTop" id="sheetTop">
      <div class="handle" aria-hidden="true"></div>
      <strong id="mTitle">Добавить</strong>
      <button class="x" id="mClose" aria-label="Закрыть">×</button>
    </div>

    <div class="modalContent">
      <div class="formGrid">
        <div class="field">
          <label>Тип</label>
          <select id="f_type">
            <option value="doll">Кукла</option>
            <option value="accessory">Аксессуар</option>
          </select>
        </div>

        <div class="field">
          <label>Название</label>
          <input id="f_name" placeholder="Напр: Draculaura (Core)" />
        </div>

        <div class="field">
          <label>Бренд</label>
          <select id="f_brand">
            <option>Monster High</option>
            <option>Ever After High</option>
            <option>Barbie</option>
            <option>Другие</option>
          </select>
        </div>

        <div class="field">
          <label>Линейка / серия</label>
          <input id="f_line" placeholder="Напр: G1 базовая / Creeproduction..." />
        </div>

        <div class="field" id="fieldChar">
          <label>Персонаж</label>
          <input id="f_char" placeholder="Напр: Frankie / Clawdeen..." />
        </div>

        <div class="field">
          <label>Год</label>
          <div style="display:flex; gap:8px; min-width:0;">
            <button class="btnGhost" id="yearDec" type="button" style="width:44px; padding:0;">−</button>
            <input id="f_year" type="number" min="1950" max="2100" placeholder="2012"
                   style="flex:1; text-align:center; font-weight:900;">
            <button class="btnGhost" id="yearInc" type="button" style="width:44px; padding:0;">+</button>
          </div>
        </div>

        <!-- Фото -->
        <div class="field full" id="photoBlock">
          <label>Фотография</label>
          <div class="photoCard">
            <div class="photoPreview" id="photoPreview" aria-label="Photo preview"></div>

            <div style="min-width:0;">
              <div class="photoActions">
                <button class="btnGhost" id="pickPhotoBtn" type="button">Выбрать фото</button>
                <button class="btnGhost" id="clearPhotoBtn" type="button">Убрать фото</button>
              </div>
              <div class="help" style="margin-top:8px;">Фото хранится локально. Лучше до ~1–2 МБ.</div>
              <input id="f_photo" class="fileHidden" type="file" accept="image/*" />
            </div>
          </div>
        </div>

        <div class="field full">
          <label>Заметки</label>
          <textarea id="f_notes" placeholder="Состояние, дефекты, что докупить..."></textarea>
        </div>

        <div class="field full">
          <label>Теги (через запятую)</label>
          <input id="f_tags" placeholder="Напр: g1, core, box" />
        </div>

        <div class="field full" style="display:flex; gap:10px; flex-wrap:wrap; margin-top:4px;">
          <button class="btn" id="saveBtn">Сохранить</button>
          <button class="btnGhost" id="cancelBtn">Отмена</button>
        </div>

      </div>
    </div>
  </div>
</div>

<script>
/* =========================
   Compatibility fixes
   ========================= */
// ✅ polyfill replaceAll (старые телефоны/браузеры)
if (!String.prototype.replaceAll) {
  // eslint-disable-next-line no-extend-native
  String.prototype.replaceAll = function (search, replacement) {
    return this.split(search).join(replacement);
  };
}

const LS_KEY = "collector_global_offline_v3";
const $ = (s)=>document.querySelector(s);

function uid(){ return "id_" + Math.random().toString(16).slice(2) + "_" + Date.now().toString(16); }

/* =========================
   Prebuilt catalog (50 dolls)
   ========================= */
function prebuiltCatalog50(){
  const B = "Monster High";
  const mk = (id, name, line, year, character) => ({
    id,
    createdAt: 0,
    isPrebuilt: true,
    type: "doll",
    name,
    brand: B,
    line,
    character,
    year,
    status: "none",        // none | wish | owned
    notes: "",
    tags: ["monster high"],
    photoDataUrl: null
  });

  return [
    // G1 core / main cast
    mk("mh_g1_core_draculaura", "Draculaura (Core G1)", "G1 базовая", 2010, "Draculaura"),
    mk("mh_g1_core_frankie", "Frankie Stein (Core G1)", "G1 базовая", 2010, "Frankie Stein"),
    mk("mh_g1_core_clawdeen", "Clawdeen Wolf (Core G1)", "G1 базовая", 2010, "Clawdeen Wolf"),
    mk("mh_g1_core_lagoona", "Lagoona Blue (Core G1)", "G1 базовая", 2010, "Lagoona Blue"),
    mk("mh_g1_core_cleo", "Cleo de Nile (Core G1)", "G1 базовая", 2010, "Cleo de Nile"),
    mk("mh_g1_core_deuce", "Deuce Gorgon (Core G1)", "G1 базовая", 2010, "Deuce Gorgon"),
    mk("mh_g1_core_ghoulia", "Ghoulia Yelps (Core G1)", "G1 базовая", 2011, "Ghoulia Yelps"),
    mk("mh_g1_core_abbey", "Abbey Bominable (Core G1)", "G1 базовая", 2012, "Abbey Bominable"),
    mk("mh_g1_core_spectra", "Spectra Vondergeist (Core G1)", "G1 базовая", 2011, "Spectra Vondergeist"),
    mk("mh_g1_core_toralei", "Toralei Stripe (Core G1)", "G1 базовая", 2011, "Toralei Stripe"),
    mk("mh_g1_core_rochelle", "Rochelle Goyle (Core G1)", "G1 базовая", 2012, "Rochelle Goyle"),
    mk("mh_g1_core_venus", "Venus McFlytrap (Core G1)", "G1 базовая", 2012, "Venus McFlytrap"),
    mk("mh_g1_core_robecca", "Robecca Steam (Core G1)", "G1 базовая", 2011, "Robecca Steam"),
    mk("mh_g1_nefera", "Nefera de Nile", "G1", 2012, "Nefera de Nile"),
    mk("mh_g1_howleen", "Howleen Wolf", "G1", 2012, "Howleen Wolf"),
    mk("mh_g1_catty", "Catty Noir", "G1", 2013, "Catty Noir"),
    mk("mh_g1_twyla", "Twyla", "G1", 2013, "Twyla"),
    mk("mh_g1_cupid", "C.A. Cupid", "G1", 2011, "C.A. Cupid"),
    mk("mh_g1_honey", "Honey Swamp", "G1", 2013, "Honey Swamp"),
    mk("mh_g1_viperine", "Viperine Gorgon", "G1", 2013, "Viperine Gorgon"),
    mk("mh_g1_jinafire", "Jinafire Long", "G1", 2012, "Jinafire Long"),
    mk("mh_g1_skelita", "Skelita Calaveras", "G1", 2013, "Skelita Calaveras"),
    mk("mh_g1_catrine", "Catrine DeMew", "G1", 2013, "Catrine DeMew"),
    mk("mh_g1_jane", "Jane Boolittle", "G1", 2014, "Jane Boolittle"),
    mk("mh_g1_gigi", "Gigi Grant", "G1", 2014, "Gigi Grant"),
    mk("mh_g1_vandala", "Vandala Doubloons", "G1", 2015, "Vandala Doubloons"),
    mk("mh_g1_kiyomi", "Kiyomi Haunterly", "G1", 2015, "Kiyomi Haunterly"),
    mk("mh_g1_river", "River Styxx", "G1", 2015, "River Styxx"),
    mk("mh_g1_porter", "Porter Geiss", "G1", 2015, "Porter Geiss"),
    mk("mh_g1_isi", "Isi Dawndancer", "G1", 2014, "Isi Dawndancer"),
    mk("mh_g1_marisol", "Marisol Coxi", "G1", 2014, "Marisol Coxi"),
    mk("mh_g1_kala", "Kala Mer'ri", "G1", 2015, "Kala Mer'ri"),
    mk("mh_g1_lorna", "Lorna McNessie", "G1", 2013, "Lorna McNessie"),
    mk("mh_g1_sirena", "Sirena Von Boo", "G1", 2014, "Sirena Von Boo"),
    mk("mh_g1_iris", "Iris Clops", "G1", 2012, "Iris Clops"),
    mk("mh_g1_manny", "Manny Taur", "G1", 2011, "Manny Taur"),
    mk("mh_g1_operetta", "Operetta", "G1", 2012, "Operetta"),
    mk("mh_g1_mousecedes", "Mousecedes King", "G1", 2015, "Mousecedes King"),
    mk("mh_g1_astranova", "Astranova", "G1", 2015, "Astranova"),
    mk("mh_g1_batsy", "Batsy Claro", "G1", 2015, "Batsy Claro"),
    mk("mh_g1_clawdia", "Clawdia Wolf", "G1", 2014, "Clawdia Wolf"),
    mk("mh_g1_elissabat", "Elissabat", "G1", 2014, "Elissabat"),

    // Creeproduction
    mk("mh_creep_draculaura", "Draculaura (Creeproduction)", "Creeproduction (G1)", 2022, "Draculaura"),
    mk("mh_creep_frankie", "Frankie Stein (Creeproduction)", "Creeproduction (G1)", 2022, "Frankie Stein"),
    mk("mh_creep_clawdeen", "Clawdeen Wolf (Creeproduction)", "Creeproduction (G1)", 2022, "Clawdeen Wolf"),
    mk("mh_creep_lagoona", "Lagoona Blue (Creeproduction)", "Creeproduction (G1)", 2022, "Lagoona Blue"),

    // G3 core
    mk("mh_g3_core_draculaura", "Draculaura (Core G3)", "G3 базовая", 2022, "Draculaura"),
    mk("mh_g3_core_frankie", "Frankie Stein (Core G3)", "G3 базовая", 2022, "Frankie Stein"),
    mk("mh_g3_core_clawdeen", "Clawdeen Wolf (Core G3)", "G3 базовая", 2022, "Clawdeen Wolf"),
    mk("mh_g3_core_lagoona", "Lagoona Blue (Core G3)", "G3 базовая", 2022, "Lagoona Blue"),
    mk("mh_g3_core_cleo", "Cleo de Nile (Core G3)", "G3 базовая", 2022, "Cleo de Nile"),
    mk("mh_g3_core_deuce", "Deuce Gorgon (Core G3)", "G3 базовая", 2022, "Deuce Gorgon"),
  ].slice(0, 50);
}

function ensurePrebuilt(arr){
  const base = prebuiltCatalog50();
  const map = new Map();
  // keep existing
  for (const x of (Array.isArray(arr) ? arr : [])) {
    if (x && x.id) map.set(x.id, x);
  }
  // merge base
  for(const item of base){
    if(!map.has(item.id)){
      map.set(item.id, item);
    }else{
      const keep = map.get(item.id);
      map.set(item.id, {
        ...item,
        status: keep.status ?? item.status,
        notes: keep.notes ?? "",
        tags: Array.isArray(keep.tags) ? keep.tags : item.tags,
        photoDataUrl: keep.photoDataUrl || null
      });
    }
  }
  return Array.from(map.values());
}

function loadDB(){
  try{
    const raw = localStorage.getItem(LS_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    const merged = ensurePrebuilt(arr);
    localStorage.setItem(LS_KEY, JSON.stringify(merged));
    return merged;
  }catch{
    const merged = ensurePrebuilt([]);
    localStorage.setItem(LS_KEY, JSON.stringify(merged));
    return merged;
  }
}
function saveDB(arr){ localStorage.setItem(LS_KEY, JSON.stringify(arr)); }

/* =========================
   App State + DOM
   ========================= */
let db = loadDB();
let view = "all";
let editingId = null;
let pendingPhotoDataUrl = null;

const listEl = $("#list");
const emptyEl = $("#empty");
const statsEl = $("#stats");

const modal = $("#modal");
const sheet = $("#sheet");
const sheetTop = $("#sheetTop");
const mTitle = $("#mTitle");

const addBtn = $("#addBtn");
const saveBtn = $("#saveBtn");
const cancelBtn = $("#cancelBtn");
const mClose = $("#mClose");

const qEl = $("#q");
const brandEl = $("#brand");
const sortEl = $("#sort");

const yearDec = $("#yearDec");
const yearInc = $("#yearInc");

const photoInput = $("#f_photo");
const photoPreview = $("#photoPreview");
const pickPhotoBtn = $("#pickPhotoBtn");
const clearPhotoBtn = $("#clearPhotoBtn");

const f = {
  type: $("#f_type"),
  name: $("#f_name"),
  brand: $("#f_brand"),
  line: $("#f_line"),
  char: $("#f_char"),
  year: $("#f_year"),
  notes: $("#f_notes"),
  tags: $("#f_tags")
};

function esc(s){
  const str = String(s ?? "");
  return str
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

function rebuildBrandFilter(){
  const brands = ["all"].concat(
    Array.from(new Set(db.map(x=>x.brand).filter(Boolean)))
      .sort((a,b)=>a.localeCompare(b,"ru"))
  );
  const current = brandEl.value || "all";
  brandEl.innerHTML = "";
  for(const b of brands){
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = (b==="all") ? "Все бренды" : b;
    brandEl.appendChild(opt);
  }
  brandEl.value = brands.includes(current) ? current : "all";
}

function matchesQuery(item, q){
  if(!q) return true;
  const hay = [
    item.name, item.brand, item.line, item.character,
    item.notes, (item.tags||[]).join(" "), String(item.year ?? "")
  ].join(" ").toLowerCase();
  return hay.indexOf(q.toLowerCase().trim()) !== -1;
}

function getFiltered(){
  const q = qEl.value.trim();
  const b = brandEl.value;

  let arr = db.slice();

  if(view === "all") arr = arr.filter(x => (x.type||"doll")==="doll");
  else if(view === "wish") arr = arr.filter(x => x.status==="wish");
  else if(view === "owned") arr = arr.filter(x => x.status==="owned");

  arr = arr.filter(x => matchesQuery(x,q));
  if(b !== "all") arr = arr.filter(x => x.brand === b);

  const s = sortEl.value;
  if(s==="recent") arr.sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
  if(s==="name_asc") arr.sort((a,b)=>(a.name||"").localeCompare(b.name||"","ru"));
  if(s==="name_desc") arr.sort((a,b)=>(b.name||"").localeCompare(a.name||"","ru"));

  return arr;
}

function render(){
  rebuildBrandFilter();
  const arr = getFiltered();

  statsEl.textContent = `${view}: ${arr.length}/${db.length}`;
  listEl.innerHTML = "";
  emptyEl.style.display = arr.length ? "none" : "block";

  for(const it of arr){
    const card = document.createElement("article");
    card.className = "card";

    const thumbClass = it.photoDataUrl ? "thumb hasPhoto" : "thumb";
    const safeBg = it.photoDataUrl
      ? String(it.photoDataUrl).replace(/'/g, "\\'")
      : "";
    const bg = it.photoDataUrl ? `style="background-image:url('${safeBg}')"` : "";

    card.innerHTML = `
      <div class="${thumbClass}" ${bg}>
        <span class="badge">${esc(it.line || "—")}</span>
        <span class="badge">${esc(it.year ?? "—")}</span>
      </div>
      <div class="body">
        <h3 class="title">${esc(it.name || "(без названия)")}</h3>
        <div class="meta">${esc(it.brand || "—")} • ${esc(it.character || "—")}</div>
        <div class="actions">
          <button class="btnGhost" data-action="wish" data-id="${esc(it.id)}">
            ${it.status==="wish" ? "Убрать из wish" : "В wish"}
          </button>
          <button class="btnGhost" data-action="owned" data-id="${esc(it.id)}">
            ${it.status==="owned" ? "Убрать из колл." : "В коллекцию"}
          </button>
          <button class="btn" data-action="edit" data-id="${esc(it.id)}">Редактировать</button>
        </div>
      </div>
    `;
    listEl.appendChild(card);
  }
}

/* =========================
   Modal + form
   ========================= */
function setPhotoPreview(dataUrl){
  photoPreview.style.backgroundImage = dataUrl ? `url('${dataUrl}')` : "";
}
function fileToDataUrl(file){
  return new Promise((resolve, reject)=>{
    const reader = new FileReader();
    reader.onload = ()=> resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function fillForm(item){
  f.type.value = item.type || "doll";
  f.name.value = item.name || "";
  f.brand.value = item.brand || "Monster High";
  f.line.value = item.line || "";
  f.char.value = item.character || "";
  f.year.value = (item.year == null) ? "" : String(item.year);
  f.notes.value = item.notes || "";
  f.tags.value = (item.tags || []).join(", ");
}

function readForm(){
  const year = f.year.value === "" ? null : Number(f.year.value);
  const tags = f.tags.value.split(",").map(x=>x.trim()).filter(Boolean);
  return {
    type: f.type.value,
    name: f.name.value.trim(),
    brand: f.brand.value,
    line: f.line.value.trim(),
    character: f.char.value.trim(),
    year: (year != null && !Number.isNaN(year)) ? year : null,
    notes: f.notes.value.trim(),
    tags,
    photoDataUrl: pendingPhotoDataUrl || null
  };
}

function openModal(mode, item){
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  resetSheetPosition();

  pendingPhotoDataUrl = null;
  photoInput.value = "";
  setPhotoPreview(null);

  if(mode==="add"){
    editingId = null;
    mTitle.textContent = "Добавить";
    fillForm({});
  }else{
    editingId = item.id;
    mTitle.textContent = "Редактировать";
    fillForm(item);
    pendingPhotoDataUrl = item.photoDataUrl || null;
    setPhotoPreview(pendingPhotoDataUrl);
  }
}

function closeModal(){
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
  editingId = null;
  pendingPhotoDataUrl = null;
  resetSheetPosition(true);
}

function saveItem(){
  const data = readForm();
  if(!data.name) return;

  if(editingId){
    const idx = db.findIndex(x=>x.id===editingId);
    if(idx>=0){
      const current = db[idx];
      // prebuilt: allow notes/tags/photo only
      if(current.isPrebuilt){
        db[idx] = {
          ...current,
          notes: data.notes,
          tags: data.tags,
          photoDataUrl: data.photoDataUrl
        };
      }else{
        db[idx] = { ...current, ...data };
      }
    }
  }else{
    db.unshift({
      id: uid(),
      createdAt: Date.now(),
      isPrebuilt: false,
      status: "none",
      ...data
    });
  }
  saveDB(db);
  closeModal();
  render();
}

function stepYear(delta){
  const cur = (f.year.value === "" ? new Date().getFullYear() : Number(f.year.value));
  f.year.value = String(cur + delta);
}

/* =========================
   Bottom sheet swipe-to-close (mobile)
   ========================= */
let dragging = false;
let startY = 0;
let lastY = 0;
let startT = 0;
let currentTranslate = 0;

function isMobileSheet(){
  return window.matchMedia("(max-width: 560px)").matches;
}
function setSheetTranslate(y){
  currentTranslate = Math.max(0, y);
  sheet.style.transform = `translateY(${currentTranslate}px)`;
}
function resetSheetPosition(forceZero=false){
  sheet.style.transition = forceZero ? "" : "transform .18s ease";
  setSheetTranslate(0);
  if(!forceZero){
    setTimeout(()=>{ sheet.style.transition = ""; }, 220);
  }
}
function closeWithAnimation(){
  if(!isMobileSheet()){
    closeModal();
    return;
  }
  const h = sheet.getBoundingClientRect().height;
  sheet.style.transition = "transform .18s ease";
  setSheetTranslate(h);
  setTimeout(()=> closeModal(), 180);
}
function onTouchStart(e){
  if(!isMobileSheet()) return;
  if(modal.getAttribute("aria-hidden") !== "false") return;
  dragging = true;
  startY = e.touches[0].clientY;
  lastY = startY;
  startT = performance.now();
  sheet.style.transition = "";
}
function onTouchMove(e){
  if(!dragging || !isMobileSheet()) return;
  const y = e.touches[0].clientY;
  const dy = y - startY;
  lastY = y;
  if(dy > 0){
    e.preventDefault();
    setSheetTranslate(dy);
  }
}
function onTouchEnd(){
  if(!dragging || !isMobileSheet()) return;
  dragging = false;

  const dy = lastY - startY;
  const dt = Math.max(1, performance.now() - startT);
  const velocity = dy / dt;

  const h = sheet.getBoundingClientRect().height;
  const closeThreshold = Math.min(180, h * 0.25);

  if(dy > closeThreshold || velocity > 0.8){
    closeWithAnimation();
  }else{
    resetSheetPosition();
  }
}

/* =========================
   Status toggles + Import/Export
   ========================= */
function toggleStatus(id, target){
  const idx = db.findIndex(x=>x.id===id);
  if(idx<0) return;
  const cur = db[idx].status || "none";
  db[idx].status = (cur === target) ? "none" : target;
  saveDB(db);
  render();
}

const exportBtn = $("#exportBtn");
const importBtn = $("#importBtn");
const importFile = $("#importFile");

function exportJSON(){
  const payload = { version: 1, exportedAt: new Date().toISOString(), items: db };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "collector_export.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importJSONFile(file){
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const parsed = JSON.parse(String(reader.result || ""));
      const arr = Array.isArray(parsed) ? parsed : parsed.items;
      if(!Array.isArray(arr)) throw new Error("bad");
      db = ensurePrebuilt(arr);
      saveDB(db);
      render();
    }catch{}
  };
  reader.readAsText(file);
}

/* =========================
   Event wiring
   ========================= */
addBtn.addEventListener("click", ()=>openModal("add", null));
mClose.addEventListener("click", closeModal);
cancelBtn.addEventListener("click", closeModal);
saveBtn.addEventListener("click", saveItem);

modal.addEventListener("click", (e)=>{ if(e.target === modal) closeModal(); });
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && modal.getAttribute("aria-hidden")==="false") closeModal();
});

listEl.addEventListener("click", (e)=>{
  const btn = e.target.closest("[data-action]");
  if(!btn) return;
  const id = btn.getAttribute("data-id");
  const action = btn.getAttribute("data-action");
  if(!id || !action) return;

  if(action==="wish") toggleStatus(id, "wish");
  if(action==="owned") toggleStatus(id, "owned");
  if(action==="edit"){
    const item = db.find(x=>x.id===id);
    if(item) openModal("edit", item);
  }
});

qEl.addEventListener("input", render);
brandEl.addEventListener("change", render);
sortEl.addEventListener("change", render);

yearDec.addEventListener("click", ()=>stepYear(-1));
yearInc.addEventListener("click", ()=>stepYear(+1));

pickPhotoBtn.addEventListener("click", ()=>photoInput.click());
photoInput.addEventListener("change", async ()=>{
  const file = photoInput.files && photoInput.files[0];
  if(!file) return;
  if(file.size > 2.5 * 1024 * 1024){
    photoInput.value = "";
    return;
  }
  const dataUrl = await fileToDataUrl(file);
  pendingPhotoDataUrl = dataUrl;
  setPhotoPreview(dataUrl);
});
clearPhotoBtn.addEventListener("click", ()=>{
  pendingPhotoDataUrl = null;
  photoInput.value = "";
  setPhotoPreview(null);
});

exportBtn.addEventListener("click", exportJSON);
importBtn.addEventListener("click", ()=>importFile.click());
importFile.addEventListener("change", (e)=>{
  const file = e.target.files && e.target.files[0];
  if(file) importJSONFile(file);
  importFile.value = "";
});

// tabs
const tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
tabs.forEach(tbtn => tbtn.addEventListener("click", ()=>{
  view = tbtn.getAttribute("data-view");
  tabs.forEach(x=>x.setAttribute("aria-selected", x===tbtn ? "true":"false"));
  render();
}));

// bottom sheet gestures (header only)
sheetTop.addEventListener("touchstart", onTouchStart, {passive:false});
sheetTop.addEventListener("touchmove", onTouchMove, {passive:false});
sheetTop.addEventListener("touchend", onTouchEnd);
sheetTop.addEventListener("touchcancel", onTouchEnd);

window.addEventListener("resize", ()=>{
  if(modal.getAttribute("aria-hidden")==="false") resetSheetPosition();
});

// init
render();
</script>
</body>
</html>
