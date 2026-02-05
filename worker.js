self.addEventListener("message", (event) => {
  const { delay } = event.data;
  setTimeout(() => {
    self.postMessage({ synced: true, delay });
  }, Number(delay) || 0);
});