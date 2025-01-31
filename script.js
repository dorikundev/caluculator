//数式定義
result = document.querySelector(".formula")
let currentFormula = "0";

//数式表示
function showFormula(){
    result.textContent =  currentFormula;
}

//数字入力
function addNumber(num) {
    if(currentFormula === "0" || num === "0"){
        currentFormula = num;  
    }else{
        currentFormula += num;  
    }
    showFormula(); 
}

//演算子入力
function addCharacter(operator){
    const lastChar = currentFormula.slice(-1);
    //演算子を連続で入力すると更新
    if (isCharacter(lastChar)) {
        currentFormula = currentFormula.slice(0, -1) + operator;
    } else {
        currentFormula += operator;
    }
    showFormula();
}

//バックスペース
function backspace(){
    if(currentFormula.length ===1){
        currentFormula = "0"
    }else{
    currentFormula = currentFormula.slice(0,-1);
    }
    showFormula();
}

//数式リセット
function resetFormula(){
    currentFormula = "0"
    showFormula();
}

//演算子ルール
function isCharacter(char) {
    return ['+', '-', '*', '/', '.'].includes(char);
}

//計算実行
function caluculate(){
    try{
    currentFormula = String(eval(currentFormula));
    showFormula()
    }catch{
        currentFormula = "エラー";
        showFormula();
        //1秒後リセット
        setTimeout(resetFormula, 1000);
    }
}
