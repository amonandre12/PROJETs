<script setup>
import MainLayout  from '@/components/MainLayout.vue'
import { useLayoutStore } from '@/stores/layout'; 
// Utilisation du store Pinia 
const layout = useLayoutStore ()
</script>

 <template>
  <section>
  <div :class="['container', layout.layoutDirection]">
   <div class="box">
    <img src="@/assets/imagecle.png" alt="icon-key" >
   </div>
   <div class="box">
    <h2>Thématisation</h2>
    <p>Configuration des couleurs, des polices,<br> des points d'arrêt, etc.</p>
   </div> 
   <div>
    <button>6 articles</button>
   </div>
  </div>
  </section>
  <MainLayout/>
</template>

<style scoped>
.container {
  display:flex;
  gap:4px;
  margin-top: 14px;
  margin: 18px;
  justify-content: center;
}
section {
  margin-top: 45%;
  position: relative;
  left: 6%;
}
.container.row {
  flex-direction:row;
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
    bottom: -14%;
    left: 1%;
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
