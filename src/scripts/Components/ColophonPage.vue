<template lang="pug">
AppPage
  .colophon-page
    .colophon
      .book-title
        .subtitle この１冊ですべてわかる！
        .title
          | ESLint Complete GuideBook
          small.small ESLint v7.0.0
      .issuance-history
        .date 2020年 11月  1日
        .note 初版第１刷発行
        .date 2021年  1月  1日
        .note 初版第２刷発行
      .book-information
        .label サークル
        .body ロリポップランチャー
        .label 著　者
        .body simochee
        .label イラスト
        .body ナダムラ
        .label 連絡先
        .body contact@simochee.net
        .label 印刷・製本
        .body 有限会社 ねこのしっぽ
      .footer-copyright &copy; 2020 LollipopLauncher
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppPage from "./AppPage.vue";

@Component({
  components: {
    AppPage
  }
})
export default class ColophonPage extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.colophon-page {
  & {
    @include container;
    position: relative;
    height: $page-height - $guide-inside-margin-vertical * 2;
    font-family: $font-family-sans-serif;
  }

  & > .colophon {
    position: absolute;
    bottom: 0;
    right: -$guide-inside-margin-horizontal - $guide-margin;
  }
}

.book-title {
  & {
    padding-right: $guide-inside-margin-horizontal + $guide-margin;
  }

  &::after {
    display: block;
    width: calc(100% + #{$guide-inside-margin-horizontal + $guide-margin});
    height: 3px;
    margin-top: 2mm;
    content: '';
    border-top: 1px solid #000;
    border-bottom: 3px solid #000;
  }

  & > .subtitle {
    font-size: 9pt;
  }

  & > .title {
    margin-top: 4mm;
    font-size: 16pt;
    font-family: $font-family-title;
    font-style: italic;
    font-weight: 400;
  }

  & > .title > .small {
    margin-left: 2mm;
    font-size: 10pt;
    font-family: $font-family-title-sub;
    font-style: normal;
    font-weight: 500;
  }
}

.issuance-history {
  & {
    margin-top: 6mm;
    font-size: 9pt;
    font-family: $font-family-serif;
    line-height: 1.2;
  }

  & > .date {
    float: left;
    width: 9em;
  }

  & > .note {
    letter-spacing: 0.2em;
  }

  & > .note::after {
    display: block;
    clear: left;
    content: '';
  }
}

.book-information {
  & {
    margin-top: 3mm;
    font-family: $font-family-serif;
    font-size: 10pt;
    line-height: 1.8;
  }

  & > .label {
    width: 6em;
    float: left;
  }

  & > .body {
    letter-spacing: 0.1em;
  }
}

.footer-copyright {
  padding-top: 3mm;
  margin-top: 6mm;
  font-family: $font-family-title-sub;
  font-size: 9pt;
  border-top: 1px solid #000000;
}
</style>
