# HALADAS – RPG Fitness App

## Fázisok áttekintése

- 0. fázis – Alapok: Node.js, git, GitHub, Vercel, Supabase beállítva; Next.js projekt létrehozva. (Finomítsd a saját valós állapotodra.)
- 1. fázis – Karakteralkotás és statrendszer: próbahét-folyamat, osztály/felszerelés-profil/hozzáférhetőségi profil, alap stat-megjelenítés, kattintható prototípusban. 

Részletek: lásd a `00_koncepcio_v4.md`, `03_mvp_backlog.md`, `07_validacio_es_utemezes.md` és `08_fejlesztesi_munkafolyamat.md` dokumentumokat.

## Aktuális munkamenet – 1. fázis, 1. lépés

### Cél

Statikus, kattintható onboarding/karakteralkotás oldal létrehozása Next.js-ben, amely:

- bemutatja a próbahét koncepcióját,
- lehetővé teszi osztály, felszerelés-profil és hozzáférhetőségi profil választását egyenrangú, azonos vizuális súllyal,
- megjeleníti az öt fő statot (Erő, Állóképesség, Fürgeség, Regeneráció, Fegyelem) egy egyszerű sávos komponenssel.

### Mi készült el ebben a lépésben

- Létrejött az onboarding oldal (Next.js route) a karakteralkotás 3 tengelyével.
- Készült egy alap stat-sáv blokk, ami vizuálisan jeleníti meg az öt statot.
- A fenti elemek egyelőre statikus adatokkal dolgoznak, Supabase/backend integráció nélkül.

### Következő lépés

- 1. fázis, 2. lépés: a próbahét konkrét mintaedzéseinek statikus felvitele és kattintható próbahét-flow (pl. napi „card” jellegű mintaedzések) kialakítása.