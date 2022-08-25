import { add_ } from './add/add.js'
import { branch_, branchAndMove_ } from './branch/branch.js'
import { checkout_ } from './checkout/checkout.js'
import { clone_, cloneTo_ } from './clone/clone.js'
import { init_, initToDir_ } from './init/init.js'


export const add = add_()
export const branch = branch_()
export const branchAndMove = branchAndMove_()
export const checkout = checkout_()
export const clone = clone_()
export const cloneTo = cloneTo_()
export const init = init_()
export const initToDir = initToDir_()