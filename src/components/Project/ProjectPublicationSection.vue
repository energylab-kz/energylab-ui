<script setup>
import { computed } from 'vue';

const publications = [
  {
    "year": 2021,
    "article": "S. Zhakiyeva, M. Gabbassov, Y. Akhmetbekov, G. Akybayeva and N. Zhakiyev, \"The Development of a Risk Assessment Modeling for the Power System of Kazakhstan,\" 2021 IEEE International Conference on Smart Information Systems and Technologies (SIST), Nur-Sultan, Kazakhstan, 2021, pp. 1-4, doi: 10.1109/SIST50301.2021.9465892.",
    "link": "https://doi.org/10.1109/sist50301.2021.9465892",
    "journal": "Scopus"
  },
  {
    "year": 2022,
    "article": "Amanbek, Y., Kalakova, A., Zhakiyeva, S., Kayisli, K., Zhakiyev, N., & Friedrich, D. (2022). Distribution Locational Marginal Price Based Transactive Energy Management in Distribution Systems with Smart Prosumers—A Multi-Agent Approach. Energies, 15(7), 2404. https://doi.org/10.3390/en15072404",
    "link": "https://doi.org/10.3390/en15072404",
    "journal": "WoS, Scopus-Q1"
  },
  {
    "year": 2022,
    "article": "Sarsembayev, B., Zholtayev, D., & Duc, T., DO. (2022). Maximum power tracking of variable‐speed wind energy conversion systems based on a near‐optimal servomechanism control system. Optimal Control Applications and Methods, 43(3), 904–924. https://doi.org/10.1002/oca.2863",
    "link": "http://dx.doi.org/10.1002/oca.2863",
    "journal": "Wiley, WoS, Q2"
  },
  {
    "year": 2022,
    "article": "A. Zhanbolatov, S. Zhakiyeva, N. Zhakiyev, K. Kayisli (2022) Blockchain-Based Decentralized Peer-to-Peer Negawatt Trading in Demand-Side Flexibility Driven Transactive Energy System International Journal of Renewable Energy Research (IJRER), 12(3), 1475-1483. doi:10.20508/ijrer.v12i3.13195.g8530",
    "link": "https://doi.org/10.20508/ijrer.v12i3.13195.g8530",
    "journal": "IJRER, Scopus percentile 58, Q2"
  },
  {
    "year": 2022,
    "article": "B. Sarsembayev, N. Zhakiyev, A. Akhmetbayev and K. Kayisli, \"Servomechanism based Optimal Control System Design for Maximum Power Extraction from WECS with PMSG,\" 2022 10th International Conference on Smart Grid (icSmartGrid), Istanbul, Turkey, 2022, pp. 309-313, doi: 10.1109/icSmartGrid55722.2022.9848769.",
    "link": "https://doi.org/10.1109/icSmartGrid55722.2022.984876",
    "journal": "IEEE, icSmartGrid"
  },
  {
    "year": 2022,
    "article": "Zhanbolatov, A., Zhakiyeva, S., Azibek, B., Zhakiyev, N., Kayisli, K., & Tursyngul, D. (2022). A Multi-Carrier Energy Method for Self-Consumption Enhancement in Smart Residential Buildings. 2022 11th International Conference on Renewable Energy Research and Application (ICRERA), 388–394. https://doi.org/10.1109/icrera55966.2022.9922874",
    "link": "https://doi.org/10.1109/ICRERA55966.2022.9922874",
    "journal": "11th ICRERA"
  },
  {
    "year": 2023,
    "article": "Abdi, G., Zhakiyev, N., & Toilybayeva, S. (2023). Decarbonisation opportunities and emerging carbon pricing instruments in Central Asia. In SpringerBriefs in climate studies (pp. 51–65). https://doi.org/10.1007/978-3-031-29831-8_5",
    "link": "https://doi.org/10.1007/978-3-031-29831-8_5",
    "journal": "Springer, Chapter in Springer's eBook"
  },
  {
    "year": 2023,
    "article": "Zhakiyev, N., Khamzina, A., Zhakiyeva, S., De Miglio, R., Bakdolotov, A., & Cosmi, C. (2023). Optimization Modelling of the Decarbonization Scenario of the Total Energy System of Kazakhstan until 2060. Energies, 16(13), 5142. https://doi.org/10.3390/en16135142",
    "link": "https://doi.org/10.3390/en16135142",
    "journal": "Energies"
  },
  {
    "year": 2021,
    "article": "Nurlan, Z., Kokenovna, T. Z., Othman, M., & Adamova, A. (2021). Resource Allocation Approach for Optimal Routing in IoT Wireless Mesh Networks. IEEE Access, 9, 153926–153942. https://doi.org/10.1109/access.2021.3123903",
    "link": "https://doi.org/10.1109/ACCESS.2021.3123903",
    "journal": "Scopus Q1,WoS Q2"
  },
  {
    "year": 2022,
    "article": "Omirgaliyev, R., Zhakiyev, N., Aitbayeva, N., & Akhmetbekov, Y. (2022). Application of Machine Learning Methods for the Analysis of Heat Energy Consumption by Zones with a Change in Outdoor Temperature: Case Study for Nur-Sultan City. International Journal of Sustainable Development and Planning, 17(4), 1247–1257. https://doi.org/10.18280/ijsdp.170423",
    "link": "https://doi.org/10.18280/ijsdp.170423",
    "journal": "Scopus, Q2, 55%"
  },
  {
    "year": 2022,
    "article": "Zhakiyev, N., Aigerim, K., & Ayagoz, K. (2022). The Energy Sector of the Capital of Kazakhstan: Status Quo and Policy towards Smart City. International Journal of Energy Economics and Policy, 12(4), 414–423. https://doi.org/10.32479/ijeep.13126",
    "link": "https://doi.org/10.32479/ijeep.13126",
    "journal": "Scopus Q1, 90%"
  },
  {
    "year": 2022,
    "article": "Nurlan, Z., Zhukabayeva, T., Othman, M., Adamova, A., & Zhakiyev, N. (2021). Wireless Sensor Network as a mesh: Vision and challenges. IEEE Access, 10, 46–67. https://doi.org/10.1109/access.2021.3137341",
    "link": "https://doi.org/10.1109/ACCESS.2021.3137341",
    "journal": "Scopus Q1, WoS Q2"
  },
  {
    "year": 2022,
    "article": "Satan, A., Khamzina, A., Toktarbayev, D., Sotsial, Z., Bapiyev, I., & Zhakiyev, N. (2022). Comparative LSTM and SVM Machine learning Approaches for energy consumption prediction: case study in Akmola. 2022 International Conference on Smart Information Systems and Technologies (SIST), 1–7. https://doi.org/10.1109/sist54437.2022.9945776",
    "link": "https://doi.org/10.1109/sist54437.2022.9945776",
    "journal": "Scopus"
  },
  {
    "year": 2022,
    "article": "Akhmetzhanov, B. K., Gazizuly, O. A., Nurlan, Z., & Zhakiyev, N. (2022). Integration of a video surveillance system into a smart home using the Home Assistant platform. 2022 International Conference on Smart Information Systems and Technologies (SIST). https://doi.org/10.1109/sist54437.2022.9945718",
    "link": "https://doi.org/10.1109/sist54437.2022.9945718",
    "journal": "Scopus"
  },
  {
    "year": 2022,
    "article": "Nurlan, Z; Zhukabayeva, T; et.al. Fault Node Detection for Wireless Sensor Network Based on Machine Support Vectors. MDPI Sensors.",
    "link": "",
    "journal": "WoS Q2"
  },
  {
    "year": 2022,
    "article": "Arkhipkin O. et al. \"Possibilities of automation of decentralized heat production of Nur-Sultan through the transition to RES\" Bulletin of the AUES (August 2022)",
    "link": "",
    "journal": "KOKSON"
  },
  {
    "year": 2021,
    "article": "R. Omirgaliyev, A. Salkenov, I. Bapiyev and N. Zhakiyev, \"Industrial Application of Machine Learning Clustering for a Combined Heat and Power Plant: A Pavlodar Case Study,\" 2021 IEEE International Conference on Information and Telecommunication Technologies and Radio Electronics (UkrMiCo), Odesa, Ukraine, 2021, pp. 51-56, doi: 10.1109/UkrMiCo52950.2021.9716605.",
    "link": "https://doi.org/10.1109/ukrmico52950.2021.9716605",
    "journal": "UkrMiCo"
  },
  {
    "year": 2021,
    "article": "Sotsial Zh., Zhakiv N., Omirgaliyev R., Application of modeling and machine learning methods for optimal planning of the composition of generating equipment of CHPP",
    "link": "",
    "journal": "Collection of Abstracts of the Forum of Young Scientists"
  },
  {
    "year": 2021,
    "article": "Arkhipkin O.O., Kibarin A.A., Zhakiev N.K. An integrated approach to optimizing fuel combustion at coal-fired power plants in Kazakhstan",
    "link": "",
    "journal": "KOKSON"
  },
  {
    "year": 2021,
    "article": "Zhakiyev N., Sotsial Zh., Salkenov A., Omirgaliyev R. Set of the Data for Modeling large-scale Coal-Fired Combined Heat and Power Plant in Kazakhstan",
    "link": "",
    "journal": "Data in Brief Q3"
  }
]

// TODO: rename a and b variable to more informative names
const sortedDescByYearPublications = computed(() => publications.slice(0).sort((a, b) => b.year - a.year).reverse());
</script>

<template>
  <div class="container mb-5 py-5" id="publications">
    <h1 class="mb-4 text-center fw-bold display-4 border-bottom border-secondary border-opacity-10">Publications</h1>
    <div class="table-responsive-md">
      <table class="table">
        <tbody>
          <tr>
            <th>№</th>
            <th>Year</th>
            <th>Article</th>
            <th>Journal</th>
          </tr>
          <tr v-for="(publication, index) in sortedDescByYearPublications" :key="index">
            <td>{{ index + 1 }}</td>
            
            <!-- TODO refactor code here with computed: if current_year != next_year: rowspan and td else: without rowspan and td -->
            <td
              v-if="index === 0 || publication.year !== sortedDescByYearPublications[index - 1].year"
              :rowspan="sortedDescByYearPublications.filter(p => p.year === publication.year).length">
              {{ publication.year }}
            </td>
            
            <td v-if="publication.link === ''">
              {{ publication.article }}
            </td>
            <td v-else>
              <a :href="publication.link" target="_blank">{{ publication.article }}</a>
            </td>
            <td>{{ publication.journal }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
