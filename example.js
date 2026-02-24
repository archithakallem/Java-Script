const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting} , ${name} ${emoji} ` 
}

greetUser("WELCOME", "Devansh", "🔥")

function add(a, b) {
    const sum = a + b;
    return sum;
}

console.log( add(3, 4)   ) 
console.log( add(9, 102) ) 


function getFirstarr(arr) {
    return arr[0];
}
console.log(getFirstarr(li = [1,2,3,4,5]))



let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument
function getItems(items)
{
    for(i=0; i<items.length; i++)
    {
        console.log(items[i]);
    }
}
getItems(myCourses)