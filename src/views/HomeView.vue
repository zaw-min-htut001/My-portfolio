<template>
  <div class="portfolio-shell">
    <!-- Animated background orbs -->
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>

    <PortfolioHeader :nav-items="navItems" />

    <main class="page-content">
      <HeroSection :profile="profile" :quick-stats="quickStats" :signal-tags="signalTags" />
      <TrustStrip :items="trustStrip" />
      <ExperienceSection :items="experience" />
      <EducationContactSection :education="education" :profile="profile" :socials="socials" />
    </main>

    <PortfolioFooter :current-year="currentYear" />
  </div>
</template>

<script setup>
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
  socials,
  trustStrip,
} from "../data/portfolio";
</script>
