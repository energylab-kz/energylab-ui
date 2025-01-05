<template>
  <div class="h-96">
    <div id="map" class="z-[1] h-full"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import L from "leaflet";

onMounted(() => {
  const map = L.map("map").setView([51.505, -0.09], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([51.505, -0.09])
    .addTo(map)
    .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
    .openPopup();
});
</script>

<style scoped>
@import "leaflet/dist/leaflet.css";
#leaflet-map {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>
