import { checkWindow } from "../functions/checkNode.js";
import { exec } from 'child_process';

// Add a file
export function add_(files){
    checkWindow()
    exec(`git add ${files}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}