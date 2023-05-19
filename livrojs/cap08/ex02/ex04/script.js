const frm = document.querySelector("form")
const resp = document.querySelector("pre")

const itens = []

frm.rbPizza.addEventListener("click", () => {
    frm.inBebida.className = "oculta"
    frm.inPizza. className = "exibe"
})

frm.rbBebida.addEventListener("click", () => {
    frm.inBebida.className = "exibe"
    frm.inPizza.className = "oculta"
})

frm.inDetalhes.addEventListener("focus", () => {
    if (frm.inPizza.checked) {
        const pizza = frm.inPizza.value
        const num = pizza == "media" ? 2 : pizza == "grande" ? 3 : 4
        frm.inDetalhes.placeholder = `Até ${num} sabores`
    }
})

frm.inDetalhes.addEventListener("blur", () => {
    frm.inDetalhes.placeholder = ""
})