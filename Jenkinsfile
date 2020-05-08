pipeline {
    agent any
    stages {
        stage('Git clone') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/LivingSkySchoolDivision/MySchoolSaskEnhancementSuite.git'
            }
        }
        stage('Package for Chrome') {
            steps {
                sh 'mv manifest-chrome.json manifest.json'
                zip zipFile: 'MySchoolSaskEnhancementSuite-Chrome.zip',
                    archive: false,
                    glob: 'manifest.json,img/*,js/*,pages/*,thirdparty/*,COPYRIGHT,LICENSE'
                archiveArtifacts artifacts: 'MySchoolSaskEnhancementSuite-Chrome.zip', fingerprint: true
                sh 'rm manifest.json'
            }
        }
        stage('Package for FireFox') {
            steps {
                sh 'mv manifest-firefox.json manifest.json'
                zip zipFile: 'MySchoolSaskEnhancementSuite-FF.zip',
                    archive: false,
                    glob: 'manifest.json,img/*,js/*,pages/*,thirdparty/*,COPYRIGHT,LICENSE'
                archiveArtifacts artifacts: 'MySchoolSaskEnhancementSuite-FF.zip', fingerprint: true
            }
        }
    }
    post {
        always {
            deleteDir()
        }
    }
}

