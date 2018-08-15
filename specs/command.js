module.exports = {
  '@tags': ['command'],
  before: function(browser) {

  },
  after: function(browser) {
    browser.end()    
  },
  'Google Search - Command': function (browser) {
    browser
        .search('Skr')
        .waitForElementVisible('//*[@id="sb_ifc0"]', 10000)
        .assert.title('Skr - Google 搜尋', 'Awesome Skr!');    
  }
}