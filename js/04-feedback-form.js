/*
TODO: Є форма зворотнього звʼязку.
TODO: При події submit потрібно зібрати усі дані з форми і вивести до консолі.
TODO: Коли користувач буде вводити своє імʼя в <input>, потрібно буде це імʼя записувати в <span class=class="js-user-name"></span>
*/

const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
  usernameOutput: document.querySelector('.js-user-name'),
};

refs.feedbackForm.elements.user_name.addEventListener('input', event => {
  const username = refs.feedbackForm.elements.user_name.value;

  refs.usernameOutput.textContent = username;
});

refs.feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    [refs.feedbackForm.elements.user_name.name]: refs.feedbackForm.elements.user_name.value.trim(),
    [refs.feedbackForm.elements.user_email.name]: refs.feedbackForm.elements.user_email.value.trim(),
    [refs.feedbackForm.elements.user_phone.name]: refs.feedbackForm.elements.user_phone.value.trim(),
  };

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('Усі поля мають бути заповненими!');

    return;
  }

  console.log(formData);

  refs.feedbackForm.reset();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  const boxesArr = [];

  let initialWidth = 30;
  let initialHeight = 30;

  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement('div');

    boxEl.style.width = `${initialWidth}px`;
    boxEl.style.height = `${initialHeight}px`;
    boxEl.style.backgroundColor = getRandomHexColor();

    boxesArr.push(boxEl);

    initialWidth += 10;
    initialHeight += 10;
  }

  ul.innerHTML = boxesArr.join('');
};
