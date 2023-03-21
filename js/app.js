// 1. ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი
const deleteBtn = document.querySelector("#delete-btn");
deleteBtn.addEventListener("click", () => {
    deleteBtn.remove();
})

// 2. ჯავასკრიპტით შევქმნათ img tag
const imageSection = document.querySelector("body");
const addImage = document.createElement("img");
addImage.setAttribute("src", "https://picsum.photos/1400/800");
addImage.setAttribute("alt", "Main Banner");
addImage.classList.add("img-styles");
imageSection.append(addImage);

// 3. html-ში შექმნილი სექციის ცვლადში შენახვა
const countries = document.querySelector("#countries-list");

