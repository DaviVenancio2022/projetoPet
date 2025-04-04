document.addEventListener("DOMContentLoaded", function () {
    const formToggles = document.querySelectorAll(".form-toggle");
    const forms = document.querySelectorAll(".form-container");

    formToggles.forEach(toggle => {
        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            const targetForm = this.getAttribute("data-form");
            
            forms.forEach(form => {
                if (form.id === targetForm) {
                    form.style.display = form.style.display === "none" ? "block" : "none";
                } else {
                    form.style.display = "none";
                }
            });
        });
    });
});
