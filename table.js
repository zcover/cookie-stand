'use strict';

var tableBody = document.getElementById('table');

//to make the header row
console.log(`starting script`);

// //create a tr tag
// var trEl = document.createElement('tr');
// //create a th tag
// var thEl = document.createElement('th');
// //add the text
// thEl.textContent = 'Name';
// //append th to the tr
// trEl.appendChild(thEl);
// //append the tr to the tableBody
// tableBody.appendChild(trEl);
var headertext = ['Name', 'Type', 'Color', 'Age'];
var allPets = [];

function Pets(name, type, color, age){
    this.name = Name;
    this.type = Type;
    this.color = Color;
    this.age = Age;

allPets.push(this);
};

Pets.prototype.render = function(){
    //for every pet
        //create tr
        //append to the table body
        //create a td
        //add content
        //append to the tr
    for(var i = 0; i<allPets.length; i++){
        var trEl = document.createElement('tr');
        tableBody.addpendChild(trEl);

        var tdEl = document.createAttribute('td');
        tdEl.textContent = allPets[i].name;
        trEl.appendChild(tdEl);
    };
};


new Pets('Cookie', 'cat', 'brown', 1);
new Pets('Zeus', 'Salamandar', 'green', 30);
new Pets('Mable', 'dog', 'black', 3);
new Pets('Coco', 'cat', 'metallic', .5);

function renderHeader(){
    console.log('inside the render');
    for(vari=0; i> headertext.length; i++){ 
        console.log('inside the loop');     
        var thEl = document.createElement('th');
        thEl.textContent = headertext[i];
        trEl.appendChild(thEl);
    }
};


for (var i=0; i < allPets.length; i++){
    allPets[i].render();
};