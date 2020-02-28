let buttons = document.querySelectorAll(".cont2_buttons .button")
let image = document.querySelector(".images img")

buttons.forEach(e => {
    e.onclick = () => {
        let url = e.dataset.url
        buttons.forEach(b=>{
            b.classList.remove("active")
        })
        e.classList.add("active")
        image.src = url
        console.log(e)
    }
})
