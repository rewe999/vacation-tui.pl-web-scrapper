async function getOffers(page) {
    await page.waitForSelector('.offer-tile-body__hotel-name');

    return await page.evaluate(() => {
        const hotels = Array.from(document.querySelectorAll('.offer-tile-wrapper.offer-tile-wrapper--listingOffer'));

        return hotels.map(hotel => {
            const hotelName = hotel.querySelector('.offer-tile-body__hotel-name').textContent.trim();
            const price = hotel.querySelector('.price-value__amount').textContent.trim();
            const city = hotel.querySelector('[itemprop="name"]').textContent.trim();
            const airport = hotel.querySelector('.departure-flight__mobile-button').textContent.trim();
            const hotelLinkElement = document.querySelector('h3.heading.offer-tile-body__title a');
            const hotelLink = "https://www.tui.pl" + hotelLinkElement.getAttribute('href');
            const hotelCodeElement = hotel.querySelector('[hotelcode]');
            const hotelCode = hotelCodeElement.getAttribute('hotelcode');

            return {hotelName, price, city, airport, hotelLink, hotelCode};
        });
    });
}

module.exports = getOffers;