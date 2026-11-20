<template>
    <section id="about" class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-6 text-center">
            <h3 class="text-3xl font-bold mb-6">About Me</h3>
            <p class="text-gray-600 leading-relaxed text-xl">
                Currently, I work as a Project Leader.
                I am accustomed to coordinating teams to ensure that tasks are completed according to targets. I also
                monitor project progress closely, allowing me to understand how the project is running, from the team’s
                condition to on-site situations. <br><br>

                In addition to overseeing project workflows, I manage client company documents. This includes handling
                data in Excel as well as organizing both softcopy and hardcopy files. As a result, when certain
                documents are needed, I can provide them quickly, or immediately identify if any documents are missing.
                <br><br>

                <b>Why can I work in front-end and back-end development?</b> <br><br>

                In the past, I aspired to become a web programmer. However, circumstances initially led me down a
                different path. At that time, my technical skills were still limited, so I joined a company where my
                primary responsibility was converting hardcopy documents into softcopy. <br><br>

                Through this experience, I began to understand how to manage data properly using Excel. Frequently using
                features like lookup functions helped me develop strong data-handling and analytical skills. However, my
                passion for web development never faded. I continuously honed my programming skills alongside my daily
                tasks, which is how I eventually mastered both front-end and back-end development. <br><br>

                This unique journey has made me not only a capable developer but also a meticulous data handler. If you
                are interested in learning more about me, please feel free to review my CV for a more detailed overview
                of my skills, and contact me through the provided information.
            </p>
            <div class="btn-contact mt-5 grid grid-cols-2">
                <div class="relative inline-block">
                    <button @click="showCv = true"
                        class="inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primaryHover">
                        See My CV
                    </button>
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

    <div v-if="showCv" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        @click.self="showCv = false" @keydown.esc="showCv = false" role="dialog" aria-modal="true"
        aria-label="CV Riyu Rahmat Pratama">
        <div class="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-xl">
            <div class="flex items-center justify-between border-b px-4 py-3">
                <h4 class="font-semibold">My CV</h4>
                <button @click="showCv = false" aria-label="Close CV"
                    class="rounded px-3 py-1 text-gray-700 hover:bg-gray-100">
                    Close
                </button>
            </div>
            <iframe :src="cvUrl" title="CV Riyu Rahmat Pratama" class="min-h-0 flex-1 w-full"></iframe>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import cvUrl from '@/assets/items/my-cv.pdf'

const showCv = ref(false)

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
    })
}
</script>