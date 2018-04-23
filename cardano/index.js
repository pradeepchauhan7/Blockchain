var express = require('express');
//var mongoose = require('mongoose');
//var path = require('path');
var bodyparser = require('body-parser');
const cardano = require('cardano-api')
 var request = require('request');
var app = express();	
app.set('view engine', 'pug');
app.set('views','./views');
const query = {
    epoch: 8,   // Required, epoch to check
    slot: 24    // Optional
}
let responsedata;
  var jsonData;
  var dats;
//~ request('http://35.188.85.233:8100/api/txs/last', function (error, response, body) {
  //~ console.log('error:', error); // Print the error if one occurred
  //~ console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 //~ // console.log(body); // Print the HTML for the Google homepage.
  //~ obj = JSON.parse(body);
  //~ for(var objs in obj.Right) {
   //~ console.log("key:"+objs+", value:"+obj.Right[objs].cteId);
   //~ console.log("key:"+objs+", value:"+obj.Right[objs].cteTimeIssued);
   //~ console.log("key:"+objs+", value:"+obj.Right[objs].cteAmount.getCoin);
    
   
	//~ }
//~ });


  var check =function mydata(dats = null){
	 jsonData = dats;
  //     console.log(dats);
  }
  
app.get('/first_template', function(req, res){
   res.render('first_view');
});
 cardano.epoch(query)
  .then(data=>console.log(check(data))
   )
   
 
 //console.log(responsedata);
 // getMembers().then(console.log);
app.get('/cardano_view', function(req, res ){
	console.log(jsonData.Right)
res.render('cardano_view',{
   //user: {name: "Ashutosh", age: "20"}

});
});
 

//~ app.get('http://35.188.85.233:8100/api/search/epoch/', function(req, res){
  //~ request(epoch + query, function(err, body){
      //~ console.log(body);
      //~ res.json(body); //res is the response object, and it passes info back to client side
  //~ });
//~ });
app.listen(3000);
