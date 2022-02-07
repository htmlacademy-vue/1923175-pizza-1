<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>
        <BuilderDoughSelector :dough="pizza.dough" @change="getDoughID" />
        <BuilderSizeSelector :sizes="pizza.sizes" />
        <BuilderIngredientsSelector
          :sauces="pizza.sauces"
          :ingredients="pizza.ingredients"
          @change="getSaucesId"
        />
        <BuilderPizzaView
          v-model="pizzasName"
          :dough-id="doughID"
          :sauces-id="saucesID"
        />
      </div>
    </form>
  </main>
</template>
<script>
import pizza from "@/static/pizza.json";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";

export default {
  name: "IndexHome",
  data: () => ({
    pizza,
    pizzasName: "",
    doughID: 1,
    saucesID: 1,
  }),
  components: {
    BuilderDoughSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
    BuilderSizeSelector,
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
