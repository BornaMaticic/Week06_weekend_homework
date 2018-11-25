document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const form = document.querySelector('#new-item-form');
form.addEventListener('submit', handleSubmit);

const inputDelete = document.querySelector('#delete');
inputDelete.addEventListener('click', deleteButton);
})

const deleteButton = function () {
  const footballersAdded = document.querySelector('#footballers-added');
  footballersAdded.innerHTML = '';
}

const handleSubmit = function (event) {
  event.preventDefault();


  const inputFullName = event.target.fullName.value;
  const inputValue = event.target.value.value;
  const inputPosition = event.target.position.value;

  const footballersAdded = document.querySelector('#footballers-added');


  const squadListItem = document.createElement('section');
  const fullName = document.createElement('h1');
  const value = document.createElement('h2');
  const position = document.createElement('h3');


  fullName.textContent = `Full Name: ${inputFullName}`;
  value.textContent = `Value: ${inputValue} £`;
  position.textContent = `Position: ${inputPosition}`;

  squadListItem.appendChild(fullName);
  squadListItem.appendChild(value);
  squadListItem.appendChild(position);

  footballersAdded.appendChild(squadListItem);

  event.target.reset();
}
