var hasKey = false;
var doorknob = "locked";
var lock = "locked";

function escape(){
    location.href = "anotherPage.html";
}

function tryDoor(){
    alert("Sorry, it's locked!");
}

function tryLock(){
    var answer = prompt("Repeat this sentence: " + "I can do anything I put my mind to!");
    if(answer == "I can do anything I put my mind to!"){
        lock = "unlocked";
        alert("Yes you can!");
        checkEscape();
    }
    else{
        alert("Sorry, not the correct answer");
    }
}

function tryKnob(){ 
    if(hasKey){
        doorknob = "unlocked";
        alert("You opened the lock!");
        checkEscape();
    }
    else{
        alert("Sorry, it's locked. Can you find the key?");
    }
}

function pickUpKey(){
    hasKey = true;
    alert("You pick up the key and put it in your pocket");
    document.getElementById("key").style.visibility = "hidden";
}

function checkEscape(){
    if (doorknob == "unlocked" && lock == "unlocked"){
        document.getElementById("escapeBtn").style.visibility = "visible";
    }
}