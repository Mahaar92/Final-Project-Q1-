//q2
let name = "Erie";
console.log(`Hello ${name},would you like to learn some python`);
//q3
let name1 = "Erie";
console.log(`uppercase ${name1.toUpperCase()}`);
console.log(`lowercase ${name1.toLowerCase()}`);
console.log(`Titlecase: ${name1.replace(/\b\w/g, (l) => l.toUpperCase())}`);
//q4
let quote = "You must be the change you wish to see in the world.";
let author = "Mahatma Gandhi";
console.log(`${author} once said, "${quote}"`);
//q5
let famous_person = "Mahatma Gandhi";
let quote1 = "You must be the change you wish to see in the world.";
let message = `${famous_person} once said, "${quote1}"`;
console.log(message);
//q6
let name2 = "\t\n  John Doe  \n\t";
console.log("Name with whitespace:", name2);
let strippedName = name2.trim();
console.log("Name without whitespace:", strippedName);
//q7
console.log(3 + 5); // Addition: 3 + 5 = 8
console.log(12 - 4); // Subtraction: 12 - 4 = 8
console.log(2 * 4); // Multiplication: 2 * 4 = 8
console.log(16 / 2); // Division: 16 / 2 = 8
//q8
console.log(5 + 3);
console.log(12 - 4);
console.log(2 * 4);
console.log(16 / 2);
//q9
let favoriteNumber = 287;
let message2 = `My favorite number is ${favoriteNumber}.`;
console.log(message);
//q10
//Program 1: Favorite Number
//Muhammad Ahmad, July 2, 2024
// This program prints my favorite number to the console.
let favoriteNumber2 = 287;
let message3 = `My favorite number is ${favoriteNumber}.`;
console.log(message3);
//Program 2: Famous Quote
// Ariana Smith, July 2, 2024
// This program prints a famous quote and its author to the console.
let famous_person1 = "Mahatma Gandhi";
let quote3 = "You must be the change you wish to see in the world.";
let message4 = `${famous_person} once said, "${quote}"`;
console.log(message4);
//q11
let arrayoffriends = ["Alice", "Bob", "Charlie", "David"];
for (let i = 0; i < arrayoffriends.length; i++) {
    console.log(arrayoffriends[i]);
}
//q12
let arrayoffriends1 = ["Alice", "Bob", "Charlie", "David"];
for (let i = 0; i < arrayoffriends.length; i++) {
    console.log(`Hello my friend ${arrayoffriends1[i]} welcome to coding`);
}
//q13
let favoriteVehicles = [
    "Honda motorcycle",
    "Tesla car",
    "Harley-Davidson motorcycle",
    "Toyota truck",
];
for (let i = 0; i < favoriteVehicles.length; i++) {
    console.log(`I would like to own a ${favoriteVehicles[i]}.`);
}
//q14
let dinnerGuests = [
    "Rajendra, a street vendor",
    "Maria, a homeless mother",
    "Kumar, a struggling artist",
];
for (let i = 0; i < dinnerGuests.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, I would be honored if you could join me for dinner. Let's share stories and a warm meal!`);
}
//q15
let dinnerGuests1 = [
    "Rajendra, a street vendor",
    "Maria, a homeless mother",
    "Kumar, a struggling artist",
];
for (let i = 0; i < dinnerGuests1.length; i++) {
    console.log(`Dear ${dinnerGuests1[i]}, I would be honored if you could join me for dinner. Let's share stories and a warm meal!`);
}
console.log(`Unfortunately, ${dinnerGuests1.pop()} can't make it to dinner.`);
dinnerGuests1.push("Leila, a refugee"); // add Leila to the list
for (let i = 0; i < dinnerGuests1.length; i++) {
    console.log(`Dear ${dinnerGuests1[i]}, I would be honored if you could join me for dinner. Let's share stories and a warm meal!`);
}
//q16
let dinnerGuests4 = [
    "Rajendra, a street vendor",
    "Maria, a homeless mother",
    "Kumar, a struggling artist",
];
for (let i = 0; i < dinnerGuests4.length; i++) {
    console.log(`Dear ${dinnerGuests4[i]}, I would be honored if you could join me for dinner. Let's share stories and a warm meal!`);
    console.log("I just found a bigger dinner table, so I can invite more guests!");
}
dinnerGuests.unshift("Amira, a poet"); // add Amira to the beginning
dinnerGuests.splice(2, 0, "Jamil, a musician"); // add Jamil to the middle
dinnerGuests.push("Sofia, a painter"); // add Sofia to the end using push
for (let i = 0; i < dinnerGuests4.length; i++) {
    console.log(`Dear ${dinnerGuests4[i]}, I would be honored if you could join me for dinner. Let's share stories and a warm meal!`);
}
//q17
let dinnerGuests5 = [
    "Amira, a poet",
    "Rajendra, a street vendor",
    "Jamil, a musician",
    "Kumar, a struggling artist",
    "Leila, a refugee",
    "Sofia, a painter",
];
console.log("I can invite only two people for dinner.");
while (dinnerGuests5.length > 2) {
    let guestToRemove = dinnerGuests5.pop();
    console.log(`Sorry, ${guestToRemove}, I can't invite you to dinner.`);
}
console.log("The following guests are still invited:");
for (let i = 0; i < dinnerGuests5.length; i++) {
    console.log(`Dear ${dinnerGuests[i]}, you're still invited to dinner!`);
}
dinnerGuests5.pop();
dinnerGuests5.pop();
console.log(dinnerGuests); // prints: []
//q18
let placesToVisit = [
    "Lahore",
    "Karachi",
    "Hunza Valley",
    "Quetta",
    "Islamabad",
];
console.log("Original order:");
console.log(placesToVisit);
console.log("Alphabetical order (without modifying the list):");
console.log([...placesToVisit].sort());
console.log("Original order (unchanged):");
console.log(placesToVisit);
console.log("Reverse alphabetical order (without modifying the list):");
console.log([...placesToVisit].sort().reverse());
console.log("Original order (unchanged):");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:");
console.log(placesToVisit);
placesToVisit.sort();
console.log("Alphabetical order (modifying the list):");
console.log(placesToVisit);
placesToVisit.sort().reverse();
console.log("Reverse alphabetical order (modifying the list):");
console.log(placesToVisit);
//q19
let dinnerGuests0 = [
    "Amira, a poet",
    "Rajendra, a street vendor",
    "Jamil, a musician",
    "Kumar, a struggling artist",
    "Leila, a refugee",
    "Sofia, a painter",
];
console.log(`I am inviting ${dinnerGuests0.length} people to dinner.`);
console.log("Original order:");
console.log(dinnerGuests0);
console.log("Alphabetical order (without modifying the list):");
console.log([...dinnerGuests0].sort());
console.log("Original order (unchanged):");
console.log(dinnerGuests0);
console.log("Reverse alphabetical order (without modifying the list):");
console.log([...dinnerGuests0].sort().reverse());
console.log("Original order (unchanged):");
console.log(dinnerGuests0);
dinnerGuests0.reverse();
console.log("Reversed order:");
console.log(dinnerGuests0);
dinnerGuests0.reverse();
console.log("Back to original order:");
console.log(dinnerGuests0);
dinnerGuests0.sort();
console.log("Alphabetical order (modifying the list):");
console.log(dinnerGuests0);
dinnerGuests0.sort().reverse();
console.log("Reverse alphabetical order (modifying the list):");
console.log(dinnerGuests0);
//q20
let citiesInPakistan = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Quetta",
    "Peshawar",
    "Hyderabad",
    "Multan",
    "Faisalabad",
    "Sialkot",
    "Gujranwala",
];
console.log(citiesInPakistan);
let mountainsInPakistan = [
    { name: "K2", height: 8611, location: "Karakoram" },
    { name: "Nanga Parbat", height: 8126, location: "Himalayas" },
    { name: "Rakaposhi", height: 7788, location: "Karakoram" },
    { name: "Shispare", height: 7611, location: "Karakoram" },
];
console.log(mountainsInPakistan);
//q22
let mountainsInPakistan1 = [
    { name: "K2", height: 8611, location: "Karakoram" },
    { name: "Nanga Parbat", height: 8126, location: "Himalayas" },
    { name: "Rakaposhi", height: 7788, location: "Karakoram" },
    { name: "Shispare", height: 7611, location: "Karakoram" },
];
//console.log(mountainsInPakistan1[4].name); // Error: Index out of bounds
//q23
let car = "honda";
console.log("Is car == 'subaru'? I predict False.");
console.log(car == "subaru"); // False
let age = 25;
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False
let name4 = "John";
console.log("Is name == 'John'? I predict True.");
console.log(name4 == "John"); // True
let city = "New York";
console.log("Is city == 'Los Angeles'? I predict False.");
console.log(city == "Los Angeles"); // False
let num = 5;
console.log("Is num >= 5? I predict True.");
console.log(num >= 5); // True
let fruit = "apple";
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == "banana"); // False
let day = "Monday";
console.log("Is day == 'Tuesday'? I predict False.");
console.log(day == "Tuesday"); // False
let weather = "sunny";
console.log("Is weather == 'rainy'? I predict False.");
console.log(weather == "rainy"); // False
let num2 = 10;
console.log("Is num2 < 5? I predict False.");
console.log(num2 < 5); // False
let country = "USA";
console.log("Is country == 'Canada'? I predict False.");
console.log(country == "Canada"); // False
let car2 = "honda";
console.log("Is car2 == 'honda'? I predict True.");
console.log(car2 == "honda"); // True
//q24
// Tests for equality and inequality with strings
let str = "hello";
console.log("Is str == 'hello'? I predict True.");
console.log(str == "hello"); // True
console.log("Is str == 'world'? I predict False.");
console.log(str == "world"); // False
// Tests using the lower case function
let str2 = "HELLO";
console.log("Is str2.toLowerCase() == 'hello'? I predict True.");
console.log(str2.toLowerCase() == "hello"); // True
// Numerical tests
let num4 = 5;
console.log("Is num == 5? I predict True.");
console.log(num4 == 5); // True
console.log("Is num > 5? I predict False.");
console.log(num4 > 5); // False
console.log("Is num >= 5? I predict True.");
console.log(num4 >= 5); // True
console.log("Is num < 5? I predict False.");
console.log(num4 < 5); // False
console.log("Is num <= 5? I predict True.");
console.log(num4 <= 5); // True
// Tests using "and" and "or" operators
let num5 = 10;
console.log("Is num == 5 && num2 == 10? I predict False.");
console.log(num5 == 5 && num2 == 10); // False
console.log("Is num == 5 || num2 == 10? I predict True.");
console.log(num5 == 5 || num2 == 10); // True
// Test whether an item is in a array
let arr = [1, 2, 3, 4, 5];
console.log("Is 3 in arr? I predict True.");
console.log(arr.includes(3)); // True
console.log("Is 6 in arr? I predict False.");
console.log(arr.includes(6)); // False
// Test whether an item is not in a array
console.log("Is 3 not in arr? I predict False.");
console.log(!arr.includes(3)); // False
console.log("Is 6 not in arr? I predict True.");
console.log(!arr.includes(6)); // True
//q25
//Version 1: Alien color is green (passes the if test)
let alien_color = "green";
if (alien_color === "green") {
    console.log("Player earned 5 points!");
}
//Version 2: Alien color is not green (fails the if test)
let alien_color1 = "red";
if (alien_color1 === "green") {
    console.log("Player earned 5 points!");
}
//q26
let alien_color3 = "green";
if (alien_color3 === "green") {
    console.log("Player earned 5 points for shooting the alien!");
}
else {
    console.log("Player earned 10 points!");
}
let alien_color4 = "red";
if (alien_color4 === "green") {
    console.log("Player earned 5 points for shooting the alien!");
}
else {
    console.log("Player earned 10 points!");
}
//q27
//Version 1: Alien color is green
let alien_color5 = "green";
if (alien_color5 === "green") {
    console.log("Player earned 5 points!");
}
else if (alien_color5 === "yellow") {
    console.log("Player earned 10 points!");
}
else if (alien_color5 === "red") {
    console.log("Player earned 15 points!");
}
//Version 2: Alien color is yellow
let alien_color6 = "yellow";
if (alien_color6 === "green") {
    console.log("Player earned 5 points!");
}
else if (alien_color6 === "yellow") {
    console.log("Player earned 10 points!");
}
else if (alien_color6 === "red") {
    console.log("Player earned 15 points!");
}
//Version 3: Alien color is red
let alien_color7 = "red";
if (alien_color7 === "green") {
    console.log("Player earned 5 points!");
}
else if (alien_color7 === "yellow") {
    console.log("Player earned 10 points!");
}
else if (alien_color7 === "red") {
    console.log("Player earned 15 points!");
}
//q28
let age0 = 25; // Set the age variable
if (age0 < 2) {
    console.log("The person is a baby.");
}
else if (age0 >= 2 && age0 < 4) {
    console.log("The person is a toddler.");
}
else if (age0 >= 4 && age0 < 13) {
    console.log("The person is a kid.");
}
else if (age0 >= 13 && age0 < 20) {
    console.log("The person is a teenager.");
}
else if (age0 >= 20 && age0 < 65) {
    console.log("The person is an adult.");
}
else if (age0 >= 65) {
    console.log("The person is an elder.");
}
//q29
let favorite_fruits = ["apples", "bananas", "oranges"];
if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("oranges")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes("strawberries")) {
    console.log("You really like strawberries!");
}
//q30
let usernames = ["admin", "ali", "ahmed", "sadia", "faizan"];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === "admin") {
        console.log(`Hello admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
//q31
let usernames4 = []; // Empty array
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    let age = 25;
    for (let i = 0; i < usernames.length; i++) {
        if (age < 2) {
            console.log(`${usernames[i]} is a baby.`);
        }
        else if (age >= 2 && age < 4) {
            console.log(`${usernames[i]} is a toddler.`);
        }
        else if (age >= 4 && age < 13) {
            console.log(`${usernames[i]} is a kid.`);
        }
        else if (age >= 13 && age < 20) {
            console.log(`${usernames[i]} is a teenager.`);
        }
        else if (age >= 20 && age < 65) {
            console.log(`${usernames[i]} is an adult.`);
        }
        else if (age >= 65) {
            console.log(`${usernames[i]} is an elder.`);
        }
    }
}
//q32
let currentUsers = ["john", "mary", "jane", "bob", "alice"];
let newUsers = ["john", "JOHN", "mark", "mary", "sarah"];
for (let new_user of newUsers) {
    if (currentUsers.includes(new_user.toLowerCase())) {
        console.log(`The username ${new_user} is not available. Please enter a new username.`);
    }
    else {
        console.log(`The username ${new_user} is available.`);
    }
}
//Q#33 Ordinal Numbers
let number_ordinals = [1, 2, 3, 4];
for (let i = 0; i <= number_ordinals.length; i++) {
    if (number_ordinals[i] == 1) {
        console.log(`${number_ordinals[i]}st`);
    }
    if (number_ordinals[i] == 2) {
        console.log(`${number_ordinals[i]}nd`);
    }
    if (number_ordinals[i] == 3) {
        console.log(`${number_ordinals[i]}rd`);
    }
    if (number_ordinals[i] == 4) {
        console.log(`${number_ordinals[i]}th`);
    }
}
//Q#34 Pizzas
let pizza_array = ["Chesse Pizza", "Peparoni Pizza", "Tikka Pizza"];
for (let i = 0; i <= pizza_array.length; i++) {
    console.log(`I love ${pizza_array[i]}`);
}
console.log(`I like Chicken Or Tikka Pizzas, I don't love them like people normally do since I don't find them healthy`);
//Q#35 Animals List
let animal_array = ["Eagle", "Sparrow", "Parrot"];
for (let i = 0; i <= animal_array.length; i++) {
    if (animal_array[i] == "Eagle") {
        console.log(`${animal_array[i]} are on top of food chain`);
    }
    if (animal_array[i] == "Sparrow") {
        console.log(`${animal_array[i]} are cute birds`);
    }
    if (animal_array[i] == "Parrot") {
        console.log(`${animal_array[i]} make good pets`);
    }
}
console.log("All Of these animals have wings");
//Q#36 T-Shirt Function
let size = "Medium";
let message1 = "I Love Earth";
function make_shirt(size_shirt, message_shirt) {
    console.log(`Size Of Shirt Is ${size_shirt} and the message to print on it is ${message_shirt}`);
}
make_shirt(size, message);
//Q#37 Large Shirt
make_shirt("Large", "I Love Typescript");
make_shirt("Medium", "I Love Typescript");
//Q#38 Describe Cities
function describe_city(city, country = "Pakistan") {
    console.log(`${city} Is Located In ${country}`);
}
describe_city("lahore");
describe_city("Karachi");
describe_city("Texas", "USA");
//Q#39 City Names
function city_name(city, country) {
    console.log(`${city},${country}`);
}
city_name("Lahore", "Pakistan");
//q 40
function makeAlbum(artist, title, tracks) {
    const album = {
        artist,
        title,
        tracks,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = makeAlbum("Pink Floyd", "The Dark Side of the Moon");
const album2 = makeAlbum("Led Zeppelin", "IV");
const album3 = makeAlbum("Michael Jackson", "Thriller", 9);
console.log(album1);
console.log(album2);
console.log(album3);
//Q#41 Magicians
let magicians_array = ["John", "Watson", "Gabriel", "Kevios"];
function show_magicians(Magicians) {
    for (let i = 0; i < Magicians.length; i++) {
        console.log(Magicians[i]);
    }
}
show_magicians(magicians_array);
//Q#42
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "Great" + " " + magicians[i];
    }
}
let magicians_array_old = magicians_array.slice();
make_great(magicians_array);
show_magicians(magicians_array);
//Q#43 Unchanged Array
console.log(magicians_array_old);
console.log(magicians_array);
//Q#44 Sanwiches
function sandwich_ingridients(...items) {
    for (let item of items) {
        console.log("- " + item);
    }
}
sandwich_ingridients("lettuce", "mayo", "chicken");
sandwich_ingridients("ketchup", "lettuce", "mustard", "cucumber");
//Q#45 Cars
function createCar(manufacturer, model, ...options) {
    const car = Object.assign({ manufacturer, model }, options);
    return car;
}
const myCar = createCar("Honda", "Civic", { color: "black", sunroof: true });
console.log(myCar);
export {};
