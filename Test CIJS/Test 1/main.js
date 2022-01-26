let array = [];
let a = [];
let output = [];

while (true) {
    let input = prompt('Nhập số nguyên Nhập stop để kết thúc ');
    if (input === "stop") {
        break
    }
    array.push(input) 
}

for (let k = 0; k < array.length; k++) {
    if(Number.isInteger(array[k]) == true){
        a.push(array[k]);
    }
}

for (let i = 1; i < array.length; i++) {
    let b = array[i]*array[i-1];
    output.push(b);
}

let max = output[0];

for (let h = 0; h < output.length; h++) {
    if(output[h] > max){
        max = output[h]
    }
}

alert( `số lớn nhất là:` + max);
