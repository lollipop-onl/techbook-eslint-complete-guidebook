<template lang="pug">
AppPage
  .attention-page
    .attention
      .title 免責事項
      .body
        | 本書に記載された内容は、情報の提供のみを目的としています。
        | したがって、本書を用いた開発、製作、運用は、必ずご自身の責任と判断によって行ってください。
        | これらの情報による開発、製作、運用の結果について、著者はいかなる責任も負いません。
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppPage from "./AppPage.vue";

@Component({
  components: {
    AppPage
  }
})
export default class AttentionPage extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.attention-page {
  & {
    @include container;
    @include container-full;
    position: relative;
  }

  & > .attention {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 4mm;
    font-size: 9pt;
    background: #eee;
    border-radius: 2mm;
  }

  & > .attention > .title {
    margin-bottom: 2mm;
    letter-spacing: 0.5em;
    line-height: 2;
    text-align: center;
    text-indent: -0.5em;
  }

  & > .attention > .body {
    opacity: 0.7;
    font-family: $font-family-body;
    line-height: 1.5;
    letter-spacing: 0.1em;
  }
}
</style>
