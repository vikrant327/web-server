const request = require('request');
const fs = require('fs');
const config = require('config');

const forecast = (latitude, longitude, callback) => {
    
    const url = 'http://api.weatherstack.com/current?access_key=' + config.get("weatherApiKey")+ '&query=' + latitude + "," + longitude + '&units=f';

    
    request({ url, json: true }, (error, { body }) => {
         
        
        if (error) {
            //saveNotes(error);
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            //saveNotes(body);
            callback('Unable to find location', undefined)
        } else {
            //saveNotes(body);
            callback(undefined, body);//.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

const saveNotes = (message) => {
    const dataJSON = JSON.stringify(message)
    fs.writeFileSync('message.json', dataJSON)
}

module.exports = forecast