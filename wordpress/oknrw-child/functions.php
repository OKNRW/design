<?php
/**
 * OKNRW Child-Theme für Betheme.
 *
 * Lädt das Designsystem (assets/, beim Build aus dist/, js/ und fonts/ kopiert)
 * und die Brücken-Datei css/oknrw-betheme.css. Verhindert Abrufe bei Google Fonts.
 */

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Designsystem nach den Stilen von Betheme laden (Priorität 20),
 * damit die Brücken-Datei die Betheme-Regeln überschreiben kann.
 */
add_action('wp_enqueue_scripts', function () {
	$uri = get_stylesheet_directory_uri();
	$ver = wp_get_theme()->get('Version');

	wp_enqueue_style('oknrw', $uri . '/assets/css/oknrw.css', array(), $ver);
	wp_enqueue_style('oknrw-betheme', $uri . '/css/oknrw-betheme.css', array('oknrw'), $ver);

	// Ergänzt nur Verhalten; Inhalte bleiben ohne JavaScript bedienbar.
	wp_enqueue_script('oknrw', $uri . '/assets/js/oknrw.js', array(), $ver, array(
		'in_footer' => true,
		'strategy'  => 'defer',
	));
}, 20);

/**
 * Schriften werden selbst gehostet (Entscheidung 16).
 * Entfernt jedes eingereihte Stylesheet, das von fonts.googleapis.com geladen würde.
 */
add_action('wp_enqueue_scripts', function () {
	$styles = wp_styles();
	foreach ($styles->queue as $handle) {
		$src = isset($styles->registered[$handle]) ? (string) $styles->registered[$handle]->src : '';
		if (strpos($src, 'fonts.googleapis.com') !== false) {
			wp_dequeue_style($handle);
		}
	}
}, 100);

/**
 * Keine Verbindungshinweise (preconnect, dns-prefetch) zu Google Fonts.
 */
add_filter('wp_resource_hints', function ($urls) {
	return array_values(array_filter($urls, function ($url) {
		$href = is_array($url) ? (isset($url['href']) ? $url['href'] : '') : (string) $url;
		return strpos($href, 'fonts.googleapis.com') === false && strpos($href, 'fonts.gstatic.com') === false;
	}));
}, 100);
