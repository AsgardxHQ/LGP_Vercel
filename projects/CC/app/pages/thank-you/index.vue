<script setup lang="ts">
const answers = useFlowAnswers();

onMounted(async () => {
  try {
    await submitLead('CC', answers.value);
  } catch (error) {
    console.error('Lead submission failed', error);
  }
});

const popularCategories = [
  { label: 'Kitchen Remodel', icon: '▤', slug: 'kitchen' },
  { label: 'Gutters', icon: '⌁', slug: 'gutters' },
  { label: 'Roofing', icon: '▧', slug: 'roofing' },
  { label: 'Flooring', icon: '▥', slug: 'flooring' },
  { label: 'Windows', icon: '▣', slug: 'windows' },
  { label: 'Siding', icon: '▤', slug: 'siding' }
];

const nextSteps = [
  {
    title: 'Consultation',
    body: 'An expert will call you to discuss the next steps of your project. Please be aware that the call may come from a number you do not recognize.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=82'
  },
  {
    title: 'Cost estimate',
    body: 'Qualified pros will answer your questions about material, and go through timelines and the cost of materials and labor.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=82'
  },
  {
    title: 'Customer satisfaction',
    body: 'Our network of experts is dedicated to providing the best service for all customers. Your satisfaction is their top priority.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=82'
  }
];
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-[#242424]">
    <div class="bg-white px-[6%] pt-[23px] sm:px-[11%]">
      <p v-if="answers.category" class="mb-2 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#5f5f5f]">{{ [answers.category, answers.subcategory].filter(Boolean).join(' ') }}</p>
      <div class="relative h-1 rounded-full bg-[#e8e8e4]" aria-hidden="true">
        <div class="absolute inset-y-0 left-0 w-full rounded-full bg-[var(--cc-yellow)]" />
      </div>
    </div>
    <button class="absolute right-[5%] top-1 border-0 bg-transparent text-[26px] leading-none text-[#383838] sm:right-[10.5%]" type="button" aria-label="Close" @click="navigateTo('/')">×</button>

    <main>
      <section class="cc-container section-reveal pb-11 pt-[30px] sm:pb-11 sm:pt-9">
        <div class="mb-5 grid size-6 place-items-center rounded-full bg-[#084b86] text-[15px] leading-6 text-white" aria-hidden="true">✓</div>
        <h1 class="m-0 max-w-[700px] text-[clamp(24px,3vw,30px)] font-bold leading-tight tracking-[-0.04em]">Thank you! Your request has been received.</h1>
        <p class="mb-[31px] mt-2 text-xs text-[#5f5f5f]">We will put you in touch with an experienced professional shortly.</p>

        <div class="mb-[13px] text-[8px] font-extrabold uppercase tracking-[0.08em] text-[#07529a]">Next steps</div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-[26px]">
          <article v-for="step in nextSteps" :key="step.title">
            <img class="block h-[150px] w-full rounded-[5px] object-cover sm:h-[108px]" :src="step.image" :alt="step.title" />
            <h2 class="mb-[7px] mt-3 text-sm font-bold tracking-[-0.02em]">{{ step.title }}</h2>
            <p class="m-0 max-w-none text-[9px] leading-[1.55] text-[#696969] sm:max-w-[220px]">{{ step.body }}</p>
          </article>
        </div>
      </section>

      <section class="bg-[#f7f7f5] py-[43px] pb-[52px]">
        <div class="cc-container">
          <h2 class="mb-5 mt-0 text-base font-bold tracking-[-0.03em]">While you’re waiting, can we get you estimates for anything else?</h2>
          <div class="mb-[13px] text-[8px] font-extrabold uppercase tracking-[0.08em] text-[#07529a]">Popular categories</div>
          <div class="grid grid-cols-1 gap-[7px] sm:grid-cols-2">
            <NuxtLink v-for="category in popularCategories" :key="category.slug" :to="`/${category.slug}`" class="flex min-h-9 items-center gap-[15px] rounded-[3px] border border-[#e8e8e6] bg-white px-3 py-[7px] text-[9px] text-[#333] no-underline shadow-[0_1px_2px_#0000000a]">
              <span class="grid size-5 place-items-center text-[21px] leading-none text-[#07529a]" aria-hidden="true">{{ category.icon }}</span>
              <span>{{ category.label }}</span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-[#202020] text-[#d7d7d7]">
      <div class="cc-container grid grid-cols-2 gap-x-[18px] gap-y-7 pb-[35px] pt-[38px] sm:grid-cols-[1.35fr_repeat(3,1fr)] sm:gap-11">
        <div class="col-span-2 sm:col-span-1">
          <NuxtLink to="/" class="block font-['Space_Grotesk'] text-[15px] font-bold text-white no-underline"><span class="text-[18px] text-[#ffd000]">◆</span> CONTRACTORS<small class="text-[6px]">.COM</small></NuxtLink>
          <p class="my-[13px] mb-[17px] max-w-[150px] text-[8px] leading-[1.65]">Connecting homeowners with trusted contractors since 2010</p>
          <div class="flex gap-[7px]" aria-label="Social links"><span class="grid size-[17px] place-items-center rounded-[3px] bg-[#3b3b3b] text-[8px]">f</span><span class="grid size-[17px] place-items-center rounded-[3px] bg-[#3b3b3b] text-[8px]">𝕏</span><span class="grid size-[17px] place-items-center rounded-[3px] bg-[#3b3b3b] text-[8px]">in</span><span class="grid size-[17px] place-items-center rounded-[3px] bg-[#3b3b3b] text-[8px]">◎</span></div>
        </div>
        <div><div class="mb-[9px] inline-block min-w-[130px] border-b-2 border-[#ffd000] pb-[7px] text-[8px] font-bold uppercase text-[#ffd000]">For homeowners</div><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Find Contractors</a><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Cost Guides</a><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Project Ideas</a><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Resources</a></div>
        <div><div class="mb-[9px] inline-block min-w-[130px] border-b-2 border-[#ffd000] pb-[7px] text-[8px] font-bold uppercase text-[#ffd000]">For contractors</div><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Join our network</a><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Requirements</a><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Pricing</a></div>
        <div><div class="mb-[9px] inline-block min-w-[130px] border-b-2 border-[#ffd000] pb-[7px] text-[8px] font-bold uppercase text-[#ffd000]">Company</div><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">About</a><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Careers</a><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Contact</a><a class="my-[7px] block text-[8px] text-[#d7d7d7] no-underline" href="#">Privacy Policy</a></div>
      </div>
      <div class="cc-container border-t border-[#393939] py-[12px] text-[7px] leading-loose text-[#8e8e8e] sm:flex sm:justify-between"><span class="block">© 2025 Contractors.com. All rights reserved.</span><span class="block">Terms　 Privacy　 Cookies</span></div>
    </footer>
  </div>
</template>
