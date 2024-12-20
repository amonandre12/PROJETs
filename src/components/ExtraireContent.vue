<script setup>
import ContentFooter  from '@/components/ContentFooter.vue'
import { useLayoutStore } from '@/stores/layout'; 
// Utilisation du store Pinia 
const layout = useLayoutStore ()
</script>

<template>
  <div :class="['container', layout.layoutDirection]">
    <div class="column">
<div class="box">
<p>Comment gérer les mises à jour </p> <box-icon name='chevron-right' class="icon"></box-icon>
</div>
<div class="box">
<p>Spécification d'un repertoire <br> personnalisé</p> <box-icon name='chevron-right' class="box-icn"></box-icon>
</div>
    </div>
  </div>
  <ContentFooter/>
</template>

<style scoped>
.column {
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
  margin-top: -12%;
}
@media (min-width: 768px) {
  .icon {
    position: absolute;
    left: 43%;
    top: 121px;
  }
  .box-icn {
    position: absolute;
    bottom:33px;
    right: 2%;
  }
  .container .column{
    position: absolute;
    bottom: -130%;
    left: 2%;
    gap: 18px;
  }
  .container p {
    padding-top :17px;
  }
  .column {
    display: flex;
    flex-direction: row;
  }
  br {
    display: none;
  }
}
</style>