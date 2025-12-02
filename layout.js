fetch("component/header.html")
.then(response => response.text())
.then(data => {
    document.getElementById("head").innerHTML = data;
    let lastScroll = 0;
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 80) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });
});

fetch("component/foot.html")
.then(response => response.text())
.then(data => {
    document.getElementById("foot").innerHTML= data
});


