<template>
  <div class="collapsable-group">
    <collapsable v-for="(m, i) in messages" :key="`m-${i}`">
        <template v-slot:title>
          {{ m.title }}
        </template>
        <template v-slot:content>
          <p>
            {{ m.content }}
          </p>
        </template>
    </collapsable>
  </div>
</template>

<script setup>
import Collapsable from './Collapsable.vue';
import { defineProps } from 'vue';

defineProps({
    messages: Array
});

</script>

<style>

</style>