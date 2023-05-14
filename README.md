# Node-Alerts
apparently Node doesn't have alerts. 
This app will invoke a func from the Node environment
The app will will connect Node with C or other to alert user

Might be TMI but came up with this app while doing Promises within GraphQL queries. I couldn't alert the results.
Part of this problem is implementing puppeteer at the same time.

Puppeteer is mentionable because I believe one can possibly:
bypass needing a C file, by using puppeteer to open a browser.launch({headless:false}) // headless or not Browser. 
From that browser, head to text editor and automate an alert for the user. i.e. puppeteer visits (w3schools.com), enters boilerplate and types in alert(${msg})

