
const wrapper= document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');

registerLink.onClick = () => {
  wrapper.classList.add('active');
};
