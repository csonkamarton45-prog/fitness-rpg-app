"use client";

import React, { useState } from "react";

type ClassKey = "harcos" | "vadasz" | "szerzetes" | "ranger";
type GearKey = "testsuly_vadon" | "otthon" | "gym";
type AccessibilityKey = "standard" | "korlatozott_mozgas";

const CLASSES: { key: ClassKey; name: string; description: string }[] = [
  {
    key: "harcos",
    name: "Harcos",
    description: "Súlyzós, erő-fókuszú edzésprofil.",
  },
  {
    key: "vadasz",
    name: "Vadász",
    description: "Futás, kardió, táv alapú edzésprofil.",
  },
  {
    key: "szerzetes",
    name: "Szerzetes",
    description: "Jóga, mobilitás, pihenés/regeneráció fókusz.",
  },
  {
    key: "ranger",
    name: "Ranger",
    description: "Funkcionális, vegyes edzésprofil.",
  },
];

const GEARS: { key: GearKey; name: string; description: string }[] = [
  {
    key: "testsuly_vadon",
    name: "Testsúly / Vadon",
    description: "Eszköz nélküli vagy szabadtéri edzés.",
  },
  {
    key: "otthon",
    name: "Otthoni eszközök",
    description: "Alap otthoni eszközökkel (pl. kisebb súlyok, szalagok).",
  },
  {
    key: "gym",
    name: "Konditerem",
    description: "Teljes konditermi felszerelés használata.",
  },
];

const ACCESSIBILITY: {
  key: AccessibilityKey;
  name: string;
  description: string;
}[] = [
  {
    key: "standard",
    name: "Standard mód",
    description: "Nincs jelentős mozgáskorlátozás.",
  },
  {
    key: "korlatozott_mozgas",
    name: "Korlátozott mozgás mód",
    description:
      "Sérülés vagy krónikus állapot miatti módosított terhelés, elsőrangú választásként kezelve.",
  },
];

const STAT_KEYS = ["Erő", "Állóképesség", "Fürgeség", "Regeneráció", "Fegyelem"];

export default function OnboardingPage() {
  const [selectedClass, setSelectedClass] = useState<ClassKey | null>(null);
  const [selectedGear, setSelectedGear] = useState<GearKey | null>(null);
  const [selectedAccessibility, setSelectedAccessibility] =
    useState<AccessibilityKey | null>(null);

  const isReady =
    selectedClass !== null &&
    selectedGear !== null &&
    selectedAccessibility !== null;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold mb-2">
            Próbahét és karakteralkotás
          </h1>
          <p className="text-slate-300">
            Ez az első lépésed a világba: egy rövid próbahéten minden osztályból
            kipróbálhatsz egy mintaedzést, mielőtt végleg döntesz. Itt most
            előkészítjük a karaktered alapprofilját.
          </p>
        </header>

        <section className="grid gap-8 md:grid-cols-3 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-3">Osztályválasztás</h2>
            <p className="text-slate-300 mb-3">
              A preferált mozgásforma szerint, hierarchia nélkül – minden út
              egyenrangú.
            </p>
            <div className="space-y-2">
              {CLASSES.map((cls) => (
                <button
                  key={cls.key}
                  type="button"
                  onClick={() => setSelectedClass(cls.key)}
                  className={`w-full text-left rounded-md border px-3 py-2 text-sm transition ${
                    selectedClass === cls.key
                      ? "border-emerald-400 bg-emerald-900/40"
                      : "border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <div className="font-medium">{cls.name}</div>
                  <div className="text-slate-300 text-xs">
                    {cls.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Felszerelés-profil</h2>
            <p className="text-slate-300 mb-3">
              A class-tól független tengely: bármikor, akár edzésenként
              módosítható, eszközfüggetlen statszámítással.
            </p>
            <div className="space-y-2">
              {GEARS.map((gear) => (
                <button
                  key={gear.key}
                  type="button"
                  onClick={() => setSelectedGear(gear.key)}
                  className={`w-full text-left rounded-md border px-3 py-2 text-sm transition ${
                    selectedGear === gear.key
                      ? "border-emerald-400 bg-emerald-900/40"
                      : "border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <div className="font-medium">{gear.name}</div>
                  <div className="text-slate-300 text-xs">
                    {gear.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              Hozzáférhetőségi profil
            </h2>
            <p className="text-slate-300 mb-3">
              Harmadik, egyenrangú tengely: sérülés vagy krónikus állapot
              esetén a rendszer innen indul, nem elrejtett beállításként.
            </p>
            <div className="space-y-2">
              {ACCESSIBILITY.map((acc) => (
                <button
                  key={acc.key}
                  type="button"
                  onClick={() => setSelectedAccessibility(acc.key)}
                  className={`w-full text-left rounded-md border px-3 py-2 text-sm transition ${
                    selectedAccessibility === acc.key
                      ? "border-emerald-400 bg-emerald-900/40"
                      : "border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <div className="font-medium">{acc.name}</div>
                  <div className="text-slate-300 text-xs">
                    {acc.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3">Alap stat-sávok</h2>
          <p className="text-slate-300 mb-3">
            Az öt fő statod relatív sávként jelenik meg. Később a valódi edzés
            és XP határozza meg a sávok töltöttségét és az „alvó stat”
            vizuális jelölését.
          </p>
          <div className="space-y-2">
            {STAT_KEYS.map((label) => (
              <div key={label} className="flex items-center gap-3">
                <span className="w-32 text-sm text-slate-200">{label}</span>
                <div className="flex-1 h-3 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full w-1/3 bg-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-between border-t border-slate-800 pt-6 mt-6">
          <div className="text-sm text-slate-300">
            A próbahét konkrét mintaedzései a következő lépésben jelennek meg,
            statikus kártyák formájában.
          </div>
          <button
            type="button"
            disabled={!isReady}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              isReady
                ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                : "bg-slate-700 text-slate-400 cursor-not-allowed"
            }`}
          >
            Tovább a próbahéthez
          </button>
        </section>
      </div>
    </main>
  );
}