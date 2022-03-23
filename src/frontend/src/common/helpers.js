import resources from "@/common/enums/resources";
import {
  AuthApiService,
  CrudApiService,
  ReadOnlyApiService,
  PizzaApiService,
} from "@/services/api.service";

export const createResources = (notifier) => {
  return {
    [resources.USERS]: new ReadOnlyApiService(resources.USERS, notifier),
    [resources.AUTH]: new AuthApiService(notifier),
    [resources.PIZZAS]: new PizzaApiService(notifier),
    [resources.COLUMNS]: new CrudApiService(resources.COLUMNS, notifier),
    [resources.PIZZAS]: new CrudApiService(resources.PIZZAS, notifier),
  };
};

export const setAuth = (store) => {
  store.$api.auth.setAuthHeader();
  store.dispatch("Auth/getMe");
};