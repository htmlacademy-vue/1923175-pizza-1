<template>
  <div class="content__diameter">
    <div class="sheet">
      <h2 class="title title--small sheet__title">Выберите размер</h2>
      <div class="sheet__content diameter">
        <label
          v-for="size in sizes"
          :key="size.id"
          class="diameter__input"
          :class="`diameter__input--${getClassSize(size)}`"
        >
          <RadioButton
            name="diameter"
            value="small"
            :item="size.id"
            :checked="size.id === sizeID"
            @change="getSizeID"
          />
          <span>{{ size.name }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import RadioButton from "@/common/components/RadioButton";

export default {
  name: "BuilderSizeSelector",
  components: {
    RadioButton,
  },
  data: () => ({
    sizeID: 1,
  }),
  props: {
    sizes: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getClassSize({ id }) {
      return {
        small: id === 1,
        normal: id === 2,
        big: id === 3,
      };
    },
    getSizeID(id) {
      this.sizeID = id;
    },
  },
};
</script>
