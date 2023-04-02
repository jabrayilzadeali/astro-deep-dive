const hamburger: HTMLElement = document.querySelector(".hamburger")
hamburger.onclick = () => {
    document.querySelector(".nav-links").classList.toggle('expanded')
}
