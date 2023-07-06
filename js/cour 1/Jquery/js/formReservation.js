// function
    function calcul(val1, val2) {
        
        var HT = Number(val1) + Number(val2);
        var TTC = (HT / 5) + HT;
        var tab = [HT,TTC];
        return tab;
    }
// 


var submit = $('#submit');

var valerSec1;
$('#selec1').change(() =>{
    valerSec1 = $('#selec1').val();
})
var valerSec2;
$('#selec2').change(() =>{
    valerSec2 = $('#selec2').val();
})

var totalHt = $('#totalHt'); 
var totalTtc = $('#totalTtc'); 
var errer = $('#errer'); 
var checkbox = $('#conditions');
$(submit).click((event) => {

    var nom = $('#nom').val();
    var email = $('#email').val();
    var telephone = $('#telephone').val();
    var red = $('#red')
    if (email == '' || telephone == '' || nom == '' ||  $('#selec1').val() == 0 || $('#selec2').val() == 0){
        // console.log("vide");
        event.preventDefault();
        errer.text("merci de renplire tout les chant de text");
    }else if (checkbox.prop('checked')) {
        var resultat = calcul(valerSec1 , valerSec2);
        var HT = resultat[0];
        var TTC = resultat[1];
        totalHt.val("Prix hore Taxe " + HT)
        totalTtc.val("Tout Taxe Compris " + TTC)
        errer.text('');
        

    } else {
        red.css("color", "red");
        errer.text("merci dacepter les condition dutilisater");
        event.preventDefault();
    }
})


// else if(valer === 0 || valer2 === 0){
//         // console.log("2");
//         event.preventDefault();
//         errer.text("merci de renplire tout les chant de text");
//     }