import CrudApiService from "@/services/CrudApiService";
import axios from "axios";

export default class PizzaApiService extends CrudApiService {
  constructor(notifier) {
    super("pizza", notifier);
  }

  _normalize(pizza) {
    return {
      ...pizza,
      amount: 0,
    };
  }

  _createRequest(pizzas) {
    const { request } = pizzas;
    return request;
  }

  async query(config = {}) {
    const pizzas = await super.query(config);
    return pizzas.map((pizza) => this._normalize(pizza));
  }

  async get(id, config = {}) {
    const { data } = await axios.get(`pizzas/${id}`, config);
    return this._normalize(data);
  }

  async post(pizza) {
    const { data: newPizza } = await axios.post(
      "pizza",
      this._createRequest(pizza)
    );
    return this._normalize(newPizza);
  }

  async put(pizza) {
    await axios.put(`pizzas/${pizza.id}`, this._createRequest(pizza));
    return this._normalize(pizza);
  }
}
