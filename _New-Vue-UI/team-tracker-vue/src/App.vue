<template>
  <el-container style="min-height: 100vh; flex-direction: column; height: 100vh;">
    <el-header height="60px">
      <Header />
    </el-header>
    <el-main style="flex: 1 0 auto; min-height: 0;">
      <router-view />
    </el-main>
    <el-footer height="auto">
      <Footer />
    </el-footer>
  </el-container>
</template>

<script setup>
import Header from './components/layouts/Header.vue'
import Footer from './components/layouts/Footer.vue'
</script>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}
body.dark-theme {
  background: #131622 !important;
  color: #bfc9d7 !important;
}

body.dark-theme .el-header,
body.dark-theme .el-footer,
body.dark-theme .footer,
body.dark-theme .header-content {
  background: #181a23 !important;
  color: #bfc9d7 !important;
  border-color: #23263a !important;
}
</style>