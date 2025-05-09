<template>
  <PageWrapper>
    <div class="main-container">
      <div class="coach-dashboard">

        <StatsRow :statsArray="statsArray" />
        <TeamSkillsChart :data="teamSkillsData" />
        <div v-if="teamSkillsData.labels[0] === 'No Data'">
          No player data available. Add players to see the chart.
        </div>

        <!-- Add Player Button -->
        <div class="add-player-button">
          <el-button type="primary" @click="navigateToCreatePlayer">Add New Player</el-button>
        </div>

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
// import axios from 'axios'
import { useRouter } from 'vue-router';
import { playerService } from '../../services/playerService';
import PageWrapper from '../../components/ui/PageWrapper.vue';
import StatsRow from '../../components/dashboard/StatsRow.vue';
import TeamSkillsChart from '../../components/dashboard/TeamSkillsChart.vue';
import PlayerCards from '../../components/dashboard/PlayerCards.vue';
import RecentActivity from '../../components/dashboard/RecentActivity.vue';

// --- State and Logic ---
const router = useRouter();
const players = ref([])
const playerDialogVisible = ref(false)
const selectedPlayer = ref(null)
const recentActivity = ref([]);

// --- STATS ROW ---
const statsArray = computed(() => [
  { label: 'Total Players', value: players.value.length, desc: 'Players on roster' },
  { label: 'Games Played', value: 0, desc: 'Total games played' },
  { label: 'Win Rate', value: '0%', desc: 'Win percentage' },
  { label: 'Team Rating', value: 0, desc: 'Avg. technical rating' },
]);


// --- TEAM SKILLS CHART ---
const teamSkillsData = ref({
  labels: ['No Data Available'], // Informative label
  datasets: [
    {
      label: 'No Data',
      backgroundColor: '#e0e0e0', // Light gray for an empty graph
      data: [0], // Single data point
    },
  ],
});

// Navigate to CreatePlayer.vue
const navigateToCreatePlayer = () => {
  console.log('Navigating to /create-player');
  router.push('/create-player');
};

const fetchTeamSkillsData = async () => {
  try {
    const players = await playerService.getAllPlayers(); // Fetch all players
    if (players.length === 0) {
      return; // No players, keep the default empty chart
    }

    // Initialize totals and counts for each category
    const totals = {
      psychological: 0,
      physical: 0,
      socialEmotional: 0,
      technical: 0,
    };
    const counts = {
      psychological: 0,
      physical: 0,
      socialEmotional: 0,
      technical: 0,
    };

    // Calculate totals and counts
    players.forEach((player) => {
      // Calculate averages for psychological
      Object.values(player.psychological).forEach((value) => {
        totals.psychological += value;
        counts.psychological++;
      });

      // Calculate averages for physical
      Object.values(player.physical).forEach((value) => {
        totals.physical += value;
        counts.physical++;
      });

      // Calculate averages for socialEmotional
      Object.values(player.socialEmotional).forEach((value) => {
        totals.socialEmotional += value;
        counts.socialEmotional++;
      });

      // Calculate averages for technical
      Object.values(player.technical).forEach((value) => {
        totals.technical += value;
        counts.technical++;
      });
    });

    // Calculate averages
    const averages = {
      psychological: counts.psychological ? (totals.psychological / counts.psychological).toFixed(1) : 0,
      physical: counts.physical ? (totals.physical / counts.physical).toFixed(1) : 0,
      socialEmotional: counts.socialEmotional
        ? (totals.socialEmotional / counts.socialEmotional).toFixed(1)
        : 0,
      technical: counts.technical ? (totals.technical / counts.technical).toFixed(1) : 0,
    };

    // Update chart data
    teamSkillsData.value = {
      labels: ['Psychological', 'Physical', 'Social/Emotional', 'Technical'],
      datasets: [
        {
          label: 'Team Average',
          backgroundColor: '#3498fd',
          data: [
            parseFloat(averages.psychological),
            parseFloat(averages.physical),
            parseFloat(averages.socialEmotional),
            parseFloat(averages.technical),
          ],
        },
      ],
    };
  } catch (error) {
    console.error('Error fetching team skills data:', error);
  }
};

const getAverage = (skills) => {
  const values = Object.values(skills);
  return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);
};

// --- PLAYERS CARDS ---
const fetchPlayers = async () => {
  try {
    players.value = await playerService.getAllPlayers();
  } catch (error) {
    console.error('Error fetching players:', error);
  }
};

const showPlayerDetails = (player) => {
  selectedPlayer.value = player;
  playerDialogVisible.value = true;
};



// --- RECENT ACTIVITY ---


// Call this function when the component is mounted
onMounted(() => {
  fetchPlayers(); // Fetch players for PlayerCards
  fetchTeamSkillsData(); // Fetch data for the chart
});
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