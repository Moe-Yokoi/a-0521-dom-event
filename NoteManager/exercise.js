//solution goes here....


const addItemInput = document.querySelector('#add-input')
const itemUL = document.querySelector('#list')
const form = document.querySelector('#add')


form.addEventListener('submit', function(e){
    
        const newItemText = addItemInput.value
        const newItem = document.createElement('li')
        newItem.innerText = newItemText
        itemUL.appendChild(newItem)
        addItemInput.value = ''
        

})

