module.exports = {
    sections: {
        searchArea: {
            selector: '//*[@id="main"]',
            locateStrategy: 'xpath',
            elements: {
                searchBar: {
                    selector: '//*[@id="lst-ib"]',
                    locateStrategy: 'xpath'
                },
                submitButton: {
                    selector: '//*[@id="tsf"]/div[2]/div[3]/center/input[1]',
                    locateStrategy: 'xpath'
                }
            }
        }
    }
};