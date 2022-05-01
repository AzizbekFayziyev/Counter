window.addEventListener("DOMContentLoaded", function () {

    const add = document.querySelector("#add"),
        remove = document.querySelector("#remove"),
        number = document.querySelector("p");

    let idx = 0;

    add.addEventListener("click", function () {
        localStorage.setItem("localStorage", idx);
        idx++;
        number.innerHTML = idx;
    });

     remove.addEventListener("click", function () {
        idx = 0;
        number.innerHTML = idx;
    });

});