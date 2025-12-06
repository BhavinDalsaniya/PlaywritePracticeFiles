//Approach 1: 

/*import {appname} from "./Module"
import {add} from "./Module"
import {Formatter} from "./Module"
*/

/*
import {appname,add,Formatter} from "./Module";  


console.log(appname);
console.log(add(10,20));
console.log(Formatter.toUpper("welcome"));

*/

//Approach 2: 
//Import Everything (Namespace Import)
//This is useful when you want to group everything from a module or avoid listing individual exports.

import * as utils from "./Module";

console.log(utils.appname);
console.log(utils.add(10,20));
console.log(utils.Formatter.toUpper("welcome"));