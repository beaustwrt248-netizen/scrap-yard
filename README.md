# SCRAP//YARD v0.3

**Repair. Flip. Profit.**

SCRAP//YARD is an offline-first Android repair-and-resale game. It runs entirely on-device with no account, backend, analytics SDK, ad SDK, or Android internet permission.

## Core loop

Buy damaged stock → select a project → diagnose faults → complete the timing repair → test → sell → reinvest into workshop upgrades.

## v0.3 upgrades

- Expanded item pool to 12 item types, including legendary stock.
- Selectable inventory projects instead of always using the first item.
- Daily supply crate and streak rewards.
- Offline earnings and limited energy recovery.
- Achievement system with cash bonuses.
- Rarity-based resale bonuses.
- Improved workshop upgrades and paid market refreshes.
- Lightweight synthesized sound feedback with no external audio files.
- Improved visual polish and runtime navigation.
- GitHub Actions updated to newer checkout/setup-java majors.
- Android app version bumped to 0.3.0 / versionCode 3.

## Privacy / architecture

- No Android INTERNET permission.
- No account or login.
- No cloud database.
- No analytics or advertising SDK.
- External navigation is blocked inside the game WebView.
- Game assets are packaged locally in the APK.
- Save data remains on-device in WebView local storage.

## Android build

The project targets Android API 35 and supports Android 8.0+ (`minSdk 26`).

GitHub Actions builds:

- `SCRAP-YARD-v0.3-debug` — installable development APK artifact.
- `SCRAP-YARD-v0.3-release-unsigned` — release variant that still requires release signing before store distribution.

## Version

Current prototype: **0.3.0** (`versionCode 3`).
