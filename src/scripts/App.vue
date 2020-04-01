<template lang="pug">
  .root-app
    AppGuide.guide
    AppContainer
      TitlePage
      AttentionPage
      PrefacePage
      TOCPage
      BlankPage
      ESLintDoorPage
      ColophonPage
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppGuide from "./Components/AppGuide.vue";
import AppContainer from "./Components/AppContainer.vue";
import AppPage from "./Components/AppPage.vue";
import BlankPage from "./Components/BlankPage.vue";
import TitlePage from "./Components/TitlePage.vue";
import AttentionPage from "./Components/AttentionPage.vue";
import PrefacePage from "./Components/PrefacePage.vue";
import TOCPage from "./Components/TOCPage.vue";
import ColophonPage from "./Components/ColophonPage.vue";
import ESLintDoorPage from "./Components/ESLintDoorPage.vue";

@Component({
  components: {
    AppGuide,
    AppContainer,
    AppPage,
    BlankPage,
    TitlePage,
    AttentionPage,
    PrefacePage,
    TOCPage,
    ESLintDoorPage,
    ColophonPage
  }
})
export default class  extends Vue {}
</script>

<style lang="scss" scoped>
@import '../styles/resources';

.root-app {
  & > .guide {
    position: fixed;
    top: 50%;
    left: 50%;

    @media screen {
      visibility: hidden;
    }
  }
}
</style>
