# SCRAP//YARD

**Repair. Flip. Profit.**

SCRAP//YARD is an offline-first Android repair-and-resale game prototype. The current build is designed to run entirely on the player's device with no account, backend, analytics SDK, ad SDK, or network permission.

## Play loop

1. Buy damaged stock from the Market.
2. Diagnose hidden faults.
3. Repair the item using the timing minigame.
4. Test the repaired item.
5. Sell it for profit and XP.
6. Upgrade the workbench, scanner, parts quality and market access.
7. Repeat with increasingly valuable stock.

Player progress is stored locally in WebView local storage.

## Privacy / architecture

- No Android INTERNET permission.
- No account or login.
- No cloud database.
- No analytics or advertising SDK in v0.2.
- External navigation is blocked inside the game WebView.
- Game assets are packaged locally in the APK.

## Android build

The project targets Android API 35 and supports Android 8.0+ (`minSdk 26`).

Build locally with an Android SDK + Gradle 8.9:

```bash
gradle :app:assembleDebug
```

The repository also includes a GitHub Actions workflow that installs Android SDK 35 and builds both:

- `app-debug.apk` — installable development build.
- `app-release-unsigned.apk` — release variant that still requires release signing before store distribution.

## Version

Current prototype: **0.2.0** (`versionCode 2`).
