<script setup>
import QrContent  from '@/components/QrContent.vue'
import { useLayoutStore } from '@/stores/layout'; 
// Utilisation du store Pinia 
const layout = useLayoutStore ()
</script>

<template>
  <div :class="['container', layout.layoutDirection]">
<div  class="box">
<p>Création de points d'arrêt personnalisés </p> <box-icon name='chevron-right' class="chevron-droit"></box-icon>
</div>
<div class="box">
<p>Création de couleurs personnalisées</p> <box-icon name='chevron-right' class="chevron-right"></box-icon>
</div>
<div class="box">
  <p>personnaliser les couleurs du mode sombre </p><box-icon name='chevron-right' class="icone"></box-icon>
</div>
  </div>
  <QrContent/>
</template>

<style scoped>
.container.column {
  flex-direction:column;
}
.container p {
 font-size: 1.1rem;
 width: 340px;
 height: 40px;
 border: 1px solid rgb(10, 13, 48);
 justify-content: center;
 color: rgb(10, 13, 48);
 cursor: pointer;
 padding: 8px 9px 8px 14px;
 margin:8px ;
}

box-icon {
  position: absolute;
  right: 6%;
  margin-top: -14%;
}

@media (min-width: 768px) {
  .container p{
   position: relative;
   top: 85px;
   left: -1px;
   width:350px;
   padding-top: 17px;
  }
 
box-icon {
  position: absolute;
  
}
.chevron-droit {
  position: absolute;
  left: 30%;
  bottom: -50px;
}
.chevron-right {
  position: absolute;
  right: 35%;
  bottom: -50px;
}
.icone {
  position: absolute;
  bottom: -50px;
  right: 1%;
}
  .container {
    text-align: center;
    display: flex;
    position: absolute;
    bottom: -30%;
  }
}
</style>