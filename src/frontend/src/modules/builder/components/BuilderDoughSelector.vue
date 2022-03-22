<template>
  <div class="content__dough">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите тесто</h2>
      <div class="sheet__content dough">
        <label
          v-for="dough in doughList"
          :key="dough.id"
          class="dough__input"
          :class="getClassDough(dough)"
        >
          <RadioButton
            name="dough"
            value="light"
            :item="dough.id"
            :checked="dough.id === doughID"
            @change="setDoughID(dough.id)"
          />
          <b>{{ dough.name }}</b>
          <span>{{ dough.description }}</span>
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
    ...mapState(["doughList", "doughID"]),
  },
  methods: {
    ...mapActions(["setDoughID"]),
    getClassDough({ name }) {
      return name === "Тонкое" ? "dough__input--light" : "dough__input--large";
    },
  },
};
</script>
