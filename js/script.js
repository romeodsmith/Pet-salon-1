//array
var names=["Romeo", "Jeff","Trey","Charles"];
console.log(names);
console.log(names[2]);// display Trey

let gpas=[2.5,3.6,2.4,4,3.9];
console.table(gpas);

var mixed=["Romeo",3.5,"Charles",467,true];
console.table(mixed);

//travel an array

for(var i=0;i<names.length;i++){
    console.log(names[i]);
}

//display all gpa

let gpa=[2.5, 4.0, 3.8, 2.9, 4.0, 4.0,3.6];
console.table(gpa)

//display all the mixed values

var mixed=["A","B","C","D"]

//objects literal

var student1={
    name:"Jeremy",
    lastName:"Gilbert",
    age:30,
    address:{
        country:"Mexico",
        city:"Rozelle"
    },
    music:["Coldplay","Eminim","REM","Rolling Stone"]
}
console.log(student1.music[2]); //display REM on the console.
student1City=student1.address.city //old way

//Object distructuring
var {name,lastName,age,address:{city}}=student1;
console.log(city);
