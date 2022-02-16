<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>
      <BuilderDoughSelector
        :dough="pizza.dough"
        :dough-id="doughID"
        @change="getDoughID"
      />
      <BuilderSizeSelector
        :sizes="pizza.sizes"
        :size-id="sizeID"
        @change="getSizeId"
      />
      <BuilderIngredientsSelector
        :sauces="pizza.sauces"
        :ingredients="ingredients"
        @change="getSaucesId"
        @onReduce="onReduce"
        @onIncrease="onIncrease"
      />
      <BuilderPizzaView
        v-model="pizzasName"
        :pizza-name="pizzasName"
        :dough-id="doughID"
        :sauces-id="saucesID"
        :total-price="totalPrice"
        :ingredients="ingredients"
        @click="handlerAddСart()"
        @on-drop="getIngredient"
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
      doughID: pizza.dough[0].id,
      saucesID: pizza.sauces[0].id,
      sizeID: pizza.sizes[0].id,
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
        (this.pizza.dough[0].price +
          this.pizza.sauces[0].price +
          this.ingredientsPrice) *
        this.pizza.sizes.find(({ id }) => this.sizeID === id).multiplier
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
    getSizeId(id) {
      this.sizeID = id;
    },
    handlerAddСart() {
      this.$emit("click", this.totalPrice);
    },
    onReduce(item) {
      --item.amount;
    },
    onIncrease(item) {
      ++item.amount;
    },
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
