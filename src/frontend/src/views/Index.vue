<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>
            <div class="sheet__content dough">
              <label
                v-for="pizza in pizza.dough"
                :key="pizza.id"
                class="dough__input"
                :class="getClassDough(pizza)"
              >
                <input
                  type="radio"
                  name="dought"
                  value="light"
                  class="visually-hidden"
                  checked=""
                />
                <b>{{ pizza.name }}</b>
                <span>{{ pizza.description }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>
            <div class="sheet__content diameter">
              <label
                v-for="size in pizza.sizes"
                :key="size.id"
                class="diameter__input"
                :class="`diameter__input--${getClassSize(size)}`"
              >
                <input
                  type="radio"
                  name="diameter"
                  value="small"
                  class="visually-hidden"
                />
                <span>{{ size.name }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="content__ingredients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингредиенты
            </h2>
            <div class="sheet__content ingredients">
              <div class="ingredients__sauce">
                <p>Основной соус:</p>
                <label
                  v-for="sauces in pizza.sauces"
                  :key="sauces.id"
                  class="radio ingredients__input"
                >
                  <input type="radio" name="sauce" value="tomato" checked="" />
                  <span>{{ sauces.name }}</span>
                </label>
              </div>
              <div class="ingredients__filling">
                <p>Начинка:</p>
                <ul class="ingredients__list">
                  <li
                    v-for="ingredient in pizza.ingredients"
                    :key="ingredient.id"
                    class="ingredients__item"
                  >
                    <span
                      class="filling"
                      :class="`filling--${getNameImg(ingredient)}`"
                    >
                      {{ ingredient.name }}
                    </span>
                    <div class="counter counter--orange ingredients__counter">
                      <button
                        type="button"
                        class="counter__button counter__button--minus"
                        disabled=""
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>
          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button" disabled="">Готовьте!</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>
<script>
import pizza from "@/static/pizza.json";

export default {
  name: "IndexHome",
  data() {
    return {
      pizza,
    };
  },
  methods: {
    getClassDough({ name }) {
      return name === "Тонкое" ? "dough__input--light" : "dough__input--large";
    },
    getNameImg({ image }) {
      const img = image.split(/[/\\./]+/);
      return img[img.length - 2];
    },
    getClassSize({ id }) {
      return {
        small: id === 1,
        normal: id === 2,
        big: id === 3,
      };
    },
  },
};
</script>
<style scoped>
.header {
  margin-bottom: 30px;
  padding: 20px 0;
  background-color: #38a413;
}
</style>
