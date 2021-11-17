<template>
  <div class="summary-component">
    <div class="summary-component-wrapper">
      <div class="summary-component-container">
        <h3>Resumen del pedido</h3>
        <div class="summary-component-summary-container">
          <div>Total productos IVA Incluido</div>
          <div>{{ items.total_price + items.currency_code }}</div>
        </div>
        <div class="summary-component-summary-container">
          <div>Total de envio (imp.excl)</div>
          <div>
            {{
              items.estimated_shipping_costs === "0.00"
                ? "Envio gratuito"
                : items.estimated_shipping_costs
            }}
          </div>
        </div>
        <div class="summary-component-summary-container">
          <div>Total sin IVA:</div>
          <div>
            {{
              items.estimated_shipping_costs_without_tax + items.currency_code
            }}
          </div>
        </div>
        <div class="summary-component-summary-container">
          <div>Total de impuestos:</div>
          <div>{{ items.total_vat_taxes + items.currency_code }}</div>
        </div>
        <div class="summary-component-summary-container">
          <div class="divider"><b>Total a pagar</b></div>
          <div>
            <b>{{ items.total_price + items.currency_code }}</b>
          </div>
        </div>
      </div>

      <div class="summary-component-container">
        <div class="summary-component-summary-container">
          <form action="/action_page.php">
            <div class="summary-component-account-container">
              <label>Algun descuento? </label><br />
              <input v-model="discount" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="summary-component-container">
      <h3>Crea tu cuenta</h3>

      <form action="/action_page.php">
        <div class="summary-component-account-container">
          <label>Nombre:</label><br />
          <input v-model="name" />
        </div>
        <div class="summary-component-account-container">
          <label>Apellido:</label><br />
          <input v-model="firstName" />
        </div>
        <div class="summary-component-account-container">
          <label>Correo electronico:</label><br />
          <input v-model="email" />
        </div>
        <div class="summary-component-account-container">
          <label>Contrasena:</label><br />
          <input v-model="password" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      firstName: "",
      email: "",
      password: "",
      discount: "",
      items: [],
    };
  },
  methods: {
    async fetch() {
      const result = await this.$axios.get(
        `http://demo0915487.mockable.io/cart`
      );
      this.items = result.data.data.attributes;
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style >
.summary-component {
  display: flex;
  justify-content: space-between;
}
.summary-component-container {
  border: 1px solid gray;
  width: 450px;
  margin: 10px;
  padding: 10px;
}
.summary-component-summary-container {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}
div.summary-component-summary-container:nth-child(6) {
  border-top: 1px solid black;
  margin-top: 10px;
}
.summary-component-account-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  flex-direction: column;
  margin: 10px 0px;
}
</style>