'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var child_process = require('child_process');

function checkWindow() {
    if (typeof window !== 'undefined'){
        console.log('You are in a browser! git-utils does not support browsers.');
    }
}

// Add a file
function add_(files){
    checkWindow();
    child_process.exec(`git add ${files}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function branch_(branchName){
    checkWindow();
    child_process.exec(`git branch ${branchName}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function branchAndMove_(branchName){
    checkWindow();
    child_process.exec(`git branch -m ${branchName}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function checkout_(branchName){
    checkWindow();
    child_process.exec(`git checkout ${branchName}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function clone_(repo){
    checkWindow();
    child_process.exec(`git clone https://github.com/${repo}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function cloneTo_(repo, location){
    checkWindow();
    child_process.exec(`git clone https://github.com/${repo} ${location}`, (err) => {
        if (err) {
          return console.log('Error running the command');
        }             
    });
}

function init_(){
    checkWindow();
    child_process.exec(`git init`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function initToDir_(dir){
    checkWindow();
    child_process.exec(`git init ${dir}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

const add = add_();
const branch = branch_();
const branchAndMove = branchAndMove_();
const checkout = checkout_();
const clone = clone_();
const cloneTo = cloneTo_();
const init = init_();
const initToDir = initToDir_();

exports.add = add;
exports.branch = branch;
exports.branchAndMove = branchAndMove;
exports.checkout = checkout;
exports.clone = clone;
exports.cloneTo = cloneTo;
exports.init = init;
exports.initToDir = initToDir;
