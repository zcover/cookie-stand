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
//make prototype to autofill (from instance)
function custRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//------------------------------------------------/
//CONSTUCTOR
function Locationbio(name, maxCustomers, minCustomers, avgPurchase){
    //name
    this.name = name;
    //max
    this.max = maxCustomers;
    //min
    this.min = minCustomers;
    //avg
    this.avg = avgPurchase;

    this.customerArray = [];

    this.averageCustomerCount = 
    //push into the allLocations array
    allLocationsArr.push(this);
        //push location names into header array
    tableHeadersArr.push(this.name);


};
//--------------------------------------------------
// END CONSTRUCTOR
//for loop to have a random number of customers per hour
    //create number generator for customers/hour
    //push random number back into the constructor
Locationbio.prototype.generateCustomerArray= function(){
    for(var i = 0; i< openHoursArr.length; i++){
        var randomNumber = custRandom(this.min, this.max);
        this.customerArray.push(randomNumber)
    };
};
//Need to:

//the information needs to be grabbed from form id=myForm on html
    //able to receive new location information, and loop into the rest of the page


//total hourly sales
    //for loop for hours the store is open
        //multiplies customers *  avg purchse for openHoursArr.length
//add up each hour's sales together to get var dayTotalSales

//add to table id=myTable of html:
    //th (table head) 
        //td enter table data into table head
            //data should be the name of location
            //td the amount sold each hour, with a different tr
        //append the data to the html
          
//render page