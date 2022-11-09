const modal_window_logIn = document.getElementById('modal_window_logIn');
const modal_window_signUp = document.getElementById('modal_window_signUp');
const modal_window_menu = document.getElementById('modal_window_menu');
const nav = document.getElementById('nav');

const logIn = document.getElementById('logIn');
const signUp = document.getElementById('signUp');
const gamburger = document.getElementById('gamburger');

const logInHref = document.getElementById('logInHref');
const signUpHref = document.getElementById('signUpHref');

const closeLog = document.getElementById('closeLog');
const closeSign = document.getElementById('closeSign');

const openModal = (name) => name.classList.add('active')
const closeModal = (name) => name.classList.remove('active')

logIn.onclick = () => openModal(modal_window_logIn);
signUp.onclick = () => openModal(modal_window_signUp);
gamburger.onclick = () => openModal(modal_window_menu);

closeLog.onclick = () => closeModal(modal_window_logIn);
closeSign.onclick = () => closeModal(modal_window_signUp);

logInHref.onclick = () => {
    closeModal(modal_window_signUp)
    openModal(modal_window_logIn)
}

signUpHref.onclick = () => {
    closeModal(modal_window_logIn)
    openModal(modal_window_signUp)
}

for (let item of nav.children) {
    item.onclick = () => closeModal(modal_window_menu);
}