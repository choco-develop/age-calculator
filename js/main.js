//get date of birth
function calculate(){
    let currentAge=document.querySelector("#birthYear").value;
    //calculate age
    if(currentAge==""){
        document.querySelector('#age').innerText='NO VALUE IN INPUT'
    }
    else{
    let cYear=new Date().getFullYear();
    currentAge=cYear-currentAge;
    //show age
    document.querySelector('h2').style.display='flex'

    document.querySelector('#age').innerText=`${currentAge} years old`;
}
  
   
}

document.querySelector('#calculate').addEventListener('click',calculate)


/*to print current year in js
without the getFullYear method,it prints currentdate+time
let cYear=new Date().getFullYear();
console.log(cYear);
*/