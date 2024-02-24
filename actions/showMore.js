async function showMore(page) {
    let showMoreButton;
    do {
        try {
            await page.waitForSelector('.results-container__button', { timeout: 10000 });
            showMoreButton = await page.$('.results-container__button');
            if (showMoreButton) {
                await showMoreButton.click();
                console.log('Kliknięto przycisk "Pokaż więcej".');
                await page.waitForTimeout(10000);
            }
        } catch (error) {
            break;
        }
    } while (await page.$('.results-container__button').textContent !== 'Pokaż więcej');
}

module.exports = showMore;