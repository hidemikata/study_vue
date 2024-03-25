<template>
  <div :style="[zindex, basepadding]">
    <span :id="getAbaTextId1" style="display:inline-block">A</span>
    <span :id="getAbaTextId2" style="display:inline-block">B</span>
    <span :id="getAbaTextId3" style="display:inline-block">A</span>
  </div>
</template>
<script>
  export default {
    props: {
      abatextid: Number
    },
    data() {
      return {
        abaInterval1: null,
        abatextid1: "abatext1",
        abatextid2: "abatext2",
        abatextid3: "abatext3",
        baseTop: "",
        baseLeft: "",
      }
    },
    computed: {
      getAbaTextId1(){
        return this.abatextid1 + this.abatextid;
      },
      getAbaTextId2(){
        return this.abatextid2 + this.abatextid;
      },
      getAbaTextId3(){
        return this.abatextid3 + this.abatextid;
      },
      zindex(){
        return {
          'z-index': this.abatextid,
          'position': 'absolute',
        }
      },
      basepadding() {
        const baseTop = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
        const baseLeft = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
        return {
          'padding-top': baseTop + "px",
          'padding-left': baseLeft + "px"
        }
      }
    },
    mounted: function () {
        let counter = 0;
        const abatext1 = document.getElementById("abatext1" + this.abatextid);
        let m1 = 0;
        const intervalId1 = setInterval(() => {
          counter++;
          if (counter == 100) {
              this.$emit('deleteAba', this.abatextid);
          }
          m1 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
          abatext1.style.paddingTop = (m1 * 1) + "px";
          m1 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
          abatext1.style.paddingLeft = (m1 * 1) + "px";
        }, 50);
        this.abaInterval1 = intervalId1;
  
        const abatext2 = document.getElementById("abatext2" + this.abatextid);
        let m2 = 0;
        const intervalId2 = setInterval(() => {
          m2 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
          abatext2.style.paddingTop = (m2 * 1) + "px";
          m2 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
          abatext2.style.paddingLeft = (m2 * 1) + "px";
        }, 50);
        this.abaInterval2 = intervalId2;
  
        const abatext3 = document.getElementById("abatext3" + this.abatextid);
        let m3 = 0;
        const intervalId3 = setInterval(() => {
          m3 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
          abatext3.style.paddingTop = (m3 * 1) + "px";
          m3 = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
          abatext3.style.paddingLeft = (m3 * 1) + "px";
        }, 50);
        this.abaInterval3 = intervalId3;
    },
}

</script>
<style>
</style>
