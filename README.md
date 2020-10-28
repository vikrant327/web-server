# web-server
A Express.js REST service to fetch weather forecast for a query location or address.

Clone repo

Run Command:

npm i

When deploying locally ,Configure default.json file un config folder :

{
    "UserName": "Your Name",
    "weatherApiKey":"Access Key for http://api.weatherstack.com/current?access_key=",
    "mapBoxkey": "Map Box APi Key "

}




When Deploying to Production, update production.json same way as above, and change set NODE_ENV="production" environment variable on the machine.

Run Command:
npm start

Access weather forecast for a locationn by calling service

http://localhost:8080/weather?address=Minneapolis

http://localhost:8080/weather?address=${OrAnyStreetAddress}


Dockerfile is confured, if needed to run app as an container Image.
