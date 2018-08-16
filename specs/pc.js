module.exports = {
  '@tags': ['pc'],
  before: function(browser) {

  },
  after: function(browser) {
    browser.end()    
  },
  'Google Search - Page Command': function (browser) {

    //let googlePageClient = browser.page.google();
    let googlePageClient = browser.page.google_command();

      googlePageClient
        .navigate('https://www.google.com')
        .pause(10000);
      googlePageClient.section.searchArea
        .waitForElementVisible('@searchBar', 10000)
        .setValue('@searchBar', 'Skr');
      browser
        .keys(browser.Keys.ENTER)
        .waitForElementVisible('//*[@id="sb_ifc0"]', 10000)
        .assert.title('Skr - Google 搜尋', 'Awesome Skr!');    
  }
}