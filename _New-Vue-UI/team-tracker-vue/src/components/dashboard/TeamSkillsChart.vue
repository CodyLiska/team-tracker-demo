/*
- Purpose: Handles the card and layout for the chart.
- What styles belong here: Only styles for the card, its header/body, and layout.
- DO NOT put any chart (canvas) or Chart.js-specific styles here.

- Purpose: Handles the actual rendering of the bar chart using the vue-chartjs library.
*/

<template>
  <div class="team-skills-chart">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Define props
defineProps({
  data: {
    type: Object,
    required: true,
  },
});

// Define options for the chart
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  },
};

</script>

<style scoped>
.team-skills-chart {
  padding: 0 16px;
  margin-top: 24px;

  /* Add padding to prevent overflow caused by gutter */
}

.team-skills-average-chart-title {
  margin: 32px 0 12px 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: 0.04em;
}

:deep(.el-card) {
  overflow: hidden;
  /* Prevent chart from overflowing */
}

:deep(.el-card),
:deep(.el-card__body),
:deep(.el-card-body) {
  background: var(--card-bg) !important;
  color: var(--text-main) !important;
  border-radius: 16px !important;
  box-shadow: none !important;
}
</style>