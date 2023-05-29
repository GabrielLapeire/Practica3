<template>
  <div>
    <h1>Tareas</h1>
    <input type="text" placeholder="Añadir tarea" v-model="newTask">
    <input type="button" value="Agregar tarea" @click="addTask()"><br>
    <input type="search" placeholder="Filtrar por titulo de tareas" v-model="taskFilter">
    <TaskElement
      v-for="(task, $index) in filteredTasks"
      :key="task.id"
      :title="task.title"
      @eliminateTask="eliminateTask($index)">
    </TaskElement>
  </div>
</template>

<script>
  import toDoService from '../services/ToDoService.js';
  import TaskElement from '@/components/TaskElement';

  export default {
    name: 'TaskList',
    created() {
      // fetch('https://jsonplaceholder.typicode.com/todos')
      //   .then(respuesta => respuesta.json())
      //     .then(datos => this.taskList = datos)
      //   .catch(error => console.error(error))

      toDoService.get()
      .then(taskList => this.taskList = taskList.data);
    },
    data() {
        return {
            taskList: [],
            newTask: '',
            taskFilter: '',
        }
    },
    methods: {
      addTask() {
        this.taskList.unshift({title: this.newTask});
        this.newTask= '';
      },
      eliminateTask(indice) {
        this.taskList.splice(indice, 1);
      }
    },
    computed: {
      filteredTasks() {
        return this.taskList.filter(taskElement => {
          return taskElement.title.includes(this.taskFilter)
        })
      }
    },
    components: {
      TaskElement
    }
  }
</script>