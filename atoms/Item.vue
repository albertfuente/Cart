<template>
  <div class="item-atom">
    {{ label }}
  </div>
</template>

<script>


export default {
  name: "Item",

  props: {
    label: {
      type: String,
      default: "label",
    },
  },
};
</script>
<style scoped>
</style>