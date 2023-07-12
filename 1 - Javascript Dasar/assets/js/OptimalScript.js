const input = document.getElementById("myInput");
const container = document.querySelector(".container");
const paragraph = document.getElementById("myParagraph");
const bodyTextColor = document.getElementsByTagName("BODY")[0];
const buttonLocal = document.getElementById("myButtonLocal");
const buttonSession = document.getElementById("myButtonSession");

function changeColor() {
  const newValue = input.value;
  container.style.backgroundColor = newValue || "white";
  paragraph.innerHTML = newValue || "Hello World";
  bodyTextColor.style.color = newValue ? "white" : "";
}

function saveToStorage(storageType) {
  storageType.setItem("backgroundColor", container.style.backgroundColor);
  storageType.setItem("paragraphText", paragraph.innerHTML);
  storageType.setItem("paragraphColor", bodyTextColor.style.color);
}

function loadFromStorage(storageType) {
  if (!storageType.length) return; // Guard Clause

  container.style.backgroundColor = storageType.getItem("backgroundColor");
  paragraph.innerHTML = storageType.getItem("paragraphText");
  bodyTextColor.style.color = storageType.getItem("paragraphColor");
}

function clearStorage(storageType) {
  if (!storageType.length) return alert("Tidak ada data yang disimpan"); // Guard Clause
  storageType.clear();
  window.location.reload();
}

// Ketika halaman diload, fungsi loadFromStorage akan dieksekusi
window.onload = () => loadFromStorage(localStorage); // Menggunakan Higher-Order Function

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    changeColor();

    saveToStorage(localStorage); // Menggunakan Higher-Order Function
  }
});

buttonLocal.addEventListener("click", function () {
  clearStorage(localStorage); // Menggunakan Higher-Order Function
});

buttonSession.addEventListener("click", function () {
  clearStorage(sessionStorage); // Menggunakan Higher-Order Function
});

// Mouse Events
paragraph.addEventListener("mouseover", function () {
  paragraph.style.color = "red";
});

paragraph.addEventListener("mouseout", function () {
  paragraph.style.color = "";
});

// Bonus: Menggunakan Media Query (Responsive Design)
const mediaQuery = window.matchMedia("(max-width: 600px)");

function handleMediaQueryChange(event) {
  const { matches } = event;
  const width = matches ? "80%" : "50%";
  input.style.width = width;
  buttonLocal.style.width = width;
  buttonSession.style.width = width;
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addEventListener("change", handleMediaQueryChange);
