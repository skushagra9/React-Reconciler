var change1 = [
  'USA', 'GERMANY', 'DENMARK'
]

var count = 0

function setReconciler(newState) {
  const displayDiv = document.getElementById("data-display");

  // Get the current state from the DOM
  const currentState = Array.from(displayDiv.querySelectorAll('p'))
    .map(p => p.textContent)
    .filter(text => text !== count.toString());

  // Calculate elements to add and remove
  const elementsToAdd = newState.filter(item => !currentState.includes(item));
  const elementsToRemove = currentState.filter(item => !newState.includes(item));

  // Remove elements
  elementsToRemove.forEach(item => {
    const element = Array.from(displayDiv.querySelectorAll('p'))
      .find(p => p.textContent === item);
    if (element) {
      displayDiv.removeChild(element);
    }
  });

  // Add new elements
  elementsToAdd.forEach(item => {
    const newElement = document.createElement('p');
    newElement.textContent = item;
    displayDiv.insertBefore(newElement, document.getElementById("counter"));
  });
}

function getState() {
  const displayDiv = document.getElementById("data-display");

  change1.forEach(item => {
    displayDiv.innerHTML += `<p>${item}</p>`;
  });
}

function counter() {
  const displayDiv = document.getElementById("counter-display");
  const counterElement = document.getElementById("counter");

  if (!counterElement) {
    // If counter element doesn't exist, create it
    displayDiv.innerHTML += `<p id="counter">${count}</p>`;
  } else {
    // If counter element exists, update its value
    counterElement.innerHTML = count;
  }
}

function increamentCounter() {
  count++
  counter()
}




document.addEventListener("DOMContentLoaded", counter);

document.addEventListener("DOMContentLoaded", getState);

