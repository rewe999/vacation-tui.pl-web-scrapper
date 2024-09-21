async function showMore(page) {
    try {
        await page.waitForSelector('.results-container__button', { timeout: 5000 });
        const showMoreButton = await page.$('.results-container__button');
        if (showMoreButton) {
            await showMoreButton.click();
            console.log('Kliknięto przycisk "Pokaż więcej".');
            await page.waitForFunction(
                'document.querySelectorAll(".offer-tile-wrapper.offer-tile-wrapper--listingOffer").length > 0',
                { timeout: 20000 }
            );
            return true;
        }
    } catch (error) {
        console.error('Error clicking "Pokaż więcej" button:', error);
    }
    return false;
}

module.exports = showMore;