<template lang="pug">
  .root-app
    AppGuide.guide
    AppContainer
      template(v-for="n in 100")
        h1 hello you.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppGuide from "./Components/AppGuide.vue";
import AppContainer from "./Components/AppContainer.vue";

@Component({
  components: {
    AppGuide,
    AppContainer
  }
})
export default class  extends Vue {
}
</script>

<style lang="scss" scoped>
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
