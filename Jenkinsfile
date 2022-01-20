pipeline {
  agent {
    docker {
      image "node:16.13.2"
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
