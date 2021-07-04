const getHexCode = color => {
	switch (color) {
		case '&4':
			return '#aa0000';
			break;
		case '&c':
			return '#ff5555';
			break;
		case '&6':
			return '#ffaa00';
			break;
		case '&e':
			return '#ffff55';
			break;
		case '&2':
			return '#00aa00';
			break;
		case '&a':
			return '#55ff55';
			break;
		case '&b':
			return '#55ffff';
			break;
		case '&3':
			return '#00aaaa';
			break;
		case '&1':
			return '#0000aa';
			break;
		case '&9':
			return '#5555ff';
			break;
		case '&d':
			return '#ff55ff';
			break;
		case '&5':
			return '#aa00aa';
			break;
		case '&f':
			return '#ffffff';
			break;
		case '&7':
			return '#aaaaaa';
			break;
		case '&8':
			return '#555555';
			break;
		case '&0':
			return '#000000';
			break;
	}
};

const getHtmlFormat = string => {
	let output = [];

	string.split('&').map(el => {
		if (el) {
			return output.push(
				<span key={'&' + el} style={{ color: getHexCode(`&${el.charAt(0)}`) }}>
					{el.substring(1)}
				</span>
			);
		}
	});

	return output;
};

const formatBigNumber = number => {
	if (number > 0)
		return number
			.toString()
			.split('')
			.reverse()
			.join('')
			.match(/.{1,3}/g)
			.join(',')
			.split('')
			.reverse()
			.join('');
	else return 0;
};

export { getHexCode, getHtmlFormat, formatBigNumber };
