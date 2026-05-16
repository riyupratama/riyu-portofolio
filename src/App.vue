<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Product />
    <DummyProjects />
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
import DummyProjects from './components/DummyProjects.vue'
import Skills from './components/Skills.vue'
import Product from './components/Product.vue'
</script>