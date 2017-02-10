<?php
/**
 * The template for displaying Author Archive pages
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since    Timber 0.1
 */
global $wp_query;

$context = Timber::get_context();

if ( isset( $wp_query->query_vars['author'] ) ) {
	$author = new TimberUser( $wp_query->query_vars['author'] );
	$context['author'] = $author;
	$args = array(
		'post_type' => array('news', 'review'), // array to get news AND reviews
		'author' => $author->id()
	);
	$context['posts'] = Timber::get_posts($args);
	$context['title'] = 'Written by ' . $author->name();
}
Timber::render( array( 'author.twig', 'archives/archive.twig' ), $context );
