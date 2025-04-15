<template>
  <div
    id="bar-container"
    class="relative w-full bg-gradient-to-br from-fia-yellow/10 to-fia-red/10 border-2 border-fia-yellow/40 rounded-xl px-4 py-3"
    :style="{ height: `${containerHeight}px` }"
  >
    <Bar v-if="mounted" id="bar" class="relative" :options="chartOptions" :data="chartData" />
    <div v-else class="w-full h-full flex items-center justify-center">
      <span class="text-fia-yellow text-xl font-bold">Updating chart...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Bar } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const mounted = ref(true)

const chartData = ref({
  labels: [
    'Respite In-home',
    'Caregiver Canines',
    'Handyman/Yardwork',
    'Friendly Visit',
    'Dental',
    'Social Activity',
    'Housekeeping',
    'Respite Drop-In',
    'Grocery Shopping For',
    'Errands',
    'Hairdresser/Barber',
    'Telephone Reassurance',
    'Grocery Trip',
    'Medical',
  ],
  datasets: [
    {
      label: 'Services Provided',
      data: [22, 72, 96, 147, 216, 318, 356, 635, 651, 659, 832, 962, 3953, 7829],
      backgroundColor: '#efc600',
    },
  ],
})

const containerHeight = computed(() => {
  const baseHeight = 80
  const heightPerItem = 30
  return baseHeight + (chartData.value.labels.length * heightPerItem)
})

const chartOptions = ref({
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Total Services: 16,743',
      font: {
        size: 18,
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
  },
})

function remountChart() {
  mounted.value = true
}

function useDebounceFn(fn, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

const debouncedRemountChart = useDebounceFn(remountChart, 300)

onMounted(() => {
  window.addEventListener('resize', () => {
    mounted.value = false
    debouncedRemountChart()
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    mounted.value = false
    debouncedRemountChart()
  })
})
</script>
