<?php
/**
 * Aktualisierung des Child-Themes aus GitHub-Releases (Entscheidung 38).
 *
 * WordPress fragt regelmäßig nach Theme-Aktualisierungen. Dieser Filter ergänzt die Antwort
 * um das neueste Release von github.com/OKNRW/design, wenn dessen Version höher ist als die
 * installierte. Die Aktualisierung erscheint dann unter Dashboard → Aktualisierungen und lässt
 * sich dort oder unter Design → Themes installieren; automatische Aktualisierungen sind möglich.
 *
 * Das Repository ist öffentlich; es wird kein Zugangsschlüssel benötigt.
 * Angenommen werden nur ZIP-Dateien aus den Releases dieses Repositorys.
 */

if (!defined('ABSPATH')) {
	exit;
}

const OKNRW_UPDATE_REPO      = 'OKNRW/design';
const OKNRW_UPDATE_TRANSIENT = 'oknrw_child_release';

/**
 * Neuestes Release von GitHub, zwischengespeichert (6 Stunden, nach Fehlern 1 Stunde).
 *
 * @return array|null ['version' => '0.3.1', 'package' => 'https://…zip', 'url' => 'https://…'] oder null.
 */
function oknrw_child_latest_release() {
	$cached = get_site_transient(OKNRW_UPDATE_TRANSIENT);
	if (is_array($cached)) {
		return $cached ? $cached : null;
	}

	$release  = null;
	$response = wp_remote_get('https://api.github.com/repos/' . OKNRW_UPDATE_REPO . '/releases/latest', array(
		'timeout' => 10,
		'headers' => array(
			'Accept'     => 'application/vnd.github+json',
			'User-Agent' => 'oknrw-child-theme',
		),
	));

	if (!is_wp_error($response) && (int) wp_remote_retrieve_response_code($response) === 200) {
		$data    = json_decode(wp_remote_retrieve_body($response), true);
		$tag     = is_array($data) && isset($data['tag_name']) ? (string) $data['tag_name'] : '';
		$version = ltrim($tag, 'v');
		$prefix  = 'https://github.com/' . OKNRW_UPDATE_REPO . '/releases/download/';

		if (preg_match('/^\d+\.\d+\.\d+$/', $version) && !empty($data['assets']) && is_array($data['assets'])) {
			foreach ($data['assets'] as $asset) {
				$name = isset($asset['name']) ? (string) $asset['name'] : '';
				$url  = isset($asset['browser_download_url']) ? (string) $asset['browser_download_url'] : '';
				if ($name === 'oknrw-child-' . $version . '.zip' && strpos($url, $prefix) === 0) {
					$release = array(
						'version' => $version,
						'package' => $url,
						'url'     => isset($data['html_url']) ? (string) $data['html_url'] : 'https://github.com/' . OKNRW_UPDATE_REPO . '/releases',
					);
					break;
				}
			}
		}
	}

	set_site_transient(OKNRW_UPDATE_TRANSIENT, $release ? $release : array(), $release ? 6 * HOUR_IN_SECONDS : HOUR_IN_SECONDS);
	return $release;
}

/**
 * Aktualisierungsdaten für dieses Theme in die Prüfung von WordPress eintragen.
 */
add_filter('pre_set_site_transient_update_themes', function ($transient) {
	if (!is_object($transient)) {
		return $transient;
	}

	$slug      = basename(dirname(__DIR__));
	$installed = (string) wp_get_theme($slug)->get('Version');
	$release   = oknrw_child_latest_release();

	if (!$release || $installed === '') {
		return $transient;
	}

	$item = array(
		'theme'        => $slug,
		'new_version'  => $release['version'],
		'url'          => $release['url'],
		'package'      => $release['package'],
		'requires'     => '6.3',
		'requires_php' => '7.4',
	);

	if (version_compare($release['version'], $installed, '>')) {
		$transient->response[$slug] = $item;
		unset($transient->no_update[$slug]);
	} else {
		$transient->no_update[$slug] = $item;
		unset($transient->response[$slug]);
	}

	return $transient;
});

/**
 * „Erneut prüfen“ unter Dashboard → Aktualisierungen soll auch GitHub neu abfragen.
 */
add_action('load-update-core.php', function () {
	if (isset($_GET['force-check'])) {
		delete_site_transient(OKNRW_UPDATE_TRANSIENT);
	}
});

/**
 * Nach einer Aktualisierung den Zwischenspeicher leeren.
 */
add_action('upgrader_process_complete', function () {
	delete_site_transient(OKNRW_UPDATE_TRANSIENT);
});
