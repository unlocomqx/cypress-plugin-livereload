const debounce = require("debounce");

const config = Cypress.config("livereload") || {};

const getUrl = (options) => {
  const protocol = options.https ? "wss" : "ws";
  return `${protocol}://${options.hostname}:${options.port}/livereload`;
};

const options = Object.assign({
  hostname: null,
  https: false,
  port: 35729,
  delay: 0,
}, config);

if (!options.hostname) {
  options.hostname = window.location.hostname;
}

const ws = new WebSocket(getUrl(options));

let reloadCypress = () => {
  setTimeout(() => {
    console.info("Cypress reload triggered by livereload");
    window.top.document.querySelector(".reporter .restart").click();
  }, options.delay);
};
const debouncedReload = debounce(reloadCypress, 333);

beforeEach(() => {
  ws.onmessage = (ev) => {
    if (ev.type === "message" && ev.data) {

      // some libs don't send JSON
      if (ev.data === "reload") {
        debouncedReload();
        return;
      }

      try {
        const data = JSON.parse(ev.data);
        if (data.command === "reload") {
          debouncedReload();
        }
      } catch (e) {
      }
    }
  };
});