const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// ventana
const ventana = document.querySelector(".ventana");
const closeventana = document.querySelector(".ventana-close");

if (ventana) {
  closeventana.addEventListener("click", () => {
    ventana.classList.add("hide-ventana");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      ventana.classList.remove("hide-ventana");
    }, 1000);
  });
}
