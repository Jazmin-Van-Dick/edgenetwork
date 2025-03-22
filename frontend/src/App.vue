<template>
  <main class="bg-[#f6f6f6] flex h-svh overflow-hidden">
    <Sidebar />

    <section class="flex-1 px-8 pt-8 pb-24 overflow-auto">
      <div class="pb-6 mb-6 border-b-1 border-[#00000010]">
        <h1 class="text-3xl font-bold md:text-4x text-black">Analytics</h1>
      </div>

      <!-- Draggable Charts Grid -->
      <draggable
        v-model="charts"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        item-key="id"
        animation="300"
        handle=".drag-handle"
        @end="reinitializeCharts"
      >
        <template #item="{ element }">
          <div class="bg-white p-4 rounded-4xl border border-gray-100 shadow-2xs">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold">{{ element.title }}</h2>
              <span class="drag-handle cursor-move text-gray-400">&#9776;</span>
            </div>
            <canvas :ref="(el) => setChartRef(el, element.id)" ></canvas>
          </div>
        </template>
      </draggable>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import { Chart } from "chart.js/auto";
import Sidebar from "./components/Sidebar.vue";
import draggable from "vuedraggable";

const chartRefs = ref({});
const chartInstances = ref({});
const charts = ref([]);

// Fetch data from Node.js API
const fetchChartData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/analytics");
    const data = await response.json();
    charts.value = data.charts;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Assign canvas refs dynamically
const setChartRef = (el, id) => {
  if (el) chartRefs.value[id] = el;
};

// Initialize Charts
const initializeCharts = async () => {
  await nextTick();

  charts.value.forEach((chart) => {
    const ctx = chartRefs.value[chart.id];

    if (!ctx) return;
    if (chartInstances.value[chart.id]) {
      chartInstances.value[chart.id].destroy();
    }

    chartInstances.value[chart.id] = new Chart(ctx, {
      type: chart.type,
      data: {
        labels: chart.labels,
        datasets: [chart.dataset]
      }
    });
  });
};

// Fetch data and initialize charts on mount
onMounted(async () => {
  await fetchChartData();
  initializeCharts();
});
</script>