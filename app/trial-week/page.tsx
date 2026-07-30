"use client";

import React from "react";
import Link from "next/link";

type TrialDayStatus = "current" | "upcoming" | "completed";

interface TrialDay {
  dayIndex: number;
  title: string;
  subtitle: string;
  description: string;
  status: TrialDayStatus;
}

const TRIAL_DAYS: TrialDay[] = [
  {
    dayIndex: 0,
    title: "0. nap – Bevezetés",
    subtitle: "Mi ez az app, mit vár el, mit nem.",
    description:
      "Rövid, szöveges intro arról, hogyan működik az RPG-fitnesz hurok, és hogy a próbahét alatt bármikor módosíthatod a felszerelés- és hozzáférhetőségi profilodat.",
    status: "current",
  },
  {
    dayIndex: 1,
    title: "1. nap – Harcos mintaedzés",
    subtitle: "Súlyzós, erő-fókuszú blokk.",
    description:
      "Egy rövid erőedzés, amely megmutatja, hogyan néz ki a Harcos osztályhoz illeszkedő gyakorlat-könyvtár és terhelés.",
    status: "upcoming",
  },
  {
    dayIndex: 2,
    title: "2. nap – Vadász mintaedzés",
    subtitle: "Futás, kardió, táv.",
    description:
      "Kardió-orientált mintaedzés, egyszerűen naplózható paraméterekkel (táv, idő, RPE), hogy érezd, milyen a Vadász profil.",
    status: "upcoming",
  },
  {
    dayIndex: 3,
    title: "3. nap – Szerzetes mintaedzés",
    subtitle: "Jóga, mobilitás, regeneráció.",
    description:
      "Lazább, mobilitás- és pihenés-fókuszú blokk, amely a regeneráció stathoz kapcsolódó gyakorlatokat mutat be.",
    status: "upcoming",
  },
  {
    dayIndex: 4,
    title: "4. nap – Ranger mintaedzés",
    subtitle: "Funkcionális, vegyes edzés.",
    description:
      "Vegyes, funkcionális mozgásforma, amely kombinálja az erő, állóképesség és fürgeség szempontjait.",
    status: "upcoming",
  },
  {
    dayIndex: 5,
    title: "5. nap – Összegzés",
    subtitle: "Melyik osztály illeszkedik legjobban?",
    description:
      "Egyszerű vizuális összefoglaló arról, melyik mintaedzésnél érezted magad a legjobban – ez csak javaslat, nem kényszer.",
    status: "upcoming",
  },
  {
    dayIndex: 6,
    title: "6–7. nap – Karakter véglegesítése",
    subtitle: "Elsődleges osztály kiválasztása és első küldetés.",
    description:
      "A próbahét tapasztalatai alapján kiválasztod az elsődleges osztályodat, és megkapod az első napi küldetésedet. A döntés nem végleges: később multiclass is elérhető.",
    status: "upcoming",
  },
];

const statusLabel: Record<TrialDayStatus, string> = {
  current: "Aktuális lépés",
  upcoming: "Következő lépés",
  completed: "Kész",
};

const statusClasses: Record<TrialDayStatus, string> = {
  current: "border-emerald-400 bg-emerald-900/40",
  upcoming: "border-slate-700 bg-slate-900",
  completed: "border-slate-800 bg-slate-950/60 opacity-70",
};

export default function TrialWeekPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">Próbahét idővonala</h1>
          <p className="text-slate-300">
            A próbahét célja, hogy négy különböző osztály mintaedzésein keresztül
            tapasztald meg, melyik út illeszkedik legjobban hozzád – anélkül,
            hogy bármelyik döntés végleges lenne. 
          </p>
        </header>

        <section className="space-y-4 mb-10">
          {TRIAL_DAYS.map((day) => (
            <article
              key={day.dayIndex}
              className={`rounded-lg border px-4 py-3 flex flex-col md:flex-row md:items-center gap-3 ${statusClasses[day.status]}`}
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{day.title}</h2>
                <p className="text-sm text-slate-300">{day.subtitle}</p>
                <p className="text-sm text-slate-300 mt-2">
                  {day.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-slate-800 text-slate-200">
                  {statusLabel[day.status]}
                </span>
                <button
                  type="button"
                  className="text-xs px-3 py-1 rounded-md border border-slate-700 hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                  Részletek (MVP-ben statikus)
                </button>
              </div>
            </article>
          ))}
        </section>

        <footer className="flex items-center justify-between border-t border-slate-800 pt-6 mt-6">
          <div className="text-sm text-slate-300">
            A próbahét bármikor megszakítható és később folytatható; a későbbi
            fázisokban ezt a progressziót Supabase-ben tároljuk.
          </div>
          <Link
            href="/onboarding"
            className="text-sm px-4 py-2 rounded-md border border-slate-700 hover:border-slate-500 hover:text-emerald-300 transition"
          >
            Vissza az onboardinghoz
          </Link>
        </footer>
      </div>
    </main>
  );
}