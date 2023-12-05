function adicionar () {
const textElement = document.getElementById('texto');
const listElement = document.getElementById('lista');

const newItem = document.createElement('li');
newItem.innerText = textElement.value

newItem.onclick = function () {
    newItem.style.textDecoration = 'line-through';
}

listElement.appendChild(newItem);

textElement.value =null
}
