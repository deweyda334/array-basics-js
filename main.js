// Dax Dewey
// 29 APR 2024
// JS Array Basics (EVIDENCE)

const groups = ['The Beatles', 'SlipKnot', 'Taylor Swift', 'Insane Clown Possie'];
// Show the original array in the browser console
console.log(groups);


// Update your array
groups[2] = 'Three Days Grace';
// Show the UPDATE array in the browser console
console.log(groups);

// Get and show the length of the array
// Length means how many elements (items) are in the array

// const groups = ['The Beatles', 'SlipKnot', 'Taylor Swift', 'Insane Clown Possie'];
let lungs = groups.length;

document.getElementById("output").innerHTML = lungs;

// const groups = ['The Beatles', 'SlipKnot', 'Taylor Swift', 'Insane Clown Possie'];
groups.unshift('The Rolling Stones');


groups.push("Taylor Swift");
let result = groups.indexOf("Taylor Swift");
console.log (`Taylor Swift has an index number in the groups array of: ${result}`);
