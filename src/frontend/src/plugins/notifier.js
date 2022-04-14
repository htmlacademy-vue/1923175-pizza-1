export default class Notifier {
  #store;
  #textNotification = {
    INFO: "info",
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",
  };

  constructor(store) {
    this.#store = store;
  }

  info(text) {
    this.#store.dispatch("createNotification", {
      text,
      type: this.#textNotification.INFO,
    });
  }

  success(text) {
    this.#store.dispatch("createNotification", {
      text,
      type: this.#textNotification.SUCCESS,
    });
  }

  error(text) {
    this.#store.dispatch("createNotification", {
      text,
      type: this.#textNotification.ERROR,
    });
  }
  warning(text) {
    this.#store.dispatch("createNotification", {
      text,
      type: this.#textNotification.WARNING,
    });
  }
}
