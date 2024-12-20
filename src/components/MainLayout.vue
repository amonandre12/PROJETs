<script setup>
import SectionLayout  from '@/components/SectionLayout.vue'
import { useLayoutStore } from '@/stores/layout'; 
// Utilisation du store Pinia 
const layout = useLayoutStore ()
</script>

<template>
  <div :class="['container', layout.layoutDirection]">
  <div class="box">
<p>
  Ajouter des polices personnalisées à un<br> projet Next.js <box-icon name='chevron-right' class="icon"></box-icon>
</p>
</div>
<div class="box">
<p>
  Ajouter des polices personnalisées à un<br> projet Vite <box-icon name='chevron-right' class="icon-box"></box-icon>
</p>
</div>
<div class="box">
<p>
  Modifier la palette de couleurs par<br>
  defaut <box-icon name='chevron-right' class="chevron-rt"></box-icon>
</p>
</div>
  </div>
  <SectionLayout/>
</template>

<style scoped>
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

.container.row {
  flex-direction:row;
}
box-icon {
  position: absolute;
  right: 6%;
  margin-top: -20px;
}
@media (min-width: 768px) {
 .chevron-rt {
  position: absolute;
  right: 1%;
  top: 16%;
  position: relative;
 } 
.container.row{
  flex-direction:row;
}
.container {
  position: absolute;
  bottom:-30%;
  display: flex;
}
.icon {
  position: absolute;
  left: 30%;
}
.icon-box {
position: absolute;
left: 96%;
position: relative;
bottom: 14px;
}

br {
  display: none;
}
.container p {
 font-size: 1.1rem;
 width: 360px;
 height: 45px;
 border: 1px solid rgb(10, 13, 48);
 justify-content: center;
 color: rgb(10, 13, 48);
 cursor: pointer;
 padding: 7px 1px 0 10px;
 margin:8px ;
 padding-top: 17px;
}
}

</style>