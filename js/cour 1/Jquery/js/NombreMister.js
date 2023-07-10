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
var eggValu = 0;
var egg1 = $('#egg1');
var clickCount = 0;
var firstClickTime = 0;
var resetTimeout;
var egg1ActionNone = $('.egg1ActionNone');
var timerInput = $('#timer');
var timerInterval;
var remainingTime;
var codeInput = $('#codeInput').val();

egg1.on("click", function() {
  if (clickCount === 0) {
    firstClickTime = new Date().getTime();
    updateTimerDisplay(120000); // Afficher 2:00 au départ (2 minutes en millisecondes)
  }

  clickCount++;
  console.log(clickCount);
  if (clickCount === 5 && new Date().getTime() - firstClickTime < 2000) {
    // Action
    valu = '';
    $('#codeInput').val('');
    egg1ActionNone.removeClass('egg1ActionNone');
    egg1ActionNone.addClass('egg1Div');

    $('#val1').prop('disabled', false);
    $('#val2').prop('disabled', false);
    $('#val3').prop('disabled', false);
    $('#val4').prop('disabled', false);
    $('#val5').prop('disabled', false);
    $('#val6').prop('disabled', false);
    $('#val7').prop('disabled', false);
    $('#val8').prop('disabled', false);
    $('#val9').prop('disabled', false);
    $('#valC').prop('disabled', false);
    $('#val0').prop('disabled', false);
    $('#valD').prop('disabled', false);
    $('#startButton').prop('disabled', false);

    // Fin de l'action
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(function() {
      clickCount = 0;
      egg1ActionNone.removeClass('egg1Div');
      egg1ActionNone.addClass('egg1ActionNone');
      clearInterval(timerInterval); // Mettre en pause le chronomètre
    }, 120000); // Compte à rebours d'une minute (60000 millisecondes)

    startTimer(120000); // Démarrer le chronomètre à 2 minutes (120000 millisecondes)

  } else if (clickCount === 5 || new Date().getTime() - firstClickTime >= 2000) {
    clearTimeout(resetTimeout);
    clickCount = 0;
    updateTimerDisplay(120000); // Réinitialiser le chronomètre à 2 minutes (120000 millisecondes)
    clearInterval(timerInterval); // Mettre en pause le chronomètre
  }
});
var Badge1 = $('#Badge1');
$('#startButton').click(function() {
  var codeInputValue = $('#codeInput').val();

  if (codeInputValue === '123') {


    $('#val1').prop('disabled', true);
    $('#val2').prop('disabled', true);
    $('#val3').prop('disabled', true);
    $('#val4').prop('disabled', true);
    $('#val5').prop('disabled', true);
    $('#val6').prop('disabled', true);
    $('#val7').prop('disabled', true);
    $('#val8').prop('disabled', true);
    $('#val9').prop('disabled', true);
    $('#valC').prop('disabled', true);
    $('#val0').prop('disabled', true);
    $('#valD').prop('disabled', true);
    $('#egg1').prop('disabled', true);
    $('#startButton').prop('disabled', true);
    clearInterval(timerInterval);
    
    Badge1.removeClass('badgeNone');
    Badge1.addClass('eggBadge1');
    eggValu++;
    egg1ActionNone.removeClass('egg1Div');
    egg1ActionNone.addClass('egg1ActionNone');
    
  } else {
    valu = '';
    $('#codeInput').val('');
  }
});

var val1 = $('#val1')
var val2 = $('#val2')
var val3 = $('#val3')
var val4 = $('#val4')
var val5 = $('#val5')
var val6 = $('#val6')
var val7 = $('#val7')
var val8 = $('#val8')
var val9 = $('#val9')
var valC = $('#valC')
var val0 = $('#val0')
var valD = $('#valD')
var valu = '';

$(valC).click(() =>{
    valu = '';
    $('#codeInput').val(valu);
})
$(val1).click(() =>{
    valu = valu + "1";
    $('#codeInput').val(valu);
})
$(val2).click(() =>{
    valu = valu + "2";
    $('#codeInput').val(valu);
})
$(val3).click(() =>{
    valu = valu + "3";
    $('#codeInput').val(valu);
})
$(val4).click(() =>{
    valu = valu + "4";
    $('#codeInput').val(valu);
})
$(val5).click(() =>{
    valu = valu + "5";
    $('#codeInput').val(valu);
})
$(val6).click(() =>{
    valu = valu + "6";
    $('#codeInput').val(valu);
})
$(val7).click(() =>{
    valu = valu + "7";
    $('#codeInput').val(valu);
})
$(val8).click(() =>{
    valu = valu + "8";
    $('#codeInput').val(valu);
})
$(val9).click(() =>{
    valu = valu + "9";
    $('#codeInput').val(valu);
})
$(val0).click(() =>{
    valu = valu + '0';
    $('#codeInput').val(valu);
})
$(valD).click(() =>{
    valu = valu + "#";
    $('#codeInput').val(valu);
})


function startTimer(duration) {
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  remainingTime = duration;

  timerInterval = setInterval(function() {
    var currentTime = new Date().getTime();
    remainingTime = endTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      updateTimerDisplay(0);
      // Action à la fin du chronomètre
      egg1ActionNone.removeClass('egg1Div');
        egg1ActionNone.addClass('egg1ActionNone');
    } else {
      updateTimerDisplay(remainingTime);
    }
  }, 1000); // Mettre à jour le chronomètre toutes les 1 seconde
}

function updateTimerDisplay(time) {
  var minutes = Math.floor(time / 60000);
  var seconds = Math.floor((time % 60000) / 1000);

  var minutesString = padZero(minutes);
  var secondsString = padZero(seconds);

  timerInput.val(minutesString + ':' + secondsString);
}

function padZero(number) {
  return (number < 10 ? '0' : '') + number;
}




$(btnXegg1).click(() => {
    egg1ActionNone.removeClass('egg1Div');
    egg1ActionNone.addClass('egg1ActionNone');
    clearInterval(timerInterval); // Mettre en pause le chronomètre
});