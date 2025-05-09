<script setup>
import { ref, onMounted } from 'vue'
import { playerService } from '@/services/playerService'
import BarChart from '../../components/charts/BarChart.vue'

// State
const players = ref([])
const playerDialogVisible = ref(false)
const selectedPlayer = ref(null)
const stats = ref({
  totalPlayers: 0,
  gamesPlayed: 0,
  winRate: 0,
  teamRating: 0
})
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

// Load data
const loadPlayers = async () => {
  try {
    const data = await playerService.getAllPlayers()
    players.value = data

    // Update stats
    stats.value = {
      totalPlayers: data.length,
      gamesPlayed: 12, // This should come from your backend
      winRate: '75%',  // This should come from your backend
      teamRating: 8.5  // This should come from your backend
    }

    // Calculate team averages
    const averages = {
      psychological: 0,
      physical: 0,
      socialEmotional: 0,
      technical: 0
    }

    data.forEach(player => {
      Object.keys(averages).forEach(category => {
        const values = Object.values(player[category])
        averages[category] += values.reduce((a, b) => a + b, 0) / values.length
      })
    })

    Object.keys(averages).forEach(category => {
      averages[category] = (averages[category] / data.length).toFixed(1)
    })

    teamSkillsData.value.datasets[0].data = [
      averages.psychological,
      averages.physical,
      averages.socialEmotional,
      averages.technical
    ]
  } catch (error) {
    console.error('Error loading players:', error)
  }
}

// Lifecycle
onMounted(() => {
  loadPlayers()
})

// Player details modal
const skillCategories = ['psychological', 'physical', 'socialEmotional', 'technical']
const categoryDisplay = {
  psychological: 'Psychological',
  physical: 'Physical',
  socialEmotional: 'Social/Emotional',
  technical: 'Technical'
}

const getAverage = (skills) => {
  const values = Object.values(skills)
  return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)
}

const showPlayerDetails = async (player) => {
  try {
    selectedPlayer.value = player
    playerDialogVisible.value = true
  } catch (error) {
    console.error('Error loading player details:', error)
  }
}

// Recent activity (this should come from your backend)
const recentActivity = ref([
  { date: 'Today', player: 'John Doe', activity: 'Training Complete', details: '90 minutes' },
  { date: 'Yesterday', player: 'Team', activity: 'Match Won', details: '3-1 vs Eagles' }
])
</script>