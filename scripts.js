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

    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();
            
            const formData = new FormData(this);
            const jsonData = {};
            formData.forEach((value, key) => jsonData[key] = value);
            
            try {
                const response = await fetch("http://localhost:3000/cadastro", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(jsonData)
                });
                
                if (response.ok) {
                    alert("Cadastro realizado com sucesso!");
                    this.reset();
                } else {
                    alert("Erro ao cadastrar o pet.");
                }
            } catch (error) {
                console.error("Erro ao enviar os dados:", error);
                alert("Erro ao conectar com o servidor.");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector("#meu-modal");
    const abrirLinks = document.querySelectorAll(".abrir-modal");
    const fecharBtn = document.querySelector(".fechar");

    // Abrir modal ao clicar em qualquer link com a classe 'abrir-modal'
    abrirLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            modal.style.display = "block";
        });
    });

    // Fechar modal ao clicar no botão de fechar
    fecharBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fechar modal ao clicar fora da área de conteúdo
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
