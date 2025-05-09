<template>
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
            </el-table>
          </el-card-body>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
defineProps({
  recentActivity: Array
});
</script>

<style scoped>
.recent-activity {
  padding: 0 16px; /* Add padding to prevent overflow caused by gutter */
}

.recent-activity-title {
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
}

body.dark-theme :deep(.el-card) {
  box-shadow: none !important;
}

:deep(.el-table) {
  table-layout: fixed; /* Prevent table from exceeding container width */
  word-wrap: break-word; /* Ensure long text wraps */
}

:deep(.el-table),
:deep(.el-table__body),
:deep(.el-table__body-wrapper),
:deep(.el-table th),
:deep(.el-table tr),
:deep(.el-table td) {
  background: var(--card-bg) !important;
  color: var(--text-main) !important;
  border-color: var(--border) !important;
}

/* MODAL SECTION */
/* Invert modal theme based on the body class (if you use dialogs here in the future) */
body:not(.dark-theme) :deep(.el-dialog) {
  background: #181a23 !important;
  color: #fff !important;
}

body.dark-theme :deep(.el-dialog) {
  background: #fff !important;
  color: #181a23 !important;
}

body:not(.dark-theme) :deep(.el-overlay) {
  background: rgba(0, 0, 0, 0.6) !important;
}

body.dark-theme :deep(.el-overlay) {
  background: rgba(255, 255, 255, 0.4) !important;
}
</style>