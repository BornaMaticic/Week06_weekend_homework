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

  // get values from form
  const inputFirstName = event.target.firstName.value;
  const inputLastName = event.target.lastName.value;
  const inputPosition = event.target.position.value;

  const footballersAdded = document.querySelector('#footballers-added');

  //create new blank elements
  const squadListItem = document.createElement('section');
  const firstName = document.createElement('h1');
  const lastName = document.createElement('h2');
  const position = document.createElement('h3');

  // set the text of new blank elements using values from form (above)
  firstName.textContent = inputFirstName;
  lastName.textContent = inputLastName;
  position.textContent = inputPosition;

  squadListItem.appendChild(firstName);
  squadListItem.appendChild(lastName);
  squadListItem.appendChild(position);

  footballersAdded.appendChild(squadListItem);

  event.target.reset();
}
