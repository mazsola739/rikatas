// Rikatas - a Codewars megoldasaim
// Az adatok a data.js fajlban vannak: gyujtemenyek


// ---------- Tabok ----------

function mutatTab(nev) {
  // minden tabot elrejtek...
  document.getElementById("katak").style.display = "none";
  document.getElementById("statisztika").style.display = "none";
  document.getElementById("hogyan").style.display = "none";

  document.getElementById("gomb-katak").className = "";
  document.getElementById("gomb-statisztika").className = "";
  document.getElementById("gomb-hogyan").className = "";

  // ...es csak a kivalasztottat mutatom
  document.getElementById(nev).style.display = "block";
  document.getElementById("gomb-" + nev).className = "aktiv";
}


// ---------- Sotet / vilagos mod ----------

function modValtas() {
  document.body.classList.toggle("vilagos");
}


// ---------- Segito fuggvenyek ----------

// a kodban levo < es > jelek ne rontsak el a HTML-t
function biztonsagos(szoveg) {
  return szoveg.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

// hatszog alaku kyu cimke, pl. "8 kyu" -> class="kyu k8"
function kyuCimke(kyu) {
  return `<span class="kyu k${kyu[0]}"><span>${kyu}</span></span>`;
}

// az idezojeles szavakat ("abc") kis kod-dobozba rakom, mint a Codewarson
function kodKiemeles(szoveg) {
  return szoveg.replace(/"([^"\s]{1,30})"/g, '<code>"$1"</code>');
}

// a feladat leirasa a Codewarshoz hasonloan:
// sima szoveg -> bekezdes, kod -> sotet doboz, behuzott sorok -> lista
function leirasHtml(szoveg) {
  let html = "";

  for (const resz of szoveg.split("\n\n")) {
    if (resz.trim() === "") {
      continue;
    }

    if (/==|=>|[{}]|;\s*$|^\[|^\/\//m.test(resz)) {
      html += `<pre>${biztonsagos(resz)}</pre>`;
    } else if (resz.startsWith(" ") || resz.startsWith("\t")) {
      html += "<ul>";
      for (const sor of resz.split("\n")) {
        if (sor.trim() !== "") {
          html += `<li>${kodKiemeles(biztonsagos(sor.trim()))}</li>`;
        }
      }
      html += "</ul>";
    } else {
      html += `<p>${kodKiemeles(biztonsagos(resz))}</p>`;
    }
  }

  return html;
}

// kod doboz, mint a Codewars szerkesztoje: cim + sorszamok + szines kod
function kodDoboz(cim, kod) {
  let sorszamok = "";
  const sorokSzama = kod.split("\n").length;
  for (let i = 1; i <= sorokSzama; i++) {
    sorszamok += i + "\n";
  }

  return `
    <div class="szerkeszto">
      <div class="szerkeszto-cim">${cim}</div>
      <div class="szerkeszto-kod">
        <pre class="sorszamok">${sorszamok}</pre>
        <pre><code class="language-javascript">${biztonsagos(kod)}</code></pre>
      </div>
    </div>
  `;
}

// csik, mint a Codewars "Honor Breakdown": a felirat a csikon belul van
function csik(felirat, szazalek, kattintas) {
  return `
    <div class="sav" onclick="${kattintas}">
      <span style="width: ${szazalek}%"></span>
      <b>${felirat}</b>
    </div>
  `;
}


// ---------- 1. tab: Katak ----------

function kataHtml(kata) {
  let jel = '<span class="kesz">✔</span>';
  if (!kata.done) {
    jel = '<span class="nincs-kesz">✘</span>';
  }

  let cimkek = "";
  for (const nev of kata.methods.concat(kata.tech)) {
    cimkek += `<span class="cimke">${nev}</span>`;
  }

  let megoldas = "";
  if (kata.solution) {
    megoldas = kodDoboz("Az én megoldásom", kata.solution);
  } else if (kata.done) {
    megoldas = "<p>A Codewarson megoldottam, de a kódot nem mentettem el a repóba.</p>";
  } else {
    megoldas = "<p>Ez még nincs kész.</p>";
  }

  if (kata.refactor) {
    megoldas += kodDoboz("Refaktorálva", kata.refactor);
  }

  return `
    <details>
      <summary>${jel} ${kyuCimke(kata.kyu)} <b>${biztonsagos(kata.name)}</b></summary>
      <div class="reszletek">
        <h4>Leírás:</h4>
        <div class="leiras">${leirasHtml(kata.description)}</div>
        <h4>Amit használtam:</h4>
        <p>${cimkek}</p>
        ${megoldas}
        <p>
          <a class="gomb" href="${kata.file}" target="_blank">Megnézem a GitHubon</a>
          <button class="gomb" onclick="this.closest('details').open = false">Bezárás ▲</button>
        </p>
      </div>
    </details>
  `;
}

function rajzolKatak() {
  const kereses = document.getElementById("kereses").value.toLowerCase();
  const kyu = document.getElementById("kyu").value;
  let html = "";

  for (const gy of gyujtemenyek) {
    let katak = "";
    let kesz = 0;

    for (const kata of gy.katas) {
      if (kata.done) {
        kesz++;
      }

      // a nevben es a hasznalt metodusokban is keresek
      const miben = (kata.name + " " + kata.methods.join(" ") + " " + kata.tech.join(" ")).toLowerCase();

      if (miben.includes(kereses) && (kyu === "" || kata.kyu === kyu)) {
        katak += kataHtml(kata);
      }
    }

    // kereseskor vagy kyu szurovel nyitva vannak a csoportok, hogy latszodjanak a talalatok;
    // amugy csak a cimuk es a csikjuk latszik, igy nem kell annyit gorgetni
    const nyitva = kereses !== "" || kyu !== "";

    if (katak !== "") {
      const szazalek = kesz / gy.katas.length * 100;
      // kotelezo hazi vagy opcionalis gyujtemeny volt a kurzuson
      const tipus = gy.optional
        ? '<span class="tipus opcionalis">Opcionális</span>'
        : '<span class="tipus kotelezo">Kötelező</span>';
      html += `
        <details class="kartya csoport" ${nyitva ? "open" : ""}>
          <summary>
            <h3>
              ${gy.name}
              ${tipus}
              <a class="cw-link" href="${gy.url}" target="_blank" title="Megnyitom a Codewarson">
                <img src="codewars.svg" alt="" class="kis-logo">codewars
              </a>
            </h3>
            <p class="halvany">${kesz} / ${gy.katas.length} kész</p>
            <div class="csik"><div style="width: ${szazalek}%"></div></div>
          </summary>
          ${katak}
        </details>
      `;
    }
  }

  if (html === "") {
    html = "<p>Nincs ilyen kata.</p>";
  }

  document.getElementById("lista").innerHTML = html;

  // szinezi a kodot (highlight.js), ha betoltodott
  if (window.hljs) {
    hljs.highlightAll();
  }
}


// ---------- 2. tab: Statisztika ----------

function rajzolStatisztika() {
  let osszes = 0;
  let kesz = 0;
  let kyuOsszes = {}; // pl. { "8 kyu": 97 }
  let kyuKesz = {};   // pl. { "8 kyu": 97 }

  for (const gy of gyujtemenyek) {
    for (const kata of gy.katas) {
      osszes++;
      kyuOsszes[kata.kyu] = (kyuOsszes[kata.kyu] || 0) + 1;
      if (kata.done) {
        kesz++;
        kyuKesz[kata.kyu] = (kyuKesz[kata.kyu] || 0) + 1;
      }
    }
  }

  const szazalek = Math.round(kesz / osszes * 100);

  // a Katak tab tetejere
  document.getElementById("osszegzes").innerHTML =
    `<b>${kesz} / ${osszes}</b> feladat kész (${szazalek}%). Kattints egy katára, és megnézheted a megoldásomat!`;
  document.getElementById("csik").style.width = szazalek + "%";

  // Haladas: "cimke: ertek" sorok
  document.getElementById("haladas").innerHTML = `
    <p class="adat"><b>Kész katák:</b> ${kesz}</p>
    <p class="adat"><b>Összes feladat:</b> ${osszes}</p>
    <p class="adat"><b>Teljesítve:</b> ${szazalek}%</p>
    <p class="adat"><b>Gyűjtemények:</b> ${gyujtemenyek.length}</p>
    <p class="adat"><b>Hátra van:</b> ${osszes - kesz}</p>
  `;

  // kyu csikok
  const kyuk = ["8 kyu", "7 kyu", "6 kyu", "5 kyu", "4 kyu", "3 kyu", "Beta"];
  let html = "";
  for (const kyu of kyuk) {
    const db = kyuOsszes[kyu];
    const keszDb = kyuKesz[kyu] || 0;
    const felirat = `<span class="hatszog k${kyu[0]}"></span>${kyu} (${keszDb} / ${db})`;
    html += csik(felirat, db / kyuOsszes["8 kyu"] * 100, "");
  }
  document.getElementById("kyu-diagram").innerHTML = html;

  // kor diagram, kozepen a szazalek
  document.getElementById("kor").innerHTML = `
    <div class="kor" style="background: conic-gradient(#f05656 ${szazalek}%, var(--keret) 0)">
      <div class="kor-belseje">
        <span class="halvany">Kész</span>
        <b>${szazalek}%</b>
      </div>
    </div>
  `;
}


// ---------- 3. tab: Hogyan oldottam meg ----------

// mezo: "methods" vagy "tech"
function rajzolDiagram(mezo, hova) {
  let db = {}; // pl. { "map": 33, "split": 36 }

  for (const gy of gyujtemenyek) {
    for (const kata of gy.katas) {
      for (const nev of kata[mezo]) {
        db[nev] = (db[nev] || 0) + 1;
      }
    }
  }

  // sorba rendezem: a legtobbszor hasznalt legyen elol, es csak az elso 15 kell
  const lista = Object.entries(db).sort((a, b) => b[1] - a[1]).slice(0, 15);
  const max = lista[0][1];
  let html = "";

  for (const [nev, darab] of lista) {
    html += csik(`${nev} (${darab})`, darab / max * 100, `keres('${nev}')`);
  }

  document.getElementById(hova).innerHTML = html;
}

// a diagramon kattintva beirom a keresobe, es atvaltok a Katak tabra
function keres(szo) {
  document.getElementById("kereses").value = szo;
  document.getElementById("kyu").value = "";
  rajzolKatak();
  mutatTab("katak");
  window.scrollTo(0, 0);
}


// ---------- Indulas ----------

rajzolStatisztika();
rajzolKatak();
rajzolDiagram("methods", "metodusok");
rajzolDiagram("tech", "technikak");
