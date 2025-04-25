<!-- src/components/charts/BarChart.vue -->
<template>
  <Bar :data="data" :options="options" />
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js'

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

defineProps({
  data: Object
})

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Team Skills Averages' }
  }
}
</script>