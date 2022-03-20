const inputBox = document.querySelector(".inputField input")
const addBtn = document.querySelector(".inputField button")
const todoList = document.querySelector(".todo-list")
const deleteBtn = document.querySelector(".delete-btn")
inputBox.onkeyup = () => {
	let userData = inputBox.value
	if (userData.trim() != 0) {
		addBtn.classList.add("active")
	} else {
		addBtn.classList.remove("active")
	}
}

addBtn.onclick = () => {
	let userData = inputBox.value
	let getLocalStorage = localStorage.getItem("New Todo")
	if(getLocalStorage == null) {
		listArr = []
	} else {
		listArr = JSON.parse(getLocalStorage)
	}
	listArr.push(userData)
	localStorage.setItem("New Todo", JSON.stringify(listArr))
	showTasks()
}

function showTasks () {
	let getLocalStorage = localStorage.getItem("New Todo")
	if(getLocalStorage == null) {
		listArr = []
	} else {
		listArr = JSON.parse(getLocalStorage)
	}
	let newLiTag = '';
	listArr.forEach((element, index) => {
		newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`
	})
	todoList.innerHTML = newLiTag
	inputBox.value = ""
}

function deleteTask(index) {
	let getLocalStorageData = localStorage.getItem("New Todo")
	listArr = JSON.parse(getLocalStorageData)
	listArr.splice(index,1)
	localStorage.setItem("New Todo", JSON.stringify(listArr))
	showTasks()
}

// deleteBtn.innerHTML = "X"
// deleteBtn.addEventListener("click", function(){
// 	listArr.splice(index, 1)
// 	localStorage.setItem("New Todo", JSON.stringify(listArr))
// 	render()
// })