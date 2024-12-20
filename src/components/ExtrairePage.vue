<script setup>
import ExtraireContent  from '@/components/ExtraireContent.vue'
import { useLayoutStore } from '@/stores/layout'; 
// Utilisation du store Pinia 
const layout = useLayoutStore ()
</script>

<template>
  <section>
  <div :class="['container', layout.layoutDirection]">
<div class="box">
  <img src="@/assets/imagec.png" alt="chevron">
</div>
<div class="box">
<h2>Extraire</h2>
<p>Questions sur les extraires de <br> composants</p>
</div>
<div class="box">
<button>2 articles</button>
</div>
  </div>
  </section>
  <ExtraireContent/>
</template>

<style scoped>
.container.row {
  display: flex;
  flex-direction:row;
}

section {
  position: relative;
  left: 3%;
}
.container {
  display:flex;
  gap:4px;
  margin: 18px;
  justify-content: center;
}

h2 {
  margin-bottom: 17px;
  font-size: 1.7rem;
  position: relative;
  bottom:12px;
}
p {
  position: relative;
  bottom:12px;
}

button {
  width: 70px;
  height: 25px;
  cursor: pointer;
  border: none;
  right: 16px;
  position: relative;
  top: 17px;
}
@media (min-width: 768px) {
  section {
    position: absolute;
    bottom: -117%;
    left:2.4%;
  }
  
  br {
    display: none;
  }
  
  button {
  cursor: pointer;
   position: absolute;
   right: 15%;
   margin-top: 4%;
  }
}


</style>