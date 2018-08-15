exports.command = function (content) {
    var browser = this;
    let googlePageClient = browser.page.google();

    browser
        .url('https://www.google.com')
        .assert.title('Google');
    googlePageClient.section.searchArea
        .waitForElementVisible('@searchBar', 10000)
        .setValue('@searchBar', 'Skr');
    browser
        .keys(browser.Keys.ENTER)
    return this;
};