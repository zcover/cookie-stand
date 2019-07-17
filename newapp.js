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
    this.hourlyCookieSales = HelperFunctionCustomerRandomizer()
        

    };
    console.log(this.hourlyCookieSales);
    allLocations.push(this);








new Location (`1st and Pike`, 23, 65, 6.5, );   
console.log(allLocations);