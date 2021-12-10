const btn = document.querySelector('#btn');

const table = document.querySelector('.table');

btn.addEventListener('click', () => {
    const column = document.querySelector("#column").value;
    const row = document.querySelector("#row").value;
    for(var i = 0; i < column; i++){
        newColumn = document.createElement('TR');
        table.appendChild(newColumn);
        for(var j = 0; j < row; j++){
            newRow = document.createElement('TD');
            newColumn.appendChild(newRow);
        }
    }
});

const btnn = document.querySelector('#btnn');
const result = document.querySelector('#result');
const listNumber = [];

function kiem_tra_snt(n){
    let flag = true;

    if(n < 2){
        flag = false;
    }else{
        for(var i = 2; i < n -1 ; i++){
            if(n % i == 0){
                flag = false;
                break;
            }
        }
    }

    if(flag == true){
        listNumber.push(n);
    }
}

btnn.addEventListener('click',()=>{
    let number_A = parseInt(document.querySelector('#number_A').value);
    let number_B = parseInt(document.querySelector('#number_B').value);

    if(number_A <= number_B){
        for(let i = number_A; i <= number_B; i++){
            kiem_tra_snt(i);
        }
        result.innerHTML += `<p> Các số nguyên tố là ${listNumber}</p>`;
    }else{
        result.innerHTML += `<p> Vui lòng nhập số B lớn hơn số A </p>`;
    }
    
});