<template lang="pug">
.app-container(ref="wrapper")
  .container(ref="container")
    slot
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppContainer extends Vue {}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.app-container {
  & {
    width: 100%;
  }

  & > .container {
    width: 100%;
    height: 100%;

    @media screen {
      width: $page-width;
      height: 100%;
      margin: 0 auto;
    }
  }
}
</style>
