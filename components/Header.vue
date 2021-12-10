<template>
  <div class="header-component">
    <div class="header-component-links-container">
      <div
        class="header-component-link"
        v-for="(l, index) in headerLinks"
        v-bind:key="l.label + index"
      >
        <a class="header-component-anchor" :href="l.link">
          {{ l.label }}
        </a>
      </div>
    </div>
    <img src="../static/logo.svg" class="header-component-logo" alt="mapit-logo"/>
    <div>MIS MOTOS</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerLinks: [
        {
          label: "Inicio",
          link: "/",
        },
        {
          label: "Contacto",
          link: "/contact",
        },
        {
          label: "Nuestro Blog",
          link: "/blog",
        },
      ],
    };
  },
};
</script>
<style scoped>
.header-component {
  border: 1px solid #ff8000;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}
.header-component-links-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.header-component-link {
  margin: 0px 20px;
}
.header-component-anchor {
  text-decoration: none;
  color: #ff8000;
  font-size: 16px;
}
</style>