const js = import("./node_modules/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("Cool WebAssembly");
});