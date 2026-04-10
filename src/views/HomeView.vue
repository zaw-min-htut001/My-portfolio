<template>
  <div class="portfolio-shell">
    <PortfolioHeader :nav-items="navItems" />

    <main class="page-content">
      <HeroSection :profile="profile" :quick-stats="quickStats" :signal-tags="signalTags" />
      <TrustStrip :items="trustStrip" />
      <ExperienceSection :items="experience" />
      <AboutStackSection :strengths="strengths" :skills="skills" />
      <EducationContactSection :education="education" :profile="profile" :socials="socials" />
    </main>

    <PortfolioFooter :current-year="currentYear" />
  </div>
</template>

<script setup>
import AboutStackSection from "../components/portfolio/AboutStackSection.vue";
import EducationContactSection from "../components/portfolio/EducationContactSection.vue";
import ExperienceSection from "../components/portfolio/ExperienceSection.vue";
import HeroSection from "../components/portfolio/HeroSection.vue";
import PortfolioFooter from "../components/portfolio/PortfolioFooter.vue";
import PortfolioHeader from "../components/portfolio/PortfolioHeader.vue";
import TrustStrip from "../components/portfolio/TrustStrip.vue";
import {
  currentYear,
  education,
  experience,
  navItems,
  profile,
  quickStats,
  signalTags,
  skills,
  socials,
  strengths,
  trustStrip,
} from "../data/portfolio";
</script>
