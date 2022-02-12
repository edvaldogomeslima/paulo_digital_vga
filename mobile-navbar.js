const navegacao = document.querySelector("header nav div.menu")
const menu = document.querySelector("header nav button")

menu.addEventListener("click", () => {
    navegacao.style.height = "75vh"
})

navegacao.addEventListener("click", () => {
    navegacao.style.height = "0"
})

window.addEventListener("scroll", () => {

        document.querySelectorAll(".esquerda").forEach((animacao, index) => {
            if(animacao.getBoundingClientRect().top < window.innerHeight - 50){

                animacao.classList.add("efeitoScroll")

            }
        })

        document.querySelectorAll(".direita").forEach((animacao, index) => {
            if(animacao.getBoundingClientRect().top < window.innerHeight - 50){

                animacao.classList.add("efeitoScroll")

            }
        })

        document.querySelectorAll(".baixo").forEach((animacao, index) => {
            if(animacao.getBoundingClientRect().top < window.innerHeight - 50){

                animacao.classList.add("efeitoScroll")

            }
        })


})