<template lang="pug">
.app-guide-border
  .border.-outline
  .border.-limitation
  .border.-container
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppGuideBorder extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.app-guide-border {
  & {
    position: relative;
    opacity: 0.5;
  }

  & > .border {
    @include position-center;
    border: 1px dashed #aaa;
  }

  & > .border.-outline {
    width: $page-width;
    height: $page-height;
    border-style: solid;
  }

  & > .border.-limitation {
    width: $page-width - 6mm;
    height: $page-height - 6mm;
  }

  & > .border.-container {
    width: $page-width - 24mm;
    height: $page-height - 30mm;
  }
}
</style>
