<script setup>
defineProps({
  image: String,
  title: String,
  slogan: String,
});
</script>

<template>
  <div
    class="container mx-auto mb-5 max-w-7xl rounded-lg bg-green-600/10 bg-cover bg-center px-3 py-6"
    style="background-image: url('{{ banner_image }}');"
    id="banner"
  >
    <div class="flex h-screen items-center justify-center" id="banner-content">
      <div id="slogan"></div>
    </div>
  </div>
</template>

<!-- 
<div class="text-center text-light text-wrap glassmorphism p-4 mx-3">
    <h1 class="fw-bold display-1 glow-text">TITLE</h1>
    <h3 class="fs-4 glow-text">SLOGAN</h3>
</div>
-->

.team-member-image { /* change px to vw or vh to be responsive 15vw or
percents;*/ /* width: 50%; height: 50%; */ /* change margin of image to padding
*/ width: 200px; height: 200px; } .glassmorphism { background: rgba(255, 255,
255, 0.2); border: 1px solid rgba(255, 255, 255, 0.3); backdrop-filter:
blur(10px); border-radius: 15px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
z-index: 2; } #slogan { position: relative; } .glow-text { color: white;
text-shadow: 0 0 30px rgba(11, 150, 243, 0.6); }

<!-- banner section -->
background_image: ../../static/img/banners/chpp_pavlodar.png CHPP-1 Pavlodar
machine learning modeling background-image:
url('../../static/img/banners/hybrid_modeling.png') Hybrid Modeling energy
modeling for planning sustainable future background-image:
url('../../static/img/banners/leap_kz.jpg') LEAP-KZ modeling the fuel-energy
balance of Kazakhstan background-image:
url('../../static/img/banners/power_market.png') Power Market Modeling and
digitalization of electricity system of Kazakhstan background-image: url Smart
City smart - means energy efficient
