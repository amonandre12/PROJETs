import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout',() => {
const layoutDirection = ref('row');
const setLayoutDirection = (direction) => {
    layoutDirection.value = direction 
}
 return { layoutDirection ,setLayoutDirection } ;
}) ;
