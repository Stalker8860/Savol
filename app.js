const wrapper = document.querySelector('.wrapper');
const quiz = document.querySelector('.quiz');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const yesBtnRect = yesBtn.getBoundingClientRect();

yesBtn.addEventListener('mouseover', () => {
   const i = Math.floor(Math.random() * (wrapperRect.width - yesBtnRect.width)) + 1;
   const j = Math.floor(Math.random() * (wrapperRect.height - yesBtnRect.height)) + 1;

   yesBtn.style.left = i + "px";
   yesBtn.style.top = j + "px";
});

noBtn.addEventListener('click', () =>{
    quiz.innerHTML ='Boshqa ilojingham yo`qda!';
});