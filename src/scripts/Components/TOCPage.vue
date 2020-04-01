<template lang="pug">
div
  AppPage
    .toc-page
      .title Contents
      .preface
        .page はじめに
        .page 本書の使い方
      .spacer.-top
      TOCHeading.heading(title="ESLint Rules")
      .spacer.-bottom
      .columns
        TOCRuleList.column(:start="1" :end="17")
        TOCRuleList.column(:start="18" :end="34")
  AppPage
    .toc-page
      .columns
        TOCRuleList.column(:start="35" :end="52")
        TOCRuleList.column(:start="53" :end="74")
  AppPage
    .toc-page
      .columns
        TOCRuleList.column(:start="75" :end="102")
        TOCRuleList.column(:start="103" :end="130")
  AppPage
    .toc-page
      .columns
        TOCRuleList.column(:start="131" :end="158")
        TOCRuleList.column(:start="159" :end="186")
  AppPage
    .toc-page
      .columns
        TOCRuleList.column(:start="187" :end="212")
        TOCRuleList.column(:start="213" :end="234")
  AppPage
    .toc-page
      .columns
        TOCRuleList.column(:start="235" :end="253")
        TOCRuleList.column(:start="254" :end="264")
      .spacer.-top
      TOCHeading.heading(title="Configurations")
      .spacer.-bottom
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppPage from "./AppPage.vue";
import TOCHeading from "./TOCHeading.vue";
import TOCRuleList from "./TOCRuleList.vue";
import config from '../../config.json';

@Component({
  components: {
    AppPage,
    TOCHeading,
    TOCRuleList,
  }
})
export default class TOCPage extends Vue {
  /** config */
  get config() {
    return config;
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.toc-page {
  & {
    @include container;
    @include container-full;
  }

  & > .title {
    font-family: $font-family-title-sub;
    font-size: 14pt;
    color: #666;
  }

  & > .preface {
    margin-top: 4mm;
  }

  & > .preface > .page {
    font-family: $font-family-body;
    font-size: 10pt;
    line-height: 1.8;
  }

  & > .columns {
    display: flex;
  }

  & > .columns > .column {
    flex: 1 0;
  }

  & > .spacer.-top {
    height: 6mm;
  }

  & > .spacer.-bottom {
    height: 3mm;
  }
}
</style>
