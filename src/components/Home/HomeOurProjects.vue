<script setup>
const projects = [
  {
    title: "LEAP-KZ",
    status: "CURRENT",
    link: "/projects/leap-kz/",
    icon: "",
    description: "TODO: edit description here",
  },
  {
    title: "Power Market",
    status: "CURRENT",
    link: "/projects/power-market/",
    icon: "",
    description:
      "To study the potential for improving the energy efficiency of CHPPs, reducing greenhouse gas emissions and applying modeling and machine learning methods for optimal planning of the composition of the generating equipment of the CHPP in Pavlodar, Kazakhstan.",
  },
  {
    title: "Hybrid Modeling",
    status: "COMPLETED",
    icon: "",
    link: "/projects/hybrid-modeling/",
    description:
      "Developing an integrating hybrid modeling tool of the energy system, which includes a long-term planning model of the energy system and an operational model of the electric power system.",
  },
  {
    title: "CHPP-1 Pavlodar",
    status: "COMPLETED",
    icon: "",
    link: "/projects/chpp-pavlodar/",
    description:
      "The purpose is to study the potential for improving the energy efficiency of CHPPs, reducing greenhouse gas emissions and applying modeling and machine learning methods for optimal planning of the composition of the generating equipment of the CHPP in Pavlodar, Kazakhstan.",
  },
  {
    title: "Smart City",
    status: "COMPLETED",
    icon: "",
    link: "/projects/smart-city/",
    description:
      "Development of IT solutions to optimizse the energy system of of a smart city with application of machine learning methods to reduce harmful emissions. The following will be developed decision making tools to optimize the CHP, heating system of the city and the control system of resource resource consumption of an apartment bscriptg.",
  },
];
</script>

<template>
  <div class="container mx-auto max-w-7xl px-3 py-6" id="projects">
    <h2 class="mb-6 text-4xl font-bold">Our projects</h2>
    <div class="grid grid-cols-2 gap-6">
      <div
        v-for="project in projects"
        :key="project.title"
        class="[&:nth-child(odd)]:last:col-span-2"
        id="project-cards"
      >
        <div
          class="relative h-64 rounded-xl border border-transparent bg-gray-100 from-green-100 p-6 transition-transform duration-100 ease-in-out hover:scale-105 hover:border-green-400 hover:bg-gradient-to-br"
          id="project-card"
        >
          <a
            v-if="project.status === 'CURRENT'"
            class="after:absolute after:inset-0"
            :href="project.link"
          >
            <h3 class="mb-2 text-3xl font-bold text-green-600">
              {{ project.title }}
            </h3>
          </a>
          <a v-else :href="project.link" class="after:absolute after:inset-0">
            <h3 class="mb-2 text-3xl font-bold text-gray-600">
              {{ project.title }}
            </h3>
          </a>
          <p
            v-if="project.status === 'CURRENT'"
            class="mb-1 font-bold text-green-600"
          >
            Status: {{ project.status }}
          </p>
          <p v-else class="mb-1 font-bold text-gray-700">
            Status: {{ project.status }}
          </p>
          <p class="line-clamp-3 text-gray-400">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
