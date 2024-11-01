window.onload = function() {
    // Configuração das partículas
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#00000"
                }
            },
            "opacity": {
                "value": 0.55,
                "random": false
            },
            "size": {
                "value": 2,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "fff",
                "opacity": 0.3,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none"
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            }
        },
        "retina_detect": true
    });

    // Configuração dinâmica das cartas
    const cartas = document.querySelectorAll('.carta');
    const colors = {
        'geografia': '#66CC00',
        'sociologia': '#FF9900',
        'filosofia': '#CC66FF',
        'historia': '#0099CC'
    };

    cartas.forEach(carta => {
        const materia = carta.classList[1]; // pega a classe da matéria, ex: 'geografia'
        const corFundo = colors[materia] || '#777'; // define a cor baseada na matéria ou padrão

        // Aplica estilos dinamicamente
        carta.style.backgroundColor = corFundo;
        carta.style.width = '20vw';
        carta.style.height = '30vh';
        carta.style.margin = '10vh auto';
        carta.style.perspective = '1000px';
        carta.style.textDecoration = 'none';
        carta.style.transition = 'transform 0.5s';

        // Configuração do hover para abrir as cartas
        const cartaInterna = carta.querySelector('.carta-interna');
        cartaInterna.style.backgroundColor = '#fff';
        cartaInterna.style.backfaceVisibility = 'hidden';
        cartaInterna.style.transform = 'rotateY(180deg)';
        cartaInterna.style.display = 'flex';
        cartaInterna.style.alignItems = 'center';
        cartaInterna.style.justifyContent = 'center';

        // Evento de hover para rotacionar a carta
        carta.addEventListener('mouseenter', () => {
            cartaInterna.style.transform = 'rotateY(0deg)';
        });
        carta.addEventListener('mouseleave', () => {
            cartaInterna.style.transform = 'rotateY(180deg)';
        });
    });
}; 