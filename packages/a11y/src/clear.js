/**
 * Clear the a11y-speak-region elements.
 */
export default function clear() {
	const regions = Array.from(
		document.getElementsByClassName( 'a11y-speak-region' )
	);
	for ( const region of regions ) {
		region.textContent = '';
	}
}
