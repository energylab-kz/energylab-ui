const dataSets = [
    [0, 3, 0, 3, 1], // Akmola region
    [2, 1, 0, 0, 0], // Aktobe region
    [1, 1, 3, 2, 3], // Almaty region
    [5, 2, 0, 0, 0], // Atyrau region
    [0, 0, 6, 2, 0], // East Kazakhstan region
    [2, 2, 3, 0, 2], // Zhambyl region
    [0, 0, 7, 1, 0], // Zhetysu region
    [2, 0, 0, 0, 0], // West Kazakhstan region
    [0, 0, 0, 9, 3], // Karaganda region
    [2, 1, 0, 1, 0], // Kostanay region
    [5, 0, 0, 0, 4], // Kyzylorda region
    [4, 1, 0, 0, 0], // Mangystau region
    [0, 0, 0, 7, 0], // Pavlodar region
    [0, 2, 1, 0, 0], // North Kazakhstan region
    [2, 0, 3, 1, 5], // Turkestan region
    [1, 0, 0, 2, 1], // Ulytau region
    [0, 1, 1, 1, 1], // Abay region
];

// Initialize the chart with default data
const ctx = document.getElementById('chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: dataSets[0],
                backgroundColor: ['rgb(208, 208, 208)', 'rgb(80,200,120)', 'rgb(0, 191, 255)', 'rgb(0, 0, 0)', 'rgb(255,165,0)'],
            },
        ],
        labels: ['Gas', 'Wind', 'Hydro', 'Coal', 'PV'], // Labels for sectors
    },
    options: {
        responsive: true, // Enable responsiveness
        maintainAspectRatio: false, // Maintain aspect ratio to allow responsive resizing
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    const dataset = data.datasets[tooltipItem.datasetIndex];
                    const total = dataset.data.reduce((previousValue, currentValue) => previousValue + currentValue);
                    const currentValue = dataset.data[tooltipItem.index];
                    const percentage = Math.round((currentValue / total) * 100);
                    return `${data.labels[tooltipItem.index]}: ${percentage}%`;
                },
            },
        },
    },
});

// Add event listeners to the buttons to change the chart data and description
const buttons = document.querySelectorAll('#regionButtons .btn');
const chartTitle = document.getElementById('chartTitle');
const chartDescription = document.getElementById('chartDescription');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Извлекаем индекс региона из атрибута data-index
        const regionIndex = event.target.getAttribute('data-index');

        // Проверяем, что индекс корректен
        if (regionIndex !== null) {
            const index = parseInt(regionIndex, 10);

            // Обновляем данные графика
            chart.data.datasets[0].data = dataSets[index];
            chart.update(); // Обновляем график с новыми данными

            // Обновляем заголовок и описание
            chartTitle.textContent = button.textContent;
            chartDescription.textContent = `Description for ${button.textContent}`;
        }
    });
});


// TODO:
// const downloadButton = document.getElementById('downloadButton');
// downloadButton.addEventListener('click', () => {
//   // Создайте снимок экрана диаграммы с использованием html2canvas
//   html2canvas(document.querySelector(".chart-container")).then(function (canvas) {
//       // Предлагаем пользователю выбрать формат и вводить имя файла
//       const format = prompt("Select format (jpeg or png):");
//       if (format && (format === "jpeg" || format === "png")) {
//           const fileName = prompt("Enter file name:") || "chart";

//           // Преобразуйте снимок экрана в изображение с выбранным форматом
//           const image = canvas.toDataURL(`image/${format}`);

//           // Создайте ссылку для скачивания изображения
//           const link = document.createElement('a');
//           link.href = image;
//           link.download = `${fileName}.${format}`;
//           link.click();
//       } else {
//           alert("Choose the right format (jpeg or png).");
//       }
//   });
// });
