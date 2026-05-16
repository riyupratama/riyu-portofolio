<template>
    <section id="dummy-projects" class="py-20 bg-gray-50">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid gap-10 lg:grid-cols-[1.1fr_1.3fr] items-center">
                <div class="space-y-6">
                    <span
                        class="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                        My Dummy Projects
                    </span>

                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Screenshot Project
                    </h2>

                    <p class="max-w-2xl text-lg leading-8 text-gray-600">
                        Below are three examples of my Excel projects, delivered with precision, clarity, and
                        professionalism.
                    </p>

                </div>
                <ProductScreenshots :screenshots="screenshots" @open-screenshot="openScreenshot" />

            </div>
        </div>

        <!-- Modal -->
        <Teleport to="body">
            <div v-if="selectedScreenshot" @click.self="closeScreenshot"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div class="relative w-full max-w-3xl bg-white rounded-lg shadow-xl max-h-[90vh] flex flex-col">
                    <button @click="closeScreenshot"
                        class="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 z-10 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div class="overflow-y-auto flex-1">
                        <img :src="selectedScreenshot.src" :alt="selectedScreenshot.title" class="w-full h-auto" />
                    </div>
                    <div class="p-6 text-center border-t border-gray-200">
                        <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedScreenshot.title }}</h3>
                        <p class="text-gray-600">{{ selectedScreenshot.desc }}</p>
                    </div>
                </div>
            </div>
        </Teleport>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductScreenshots from '@/components/ProductScreenshots.vue'
import screenshot1 from '@/assets/img/project-1.png'
import screenshot2 from '@/assets/img/project-2.png'
import screenshot3 from '@/assets/img/project-3.png'

const selectedScreenshot = ref(null)

const screenshots = [
    {
        title: 'Data Migration & Validation',
        desc: 'Migrated unstructured data from MS Word into Excel, cleaned formatting errors, and eliminated duplicate entries to ensure 100% data integrity.',
        src: screenshot1,
    },
    {
        title: 'Data Parsing & Advanced Structuring',
        desc: 'Successfully separated complex, comma-delimited raw data from a single column into multiple dedicated columns, significantly improving data readability.',
        src: screenshot2,
    },
    {
        title: 'Data Summarization via Pivot Tables',
        desc: 'Transformed extensive, unorganized raw datasets into concise, interactive Pivot Tables to enable efficient analysis and data-driven insights.',
        src: screenshot3,
    },
]

const openScreenshot = (screenshot) => {
    selectedScreenshot.value = screenshot
}

const closeScreenshot = () => {
    selectedScreenshot.value = null
}
</script>