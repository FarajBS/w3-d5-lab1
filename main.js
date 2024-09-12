let btnOne      = document.getElementById('btn1');
let btnTwo      = document.getElementById('btn2');
let btnThree    = document.getElementById('btn3');


let txt1 = document.getElementById('text1');
let txt2 = document.getElementById('text2');
let txt3 = document.getElementById('text3');

txt1.classList.add('none');
txt2.classList.add('none');
txt3.classList.add('none');

btnOne.addEventListener('click', () => {
    txt1.classList.add('block');
    txt1.classList.remove('none');
    txt2.classList.add('none');
    txt2.classList.remove('block');
    txt3.classList.add('none');
    txt3.classList.remove('block');
});

btnTwo.addEventListener('click', () => {
    txt1.classList.add('none');
    txt1.classList.remove('block');
    txt2.classList.add('block');
    txt2.classList.remove('none');
    txt3.classList.add('none');
    txt3.classList.remove('block');
});

btnThree.addEventListener('click', () => {
    txt1.classList.add('none');
    txt1.classList.remove('block');
    txt2.classList.add('none');
    txt2.classList.remove('block');
    txt3.classList.add('block');
    txt3.classList.remove('none');
});