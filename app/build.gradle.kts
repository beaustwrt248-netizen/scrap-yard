plugins { id("com.android.application") }

android {
    namespace = "com.scrapyard.game"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.scrapyard.game"
        minSdk = 26
        targetSdk = 35
        versionCode = 12
        versionName = "0.12.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}
