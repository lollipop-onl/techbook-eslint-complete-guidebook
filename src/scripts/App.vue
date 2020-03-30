<template lang="pug">
  .root-app
    AppGuide.guide
    AppContainer
      AppPage(v-for="x in 10")
        .custom-heading This is heading.
        template(v-for="n in 10")
          h1 hello you.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppGuide from "./Components/AppGuide.vue";
import AppContainer from "./Components/AppContainer.vue";
import AppPage from "./Components/AppPage.vue";

@Component({
  components: {
    AppGuide,
    AppContainer,
    AppPage
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
</style>
