const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (E) => {
    const nome = frm.inNome.value;
    resp.textContent = ` ${nome}`;
    E.preventDefault()
});


