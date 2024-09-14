pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:20-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    cd frontend
                    ls -la
                    node --version
                    npm --version
                    npm config set legacy-peer-deps true
                    npm ci
                    npm run build
                    ls -la
                '''
            }
        }
    }
}
