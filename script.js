const myButton = document.getElementById('Button');
const myLabel1 = document.getElementById('Label1');
const myLabel2 = document.getElementById('Label2');
const myLabel3 = document.getElementById('Label3');
const min = 1;
const max = 6;

let random1;
let random2;
let random3;

myButton.onclick = function () {
    random1 = Math.floor(Math.random() * (max - min + 1)) + min;
    random2 = Math.floor(Math.random() * (max - min + 1)) + min;
    random3 = Math.floor(Math.random() * (max - min + 1)) + min;
    myLabel1.innerHTML = random1;
    myLabel2.innerHTML = random2;
    myLabel3.innerHTML = random3;
}