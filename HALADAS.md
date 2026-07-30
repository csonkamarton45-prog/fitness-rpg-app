# HALADAS – Fitness RPG app

## 0. fázis – Alapok

Állapot: LEZÁRVA (2026-07-30)

Mit készült el:
- Lokális fejlesztői környezet beállítva (Node.js + npm), a Next.js alapváz fut `localhost:3000`-on.
- GitHub repo létrehozva (`fitness-rpg-app`), Vercel projekttel összekötve, az alap build sikeresen deployolódik.
- Supabase projekt létrehozva (EU régió), az adatbázis elérhető.
- Supabase séma v0.1 létrehozva a 02_adatmodel.md entitásai alapján (users, character_profiles, stat_states, stat_history, workout_logs stb.).

Döntések:
- A Companion és guild/party táblák modellje a 02-es dokumentum szerint marad, de a tényleges implementációjuk a post-MVP fázisokra tolódik.
- Az MVP-ben a fő fókusz az edzés → XP → stat → küldetés fő hurok és a próbahét folyamat, a világtérkép és loot-rendszer csak minimális, de már determinisztikus formában jelenik meg.

Következő fázis:
- 1. fázis – Karakteralkotás és statrendszer.

Következő konkrét lépések:
- Onboarding/proóbahét UI első verziója: karakterosztály, equipment profil, hozzáférhetőségi profil kiválasztása.
- StatState alapértelmezett értékek bekötése a Supabase-ből, és a statok megjelenítése a felhasználói felületen.
- Alap edge function / API réteg megtervezése a statok későbbi frissítéséhez (XP-számítás előtt egy statikusan beállított demo-értékekkel).

## Parkoló lista (ötletek későbbre)

- Companion evolúció vizuális megjelenítése (v1.1+).
- Guild/party rendszer, buddy pair és közös küldetések.
- Wearable / web push integráció az aktivitás finomabb követéséhez.