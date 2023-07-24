node("ci-node") {

    stage("checkout") {
        checkout scmGit(branches: [[name: '*/develop']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mchekini-check-consulting/staff-manager-automated-testing']])}


    stage("E2E Tests") {
         sh "npm install"
        try{
            sh 'npx cypress run'
        }catch (Exception e){
            print("Une erreur s'est produite lors du lancement des tests e2e")
        }

    }

    stage("Archive Test Report") {
        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
    }


}