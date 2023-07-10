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
setInterval(() =>{
    i++;
    if(i == img.length){
        i = 0;
    }
    $('#carouselle').css({
        backgroundImage: "url(../img/"+img[i]+")"
        
    })
},2000)

