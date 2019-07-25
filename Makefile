# Mostly taken from https://gitlab.com/pages/metalsmith
build: node_modules
	npx webpack
	node_modules/.bin/metalsmith
	mv dist/main.js public/index.js
node_modules: package.json
	npm install

.PHONY: build

clean:
	rm -rf dist
	rm -rf public
	npm ci

run: build
	serve public

