<?php
/**
 * OKNRW Child-Theme für Betheme.
 *
 * Lädt das Designsystem (assets/, beim Build aus dist/, js/ und fonts/ kopiert)
 * und die Brücken-Datei css/oknrw-betheme.css nach den Stilen von Betheme.
 * Schriften kommen nur aus dem Designsystem: keine Betheme-Schriften, keine Google Fonts.
 */

if (!defined('ABSPATH')) {
	exit;
}

/**
 * Designsystem nach Betheme laden, damit die Brücken-Datei bei gleicher Spezifität gewinnt.
 * Betheme-Handles (be.min.css, static.css) werden nur als Abhängigkeit gesetzt, wenn sie
 * registriert sind; sonst würde WordPress die eigenen Dateien gar nicht ausgeben.
 */
add_action('wp_enqueue_scripts', function () {
	$uri = get_stylesheet_directory_uri();
	$ver = wp_get_theme()->get('Version');

	$deps = array();
	foreach (array('mfn-be', 'mfn-static') as $handle) {
		if (wp_style_is($handle, 'registered')) {
			$deps[] = $handle;
		}
	}

	wp_enqueue_style('oknrw', $uri . '/assets/css/oknrw.css', $deps, $ver);
	wp_enqueue_style('oknrw-betheme', $uri . '/css/oknrw-betheme.css', array('oknrw'), $ver);

	// Ergänzt nur Verhalten; Inhalte bleiben ohne JavaScript bedienbar.
	wp_enqueue_script('oknrw', $uri . '/assets/js/oknrw.js', array(), $ver, array(
		'in_footer' => true,
		'strategy'  => 'defer',
	));
}, 99);

/**
 * Schriften nur aus dem Designsystem (Entscheidungen 16 und 35).
 * Entfernt Stylesheets von Google Fonts und die lokalen Schriften von Betheme
 * (uploads/betheme/fonts/mfn-local-fonts.css), die sonst doppelt geladen würden.
 * Läuft unmittelbar vor der Ausgabe, damit auch spät eingereihte Stylesheets erfasst werden.
 */
add_action('wp_print_styles', function () {
	$styles = wp_styles();
	foreach ($styles->queue as $handle) {
		$src = isset($styles->registered[$handle]) ? (string) $styles->registered[$handle]->src : '';
		if (strpos($src, 'fonts.googleapis.com') !== false || strpos($src, '/betheme/fonts/mfn-local-fonts.css') !== false) {
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
