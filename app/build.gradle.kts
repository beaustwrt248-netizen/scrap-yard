plugins { id("com.android.application") }

android {
    namespace = "com.scrapyard.game"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.scrapyard.game"
        minSdk = 26
        targetSdk = 35
        versionCode = 15
        versionName = "0.15.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}
