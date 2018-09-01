jQuery(document).ready(function($){

	// CODIGO AQUI SE PRECISAR DE JQUERY, OUTROS DO TIPO DO GOOGLE ANALYTICS FICAM FORA DESSA AREA

	////////////////////////////////////////////////////////
	// cabecalho rolagem
/*
	var scrollantes = 0;
	var scrolllimite = $('#content-wrapper > header').height();
	function fc_bodypadding() {
		scrolllimite = $('#content-wrapper > header').height();
		$('body').css( 'padding-top', scrolllimite ); // ajustar isso se for pra usar soh em telas menores
	}
	fc_bodypadding();
	$(window).resize(function(){ fc_bodypadding(); });
	$(window).scroll(function (e) {
		var scroll = $(window).scrollTop();
		if ( scroll > scrolllimite ) {
			if ( ! $('#navbar-responsive-collapse').hasClass('in') ) {
				if ( scroll < scrollantes ) {
					$('body').addClass('descendo');
					$('body').removeClass('rolando');
					$('#content-wrapper > header').css( 'top', 0 );
				} else {
					$('body').addClass('rolando');
					$('body').removeClass('descendo');
					$('#content-wrapper > header').css( 'top', (scrolllimite*-1)+'px' );
				}
			}
		} else {
			$('body').removeClass('rolando');
			$('#content-wrapper > header').css( 'top', 0 );
		}
		scrollantes = scroll;
	});
*/
/*
    ////////////////////////////////////////////////////
	// full width
    function objfull ( objs ) {
		$(objs).each(function(){
			var bodyWidth = $('body').width();
			var parentWidth = $(this).parent().width();
			var ml = $(this).css('margin-left');
			ml = ml.replace('px','');
			ml *= 1;
			var ofs = $(this).offset();
			ml = ml - ofs.left;
			$(this).css('width',bodyWidth);
			$(this).css('max-width','9999999999%');
			$(this).css('margin-left',ml);
			$(this).css('margin-right',ml);
		});
    }
    $(window).resize( function(){
        objfull( '.fullw' );
    });
    objfull( '.fullw' );
*/
/*
	////////////////////////////////////////////////////////
	// formularios
	$(document).on('click','.wpcf7-response-output',function(){
		$(this).hide(200);
	});
	// pageview do contato
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		history.pushState( '', 'Contato enviado', '/contato/enviado' );
	}, false );
*/
});