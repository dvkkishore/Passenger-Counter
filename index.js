let count=0;
let countEL=document.getElementById("count-el");

function increment() {
    count+=1;
    countEL.innerText=count;
}

function clearit() {
    count=0;
    countEL.innerText=0;
}

let previous=document.getElementById("saves")
function save() {

    let sentence=count + " - ";

    previous.textContent+=sentence;
    clearit();
    alert("Your entry has successfully saved!");
}