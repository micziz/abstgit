import { checkWindow } from "../functions/checkNode.js";
import { exec } from 'child_process';

export function init_(){
    checkWindow()
    exec(`git init`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

export function initToDir_(dir){
    checkWindow()
    exec(`git init ${dir}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}