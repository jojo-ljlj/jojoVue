<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
    <my-footer></my-footer>
  </div>
</template>

<style>
a{
  text-decoration: none;
}
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
.motai{
  position: fixed;
  background-color: rgba(	254,209,0, 1);
  padding: 15px 25px;
  color: #333;
  top: 210px;
  font-weight: 600;
  transition: all 0.4s;
  opacity: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  z-index: 10;
}
.moShow{
  opacity: 1;
  top: 230px; 
}
</style>
