function confirmCookies(page) {
    return page.waitForSelector(
        '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
    ).then(() => page.click('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'));
}

module.exports = confirmCookies;