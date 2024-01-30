//require playwright before after hooks globally setup browser open tabs close browser pages
const playwright = require("playwright")
const {Before, After, BeforeAll, AfterAll} = require("@cucumber/cucumber")

//hooks
BeforeAll(async() => {
    console.log("Launch Browser")
    global.browser = await playwright["chromium"].launch({headless: false})
})

AfterAll(async () => {
    console.log("Close Browser")
    await global.browser.close()
})

Before(async() => {
    console.log("Create new context and page")
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
})

After(async() => {
    console.log("Close Page")
    await global.context = await global.page.close()
    await global.context.close()
})


