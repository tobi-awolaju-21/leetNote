const input = document.querySelector('.input');
const output = document.querySelector('.output');


//==================================== insert value ===================================
function insert(num) {
    input.value += num;
}
//=====================================================================================

//==================================== equal value ====================================
function equal() {
    if (eval(input.value) == undefined) {
        output.value = '0,00';
        input.value = '0,00';
    }
    if (eval(input.value) == Infinity) {
        output.value = '0,00';
        input.value = '0,00';
    }

    output.value = eval(input.value);
    // input.value += '=';
}
//=====================================================================================

//==================================== equal value press on 'enter' ====================================
document.onkeypress = function (e) {
    if (e.key == 'Enter') {
        equal();
    }
}
//=====================================================================================

//==================================== back value ====================================
function backspace() {
    input.value = input.value.substring(0, input.value.length - 1);
}
//=====================================================================================

//==================================== clean value ====================================
function clean() {
    input.value = '';
    output.value = '';
}
//=====================================================================================

//==================================== clean value press on 'del' ====================================
document.onkeydown = function (e) {
    if (e.key == 'Delete') {
        input.value = '';
        output.value = '';
    }
}
//=====================================================================================

//==================================== sqrt value ====================================
function btn_sqrt(num) {
    output.value = Math.sqrt(input.value);
    input.value = num + '(' + input.value + ')' + ' =';
}
//=====================================================================================

//==================================== persent value ====================================
function percent(num) {
    output.value = input.value / 100;
    input.value = num + input.value;
}
//=====================================================================================

//==================================== tan value ====================================
function tan(num) {
    // output.value = Math.tan(input.value * Math.PI / 180);
    output.value = Math.tan(input.value * Math.PI / 180);
    input.value = num + '(' + input.value + ')' + ' =';
}
//=====================================================================================

//==================================== sin value ====================================
function sin(num) {
    output.value = Math.sin(input.value * Math.PI / 180);
    input.value = num + '(' + input.value + ')' + ' =';
}
//=====================================================================================

//==================================== cos value ====================================
function cos(num) {
    output.value = Math.cos(input.value * Math.PI / 180);
    input.value = num + '(' + input.value + ')' + ' =';
}
//=====================================================================================

//==================================== 1\n value ====================================
function negNum() {
    output.value = 1 / input.value;
    input.value = input.value + ' * (-1)' + ' =';
}
//=====================================================================================

//==================================== pi value ====================================
function pi() {
    output.value = 3.14159265359;
    input.value = 'pi =';
}
//=====================================================================================

//==================================== factorial value ====================================
function factorial() {
    let n = input.value;
    let compos = 1
    for (let i = 1; i <= n; i++) {
        compos *= i;
        output.value = compos;
    }
}
//=====================================================================================

//==================================== log2 value ====================================
function log2(num) {
    output.value = Math.log2(input.value);
    input.value = num + '(' + input.value + ')' + ' =';
}
//=====================================================================================

//==================================== ln value ====================================
function ln(num) {
    output.value = Math.log(input.value);
    input.value = num + '(' + input.value + ')' + ' =';
}
//=====================================================================================

//==================================== square value ====================================
function square() {
    output.value = input.value * input.value;
}
//=====================================================================================

//==================================== e ====================================
function e() {
    output.value = 2.71828183;
}
//=====================================================================================

const hide_show = document.querySelector('.hide-show');
let tang = document.querySelector(".tan");

hide_show.onclick = function hideshow() {
    tang.style.display = (tang.style.display == 'block') ? 'none' : 'block'
}




