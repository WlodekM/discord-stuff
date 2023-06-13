var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var setc = document.getElementById("sercolor");
var g = document.createElement("style")
g.id = "gradientStyle"
document.head.appendChild(g)

function setGradient() {
    g.innerHTML = `body, #app-mount, .custom-theme-background {--custom-theme-background: linear-gradient(to right, ${color1.value}, ${color2.value}) !important}`
}
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
setc.addEventListener("input", setGradient)
setGradient()
