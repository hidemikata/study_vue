<template>
  <div>
    <button v-if="add10" @click="addChildComponent10">ABA10</button>
    <button v-else="add10" @click="addChildComponent">ABA</button>
    <div v-for="(child, index) in children" :key="index" style="position: relative;">
      <AbaText :abatextid="child" @deleteAba="deleteComponent"></AbaText>
    </div>
  </div>
</template>
<script>
  import AbaText from './AbaText.vue';
  export default {
  components: {
    AbaText
  },
  data() {
    return {
      children: [],
      childrenManager: [],
      childrenNumber: [],
      childrenNumberCount: 0,
      childrenCounter: 0,
      extreameMode: 2,
      add10: false,
      abazindex: 0,
      numOfAba: 10,
    }
  },

  methods: {
    deleteComponent: function(num) {
      console.log(num);
      let shiftCounter = 0;
      for(let i = 0; i <= this.childrenNumber.length; i++) {
        if (this.childrenNumber[i] <= num) {
          this.children.shift();
          shiftCounter++;
        }
      }
      for(let i = 0; i < shiftCounter; i++) {
          this.childrenNumber.shift();
      }
    },
    addChildComponent: function() {
      this.childrenCounter++;
      if (this.childrenCounter > this.extreameMode){
        this.add10 = true;
      }
      this.children.push(this.abazindex++);
      this.childrenNumber.push(this.childrenNumberCount++);
    },
    addChildComponent10: function() {
      for(let i = 0; i < this.numOfAba; i++) {
        this.children.push(this.abazindex++);
        this.childrenNumber.push(this.childrenNumberCount++);
      }
    }
  }
}

</script>
<style>
</style>
