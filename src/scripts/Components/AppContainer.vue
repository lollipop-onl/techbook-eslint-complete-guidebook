<template lang="pug">
.app-container(ref="wrapper")
  .container(ref="container")
    slot
</template>

<script lang="ts">
import { bind, debounce } from 'helpful-decorators';
import { Component, Ref, Vue } from 'vue-property-decorator';

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
    width: $page-width;
    margin: 0 auto;
  }
}
</style>
