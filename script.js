let input = document.querySelector("#inp");
let button = document.querySelector("#btn");

let lists = document.getElementById("lists");

button.addEventListener("click", function () {
    let li = document.createElement("li");

    let check = document.createElement("input");
    check.type = "checkbox";

    let edit = document.createElement("button");
    let deleteBTN = document.createElement("button");

    let span = document.createElement("span");

    span.textContent = input.value;
    edit.textContent = "Edit";
    deleteBTN.textContent = "Delete";

    li.appendChild(check);
    li.appendChild(span);
    li.appendChild(edit);
    li.appendChild(deleteBTN);

    deleteBTN.addEventListener("click", function () {
        li.remove();
    })

    edit.addEventListener("click", function () {
        let editList = prompt("Edit List", span.textContent);
        span.textContent = editList;
    });

    check.addEventListener("change", function () {
        span.classList.toggle("add")
    })

    lists.appendChild(li);

    input.value = "";


});

function dark() {
    document.body.classList.toggle("dark-mode");
}