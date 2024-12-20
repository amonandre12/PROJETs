<script setup>
import QrMain  from '@/components/QrMain.vue'
import { useLayoutStore } from '@/stores/layout'; 
// Utilisation du store Pinia 
const layout = useLayoutStore ()
</script>
<template>
  <section>
  <div :class="['container', layout.layoutDirection]">
<div class="box">
<img src="@/assets/imageqrg.png" alt=icon-QR >
</div>
<div class="box">
<h2>Composants</h2>
<p>Conseils et recommandations pour tous les <br>composanrts</p>
</div>
<div class="box">
<button>2 articles</button>
</div>
  </div>
  </section>
  <QrMain/>
</template>

<style scoped>
.container {
  gap:4px;
  margin-top: 14px;
  margin: 18px;
  justify-content: center;
}
section {
  position: relative;
  left: 2%;
}
.container.row {
  flex-direction:row;
  display: flex;
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
  position: relative;
  top: 17px;
  cursor: pointer;
  border: none;
}
@media (min-width: 768px) {
  section {
    position: absolute;
    bottom: -73%;
    left: -px;
  }
  
  button {
  cursor: pointer;
   position: absolute;
   right: 30%;
   margin-top: 4%;
  }
  
  br {
    display: none;
  }
}
</style>