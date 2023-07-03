var bouton = document.getElementById("valider"); // Sélection du bouton
// var i = 1;

// bouton.addEventListener('click', () => {
//     var todolist = document.getElementById('txt').value;
//     var hdr = document.getElementById("listTodo");

//     var check = document.createElement("input");
//     check.type = "checkbox";
//     check.style.marginRight = "10px";

//     var div = document.createElement("div");
//     div.textContent = i + ". "+ todolist;
//     div.style.color = "blue";

//     hdr.appendChild(div);
//     div.insertBefore(check, div.firstChild); // Insérer la case à cocher en tant que premier enfant de la div

//     div.addEventListener('click', () => {
//         if(div.style.color == "red"){
//             div.style.color = "blue";
//         }else if(div.style.color == "blue"){
//             div.style.color = "red";
//         }
//     })
//     i++;

// });

var i = 1;
var totalCheckbox = 0;
var totalCheckboxChecked = 0;

bouton.addEventListener('click', () => {
    if (i % 5 === 0) {
        var todolist = document.getElementById('txt').value;
        var hdr = document.getElementById("listTodo");

        var check = document.createElement("input");
        check.type = "checkbox";
        check.style.marginRight = "10px";

        var div = document.createElement("div");
        div.textContent = i + ". " + todolist;
        div.style.color = "orange";

        hdr.appendChild(div);
        div.insertBefore(check, div.firstChild); // Insérer la case à cocher en tant que premier enfant de la div

        totalCheckbox++;
        check.addEventListener('change', () => {
            if (check.checked) {
                totalCheckboxChecked++;
            } else {
                totalCheckboxChecked--;
            }

            var percentage = (totalCheckboxChecked / totalCheckbox) * 100;
            console.log(percentage + "% de cases cochées");
        });

        i++;
    } else if (i % 2 === 0) {
        var todolist = document.getElementById('txt').value;
        var hdr = document.getElementById("listTodo");

        var check = document.createElement("input");
        check.type = "checkbox";
        check.style.marginRight = "10px";

        var div = document.createElement("div");
        div.textContent = i + ". " + todolist;
        div.style.color = "red";

        hdr.appendChild(div);
        div.insertBefore(check, div.firstChild); // Insérer la case à cocher en tant que premier enfant de la div

        totalCheckbox++;
        check.addEventListener('change', () => {
            if (check.checked) {
                totalCheckboxChecked++;
            } else {
                totalCheckboxChecked--;
            }

            var percentage = (totalCheckboxChecked / totalCheckbox) * 100;
            console.log(percentage + "% de cases cochées");
        });

        i++;
    } else {
        var todolist = document.getElementById('txt').value;
        var hdr = document.getElementById("listTodo");

        var check = document.createElement("input");
        check.type = "checkbox";
        check.style.marginRight = "10px";

        var div = document.createElement("div");
        div.textContent = i + ". " + todolist;
        div.style.color = "blue";

        hdr.appendChild(div);
        div.insertBefore(check, div.firstChild); // Insérer la case à cocher en tant que premier enfant de la div

        totalCheckbox++;
        check.addEventListener('change', () => {
            if (check.checked) {
                totalCheckboxChecked++;
            } else {
                totalCheckboxChecked--;
            }

            var percentage = (totalCheckboxChecked / totalCheckbox) * 100;
            console.log(percentage + "% de cases cochées");
        });

        i++;
    }
    div.addEventListener('click', () => {
        var random = Math.floor(Math.random()*11);
        console.log(random);
        var color = ["White", "Red","Yellow","Orange","Pink","Green","Blue","Purple","Gold","Silver"]
        div.style.color = color[random];


        // if(div.style.color == "red"){
        //     div.style.color = "blue";
        // }else if(div.style.color == "blue"){
        //     div.style.color = "red";
        // }else if(div.style.color == "orange"){
        //     div.style.color = "black";
        // }else if(div.style.color == "black"){
        //     div.style.color = "orange";
        // }
    })
});

