"use client";

import React from "react";
import Link from "next/link";

const STAT_KEYS = [
  { key: "strength", label: "Erő", description: "Maximális erőkifejtés, súlyzós/funkcionális gyakorlatokhoz." },
  { key: "endurance", label: "Állóképesség", description: "Hosszabb terhelés, futás/kardió blokkok állóképessége." },
  { key: "agility", label: "Fürgeség", description: "Gyorsaság, koordináció, dinamikus mozgásformák." },
  { key: "regeneration", label: "Regeneráció", description: "Felépülés sebessége, kihagyások utáni felzárkózás." },
  { key: "discipline", label: "Fegyelem", description: "Konzisztencia, elköteleződés, napi/heti célok tartása." },
];

export default function StatsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">Statok áttekintése</h1>
          <p className="text-slate-300">
            Az öt fő statod relatív skálán fejlődik, a saját bázisvonaladhoz
            képest. A sávok nem abszolút számot, hanem fejlődési állapotot
            mutatnak – a későbbi fázisokban a valós edzésnapló és XP-számítás
            tölti meg őket élettel.
          </p>
        </header>

        <section className="space-y-4 mb-10">
          {STAT_KEYS.map((stat) => (
            <article
              key={stat.key}
              className="rounded-lg border border-slate-800 bg-slate-900 px-4 py-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-lg font-semibold">{stat.label}</h2>
                <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200">
                  Relatív skálázás (MVP-ben statikus)
                </span>
              </div>
              <p className="text-sm text-slate-300 mb-3">{stat.description}</p>
              <div className="flex items-center gap-3">
                <span className="w-24 text-xs text-slate-400">
                  Fejlődési sáv
                </span>
                <div className="flex-1 h-3 rounded-full bg-slate-800 overflow-hidden">
                  {/* MVP-ben statikus; később Supabase-ből töltjük */}
                  <div className="h-full w-1/3 bg-emerald-500" />
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">„Alvó stat” koncepció</h2>
          <p className="text-slate-300 mb-2">
            Ha kihagysz néhány napot, a stat nem csökken, csak „alszik” – a
            rendszer nem bünteti a kihagyást, hanem megkülönbözteti az aktív és
            az átmenetileg inaktív szakaszokat. Későbbi visszatéréskor
            felzárkózó görbe segít visszatérni a várható trendvonalra.
          </p>
          <p className="text-slate-300">
            A Regeneráció stat szintje befolyásolja, milyen gyorsan fut le ez a
            felzárkózó görbe: minél magasabb a regeneráció, annál barátságosabb
            a kihagyás utáni visszatérés. A Fegyelem stat pedig azt jelzi, mennyire
            következetesen tartod a napi/heti célokat – ez a küldetésrendszer
            nehézségkalibrációjában kap szerepet.
          </p>
        </section>

        <footer className="flex items-center justify-between border-t border-slate-800 pt-6 mt-6">
          <div className="text-sm text-slate-300">
            A statok aktuális értékei és az „alvó” állapot jelölése a 2. fázistól
            kezdve Supabase-ből érkezik, szerveroldali számítás alapján.
          </div>
          <div className="flex gap-2">
            <Link
              href="/onboarding"
              className="text-sm px-4 py-2 rounded-md border border-slate-700 hover:border-slate-500 hover:text-emerald-300 transition"
            >
              Vissza az onboardinghoz
            </Link>
            <Link
              href="/trial-week"
              className="text-sm px-4 py-2 rounded-md border border-slate-700 hover:border-slate-500 hover:text-emerald-300 transition"
            >
              Próbahét idővonala
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}