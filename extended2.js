// 2. Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.

var arr = [];
for(let i = 0; i <= 100; i++){
    if(i > 5){
        digit1 = i % 5
        let n = i;
        while (n >= 5){
            n /= 5;
        }
        let digit2  = Math.floor(n)
        
        if(digit1 == digit2){
            arr.push(i);
        }
    }
}
console.log(arr)