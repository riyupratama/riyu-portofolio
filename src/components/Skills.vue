<template>
    <section id="skills" class="py-20 bg-gray-50">
        <div class="max-w-6xl mx-auto px-6">
            <!-- Title -->
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
                My Skills
            </h2>

            <!-- Skills Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                <div v-for="skill in skills" :key="skill.name" class="bg-white rounded-2xl shadow-sm hover:shadow-md transition
                 p-6 flex flex-col items-center justify-center">
                    <i :class="skill.icon" class="text-4xl mb-4"></i>
                    <p class="font-medium text-center">
                        {{ skill.name }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const skills = [
    {
        name: 'Vue.js (Front End)',
        icon: 'fa-brands fa-vuejs text-green-500',
    },
    {
        name: 'Laravel (Back End)',
        icon: 'fa-brands fa-laravel text-red-500',
    },
    {
        name: 'JavaScript',
        icon: 'fa-brands fa-js text-yellow-400',
    },
    {
        name: 'MySQL',
        icon: 'fa-solid fa-server text-purple-500'
    },
    {
        name: 'Data Analysis',
        icon: 'fa-solid fa-chart-bar text-blue-500',
    },
    {
        name: 'Excel / Spreadsheet',
        icon: 'fa-regular fa-file-lines text-green-500',
    },
    {
        name: 'Project Management',
        icon: 'fa-regular fa-folder-open text-gray-700',
    },
    {
        name: 'Document management',
        icon: 'fa-solid fa-file text-blue-700',
    },
]
</script>
