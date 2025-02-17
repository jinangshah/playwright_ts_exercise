pipeline {
    agent any
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/jinangshah/playwright_ts_exercise.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                npm run test
            }
        }
        stage('Publish Report') {
            steps {
                npm run report
            }
        }
    }
}
