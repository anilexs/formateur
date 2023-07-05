// $('#loginForm').submit(e => {
//     var username = $('#username').val();
//     var password = $('#password').val();

//     if (username === '' || password === '') {
//         $('#errorMessage').text('Veuillez remplir tous les champs.');
//         e.preventDefault(); // Empêche la soumission du formulaire
//     }
// });

// version js
document.getElementById("loginForm").addEventListener("submit", (e) => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == '' || password == '') {
        document.getElementById("errorMessage").textContent = "Veuillez remplir tous les champs.";
        e.preventDefault();
    }
});