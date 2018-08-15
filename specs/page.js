module.exports = {
  '@tags': ['page'],
  before: function(browser) {

  },
  after: function(browser) {
    browser.end()    
  },
  'Google Search - Page': function (browser) {

    let googlePageClient = browser.page.google();

      googlePageClient
        .navigate('https://www.google.com');
      googlePageClient.section.searchArea
        .waitForElementVisible('@searchBar', 10000)
        .setValue('@searchBar', 'Skr');
      browser
        .keys(browser.Keys.ENTER)
        .waitForElementVisible('//*[@id="sb_ifc0"]', 10000)
        .assert.title('Skr - Google 搜尋', 'Awesome Skr!');    
  }
}