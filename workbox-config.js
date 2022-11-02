module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{png,json,ico,html,svg,txt,webp,webmanifest,css,js,woff,eot,ttf,woff2,jpg}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};