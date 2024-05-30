function contactComp(form) {
  const formEl = document.querySelector(".form");
  formEl.addEventListener("submit", async (input) => {
    input.preventDefault();

    const request = {
      nombre: input.target.nombre.value,
      email: input.target.email.value,
      consulta: input.target.consulta.value,
    };

    var serviceID = "service_3f590wp";
    var templateID = "template_5nxxzoa";

    try {
      await emailjs.send(serviceID, templateID, request);
      alert("¡Gracias por contactarme, te responderé a la brevedad!");
    } catch (err) {
      console.error(err);
    }
  });
}

contactComp();
