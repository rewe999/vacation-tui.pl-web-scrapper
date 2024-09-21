async function getOffers(page) {
    await page.waitForSelector('.offer-tile-body__hotel-name');

    return await page.evaluate(() => {
        try {
            const hotels = Array.from(document.querySelectorAll('.offer-tile-wrapper.offer-tile-wrapper--listingOffer'));

            return hotels.map(hotel => {
                const hotelName = hotel.querySelector('.offer-tile-body__hotel-name')?.textContent.trim() || 'N/A';
                const priceText = hotel.querySelector('.price-value__amount')?.textContent.trim() || 'N/A';
                const price = priceText !== 'N/A' ? parseFloat(priceText.replace(/\s/g, '')) : 'N/A';
                const city = hotel.querySelector('[itemprop="name"]')?.textContent.trim() || 'N/A';
                const airport = hotel.querySelector('.departure-flight__mobile-button')?.textContent.trim() || 'N/A';
                const hotelLinkElement = hotel.querySelector('h3.heading.offer-tile-body__title a');
                const hotelLink = hotelLinkElement ? "https://www.tui.pl" + hotelLinkElement.getAttribute('href') : 'N/A';
                const hotelCodeElement = hotel.querySelector('[hotelcode]');
                const hotelCode = hotelCodeElement ? hotelCodeElement.getAttribute('hotelcode') : 'N/A';

                return {hotelName, price, city, airport, hotelLink, hotelCode};
            });
        } catch (error) {
            console.error('Error in page.evaluate:', error);
            return [];
        }
    });
}

module.exports = getOffers;