/*
 * German Lessons: shared registry + local progress tracker.
 *
 * TO ADD A NEW LESSON:
 *   1. Add an entry to LESSONS below (id, level, title, desc, topics, exercises, vocab).
 *   2. Create public/germanlessons/<id>/index.html (copy lesson1 as a template).
 *   3. In that page, call GL.saveAttempt("<id>", parts) when an attempt finishes
 *      (see lesson1) and render the history with GL.renderHistory(el, ["<id>"]).
 * The hub page (/germanlessons) and the vocabulary counters pick it up automatically.
 *
 * Progress is stored ONLY in this browser (localStorage). Nothing is sent to a server.
 */
(function () {
  var KEY = "germanlessons.v1";
  var MAX_ATTEMPTS = 60; // per lesson

  var LEVELS = [
    { id: "A1", name: "Beginner" },
    { id: "A2", name: "Elementary" },
    { id: "B1", name: "Intermediate" },
    { id: "B2", name: "Upper intermediate" }
  ];

  var CATS = [
    ["verbs", "Verbs"],
    ["nouns", "Nouns"],
    ["prepositions", "Prepositions"],
    ["adjectives", "Adjectives"]
  ];

  var LESSONS = [
    {
      id: "lesson1",
      level: "A1",
      title: "Verbs, pronouns & first sentences",
      desc: "Build your first German sentences: pronouns, the verb endings and the little words auch & oder.",
      topics: ["Subject + verb + object", "Pronouns", "Present-tense endings", "auch & oder"],
      // keys match the prefix of the exercise ids used in the lesson page
      exercises: [
        { key: "f", name: "Übung 1 · Fill in the verb" },
        { key: "c", name: "Übung 2 · Which verb fits?" },
        { key: "e", name: "Übung 3 · Pick the ending" },
        { key: "b", name: "Übung 4 · Build the sentence" },
        { key: "q", name: "Übung 5 · Quick quiz" }
      ],
      vocab: {
        verbs: ["wohnen", "leben", "gehen", "kommen", "hören", "machen", "kaufen", "trinken", "lernen", "studieren", "fragen", "heißen", "schreiben", "konjugieren"],
        nouns: ["Deutschland", "Deutsch", "Japan", "Berlin", "Cola", "Saft", "Bier", "Buch", "Musik", "Blume", "Kaffee", "Tee", "Wasser", "Sport", "Montag", "Lehrerin"],
        prepositions: ["aus", "in"],
        adjectives: []
      }
    },
    {
      id: "lesson2",
      level: "A1",
      title: "Der, die or das? Nouns & articles",
      desc: "Meet the three genders, a / an, the plural, and the endings that reveal a noun's article.",
      topics: ["der / die / das", "ein / eine", "Plural = die", "Endings that give it away"],
      exercises: [
        { key: "s", name: "Übung 1 · Der, die or das?" },
        { key: "m", name: "Übung 2 · Mystery words" },
        { key: "f", name: "Übung 3 · Fill in the article" },
        { key: "o", name: "Übung 4 · Odd one out" },
        { key: "b", name: "Übung 5 · Build the sentence" },
        { key: "q", name: "Übung 6 · Quick quiz" }
      ],
      vocab: {
        verbs: ["sein"],
        nouns: ["Baum", "Onkel", "Kollege", "Arzt", "Lehrer", "Nachbar", "Monitor", "Garten", "Mai", "Uhr", "Katze", "Kollegin", "Ärztin", "Studentin", "Wohnung", "Zeitung", "Übung", "Krankheit", "Bäckerei", "Buch", "Mädchen", "Brötchen", "Zentrum", "Dokument", "Semester"],
        prepositions: [],
        adjectives: ["groß", "klein", "teuer", "dick", "grün", "interessant", "schwer", "neu"]
      }
    }
  ];

  /* ---------- storage ---------- */
  var memory = { v: 1, attempts: {} }; // fallback if localStorage is blocked
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY));
      if (d && d.attempts && typeof d.attempts === "object") return d;
    } catch (e) {}
    return memory;
  }
  function save(d) {
    memory = d;
    try { localStorage.setItem(KEY, JSON.stringify(d)); return true; } catch (e) { return false; }
  }

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function lesson(id) { return LESSONS.filter(function (l) { return l.id === id; })[0]; }
  function pct(a) { return a.total ? Math.round((a.right / a.total) * 100) : 0; }
  function partPct(p) { return p && p[1] ? Math.round((p[0] / p[1]) * 100) : 0; }
  function stars(p) { return p >= 90 ? 3 : p >= 70 ? 2 : p >= 40 ? 1 : 0; }
  function starsHTML(p) {
    var n = stars(p);
    return '<span class="gl-star" aria-label="' + n + ' of 3 stars">' + "★".repeat(n) + "☆".repeat(3 - n) + "</span>";
  }
  function fmtDate(t) {
    try { return new Date(t).toLocaleDateString(undefined, { day: "numeric", month: "short", year: "numeric" }); }
    catch (e) { return ""; }
  }
  function attemptsOf(id) { return load().attempts[id] || []; }

  function saveAttempt(id, parts) {
    var d = load(), right = 0, total = 0, k;
    for (k in parts) { right += parts[k][0]; total += parts[k][1]; }
    var a = { t: Date.now(), right: right, total: total, parts: parts };
    var list = (d.attempts[id] || []).concat([a]);
    d.attempts[id] = list.slice(-MAX_ATTEMPTS);
    return { ok: save(d), attempt: a };
  }

  function clear(id) {
    var d = load();
    if (id) delete d.attempts[id]; else d.attempts = {};
    return save(d);
  }

  function stats(id) {
    var list = attemptsOf(id), ps = list.map(pct);
    return {
      count: list.length,
      best: ps.length ? Math.max.apply(null, ps) : 0,
      first: ps.length ? ps[0] : 0,
      last: ps.length ? ps[ps.length - 1] : 0,
      lastAt: list.length ? list[list.length - 1].t : 0
    };
  }

  function summary() {
    var practised = 0, attempts = 0, bests = [], tot = {}, got = {};
    CATS.forEach(function (c) { tot[c[0]] = Object.create(null); got[c[0]] = Object.create(null); });
    LESSONS.forEach(function (L) {
      var s = stats(L.id);
      CATS.forEach(function (c) {
        (L.vocab[c[0]] || []).forEach(function (w) {
          tot[c[0]][w] = 1;
          if (s.count) got[c[0]][w] = 1; // a lesson's words count once it has been practised
        });
      });
      if (s.count) { practised++; attempts += s.count; bests.push(s.best); }
    });
    return {
      lessons: LESSONS.length,
      practised: practised,
      attempts: attempts,
      avgBest: bests.length ? Math.round(bests.reduce(function (a, b) { return a + b; }, 0) / bests.length) : 0,
      vocab: CATS.map(function (c) {
        return { key: c[0], label: c[1], learned: Object.keys(got[c[0]]).length, total: Object.keys(tot[c[0]]).length };
      })
    };
  }

  /* ---------- rendering ---------- */
  function spark(values) {
    var W = 300, H = 56, P = 6;
    if (!values.length) return "";
    var step = values.length > 1 ? (W - 2 * P) / (values.length - 1) : 0;
    var pts = values.map(function (v, i) {
      return [values.length > 1 ? P + i * step : W / 2, H - P - (v / 100) * (H - 2 * P)];
    });
    var line = pts.map(function (p) { return p[0].toFixed(1) + "," + p[1].toFixed(1); }).join(" ");
    var dots = pts.map(function (p) {
      return '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.5" style="fill:var(--accent)"/>';
    }).join("");
    return '<svg class="gl-spark" viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Score progression: ' +
      values.join("%, ") + '%">' +
      (pts.length > 1 ? '<polyline points="' + line + '" fill="none" style="stroke:var(--accent)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>' : "") +
      dots + "</svg>";
  }

  function delta(series) {
    if (series.length < 2) return "";
    var d = series[series.length - 1] - series[0];
    if (d > 0) return '<span class="gl-up">▲ +' + d + " pts</span>";
    if (d < 0) return '<span class="gl-down">▼ ' + d + " pts</span>";
    return '<span class="gl-flat">= no change</span>';
  }

  function seq(series) {
    var shown = series.slice(-8), skipped = series.length - shown.length;
    return (skipped > 0 ? '<span class="gl-arrow">…</span>' : "") + shown.map(function (v, i) {
      var last = i === shown.length - 1;
      return (i || skipped > 0 ? '<span class="gl-arrow">→</span>' : "") + '<span class="gl-pt' + (last ? " last" : "") + '">' + v + "%</span>";
    }).join("");
  }

  function lessonHistoryHTML(L, withTitle) {
    var list = attemptsOf(L.id), s = stats(L.id);
    var h = '<div class="gl-hist card">';
    if (withTitle) {
      h += '<div class="kicker">' + esc(L.level) + " · Lesson " + esc(L.id.replace(/\D/g, "")) + "</div><h2>" + esc(L.title) + "</h2>";
    }
    if (!list.length) {
      return h + '<p class="muted" style="margin:6px 0 0">No attempts yet. Finish the exercises and your score will appear here.</p></div>';
    }
    var series = list.map(pct);
    h += '<div class="gl-sum">' +
      '<div class="gl-stat"><b>' + s.best + '%</b><small>Best</small></div>' +
      '<div class="gl-stat"><b>' + s.last + '%</b><small>Latest</small></div>' +
      '<div class="gl-stat"><b>' + s.count + "</b><small>Attempt" + (s.count > 1 ? "s" : "") + "</small></div>" +
      '<div class="gl-stat"><b>' + starsHTML(s.best) + "</b><small>Best stars</small></div></div>";
    h += '<h3>Overall progression ' + delta(series) + "</h3>" + spark(series) +
      '<div class="gl-seq">' + seq(series) + "</div>";

    h += "<h3>By exercise</h3>";
    L.exercises.forEach(function (ex) {
      var sr = list.map(function (a) { return a.parts && a.parts[ex.key]; }).filter(Boolean).map(partPct);
      if (!sr.length) return;
      var latest = sr[sr.length - 1];
      h += '<div class="gl-row"><div class="gl-row-h"><span>' + esc(ex.name) + "</span><span>" + delta(sr) + "</span></div>" +
        '<div class="gl-seq">' + seq(sr) + "</div>" +
        '<div class="gl-bar" title="Latest: ' + latest + '%"><i style="width:' + latest + '%"></i></div></div>';
    });

    h += '<details class="gl-att"><summary>All attempts (' + list.length + ")</summary><ul>" +
      list.slice().reverse().map(function (a, i) {
        return "<li><span>" + esc(fmtDate(a.t)) + "</span><b>" + a.right + " / " + a.total + " · " + pct(a) + "%</b> " + starsHTML(pct(a)) + "</li>";
      }).join("") + "</ul></details>";
    return h + "</div>";
  }

  function noteHTML() {
    return '<div class="gl-note">💾 <b>Saved on this device only.</b> Your scores live in this browser (local storage). ' +
      "They don't sync to other phones or computers, and clearing your browser data or using a private window removes them.</div>";
  }

  // ids: array of lesson ids, or null for all lessons that have attempts
  function historyHTML(ids, opts) {
    opts = opts || {};
    var list = ids ? ids.map(lesson).filter(Boolean) : LESSONS.filter(function (L) { return attemptsOf(L.id).length; });
    var h = noteHTML();
    if (!list.length) {
      return h + '<div class="card"><p class="muted" style="margin:0">No scores yet. Open a lesson, finish the exercises and your history will show up here.</p></div>';
    }
    h += list.map(function (L) { return lessonHistoryHTML(L, !!opts.titles); }).join("");
    h += '<div style="text-align:center"><button class="btn ghost gl-clear" data-clear="' + esc(ids && ids.length === 1 ? ids[0] : "") + '">🗑 Delete ' +
      (ids && ids.length === 1 ? "this lesson's" : "all") + " saved scores</button></div>";
    return h;
  }

  function renderHistory(el, ids, opts) {
    if (!el) return;
    el.innerHTML = historyHTML(ids, opts);
    var b = el.querySelector(".gl-clear");
    if (b) b.onclick = function () {
      var id = b.getAttribute("data-clear");
      if (confirm("Delete " + (id ? "the saved scores of this lesson" : "ALL saved scores") + " from this device? This can't be undone.")) {
        clear(id || null);
        renderHistory(el, ids, opts);
        if (opts && opts.onClear) opts.onClear();
      }
    };
  }

  window.GL = {
    LEVELS: LEVELS, CATS: CATS, LESSONS: LESSONS,
    lesson: lesson, stats: stats, summary: summary, attemptsOf: attemptsOf,
    saveAttempt: saveAttempt, clear: clear,
    historyHTML: historyHTML, renderHistory: renderHistory,
    pct: pct, starsHTML: starsHTML, fmtDate: fmtDate, esc: esc
  };
})();
