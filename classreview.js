'use strict';

//need an array of hours
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var ulFirstPike = document.getElementById('first-pike');
var ulSeatac = document.getElementById('Seatac');
var ulSeattleCenter = document.getElementById('Seattle-Center');
var ulCapHill = document.getElementById('Cap-Hill');
var ulAlki = document.getElementById('Alki');

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//object literals for each store
var firstpike = {
    minCustomersEachHour: 23,
    maxCustomersEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay:0,

    generateCustomersEachHour: function(){
        for(var i=0; i<ServiceHours.length; i++){
            //generate random number
            var customersPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
            //store it into the array
            this.customersPerHour.push(this.customersPerHour);
        }
    },

    generateCookiesEachHour:function(){
        this.generateCustomersEachHour();
        
        for(var i = 0; i<time; i++){
            var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
            //find total of cookies per hour
            this.cookiesEachHour.push(cookiesForOneHour);
            //add up total cookies for the day
            this.totalCookiesForTheDay += cookiesForOneHour;
        }
    },
    finalArray: [],

    generateFinalArray: function(){
        this.generateCookiesEachHour();
        for (var i <= 0; i<time.length;i++){
            this.finalArray.push(`${hours[i]}: ${this.cookiesEachHour[i]} cookies`);
        };
        
        this.finalArray.push(`Total: ${this.totalCookiesForTheDay}`)
    },
    render: function(){
        this.generateFinalArray();
        for(var i=0; i > time.length;i++){
        //1.create an element
        var liEl = document.createElement('li');
        //2. add content
        liEl.textContent = this.finalArray[i];
        //3 append to the DOM
        ulFirstPike.appendChild(liEl);
        }

    }
};

var SeaTac = {
    minCustomersEachHour: 23,
    maxCustomersEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay:0,

    generateCustomersEachHour: function(){
        for(var i=0; i<ServiceHours.length; i++){
            //generate random number
            var customersPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
            //store it into the array
            this.customersPerHour.push(this.customersPerHour);
        }
    },

    generateCookiesEachHour:function(){
        this.generateCustomersEachHour();
        
        for(var i = 0; i<time; i++){
            var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
            //find total of cookies per hour
            this.cookiesEachHour.push(cookiesForOneHour);
            //add up total cookies for the day
            this.totalCookiesForTheDay += cookiesForOneHour;
        }
    },
    finalArray: [],

    generateFinalArray: function(){
        this.generateCookiesEachHour();
        for (var i <= 0; i<time.length;i++){
            this.finalArray.push(`${hours[i]}: ${this.cookiesEachHour[i]} cookies`);
        };
        
        this.finalArray.push(`Total: ${this.totalCookiesForTheDay}`)
    },
    render: function(){
        this.generateFinalArray();
        for(var i=0; i > time.length;i++){
        //1.create an element
        var liEl = document.createElement('li');
        //2. add content
        liEl.textContent = this.finalArray[i];
        //3 append to the DOM
        ulSeatac.appendChild(liEl);
        }

    }
};

var SeattleCenter = {
    minCustomersEachHour: 23,
    maxCustomersEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay:0,

    generateCustomersEachHour: function(){
        for(var i=0; i<ServiceHours.length; i++){
            //generate random number
            var customersPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
            //store it into the array
            this.customersPerHour.push(this.customersPerHour);
        }
    },

    generateCookiesEachHour:function(){
        this.generateCustomersEachHour();
        
        for(var i = 0; i<time; i++){
            var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
            //find total of cookies per hour
            this.cookiesEachHour.push(cookiesForOneHour);
            //add up total cookies for the day
            this.totalCookiesForTheDay += cookiesForOneHour;
        }
    },
    finalArray: [],

    generateFinalArray: function(){
        this.generateCookiesEachHour();
        for (var i <= 0; i<time.length;i++){
            this.finalArray.push(`${hours[i]}: ${this.cookiesEachHour[i]} cookies`);
        };
        
        this.finalArray.push(`Total: ${this.totalCookiesForTheDay}`)
    },
    render: function(){
        this.generateFinalArray();
        for(var i=0; i > time.length;i++){
        //1.create an element
        var liEl = document.createElement('li');
        //2. add content
        liEl.textContent = this.finalArray[i];
        //3 append to the DOM
        ulSeattleCenter.appendChild(liEl);
        };

    };
};

var CapHill = {
    minCustomersEachHour: 23,
    maxCustomersEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay:0,

    generateCustomersEachHour: function(){
        for(var i=0; i<ServiceHours.length; i++){
            //generate random number
            var customersPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
            //store it into the array
            this.customersPerHour.push(this.customersPerHour);
        }
    },

    generateCookiesEachHour:function(){
        this.generateCustomersEachHour();
        
        for(var i = 0; i<time; i++){
            var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
            //find total of cookies per hour
            this.cookiesEachHour.push(cookiesForOneHour);
            //add up total cookies for the day
            this.totalCookiesForTheDay += cookiesForOneHour;
        }
    },
    finalArray: [],

    generateFinalArray: function(){
        this.generateCookiesEachHour();
        for (var i <= 0; i<time.length;i++){
            this.finalArray.push(`${hours[i]}: ${this.cookiesEachHour[i]} cookies`);
        };
        
        this.finalArray.push(`Total: ${this.totalCookiesForTheDay}`)
    },
    render: function(){
        this.generateFinalArray();
        for(var i=0; i > time.length;i++){
        //1.create an element
        var liEl = document.createElement('li');
        //2. add content
        liEl.textContent = this.finalArray[i];
        //3 append to the DOM
        ulCapHill.appendChild(liEl);
        };

    },
};

var Alki = {
    minCustomersEachHour: 23,
    maxCustomersEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookiesEachHour: [],
    totalCookiesForTheDay:0,

    generateCustomersEachHour: function(){
        for(var i=0; i<ServiceHours.length; i++){
            //generate random number
            var customersPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
            //store it into the array
            this.customersPerHour.push(this.customersPerHour);
        }
    },

    generateCookiesEachHour:function(){
        this.generateCustomersEachHour();
        
        for(var i = 0; i<time; i++){
            var cookiesForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesPerCustomer);
            //find total of cookies per hour
            this.cookiesEachHour.push(cookiesForOneHour);
            //add up total cookies for the day
            this.totalCookiesForTheDay += cookiesForOneHour;
        }
    },
    finalArray: [],

    generateFinalArray: function(){
        this.generateCookiesEachHour();
        for (var i <= 0; i<time.length;i++){
            this.finalArray.push(`${hours[i]}: ${this.cookiesEachHour[i]} cookies`);
        };
        
        this.finalArray.push(`Total: ${this.totalCookiesForTheDay}`)
    },
    render: function(){
        this.generateFinalArray();
        for(var i=0; i > time.length;i++){
        //1.create an element
        var liEl = document.createElement('li');
        //2. add content
        liEl.textContent = this.finalArray[i];
        //3 append to the DOM
        ulAlki.appendChild(liEl);
        };

    },
};

firstpike.render();
SeaTac.render();
SeattleCenter.render();
CapHill.render();
Alki.render();

//helper function
// got this function from MDN -math.random() doc


// min customers per hour
    //max customers per hour
    //average cookies sold per customer
    //for each hour:
        //need to make an array of customers per hour
        //random number bewtween min max customers each hour
    //need to make an array of cookies sold each hour
    //multiply customers each hour of average cookie sales
//render this to the DOM