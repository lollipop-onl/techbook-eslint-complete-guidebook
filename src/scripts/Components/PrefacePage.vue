<template lang="pug">
AppPage
  .preface-page
    .heading はじめに
    .paragraph 本書を手にとっていただき、ありがとうございます。
    .paragraph
      | この本は、フロントエンドエンジニアがGitHub Actionsを使ってみたら開発効率が爆上がりしたからみんなも使おうぜ、というモチベによって書かれたフロントエンジニアのためのGitHub Actions入門書です。
      | 普段CIやCDといったサービスを使う機会が少ないフロントエンドエンジニアのために、実践的なワークフローを作りながらGitHub Actionsの基本的な機能とワークフロー作成の流れをご紹介します。
    .paragraph
      | この本は、フロントエンドエンジニアがGitHub Actionsを使ってみたら開発効率が爆上がりしたからみんなも使おうぜ、というモチベによって書かれたフロントエンジニアのためのGitHub Actions入門書です。
      | 普段CIやCDといったサービスを使う機会が少ないフロントエンドエンジニアのために、実践的なワークフローを作りながらGitHub Actionsの基本的な機能とワークフロー作成の流れをご紹介します。
    .paragraph
      | この本は、フロントエンドエンジニアがGitHub Actionsを使ってみたら開発効率が爆上がりしたからみんなも使おうぜ、というモチベによって書かれたフロントエンジニアのためのGitHub Actions入門書です。
      | 普段CIやCDといったサービスを使う機会が少ないフロントエンドエンジニアのために、実践的なワークフローを作りながらGitHub Actionsの基本的な機能とワークフロー作成の流れをご紹介します。
    .author 著　者
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppPage from "./AppPage.vue";

@Component({
  components: {
    AppPage
  }
})
export default class PrefacePage extends Vue {
}
</script>

<style lang="scss" scoped>
@import '../../styles/resources';

.preface-page {
  & {
    @include container;
    @include container-full;
  }

  & > .heading {
    padding: 8mm 0 12mm;
    font-family: $font-family-sans-serif;
    font-size: 14pt;
    letter-spacing: 0.5em;
    text-indent: -0.5em;
    text-align: center;
  }

  & > .paragraph {
    font-family: $font-family-serif;
    font-size: 10pt;
    line-height: 2;
    letter-spacing: 0.1em;
    text-indent: 1em;
  }

  & > .paragraph + .paragraph {
    margin-top: 0.5em;
  }

  & > .author {
    margin-top: 5mm;
    font-family: $font-family-serif;
    font-size: 10pt;
    text-align: right;
  }
}
</style>
