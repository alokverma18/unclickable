const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
const yesBtnRect = yesBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Us moment ❤️:)';
    noBtn.style.visibility="hidden";
    yesBtn.style.left = wrapperRect.width-yesBtnRect.width-20 + 'px'
    yesBtn.innerHTML = '🏏';
});

noBtn.addEventListener('click', () => {
    question.innerHTML = "Who cares? 😂";
    noBtn.style.visibility="hidden";
    yesBtn.style.left = wrapperRect.width-yesBtnRect.width-20 + 'px'

});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});