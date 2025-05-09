/*
- Purpose: Handles only the chart rendering (canvas), including Chart.js options.
- What styles belong here: Only Chart.js options and plugins for the chart itself (e.g., background color, axis label
color, etc.).
- DO NOT put card or layout styles here.
*/

<template>
  <Bar :data="props.data" :options="options" :key="themeKey" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

// Custom plugin for canvas background
const backgroundColorPlugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart) => {
    const cardBg = getComputedStyle(document.body).getPropertyValue('--card-bg').trim() || '#fff';
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = cardBg;
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

// Chart.register(backgroundColorPlugin);

const props = defineProps({ data: Object })

// Reactive options to support theme switching
// const options = ref({});

// function getThemeOptions() {
//   const cardBg = getComputedStyle(document.body).getPropertyValue('--card-bg').trim() || '#fff';
//   const textMain = getComputedStyle(document.body).getPropertyValue('--text-main').trim() || '#23263a';
//   const isDark = document.body.classList.contains('dark-theme');
//   return {
//     responsive: true,
//     backgroundColor: cardBg,
//     plugins: {
//       legend: {
//         position: 'top',
//         labels: {
//           color: textMain,
//           font: {
//             family: "'Montserrat', 'Segoe UI', Arial, sans-serif", // Example font
//             size: 14,
//             weight: 'bold'
//           }
//         }
//       }
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: textMain,
//           font: {
//             family: "'Montserrat', 'Segoe UI', Arial, sans-serif",
//             size: 13,
//             weight: '500'
//           }
//         },
//         grid: { color: isDark ? '#444' : '#eee' }
//       },
//       y: {
//         beginAtZero: true,
//         max: 100,
//         ticks: {
//           color: textMain,
//           font: {
//             family: "'Montserrat', 'Segoe UI', Arial, sans-serif",
//             size: 13,
//             weight: '500'
//           }
//         },
//         grid: { color: isDark ? '#444' : '#eee' }
//       }
//     }
//   };
// }

// // Update chart options on mount and when theme changes
// const updateOptions = () => {
//   options.value = getThemeOptions();
// };

// // const barChartRef = ref(null);

// onMounted(async () => {
//   updateOptions();
//   // Wait for the chart to render
//   // await nextTick();

//   // observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
// });

// // Watch for theme changes (dark-theme class on body or localStorage)
// watch(
//   () => document.body.classList.contains('dark-theme'),
//   () => {
//     updateOptions();
//   }
// );
</script>

<style scoped></style>
