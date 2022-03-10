<template>
  <form action="#" method="post">
    <div class="content__wrapper">
      <h1 class="title title--big">Конструктор пиццы</h1>
      <BuilderDoughSelector />
      <BuilderSizeSelector />
      <BuilderIngredientsSelector />
      <BuilderPizzaView />
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
const { mapState, mapGetters } = createNamespacedHelpers("Builder");
export default {
  name: "IndexHome",
  data: () => {
    return {
      pizza,
    };
  },
  components: {
    BuilderDoughSelector,
    BuilderIngredientsSelector,
    BuilderPizzaView,
    BuilderSizeSelector,
  },
  computed: {
    ...mapState(["pizzaName", "sizeID", "doughID", "saucesID", "ingredients"]),
    ...mapGetters(["pizzaPrice"]),
  },
};
</script>
