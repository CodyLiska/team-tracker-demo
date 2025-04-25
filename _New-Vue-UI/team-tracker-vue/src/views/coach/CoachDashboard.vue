<template>
  <div class="main-container">
    <div class="coach-dashboard">
      <!-- 1. Stat Summary Row -->
      <el-row :gutter="24" class="dashboard-stats-row">
        <el-col :xs="24" :sm="12" :md="6" v-for="stat in stats" :key="stat.label">
          <el-card class="stat-card">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-desc">{{ stat.desc }}</div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 2. Bar Chart Row -->
      <el-row style="margin-top: 24px;">
        <el-col :span="24">
          <el-card>
            <el-card-header>Team Skills Average</el-card-header>
            <el-card-body>
              <BarChart :data="teamSkillsData" />
            </el-card-body>
          </el-card>
        </el-col>
      </el-row>

      <!-- 3. Player Cards Row -->
      <div class="player-section-title">Player Stats</div>
      <el-row :gutter="24" class="player-cards-row">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="player in players" :key="player.name">
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
            <el-button class="details-btn" size="small" @click="showPlayerDetails(player)">View Details</el-button>
          </el-card>
        </el-col>
      </el-row>

      <!-- 4. Player Details Modal -->
      <el-dialog v-model="playerDialogVisible" :title="selectedPlayer ? selectedPlayer.name + ' - #' + selectedPlayer.number : ''" width="400px">
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

      <!-- 5. Recent Activity Row -->
      <div class="recent-activity-title">Recent Activity</div>
      <el-row>
        <el-col :span="24">
          <el-card>
            <el-card-header>Recent Activity</el-card-header>
            <el-card-body>
              <el-table :data="recentActivity" style="width: 100%;">
                <el-table-column prop="date" label="Date" width="120" />
                <el-table-column prop="player" label="Player" width="140" />
                <el-table-column prop="activity" label="Activity" />
                <el-table-column prop="details" label="Details" />
              </el-table>
            </el-card-body>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BarChart from '../../components/charts/BarChart.vue'

// --- Stats for the top row ---
const stats = [
  { label: 'Total Players', value: 7, desc: 'Active roster' },
  { label: 'Games Played', value: 12, desc: 'This season' },
  { label: 'Win Rate', value: '75%', desc: '+5% from last month' },
  { label: 'Team Rating', value: 8.5, desc: 'Average performance' }
]

// --- Bar chart data ---
const teamSkillsData = ref({
  labels: ['Psychological', 'Physical', 'Social/Emotional', 'Technical'],
  datasets: [
    {
      label: 'Team Average',
      backgroundColor: '#3498fd',
      data: [75, 80, 70, 85]
    }
  ]
})


// --- Players data (example, use your real data) ---
const players = [
  {
    name: "John Doe",
    number: 42,
    position: "Forward",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Jane Smith",
    number: 23,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Scooby Doo",
    number: 99,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Harry Kane",
    number: 9,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Leo Messi",
    number: 10,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Christiano Ronaldo",
    number: 7,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Neymar",
    number: 12,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  // Add more players as needed
];

// --- Player modal logic ---
const playerDialogVisible = ref(false)
const selectedPlayer = ref(null)
const skillCategories = ['psychological', 'physical', 'socialEmotional', 'technical']
const categoryDisplay = {
  psychological: 'Psychological',
  physical: 'Physical',
  socialEmotional: 'Social/Emotional',
  technical: 'Technical'
}

function getAverage(skills) {
  const values = Object.values(skills)
  return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)
}

function showPlayerDetails(player) {
  selectedPlayer.value = player
  playerDialogVisible.value = true
}

// --- Recent Activity example data ---
const recentActivity = [
  { date: 'Today', player: 'John Doe', activity: 'Training Complete', details: '90 minutes' },
  { date: 'Yesterday', player: 'Team', activity: 'Match Won', details: '3-1 vs Eagles' }
]
</script>

<style scoped>
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  width: 100%;
}
.coach-dashboard {
  padding: 16px 0 32px 0;
}

.dashboard-stats-row {
  margin-bottom: 24px;
}

.stat-card,
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

.stat-value {
  font-size: 2rem;
  font-weight: bold;
}
.stat-label {
  font-size: 1.1rem;
  margin-top: 8px;
}
.stat-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
}
.player-section-title, .recent-activity-title {
  margin: 32px 0 12px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: 0.02em;
}
.player-cards-row {
  margin-bottom: 24px;
  row-gap: 24px;
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
:deep(.el-card),
:deep(.el-card-header),
:deep(.el-card-body) {
  background: var(--card-bg) !important;
  color: var(--text-main) !important;
  border-color: var(--border) !important;
}

/* Table and modal styling for dark/light mode */
:deep(.el-table),
:deep(.el-table__inner-wrapper),
:deep(.el-table__header),
:deep(.el-table__body),
:deep(.el-table__cell),
:deep(.el-table th),
:deep(.el-table td),
:deep(.el-table__body-wrapper),
:deep(.el-table__row),
:deep(.el-table__row > td),
:deep(.el-table__row > th),
:deep(.el-table__header-wrapper),
:deep(.el-table__header tr),
:deep(.el-table__header th) {
  background: var(--card-bg) !important;
  color: var(--text-main) !important;
  border-color: var(--border) !important;
}
:deep(.el-table__header-wrapper),
:deep(.el-table__header),
:deep(.el-table__header tr),
:deep(.el-table__header th) {
  background: var(--header-bg) !important;
  color: var(--text-main) !important;
  border-color: var(--border) !important;
}
:deep(.el-table--striped .el-table__body tr.el-table__row--striped td) {
  background: var(--bg-secondary) !important;
}
:deep(.el-table__body tr:hover > td) {
  background: var(--bg-secondary) !important;
}

/* Invert modal theme based on the body class */
body:not(.dark-theme) :deep(.el-dialog) {
  background: #181a23 !important;   /* dark modal in light mode */
  color: #fff !important;
}
body.dark-theme :deep(.el-dialog) {
  background: #fff !important;      /* light modal in dark mode */
  color: #181a23 !important;
}
body:not(.dark-theme) :deep(.el-overlay) {
  background: rgba(0,0,0,0.6) !important;
}
body.dark-theme :deep(.el-overlay) {
  background: rgba(255,255,255,0.4) !important;
}
</style>