# Mostly taken from https://gitlab.com/pages/metalsmith
build: node_modules
	npx babel src/index.ts > public/index.js
	npx metalsmith
# mv dist/main.js public/index.js
node_modules: package.json
	npm ci

.PHONY: build

clean:
	rm -rf dist
	rm -rf public
	npm ci

run: build
	serve public

