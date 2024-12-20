<script setup>
import { useLayoutStore } from '@/stores/layout'; 
// Utilisation du store Pinia 
const layout = useLayoutStore ()
</script>
<template>
  <div :class="['container', layout.layoutDirection]">
  <div class="content-footer">
<div class="documentation">
<p>Documentation</p>
<p>Composants</p>
<p>Thématisation</p>
<p>Style</p>
  <p>Demarrer</p>
</div>
<div class="projet">
  <p>
    Projets 
  </p>
  <p>
    Chakra UI Pro
  </p>
<p>FigPilot</p>
  <p>
 Zag.js
  </p>
  <p>Interface Utilisation Ark</p>
</div>
<div class="communaute">
  <p>Communauté </p>
   <p>Equipe </p>
  <p> Discorde</p>
  <p> Gazouiller</p>
  <p>Lien avec GitHub</p>
</div>
</div>
<div class="footer">
  <img src="@/assets/image.png" alt="logo">
  <a href="chakra">chakra</a>
  <p>Projet de Chakra Systems © 2024</p>
  <p>Deployé le Versels</p>
  <p>Maintenu par Sage et ses contributeurs</p>
</div>
  </div>
</template>

<style scoped>
.container.documentation.projet.communaute{
  padding: 34%;
  margin-left: 20px;
  position: relative;
  right: 30%;
  bottom: 16%;
}
.footer img{
  position: relative;
  bottom: -8px;
  cursor: pointer;
}
.container.footer {
  position: relative;
  top: 19%;
  margin-top: 20px;
}

.container.column{
display: flex;
flex-direction: column;
}

a { 
  font-size: 2rem;
  text-decoration: none;
  color: #333f;
  position: relative;
  bottom: 8%;
}
@media (min-width: 768px)  {
  .content-footer {
   display: flex;
   flex-direction: row;
   gap: 80%;
   position: absolute;
   left: 190%;
  }
  
  .container {
    position: absolute;
    bottom: -180%;
  }
}
</style>