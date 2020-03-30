<template lang="pug">
.app-guide-side
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppGuideSide extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.app-guide-side {
  & {
    position: relative;
    width: 0;
    height: 0;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
  }

  &::before {
    top: -$guide-margin;
    left: 50%;
    width: $guide-base-length * 1.5;
    height: 1px;
    background: #ccc;
    transform: translate(-50%, -1px);
  }

  &::after {
    bottom: $guide-margin;
    left: 50%;
    width: 1px;
    height: $guide-base-length - $guide-margin;
    background: #ccc;
    transform: translate(-50%, 0);
  }
}
</style>
