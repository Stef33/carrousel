$( document ).ready(function() {

    $.getJSON('https://api.themoviedb.org/3/movie/upcoming?api_key=e082a5c50ed38ae74299db1d0eb822fe', function(data){

        $.each(data.results,function(index,d) {
            console.log(d);

                var key = index.toString().padStart(2,'0');

                var lim = parseInt(d.vote_average);
                var stars_string = "";
                for (var i =0; i < lim; i++) {
                  stars_string = stars_string+"<img src='image/star-lightgray.png'/>";
                }

                var $content = $("<li id='movie_"+key+"'><img id='img_"+key+"' src='https://image.tmdb.org/t/p/w500"+d.backdrop_path+"'/><br/><br/><h3>"+d.title+"</h3><div id='stars'> "+stars_string+"</div><p>"+d.overview+"</p></li>");
                $("#movies").append($content);

                var $dot = $("<li id='dot-"+key+"'><a id='movie-link-"+key+"' href='#movie_"+key+"'><img id='nav-dots-"+key+"' src='image/circle-darkgray.png'/></a></li>");
                $('#bullets').append($dot);

                $("a[id^='movie-link-"+key+"']").hover(function() {
                    $("img[id^='nav-dots-"+key+"']").attr('src', 'image/circle-verylightgray.png');
                });

                $("a[id^='movie-link-"+key+"']").mouseleave(function() {
                    $("img[id^='nav-dots-"+key+"']").attr('src', 'image/circle-darkgray.png');
                });

            /*console.log(d);
            */
        });
    });

    $('#prev').hover(function() {
        $('#caret-left').attr('src', 'image/caret-left-lightgray.png');
    });

    $('#prev').mouseleave(function() {
        $('#caret-left').attr('src', 'image/caret-left-darkgray.png');
    });

    $('#next').hover(function() {
        $('#caret-right').attr('src', 'image/caret-right-lightgray.png');
    });

    $('#next').mouseleave(function() {
        $('#caret-right').attr('src', 'image/caret-right-darkgray.png');
    });

});
