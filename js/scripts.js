const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});
const form = document.getElementById('cadastro-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(form.checkValidity()) {
        message.textContent = "Cadastro realizado com sucesso!";
        message.style.color = "green";
        form.reset();
    } else {
        message.textContent = "Preencha todos os campos corretamente.";
        message.style.color = "red";
    }
});
function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => { toast.style.display = "none"; }, 3000);
}

// Exemplo de uso ao clicar no botão "Participar":
document.querySelectorAll('.card button').forEach(btn => {
    btn.addEventListener('click', () => {
        showToast("Obrigado por participar do projeto!");
    });
});
let current = 0;
const slides = document.querySelectorAll('.carousel img');
const total = slides.length;

// Função para mostrar slide
function showSlide(index) {
    slides.forEach(img => img.classList.remove('active'));
    slides[index].classList.add('active');
}

// Troca automática a cada 3 segundos
setInterval(() => {
    current = (current + 1) % total;
    showSlide(current);
}, 3000);

// Botões prev/next
document.querySelector('.next').addEventListener('click', () => {
    current = (current + 1) % total;
    showSlide(current);
});

document.querySelector('.prev').addEventListener('click', () => {
    current = (current - 1 + total) % total;
    showSlide(current);
});



