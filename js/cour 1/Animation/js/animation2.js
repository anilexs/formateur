let img = [
    'rogue_company.png',
    'sword_art_online.jpg',
    'oshi_no_ko.jpg',
    'lolirock.jpg',
    'the_finals.png',
    'YourName.png',
    'Les_enfants_du_temps.jpg',
    'Nimona.jpg',
    'veiled_expert.jpg',
    'Hidan_no_Aria.jpg',
    'miraculous.jpg'
];

var i = 0;
$(document).ready(() =>{
    $('#next').click(() =>{
        i++;
        if(i == img.length){
            i = 0;
        }
        $('#carouselle').css({
            backgroundImage: "url(../img/"+img[i]+")"
            
        })
    })
    $('#previous').click(() =>{
        if (i == 0){
            i = i + img.length
        }
        i--;
        if(i == 0){
            i = img.length - 1;
        }
        $('#carouselle').css({
            backgroundImage: "url(../img/"+img[i]+")"
            
        })
    })
})

