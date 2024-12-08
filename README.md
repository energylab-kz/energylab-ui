# energylab-old

## TODO

- Common:
  - новый фронт должен еще учитывать ссылки на references и вставлять их в определенные блоки и в самом тексте чтоб можно было навести и нажать - должен быть удобный редактор для этого
  [x] change default bootstrap font family to other custom
  [] merge content from `new_energylab_maps_eng_ru`
  [] create and configure not found page
  - узнать где зареган домен energylab.kz и добавить белый айпи туда нового сервера
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
  - scrollable container:
    ```
    .scroll-container {
      scroll-snap-type: y mandatory; /* Enable snap scrolling vertically */
      overflow-y: scroll; /* Enable vertical scrolling */
      height: 100vh; /* Full viewport height */
    }

    .scroll-item {
      scroll-snap-align: start; /* Align each div to the start of the container */
      height: 100vh; /* Full viewport height for each section */
    }
    ```

- Footer:
  [x] отредактировать контейнеры и вытянуть footer на всю ширину
  [x] отредачить иконки футора и настроить их расстояние от текста

- Header:
  [] переназвать navbar в header
  [] нажатие на navbar-brand должно вести на главную страницу сайт
  [x] отредактировать визуал - добавить glassmorphism, заменить на белый цвет и добавить полосу
  [] добавить breadcrumb из bootstrap для легкой навигации по вложенным страницам
  [] сделать subheader или боковой overflow на каждом из проектов либо одна версия кастомного хэдера
    - ведь на каждый проект делать свой хэдер это проблематично поддерживать
    - и возникают трудности в навигации у пользователя

- Home page:
  [x] перенести hybrid models на completed проекты, также добавить в список текущих проектов LEAP-KZ
  [] main page 390px ломается адаптив

- Project page:
  - fix project accordion
    - сделать внутренний div или контейнер для текста и для img, чтоб их можно было двигать внутри самого контейнера и задавать расстояния между ними
    - повторное нажатие на него не закрывает вкладку а требуется нажать на другую вкладку и ломается закрытие вкладок по итогу
    - image caption or description with figure number
  - fix collapse of team members:
    - если нажать на открыть bio, то оно не закрывается, но закроется если нажать уже на другого человека только - а так не должно быть
  