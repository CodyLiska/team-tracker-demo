/* 
- Purpose: Handles the card and layout for the chart.
- What styles belong here: Only styles for the card, its header/body, and layout.
- DO NOT put any chart (canvas) or Chart.js-specific styles here. 
*/

<template>
  <div class="team-skills-average-chart-title">Team Skills Averages</div>
  <el-card>
    <BarChart :data="data" :key="themeKey" />
  </el-card>
</template>

<script setup>
import BarChart from '../charts/BarChart.vue';
defineProps(['data', 'themeKey']);
</script>

<style scoped>
.team-skills-average-chart-title {
  margin: 32px 0 12px 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: 0.04em;
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