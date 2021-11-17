<template>
  <div class="header-component">
    <div class="header-component-links-container">
      <div
        class="header-component-link"
        v-for="(l, index) in headerLinks"
        v-bind:key="l.label + index"
      >
        <a :href="l.link">
          {{ l.label }}
        </a>
      </div>
    </div>
    <div>
      <div class="header-component-image-container">
        <img src="../static/box.png" alt="box" />
      </div>
    </div>
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
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
}
.header-component-links-container {
  display: flex;
  flex-direction: row;
  justify-content: end;
}
.header-component-link {
  margin: 0px 20px;
}
</style>