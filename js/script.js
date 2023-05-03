// Copyright (c) 2023 Noah Smith All rights reserved
//
// Created by: Noah Smith
// Created on: Apr 2023
// This file contains the JS functions for index.html

"use strict";

/**

This function gets the subtotal, tax and total of the user's order and displays it back to the user
*/
function BurritoOrder() {
  const TAX = 0.13;
  let total = parseFloat(document.getElementById("user-total").value);
  
  // Get the size of the burrito
  let smallSize = parseFloat(document.getElementById("small").value);
  let mediumSize = parseFloat(document.getElementById("medium").value);
  let largeSize = parseFloat(document.getElementById("large").value);
  
  let selectSize = document.getElementById("size");
  let selectedSize = selectSize.options[selectSize.selectedIndex].value;
  
  // If user orders a small burrito
  if (selectedSize === "small") {
    smallSize = 8.99;
    mediumSize = 0;
    largeSize = 0;
    size = smallSize;
  }
  
  // If user orders a medium burrito
  else if (selectedSize === "medium") {
    smallSize = 0;
    mediumSize = 10.99;
    largeSize = 0;
    size = mediumSize;
  }
  
  // If user orders a large burrito
  else {
    smallSize = 0;
    mediumSize = 0;
    largeSize = 12.99;
    size = largeSize;
  }
  
  // Get the toppings
  let extraCheese = parseFloat(document.getElementById("extra-cheese").value);
  let extraGuacamole = parseFloat(document.getElementById("extra-guacamole").value);
  let extraSalsa = parseFloat(document.getElementById("extra-salsa").value);
  let bacon = document.getElementById("bacon").checked;
  let extraTomato = document.getElementById("extra-tomato").checked;
  let extraLettuce = document.getElementById("extra-lettuce").checked;

  // Formula for the price of the toppings
  let toppings = extraCheese + extraGuacamole + extraSalsa + bacon + extraTomato + extraLettuce;
  
  // if user selects extra cheese
  if (extraCheese !== 0) {
    extraCheese = 0.99;
  } 
  
  else {
    extraCheese = 0;
  }
  
  // if user selects extra guacamole
  if (extraGuacamole !== 0) {
    extraGuacamole = 0.99;
  }
  
  else {
    extraGuacamole = 0;
  }
  
  // if user selects extra salsa
  if (extraSalsa !== 0) {
    extraSalsa = 0.99;
  }
  
  else {
    extraSalsa = 0;
  }

  // if user selects bacon
  if (bacon !== 0) {
    bacon = 0.99;
  } 
  
  else {
    bacon = 0;
  }

  // if user selects extra tomato
  if (extraTomato !== 0) {
    extraTomato = 0.99;
  } 
  
  else {
    extraTomato = 0;
  }

  // if user selects extra lettuce
  if (extraLettuce !== 0) {
    extraLettuce = 0.99;
  } 
  
  else {
    extraLettuce = 0;
  }
  
  // Get sides
  // If user orders chips
  let chips;
  if (document.getElementById("chips").checked) {
    chips = 1.99;
  }
  
  else {
    chips = 0;
  }

  // If user orders a cookie
  let cookie;
  if (document.getElementById("cookie").checked) {
    cookie = 1.99;
  }
  
  else {
    cookie = 0;
  }

  // Formula for the price of the sides
  let sides = chips + cookie;
  
  // Get drink size
  let selectDrink = document.getElementById("drink");
  let drinkSize = selectDrink.options[selectDrink.selectedIndex].value;

  // If user orders a small drink
  let drink;
  if (drinkSize === "small-drink") {
    drink = 2.49;
  }
    
  // If user orders a large drink
  else {
    drink = 3.49;
  }
  
  // Formulas to find the subtotal and tax
  let subtotal = toppings + size + sides + drink;
  let tax = subtotal * TAX;
  let total = subtotal + tax
  
  document.getElementById("results").innerHTML = "Your subtotal is $" + subtotal.toFixed(2) + ", your tax is $" + tax.toFixed(2) + " and your total is $" + total.toFixed(2) + ". Thank you for ordering at Noah's Burritos! It will be ready in about 20 minutes."
}