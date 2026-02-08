<template>
    <section id="about" class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h3 class="text-3xl font-bold mb-6">About Me</h3>
            <p class="text-gray-600 leading-relaxed">
                Currently, I work as a Project Manager.
                I am accustomed to coordinating teams to ensure that tasks are completed according to targets. I also
                monitor project progress closely, allowing me to understand how the project is running, from the team’s
                condition to on-site situations. <br><br>

                In addition to overseeing project workflows, I manage client company documents. This includes handling
                data in Excel as well as organizing both softcopy and hardcopy files. As a result, when certain
                documents are needed, I can provide them quickly, or immediately identify if any documents are missing.
                <br><br>

                <b>Why can I work in front-end and back-end development?</b> <br><br>

                In the past, I aspired to become a web programmer. However, circumstances led me down a different path.
                At that time, my technical skills were still limited, so I joined a company where my initial
                responsibility was converting documents from hardcopy to softcopy. <br><br>

                Through this experience, I began to understand how to manage data properly using Excel. One of the Excel
                features I use most frequently is lookup functions, which helped me develop strong data-handling and
                analytical skills. <br><br>

                This is a brief overview of my background.
                If you are interested in learning more about me, please feel free to review my CV for a more detailed
                overview of my skills, and contact me through the provided contact information.
            </p>
            <div class="btn-contact mt-5 grid grid-cols-2">
                <div class="relative inline-block">
                    <!-- Tombol -->
                    <button @click="toggleBubble"
                        class="bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primaryHover">
                        See My CV
                    </button>

                    <!-- Bubble dengan segitiga -->
                    <div v-if="showBubble" class="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50">
                        <!-- Kotak bubble -->
                        <div class="relative bg-gray-800 text-white text-sm text-center py-2 px-4 rounded shadow-lg">
                            Coming Soon...
                            <!-- Segitiga kecil -->
                            <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0
                  border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-800">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button @click="scrollToSection('contact')"
                        class="inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primaryHover">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
    })
}

const showBubble = ref(false);

function toggleBubble() {
    showBubble.value = true

    // Auto-hide setelah 2 detik
    setTimeout(() => {
        showBubble.value = false
    }, 2000)
}
</script>