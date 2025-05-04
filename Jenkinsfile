pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Configure NodeJS in "Global Tool Configuration"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-user/your-cypress-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', allowEmptyArchive: true
            junit 'cypress/results/*.xml' // Only if using junit reporters
        }
    }
}

