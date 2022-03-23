import axios from "axios";
import ReadOnlyApiService from "@/services/ReadOnlyApiService";

export default class CrudApiService extends ReadOnlyApiService {
  #resource;
  constructor(resource, notifier) {
    super(resource, notifier);
    this.#resource = resource;
  }

  async post(entify) {
    const { data } = await axios.post(this.#resource, entify);
    return data;
  }

  async put(entify) {
    const { data } = await axios.put(`${this.#resource}/${entify.id}`, entify);
    return data;
  }

  async delete(id) {
    const { data } = await axios.delete(`${this.#resource}/${id}`);
    return data;
  }
}
