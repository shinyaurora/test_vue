<script setup>
import Header from './components/Header/index.vue'
import Content from './components/Content/index.vue'
import Sidebar from './components/Sidebar/index.vue'
</script>

<template>
  <div class="w-full h-screen bg-[#121212] overflow-auto">
    <div class="container mx-auto">
      <Header />
      <div class="w-full lg:flex">
        <Content />
        <Sidebar />
      </div>
    </div>
  </div>
</template>
