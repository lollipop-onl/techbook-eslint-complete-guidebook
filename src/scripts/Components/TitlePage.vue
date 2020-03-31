<template lang="pug">
AppPage
  .title-page
    .subtitle この１冊ですべてわかる！
    .title ESLint Complete GuideBook
    .version ESLint v7.0.0
    .author ロリポップランチャー 著
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppPage from "./AppPage.vue";

@Component({
  components: {
    AppPage
  }
})
export default class TitlePage extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.title-page {
  & {
    @include container;
    position: relative;
    height: $page-height - $guide-inside-margin-vertical * 2;
    overflow: hidden;
    font-family: 筑紫B丸ゴシック, sans-serif;
    text-align: center;
  }

  & > .subtitle {
    margin-top: 48mm;
    font-size: 12pt;
  }

  & > .title {
    margin-top: 12mm;
    font-size: 36pt;
    font-family: $font-family-title;
    font-style: italic;
    font-weight: 200;
  }

  & > .version {
    margin-top: 20mm;
    font-size: 11pt;
    font-family: URW DIN, sans-serif;
    font-weight: 400;
  }

  & > .author {
    position: absolute;
    bottom: 12mm;
    left: 0;
    width: 100%;
    font-size: 12pt;
    text-align: center;
  }
}
</style>
