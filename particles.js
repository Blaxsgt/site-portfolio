window.onload = function() {
  particlesJS("particles-js", {
      "particles": {
          "number": {
              "value": 50,
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
                  "color": "#000000"
              }
          },
          "opacity": {
              "value": 0.5,
              "random": false
          },
          "size": {
              "value": 3,
              "random": true
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
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
};
