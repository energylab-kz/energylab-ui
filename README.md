# energylab-ui

## Installation
- Node:
  - `https://github.com/nvm-sh/nvm`
  - `nvm install node lts`
- Vue + Vite template:
  - `npm create vite@latest energylab-ui --template vue-ts` or `npm create vue@latest`
  - `cd energylab-ui`
- Start project:
  - `npm install`
  - `npm run dev`
  - `npm run build`

## TODO
- Migrate to Vue SPA from simple html + js + jquery
  - [] Migrate from js to ts
  - [] Remake all templates to components and pages
    - Connect Vue Router (folder - views / pages)
  - [] Configure i18n and i10n (folder - i18n / translations)
  - [] Fix confusion with public vs assets vs static (css, img, js, pdf)
  - [] Migrate styles from bootstrap to tailwind and ui component library (shadcn vue, prime vue, etc.)
  - [] Избавится от всех cdn и вместо этого просто установить зависимости или необходимый контент
    - configure custom font family (google inter sans-serif) in tailwind and locally as woff2
    - fontawesome icons или другая библиотека с иконками
    - сжатие картинок и оптимизации статики
    - HighchartsCDN, ChartCDN, HTML2CanvasCDN или другая библиотека для графиков и статистики
  - [] Migrate from npm to yarn / pnpm / etc. package manager (Install Yarn globally: `npm install -g yarn`, Update Yarn locally: `corepack enable`, `yarn set version stable`, `yarn install`)
  - [] Полностью переделать и перерисовать UI according to figma concepts или дизайн системе
  - [] Улучшить архитектуру проекта: перейти на модульную архитектуру, fsd, и т.д.
  - [] Форматирование кода и качество кода
    - тестирование с помощью Playwright e2e и vitest unit-test ("@playwright/test", "@vitest/eslint-plugin", "@vue/eslint-config-prettier", "@vue/test-utils", "jsdom", "eslint-plugin-playwright", "vite-plugin-vue-devtools", "vitest")
    - zod или другой form validation libraries
    - настроить автоматические scripts сборки в package.json
    - интеграция pinia для управления state
    - миграция на metaframework like nuxt.js для ssr или использование vite ssr
- Components / Pages:
  - Header:
    - нажатие на brand / logo должно вести на главную страницу сайта
      - change a href to vue router link
    - добавить breadcrumb / subheader для легкой навигации по вложенным страницам
      - ведь на каждый проект делать свой хэдер это проблематично поддерживать
    - и возникают трудности в навигации у пользователя
    - смена темы
    - боковой overflow на каждом из проектов либо одна версия кастомного хэдера
  - Footer:
    - отредактировать контейнеры и вытянуть footer на всю ширину
    - отредачить иконки футора и настроить их расстояние от текста
  - HomeView:
    - HomeOurProjecs
      - flexbox vs grid
      <!-- w-full sm:w-1/2 px-3 mb-4 -->
      <!-- <div class="-mx-2"> <div class="overflow-hidden" id="project-card"> -->
      <!-- -mx-4 p-4 -->
      <!-- flex flex-wrap justify-between gap-4 basis-6/12 last:basis-full -->
      - convert Status: UPPERCASE to Status: Capitalize (change on frontend side)
  - ProjectView:
    - fix project accordion
      - сделать внутренний div или контейнер для текста и для img, чтоб их можно было двигать внутри самого контейнера и задавать расстояния между ними
      - повторное нажатие на него не закрывает вкладку а требуется нажать на другую вкладку и ломается закрытие вкладок по итогу
      - image caption or description with figure number
    - fix collapse of team members:
      - если нажать на открыть bio, то оно не закрывается, но закроется если нажать уже на другого человека только - а так не должно быть
  - Common:
    - ломается адаптив,  fix container sizing and adaptivity - make it like in bootstrap
    - добавить margins bottom to text elements и сделать общую настройку размера компонентов (h1-h6, p, etc.)
    - настроить img alt
    - когда нажимаешь на картинку она должна расширятся как popup как на хабре сделано
    - новый фронт должен еще учитывать ссылки на references и вставлять их в определенные блоки и в самом тексте чтоб можно было навести и нажать - должен быть удобный редактор для этого
    - create and configure not found page
    - подгрузку общих данных с json, как переходный этап пока нету бэка
      - и это облегчит пока что поддержание нескольких версий одновременно, вместо написания таких же темплейтов
      - также можно попробовать использовать jinja для генерации таких темплейтов на разных языках
      - Отрефакторить `kz` и `ru` страницы
    - Добавить еще один проект в current projects: leep modern fuel energy balance (на трех языках версии)
    - wysiwyg editor на flask или django для админки 
    - отредактировать стили, сетку элементов, расстояния между элементами, margin size and font size
    - add <section>s to some parts where it needed
    - add text-truncate to some cards
    - add blockquote bootstrap class
    - заменить gutters на margin и padding, ведь gutter делают margin сверху и происходит наложение
    - убрать body padding 48px который нужен только чтоб header не накладывался на content - нужно найти другой способ для решения проблемы
      - base.css - /* margin-top: 48px; TODO: other way of adding distance from header or wrap header to index.html - wrap(header, content, footer)*/
    - сделать project-card одиннакового размера а не разного, и если больше текста то он должен обрезаться
    - scrollable container (scroll snap)
    - coordinates, administrative region borders

<!-- TODO: PartnersList or Partners component -->
<!-- ProjectPartnerItem ProjectPartnerList -->
<!-- add id: uuid_here -->