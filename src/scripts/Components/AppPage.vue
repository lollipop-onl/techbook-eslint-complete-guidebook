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
    @media print {
      position: absolute;
      top: 50%;
      left: 50%;
      width: $page-width;
      height: $page-height;
      transform: translate(-50%, -50%);
    }

    @media screen {
      padding: $guide-margin 0;
      border-bottom: 2px solid $_guide-border;
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

    @media screen {
      display: none;
    }
  }
}
</style>
