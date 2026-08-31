<template>
  <span ref="el">{{ display }}</span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  value: { type: String, required: true },
  duration: { type: Number, default: 1400 }
})

const el = ref(null)
const display = ref(props.value)
let hasAnimated = false
let observer = null

// Split a display string like "50,000+" / "99.99%" / "24/7" into
// an animatable numeric part plus a static prefix/suffix.
function parse(value) {
  const match = value.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/)
  if (!match) return null
  const [, prefix, numStr, suffix] = match
  const clean = numStr.replace(/,/g, '')
  const num = parseFloat(clean)
  if (Number.isNaN(num)) return null
  const decimals = clean.includes('.') ? clean.split('.')[1].length : 0
  const usesComma = numStr.includes(',')
  return { prefix, num, suffix, decimals, usesComma }
}

function format(n, parsed) {
  let str
  if (parsed.decimals > 0) {
    str = n.toFixed(parsed.decimals)
  } else {
    str = Math.round(n).toString()
  }
  if (parsed.usesComma) {
    const [intPart, decPart] = str.split('.')
    str = Number(intPart).toLocaleString('en-US') + (decPart ? '.' + decPart : '')
  }
  return `${parsed.prefix}${str}${parsed.suffix}`
}

function animate() {
  const parsed = parse(props.value)
  if (!parsed) {
    display.value = props.value
    return
  }
  const start = performance.now()
  const from = 0
  const to = parsed.num

  function tick(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / props.duration, 1)
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = from + (to - from) * eased
    display.value = format(current, parsed)
    if (progress < 1) {
      requestAnimationFrame(tick)
    } else {
      display.value = props.value
    }
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    display.value = props.value
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true
          animate()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.4 }
  )
  if (el.value) observer.observe(el.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
