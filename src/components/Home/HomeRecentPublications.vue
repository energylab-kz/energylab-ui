<script setup>
const publications = [
  {
    title: "S. Zhakiyeva, M. Gabbassov, Y. Akhmetbekov, G. Akybayeva and N. Zhakiyev, The Development of a Risk Assessment Modeling for the Power System of Kazakhstan, 2021 IEEE International Conference on Smart Information Systems and Technologies (SIST), 2021, pp. 1-4, doi: 10.1109/SIST50301.2021.9465892",
    link: "https://doi.org/10.1109/SIST50301.2021.9465892",
  },
  {
    title: "Amanbek Y., Kalakova A., Zhakiyeva S., Korhan K., Zhakiyev N., Fridrich D. Distribution-LMP based Transactive Energy Management in Distribution Systems with Smart Prosumers - A Multi-Agent Approach",
    link: "https://doi.org/10.3390/en15072404",
  },
  {
    title: "B. Sarsembayev, D. Zholtayev, and Ton Duc Do, Maximum Power Tracking of Variable-Speed Wind Energy Conversion Systems based on a Near-Optimal Servomechanism Control System // Optimal Control Applications and Methods",
    link: "https://doi.org/10.1002/oca.2863",
  },
  {
    title: 'A. Zhanbolatov, S. Zhakiyeva, N. Zhakiyev, K. Kayisli (2022) "Blockchain-Based Decentralized Peer-to-Peer Negawatt Trading in Demand-Side Flexibility Driven Transactive Energy System" International Journal of Renewable Energy Research (IJRER), 12(3), 1475-1483. doi:10.20508/ijrer.v12i3.13195.g8530',
    link: "https://doi.org/10.20508/ijrer.v12i3.13195.g8530",
  },
  {
    title: 'B. Sarsembayev, N. Zhakiyev, A. Akhmetbayev and K. Kayisli, "Servomechanism based Optimal Control System Design for Maximum Power Extraction from WECS with PMSG," 2022 10th International Conference on Smart Grid',
    link: "https://doi.org/10.1109/icSmartGrid55722.2022.9848769",
  },
  {
    title: "A. Zhanbolatov, N. Zhakiyev, S. Zhakiyeva, K. Kayisli, B.Azibek, T.Dushayeva. “A Multi-carrier Energy Method for Self-Consumption Enhancement in Residential Buildings",
    link: "https://doi.org/10.1109/ICRERA55966.2022.9922874",
  },
  {
    title: 'G.Abdi, N.Zhakiyev, and S.Toilybayeva "Decarbonization Opportunities and Emerging Carbon Pricing Instruments in Central Asia"',
    link: "https://doi.org/10.1007/978-3-031-29831-8_5",
  },
  {
    title: "Aidyn Bakdolotov, Rocco De Miglio, Nurkhat Zhakiyev. Optimization modelling of the decarbonization scenario of the total energy system of Kazakhstan until 2060",
    link: "https://doi.org/10.3390/en16135142",
  },
];
</script>

<template>
  <!-- container d-flex flex-column mb-5 -->
  <div class="container mx-auto max-w-7xl py-6" id="publications">
    <h2 class="mb-6 text-4xl font-bold">Recent publications</h2>
    <ul class="list-group list-group-flush divide-y divide-slate-200">
      <li v-for="publication in publications" class="list-group-item">
        <a :href="publication.link" target="_blank">
          {{ publication.title }}
        </a>
      </li>
    </ul>

    <!--
    <div class="grid grid-cols-2 gap-6">
      <div v-for="project in projects" class="[&:nth-child(odd)]:last:col-span-2" id="project-cards">
        <div class="p-6 border border-transparent rounded-xl transition-transform ease-in-out duration-100 hover:scale-105 hover:border-green-600 h-48 bg-gray-100 relative" id="project-card">
          <a v-if="project.status === 'CURRENT'" class="after:absolute after:inset-0" :href="project.link">
            <h3 class="mb-2 font-bold text-3xl text-green-600">{{ project.title }}</h3>
          </a>
          <a v-else :href="project.link" class="after:absolute after:inset-0">
            <h3 class="mb-2 font-bold text-3xl text-gray-600">{{ project.title }}</h3>
          </a>
          <p v-if="project.status === 'CURRENT'" class="mb-1 font-bold text-green-600">
            Status: {{ project.status }}
          </p>
          <p v-else class="mb-1 font-bold text-gray-700">
            Status: {{ project.status }}
          </p>
          <p class="line-clamp-3 text-gray-400">{{ project.description }}</p>
        </div>
      </div>
    </div> -->
  </div>
</template>
