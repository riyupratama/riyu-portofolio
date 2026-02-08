<template>
    <nav class="fixed top-0 w-full bg-white shadow z-50">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            <!-- Logo / Name -->
            <h1 @click="scrollToSection('home')" class="font-bold text-xl hover:text-primary cursor-pointer">
                Riyu R Pratama
            </h1>

            <!-- Desktop Menu -->
            <div class="space-x-6 hidden md:flex">
                <button @click="scrollToSection('about')" class="hover:text-primary">About</button>
                <button @click="scrollToSection('skills')" class="hover:text-primary">Skills</button>
                <button @click="scrollToSection('projects')" class="hover:text-primary">Projects</button>
                <button @click="scrollToSection('product')" class="hover:text-primary">Product</button>
                <button @click="scrollToSection('contact')" class="hover:text-primary">Contact</button>
            </div>

            <!-- Hamburger Button (Mobile) -->
            <button class="md:hidden focus:outline-none" @click="isOpen = !isOpen">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="isOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <Transition name="slide-down">
            <div v-if="isOpen" class="md:hidden border-t px-6 py-4 h-screen
           flex flex-col items-center space-y-7 bg-white">
                <button @click="handleClick('about')" class="w-full py-3 text-2xl text-center hover:text-primary">
                    About
                </button>
                <button @click="handleClick('skills')" class="w-full py-3 text-2xl text-center hover:text-primary">
                    Skills
                </button>
                <button @click="handleClick('projects')" class="w-full py-3 text-2xl text-center hover:text-primary">
                    Projects
                </button>
                <button @click="handleClick('product')" class="w-full py-3 text-2xl text-center hover:text-primary">
                    Product
                </button>
                <button @click="handleClick('contact')" class="w-full py-3 text-2xl text-center hover:text-primary">
                    Contact
                </button>
            </div>
        </Transition>


    </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
    })
}

const handleClick = (id) => {
    scrollToSection(id)
    isOpen.value = false
}
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
}

.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}
</style>
