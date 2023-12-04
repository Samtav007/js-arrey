// Challenge 1: Create an Array "myFavSuperheroes" and add all your favourite superhero names as an array element (Please note, you should add atleast 5 names).
let myFavSuperheroes = ["Spider-Man", "Iron Man", "Wonder Woman", "Black Panther", "Captain America"];


// Challenge 2: Print (in console) the first superheroes name in your array "myFavSuperheroes".
console.log(myFavSuperheroes[0]);

// Challenge 3: Print (in console) the length of the array "myFavSuperheroes".
console.log(myFavSuperheroes.length);

// Challenge 4: Change the second last element in the Array "myFavSuperheroes" to your name and print the second last element in the array "myFavSuperheroes".
myFavSuperheroes[myFavSuperheroes.length - 2] = "Your Name";
console.log(myFavSuperheroes[myFavSuperheroes.length - 2]);

// Challenge 5: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the start without using the splice method.
myFavSuperheroes.unshift("Friend 1");


// Challenge 6: Add your friend's name (friend 2) to the array "myFavSuperheroes" at the end without using the splice method.
myFavSuperheroes.push("Friend 2");


// Challenge 7: Remove your friend's name (friend1) in the array "myFavSuperheroes" without using the splice method.
let indexFriend1 = myFavSuperheroes.indexOf("Friend 1");
if (indexFriend1 !== -1) {
  myFavSuperheroes = myFavSuperheroes.slice(0, indexFriend1).concat(myFavSuperheroes.slice(indexFriend1 + 1));
}

// Challenge 8: Remove your friend's name (friend2) in the array "myFavSuperheroes" without using the splice method.
let indexFriend2 = myFavSuperheroes.indexOf("Friend 2");
if (indexFriend2 !== -1) {
  myFavSuperheroes = myFavSuperheroes.slice(0, indexFriend2).concat(myFavSuperheroes.slice(indexFriend2 + 1));
}

// Challenge 9: Add your friend's name (friend 1) to the array "myFavSuperheroes" at the 3rd position without removing any element using the splice method.
myFavSuperheroes.splice(2, 0, "Friend 1");


// Challenge 10:  Remove the 4th and 5th element in the array "myFavSuperheroes",  and add your friend's name (friend 2) at the 4th position using the splice method.
myFavSuperheroes.splice(3, 2, "Friend 2");

// Challenge 11:  Create a nested array "superheroUniverse" and add 2 ararys to it, where first array should contain the name of the Marvel superheroes and second ararys should contain the name of the DC superhereoes.
let superheroUniverse = [
  ["Spider-Man", "Iron Man", "Thor"],
  ["Batman", "Superman", "Wonder Woman"]
];

// Challenge 12: Print one of the Marvel superhero name from the array "superheroUniverse".
console.log(superheroUniverse[0][1]); 

// Challenge 13: Print one of the DC superhero name from the array "superheroUniverse".
console.log(superheroUniverse[1][0]);