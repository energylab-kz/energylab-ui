<script setup>
// import { ref } from "vue";

// const isMenuOpen = ref(false);
// const toggleMenu = () => {
//   isMenuOpen.value = !isMenuOpen.value;
// };

// const isDropdownOpen = ref(false);
// const toggleDropdown = () => {
//   isDropdownOpen.value = !isDropdownOpen.value;
// };
</script>

<template>
  <header
    class="sticky top-0 z-10 w-full border-b-2 border-gray-100 bg-white/80 backdrop-blur-md"
    id="header"
  >
    <div class="container mx-auto max-w-7xl px-3" id="navigation-wrapper">
      <nav
        class="flex h-16 max-h-16 items-center justify-between py-5"
        id="navigation"
      >
        <a class="" id="brand">
          <img src="/img/logo_black.svg" alt="EnergyLab" draggable="false" />
        </a>

        <ul class="hidden items-center space-x-10 md:flex" id="navigation-menu">
          <li>
            <a href="/#projects"> Projects </a>
          </li>
          <li>
            <a href="/#publications"> Publications </a>
          </li>
          <li>
            <a href="#footer"> Contacts </a>
          </li>
          <li class="relative">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              @click="toggleDropdown"
              role="button"
            >
              <img class="h-6 w-8" src="/img/flags/en.png" />
            </a>
            <ul
              v-if="isDropdownOpen"
              class="absolute right-0 mt-2 w-48 rounded border border-gray-200 bg-white shadow-lg"
            >
              <li>
                <a
                  class="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100"
                  href="/ru"
                >
                  <img class="mr-2 h-5 w-5" src="/img/flags/ru.png" /> RU
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100"
                  href="/kz"
                >
                  <img class="mr-2 h-5 w-5" src="/img/flags/kz.png" /> KZ
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <button
          class="md:hidden"
          type="button"
          @click="toggleMenu"
          id="navigation-toggler"
        >
          <span class="navbar-toggler-icon">Button</span>
        </button>
      </nav>

      <nav
        v-if="isMenuOpen"
        class="max-h-16 py-5 md:hidden"
        id="mobile-navigation"
      >
        <ul class="space-y-4">
          <li>
            <a href="/#projects"> Projects </a>
          </li>
          <li>
            <a href="/#publications"> Publications </a>
          </li>
          <li>
            <a href="#footer"> Contacts </a>
          </li>
          <li class="relative">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              @click="toggleDropdown"
              role="button"
            >
              <img class="h-6 w-8" src="/img/flags/en.png" />
            </a>
            <ul
              v-if="isDropdownOpen"
              class="mt-2 w-48 rounded border border-gray-200 bg-white shadow-lg"
            >
              <li>
                <a
                  class="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100"
                  href="/ru"
                >
                  <img class="mr-2 h-5 w-5" src="/img/flags/ru.png" /> RU
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item flex items-center px-4 py-2 hover:bg-gray-100"
                  href="/kz"
                >
                  <img class="mr-2 h-5 w-5" src="/img/flags/kz.png" /> KZ
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<!-- <template>
  <header
    class="sticky top-0 z-10 w-full backdrop-blur-md bg-white/80 border-b-2 border-gray-100"
    id="header"
  >
    <div class="container mx-auto max-w-7xl" id="navigation-wrapper">
      <nav
        class="flex items-center justify-between py-5 h-16 max-h-16"
        id="navigation"
      >
        <a class="" id="brand"> -->
<!-- href="/" -->
<!-- <img src="/img/logo_black.svg" alt="EnergyLab" draggable="false" /> -->
<!-- style="width: 15%; height: 10%s" -->
<!-- TODO: <img src="/static/img/icon.ico" alt="Logo" width="30" height="30" class="d-inline-block align-text-top"> Energy Lab -->
<!-- </a> -->

<!-- nav-item dropdown ms-auto nav-link -->
<!-- collapse navbar-collapse -->
<!-- <ul class="hidden md:flex space-x-10 items-center" id="navigation-menu">
          <li>
            <a href="/#projects"> Projects </a>
          </li>
          <li>
            <a href="/#publications"> Publications </a>
          </li>
          <li>
            <a href="#footer"> Contacts </a>
          </li>
          <li>
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img class="w-8 h-6" src="/img/flags/en.png" /> -->
<!-- EN -->
<!-- </a>
          </li>
        </ul> -->

<!-- data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation">-->
<!-- <button class="md:hidden" type="button" id="navigation-toggler">
          <span class="navbar-toggler-icon">Button</span>
        </button>
      </nav> -->

<!-- <nav class="py-5 max-h-16" id="breadcrumbs">
        <ol class="flex justify-start space-x-6">
          <li>Home</li>
          <li>Projects</li>
          <li>LEAP-KZ</li>
        </ol>
      </nav> -->
<!-- </div>
  </header>
</template> -->

<!--
<ul class="dropdown-menu">
    <li>
    <a class="dropdown-item" href="/ru">
        <img class="flag" src="/static/img/flags/ru.png"/> RU
    </a>
    </li>
    <a class="dropdown-item" href="/kz">
        <img class="flag" src="/static/img/flags/kz.png"/> KZ
    </a>
</ul>-->

<!-- <div class="collapse navbar-collapse" >
  <ul class="navbar-nav ms-auto">
      <li class="nav-item">
      <a class="nav-link" href="#projects">Projects</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#publications">Publications</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#footer">Contacts</a>
      </li>
  </ul>
</div>
</div> -->
