<template>
  <div class="team-page">
    <!-- Page Header Banner -->
    <section class="team-banner">
      <div class="container">
        <div class="breadcrumb">
          <router-link to="/">Home</router-link> &gt; <span>Our Team</span>
        </div>
        <div class="banner-badge">
          <span class="badge-dot"></span>
          <span>Core Engineering & Leadership</span>
        </div>
        <h1 class="section-title">
          Meet the Minds Behind <span class="text-gradient">NSM Limited</span>
        </h1>
        <p class="section-subtitle">
          A multidisciplinary collective of enterprise system architects, distributed backend engineers, 
          IoT firmware developers, and client operations coordinators delivering mission-critical platforms worldwide.
        </p>

        <!-- Stats Bar -->
        <div class="team-stats-strip">
          <div class="stat-pill">
            <span class="stat-num">100%</span>
            <span class="stat-lbl">In-House Engineering</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-pill">
            <span class="stat-num">Tier-1</span>
            <span class="stat-lbl">System Architecture</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-pill">
            <span class="stat-num">24/7</span>
            <span class="stat-lbl">Enterprise SLA Support</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-pill">
            <span class="stat-num">BASIS</span>
            <span class="stat-lbl">Certified Firm</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Team Content Section -->
    <section class="team-content-section">
      <div class="container">
        
        <!-- Department Filter Tabs -->
        <div class="filter-wrapper">
          <div class="filter-tabs">
            <button
              v-for="dept in departments"
              :key="dept.key"
              class="filter-tab-btn"
              :class="{ active: activeDept === dept.key }"
              @click="activeDept = dept.key"
            >
              <span class="tab-icon">{{ dept.icon }}</span>
              <span class="tab-label">{{ dept.label }}</span>
              <span class="tab-count">{{ getDeptCount(dept.key) }}</span>
            </button>
          </div>
        </div>

        <!-- Team Grid -->
        <TransitionGroup name="team-card-fade" tag="div" class="team-grid">
          <div
            v-for="member in filteredTeam"
            :key="member.id"
            class="team-card"
            :class="{ 'is-featured': member.featured }"
          >
            <!-- Card Top: Image Frame with Ambient Glow -->
            <div class="member-image-frame">
              <div class="photo-wrapper">
                <img
                  v-if="member.image && !failedImages[member.id]"
                  :src="member.image"
                  :alt="member.name"
                  class="member-photo"
                  :style="{ objectPosition: member.imagePosition || 'center 20%' }"
                  loading="lazy"
                  @error="onImageError(member.id)"
                />
                <!-- Fallback High-Tech Initials Avatar -->
                <div v-else class="member-photo-fallback">
                  <div class="fallback-glow"></div>
                  <span class="fallback-initials">{{ member.fallbackAvatar || getInitials(member.name) }}</span>
                  <span class="fallback-icon">{{ member.departmentIcon }}</span>
                </div>
              </div>

              <!-- Department Floating Badge -->
              <span class="dept-badge" :style="{ background: member.accentColor, color: '#FFFFFF' }">
                {{ member.departmentShort || member.department }}
              </span>
            </div>

            <!-- Card Body: Details -->
            <div class="member-info">
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role" :style="{ color: member.accentColor }">{{ member.role }}</p>
              <p class="member-dept-title">{{ member.department }}</p>

              <div class="member-divider"></div>

              <p class="member-bio">{{ member.bio }}</p>

              <!-- Skill Tags -->
              <div v-if="member.skills && member.skills.length" class="member-skills">
                <span v-for="skill in member.skills" :key="skill" class="skill-tag">
                  {{ skill }}
                </span>
              </div>

              <!-- Social / Contact Links -->
              <div class="member-socials">
                <a
                  v-if="member.linkedin"
                  :href="member.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-btn linkedin"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
                </a>
                <a
                  v-if="member.github"
                  :href="member.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-btn github"
                  title="GitHub Profile"
                  aria-label="GitHub"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                </a>
                <a
                  v-if="member.email"
                  :href="`mailto:${member.email}`"
                  class="social-btn email"
                  title="Direct Corporate Email"
                  aria-label="Email"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
                <a
                  v-if="member.website"
                  :href="member.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-btn website"
                  title="Personal Portfolio"
                  aria-label="Website"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </TransitionGroup>

        <!-- No Results Fallback -->
        <div v-if="filteredTeam.length === 0" class="no-members-box">
          <p>No team members listed under this department yet.</p>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const activeDept = ref('all')
const failedImages = reactive({})

function onImageError(memberId) {
  failedImages[memberId] = true
}

function getInitials(name) {
  if (!name) return 'NS'
  const parts = name.replace(/^(Engr\.|Dr\.|Mr\.|Ms\.)\s+/i, '').trim().split(' ')
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

// Department list for filter tabs
const departments = [
  { key: 'all',         label: 'All Members',               icon: '👥' },
  { key: 'leadership',  label: 'Executive Leadership',      icon: '⚡' },
  { key: 'hr',          label: 'HR & Administration',       icon: '📋' },
  { key: 'seo',         label: 'SEO & Digital Growth',      icon: '📈' },
  { key: 'engineering', label: 'Software & App Engineering',icon: '💻' },
  { key: 'sales',       label: 'Sales & Business Dev',      icon: '💼' },
  { key: 'operations',  label: 'Office & Data Ops',         icon: '📊' }
]

/*
  =============================================================================
  HOW TO ADD / UPDATE TEAM MEMBER IMAGES:
  1. Put your image file inside the folder: `public/images/team/`
     Example: `public/images/team/chairman.jpg`, `kawsar-hossain.png`, etc.
  2. Set `image: '/images/team/chairman.jpg'` in the object below.
  3. If the image is not found, the system will automatically show a premium
     cyber-styled initials avatar so the page NEVER looks broken.
  =============================================================================
*/
const team = [
  // 1. Chairman
  {
    id: 'chairman',
    name: 'Shoumik Jaman Chowdhury',
    role: 'Chairman & Server-Side Security Lead',
    department: 'Executive Leadership',
    departmentShort: 'Chairman',
    deptKey: 'leadership',
    departmentIcon: '👑',
    accentColor: '#4F46E5',
    image: '/images/team/chairman.jpg',
    imagePosition: 'center 15%',
    fallbackAvatar: 'SJC',
    bio: 'Guiding corporate vision, high-level institutional governance, hardened server-side security architectures, and enterprise cyber infrastructure defense.',
    skills: ['Server-Side Security', 'Corporate Governance', 'Infrastructure Hardening', 'Cyber Defense'],
    linkedin: 'https://www.linkedin.com/',
    email: 'chairman@nsmlimited.com',
    featured: true
  },

  // 2. Managing Director
  {
    id: 'managing-director',
    name: 'Syed Naimul Hasan',
    role: 'Managing Director & Full Stack Web Developer',
    department: 'Executive Leadership',
    departmentShort: 'Managing Director',
    deptKey: 'leadership',
    departmentIcon: '⚡',
    accentColor: '#4F46E5',
    image: '/images/team/managing-director.jpg',
    imagePosition: 'center 15%',
    fallbackAvatar: 'SNH',
    bio: 'Directing corporate technology strategy, lead full-stack web architectures, and high-availability enterprise ERP system engineering for national deployments.',
    skills: ['Enterprise Architecture', 'Full Stack Web Dev', 'Cloud ERP Systems', 'SaaS Scaling'],
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    email: 'naimul@nsmlimited.com',
    featured: true
  },

  // 3. HR & Admin | WordPress Specialist
  {
    id: 'hr-admin',
    name: 'Md. Mehedi Hasan',
    role: 'HR & Admin Lead | WordPress Specialist',
    department: 'HR & Administration',
    departmentShort: 'HR & Admin',
    deptKey: 'hr',
    departmentIcon: '📋',
    accentColor: '#894B9E',
    image: '/images/team/md-mehedi-hasan.jpg',
    imagePosition: 'center 35%',
    fallbackAvatar: 'MMH',
    bio: 'Managing corporate human resources, organizational administration, employee relations, alongside specialized WordPress CMS architecture and web deployment.',
    skills: ['HR & Administration', 'WordPress CMS', 'Theme Customization', 'Talent Acquisition'],
    linkedin: 'https://www.linkedin.com/',
    email: 'mehedi@nsmlimited.com',
    featured: false
  },

  // 4. SEO & Growth Specialist
  {
    id: 'seo-specialist',
    name: 'Md. Ripon Mia',
    role: 'Lead Technical SEO & Search Engine Specialist',
    department: 'SEO & Digital Growth',
    departmentShort: 'SEO Specialist',
    deptKey: 'seo',
    departmentIcon: '📈',
    accentColor: '#059669',
    image: '/images/team/seo-specialist.jpg',
    imagePosition: 'center 15%',
    fallbackAvatar: 'MRM',
    bio: 'Directing technical search engine optimization, structured schema markup, page speed vitals, organic ranking strategies, and web analytics.',
    skills: ['Technical SEO', 'Search Console', 'Schema & Metadata', 'Core Web Vitals', 'Analytics'],
    linkedin: 'https://www.linkedin.com/',
    email: 'ripon.seo@nsmlimited.com',
    featured: false
  },

  // 5. Senior Full Stack Engineer
  {
    id: 'senior-fullstack-engineer',
    name: 'Md. Mehedi Hasan',
    role: 'Lead Full Stack Web & App Developer',
    department: 'Software & App Engineering',
    departmentShort: 'Senior Dev',
    deptKey: 'engineering',
    departmentIcon: '💻',
    accentColor: '#2563EB',
    image: '/images/team/senior-developer.jpg',
    imagePosition: 'center 15%',
    fallbackAvatar: 'MH',
    bio: 'Architecting scalable enterprise web portals, high-throughput microservices, robust RESTful APIs, and cross-platform mobile application backends.',
    skills: ['HTML5 & CSS3', 'Tailwind CSS', 'JavaScript', 'Vue.js', 'Node.js', 'Laravel', 'MySQL'],
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    email: 'mehedi.dev@nsmlimited.com',
    featured: false
  },

  // 6. Senior Sales Executive
  {
    id: 'senior-sales-executive',
    name: 'Senior Sales Executive',
    role: 'Senior Enterprise Solutions Sales Executive',
    department: 'Sales & Business Development',
    departmentShort: 'Sales Executive',
    deptKey: 'sales',
    departmentIcon: '💼',
    accentColor: '#E11D48',
    image: '/images/team/sales-executive.jpg',
    fallbackAvatar: 'SE',
    bio: 'Connecting government medical colleges, healthcare institutions, and corporate enterprises with customized NSM ERP suites and SaaS platforms.',
    skills: ['ERP Solution Pitching', 'CRM Management', 'Lead Generation', 'Client Demos'],
    linkedin: 'https://www.linkedin.com/',
    email: 'sales@nsmlimited.com',
    featured: false
  },

  // 7. Junior Full Stack Web Developer (Box 1)
  {
    id: 'junior-fullstack-web-developer-1',
    name: 'Junior Full Stack Web Developer',
    role: 'Junior Full Stack Web Applications Developer',
    department: 'Software & App Engineering',
    departmentShort: 'Junior Dev',
    deptKey: 'engineering',
    departmentIcon: '💻',
    accentColor: '#2563EB',
    image: '/images/team/junior-developer-1.jpg',
    fallbackAvatar: 'JWD',
    bio: 'Building dynamic web pages, modular stylesheet structures, frontend state management, and supporting full-stack development pipelines.',
    skills: ['Vue.js & React', 'Node.js & Python', 'JavaScript & TypeScript', 'Full Stack Web Dev'],
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    email: 'juniordev1@nsmlimited.com',
    featured: false
  },

  // 8. Junior Full Stack Web Developer (Box 2)
  {
    id: 'junior-fullstack-web-developer-2',
    name: 'Junior Full Stack Web Developer',
    role: 'Junior Full Stack Web Applications Developer',
    department: 'Software & App Engineering',
    departmentShort: 'Junior Dev',
    deptKey: 'engineering',
    departmentIcon: '💻',
    accentColor: '#2563EB',
    image: '/images/team/junior-developer-2.jpg',
    fallbackAvatar: 'JWD',
    bio: 'Building dynamic web pages, modular stylesheet structures, frontend state management, and supporting full-stack development pipelines.',
    skills: ['Vue.js & React', 'Node.js & Python', 'JavaScript & TypeScript', 'Full Stack Web Dev'],
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
    email: 'juniordev2@nsmlimited.com',
    featured: false
  },

  // 9. Office Administration & SEO Data Entry Executive
  {
    id: 'office-seo-executive',
    name: 'Office & SEO Data Executive',
    role: 'Office Operations & SEO Data Entry Executive',
    department: 'Office Operations & SEO Support',
    departmentShort: 'Office & SEO Ops',
    deptKey: 'operations',
    departmentIcon: '📊',
    accentColor: '#0D9488',
    image: '/images/team/office-seo-executive.jpg',
    fallbackAvatar: 'OSE',
    bio: 'Handling day-to-day office administration, client documentation, data management, and executing technical SEO data entry & keyword records.',
    skills: ['Office Administration', 'SEO Data Entry', 'Documentation & Filing', 'Data Management', 'Client Records'],
    linkedin: 'https://www.linkedin.com/',
    email: 'office@nsmlimited.com',
    featured: false
  }
]

const filteredTeam = computed(() => {
  if (activeDept.value === 'all') {
    return team
  }
  return team.filter(m => m.deptKey === activeDept.value)
})

function getDeptCount(key) {
  if (key === 'all') return team.length
  return team.filter(m => m.deptKey === key).length
}
</script>

<style scoped>
.team-page {
  min-height: 100vh;
  background-color: #FAFCFF;
  padding-bottom: 5rem;
}

/* -------------------------------------------------------------
   Page Header Banner
------------------------------------------------------------- */
.team-banner {
  padding: 4.5rem 0 3rem 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #F1F5FF 100%);
  border-bottom: 1px solid #E8EEFF;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.team-banner::before {
  content: '';
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 650px;
  height: 280px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.08) 0%, rgba(37, 99, 235, 0) 70%);
  pointer-events: none;
}

.banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.9rem;
  background: rgba(79, 70, 229, 0.08);
  border: 1px solid rgba(79, 70, 229, 0.2);
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #4F46E5;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4F46E5;
  box-shadow: 0 0 10px #4F46E5;
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.4); opacity: 0.6; }
}

.section-subtitle {
  max-width: 780px;
  margin: 0 auto 2.5rem auto;
  color: #475569;
  line-height: 1.8;
  font-size: 1.05rem;
}

/* Stats Strip */
.team-stats-strip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 9999px;
  padding: 0.75rem 2rem;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
}

.stat-pill {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-num {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: #0F172A;
  line-height: 1.2;
}

.stat-lbl {
  font-size: 0.725rem;
  font-weight: 600;
  color: #64748B;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-divider {
  width: 1px;
  height: 28px;
  background: #E2E8F0;
}

/* -------------------------------------------------------------
   Filter Tabs
------------------------------------------------------------- */
.team-content-section {
  padding: 3.5rem 0;
}

.filter-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.filter-tabs {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #FFFFFF;
  padding: 0.35rem;
  border-radius: 9999px;
  border: 1px solid #E2E8F0;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  flex-wrap: wrap;
  justify-content: center;
}

.filter-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.15rem;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: #475569;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
}

.filter-tab-btn:hover {
  color: #4F46E5;
  background: #F8FAFC;
}

.filter-tab-btn.active {
  background: linear-gradient(135deg, #4F46E5 0%, #2563EB 100%);
  color: #FFFFFF;
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.25);
}

.tab-icon {
  font-size: 0.95rem;
}

.tab-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  border-radius: 9999px;
  font-size: 0.725rem;
  font-weight: 700;
  background: rgba(15, 23, 42, 0.08);
  color: #475569;
}

.filter-tab-btn.active .tab-count {
  background: rgba(255, 255, 255, 0.25);
  color: #FFFFFF;
}

/* -------------------------------------------------------------
   Team Cards Grid
------------------------------------------------------------- */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.25rem;
  margin-top: 1rem;
}

.team-card {
  background: #FFFFFF;
  border: 1px solid #E8EEFF;
  border-radius: 20px;
  padding: 2.25rem 1.85rem 1.85rem 1.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.03);
  overflow: hidden;
}

.team-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #4F46E5 0%, #2563EB 50%, #06B6D4 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-card:hover {
  transform: translateY(-8px);
  border-color: rgba(79, 70, 229, 0.25);
  box-shadow: 0 20px 40px rgba(79, 70, 229, 0.09);
}

.team-card:hover::before {
  opacity: 1;
}

.team-card.is-featured {
  border-color: rgba(79, 70, 229, 0.22);
  background: linear-gradient(180deg, #FFFFFF 0%, #F9FAFF 100%);
}

.team-card.is-featured::before {
  opacity: 1;
}

/* Photo Wrapper & Frame */
.member-image-frame {
  position: relative;
  margin-bottom: 1.5rem;
}

.photo-wrapper {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #4F46E5 0%, #2563EB 50%, #06B6D4 100%);
  box-shadow: 0 8px 24px rgba(79, 70, 229, 0.16);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.team-card:hover .photo-wrapper {
  transform: scale(1.04);
  box-shadow: 0 12px 30px rgba(79, 70, 229, 0.25);
}

.member-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: #FFFFFF;
  transition: transform 0.4s ease;
}

.team-card:hover .member-photo {
  transform: scale(1.06);
}

/* Fallback Initials Avatar */
.member-photo-fallback {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(145deg, #0F172A 0%, #1E293B 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.fallback-glow {
  position: absolute;
  width: 70px;
  height: 70px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.45) 0%, rgba(37, 99, 235, 0) 70%);
  top: 15%;
}

.fallback-initials {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: #FFFFFF;
  z-index: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.fallback-icon {
  font-size: 0.95rem;
  z-index: 1;
  margin-top: -2px;
}

/* Department Badge */
.dept-badge {
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  white-space: nowrap;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  border: 2px solid #FFFFFF;
}

/* Member Information */
.member-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.member-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: #0F172A;
  margin-bottom: 0.3rem;
  line-height: 1.3;
}

.member-role {
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  line-height: 1.4;
}

.member-dept-title {
  font-size: 0.75rem;
  font-weight: 700;
  color: #94A3B8;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  margin-bottom: 1.15rem;
}

.member-divider {
  width: 48px;
  height: 2px;
  background: linear-gradient(90deg, #4F46E5 0%, #2563EB 100%);
  margin-bottom: 1.15rem;
  border-radius: 2px;
  opacity: 0.3;
}

.member-bio {
  font-size: 0.875rem;
  color: #64748B;
  line-height: 1.65;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

/* Skill Tags */
.member-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 100%;
}

.skill-tag {
  background: #F1F5F9;
  border: 1px solid #E2E8F0;
  color: #334155;
  font-size: 0.725rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  background: rgba(79, 70, 229, 0.08);
  border-color: rgba(79, 70, 229, 0.25);
  color: #4F46E5;
}

/* Social Buttons */
.member-socials {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  margin-top: auto;
}

.social-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  color: #64748B;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  text-decoration: none;
}

.social-btn:hover {
  transform: translateY(-3px);
}

.social-btn.linkedin:hover {
  background: #0A66C2;
  border-color: #0A66C2;
  color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(10, 102, 194, 0.25);
}

.social-btn.github:hover {
  background: #24292F;
  border-color: #24292F;
  color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(36, 41, 47, 0.25);
}

.social-btn.email:hover {
  background: #EA4335;
  border-color: #EA4335;
  color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(234, 67, 53, 0.25);
}

.social-btn.website:hover {
  background: #4F46E5;
  border-color: #4F46E5;
  color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
}

/* -------------------------------------------------------------
   Empty State
------------------------------------------------------------- */
.no-members-box {
  text-align: center;
  padding: 4rem 1rem;
  background: #FFFFFF;
  border-radius: 16px;
  border: 1px dashed #CBD5E1;
  color: #64748B;
  margin-top: 2rem;
}

/* -------------------------------------------------------------
   Transitions & Responsiveness
------------------------------------------------------------- */
.team-card-fade-enter-active,
.team-card-fade-leave-active {
  transition: all 0.35s ease;
}

.team-card-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.team-card-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 640px) {
  .team-stats-strip {
    border-radius: 16px;
    padding: 1rem;
    gap: 1rem;
  }
  .stat-divider {
    display: none;
  }
  .filter-tabs {
    border-radius: 16px;
    width: 100%;
  }
  .filter-tab-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
