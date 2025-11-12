const request = require('postman-request');


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q=' 
    + address
    + '&access_token=pk.eyJ1IjoiZ29uem9pYm94IiwiYSI6ImNtN2E2dnF4MDAxNDgycnNkdHI1aG12ZmMifQ.-3kV8hIigW5Hx0xG1hngtg&country=ua';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location servers..', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined);
        } else {
            const { latitude, longitude } = body.features[0].properties.coordinates;
            const { name: location } = body.features[0].properties;
            
            callback(undefined, {
                latitude,
                longitude,
                location,
            });
        }
    });
};


module.exports = geocode;