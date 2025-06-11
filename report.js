const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'test-result',         // Le dossier contenant cucumber-report.json
  reportPath: 'test-result/html', // Le dossier de sortie du rapport HTML
  metadata:{
    browser: {
      name: 'chromium',
      version: '125'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Rapport de test Algoan',
    data: [
      { label: 'Projet', value: 'Algoan UI Testing' },
      { label: 'Version', value: '1.0.0' },
      { label: 'Date', value: new Date().toLocaleString() }
    ]
  }
});
