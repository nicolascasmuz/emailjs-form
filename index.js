function emailJs(form) {
  const formEl = document.querySelector(".form");

  formEl.addEventListener("submit", async (input) => {
    input.preventDefault();

    const request = {
      nombre: input.target.nombre.value,
      email: input.target.email.value,
      consulta: input.target.consulta.value,
    };

    var serviceID = "";
    var templateID = "";

    try {
      await emailjs.send(serviceID, templateID, request);
      alert("Gracias por contactarme!");
    } catch (err) {
      console.error(err);
    }
  });
}

emailJs();
