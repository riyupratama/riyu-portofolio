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
        </div>
    </section>
</template>


<script setup>
const projects = [
    { id: 1, title: 'PT Shell Indonesia', desc: 'Responsible for managing all site licensing documents, including both archived and newly created records, as well as handling incoming and outgoing letters.', link: '#' },
    { id: 2, title: 'PT North Sumatera Hydro Energy', desc: 'Provide guidance to clients on how to use the company’s applications, perform application testing to ensure stable performance, and assist in identifying and resolving application bugs.Dashboard admin responsive.', link: '#' },
    { id: 3, title: 'RSUD Ciawi', desc: 'Manage team workflows for media conversion projects, monitor field conditions, and track team performance to ensure all targets are met successfully.', link: '#' }
]
</script>