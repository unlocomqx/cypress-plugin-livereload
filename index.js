const debounce = require('debounce');
const ws = new WebSocket("wss://dev.net:35730/livereload");

let reloadCypress = () => {
  console.info("Cypress reload triggered by livereload");
  window.top.document.querySelector(".reporter .restart").click();
};
const debouncedReload = debounce(reloadCypress, 333);

beforeEach(async () => {
  ws.onmessage = (ev) => {
    if (ev.type === "message" && ev.data) {
      try {
        const data = JSON.parse(ev.data);
        if (data.command === "reload") {
          debouncedReload();
        }
      } catch (e) {
        console.error("Could not parse message from livereload");
        console.error(e.message);
        console.error("Original data");
        console.error(ev.data);
      }
    }
  };
});