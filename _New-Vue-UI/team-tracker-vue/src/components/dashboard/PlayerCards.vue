<template>
    <div>
      <div class="player-section-title">Player Stats</div>
      <el-row :gutter="24" class="player-cards-row">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="player in players" :key="player._id">
          <el-card class="player-card">
            <div class="player-name">{{ player.name }}</div>
            <div class="player-number">#{{ player.number }}</div>
            <div class="player-position">Position: {{ player.position }}</div>
            <div class="player-averages">
              <div>Psychological: {{ getAverage(player.psychological) }}</div>
              <div>Physical: {{ getAverage(player.physical) }}</div>
              <div>Social/Emotional: {{ getAverage(player.socialEmotional) }}</div>
              <div>Technical: {{ getAverage(player.technical) }}</div>
            </div>
            <el-button class="details-btn" size="small" @click="$emit('show-details', player)">View Details</el-button>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </template>
  
  <script setup>
  defineProps({
    players: Array,
    getAverage: Function
  });
  defineEmits(['show-details']);
  </script>

<style scoped>
.player-section-title {
margin: 32px 0 12px 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: 0.04em;
}
.player-cards-row {
  margin-bottom: 24px;
  row-gap: 24px;
}
.player-card {
  background: var(--card-bg);
  color: var(--text-main);
  border-color: var(--border) !important;
  border-radius: 12px;
  box-shadow: none;
  text-align: left;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.player-name {
  font-size: 1.15rem;
  font-weight: bold;
}
.player-number, .player-position {
  font-size: 0.98rem;
  color: var(--text-secondary);
  margin-bottom: 2px;
}
.player-averages {
  margin: 12px 0;
  font-size: 0.98rem;
}
.details-btn {
  margin-top: 8px;
}
</style>