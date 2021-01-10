all:
	make seed build

seed: 
	curl https://radio4000.firebaseio.com/channels.json > raw-channels.json

start:
	npx @11ty/eleventy --serve

build:
	npx @11ty/eleventy
