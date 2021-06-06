module.exports = {
	async rewrites() {
		return [
			{
				source: '/',
				destination: '/player',
			},
		];
	},
	images: {
		domains: ['visage.surgeplay.com'],
	},
};
