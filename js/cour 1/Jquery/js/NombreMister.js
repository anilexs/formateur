var tour = 1;
var i = $('#essai');
var rep = $('#rep');
var Propo = $('#Propo');
var sms = $('#sms');
var winner = $('.absoNoneWinner');
var looser = $('.absoNoneLooser');
var absoNoneSolu = $('.absoNoneSolu');


var multiplicater = 51;
var rendom = 0;
rendom = Math.round(Math.random() * multiplicater);
var log = '';


$(".selec").on("change", function() {
    var valeurSelectionnee = $(this).val();

    if (valeurSelectionnee === "1") {
        multiplicater = 51;
        rendom = Math.floor(Math.random() * multiplicater);
    } else if (valeurSelectionnee === "2") {
        multiplicater = 101;
        rendom = Math.floor(Math.random() * multiplicater);
    } else if (valeurSelectionnee === "3") {
        multiplicater = 1001;
        rendom = Math.floor(Math.random() * multiplicater);
    }
    console.log(rendom);
});
var Essei = 7;
$(".selec2").on("change", function() {
    var NmTour = $('#NmTour')
    var NumEssei = $(this).val();

    if (NumEssei === "7") {
        Essei = 7;
    } else if (NumEssei === "10") {
        Essei = 10;
    } else if (NumEssei === "15") {
        Essei = 15;
    }

    $(NmTour).text(Essei);
    console.log(Essei);
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

    winner.removeClass('abso');
    winner.addClass('absoNoneWinner');
    absoNoneSolu.removeClass('abso');
    absoNoneSolu.addClass('absoNoneSolu');
    looser.removeClass('abso');
    looser.addClass('absoNoneLooser');
    console.log(rendom);
});

$('#Solution').click(() => {
    sms.val("le numero ete = " + rendom);
    $('#NouveauJeu').attr('disabled', false);
    $('#Propo, #Solution, #Proposer').attr('disabled', true);
    absoNoneSolu.removeClass('absoNoneSolu');
    absoNoneSolu.addClass('abso');
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
        if (tour === Essei) {
            looser.removeClass('absoNoneLooser');
            looser.addClass('abso');
            $('#Propo, #Solution, #Proposer').attr('disabled', true);
        } else if (PropoValue === rendom) {
            sms.val("GG! le nombre était " + rendom);
            $('#Propo, #Solution, #Proposer').attr('disabled', true);
            winner.removeClass('absoNoneWinner');
            winner.addClass('abso');
        } else if (PropoValue > rendom) {
            sms.val(PropoValue + " est supérieur à la valeur");
        } else if (PropoValue < rendom) {
            sms.val(PropoValue + " est inférieur à la valeur");
        } else {
            $(Propo).val('').select();
        }
        
            tour++;
    
        Propo.val('').select();
        rep.val(log);

});



// egg
var egg1 = $('#egg1');
var clickCount = 0;
var firstClickTime = 0;
var resetTimeout;
var egg1ActionNone = $('.egg1ActionNone');

egg1.on("click", function() {
  if (clickCount === 0) {
    firstClickTime = new Date().getTime();
  }
  
  clickCount++;
  console.log(clickCount);
  if (clickCount === 5 && new Date().getTime() - firstClickTime < 2000) {
    //  action
    egg1ActionNone.removeClass('egg1ActionNone');
    egg1ActionNone.addClass('egg1Div');
    
    // fin action 
    clearTimeout(resetTimeout); 
    resetTimeout = setTimeout(function() {
      clickCount = 0; 
    }, 2000); 
  } else if (clickCount === 5 || new Date().getTime() - firstClickTime >= 2000) {
    clearTimeout(resetTimeout);
    clickCount = 0;
  }
});



$(btnXegg1).click(() => {
    egg1ActionNone.removeClass('egg1Div');
    egg1ActionNone.addClass('egg1ActionNone');
});