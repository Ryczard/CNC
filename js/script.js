$(function(){
    $('.wrapper').click(function() {
        var src = $(this).attr('style');
        
        var self = this;
        console.log(src);
        if ($('#lightbox').length > 0) {
            $('#content').css('background-image', src);
            $
            $('#lightbox').fadeIn(400);
        } else {
            var lightbox = 
            '<div id="lightbox" style="display:none">' +
            '<div id="content">' +
            '<h2>' + title + '<h2>'
            '</div>' +  
            '</div>';
            
            $('body').append(lightbox);
            $('#content').css('background-image',src);
            $('#lightbox').fadeIn(400);
        }
        
            $('#lightbox').click(function() {
            $('#lightbox').hide();
        });
    });
});

 