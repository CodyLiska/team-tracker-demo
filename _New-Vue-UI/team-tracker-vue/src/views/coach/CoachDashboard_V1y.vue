<!-- src/views/coach/CoachDashboard.vue -->
<template>
  <el-container>
    <el-main>
      <!-- Player Table -->
      <el-table :data="players" style="width: 100%; margin-bottom: 2rem;">
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="number" label="Number" />
        <el-table-column prop="position" label="Position" />
      </el-table>

      <!-- Example Chart (replace with your actual chart) -->
      <el-card>
        <el-card-header>Team Skills Averages</el-card-header>
        <el-card-body>
          <BarChart :data="teamSkillsData" />
        </el-card-body>
      </el-card>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from 'vue'
import BarChart from '../../components/charts/BarChart.vue'

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

// Example: Prepare data for a team skills bar chart
const teamSkillsData = ref({
  labels: ['Agility', 'Balance', 'Coordination', 'Stamina', 'Strength', 'Speed'],
  datasets: [
    {
      label: 'Average',
      backgroundColor: '#409EFF',
      data: [85, 80, 75, 90, 85, 88]
    }
  ]
})

</script>

<style scoped>
.el-main {
  background: var(--bg-main);
  color: var(--text-main);
}
:deep(.el-table__header-wrapper),
:deep(.el-table__header),
:deep(.el-table),
:deep(.el-table__inner-wrapper),
:deep(.el-table__body),
:deep(.el-table__cell),
:deep(.el-table th),
:deep(.el-table td),
:deep(.el-table__body-wrapper),
:deep(.el-table__row),
:deep(.el-table__header tr),
:deep(.el-table__header th),
:deep(.el-table__row > td),
:deep(.el-table__row > th) {
  background: var(--card-bg) !important;
  color: var(--text-main) !important;
  border-color: var(--border) !important;
}

/* Fix for striped rows */
:deep(.el-table--striped .el-table__body tr.el-table__row--striped td) {
  background: var(--bg-secondary) !important;
}

/* Fix for hover */
:deep(.el-table__body tr:hover > td) {
  background: var(--bg-secondary) !important;
}

.el-card {
  background: var(--card-bg);
  color: var(--text-main);
  border: 1px solid var(--border);
}
.el-card-header {
  color: var(--text-main);
  background: var(--header-bg);
  border-bottom: 1px solid var(--border);
}
.el-card-body {
  background: var(--card-bg);
}

</style>
