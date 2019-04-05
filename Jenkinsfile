pipeline {
    agent any
    stages {
        stage('Git clone') {
            steps {
                git branch: 'master',
                    credentialsId: 'JENKINS-PRIVKEY',
                    url: 'git@ssh.dev.azure.com:v3/LivingSkySchoolDivision/MySchoolSaskEnhancementSuite/MySchoolSaskEnhancementSuite'
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
        failure {
            mail to:'jenkinsalerts@lskysd.ca',
                subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
                body: "Something is wrong with ${env.BUILD_URL}"
        }
        success {
            mail to:'jenkinsalerts@lskysd.ca',
                subject: "Build pipeline completed successfully: ${currentBuild.fullDisplayName}",
                body: "${env.BUILD_URL}"
        }
        always {
            deleteDir()
        }
    }
}

