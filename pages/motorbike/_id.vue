<template>
  <div>
    <div v-if="!showModal" class="motorbike-component">
      <div class="motorbike-component-close-container">
        <button @click="onBack()">Cerrar</button>
      </div>
      <div class="motorbike-component-title">{{ motoData.id }}</div>

      <div class="motorbike-component-map-container">map</div>
      <div class="motorbike-component-info-container">
        <p>
          El valor mostrado a continuaci'on es una estimaci'on de precio de
          recompra aproximado, es necesario realizar una tasaci'on en un taller.
          Por favor, consulta con tu concesionario para obtener una oferta en
          firme.
        </p>
        <p>
          El valor calculado de recompra de su motocicleta {{ motoData.id }} es
          de :
        </p>
        <p class="motorbike-component-info-value">
          {{
            parseFloat(
              motoData.precioCompra / (yearsFromBuyingDate * 2)
            ).toFixed(2)
          }}
          €
        </p>
      </div>

      <div v-if="showBtn" class="motorbike-component-close-container">
        <button @click="onRequestAppointment()">Solicitar cita</button>
      </div>
    </div>

    <div
      class="motorbike-component-modal-container"
      v-if="showModal"
      @close="showModal = false"
    >
      <p class="motorbike-component-modal-container-title">Cita solicitada</p>
      <p>Su concesionario se pondra en contacto pronto, para concertar cita</p>

      <div class="motorbike-component-close-container">
        <button @click="onCloseModal()">OK</button>
      </div>
    </div>
  </div>
</template>


<script>
import { DateTime } from "luxon";

const dayFormat = "yyyy-MM-dd";
function fromSQL(date, zone) {
  let _date;
  if (zone) {
    _date = DateTime.fromSQL(`${date} ${zone}`);
  } else {
    _date = DateTime.fromSQL(date);
  }
  return _date;
}

export default {
  data() {
    return {
      idMoto: this.$route.params.id,
      showModal: false,
      showBtn: true,
      motoData: "",
      yearsFromBuyingDate: "",
    };
  },
  methods: {
    async fetch() {
      const result = await this.$axios.get(
        `https://fake.dev.mapit.me/motos/${this.idMoto}`
      );
      this.motoData = result.data;
      this.getPrice(this.motoData);
    },
    onBack() {
      window.location.href = "/";
    },
    onRequestAppointment() {
      this.showModal = !this.showModal;
      this.showBtn = !this.showBtn;
    },
    onCloseModal() {
      this.showModal = !this.showModal;
      this.showBtn = !this.showBtn;
    },
    async getPrice(data) {
      const currentDate = DateTime.now();

      const date1 = currentDate;
      const date2 = DateTime.fromISO(data.fechaCompra);

      const diff = date1.diff(date2, ["years", "months", "days", "hours"]);

      const pastYears = diff.toObject().years;
      this.yearsFromBuyingDate = pastYears;
      console.log(pastYears);
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>
<style scoped>
.motorbike-component {
  border: 1px solid gray;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
}
.motorbike-component-close-container {
  display: flex;
  justify-content: end;
  width: 100%;
}
.motorbike-component-info-container {
  font-weight: initial;
  font-size: 16px;
}
.motorbike-component-info-value {
  font-size: 30px;
  font-weight: bold;
}
.motorbike-component-modal-container {
  font-weight: initial;
  font-size: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #0ea7de;
  padding: 10px;
  margin: 50px;
}
</style>