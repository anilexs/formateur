var tour = 1;
var i = $('#essai');
var rep = $('#rep');
var Propo = $('#Propo');
var sms = $('#sms');
var absoNone = $('.absoNone');
var multiplicater = 51;
var rendom = 0;
rendom = Math.round(Math.random() * multiplicater);
var log = '';
$(".btn2").on("change", function() {
    var valeurSelectionnee = $(this).val();

    if (valeurSelectionnee === "1") {
        multiplicater = 51;
        rendom = Math.round(Math.random() * multiplicater);
    } else if (valeurSelectionnee === "2") {
        multiplicater = 101;
        rendom = Math.round(Math.random() * multiplicater);
    } else if (valeurSelectionnee === "3") {
        multiplicater = 1001;
        rendom = Math.round(Math.random() * multiplicater);
    } else {
        multiplicater = 51;
        rendom = Math.round(Math.random() * multiplicater);
    }

    console.log(rendom);
});
console.log(rendom);
$('#NouveauJeu').click(() => {
    tour = 1;
    rendom = Math.round(Math.random() * multiplicater);
    i.val(tour - 1);
    log = '';
    sms.val('');
    rep.val('');
    Propo.val('');
    $('#NouveauJeu').attr('disabled', true);
    $('#Propo, #Solution, #Proposer').removeAttr('disabled');

    absoNone.removeClass('abso');
    absoNone.addClass('absoNone');
    console.log(rendom);
});

$('#Solution').click(() => {
    sms.val("le numero ete = " + rendom);
    $('#NouveauJeu').attr('disabled', false);
    $('#Propo, #Solution, #Proposer').attr('disabled', true);
});

$('#Proposer').click(() => {
    console.log(rendom);
    i.val(tour);
    if (tour == 1) {
        log = log + Propo.val();
    } else {
        log = log + "-" + Propo.val();
    }

    var PropoValue = parseInt(Propo.val());
    if (tour !== 0) {
        $('#NouveauJeu').removeAttr('disabled');
    }

    if (tour === 7) {
        $('#Propo, #Solution, #Proposer').attr('disabled', true);
    } else if (PropoValue === rendom) {
        sms.val("GG! le nombre était " + rendom);
        $('#Propo, #Solution, #Proposer').attr('disabled', true);
        absoNone.removeClass('absoNone');
        absoNone.addClass('abso');
    } else if (PropoValue > rendom) {
        sms.val(PropoValue + " est supérieur à la valeur " + rendom);
    } else if (PropoValue < rendom) {
        sms.val(PropoValue + " est inférieur à la valeur " + rendom);
    } else {
        $(Propo).val('').select();
    }
    
    if (tour !== 7) {
        tour++;
    }
    Propo.val('').select();
    rep.val(log);
});

