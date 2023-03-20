// 1. ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი
const deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", (e) => {
    deleteBtn.remove();
})