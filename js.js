
var firstName, lastName, years;
firstName = 'Michael';
lastName = 'Pavelchyk';
years = 19;
var x = {firstName:"John", lastName:"Doe"}; 
myFunction = () => 
{document.getElementById("hi").innerHTML = this.x.firstName + " " + this.x.lastName;}
function mFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "Input OK";
    } 
} 
num=0 
slide=new Array () 
slide[0]=new Image () 
slide[1]=new Image () 

 
slide[0].src ="picture.jpg" 
slide[1].src ="picter2.jpg" 

 
function Picture(n) 
 
{ 
if (n==1) 
{ num++ 
if (num==2) 
num=0; 
} 
else 
{num-- 
if (num== -1) 
num=1; 
} 
document.images [0].src=slide[num].src 
} 

//using form date

function myFun() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length-1 ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo1").innerHTML = text;
}
