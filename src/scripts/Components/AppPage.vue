<template lang="pug">
.app-page
  .number(v-if="num != null") {{ num }}
  .page
    .nomble
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppPage extends Vue {
  /** ページ番号 */
  @Prop({ type: Number })
  num?: number;
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
    width: $page-width;
    height: $page-height;

    @media print {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @media screen {
      margin: 10px 0 0 -#{$guide-margin};
      border: $guide-margin solid #eee;
    }
  }

  & > .page > .nomble {
    position: absolute;
    top: 50%;
    right: 100%;
    font-size: 10px;
    transform: translate(-100%, -50%);
  }

  & > .page > .nomble::before {
    counter-increment: page-nomble;
    content: counter(page-nomble);
  }
}
</style>
