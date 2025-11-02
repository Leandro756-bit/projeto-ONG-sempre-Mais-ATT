// js/spa.js
export function initSPA() {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const url = event.target.getAttribute("href");

      fetch(url)
        .then(res => res.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          main.innerHTML = doc.querySelector("main").innerHTML;
        })
        .catch(err => console.error("Erro ao carregar página:", err));
    });
  });
}
