const rawChannels = require('../raw-channels.json')

// Changes the Firebase format {id: {model}, id2: {model}} to [{model}, {model}]
module.exports = function () {
	const channels = []
	for (const [key, value] of Object.entries(rawChannels)) {
		// Work around inconsistency in the db as 9th of January 2021.
		if (value.slug === 'genevieve-new-wave-no53') continue

		value.id = key
		channels.push(value)
	}
	return channels
}
