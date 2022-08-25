import { checkWindow } from "../functions/checkNode.js";
import { exec } from 'child_process';

export function checkout_(branchName){
    checkWindow()
    exec(`git checkout ${branchName}`, (err) => {
        if (err) {
            return console.log('Error running the command');
        }
    });
}