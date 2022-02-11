<template>
  <div class="content__ingredients">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите ингредиенты</h2>
      <div class="sheet__content ingredients">
        <div class="ingredients__sauce">
          <p>Основной соус:</p>
          <label
            v-for="sauces in sauces"
            :key="sauces.id"
            class="radio ingredients__input"
          >
            <RadioButton
              name="sauce"
              value="tomato"
              :item="sauces.id"
              :checked="sauces.id === saucesID"
              @change="getID"
            />
            <span>{{ sauces.name }}</span>
          </label>
        </div>
        <div class="ingredients__filling">
          <p>Начинка:</p>
          <ul class="ingredients__list">
            <li
              v-for="ingredient in ingredients"
              :key="ingredient.id"
              class="ingredients__item"
            >
              <SelectorItem :ingredient="ingredient" />
              <ItemCounter :ingredient="ingredient" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectorItem from "@/common/components/SelectorItem";
import ItemCounter from "@/common/components/ItemCounter";
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderIngredientsSelector",
  components: {
    SelectorItem,
    ItemCounter,
    RadioButton,
  },
  data: () => ({
    saucesID: 1,
    amount: 0,
    ingredientId: 0,
  }),
  props: {
    sauces: {
      type: Array,
      default: () => [],
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getID(id) {
      this.$emit("change", id);
    },
  },
};
</script>
