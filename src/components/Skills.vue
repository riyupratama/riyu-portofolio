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
                    <FontAwesomeIcon :icon="skill.icon" :class="['text-4xl mb-4', skill.color]" />
                    <p class="font-medium text-center">
                        {{ skill.name }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileLines, faChartBar, faFile, faDatabase, faTerminal, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faVuejs, faLaravel, faJs, faPython } from '@fortawesome/free-brands-svg-icons'

const skills = [
    {
        name: 'Excel / Spreadsheet',
        icon: faFileLines,
        color: 'text-green-500',
    },
    {
        name: 'Data Analystics',
        icon: faChartBar,
        color: 'text-blue-500',
    },
    {
        name: 'Document Control',
        icon: faFile,
        color: 'text-orange-400',
    },
    {
        name: 'Project Management',
        icon: faFolderOpen,
        color: 'text-blue-700',
    },
    {
        name: 'Vue.js (Front End)',
        icon: faVuejs,
        color: 'text-green-500',
    },
    {
        name: 'Laravel (Back End)',
        icon: faLaravel,
        color: 'text-red-500',
    },
    {
        name: 'JavaScript',
        icon: faJs,
        color: 'text-yellow-400',
    },
    {
        name: 'MySQL',
        icon: faDatabase,
        color: 'text-purple-500',
    },
    {
        name: 'PowerShell',
        icon: faTerminal,
        color: 'text-blue-600',
    },
    {
        name: 'Python',
        icon: faPython,
        color: 'text-blue-500',
    },
    {
        name: 'Prompt Engineering',
        icon: faWandMagicSparkles,
        color: 'text-purple-500',
    }
]
</script>
