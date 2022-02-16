<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>
      <BuilderDoughSelector :dough="pizza.dough" @change="getDoughID" />
      <BuilderSizeSelector :sizes="pizza.sizes" />
      <BuilderIngredientsSelector
        :sauces="pizza.sauces"
        :ingredients="ingredients"
        @change="getSaucesId"
      />
      <BuilderPizzaView
        v-model="pizzasName"
        :pizza-name="pizzasName"
        :dough-id="doughID"
        :sauces-id="saucesID"
        :total-price="totalPrice"
        :ingredients="ingredients"
        @click="handlerAddСart()"
      />
    </div>
  </form>
</template>
<script>
import pizza from "@/static/pizza.json";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";

export default {
  name: "IndexHome",
  data: () => {
    const ingredients = pizza.ingredients.map((item) => ({
      ...item,
      amount: 0,
    }));

    return {
      pizza,
      pizzasName: "",
      doughID: 1,
      saucesID: 1,
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
    totalPrice() {
      return (
        this.pizza.sizes[0].multiplier * this.pizza.dough[0].price +
        this.pizza.sauces[0].price +
        this.ingredientsPrice
      );
    },
    ingredientsPrice() {
      return this.ingredients.reduce((acc, item) => {
        return acc + item.price * item.amount;
      }, 0);
    },
  },
  methods: {
    getNameImg({ image }) {
      const img = image.split(/[/\\./]+/);
      return img[img.length - 2];
    },
    getDoughID(id) {
      this.doughID = id;
    },
    getSaucesId(id) {
      this.saucesID = id;
    },
    handlerAddСart() {
      this.$emit("click", this.totalPrice);
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
