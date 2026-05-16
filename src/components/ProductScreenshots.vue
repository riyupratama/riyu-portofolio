<template>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button v-for="screenshot in screenshots" :key="screenshot.title" @click="emit('open-screenshot', screenshot)"
            class="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg cursor-pointer text-left">
            <img :src="screenshot.src" :alt="screenshot.title"
                class="h-56 w-full object-cover transition duration-300" />
            <div class="space-y-2 p-4">
                <h3 class="text-base font-semibold text-gray-900">{{ screenshot.title }}</h3>
                <p class="text-sm text-gray-600">{{ screenshot.desc }}</p>
            </div>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    screenshots: {
        type: Array,
        required: true,
    },
})

const emit = defineEmits(['open-screenshot'])
</script>
