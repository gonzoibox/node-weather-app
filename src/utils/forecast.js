const request = require('postman-request');


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=7f1fca39d24b0e5d8def59ba6ba56349&query=' + latitude + ',' + longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather servers..', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search!', undefined);
        } else {
        const description = body.current.weather_descriptions[0].trim();
        const { temperature, feelslike } = body.current;
    
        callback(undefined, description + '. It is currently ' + temperature + ' degrees out. It feels like ' + feelslike + ' degrees out.'
        );
        }
    });
};


module.exports = forecast;