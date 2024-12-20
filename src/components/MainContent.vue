<script setup>
import ElementLayout  from '../components/ElementLayout.vue'
import { ref } from 'vue'
const query = ref('') ;
</script>

<template>
  <div class="content">
    <div class="para">
<h1>
  Comment pouvons-nous<br>
 vous aider ?
</h1>
<p>
  Trouvez des réponses aux questions<br class="br"> courantes liées à Chakra UI v3.0
</p>
<div>
  <span><box-icon name='search-alt-2' class="icon"></box-icon></span> <input type="text" id="search" v-model="query" placeholder="Guides de recherche" required >
</div>
  </div>
  <main>
    <ElementLayout/>
  </main>
  </div>
</template>

<style scoped>
.content {
  margin:   10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
 h1 {
  font-size: 2.3em;
  text-align: center;
}
br {
  display: none;
}
p {
  font-size: 1.3em;
  text-align: center;
}
input {
  width: 370px;
  height: 35px;
}
input:focus {
  border: green;
}
.content .icon {
  margin-left: 30px;
  position: absolute;
  left: 1%;
  bottom: 23%;
  right: 6%;
}
@media (min-width: 768px) {
  .content {
  display: flex;
   flex-direction: column;
  }
  .para {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    font-size: 3.2em;
  }
.br {
  display: none;
}
br {
  display: block;
}
input {
  width: 560px;
  height: 45px;
}
input:focus {
  border: green;
}
.content .icon {
  margin-left: 30px;
  position: absolute;
  left: -5%;
  bottom: 4%;
}
}
</style>
