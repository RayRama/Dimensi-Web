const input = document.getElementById("myInput");
const container = document.getElementsByClassName("container")[0];
const paragraph = document.getElementById("myParagraph");
const buttonLocal = document.getElementById("myButtonLocal");
const buttonSession = document.getElementById("myButtonSession");

function changeColor() {
  container.style.backgroundColor = input.value !== "" ? input.value : "white"; // Menggunakan Ternary Operator
  paragraph.innerHTML = input.value !== "" ? input.value : "Hello World"; // Menggunakan Ternary Operator
  paragraph.style.color = input.value !== "" ? "white" : "black"; // Menggunakan Ternary Operator
}

function saveToLocalStorage() {
  localStorage.setItem("backgroundColor", container.style.backgroundColor);
  localStorage.setItem("paragraphText", paragraph.innerHTML);
  localStorage.setItem("paragraphColor", paragraph.style.color);
}

function loadFromLocalStorage() {
  if (localStorage.length === 0) return; // Guard Clause

  container.style.backgroundColor = localStorage.getItem("backgroundColor");
  paragraph.innerHTML = localStorage.getItem("paragraphText");
  paragraph.style.color = localStorage.getItem("paragraphColor");
}

function saveToSessionStorage() {
  sessionStorage.setItem("backgroundColor", container.style.backgroundColor);
  sessionStorage.setItem("paragraphText", paragraph.innerHTML);
  sessionStorage.setItem("paragraphColor", paragraph.style.color);
}

function loadFromSessionStorage() {
  if (sessionStorage.length === 0) return; // Guard Clause

  container.style.backgroundColor = sessionStorage.getItem("backgroundColor");
  paragraph.innerHTML = sessionStorage.getItem("paragraphText");
  paragraph.style.color = sessionStorage.getItem("paragraphColor");
}

// When the page is loaded, the function loadFromLocalStorage will be executed
window.onload = loadFromLocalStorage();

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    container.style.backgroundColor = input.value;
    paragraph.innerHTML = input.value;
    paragraph.style.color = "white";

    saveToLocalStorage();
  }

  if (!input.value) {
    container.style.backgroundColor = "white";
    paragraph.innerHTML = "Hello World";
    paragraph.style.color = "black";
  }
});

buttonLocal.addEventListener("click", function () {
  if (!localStorage.length) return alert("Tidak ada data yang disimpan"); // Guard Clause
  localStorage.clear();
  window.location.reload();
});

buttonSession.addEventListener("click", function () {
  if (!sessionStorage.length) return alert("Tidak ada data yang disimpan"); // Guard Clause
  sessionStorage.clear();
  window.location.reload();
});

// Mouse Events

paragraph.addEventListener("mouseover", function () {
  paragraph.style.color = "red";
});

paragraph.addEventListener("mouseout", function () {
  paragraph.style.color = "";
});
