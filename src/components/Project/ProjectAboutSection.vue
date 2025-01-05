<script setup>
import { ref } from 'vue';

// descriptions, about
const description = ref({
  general: [
    {
      title: "Title",
      content: "Elaboration of IT solutions for optimization of heat and power supply system Thermal-electrical control systems of Moscow city with application of methods of machine learning for increase of power efficiency and reductions of harmful emissions emissions reduction."
    },
    {
      title: "Goals and objectives",
      content: "Development of IT solutions to optimizse the energy system of of a smart city with application of machine learning methods to reduce harmful emissions. The following will be developed decision making tools to optimize the CHP, heating system of the city and the control system of resource resource consumption of an apartment building."
    },
    {
      title: "Expected results",
      content: "RP-3 will be developed: a decision-making tool for the optimal selection of the composition of the generating equipment of the CHP; a model of the heat network city heating network model based on telemetry big data analysis; information-computer system for optimal modes of operation of the heat and power sector using modern methods on the basis of the Virtual Power Plant; a prototype system for resource consumption management based on the example of a multi-family residential building; information and computer system for calculating the optimal modes of operation of the heat and power of an apartment building; information and computer system modules for the analysis of energy efficiency, losses emissions, identification of blind spots in the telemetry system, modeling of the stochastic consumption profile consumption."
    }
  ],
  details: [
    {
      title: "Smart City within Astana and Astana IT University",
      content: "Today, Astana IT University conducts research in the IT field in multidisciplinary areas: smart systems and technologies, digital twins, EdTech, FinTech, AgroTech and energy systems One of them is the \"Smart City\" project aimed at development of urban infrastructure, which aims to improve the quality of life of citizens by improving the transport infrastructure, development of environmental conditions, efficient use of energy resources and implementation of predictive analytics principles of data for decision-making in the concept of Smart City. One of the tasks of the scientific project is to develop a biotechnological filter based on a biological agent to clean polluted air in Nur-Sultan, as well as to create a favorable environment for the surrounding area."
    },
    {
      title: "Combination with natural aspects",
      content: "The main natural component in the biotech filter is moss. Mosses can have a huge positive effect on the environment: they absorb fine dust particles, actively absorb gas, including CO2 and NO, while releasing oxygen. Mosses are characterized by a high sanitary and hygienic effect, due to their antibacterial and septic influence on the environment. The technology of moss cultivation (irrigation, temperature, humidity, nutrition) in a closed system is provided by automating processes using IoT technology. The developed air purification system has not only an environmental effect, but also a social one. The engineering solution has been designed in terms of design and convenience for the citizens."
    },
    {
      title: "Big data analytics of the city environment",
      content: "One more task of the project is analytics of big data, which is collected in different information systems of the city on the basis of which it is necessary to make direct conclusions what projects of the city it is necessary to develop. Where it is necessary to build a school, a hospital, a store, a fire station or expand, optimize the city's road interchanges, and possibly launch an additional bus route. The sharing economy has been expanding in recent decades, especially among the under-35 age group. According to a Goldman Sachs study, this service is most popular among millennials. One in three (35%) millennials worldwide is willing to rent a car for short periods of time. Developments in energy system modeling using machine learning will help the city identify potential places to reduce losses and increase energy efficiency. To optimize the consumption of various resources (electricity, water, heat, etc.) it is important not only the efforts of the akimat, but also the need for massive involvement of residents. The concept of Smart Home is being developed by large companies that are not able to integrate new sensors from other manufacturers. A prototype resource management system is being developed for a residential house, which will integrate different devices (leakage sensor, video camera, smart sockets, meters, smart locks, etc.) into one system. Monitor and control it via phone."
    }
  ],
  attachments: [
    {

    }
  ]
})
</script>

<template>
  <div class="container mb-5 py-5" id="project-description">
    <h1 class="mb-4 text-center fw-bold display-4 border-bottom border-secondary border-opacity-10">About</h1>
    <h2 class="mb-3">General</h2>
    <div class="mb-5" id="project-cards">
      <div class="row g-4">
        <div v-for="item in description.general" :key="item.title" class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2 class="mb-3">Details</h2>
    <div class="accordion" id="project-details">
      <div v-for="item in description.details" :key="item.title" class="accordion-item">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse + ${item.title}`"
              aria-expanded="false"
              aria-controls="collapse">
              <!-- TODO aria expanded first - true, others after - false -->
              <!-- :data-bs-target="'#collapse' + item.title" -->
              <!-- :aria-controls="'collapse' + item.title" -->
              {{ item.title }}
            </button>
          </h2>
        </div>        
        <div :id="`collapse + ${item.title}`" class="accordion-collapse collapse show" data-bs-parent="#project-details">
          <div class="accordion-body">
            <p class="fw-light">{{ item.content }}</p>
            <!-- TODO fix accordion -->
            <!-- TODO: <img src="/img/projects/sc-components.png" class="img-thumbnail d-block mx-auto" /> -->
            <!-- TODO то что можно добавлять текст и картинки множество раз - for loop из p и img -->
          </div>
        </div>
      </div>
    </div>

    <h2 class="mb-3">Attachments</h2>
      <div class="" id="project-attachments">
        <div class="row g-3">
          
          <!-- v-for="item in " -->
          <div class="col-md-6">
            <div class="d-flex align-items-center border rounded p-3">
              <div class="bg-light rounded-circle p-3 d-flex justify-content-center align-items-center me-3">
                <a href="../../static/pdf/Banner PSA Zhakiyev.pdf" class="bi bi-paperclip text-primary">
                  <i class="fa-solid fa-paperclip"></i>
                </a>
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-1">Project banner</h6>
                <small class="text-muted">FILE_SIZE - FILE_TYPE</small>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
