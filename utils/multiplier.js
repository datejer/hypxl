// 1x   coin multiplier at Hypixel levels 0-4
// 1.5x coin multiplier at Hypixel levels 5-9
// 2x   coin multiplier at Hypixel levels 10-14
// 2.5x coin multiplier at Hypixel levels 15-19
// 3x   coin multiplier at Hypixel levels 20-24
// 3.5x coin multiplier at Hypixel levels 25-29
// 4x   coin multiplier at Hypixel levels 30-39
// 4.5x coin multiplier at Hypixel levels 40-49
// 5x   coin multiplier at Hypixel levels 50-99
// 5.5x coin multiplier at Hypixel levels 100-124
// 6x   coin multiplier at Hypixel levels 125-149
// 6.5x coin multiplier at Hypixel levels 150-199
// 7x   coin multiplier at Hypixel levels 200-249
// 8x   coin multiplier at Hypixel levels 250+​

const getCoinMultiplier = (level) => {
	if (level >= 0 && level <= 4) return 1;
	if (level >= 5 && level <= 9) return 1.5;
	if (level >= 10 && level <= 14) return 2;
	if (level >= 15 && level <= 19) return 2.5;
	if (level >= 20 && level <= 24) return 3;
	if (level >= 25 && level <= 29) return 3.5;
	if (level >= 30 && level <= 39) return 4;
	if (level >= 40 && level <= 49) return 4.5;
	if (level >= 50 && level <= 99) return 5;
	if (level >= 100 && level <= 124) return 5.5;
	if (level >= 125 && level <= 149) return 6;
	if (level >= 150 && level <= 199) return 6.5;
	if (level >= 200 && level <= 249) return 7;
	if (level >= 250) return 8;
};

export { getCoinMultiplier };
