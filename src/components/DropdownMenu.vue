<script setup>
import { ref } from 'vue'
const isVisible = ref(false)
const openMenu = ()=>{
  isVisible.value = !isVisible.value
}
const closMenu = () => {
  isVisible.value = !isVisible.value
 }
import MainContent  from '@/components/MainContent.vue'
</script>

<template>
   <div class="logo-flex">
        <div class="logo">
            <img src="@/assets/image.png" alt="Logo du site" >
          <a href="chakra">chakra</a>
        </div>
        <div class="hidden">
          <ul>
    <li><a href="">Docs</a></li>
    <li><a href="">Terrain de jeu</a></li>
    <li><a href="">Guides</a></li>
    <li><a href="">Blog</a></li>
  </ul>
        </div>
        <div class="menu-logo">
          <box-icon type='logo' name='github' class="moon"></box-icon>
          <box-icon name='moon' class="github"></box-icon>
          <box-icon name='menu'  @click="openMenu" class="menu"></box-icon>
        </div>
    </div>
    <section v-if="isVisible">
      <div class="section">
      <button type="button" class="btn btn-light"> <img src="@/assets/image.png" alt="Logo du site" ><span>chakra</span></button>
      <box-icon  name='x' class="icon-X" @click="closMenu"></box-icon>
      </div>
<nav>
  <ul>
    <li><a href="">Docs</a></li>
    <li><a href="">Terrain de jeu</a></li>
    <li><a href="">Guides</a></li>
    <li><a href="">Blog</a></li>

  </ul>
</nav>
  </section>
  <MainContent/>
</template>

<style scoped>
.hidden {
  display: none;
}
section  {
background-color: white;
display: flex;
justify-content: center;
position: relative;
bottom:150px;
height: 170px;
}
.list-group {
  margin-top: 90px;
}
button {
  padding: 2px 15px 2px ;
  border: 2px solid;
  margin-right: 20px;
  position: absolute;
  left: 4%;
  margin-right: 10%;
}
span {
  font-size: 1.3rem;
  position: relative;
  bottom: 9px;
}
.icon-X {
  font-size: 20px;
  position: absolute;
  right: 4%;
}
.logo img {
    max-height: 50px;
}
.logo-flex {
  display: flex;
}
.logo a {
  font-size: 1.4rem;
  color: black;
  text-decoration: none;
  position: relative;
  bottom: 8px;
  left: 3px;
}
nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    font-size: 1.3rem;
}
.github {
  margin-right:17px;
}
.github:hover {
  background-color: aliceblue;
}
.moon {
  margin-right:6px;
  display: none;
}
.moon:hover {
background-color: aliceblue;
}
.menu-logo {
  position: absolute;
  right: 4%;
  margin-top: 8px;
}
nav ul li {
    margin: 20px 25px;
    width: 390px;
    height: 40px;
    border:1px solid rgb(187, 236, 187);
    display: flex;
    justify-content: center;
    align-items: center;
 }
  nav ul li a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }

nav {
  position: absolute;
  top: 65%;
}
@media (min-width: 768px) {
  .logo  {
    margin: 4px 25px;
  }
  .moon {
    display: block;
    cursor: pointer;
    position: relative;
    right: 10px;
  }
  .menu {
    display: none;
    cursor: pointer;
  }

.moon:hover {
  background-color: aliceblue;
}

.github:hover {
  background-color: aliceblue;
}
.github {
  cursor: pointer;
  margin-left: 27px;
  margin-right: 10px ;
  position: relative;
  bottom: 24px;
  left: 7px;
}
.hidden {
  display: block;
  display: flex;

}
.hidden ul {
    list-style-type: none;
    margin-top: 7px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.3rem;
    position: absolute;
    right: 10%;
    gap: 8px;

}
.hidden ul li {
    margin: 0 15px;
}
.hidden ul li a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
}
</style>
