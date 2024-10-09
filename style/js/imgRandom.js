$(document).ready(function() {
    var idimg = 1 + Math.floor(6 * Math.random());
    $('#changeimg').attr("src","contenu_page_accueil/imageRandom/voiture"+idimg+".jpg");
    console.log(idimg);
    if (idimg == 1) {
        $('#changelien').attr("href","voitures/lamborghini/urus.html");
        $('#changelien').text("URUS");
    }
    if (idimg == 2) {
        $('#changelien').attr("href","voitures/bugatti/chiron.html");
        $('#changelien').text("CHIRON");
    }
    if (idimg == 3) {
        $('#changelien').attr("href","voitures/bentley/bentayga.html");
        $('#changelien').text("BENTAYGA");
    }
    if (idimg == 4) {
        $('#changelien').attr("href","voitures/audi/RS6.html");
        $('#changelien').text("RS6");
    }
    if (idimg == 5) {
        $('#changelien').attr("href","voitures/maserati/mc20.html");
        $('#changelien').text("MC20");
    }
    if (idimg == 6) {
        $('#changelien').attr("href","voitures/maserati/mc20.html");
        $('#changelien').text("CULLINAN");
    }
});