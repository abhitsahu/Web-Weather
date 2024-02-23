const request = require('request')
const geocode = (address,callback)=>{

    const apiKey = 'afe64406aef14d7988b62309241402'

    const url = 'http://api.weatherapi.com/v1/current.json?key='+apiKey+'&q='+encodeURIComponent(address)+'&aqi=no'
    console.log(url)

    request({url: url,json: true},(error,{body}) => {

        if(error){
            callback('unable to connect to web service',undefined);
        }
        else if(body.error){
            callback('Unable To Find Location',undefined);
        }
    
        else{
            callback(undefined,{

                placeName:body.location.name,
                region:body.location.region,
                country:body.location.country,
                time:body.location.localtime,
                temperature:body.current.temp_c,
                text:body.current.condition.text,
                humidity:body.current.humidity,
                windspeed:body.current.wind_mph,
                pressure:body.current.pressure_mb,
                feelslike:body.current.feelslike_c,
                windDirection:body.current.wind_dir,
                uvindex:body.current.uv,
                icon:body.current.condition.icon,

                // windspeed:body.current.condition.wind_kph,
                // visibility:body.current.condition.vis_miles




                

            })
        }
    })


}

module.exports = geocode;