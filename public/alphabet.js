const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.dataset.blogid;
        window.location.href = `/alphabet/${id}`;
    })
})