import { checkWindow } from "../functions/checkNode.js";
import { exec } from 'child_process';

export function branch_(branchName){
    checkWindow()
    exec(`git branch ${branchName}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

export function branchAndMove_(branchName){
    checkWindow()
    exec(`git branch -m ${branchName}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}