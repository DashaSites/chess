const signUpButtons = document.querySelectorAll('.registration-button');
const popup = document.querySelector('.popup');


const handleSignUpButton = () => {
    popup.classList.toggle('popup_opened');
}

signUpButtons.forEach((button) => {
    button.addEventListener('click', handleSignUpButton);
});