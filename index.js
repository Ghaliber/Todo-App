let X = document.getElementById('add')
let Task = document.getElementsByTagName('input')[0]

X.addEventListener("click", function () {
    let btn1 = document.createElement('button')
    btn1.className = 'btn-test'
    let btn2 = document.createElement('button')
    btn1.innerHTML = "Complete"
    btn2.innerHTML = "Delete"
    let toDo = document.createElement('H3')
    toDo.innerText = Task.value

    Task.value = ''
    if(toDo.innerText !== ''){
        document.body.appendChild(btn1)
        document.body.appendChild(btn2)
        document.body.appendChild(toDo)
    }
    

    btn1.addEventListener("click", function () {
       
            if (btn1.innerHTML === "Undo") {
                btn1.innerHTML = "Complete"
                toDo.style.textDecoration = 'none'
            }
            else if (btn1.innerHTML === "Complete") {
                btn1.innerHTML = "Undo"
                toDo.style.textDecoration = 'line-through'
            }

       
    })
btn2.addEventListener('click', function(){
    btn1.remove()
    btn2.remove()
    toDo.remove()
})





})
