plugins { id("com.android.application") }

android {
    namespace = "com.scrapyard.game"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.scrapyard.game"
        minSdk = 26
        targetSdk = 35
        versionCode = 23
        versionName = "0.23.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}
