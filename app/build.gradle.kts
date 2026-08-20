plugins { id("com.android.application") }

android {
    namespace = "com.scrapyard.game"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.scrapyard.game"
        minSdk = 26
        targetSdk = 35
        versionCode = 19
        versionName = "0.19.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}
