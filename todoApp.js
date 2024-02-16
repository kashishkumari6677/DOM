let root=document.querySelector("#root")
let todoDiv=document.createElement("div")
let formDiv=document.createElement("div")
root.appendChild(todoDiv)
todoDiv.appendChild(formDiv)
let todoInput=document.createElement("input")
let addButton=document.createElement("button")
formDiv.appendChild(todoInput)
formDiv.appendChild(addButton)
addButton.innerHTML="Add"
todoInput.setAttribute("placeholder","add the number")
todoDiv.classList.add("todoDiv")
formDiv.classList.add("todo")
addButton.addEventListener("click",function(){
let itemDiv=document.createElement("div")
let addItemDiv=document.createElement("div")
todoDiv.append(itemDiv)
itemDiv.append(addItemDiv)
itemDiv.classList.add("itemMain")
addItemDiv.classList.add("itemDiv")
let item=document.createElement("h1")
addItemDiv.append(item)
item.innerHTML=todoInput.value
let edDiv=document.createElement('div')
addItemDiv.append(edDiv)
let delImage=document.createElement('img')
let eidImage=document.createElement('img')
edDiv.append(delImage)
edDiv.append(eidImage)
delImage.src='./media/delete.png'
eidImage.src='./media/edit.png'
edDiv.classList.add("ed")
//delete function
delImage.addEventListener('click',function(){
    edDiv.parentElement.remove()
})
//editing system
let editDiv=document.createElement('div')
let editInput=document.createElement('input')
let updateImage=document.createElement('img')
itemDiv.append(editDiv)
editDiv.append(editInput)
editDiv.append(updateImage)
updateImage.src='./media/updated.png'
editDiv.classList.add('edit')
editDiv.style.display="none"
//edit function
eidImage.addEventListener('click',function(){
editDiv.style.display="flex"
addItemDiv.style.display='none'
editInput.value=item.innerHTML
})
//update function
updateImage.addEventListener('click',function(){
    editDiv.style.display="none"
    addItemDiv.style.display='flex'
    item.innerHTML=editInput.value
})
    todoInput.value=''
})
