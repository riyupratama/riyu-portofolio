<template>
    <section id="home" class="pt-28 min-h-screen flex items-center bg-white">
        <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 class="text-4xl md:text-5xl font-bold mb-4">
                    Hi, I'm <span class="text-primary">Riyu</span>
                </h2>
                <p class="text-xl mb-6">
                    I’m a Data Analyst who usually processes and analyzes data using Excel or spreadsheets. I can also
                    work on front-end and back-end development. Want to know more about me?
                </p>
                <button @click="scrollToSection('about')"
                    class=" inline-block bg-primary text-white px-6 py-3 rounded-xl shadow hover:bg-primaryHover">
                    Get to Know Me
                </button>
            </div>
            <div class="flex justify-center">
                <img :src="profileImg" class="d-none w-50 h-50">
            </div>
        </div>
    </section>
</template>

<script setup>
import profileImg from '@/assets/img/profile.png'

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
    })
}
</script>