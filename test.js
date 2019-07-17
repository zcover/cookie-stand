var ServiceHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var pike = {
    name: '1st and Pike',
    //syntax for constructor object is:
    //this.name 
   minCust: 23, //minimum customers per hour
   maxCust: 65, //maximum customers per hour
   avgPurchase: 6.3,
   customersPerHour: [],
   salesPerHour: [],
   totalCookies: 0,
   cookieSalesTotalArray: [],
   buildarray: function(){
        for (var i=0; i<ServiceHours.length; i++){
            var customersPerHourRandomizer = (Math.round(Math.random() * (this.maxCust - this.minCust +1) + this.minCust));
            //The Following line fills the customersPerHour Array
            this.customersPerHour.push(customersPerHourRandomizer);
            console.log(`${i}) ${this.customersPerHour[i]} customers per hour`);
            //the Following line fills the sales per hour Array
            this.salesPerHour.push(CurrentHourSale= (Math.round(this.avgPurchase) * this.customersPerHour[i]));
            console.log(`${ServiceHours[i]}) ${this.salesPerHour[i]} sales per hour`);
            //the following line will add all of the hourly cookie sales together.
            //totalCookies = service
            //console.log(`${this.totalCookies} Cookies sold Today!`);
            // console.log(`starting total cookies sold addition`);
            // this.totalCookies += this.salesPerHour;
            // console.log(`${this.totalCookies}`);
        };
    },

}
pike.buildarray();
