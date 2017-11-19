$(document).ready(function() {

    //Vitesse de défilement et timer
	var speed = 5000;
	var run = setInterval('rotate()', speed);

	//Récupérer la largeur et caculer la valeur à gauche
	var item_width = $('#slides li').outerWidth();
	var left_value = item_width * (-1);

    //Remplacer le dernier item avant le premier, au cas où l'utilisateur click sur la flèche de gauche
    $('#slides li:first').before($('#slides li:last'));

    //Positionner l'item courant
    $('#slides ul').css({'left' : left_value});

    //L'utilisateur click sur la flèche de gauche
    $('#prev').click(function() {

        //Récupérer la position de droite
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;

        //Défilement de l'item
        $('#slides ul').animate({'left' : left_indent}, 200,function(){

            //Déplacer le dernier item et le mettre en premier
            $('#slides li:first').before($('#slides li:last'));

            //Positionner l'item courant
            $('#slides ul').css({'left' : left_value});

        });

        //Annuler le comportement du lien
        return false;

    });


    //L'utilisateur click sur la flèche de droite
    $('#next').click(function() {

        //Récupérer la position de droite
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;

        //Défilement de l'item
        $('#slides ul').animate({'left' : left_indent}, 200, function () {

            //Déplacer le premier item et le mettre en dernier
            $('#slides li:last').after($('#slides li:first'));

            //Positionner l'item courant
            $('#slides ul').css({'left' : left_value});

        });

        //Annuler le comportement du lien
        return false;

    });

    //Sur mouse hover, le défilement s'arrête
	$('#slides').hover(

		function() {
			clearInterval(run);
		},
		function() {
			run = setInterval('rotate()', speed);
		}
	);

});

//Une fonction déclenche le défilement automatiquement
//un timer appel cette fonction et le défilement commence
function rotate() {
	$('#next').click();
}
