const removeFromArray = function(array, ...args) {
    let newArray = array.filter((item) => {
        return !args.includes(item);
    })

    return newArray;
}


// Do not edit below this line
module.exports = removeFromArray;


// FIRST SUCCESS, BEFORE CHECKING OUT SOLUTION
// const removeFromArray = function() {
//     let itemsToRemove = Array.from(arguments).slice(1);
//     let arr = arguments[0]; 

//     //Check if the first argument is an array
//     if (Array.isArray(arguments[0])) {
//         let i = 0;

//         while (i < arr.length) {
//             if (itemsToRemove.includes(arr[i])) {
//                 arr.splice(i, 1);
//             } else {
//                 i++;
//             };
//         };

//     console.log(arr);
//     return arr;
    
//     } else {console.log("The first argument must be an array.")};

// };

//REWRITTEN FIRST SOLUTION
// const removeFromArray = function(array, ...args) {
//     let newArray = [];

//     array.forEach((item) => {
//         if(!args.includes(item)) {
//             newArray.push(item);
//         }
//     })

//     return newArray;
// }