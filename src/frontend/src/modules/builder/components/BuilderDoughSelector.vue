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
            :checked="pizza.id === pizzaID"
            @change="$emit('change', pizza.id)"
          />
          <b>{{ pizza.name }}</b>
          <span>{{ pizza.description }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderDoughSelector",
  components: {
    RadioButton,
  },
  data: () => ({
    pizzaID: 1,
  }),
  props: {
    dough: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getClassDough({ name }) {
      return name === "Тонкое" ? "dough__input--light" : "dough__input--large";
    },
  },
};
</script>
