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


var pike = {
    name: '1st and Pike',
   minCust: 23,
   maxCust: 65,
   avgCookie: function(){
       var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
       console.log(this.name);
       console.log(randomnumber);
   }
}

var Seatac = {
    name: 'SeaTac Airport',
   minCust: 3,
   maxCust: 24,
   avgCookie: function(){
       var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
       console.log(this.name);
       console.log(randomnumber);
   }
}

var SCenter = {
    name: 'Seattle Center',
   minCust: 11,
   maxCust: 38,
   avgCookie: function(){
       var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
       console.log(this.name);
       console.log(randomnumber);
   }
}

var CapHill = {
    name: 'Capitol Hill',
   minCust: 20,
   maxCust: 38,
   avgCookie: function(){
       var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
       console.log(this.name);
       console.log(randomnumber);
   }
}

var Alki = {
    name: 'Alki',
   minCust: 2,
   maxCust: 16,
   avgCookie: function(){
       var randomnumber = Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
       console.log(this.name);
       console.log(randomnumber);
   }
}

var shoplist = [pike, Seatac, SCenter, CapHill, Alki];

for (var i=0; i<shoplist.length; i++){
    shoplist[i].avgCookie()

}