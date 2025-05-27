window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

function handleScrollAnimations() {
    const techElements = document.querySelectorAll('.contenedor-tecnologias div');
    const projectCards = document.querySelectorAll('.proyecto-card');
    const aboutElements = document.querySelectorAll('.sobre-mi-container > div');
    const elements = [...techElements, ...projectCards, ...aboutElements];
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimations);
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

// Funcionalidad del botón y modal de certificados
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('certificadoModal');
    const verCertificadosBtn = document.querySelector('.ver-certificados-btn');
    const cerrarBtn = document.querySelector('.cerrar-modal');

    // Abrir modal al hacer clic en el botón de certificados
    if (verCertificadosBtn) {
        verCertificadosBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('mostrar');
            document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
            
            // Desplazarse al inicio del modal
            modal.scrollTo(0, 0);
        });
    }

    // Cerrar modal al hacer clic en la X
    if (cerrarBtn) {
        cerrarBtn.addEventListener('click', function() {
            modal.classList.remove('mostrar');
            document.body.style.overflow = 'auto'; // Restaurar scroll
        });
    }

    // Cerrar modal al hacer clic fuera del contenido
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('mostrar');
                document.body.style.overflow = 'auto'; // Restaurar scroll
            }
        });
    }

    // Cerrar con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('mostrar')) {
            modal.classList.remove('mostrar');
            document.body.style.overflow = 'auto'; // Restaurar scroll
        }
    });
});
