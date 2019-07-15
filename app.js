//sudo-code
//information to put in:
//Pike (one location at a time, then we'll condense)
//minimum customers/hour: 23
//maximum customer/hour: 65
//average cookies/customer needs to equal: 6.3
//calculate the each hour's total sales. [6am, ..., .. ,..., 8pm]
//
//output, my code should do what?
//code needs to generate random customer 
//1 my code needs to print out the average sales per hour
//2 based on a randomly generated customer count per day

ServiceHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function averagecookiehour(a, b){
    //this is going to take the average number of customers per day, and the average cookies sold per day, to identify the number of cookies sold each hour
    var calcAvgCookieHour = a * b;
    for(h=0; h<ServiceHours.length; h++) {
        console.log(ServiceHours[h]);
    console.log(`${ServiceHours[h]}: ${calcAvgCookieHour} cookies `);
    return calcAvgCookieHour;
};


}

var pike = {
    name: '1st and Pike',
   minCust: 23, //minimum customers per hour
   maxCust: 65, //maximum customers per hour
   avgPurchase: 6.3,
   customersPerHour: [],
   salesPerHour: [],
   avgCust: function(){//identifies the average number of customers each hour.
        var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
        console.log(`${this.name} Has ${randomnumber} customers per hour`);
        console.log(this.randomnumber);
    },
    averagecookiehour(randomnumber, this.AvgPurchase);

};
console.log(pike);
// var Seatac = {
//     name: 'SeaTac Airport',
//    minCust: 3,
//    maxCust: 24,
//    avgCust: function(){
//        var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
//        console.log(this.name);
//        console.log(randomnumber);
//    }
// }

// var SCenter = {
//     name: 'Seattle Center',
//    minCust: 11,
//    maxCust: 38,
//    avgCust: function(){
//        var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
//        console.log(this.name);
//        console.log(randomnumber);
//    }
// }

// var CapHill = {
//     name: 'Capitol Hill',
//    minCust: 20,
//    maxCust: 38,
//    avgCust: function(){
//        var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
//        console.log(this.name);
//        console.log(randomnumber);
//    }
// }

// var Alki = {
//     name: 'Alki',
//    minCust: 2,
//    maxCust: 16,
//    avgCust: function(){
//        var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
//        console.log(this.name);
//        console.log(randomnumber);
//    }
// }

// var shoplist = [pike, Seatac, SCenter, CapHill, Alki];

// for (var i=0; i<shoplist.length; i++){
//     shoplist[i].avgCust()

// }