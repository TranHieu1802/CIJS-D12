let array = [];
let team1 = [];
let team2 = [];
let output = [];
let a = 0;
let b = 0;

while (true) {
    let input = (prompt('Nhập cân nặng của từng người(Nhập stop để kết thúc)'));
    if (input === "stop") {
        break
    }
    parseInt(input);
    array.push(input) 
}

for (let k = 0; k < array.length; k++) {
    if(k % 2 == 0){
        team1.push(array[k]);
    }
    if(k % 2 == 1){
        team2.push(array[k]);
    }
}

for (let i = 1; i < team1.length; i++) {
    a = a + team1[i]
}

for (let h = 0; h < team2.length; h++) {
    b = b + team2[h]
}

alert(`Team 1 là :` + team1);
alert(`Team 2 là :` + team2);
alert(`Cân nặng team 1 là:` + a);
alert(`Cân nặng team 2 là:` + b);