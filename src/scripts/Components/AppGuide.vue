<template lang="pug">
.app-guide
  AppGuideCorner.corner.-top.-left
  AppGuideCorner.corner.-top.-right
  AppGuideCorner.corner.-bottom.-left
  AppGuideCorner.corner.-bottom.-right
  AppGuideSide.side.-top
  AppGuideSide.side.-left
  AppGuideSide.side.-bottom
  AppGuideSide.side.-right
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppGuideCorner from "./AppGuideCorner.vue";
import AppGuideSide from "./AppGuideSide.vue";

@Component({
  components: {
    AppGuideCorner,
    AppGuideSide
  }
})
export default class AppGuide extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.app-guide {
  & {
    width: $page-width;
    height: $page-height;
    background: rgba(#f00, 10%);
    transform: translate(-50%, -50%);
  }

  & > .corner {
    position: absolute;
  }

  & > .corner.-top {
    top: 0;
  }

  & > .corner.-bottom {
    bottom: 0;
  }

  & > .corner.-left {
    left: 0;
  }

  & > .corner.-right {
    right: 0;
  }

  & > .corner.-top.-right {
    transform: rotate(90deg);
  }

  & > .corner.-bottom.-left {
    transform: rotate(-90deg);
  }

  & > .corner.-bottom.-right {
    transform: rotate(180deg);
  }

  & > .side {
    position: absolute;
  }

  & > .side.-top {
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }

  & > .side.-right {
    top: 50%;
    right: 0;
    transform: translate(0, -50%) rotate(90deg);
  }

  & > .side.-bottom {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0) rotate(180deg);
  }

  & > .side.-left {
    top: 50%;
    left: 0;
    transform: translate(0, -50%) rotate(-90deg);
  }
}
</style>
