<template>
  <div>
    <h3>
      {{ title }}
      <button @click="$emit('eliminateTask')">Eliminar</button>
    </h3>
  </div>
</template>

<script>
  export default {
    name: 'TaskElement',
    props: ['title']
  }
</script>