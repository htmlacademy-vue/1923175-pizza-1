<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <label
          v-for="pizza in dough"
          :key="pizza.id"
          class="dough__input"
          :class="getClassDough(pizza)"
        >
          <RadioButton
            name="dough"
            value="light"
            :item="pizza.id"
            :checked="pizza.id === doughID"
            @change="getDoughID(pizza.id)"
          />
          <b>{{ pizza.name }}</b>
          <span>{{ pizza.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import RadioButton from "@/common/components/RadioButton";
const { mapActions, mapState } = createNamespacedHelpers("Builder");
export default {
  name: "BuilderDoughSelector",
  components: {
    RadioButton,
  },
  computed: {
    ...mapState(["dough", "doughID"]),
  },
  methods: {
    ...mapActions(["getDoughID"]),
    getClassDough({ name }) {
      return name === "Тонкое" ? "dough__input--light" : "dough__input--large";
    },
  },
};
</script>
