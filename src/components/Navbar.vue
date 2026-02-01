<template>
    <nav class="fixed top-0 w-full bg-white shadow z-50">
        <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <!-- <h1 class="font-bold text-xl">MyPortfolio</h1> -->
        <h1 @click="scrollToSection('home')" class="font-bold text-xl hover:text-primary hover:cursor-pointer">Riyu R Pratama</h1>
            <div class="space-x-6 hidden md:block">
                <button @click="scrollToSection('about')" class="hover:text-primary">About</button>
                <button @click="scrollToSection('projects')" class="hover:text-primary">Projects</button>
                <button @click="scrollToSection('product')" class="hover:text-primary">Product</button>
                <button @click="scrollToSection('contact')" class="hover:text-primary">Contact</button>
            </div>
        </div>
    </nav>
</template>

<script setup>
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>