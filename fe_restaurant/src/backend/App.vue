<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderView from './components/HeaderView.vue';
import SidebarView from './components/SidebarView.vue';
</script>

<template>
    <div class="wrapper">
      <SidebarView />
      <div class="main-panel">
        <HeaderView />

        <div class="container">
          <div class="page-inner">
            <RouterView />
          </div>
        </div>
      </div>
    </div>
</template>
