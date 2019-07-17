'use strict';

var serviceHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLocations = []

function HelperFunctionCustomerRandomizer(){
    var CustomerPerHourRandomizer = (Math.round(Math.random() * (this.max - this.min) +1) + this.min)
};



function Location(LocationName, MinimumCustomerCount, MaximumCustomerCount, AverageCustomerPurchase){
    this.name = LocationName,
    this.min = MinimumCustomerCount,
    this.max = MaximumCustomerCount,
    this.avgPurchse = AverageCustomerPurchase,
    this.hourlyCookieSales = [],//HelperFunctionCustomerRandomizer()
        

    console.log(this.hourlyCookieSales);
    allLocations.push(this);  
};
//RENDER FUNCTION TO MAKE THE TABLE

Location.prototype.render= function(){
    this.randCustomerCount();
    this.randCookieCount();


    //create element -tr
    var trEl = document.createElement('tr');
    
    //append tr to tablebody
    tableBody.appendChiled(trEl);
    
    //make my location cell
        //create a td element
        var tdEl = document.createElement('td');
        //give it content: this.name
        tdEl.textContent = this.name;
        //append it to tr
        trEl.appendChild(tdEl);

    //make my data -cookies each hour
    for (var i = 0; i< serviceHours.length; i++){
        //1. creating an element -td
        tdEl = document.createElement('td');

        //2. give it acontent - cookies each hour at i
        tdEl.textContent = this.hourlyCookieSales[i];

        //3 append it to the DOM -tr
        trEl.appendChild(tdEl);

    }

    //my totals
        //create a td element
        tdEl = document.createElement('td');
        //give content
        tdEl.textContent = this.cookieTotal;
        //append it to the DOM -tr
        trEl.appendChild(tdEl);

};



//Instances
new Location('1st and Pike', 63, 23, 6.3);