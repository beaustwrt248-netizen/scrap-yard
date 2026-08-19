plugins { id("com.android.application") }

android {
    namespace = "com.scrapyard.game"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.scrapyard.game"
        minSdk = 26
        targetSdk = 35
        versionCode = 10
        versionName = "0.10.0"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}
