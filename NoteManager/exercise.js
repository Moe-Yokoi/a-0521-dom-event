//solution goes here....


const addItemInput = document.querySelector('#add-input')
const itemUL = document.querySelector('#list')
const form = document.querySelector('#add')
const pencil = document.querySelector('.fa-pencil-square-o')
const times = document.querySelector('.fa-times')



form.addEventListener('submit', function(e){
    
        const newItemText = addItemInput.value
        const newList = document.createElement('li')
        const newP1 = document.createElement('p')
        const newP2 = document.createElement('p')
        const newI1 = document.createElement('i')
        const newI2 = document.createElement('i')
        // newList.innerText = newItemText
        // itemUL.appendChild(newList)
        
        newP1.innerText = newItemText
        newP2.appendChild(pencil)
        newP2.appendChild(times)
        newList.appendChild(newP1)
        newList.appendChild(newP2)
        itemUL.appendChild(newList)


        addItemInput.value = ''
        

})



