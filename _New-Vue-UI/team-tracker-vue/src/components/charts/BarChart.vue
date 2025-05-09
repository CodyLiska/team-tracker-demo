/*
- Purpose: Handles only the chart rendering (canvas), including Chart.js options.
- What styles belong here: Only Chart.js options and plugins for the chart itself (e.g., background color, axis label
color, etc.).
- DO NOT put card or layout styles here.

- Purpose: Handles the actual rendering of the bar chart using the vue-chartjs library.
*/

<template>
  <Bar :data="chartData" :options="options" :key="themeKey" />
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

defineProps({
  chartData: {
    type: Object,
    required: true,
  },
  options: {
    type: Object,
    required: false,
  },
  themeKey: {
    type: String,
    required: false,
  },
});
</script>

<style scoped></style>
