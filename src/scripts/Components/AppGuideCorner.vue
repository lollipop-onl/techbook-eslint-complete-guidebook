<template lang="pug">
.app-guide-corner
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AppGuideCorner extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.app-guide-corner {
  & {
    position: relative;
    width: 0;
    height: 0;
  }

  &::before,
  &::after{
    position: absolute;
    content: '';
    border-color: $_guide-border;
    border-style: solid;
    border-width: 0 1px 1px 0;
  }

  &::before {
    bottom: 0;
    right: $guide-margin;
    width: $guide-base-length - $guide-margin;
    height: $guide-base-length;
  }

  &::after {
    bottom: $guide-margin;
    right: 0;
    width: $guide-base-length;
    height: $guide-base-length - $guide-margin;
  }
}
</style>
