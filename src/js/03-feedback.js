import throttle from 'lodash.throttle';
const OBJECT_OF_INPUTS = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(OBJECT_OF_INPUTS)) || {};

const formEl = document.querySelector('.feedback-form');
populateInputeArea();

formEl.addEventListener('input', throttle(getInputChange, 500));
formEl.addEventListener('submit', clearInputChange);

function getInputChange(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(OBJECT_OF_INPUTS, JSON.stringify(formData));
  console.log('Local storege:', formData);
}

function clearInputChange(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value.trim() === '' || message.value === '') {
    alert('Please, fill in all the fields');
  } else {
    const inputDataObject = {
      email: email.value,
      message: message.value,
    };
    console.log('Data object:', inputDataObject);
    e.currentTarget.reset();
    localStorage.removeItem(OBJECT_OF_INPUTS);
    formData = {};
  }
}

function populateInputeArea() {
  if (formData) {
    formEl.elements.email.value = formData.email || '';
    formEl.elements.message.value = formData.message || '';
  }
}
