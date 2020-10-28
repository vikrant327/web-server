const request = require('request');
const fs = require('fs');
const config = require('config');

const geocode = (address, callback) => {
    
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + config.get("mapBoxkey") + '&limit=1'
    //saveNotes({ url, json: true });
    request({ url, json: true }, (error, { body }) => {
       
        if (error) {
            
            callback('Unable to connect to location services!', undefined);
            
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            //saveNotes(body.features);
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
    
}

const saveNotes = (message) => {
    const dataJSON = JSON.stringify(message)
    fs.writeFileSync('message.json', dataJSON)
}

module.exports = geocode