var Request = require("request");

exports.countriesList = function(req,res) {
    Request.get("https://restcountries.eu/rest/v2/all", (error, response, body) => {
        if(error) {
            console.dir(error);
            res.send("Couldn't get list of countries :(");
        }
        res.render('index', {countries : JSON.parse(body)});
    });
}

exports.country = function(req, res) {
    let countryCode = req.params.code;
    Request.get("https://restcountries.eu/rest/v2/alpha/" + countryCode, (error, response, body) => {
        if(error) {
            console.dir(error)
            res.send("Couldn't get country info :(");
        }
        res.render('country', {country : JSON.parse(body)});
    });
}