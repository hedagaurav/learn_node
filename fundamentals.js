module.exports = {
    z:30,
    a:1,
    f: function(no=10){
        return no;
    }
}
/* fundamentals of node js */

let x = '20';
let z = 30;
if (x===20){
    // console.log("x value and type matched.");
}

if (x==20){
    // console.log("x only value match.");
}

for (i = 0; i < 10; i++) {
    // console.log(i);
    
}

const arr = [1,2,3,4,5];
// console.log(arr);

let res = arr.filter((item) =>{
    return item == 3
});
console.log(res);