<!-- <template>
  <div>
    <div class="recent-activity-title">Recent Activity</div>
    <el-row>
      <el-col :span="24">
        <el-card>
          <el-card-body>
            <el-table :data="recentActivity" style="width: 100%;">
              <el-table-column prop="date" label="Date" width="120" />
              <el-table-column prop="player" label="Player" width="140" />
              <el-table-column prop="activity" label="Activity" />
              <el-table-column prop="details" label="Details" />
              <el-table-column prop="delete" label="Delete" />
            </el-table>
          </el-card-body>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template> -->

<template>
  <div>
    <h3>Recent Activity</h3>
    <table class="activity-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Player</th>
          <th>Activity</th>
          <th>Details</th>
          <th style="width: 40px;"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="activity in recentActivity" :key="activity._id">
          <td>{{ activity.date }}</td>
          <td>{{ activity.player }}</td>
          <td>{{ activity.activity }}</td>
          <td>{{ activity.details }}</td>
          <td class="delete-cell">
            <span class="delete-icon" @click="deleteActivity(activity._id)" title="Delete">🗑️</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { recentActivityService } from '../../services/recentActivityService';

const props = defineProps({
  recentActivity: {
    type: Array,
    required: true
  },
  onDelete: {
    type: Function,
    required: false
  }
});

const deleteActivity = async (id) => {
  await recentActivityService.deleteActivity(id);
  if (props.onDelete) props.onDelete();
};
</script>

<style scoped>
.activity-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 1rem;
  margin-bottom: 2rem;
  /* Add space below the table */
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  overflow: hidden;
}

.activity-table th,
.activity-table td {
  border-right: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  padding: 0.75rem 1rem;
  text-align: left;
}

.activity-table th:last-child,
.activity-table td:last-child {
  border-right: none;
}

.activity-table tr:last-child td {
  border-bottom: none;
}

.activity-table th {
  background: #f5f5f5;
  font-weight: bold;
}

.activity-table thead tr:first-child th:first-child {
  border-top-left-radius: 16px;
}

.activity-table thead tr:first-child th:last-child {
  border-top-right-radius: 16px;
}

.activity-table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 16px;
}

.activity-table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 16px;
}

.delete-cell {
  text-align: right;
}

.delete-icon {
  color: red;
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.2s;
  margin-left: 8px;
}

.delete-icon:hover {
  color: darkred;
}
</style>