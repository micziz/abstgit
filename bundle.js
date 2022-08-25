import { exec } from 'child_process';

function checkWindow() {
    if (typeof window !== 'undefined'){
        console.log('You are in a browser! git-utils does not support browsers.');
    }
}

// Add a file
function add_(files){
    checkWindow();
    exec(`git add ${files}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function branch_(branchName){
    checkWindow();
    exec(`git branch ${branchName}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function branchAndMove_(branchName){
    checkWindow();
    exec(`git branch -m ${branchName}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function checkout_(branchName){
    checkWindow();
    exec(`git checkout ${branchName}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function clone_(repo){
    checkWindow();
    exec(`git clone https://github.com/${repo}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function cloneTo_(repo, location){
    checkWindow();
    exec(`git clone https://github.com/${repo} ${location}`, (err) => {
        if (err) {
          return console.log('Error running the command');
        }             
    });
}

function init_(){
    checkWindow();
    exec(`git init`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

function initToDir_(dir){
    checkWindow();
    exec(`git init ${dir}`, (err) => {
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

export { add, branch, branchAndMove, checkout, clone, cloneTo, init, initToDir };
