<script setup lang="ts">
import { ref } from 'vue'
import { useFlowAnswers } from '../utils/usePageFlow'

definePageMeta({
  layout: false
})

const questionModalOpen = ref(false)
const answers = useFlowAnswers()

answers.value = {
  zipcode: '',
  category: '',
  categoryId: '',
  subcategory: '',
  subcategoryId: '',
  ownership: '',
  fullName: '',
  email: '',
  phone: '',
  address: ''
}
</script>

<template>
  <div class="cc-site bg-[var(--cc-cream)] text-[var(--cc-charcoal)]">
    <LandingHeroSection @open-question-modal="questionModalOpen = true" />
    <LandingTrustStripSection />
    <LandingConfidenceSection />
    <LandingStatsBannerSection />
    <LandingStepsSection />
    <LandingProjectsSection />
    <LandingResourcesSection />
    <LandingCtaSection />
    <LandingSiteFooter />
    <LandingQuestionModal :open="questionModalOpen" @close="questionModalOpen = false" />
  </div>
</template>
