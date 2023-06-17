import throttle from 'lodash.throttle';
const OBJECT_OF_INPUTS = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(OBJECT_OF_INPUTS)) || {};

const formEl = document.querySelector('.feedback-form');
populateInputeArea();
console.log(formEl.elements);

formEl.addEventListener('input', throttle(getInputChange, 500));
formEl.addEventListener('submit', clearInputChange);

function getInputChange(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(OBJECT_OF_INPUTS, JSON.stringify(formData));
}

function clearInputChange(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(OBJECT_OF_INPUTS);
}

function populateInputeArea() {
  if (formData) {
    formEl.elements.email.value = formData.email || '';
    formEl.elements.message.value = formData.message || '';
  }
}
