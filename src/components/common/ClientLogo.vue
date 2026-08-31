<template>
  <div 
    class="client-logo-img-wrapper" 
    :style="{
      width: (typeof size === 'number' ? size + 'px' : size),
      height: (typeof size === 'number' ? size + 'px' : size),
      minWidth: (typeof size === 'number' ? size + 'px' : size),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      background: '#FFFFFF',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.06)',
      border: '1px solid rgba(226, 232, 240, 0.8)',
      padding: '6px',
      overflow: 'hidden'
    }"
  >
    <img 
      :src="logoSrc" 
      :alt="client + ' official logo'" 
      :style="{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block'
      }"
      @error="handleImgError"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  client: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 68
  }
})

const hasError = ref(false)

const logoMap = {
  rpmc: '/images/clients/rpmc.png',
  dinajpur: '/images/clients/dinajpur.png',
  comilla: '/images/clients/comilla.png',
  satkhira: '/images/clients/satkhira.svg',
  bogura: '/images/clients/bogura.svg',
  nilphamari: '/images/clients/nilphamari.png',
  baiust: '/images/clients/baiust.png',
  rdrs: '/images/clients/rdrs.png',
  prime: '/images/clients/prime.png',
  sufi: '/images/clients/sufi.svg',
  dmc: '/images/clients/dmc.svg',
  mmc: '/images/clients/mmc.svg',
  marine_academy: '/images/clients/marine_academy.png'
}

const logoSrc = computed(() => {
  if (hasError.value) {
    return '/images/nsm-logo.png'
  }
  return logoMap[props.client] || '/images/nsm-logo.png'
})

function handleImgError() {
  hasError.value = true
}
</script>
