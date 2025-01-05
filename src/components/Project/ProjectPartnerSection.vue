<script setup>
const partners = [
  {
    "title": "Zhasyl Damu",
    "image": "/img/partners/zhasyl_damu.png",
    "link": "https://recycle.kz/"
  },
  {
    "title": "KADE",
    "image": "/img/partners/kade.png",
    "link": "https://www.energy.org.kz/about-us"
  },
  {
    "title": "KEGOC",
    "image": "/img/partners/kegoc.png",
    "link": "https://www.kegoc.kz/"
  },
  {
    "title": "Edinburgh University",
    "image": "/img/partners/edinburgh_univeristy.png",
    "link": "https://www.ed.ac.uk/"
  },
  {
    "title": "Gazi University",
    "image": "/img/partners/gazi_university.png",
    "link": "https://gazi.edu.tr/"
  },
  {
    "title": "AIFC",
    "image": "/img/partners/a-aifc-logo-2.svg",
    "link": "https://aifc.kz/"
  },
  {
    "title": "KOREM",
    "image": "/img/partners/korem.png",
    "link": "https://www.korem.kz/"
  },
  {
    "title": "Technical University of Berlin",
    "image": "/img/partners/berlin.png",
    "link": "https://www.tu.berlin/"
  },
  {
    "title": "University of Pisa",
    "image": "/img/partners/university_of_pisa_italy.png",
    "link": "https://www.unipi.it/"
  }
];
</script>

<template>
  <div class="container mb-5 py-5" id="partners">
    <h1 class="mb-4 text-center fw-bold display-4 border-bottom border-secondary border-opacity-10">Partners</h1>
    <div class="row g-3">
      <div v-for="(partner, index) in partners" :key="index" class="col-sm-12 col-md-6 col-lg-4">
        <div class="card text-center">
          <a :href="partner.link" target="_blank">
            <img
              class="object-fit-contain rounded mx-auto mt-4"
              style="width: 200px; height: 200px;"
              src="/img/partners/zhasyl_damu.png"
              :alt="`Partner logo: ${partner.title}`"
            />
          </a>
          <div class="card-body">
            <h3 class="card-title">{{ partner.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
