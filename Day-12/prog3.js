let arr = [10,43,2,45,1];
let MinValue = 0;

for(let i=0; i<arr.length; i++ ){
    if(arr[i] < arr[MinValue]){
        MinValue = i;
    }
}
console.log(arr[MinValue]);
