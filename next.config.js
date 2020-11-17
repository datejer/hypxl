module.exports = {
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/player",
			},
		];
	},
};
