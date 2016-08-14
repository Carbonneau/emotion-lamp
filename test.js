
var string = ")())())";
var direction = 0;

for(var i = 0; i < string.length; i++){
    if (string.charAt(i)=="("){
        direction++;
    } else {
        direction--;
    }
}

console.log(direction)