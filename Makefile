
BIN := ./node_modules/.bin

lib: node_modules
	$(BIN)/babel --out-dir $@ src --source-maps inline
	$(BIN)/postcss --use autoprefixer --use postcss-import --dir $@ src/index.css

test: node_modules
	$(BIN)/mochify \
		--transform babelify \
		--phantomjs $(BIN)/phantomjs \
		--reporter spec

node_modules: package.json
	npm install
	touch $@

clean:
	rm -rf lib

distclean: clean
	rm -rf node_modules

.PHONY: clean distclean build
