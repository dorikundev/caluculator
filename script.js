//定数定義
const INITIAL_VALUE = "0";
const ERROR_MESSAGE = "エラー";
const ERROR_TIMEOUT = 1000;
const OPERATORS = ['+', '-', '*', '/', '.'];

//DOM要素取得
const result = document.querySelector(".formula");
let currentFormula = INITIAL_VALUE;

//数式表示
function showFormula() {
    result.textContent = currentFormula;
}

//数字入力
function addNumber(num) {
    if (currentFormula === INITIAL_VALUE) {
        currentFormula = num;
    } else {
        currentFormula += num;
    }
    showFormula();
}

//演算子入力
function addCharacter(operator) {
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
function backspace() {
    if (currentFormula.length === 1) {
        currentFormula = INITIAL_VALUE;
    } else {
        currentFormula = currentFormula.slice(0, -1);
    }
    showFormula();
}

//数式リセット
function resetFormula() {
    currentFormula = INITIAL_VALUE;
    showFormula();
}

//演算子判定
function isCharacter(char) {
    return OPERATORS.includes(char);
}

//計算実行
function calculate() {
    try {
        currentFormula = String(eval(currentFormula));
        showFormula();
    } catch (error) {
        currentFormula = ERROR_MESSAGE;
        showFormula();
        //1秒後リセット
        setTimeout(resetFormula, ERROR_TIMEOUT);
    }
}