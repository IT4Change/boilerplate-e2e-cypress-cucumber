import report from 'multiple-cucumber-html-reporter'

const reportTitle = 'DreamMall End-to-End Test Report'

report.generate({
  jsonDir: 'reports/json_logs',
  reportPath: './reports/e2e_html_report',
  pageTitle: reportTitle,
  reportName: reportTitle,
  pageFooter: '<div></div>',
  hideMetadata: true,
})
