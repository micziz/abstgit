import { checkWindow } from "../functions/checkNode.js";
import { exec } from 'child_process';

export function clone(repo){
    checkWindow()
    exec(`git clone https://github.com/${repo}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}

export function cloneTo(repo, location){
    checkWindow()
    exec(`git clone https://github.com/${repo} ${location}`, (err) => {
        if (err) {
          return console.log('Error running the command');
        }             
    });
}