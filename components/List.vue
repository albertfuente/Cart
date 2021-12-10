<template>
  <div class="list-component">
    <div v-for="item in items" :key="item.id" class="list-component-container">
      <div @click="onClick(item.id)" class="list-component-motorbike">
        <Item :label="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../atoms/Item.vue";

export default {
  data() {
    return {
      items: [],
      selected: 1,
    };
  },
  components: {
    Item,
  },
  methods: {
    async fetch() {
      const result = await this.$axios.get(`https://fake.dev.mapit.me/motos`);
      this.items = result.data;
    },
    onClick(id) {
      window.location.href = `motorbike/${id}`;
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped>
.list-component {
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
.list-component-container {
  width: 50%;
  background: #0ea7de;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  justify-content: center;
  margin: 0px auto;
  align-items: center;
}
.list-component-motorbike {
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  border-bottom: 1px solid white;
  width: 95%;
  text-align: center;
  cursor: pointer;
}
</style>