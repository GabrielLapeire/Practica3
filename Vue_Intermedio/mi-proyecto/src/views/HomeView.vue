<template>
  <div class="home">
    <BaseForm/>
    <TaskList/>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from '@/components/TaskList.vue'
import BaseForm from '@/components/BaseForm'

export default {
  name: 'HomeView',
  components: {
    TaskList,
    BaseForm
  }
}
</script>
