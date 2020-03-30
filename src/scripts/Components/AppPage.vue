<template lang="pug">
.app-page
  .number(v-if="num != null") {{ num }}
  .page
    AppGuideBorder.border
    .nomble
    slot
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AppGuideBorder from "./AppGuideBorder.vue";

@Component({
  components: {
    AppGuideBorder
  }
})
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
    position: relative;
    width: $page-width;
    height: $page-height;

    @media print {
      @include position-center;
    }

    @media screen {
      margin: 10px 0 0 -#{$guide-margin};
      border: $guide-margin solid #eee;
    }
  }

  & > .page > .border {
    @include position-center;
    pointer-events: none;
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
