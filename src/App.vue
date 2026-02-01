<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Product />
    <Contact />
    <Footer />
  </div>
</template>


<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Product from './components/Product.vue'
</script>