module.exports = {
  '@tags': ['basic'],
  before: function(browser) {

  },
  after: function(browser) {
    browser.end()    
  },
  'Google Search - Enhance': function (browser) {
      browser
        .url('https://www.google.com')
        .waitForElementVisible('//*[@id="lst-ib"]', 10000)
        .setValue('//*[@id="lst-ib"]', 'Skr')
        .keys(browser.Keys.ENTER)
        .waitForElementVisible('//*[@id="sb_ifc0"]', 10000)
        .assert.title('Skr - Google 搜尋', 'Awesome Skr!');    
  }
}