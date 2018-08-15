const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");

const config = {
    "output_folder": "./reports",
    "src_folders": [""],
    "page_objects_path": "./page_object",
    "custom_commands_path": './custom_commands',
    "selenium": {
        "start_process" : true,
        "server_path" : seleniumServer.path,
        "log_path" : "./selenium_log",
        "host": "127.0.0.1",
        "port" : 4444,
        "cli_args" : {
            "webdriver.chrome.driver": chromedriver.path
        }
    },
    "test_settings": {
        "chrome": {
            "launch_url": "https://www.google.com",
            "selenium_prot": 4444,
            "selenium_host": "127.0.0.1",
            "silent": true,
            "disable_colors": false,
            "use_xpath": true,
            "screenshots": {
                "enabled": true,
                "on_failure": true,
                "path": "./screenshots"
            },
            "desiredCapabilities": {
                "browserName" : "chrome",
                "chromeOptions" : {
                    "prefs" : {
                        "credentials_enable_service" : false,
                        "profile.password_manager_enabled" : false
                    },
                    "args": [
                        "--disable-gpu", 
                        "--disable-notifications", 
                        "disable-infobars", 
                        "--disable-popup-blocking", 
                        "--window-size=1600,1000"
                    ]
                },
                "javascriptEnabled" : true,
                "acceptSslCerts" : true
            }
        },
        "headless": {
            "launch_url": "https://www.google.com",
            "selenium_prot": 4444,
            "selenium_host": "127.0.0.1",
            "silent": true,
            "disable_colors": false,
            "use_xpath": true,
            "screenshots": {
                "enabled": true,
                "on_failure": true,
                "path": "./screenshots"
            },
            "desiredCapabilities": {
                "browserName" : "chrome",
                "chromeOptions" : {
                    "prefs" : {
                        "credentials_enable_service" : false,
                        "profile.password_manager_enabled" : false
                    },
                    "args": [
                        "--headless", 
                        "--disable-gpu", 
                        "--disable-notifications", 
                        "disable-infobars", 
                        "--disable-popup-blocking", 
                        "--window-size=1600,1000"
                    ]
                },
                "javascriptEnabled" : true,
                "acceptSslCerts" : true
            }
        }
    }
}
module.exports = config;
