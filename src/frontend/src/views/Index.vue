<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>
      <BuilderDoughSelector :dough="pizza.dough" :dough-id="doughID" />
      <BuilderSizeSelector
        :sizes="pizza.sizes"
        :size-id="sizeID"
        @change="getSizeId"
      />
      <BuilderIngredientsSelector
        :sauces="pizza.sauces"
        :ingredients="ingredients"
      />
      <BuilderPizzaView
        :pizza-name="pizzaName"
        :dough-id="doughID"
        :sauces-id="saucesID"
        :total-price="totalPrice"
        :ingredients="ingredients"
        @click="addToCart(totalPrice)"
        @on-drop="getIngredient"
      />
    </div>
  </form>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import pizza from "@/static/pizza.json";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";
const { mapActions, mapState, mapGetters } = createNamespacedHelpers("Builder");
export default {
  name: "IndexHome",
  data: () => {
    const ingredients = pizza.ingredients.map((item) => ({
      ...item,
      amount: 0,
    }));

    return {
      pizza,
      ingredients,
    };
  },
  components: {
    BuilderDoughSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
    BuilderSizeSelector,
  },
  computed: {
    ...mapState(["pizzaName", "sizeID", "doughID", "saucesID"]),
    ...mapGetters(["totalPrice"]),
  },
  methods: {
    ...mapActions(["addToCart", "getSizeId", "onIncrease"]),
    getIngredient({ id }) {
      this.onIncrease(this.ingredients.find((item) => item.id === id));
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
