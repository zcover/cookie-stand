'use strict';
//GLOBAL VARIABLES
//--------------------------------------------------------------
//fill array with times
var openHoursArr = ['6am', '7am', '8am', '9am', '10 am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//grabbing the myTable id from html
var tableBody = document.getElementById('tableBody');
//allLocationsArr to hold current and future locations
var allLocationsArr = [];
//this array holds the names of all the locations, so they can be later referenced as th data
var tableHeadersArr = [];
//connect javascript to the formid in html
var formEl = document.getElementById("myForm");
//creating array to hold all locations' total sales
var totalOfTotalsArr = []
//----------------------------------------------------------\\
function Locationbio(name, maxCustomers, minCustomers, avgPurchase){
    this.name = name;
    this.maxCustomers = maxCustomers;
    this.minCustomers = minCustomers;
    this.avgPurchase = avgPurchase;
    this.customerArray = [];
    this.hourlySalesArr = [];
    this.oneDayTotal = 0;
    allLocationsArr.push(this);
    tableHeadersArr.push(this.name);
    this.generateCustomerArray();
    this.generateSalesArray();
    // this.generateDailyTotal();
};
//Helper Functions---------------------------------
function randomNumber(minCustomers, maxCustomers) {
    return Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
};
function addelement(childElType, childContent, parentEl){
    var childElement = document.createElement(childElType);
    childElement.textContent = childContent;
    parentEl.appendChild(childElement);
};
//PROTOTYPES---------------------------------------------------
//create number generator for customers/hour
    //push random number back into the constructor
Locationbio.prototype.generateCustomerArray= function(){
    for(var i = 0; i< openHoursArr.length; i++){
        var randomCustomerNumber = randomNumber(this.minCustomers, this.maxCustomers);
        this.customerArray.push(randomCustomerNumber)
    };
};
Locationbio.prototype.generateSalesArray= function(){
    for(var i=0; i< openHoursArr.length; i++){
        var randomCookiesPerHour = (Math.ceil(this.customerArray[i] * this.avgPurchase))
        this.hourlySalesArr.push(randomCookiesPerHour);
        this.oneDayTotal += randomCookiesPerHour;
    };
    console.log(this.oneDayTotal)
};

Locationbio.prototype.renderTable = function(){
    var thEl = document.createElement('th');
    var trEl = document.createElement('tr');

    tableBody.appendChild(trEl);

    thEl.textContent=this.name;
    trEl.appendChild(thEl);

    for(var i=0; i<openHoursArr.length; i++){
        var tdEl = document.createElement('td');
        tdEl.textContent = this.hourlySalesArr[i];
        trEl.appendChild(tdEl);
    };

    tdEl = document.createElement('td');
    tdEl.textContent=this.oneDayTotal;
    trEl.appendChild(tdEl);
};

// //OBJECT INSTANCES----------------------------------------
new Locationbio('firstAndPike', 53, 12, 5.2);
new Locationbio('Alki', 5, 2, 0.5);
// //-------------------------------------------------------
function renderHeader(){
    //create a tr
    var trEl = document.createElement('tr');
    //append to the table body
    tableBody.appendChild(trEl);
    //create table header (th)
    var thEl = document.createElement('th');
    //text content: 'location'
    thEl.textContent = "Location";
    //append to (th) to (tr)
    trEl.appendChild(thEl);
    for(var i=0; i<openHoursArr.length +1 ;i++){
        //make table th
        var thEl = document.createElement('th');
        //add text content - hours- at i
        thEl.textContent = openHoursArr[i];
        //append to the tr
        trEl.appendChild(thEl);
    };
     thEl.textContent = "Total";
     trEl.appendChild(thEl);
};


function makeFooterRow(){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');

    tableBody.appendChild(trEl);
    thEl.textContent = 'Hourly Totals';
    trEl.appendChild(thEl);

    var totalOfTotals = 0;
    for(var i = 0; i<openHoursArr.length;i++){
        var hourlyTotal = 0;
        for(var j =0; j<allLocationsArr.length;j++){
            hourlyTotal += allLocationsArr[j].hourlySalesArr[i];
            totalOfTotals += allLocationsArr[j].hourlySalesArr[i];
        };

        thEl = document.createElement('th');
        thEl.textContent = hourlyTotal;
        trEl.appendChild(thEl);
    };

    thEl = document.createElement('th');
    thEl.textContent= totalOfTotals;
    trEl.appendChild(thEl);
};


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
    //this console log lists the information recieved by the user
});
// //render page --------------------------------------
renderHeader();
for(var i = 0; i< allLocationsArr.length; i++){
    allLocationsArr[i].renderTable();
    // renderTable();
}

makeFooterRow();
// //END PAGE----------------------------------------------------