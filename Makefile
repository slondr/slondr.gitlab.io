# Mostly taken from https://gitlab.com/pages/metalsmith
build: node_modules
	npx metalsmith
	npx babel src/index.ts > public/index.js
# mv dist/main.js public/index.js
node_modules: package.json
	yarn install

.PHONY: build

clean:
	rm -rf dist
	rm -rf public
	rm -rf node_modules

run: build
	serve public

