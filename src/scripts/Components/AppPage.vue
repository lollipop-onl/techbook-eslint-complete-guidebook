<template lang="pug">
.app-page
  .number(v-if="num != null") {{ num }}
  .nomble
  .page
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppPage extends Vue {
  /** ページ番号 */
  @Prop({ type: Number, default: 1 })
  num: number;
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.app-page {
  & {
    position: relative;

    @media print {
      width: $template-width;
      height: calc(#{$template-height} - 1px);
      page-break-before: always;
    }
  }

  & > .number {
    position: absolute;

    @media screen {
      display: none;
    }
  }

  & > .page {
    @media print {
      position: absolute;
      top: 50%;
      left: 50%;
      width: $page-width;
      height: $page-height;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
