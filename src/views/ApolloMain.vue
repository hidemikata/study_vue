<template><div>
  apollomain
  <p>
  {{hello}}
  {{hello2}}
  </p>
</div></template>

<script>
import gql from 'graphql-tag';
export default {
    data: () => {
    return {
      hello: "---hello---",
      hello2: "---hello2---",
      isHello: true
    }
  },
  apollo: {
    hello: {
      query: gql`query {
        sayHello
        }`,
      update: (data) => {
        return data.sayHello
      }
    },
    hello2: function (){
      const query = this.isHello
        ? gql`query { sayHello2 }`
        : gql`query { sayWorld2 }`;
      return {
        query,
        update: data => {
          //ここで切り替えも可能。
          return this.isHello ? data.sayHello2 : data.sayWorld2;
        },
      };
    }
  },
  mounted() {
  }
}
</script>

