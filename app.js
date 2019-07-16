var ServiceHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function averagecookiehour(a, b){
    //this is going to take the average number of customers per day, and the average cookies sold per day, to identify the number of cookies sold each hour
    var calcAvgCookieHour = a * b;
    for(h=0; h<ServiceHours.length; h++) {
        console.log(ServiceHours[h]);
    console.log(`${ServiceHours[h]}: ${calcAvgCookieHour} cookies `);
    return calcAvgCookieHour;
};
function avgCust(a, b){
       
    //identifies the average number of customers each hour.
     var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
     console.log(`${this.name} Has ${randomnumber} customers per hour`);
     console.log(this.randomnumber);
 }



}

//CurrentHourSale=avgPurchase * customersPerHour[]

// for (i=0; i<ServiceHours.length; i++){
//     var randomnumber = (Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust));
//     customersPerHour.push(randomnumber);
//     console.log(customersPerHour);
// };

var pike = {
    name: '1st and Pike',
   minCust: 23, //minimum customers per hour
   maxCust: 65, //maximum customers per hour
   avgPurchase: 6.3,
   customersPerHour: [],
   salesPerHour: [],
   totalCookies: 0,
   buildarray: function(){
        for (var i=0; i<ServiceHours.length; i++){
            var randomnumber = (Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust));
            //The Following line fills the customersPerHour Array
            this.customersPerHour.push(randomnumber);
            console.log(`${i}) ${this.customersPerHour[i]} customers per hour`);
            //the Following line fills the sales per hour Array
            this.salesPerHour.push(CurrentHourSale=this.avgPurchase * this.customersPerHour[i]);
            console.log(`${ServiceHours[i]}) ${this.salesPerHour[i]} sales per hour`);

        }
    }
    
}

pike.buildarray();

var SeaTac = {
    name: 'SeaTac Airport',
   minCust: 3, //minimum customers per hour
   maxCust: 24, //maximum customers per hour
   avgPurchase: 1.2,
   customersPerHour: [],
   salesPerHour: [],
   totalCookies: 0,
   buildarray: function(){
        for (var i=0; i<ServiceHours.length; i++){
            var randomnumber = (Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust));
            //The Following line fills the customersPerHour Array
            this.customersPerHour.push(randomnumber);
            console.log(`${i}) ${this.customersPerHour[i]} customers per hour`);
            //the Following line fills the sales per hour Array
            this.salesPerHour.push(CurrentHourSale=this.avgPurchase * this.customersPerHour[i]);
            console.log(`${ServiceHours[i]}) ${this.salesPerHour[i]} sales per hour`);

        }
    }
    
}

SeaTac.buildarray();

var sCenter = {
    name: 'Seattle Center',
   minCust: 11, //minimum customers per hour
   maxCust: 38, //maximum customers per hour
   avgPurchase: 3.7,
   customersPerHour: [],
   salesPerHour: [],
   totalCookies: 0,
   buildarray: function(){
        for (var i=0; i<ServiceHours.length; i++){
            var randomnumber = (Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust));
            //The Following line fills the customersPerHour Array
            this.customersPerHour.push(randomnumber);
            console.log(`${i}) ${this.customersPerHour[i]} customers per hour`);
            //the Following line fills the sales per hour Array
            this.salesPerHour.push(CurrentHourSale=this.avgPurchase * this.customersPerHour[i]);
            console.log(`${ServiceHours[i]}) ${this.salesPerHour[i]} sales per hour`);

        }
    }
    
}

sCenter.buildarray();

var capHill = {
    name: 'Capitol Hill',
   minCust: 20, //minimum customers per hour
   maxCust: 38, //maximum customers per hour
   avgPurchase: 2.3,
   customersPerHour: [],
   salesPerHour: [],
   totalCookies: 0,
   buildarray: function(){
        for (var i=0; i<ServiceHours.length; i++){
            var randomnumber = (Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust));
            //The Following line fills the customersPerHour Array
            this.customersPerHour.push(randomnumber);
            console.log(`${i}) ${this.customersPerHour[i]} customers per hour`);
            //the Following line fills the sales per hour Array
            this.salesPerHour.push(CurrentHourSale=this.avgPurchase * this.customersPerHour[i]);
            console.log(`${ServiceHours[i]}) ${this.salesPerHour[i]} sales per hour`);

        }
    }
    
}

capHill.buildarray();

var alki = {
    name: 'Alki',
   minCust: 2, //minimum customers per hour
   maxCust: 16, //maximum customers per hour
   avgPurchase: 4.6,
   customersPerHour: [],
   salesPerHour: [],
   totalCookies: 0,
   buildarray: function(){
        for (var i=0; i<ServiceHours.length; i++){
            var randomnumber = (Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust));
            //The Following line fills the customersPerHour Array
            this.customersPerHour.push(randomnumber);
            console.log(`${i}) ${this.customersPerHour[i]} customers per hour`);
            //the Following line fills the sales per hour Array
            this.salesPerHour.push(CurrentHourSale=this.avgPurchase * this.customersPerHour[i]);
            console.log(`${ServiceHours[i]}) ${this.salesPerHour[i]} sales per hour`);

        }
    }
    
}

alki.buildarray();