pipeline {
  agent any
  stages {
    stage('build pages') {
      steps {
        nodejs('node12.6') {
          sh '''echo $PATH
                node -v
                npm -v
                cd front/
                npm i
                npm i vuepress@1.0.0 -g
                npm run docs:build'''
        }
      }
    }
    stage('deploy pages') {
      steps {
        sshPublisher(publishers: [sshPublisherDesc(configName: 'aliyunServer', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'tjcds/', remoteDirectorySDF: false, removePrefix: 'front/docs/.vuepress/dist/', sourceFiles: 'front/docs/.vuepress/dist/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
      }
    }
  }
}