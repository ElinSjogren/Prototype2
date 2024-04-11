import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const dummyStore = defineStore('features', () => {
  const selectedFeature = ref("")
  return { selectedFeature }
})
