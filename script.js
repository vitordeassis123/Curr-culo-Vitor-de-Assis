document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA PARA O HEADER ENCOLHER AO ROLAR (Adicionada) ---
    const header = document.querySelector('header');
    
    // Define a partir de quantos pixels de rolagem o header deve encolher
    const shrinkOn = 80; 

    const handleScroll = () => {
        if (window.scrollY > shrinkOn) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Adiciona o 'escutador' de evento de scroll na janela
    window.addEventListener('scroll', handleScroll);


    // --- LÓGICA PARA TROCA DE TEMA ---
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    };

    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });


    // --- LÓGICA PARA O MODAL DA IMAGEM ---
    const modal = document.getElementById("image-modal");
    const profileImg = document.getElementById("profile-img");
    const modalImg = document.getElementById("modal-image");
    const closeModal = document.querySelector(".close-modal");

    profileImg.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});