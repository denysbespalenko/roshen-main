const docBody = document.querySelector('body');
const menuBnt = document.querySelector('.r-header__menu');
const menu = document.querySelector('.r-menu');
const codeBtn = document.querySelectorAll('.r-button a');
const menuItems = document.querySelectorAll('.r-menu li a');
const closeBtns = document.querySelectorAll('.r-close');
const questionItem = document.querySelectorAll('.r-question-item');
const winnersSelector = document.querySelectorAll('.r-content-selectors__item');
const winnersForms = document.querySelectorAll('.r-content-field-winners .r-content-field__wrapper');

menuBnt.addEventListener('click',function(){
    docBody.classList.toggle('r-show-menu');
});
if(codeBtn.length > 0){
    codeBtn.forEach(item => {
        item.addEventListener('click',function(e){
            document.querySelector(`${e.currentTarget.hash}`).classList.toggle('r-flex');
        });
    })
}
menuItems.forEach(item => {
    item.addEventListener('click',function(){
        docBody.classList.toggle('r-show-menu');
        if(/\#/.test(item.hash)) document.querySelector(`${item.hash}`).classList.toggle('r-flex');
    });
});

closeBtns.forEach(item => {
    item.addEventListener('click',function(){
        let parentElement = item.parentElement.parentElement;
        parentElement.classList.remove('r-flex');
        parentElement.classList.remove('r-show');
    })
});

if(questionItem.length > 0) {
    questionItem.forEach(item => {
        item.addEventListener('click',function(e){
            if(e.currentTarget.classList.contains('active')){
                e.currentTarget.classList.remove('active');
                return
            }
            questionItem.forEach(item => item.classList.remove('active'));
            e.currentTarget.classList.toggle('active')
        })
    })
}
if(winnersSelector.length > 0){
    winnersSelector.forEach(item => {
        item.addEventListener('click',function(e){
            if(e.currentTarget.classList.contains('active')) return
            winnersSelector.forEach(item=>{
                item.classList.remove('active');
            });
            e.currentTarget.classList.toggle('active');
            winnersForms.forEach(item => {
               item.classList.remove('r-show')
            });
            let idData = e.currentTarget.dataset.formId;
            let currentSelectorForm = document.querySelector(`#${idData}`);
            currentSelectorForm.classList.add('r-show')
        })
    })
}