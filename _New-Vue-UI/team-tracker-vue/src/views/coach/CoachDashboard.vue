<template>
  <PageWrapper>
    <div class="main-container">
      <div class="coach-dashboard">
        <StatsRow :statsArray="statsArray" />

        <TeamSkillsChart :data="teamSkillsData" />

        <PlayerCards :players="players" :getAverage="getAverage" @show-details="showPlayerDetails" />

        <!-- Player Details Modal -->
        <el-dialog v-model="playerDialogVisible"
          :title="selectedPlayer ? selectedPlayer.name + ' - #' + selectedPlayer.number : ''" width="400px">
          <div v-if="selectedPlayer">
            <div style="margin-bottom: 10px;">Position: {{ selectedPlayer.position }}</div>
            <div v-for="category in skillCategories" :key="category" style="margin-bottom: 8px;">
              <strong>{{ categoryDisplay[category] }}:</strong>
              <div v-for="(value, skill) in selectedPlayer[category]" :key="skill">
                {{ skill }}: {{ value }}
              </div>
            </div>
          </div>
          <template #footer>
            <el-button @click="playerDialogVisible = false">Close</el-button>
          </template>
        </el-dialog>

        <RecentActivity :recentActivity="recentActivity" />
      </div>
    </div>
  </PageWrapper>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import StatsRow from '../../components/dashboard/StatsRow.vue'
import TeamSkillsChart from '../../components/dashboard/TeamSkillsChart.vue'
import PlayerCards from '../../components/dashboard/PlayerCards.vue'
import RecentActivity from '../../components/dashboard/RecentActivity.vue'

// --- State and Logic ---
const players = ref([])
const playerDialogVisible = ref(false)
const selectedPlayer = ref(null)
const stats = ref({
  totalPlayers: 0,
  gamesPlayed: 0,
  winRate: '0%',
  teamRating: 0
})

const statsArray = computed(() => [
  { label: 'Total Players', value: stats.value.totalPlayers, desc: 'Players on roster' },
  { label: 'Games Played', value: stats.value.gamesPlayed, desc: 'Total games played' },
  { label: 'Win Rate', value: stats.value.winRate, desc: 'Win percentage' },
  { label: 'Team Rating', value: stats.value.teamRating, desc: 'Avg. technical rating' }
])

const teamSkillsData = ref({
  labels: ['Psychological', 'Physical', 'Social/Emotional', 'Technical'],
  datasets: [
    {
      label: 'Team Average',
      backgroundColor: '#3498fd',
      data: [0, 0, 0, 0]
    }
  ]
})

const loadPlayers = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/players')
    players.value = response.data

    // Calculate team averages for each category
    const categoryAverages = {
      psychological: 0,
      physical: 0,
      socialEmotional: 0,
      technical: 0
    }
    const categoryCounts = {
      psychological: 0,
      physical: 0,
      socialEmotional: 0,
      technical: 0
    }

    players.value.forEach(player => {
      Object.keys(categoryAverages).forEach(category => {
        const values = Object.values(player[category] || {})
        categoryAverages[category] += values.reduce((a, b) => a + b, 0)
        categoryCounts[category] += values.length
      })
    })

    Object.keys(categoryAverages).forEach(category => {
      categoryAverages[category] = categoryCounts[category]
        ? (categoryAverages[category] / categoryCounts[category]).toFixed(1)
        : 0
    })

    teamSkillsData.value = {
      ...teamSkillsData.value,
      datasets: [
        {
          ...teamSkillsData.value.datasets[0],
          data: [
            parseFloat(categoryAverages.psychological),
            parseFloat(categoryAverages.physical),
            parseFloat(categoryAverages.socialEmotional),
            parseFloat(categoryAverages.technical)
          ]
        }
      ]
    }
  } catch (error) {
    console.error('Error loading players:', error)
  }
}

const loadStats = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/stats')
    stats.value = response.data
  } catch (error) {
    console.error('Error loading stats:', error)
  }
}

const themeKey = ref('light')

onMounted(() => {
  // Set initial value
  themeKey.value = document.body.classList.contains('dark-theme') ? 'dark' : 'light'

  const observer = new MutationObserver(() => {
    themeKey.value = document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  })
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
  loadPlayers()
  loadStats()
})

const skillCategories = ['psychological', 'physical', 'socialEmotional', 'technical']
const categoryDisplay = {
  psychological: 'Psychological',
  physical: 'Physical',
  socialEmotional: 'Social/Emotional',
  technical: 'Technical'
}

const getAverage = skills => {
  const values = Object.values(skills)
  return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)
}

const showPlayerDetails = player => {
  selectedPlayer.value = player
  playerDialogVisible.value = true
}

const recentActivity = ref([
  { date: 'Today', player: 'John Doe', activity: 'Training Complete', details: '90 minutes' },
  { date: 'Yesterday', player: 'Team', activity: 'Match Won', details: '3-1 vs Eagles' }
])
</script>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
  overflow-x: hidden;
  /* Prevent horizontal scrolling */
}

.coach-dashboard {
  padding: 16px 0 32px 0;
  overflow-x: hidden;
  /* Prevent horizontal scrolling */
}
</style>