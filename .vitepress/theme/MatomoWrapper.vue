<script setup>
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
window._paq.push(['trackPageView']); //To track pageview
</script>

<template>
  <Layout>
    <template #layout-top>
        <!-- Matomo Image Tracker-->
        <img referrerpolicy="no-referrer-when-downgrade" src="https://matomo.plus.yt/matomo.php?idsite=2&amp;rec=1" style="border:0" alt="" />
        <!-- End Matomo -->
    </template>
  </Layout>
</template>
