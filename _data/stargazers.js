const Cache = require('@11ty/eleventy-cache-assets')

// Example of how to fetch external data into a template {{stargazers.count}}
module.exports = async function () {
	// https://developer.github.com/v3/repos/#get
	let json = await Cache('https://api.github.com/repos/internet4000/radio4000', {
		duration: '1d', // 1 day
		type: 'json', // also supports "text" or "buffer"
	})
	return {
		count: json.stargazers_count,
	}
}
