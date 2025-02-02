// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import MatomoWrapper from './MatomoWrapper.vue';
import "@catppuccin/vitepress/theme/mocha/yellow.css";
// import './style.css'

export default {
  extends: DefaultTheme,
  Layout: MatomoWrapper,
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    app.component('MatomoWrapper', MatomoWrapper)
  },
} satisfies Theme
