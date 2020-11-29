//object literal
var salon={
    name:"The Fashion Pet",
    address:{
        city:"Roselle",
        street:"Mocking Bird Lane",
        number:"570"
    },
    phone:"555-1234-5768",
    pets:[]
}
//object destructuring

var{name,address:{city,street,number},phone, pets}=salon;

//attributes? name,age,gender,breed,service,owner, contact

//get the info from the inputs and store them in vars

const txtName= document.getElementById("petName");
const txtAge= document.getElementById("petAge");
const txtGender= document.getElementById("petGender");
const txtBreed= document.getElementById("petBreed");
const txtColor= document.getElementById("petColor");
const txtService= document.getElementById("petService");
const txtOwner= document.getElementById("petOwner");
const txtContact= document.getElementById("petContact");


//create the object constructure for the Pets
class Pet{
constructor(name,age,gender,breed,color,service,owner,contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.color=color;
    this.owner=owner;
    this.contact=contact;
}
}

//create the objects
const Scooby=new Pet("Scooby",50,"Male","Dane","Brown","Full Service","Shaggy","555-555-5555");
const Scrappy=new Pet("Scrappy",25,"Male","Dane","Gray","Full Service","Shaggy","555-555-5555");
const Lady=new Pet("Lady",50,"Male","Dane","Black","Full Service","Shaggy","555-555-5555");
const Snoopy=new Pet("Snoopy",50,"Male","Labrador","White","Full Service","Shaggy","555-555-5555");

//push the objects into the pets array
pets.push(Scooby);
pets.push(Scrappy);
pets.push(Lady);
pets.push(Snoopy);


function Register(){
    //create a generic object
    var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtColor.value,txtService.value,txtOwner.value,txtContact.value);
    pets.push(thePet);
    console.log(thePet);
    Display();
}
Display();

   // document.getElementById("pets").innerHTML=`${pets[0].name},${pets[1].name},${pets[2].name}${pets[3].name}`;
    
    //for(var i=0;i<name.length;i++){
     //   console.log(name[i]);

    //}
    




    

//attributes?
//name, age, gender, breed, service providing, ownerName, contactPhone
