<script setup>
import ExtrairePage  from '@/components/ExtrairePage.vue'
import { useLayoutStore } from '@/stores/layout'; 
// Utilisation du store Pinia 
const layout = useLayoutStore ()
</script>
<template>
  <div :class="['container', layout.layoutDirection]">
    <div class="column">
<div class="box">
<p>Ajouter une étiquette flottante à une <br> entrée</p><box-icon name='chevron-right' class="icon"></box-icon>
</div>
<div class="box">
<p>Implementer un menu contextuel</p><box-icon name='chevron-right' class="box-icon"></box-icon>
</div>
    </div>
  </div>
  <ExtrairePage/>
</template>

<style scoped>

.container.column {
  display: flex;
  flex-direction:column;
}

box-icon {
  position: absolute;
  right: 6%;
  margin-top: -13%;
}
.container p {
 font-size: 1.1rem;
 width: 340px;
 height: 40px;
 border: 1px solid rgb(10, 13, 48);
 justify-content: center;
 color: rgb(10, 13, 48);
 cursor: pointer;
 padding: 8px 9px 8px 10px;
 margin:8px ;
} 

@media (min-width: 768px) {
  .container {
    position: absolute;
    top:170%;
  }
  .icon {
    position: absolute;
    left: 45%;
    margin-top: -7.5%;
  }
  .box-icon {
    position: absolute;
    margin-top: -7.5%;
  }
  .container p  {
    text-align: center;
    align-items: center;
    padding: 3px 4px 4px 1px;
    justify-items: center;
    margin: 10px ;
    padding-top: 17px;
  }

  .column {
    display: flex;
    flex-direction:row;
  }
  br {
    display: none;
  }
}
</style>