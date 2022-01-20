pipeline {
  agent {
    docker { 
      image 'node:12.16.2-alpine'
    }
  }
  stages {
    stage("Build"){
      steps {
        sh "npm install"
      }
    }
  }
}
