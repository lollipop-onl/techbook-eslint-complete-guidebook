<template lang="pug">
.toc-rule-list
  template(v-for="(rule, i) in rules")
    .initial(v-if="getInitial(i)") {{ getInitial(i) }}
    .item
      .number {{ start + i }}
      .title {{ rule.id }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ESLintRule, rules } from "../rules";

@Component
export default class TOCRuleList extends Vue {
  /** 起点のページ番号 */
  @Prop({ type: Number, default: 1 })
  start!: number;

  /** 終端のページ番号 */
  @Prop({ type: Number, default: Infinity })
  end!: number;

  /** フィルターされたルール情報 */
  get rules(): ESLintRule[] {
    return rules.slice(this.start - 1, this.end);
  }

  /** イニシャルを取得する */
  getInitial(i: number): string | void {
    const index = this.start + i - 1;
    const previousRuleIdInitial = rules[index - 1]?.id[0].toUpperCase();
    const currentRuleIdInitial = rules[index]?.id[0].toUpperCase();

    if (!previousRuleIdInitial && currentRuleIdInitial) {
      return currentRuleIdInitial;
    }

    if (!previousRuleIdInitial && !currentRuleIdInitial) {
      return;
    }

    if (previousRuleIdInitial !== currentRuleIdInitial) {
      return currentRuleIdInitial;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.toc-rule-list {
  & > .initial {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18pt;
    height: 3em;
  }

  & > .item {
    display: flex;
    align-items: center;
    line-height: 1.5;
  }

  & > .item > .number {
    width: 18pt;
    font-family: $font-family-title-sub;
    font-size: 9pt;
    color: #555;
    text-align: center;
  }

  & > .item > .title {
    margin-left: 2mm;
    font-family: $font-family-title;
    font-size: 12pt;
    font-style: italic;
    color: #252521;
  }
}
</style>
