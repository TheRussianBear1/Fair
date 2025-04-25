/* Archivo: script.js */
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".modalidad");
    sections.forEach((section, i) => {
      section.style.opacity = 0;
      section.style.transform = "translateY(20px)";
      setTimeout(() => {
        section.style.transition = "all 0.8s ease-out";
        section.style.opacity = 1;
        section.style.transform = "translateY(0)";
      }, i * 300);
    });
  
    // Contador regresivo
    const contador = document.getElementById("contador");
    const fechaEvento = new Date("2025-05-08T09:00:00").getTime();
  
    setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaEvento - ahora;
  
      if (diferencia > 0) {
        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
        contador.textContent = `Faltan ${dias}d ${horas}h ${minutos}m ${segundos}s para el evento`;
      } else {
        contador.textContent = "¡La feria ha comenzado!";
      }
    }, 1000);
  });
  