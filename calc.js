#!/usr/bin/env node
console.log(process.argv);
var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --plus', 'add it up')
  .option('-m, --minus', 'subtract it')
  .option('-*, --times', 'multiply it')
  .option('-/, --divide', 'divide it')
  .parse(process.argv);

console.log("Welcome to the Four Function Calculator");

first = parseInt(program.args[0]);
second = parseInt(program.args[1]);
 
 function plus (first, second){
 		answer = first + second;
 		console.log(answer);
 };

  function minus (first, second){
 		answer = first - second;
 		console.log(answer);
 };

  function times (first, second){
 		answer = first * second;
 		console.log(answer);
 };

  function divide (first, second){
 		answer = first / second;
 		console.log(answer);
 };

if (program.plus) plus(first, second);
if (program.minus) minus(first, second);
if (program.times) times(first, second);
if (program.divide) divide(first, second);
