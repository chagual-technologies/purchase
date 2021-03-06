/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as AllProduct} from './Products/AllProduct'
export {default as Product} from './Products/Product'
export {default as report} from './report'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
