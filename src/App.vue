<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import DropdownMenu from './components/DropdownMenu.vue'
</script>

<template>
  <header>
    <div>
      <p>
        Construissez plus rapidement <br />
        avec des composants<br />
        d'interface utilisateur<br />
        Premium Chakra.💎
      </p>
    </div>
    <div>
      <button type="button" class="btn btn-light">Pour en savoir plus</button>
    </div>
  </header>
  <!-- <RouterView /> -->
   <main>
  <DropdownMenu />
   </main>
</template>

<style scoped>
header {
  display: flex;
  gap: 20px;
  background:linear-gradient(to right, #3e775b, #6A5ACD)
}
header p {
  text-align: center;
  color: wheat;
}
button {
  text-align: center;
  margin-top: 25%;
}

button {
  border-color: rgba(88, 86, 90, 0.6) ;
  padding: 7px 13px 7px 13px;
  cursor: pointer;
  color: white;
  background:linear-gradient(to right, rgba(40, 36, 43, 0.6)) ;
  background-color: transparent;
}

@media (min-width: 768px) {
  header {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  br {
    display: none;
  }
  button {
    margin-top: 10%;
  }
  header p {
    white-space: normal;
  }
}
@media (min-width: 1024px) {
  header {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  br {
    display: none;
  }
  button {
    margin-top: 10%;
  }
  header p {
    white-space: normal;
  }
}
</style>
