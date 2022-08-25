export function checkWindow() {
    if (typeof window !== 'undefined'){
        console.log('You are in a browser! git-utils does not support browsers.')
    }
}
