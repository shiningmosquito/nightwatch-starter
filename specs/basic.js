module.exports = {
  '@tags': ['basic'],
  before: function(browser) {

  },
  after: function(browser) {
    browser.end()    
  },
  'Google Search - Basic': function (browser) {
      browser
        .url('https://www.google.com')
        .pause(5000)
        .setValue('//*[@id="lst-ib"]', 'Skr')
        .keys(browser.Keys.ENTER)
        .pause(7000)
        .assert.title('Skr - Google 搜尋', 'Awesome Skr!');    
  }
}