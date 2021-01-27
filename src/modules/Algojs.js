"use strict";

// --------------------------------------------Function without argument--------------------------------------------
    // export function isoNum() {
    //    return 42;
    // }
// --------------------------------------------------- Function with arguments -------------------------------------
    // export function myFct(arg1, arg2) {
    //    return arg1 + arg2;
    // }
// --------------------------------------------------- Messi’s Goal Total -------------------------------------
    // export function goalTotal(a, b, c){
    //    return a + b + c;
    // }         
// // --------------------------------------------------- Grasshopper Order of Operations ------------------------------------
    // export function GrasshopperOrder(){
    //    return 2 * 2 * 2 * 2 * 2;
    // }
// --------------------------------------------------- Return the First Element in an Array -------------------------------------
    // export function getFirstValue(){
    //     var tab = [58, 34, 29];
    //     return tab[0];
    // }    
// --------------------------------------------------- Find the Smallest and Biggest Numbers -------------------------------------
    // export function minMax(tab){
    //     var a = tab[0];
    //     var b = tab[0];
    //     for(var i=0; i < tab.length; i++){
    //         if(a > tab[i+1]){
    //             a = tab[i+1];
    //         }
    //         if(b < tab[i+1]){
    //             b = tab[i+1];
    //         }
    //     }
    //     var tab1 = [a, b];
    // return tab1;
    // }
// --------------------------------------------------- Sort by String Length -------------------------------------
    // export function sortByLength(tab){
    //     var tab2 = tab;
    //     var tempo = 0;
    //     for(var i = 0; i < tab.length-1; i++){
    //         for(var j = i + 1; j < tab.length; j++)
    //             if(tab2[i].length > tab2[j].length){
    //                 tempo = tab2[i];
    //                 tab2[i] = tab2[j];
    //                 tab2[j] = tempo;
    //             }
    //         }
    //     return tab2;
    // }
// --------------------------------------------------- Filter Strings from Array -------------------------------------
    // export function filterArray(){
    //     var tab = [1, 1.5, 2, 3, "a", "b", 4];
    //     var tab2 = [];
    //     for(var i = 0; i < tab.length; i++){
    //         if(tab[i] % 1 === 0 ){
    //             tab2.push(tab[i]);
    //         }
    //     }
    //     return tab2;
    // }
// --------------------------------------------------- Return Last Item -------------------------------------
    // export function lastItem(sent){
    //      var a = sent.length -1;
    //      var b = sent.charAt(a);
    //      return b;
    // }
// --------------------------------------------------- The Farm Problem -------------------------------------
    // export function animals(){
    //     var a = 2; var b = 3; var c = 5;
    //     var chicken = a * 2
    //     var cows = b * 4
    //     var pigs = c * 4
    //     return chicken + cows + pigs;
    // }
// --------------------------------------------------- Reverse an Array -------------------------------------
    // export function reverseArray(){
    //     var tab = [1, 2, 3, 4];
    //     var tab2 = tab
    //     var min = 0;
    //     for(var i = 0; i < tab.length-1; i++){
    //         for(var j = i + 1; j < tab.length; j++){
    //             if(tab2[i] < tab2[j]){
    //                 min = tab2[i];
    //                 tab2[i] = tab2[j];
    //                 tab2[j] = min;
    //             }
    //         } 
    //     }
    //     return tab2;
    // }
// --------------------------------------------------- Return the Next Number from the Integer Passed -------------------------------------
    // export function addition(){
    //     var numb = 9;
    //     return numb + 1;
    // }
// --------------------------------------------------- Boolean to String Conversion -------------------------------------
    // export function boolToString(flag){
    //     if(flag === true){
    //         return 'true';
    //     }
    //     if(flag === false){
    //         return 'false';
    //     }
    // }
// --------------------------------------------------- Filter out Strings from an Array -------------------------------------
    export function filterArrayInt(tab){
        var tab2 = [];
        for(var i = 0; i < tab.length; i++){
            if(typeof tab[i] === "number"){
                tab2.push(tab[i]);
            }
        }
    return tab2;
    }
// --------------------------------------------------- Array of Multiples -------------------------------------
    // export function arrayOfMultiples(num, length){
    //     var tab = [];
    //     var min = 0;
    //     for(var i = 1; i <= length; i++){
    //         min = num * i;
    //         tab.push(min);
    //     }
    // return tab;
    // }
// --------------------------------------------------- Convert Hours and Minutes into Seconds -------------------------------------
    // export function convert(hours, minutes){
    //     var xa = hours * 3600;
    //     var xb = minutes * 60;
    //     return xa + xb;
    // }
// --------------------------------------------------- Return Negative -------------------------------------
    // export function returnNegative(a){
    //     if(a <= 0){
    //         return a;
    //     }
    //     if(a > 0){
    //         return a * -1;
    //     }
    // }
// --------------------------------------------------- Simple Loop -------------------------------------
    // export function simpleLoop(numb){
    //     var tab = [];
    //     var add = 0;
    //     for(var i = 0; i < numb; i++){
    //         add = i + 1;
    //         tab.push(add);
    //     }
    //     return tab;
    // }
// --------------------------------------------------- Area of a Rectangle -------------------------------------
    // export function getArea(a, b){
    //     if(a <= 0 || b <= 0){
    //         return -1;
    //     }
    //     var area = a * b;
    //     return area;
    // }
// --------------------------------------------------- Two Makes Ten -------------------------------------
    // export function makesTen(a, b){
    //     if(a === 10 || b === 10 || a + b === 10){
    //         return true;
    //     }
    // return false;
    // }

// --------------------------------------------------- Add up the Numbers from a Single Number -------------------------------------
    // export function addUp(a){
    //     var sum = 0;
    //     var plus = 0;
    //     for(var i = 1; i < a+1; i++){
    //         plus = plus + i
    //     }
    //     return plus;
    // }
// --------------------------------------------------- Matchstick Houses -------------------------------------
    // export function matchHouses(step){
    //     if(step === 0){
    //         return 0;
    //     }
    //     var sum = 6
    //     for(var i = 1; i < step; i++){
    //         sum = sum + 5;
    //     }
    // return sum
    // }