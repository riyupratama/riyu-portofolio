<template>
    <section id="projects" class="py-20 bg-gray-100">
        <div class="max-w-6xl mx-auto px-6">
            <h3 class="text-3xl font-bold text-center mb-3">Projects</h3>
            <p class="text-gray-600 text-center mb-12 text-lg">Here are some of my best projects:</p>
            <div class="grid md:grid-cols-3 gap-8">
                <div v-for="project in projects" :key="project.id"
                    class="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
                    <h4 class="font-semibold text-xl mb-2">{{ project.title }}</h4>
                    <div class="relative my-6">
                        <div class="h-px bg-gray-300"></div>
                        <div
                            class="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 bg-gray-300 opacity-30 blur-md -z-10">
                        </div>
                    </div>
                    <p class="text-gray-600 text-lg mb-4">{{ project.desc }}</p>
                </div>
            </div>

            <div class="mt-16">
                <h4 class="text-2xl font-bold text-center mb-8">Other Projects I’ve Worked On</h4>
                <div class="flex items-center gap-3">
                    <button @click="slideProjects(-1)" aria-label="Slide projects left"
                        class="shrink-0 rounded-full bg-white px-4 py-2 shadow hover:bg-gray-50">
                        &#8592;
                    </button>
                    <div ref="projectSlider"
                        class="project-slider flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3"
                        aria-label="Other project organizations">
                        <div v-for="project in handledProjects" :key="project.name"
                            class="flex min-w-[75%] snap-start flex-col items-center justify-center rounded-2xl bg-white p-5 shadow-sm sm:min-w-[40%] md:min-w-[28%]">
                            <img :src="project.image" :alt="`${project.name} logo`"
                                class="h-36 w-full object-contain">
                            <p class="mt-4 text-center font-medium text-gray-700">{{ project.name }}</p>
                        </div>
                    </div>
                    <button @click="slideProjects(1)" aria-label="Slide projects right"
                        class="shrink-0 rounded-full bg-white px-4 py-2 shadow hover:bg-gray-50">
                        &#8594;
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { ref } from 'vue'
import supremeEnergyImg from '@/assets/img/project-handle 1.jpeg'
import sefasImg from '@/assets/img/project-handle 2.jpeg'
import nsheImg from '@/assets/img/project-handle 3.jpeg'
import batubaraBelsImg from '@/assets/img/project-handle 4.jpeg'
import guerlainImg from '@/assets/img/project-handle 5.jpeg'
import exortDigitalImg from '@/assets/img/project-handle 6.jpeg'
import kemenagImg from '@/assets/img/project-handle 7.jpeg'

const projectSlider = ref(null)

const projects = [
    { id: 1, title: 'PT Shell Indonesia', desc: 'Responsible for managing all site licensing documents, including both archived and newly created records, as well as handling incoming and outgoing letters.', link: '#' },
    { id: 2, title: 'PT North Sumatera Hydro Energy', desc: 'Provide guidance to clients on how to use the company’s applications, perform application testing to ensure stable performance, and assist in identifying and resolving application bugs.Dashboard admin responsive.', link: '#' },
    { id: 3, title: 'RSUD Ciawi', desc: 'Manage team workflows for media conversion projects, monitor field conditions, and track team performance to ensure all targets are met successfully.', link: '#' }
]

const handledProjects = [
    { name: 'Supreme Energy', image: supremeEnergyImg },
    { name: 'Sefas', image: sefasImg },
    { name: 'North Sumatera Hydro Energy', image: nsheImg },
    { name: 'Law Office Batubara & Bels', image: batubaraBelsImg },
    { name: 'Guerlain', image: guerlainImg },
    { name: 'Exort Digital', image: exortDigitalImg },
    { name: 'Kementerian Agama', image: kemenagImg },
]

const slideProjects = (direction) => {
    projectSlider.value?.scrollBy({
        left: direction * projectSlider.value.clientWidth * 0.8,
        behavior: 'smooth',
    })
}
</script>

<style scoped>
.project-slider {
    scrollbar-width: none;
}

.project-slider::-webkit-scrollbar {
    display: none;
}
</style>