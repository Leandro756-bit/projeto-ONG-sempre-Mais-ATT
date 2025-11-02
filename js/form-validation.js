// js/form-validation.js
export function initFormValidation() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = form.querySelector("#nome");
    const email = form.querySelector("#email");
    const mensagem = form.querySelector("#mensagem");

    if (!nome.value || !email.value.includes("@") || !mensagem.value) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    const dados = {
      nome: nome.value,
      email: email.value,
      mensagem: mensagem.value
    };

    localStorage.setItem("cadastro", JSON.stringify(dados));
    alert("Dados salvos com sucesso!");
    form.reset();
  });
}
