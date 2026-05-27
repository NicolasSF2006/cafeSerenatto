/*
  Seleciona o checkbox do modo noturno e o body da página.
*/
const inputCheck = document.querySelector("#modo-noturno");
const elemento = document.querySelector("body");

/*
  Só executa a lógica se os elementos existirem na página.
*/
if (inputCheck && elemento) {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo) {
    elemento.setAttribute("data-bs-theme", temaSalvo);
    inputCheck.checked = temaSalvo === "dark";
  }

  inputCheck.addEventListener("change", () => {
    const modo = inputCheck.checked ? "dark" : "light";

    elemento.setAttribute("data-bs-theme", modo);
    localStorage.setItem("tema", modo);
  });
}
