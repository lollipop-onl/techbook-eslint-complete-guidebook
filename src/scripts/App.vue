<template lang="pug">
  .root-app
    AppGuide.guide
    AppContainer
      TitlePage
      ColophonPage
      AppPage
        CodeBlockDiff
      AppPage(v-for="x in 10")
        .custom-heading This is heading.
        .container
          template(v-for="n in 10")
            h1 hello you.
      AppPage
        .container.-paragraph
          template(v-for="i in 38")
            p
              template(v-for="j in 38")
                | あ
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppGuide from "./Components/AppGuide.vue";
import AppContainer from "./Components/AppContainer.vue";
import AppPage from "./Components/AppPage.vue";
import CodeBlockDiff from "./Components/CodeBlockDiff.vue";
import TitlePage from "./Components/TitlePage.vue";
import ColophonPage from "./Components/ColophonPage.vue";

@Component({
  components: {
    AppGuide,
    AppContainer,
    AppPage,
    CodeBlockDiff,
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

.custom-heading {
  margin-top: -$guide-margin;
  padding: calc(5mm + #{$guide-margin}) 2mm 5mm;
  border-left: 10px solid #f00;
}

.container {
  @include container;

  &.-paragraph {
    font-family: クレー, serif;
    font-size: 9pt;
    line-height: 14pt;
    letter-spacing: 0.2pt;
  }
}
</style>
