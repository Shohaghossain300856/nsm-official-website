<template>
  <div class="gallery-page">
    <!-- Framed Ambient Gallery -->
    <section class="gallery-showcase">
      <div class="container">
        <!-- Header Content -->
        <div class="gallery-header-wrap">
          <div class="breadcrumb" style="margin-bottom: 1rem;">
            <router-link to="/">Home</router-link> &gt; <span>Media Gallery</span>
          </div>
          <h1 class="section-title">Media Gallery</h1>
          <p class="section-subtitle" style="max-width: 760px; line-height: 1.8;">
            Step inside NSM Limited. Explore our technology deployments, operations,
            team moments, and corporate milestones through an interactive gallery.
          </p>
        </div>

        <div
          class="gallery-orbit"
          @mouseenter="stopAutoPlay"
          @mouseleave="startAutoPlay"
        >
          <!-- Soft surrounding images (custom ambient array) -->
          <div class="ambient-images" aria-hidden="true">
            <div
              v-for="(imagePath, index) in ambientItems"
              :key="'ambient-' + index"
              class="ambient-card"
              :class="`ambient-${index}`"
            >
              <img :src="imagePath" alt="Ambient Photo" />
            </div>
          </div>

          <!-- Main elegant frame -->
          <div class="main-frame-wrap">
            <button
              class="frame-arrow frame-prev"
              type="button"
              @click="prevSlide"
              aria-label="Previous image"
            >
              ‹
            </button>

            <div
              class="main-image-frame"
              @click="handleCardClick(currentIndex, galleryItems[currentIndex])"
            >
              <div class="frame-glow"></div>

              <Transition name="image-switch" mode="out-in">
                <img
                  :key="galleryItems[currentIndex].image"
                  :src="galleryItems[currentIndex].image"
                  :alt="galleryItems[currentIndex].title"
                  class="main-gallery-image"
                />
              </Transition>

              <div class="frame-overlay"></div>

              <div class="frame-top">
                <span class="frame-category">
                  {{ galleryItems[currentIndex].category }}
                </span>
                <span class="frame-count">
                  {{ String(currentIndex + 1).padStart(2, '0') }} /
                  {{ String(galleryItems.length).padStart(2, '0') }}
                </span>
              </div>

              <div class="frame-bottom">
                <h3>{{ galleryItems[currentIndex].title }}</h3>
                <span class="view-image">Click to view full image ↗</span>
              </div>
            </div>

            <button
              class="frame-arrow frame-next"
              type="button"
              @click="nextSlide"
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          <!-- Small image strip -->
          <div class="mini-image-strip">
            <button
              v-for="(item, index) in galleryItems"
              :key="'mini-' + index"
              type="button"
              class="mini-image"
              :class="{ active: currentIndex === index }"
              @click="setSlide(index)"
            >
              <img :src="item.image" :alt="item.title" />
            </button>
          </div>

          <div class="orbit-progress">
            <span class="progress-active">
              {{ String(currentIndex + 1).padStart(2, '0') }}
            </span>
            <div class="progress-track">
              <span
                :style="{ width: `${((currentIndex + 1) / galleryItems.length) * 100}%` }"
              ></span>
            </div>
            <span>{{ String(galleryItems.length).padStart(2, '0') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Fullscreen Lightbox -->
    <Transition name="lightbox-fade">
      <div v-if="activeImage" class="lightbox-overlay" @click="activeImage = null">
        <button
          class="lightbox-close"
          type="button"
          @click.stop="activeImage = null"
          aria-label="Close"
        >
          &times;
        </button>

        <button
          class="lightbox-nav lightbox-prev"
          type="button"
          @click.stop="showLightboxPrev"
          aria-label="Previous image"
        >
          ‹
        </button>

        <div class="lightbox-content" @click.stop>
          <img :src="activeImage.image" :alt="activeImage.title" class="lightbox-img" />
          <div class="lightbox-caption">
            <span class="lightbox-category">{{ activeImage.category }}</span>
            <h4>{{ activeImage.title }}</h4>
            <p>{{ activeImage.desc }}</p>
          </div>
        </div>

        <button
          class="lightbox-nav lightbox-next"
          type="button"
          @click.stop="showLightboxNext"
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeImage = ref(null)
const currentIndex = ref(0)
let timer = null

const galleryItems = [
  {
    title: 'Global Client with NSM Management',
    category: 'Executive Meet',
    desc: 'NSM Limited founders and board directors welcoming our international partner during their corporate executive visit to Bangladesh.',
    image: '/images/gallery/gallery-4.png'
  },
  {
    title: 'Celebrating Major Project Milestone',
    category: 'Project Launch',
    desc: 'Standing alongside institutional leaders and stakeholders during the official project signing and handover celebration in Bangladesh.',
    image: '/images/gallery/gallery-2.png'
  },
  {
    title: 'NSM Team Dinner Celebration',
    category: 'Team Social',
    desc: 'Celebrating our achievements and team synergy: NSM Limited developers enjoying a dinner gathering in Rangpur.',
    image: '/images/gallery/gallery-6.jpg'
  },
  {
    title: 'Dinner Gathering with Global Client',
    category: 'Team Dinner',
    desc: 'Building relationships beyond code: NSM Limited engineering team hosting a corporate dinner session for our international client.',
    image: '/images/gallery/gallery-5.png'
  },
  {
    title: 'NSM Limited Technology Team',
    category: 'Engineering Team',
    desc: 'Our lead software engineers, hardware architects, and executive leaders.',
    image: '/images/gallery/gallery-1.png'
  },
  {
    title: 'Foreign Client Visit at Bangladesh HQ',
    category: 'Client Visit',
    desc: 'Welcoming our international client at our corporate office in Rangpur, Bangladesh to align on ongoing enterprise development projects.',
    image: '/images/gallery/gallery-3.png'
  }
]

const ambientItems = [
  '/images/gallery/gallery-4.png',
  '/images/gallery/gallery-3.png',
  '/images/gallery/gallery-2.png',
  '/images/gallery/gallery-7.jpg',
  '/images/gallery/gallery-1.png'
]

function handleCardClick(index, item) {
  if (index === currentIndex.value) {
    activeImage.value = item
  } else {
    currentIndex.value = index
  }
}

function startAutoPlay() {
  stopAutoPlay()
  timer = setInterval(nextSlide, 4500)
}

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % galleryItems.length
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + galleryItems.length) % galleryItems.length
}

function setSlide(index) {
  currentIndex.value = index
}

function showLightboxNext() {
  const nextIndex = (currentIndex.value + 1) % galleryItems.length
  currentIndex.value = nextIndex
  activeImage.value = galleryItems[nextIndex]
}

function showLightboxPrev() {
  const prevIndex = (currentIndex.value - 1 + galleryItems.length) % galleryItems.length
  currentIndex.value = prevIndex
  activeImage.value = galleryItems[prevIndex]
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
.gallery-page {
  min-height: 100vh;
}

.gallery-showcase {
  position: relative;
  padding: 4.8rem 0 5rem;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 42%, rgba(99, 102, 241, 0.10), transparent 31%),
    linear-gradient(180deg, #f8faff 0%, #f3f6fb 100%);
}

/* Gallery Header styling */
.gallery-header-wrap {
  text-align: left;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
}

.gallery-header-wrap .breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  margin-bottom: 1rem;
}

.gallery-header-wrap .breadcrumb a {
  color: var(--logo-purple);
}

.gallery-header-wrap .breadcrumb a:hover {
  text-decoration: underline;
}

.gallery-header-wrap .section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #0F172A;
  margin-bottom: 0.75rem;
  font-family: 'Space Grotesk', sans-serif;
}

.gallery-header-wrap .section-subtitle {
  font-size: 1.05rem;
  color: #64748B;
  max-width: 760px;
  line-height: 1.8;
}

.gallery-orbit {
  position: relative;
  width: 100%;
  max-width: 1280px;
  min-height: 650px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Soft decorative surrounding photos */
.ambient-images {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.ambient-card {
  position: absolute;
  overflow: hidden;
  border-radius: 18px;
  opacity: 0.85;
  filter: saturate(1.0) contrast(1.02);
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.15);
  border: 7px solid rgba(255, 255, 255, 0.95);
  animation: floatPhoto 7s ease-in-out infinite;
  transition: opacity 0.3s, transform 0.3s;
  pointer-events: auto;
}

.ambient-card:hover {
  opacity: 1;
  transform: scale(1.05) !important;
  z-index: 10;
}

.ambient-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  background-color: #0f172a;
}

.ambient-0 {
  width: 210px;
  height: 145px;
  left: 2%;
  top: 12%;
  transform: rotate(-8deg);
  animation-delay: -1s;
}

.ambient-1 {
  width: 180px;
  height: 125px;
  right: 5%;
  top: 8%;
  transform: rotate(7deg);
  animation-delay: -3s;
}

.ambient-2 {
  width: 195px;
  height: 135px;
  right: 1%;
  bottom: 13%;
  transform: rotate(-7deg);
  animation-delay: -5s;
}

.ambient-3 {
  width: 185px;
  height: 125px;
  left: 5%;
  bottom: 10%;
  transform: rotate(7deg);
  animation-delay: -2s;
}

.ambient-4 {
  width: 145px;
  height: 100px;
  left: 22%;
  top: 2%;
  opacity: 0.25;
  transform: rotate(-4deg);
  animation-delay: -4s;
}

@keyframes floatPhoto {
  0%, 100% {
    margin-top: 0;
  }
  50% {
    margin-top: -14px;
  }
}

/* Main frame */
.main-frame-wrap {
  position: relative;
  z-index: 5;
  width: min(720px, 70vw);
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  padding: 9px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.95);
  box-shadow:
    0 42px 95px rgba(15, 23, 42, 0.20),
    0 16px 35px rgba(15, 23, 42, 0.12),
    0 0 0 1px rgba(79, 70, 229, 0.04);
}

.frame-glow {
  position: absolute;
  inset: -25%;
  z-index: -1;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.22), transparent 58%);
  filter: blur(28px);
  animation: frameGlow 4s ease-in-out infinite;
}

@keyframes frameGlow {
  0%, 100% {
    opacity: 0.55;
    transform: scale(0.94);
  }
  50% {
    opacity: 0.85;
    transform: scale(1.04);
  }
}

.main-gallery-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  background-color: #0f172a;
  border-radius: 22px;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.main-image-frame:hover .main-gallery-image {
  transform: scale(1.035);
}

.frame-overlay {
  position: absolute;
  inset: 9px;
  border-radius: 22px;
  pointer-events: none;
  background:
    linear-gradient(to bottom, rgba(15, 23, 42, 0.18), transparent 25%),
    linear-gradient(to top, rgba(15, 23, 42, 0.84), transparent 55%);
}

.frame-top,
.frame-bottom {
  position: absolute;
  left: 30px;
  right: 30px;
  z-index: 3;
  color: #fff;
}

.frame-top {
  top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.frame-category {
  padding: 8px 13px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.48);
  border: 1px solid rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-size: 0.67rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.09em;
}

.frame-count {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.82);
}

.frame-bottom {
  bottom: 27px;
}

.frame-bottom h3 {
  margin: 0 0 7px;
  color: #fff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.3rem, 2.3vw, 1.8rem);
  font-weight: 800;
  line-height: 1.2;
}

.frame-bottom p {
  max-width: 620px;
  margin: 0 0 9px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 0.82rem;
  line-height: 1.5;
}

.view-image {
  color: #c7d2fe;
  font-size: 0.69rem;
  font-weight: 700;
}

/* Arrows */
.frame-arrow {
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 52px;
  height: 52px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(226, 232, 240, 0.95);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.96);
  color: #0f172a;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.14);
  transition: all 0.3s ease;
}

.frame-arrow span {
  line-height: 1;
  font-size: 1.9rem;
}

.frame-arrow:hover {
  color: #fff;
  background: var(--gradient-brand, #4f46e5);
  border-color: transparent;
  transform: translateY(-50%) scale(1.08);
  box-shadow: 0 15px 35px rgba(79, 70, 229, 0.3);
}

.frame-prev {
  left: -27px;
}

.frame-next {
  right: -27px;
}

/* Small images around the main frame */
.mini-image-strip {
  position: absolute;
  bottom: 7px;
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding: 7px;
  border-radius: 17px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.mini-image {
  width: 70px;
  height: 48px;
  padding: 0;
  overflow: hidden;
  border: 2px solid transparent;
  border-radius: 9px;
  opacity: 0.58;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mini-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  background-color: #0f172a;
}

.mini-image:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.mini-image.active {
  opacity: 1;
  border-color: #4f46e5;
  transform: translateY(-4px);
  box-shadow: 0 7px 18px rgba(79, 70, 229, 0.25);
}

/* Progress */
.orbit-progress {
  position: absolute;
  bottom: -28px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #64748b;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.progress-active {
  color: #4f46e5;
}

.progress-track {
  width: 100px;
  height: 3px;
  overflow: hidden;
  border-radius: 99px;
  background: #dbe2ef;
}

.progress-track span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: #4f46e5;
  transition: width 0.5s ease;
}

/* Main image transition */
.image-switch-enter-active,
.image-switch-leave-active {
  transition: opacity 0.4s ease, transform 0.5s ease;
}

.image-switch-enter-from {
  opacity: 0;
  transform: scale(1.04);
}

.image-switch-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

/* Lightbox */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(2, 6, 23, 0.96);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
}

.lightbox-content {
  width: min(100%, 1100px);
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-img {
  display: block;
  max-width: 100%;
  max-height: 78vh;
  object-fit: contain;
  border-radius: 16px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.55);
}

.lightbox-caption {
  margin-top: 16px;
  text-align: center;
  color: #fff;
}

.lightbox-category {
  color: #a5b4fc;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.lightbox-caption h4 {
  margin: 5px 0 3px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
}

.lightbox-caption p {
  max-width: 720px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.82rem;
}

.lightbox-close,
.lightbox-nav {
  position: absolute;
  width: 50px;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
}

.lightbox-close {
  top: 22px;
  right: 25px;
  font-size: 2rem;
  z-index: 3;
}

.lightbox-nav {
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  z-index: 3;
}

.lightbox-prev {
  left: 25px;
}

.lightbox-next {
  right: 25px;
}

.lightbox-close:hover,
.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
}

.lightbox-nav:hover {
  transform: translateY(-50%) scale(1.07);
}

.lightbox-close:hover {
  transform: scale(1.07);
}

/* Lightbox transition */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-active .lightbox-content,
.lightbox-fade-leave-active .lightbox-content {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.lightbox-fade-enter-from .lightbox-content,
.lightbox-fade-leave-to .lightbox-content {
  transform: scale(0.94);
}

/* Tablet */
@media (max-width: 992px) {
  .gallery-showcase {
    padding: 3.8rem 0 4.5rem;
  }

  .gallery-orbit {
    min-height: 560px;
  }

  .main-frame-wrap {
    width: min(650px, 76vw);
  }

  .ambient-0,
  .ambient-3 {
    left: -1%;
  }

  .ambient-1,
  .ambient-2 {
    right: -1%;
  }

  .ambient-4 {
    display: none;
  }
}

/* Mobile */
@media (max-width: 576px) {
  .gallery-showcase {
    padding: 2.8rem 0 3.7rem;
  }

  .gallery-orbit {
    min-height: 455px;
  }

  .ambient-card {
    opacity: 0.28;
    border-width: 5px;
    border-radius: 12px;
  }

  .ambient-0 {
    width: 110px;
    height: 78px;
    left: -5%;
    top: 11%;
  }

  .ambient-1 {
    width: 105px;
    height: 73px;
    right: -5%;
    top: 8%;
  }

  .ambient-2 {
    width: 100px;
    height: 70px;
    right: -4%;
    bottom: 15%;
  }

  .ambient-3 {
    width: 105px;
    height: 73px;
    left: -5%;
    bottom: 13%;
  }

  .main-frame-wrap {
    width: calc(100% - 30px);
  }

  .main-image-frame {
    padding: 6px;
    border-radius: 21px;
  }

  .main-gallery-image,
  .frame-overlay {
    border-radius: 16px;
  }

  .frame-top {
    top: 18px;
    left: 19px;
    right: 19px;
  }

  .frame-category {
    padding: 6px 9px;
    font-size: 0.56rem;
  }

  .frame-count {
    font-size: 0.62rem;
  }

  .frame-bottom {
    left: 19px;
    right: 19px;
    bottom: 18px;
  }

  .frame-bottom h3 {
    font-size: 1.02rem;
  }

  .frame-bottom p {
    display: none;
  }

  .view-image {
    font-size: 0.6rem;
  }

  .frame-arrow {
    width: 39px;
    height: 39px;
  }

  .frame-arrow span {
    font-size: 1.45rem;
  }

  .frame-prev {
    left: -9px;
  }

  .frame-next {
    right: -9px;
  }

  .mini-image-strip {
    bottom: 0;
    max-width: calc(100% - 28px);
    gap: 6px;
    padding: 5px;
    overflow-x: auto;
    justify-content: flex-start;
    scrollbar-width: none;
  }

  .mini-image-strip::-webkit-scrollbar {
    display: none;
  }

  .mini-image {
    flex: 0 0 54px;
    width: 54px;
    height: 38px;
    border-radius: 7px;
  }

  .orbit-progress {
    bottom: -25px;
  }

  .progress-track {
    width: 65px;
  }

  .lightbox-overlay {
    padding: 15px;
  }

  .lightbox-img {
    max-height: 70vh;
    border-radius: 10px;
  }

  .lightbox-close {
    top: 10px;
    right: 10px;
    width: 41px;
    height: 41px;
  }

  .lightbox-nav {
    width: 40px;
    height: 40px;
  }

  .lightbox-prev {
    left: 8px;
  }

  .lightbox-next {
    right: 8px;
  }

  .lightbox-caption p {
    display: none;
  }
}
</style>
