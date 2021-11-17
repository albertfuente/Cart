<template>
  <div class="cart-component">
    <div class="cart-component-title-container">
      <h1>Resumen de tu cesta</h1>
    </div>
    <div class="cart-component-title-anchor">
      <a href="/"> Seguir comprando </a>
    </div>

    <div class="cart-component-info-container">
      <div class="cart-component-box-info"></div>
      <div class="cart-component-name"></div>
      <div class="cart-component-cost">PRECIO UNIDAD</div>
      <div class="cart-component-quantity">CANTIDAD</div>
      <div class="cart-component-subtotal"><b>SUBTOTAL</b></div>
      <div class="cart-component-delete"></div>
    </div>

    <div
      class="cart-component-items-container"
      v-for="item in items"
      :key="item.id"
    >
      <div class="cart-component-item-box">
        <img class="cart-component-box" src="../static/box.png" alt="box" />
      </div>
      <div class="cart-component-name">{{ item.attributes.name }}</div>
      <div class="cart-component-cost">
        {{ item.attributes.shipping_costs + "€" }}
      </div>
      <div class="cart-component-quantity">
        <select v-model="selected">
          <option disabled value=""></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div class="cart-component-subtotal">
        <b>
          {{
            parseFloat(item.attributes.shipping_costs * selected).toFixed(2) +
            "€"
          }}</b
        >
      </div>
      <div class="cart-component-delete">eliminar</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      selected: 1,
    };
  },
  methods: {
    async fetch() {
      const result = await this.$axios.get(
        `http://demo0915487.mockable.io/cart`
      );
      this.items = result.data.data.stores.data;
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped>
.cart-component {
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
}
.cart-component-title-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cart-component-info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 2px solid black;
  margin: 5px;
}
.cart-component-items-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid black;
}
.cart-component-box {
  width: 200px;
  height: 200px;
  margin-right: 50px;
}
.cart-component-box-info {
  width: 200px;
  height: 10px;
  margin-right: 50px;
}
.cart-component-name {
  width: 500px;
}
.cart-component-cost {
  width: 500px;
}
.cart-component-quantity {
  width: 500px;
}
.cart-component-subtotal {
  width: 500px;
}
.cart-component-delete {
  width: 100px;
}
.cart-component-title-anchor {
  display: flex;
  justify-content: end;
}
</style>