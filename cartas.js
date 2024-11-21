window.onload = function () {
    // Configuração das partículas
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.5,
                random: false
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                }
            }
        },
        retina_detect: true
    });

    // Configuração dinâmica das cartas
    const cartas = document.querySelectorAll(".carta");
    const colors = {
        geografia: "#66CC00",
        sociologia: "#FF9900",
        filosofia: "#CC66FF",
        historia: "#0099CC"
    };

    cartas.forEach((carta) => {
        // Identifica a matéria pela classe ou atributo "data-materia"
        const materia = carta.dataset.materia || "default";
        const corBorda = colors[materia] || "#777";

        // Aplica a cor da borda com base na matéria
        carta.style.borderColor = corBorda;

        // Adiciona o símbolo ou texto no centro da carta
        const cartaInterna = carta.querySelector(".carta-interna");
        cartaInterna.textContent = materia.toUpperCase();

        // Adiciona o símbolo pequeno na parte superior da carta
        carta.setAttribute("data-simbolo", materia.charAt(0).toUpperCase());
    });
};
