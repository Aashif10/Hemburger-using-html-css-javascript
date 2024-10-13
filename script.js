let hem = document.getElementById("icon");
let list = document.getElementById("list");

hem.addEventListener("click", () => {
    list.classList.toggle("active");
    cross.classList.remove("cross")
})
let cross = document.getElementById("cross")
cross.addEventListener("click", () => {
    cross.classList.toggle("active");
    list.classList.remove("hem")
})