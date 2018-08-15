module.exports = {
  '@tags': ['headless-fail'],
  before: function(browser) {

  },
  after: function(browser) {
    browser.end()    
  },
  'Google Search - headless fail': function (browser) {
      browser
        .url('https://www.google.com')
        .waitForElementVisible('//*[@id="lst-ib"]', 10000)
        .setValue('//*[@id="lst-ib"]', 'Skr')
        .keys(browser.Keys.ENTER)
        .waitForElementVisible('//*[@id="sb_ifc0"]', 10000)
        .assert.title('30 Ruby', 'Awesome Skr!');    
  }
}