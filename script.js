let settings = {
    "async" : true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=%20usd",
    "method":"GET",
    "header":{}
}
$.ajax(settings).done(function(response){
    console.log(response);
});