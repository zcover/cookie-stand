'use strict';


//--------------------------------------------------------------
//GLOBAL VARIABLES

//fill array with times
var openHoursArr = ['6am', '7am', '8am', '9am', '10 am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//grabbing the myTable id from html
var tableBody = document.getElementById('myTable');

//allLocationsArr to hold current and future locations
var allLocationsArr = [];

//this array holds the names of all the locations, so they can be later referenced as th data
var tableHeadersArr = []

//----------------------------------------------------------\\

//Helper Functions---------------------------------

//required for submit pages
function handleClick(event){
    event.preventDefault();

};

function custRandom(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
};
//multiplies customers *  avgPurchase purchse for openHoursArr.length
// function salesPerHour(){
//     daily
// }

//------------------------------------------------/
//CONSTUCTOR
function Locationbio(name, maxCustomers, minCustomers, avgPurchase){
    //name
    this.name = name;
    //maxCustomers
    this.maxCustomers = maxCustomers;
    //minCustomers
    this.minCustomers = minCustomers;
    //avgPurchase
    this.avgPurchase = avgPurchase;

    this.customerArray = [];

    this.hourlySalesArr = [];

    //push into the allLocations array
    allLocationsArr.push(this);
        //push location names into header array
    tableHeadersArr.push(this.name);

    this.generateCustomerArray();
    this.generateSalesArray();


};
//--------------------------------------------------
// END CONSTRUCTOR

//--------------------------------------------------------------
//PROTOTYPES

//for loop to have a random number of customers per hour
//create number generator for customers/hour
    //push random number back into the constructor

Locationbio.prototype.generateCustomerArray= function(){
    for(var i = 0; i< openHoursArr.length; i++){
        var randomNumber = custRandom(this.minCustomers, this.maxCustomers);
        this.customerArray.push(randomNumber)
    };
};
Locationbio.prototype.generateSalesArray= function(){
    for(var i=0; i< openHoursArr.length; i++){
        var randomNumber = (Math.ceil(this.customerArray[i] * this.avgPurchase))
        this.hourlySalesArr.push(randomNumber);
    };
};

//-------------------------------------------------------------------
//Need to:

//the information needs to be grabbed from form id=myForm on html
    //able to receive new location information, and loop into the rest of the page

    
    //total hourly sales
    //for loop for hours the store is open
    //multiplies customers *  avgPurchase purchse for openHoursArr.length
//add up each hour's sales together to get var dayTotalSales

//add to table id=myTable of html:
    //th (table head) 
    //td enter table data into table head
            //data should be the name of location
            //td the amount sold each hour, with a different tr
        //append the data to the html
          
        
        
//OBJECT INSTANCES----------------------------------------
new Locationbio('bob', 53, 12, 5.2);
new Locationbio('john', 5, 2, 0.5);

//FORM------------------------------------------->
//make prototype to autofill (from instance)
var formEl = document.getElementById("myForm");

formEl.addEventListener("submit", function(event){
    event.preventDefault();
    var name = event.target.name.value
    var maxCustomers = event.target.maxCustomers.value
    // console.log(maxCustomers);
    var minCustomers = event.target.minCustomers.value
    // console.log(minCustomers);
    var avgPurchase = event.target.avgPurchase.value

    var anotherstore = new Locationbio(name, maxCustomers, minCustomers, avgPurchase)
    console.log(anotherstore);
});

//render page --------------------------------------
Locationbio.prototype.render=function(){
    this.generateCustomerArray();
    this.generateSalesArray();

};

for(var i=0; i<allLocationsArr.length; i++){
allLocationsArr[i].render();
};
//END PAGE----------------------------------------------------