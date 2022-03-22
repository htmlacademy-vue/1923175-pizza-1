<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <label
          v-for="size in sizes"
          :key="size.id"
          class="diameter__input"
          :class="`diameter__input--${getClassSize(size.id)}`"
        >
          <RadioButton
            name="diameter"
            value="small"
            :item="size.id"
            :checked="size.id === sizeID"
            @change="getSizeId(size.id)"
          />
          <span>{{ size.name }}</span>
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
  name: "BuilderSizeSelector",
  components: {
    RadioButton,
  },
  computed: {
    ...mapState(["sizes", "sizeID"]),
  },
  methods: {
    ...mapActions(["getSizeId"]),
    getClassSize(id) {
      if (id === 1) {
        return "small";
      } else if (id === 2) {
        return "normal";
      } else if (id === 3) {
        return "big";
      }
    },
  },
};
</script>
