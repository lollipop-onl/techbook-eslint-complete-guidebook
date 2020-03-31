<template lang="pug">
  .root-app
    AppGuide.guide
    AppContainer
      TitlePage
      ColophonPage
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppGuide from "./Components/AppGuide.vue";
import AppContainer from "./Components/AppContainer.vue";
import AppPage from "./Components/AppPage.vue";
import TitlePage from "./Components/TitlePage.vue";
import ColophonPage from "./Components/ColophonPage.vue";

@Component({
  components: {
    AppGuide,
    AppContainer,
    AppPage,
    TitlePage,
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
