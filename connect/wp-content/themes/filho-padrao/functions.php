<?php 

function fc_mime_types($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	$mimes['pdf'] = 'application/pdf';
	return $mimes;
}
add_filter('upload_mimes', 'fc_mime_types');


////////////////////////////////////////////////////////////
// DESNEGOCE ABAIXO O Q PRECISAR

/*
function fc_scripts() {
//	wp_enqueue_style( 'fc-css', get_stylesheet_directory_uri() . '/estilo.css' );
//	wp_enqueue_script( 'fc-js', get_stylesheet_directory_uri() . '/custom.js' );
}
add_action( 'wp_enqueue_scripts', 'fc_scripts' );
*/
/*
function fc_theme_support() {
  remove_image_size( 'simple_boostrap_featured' );
  add_image_size( 'simple_boostrap_featured', 1110, 426, true);
  add_image_size( 'destaques_home', 696, 560, true);
}
add_action( 'after_setup_theme', 'fc_theme_support', 10 );
*/
/*
function fc_excerpt_length( $length ) {
  return 20;
}
add_filter( 'excerpt_length', 'fc_excerpt_length', 999 );
*/




