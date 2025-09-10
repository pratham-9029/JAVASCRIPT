let arr = [6,78,9,12,2];
let target = 12;
let index = null;

for(let i=0; i<arr.length; i++){
    if(arr[i] == target){
        index = i;
    }
}
console.log(`${target} Value Found At ${index} index.`);
