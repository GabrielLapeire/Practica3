<template>
  <div>
    <h1>Tareas</h1>
    <input type="text" placeholder="Añadir item" v-model="newItem">
    <input type="button" value="Agregar item" @click="addItem()"><br>
    <input type="search" placeholder="Filtrar por titulo de items" v-model="itemFilter">
    <TaskElement
      v-for="(item, $index) in filteredItems"
      :key="item.id"
      :title="item.title"
      @eliminateItem="eliminateItem($index)">
    </TaskElement>
  </div>
</template>

<script>
  import toDoService from '../services/ToDoService.js';
  import TaskElement from '@/components/TaskElement';
  import {crudItemsMixin} from '../mixins/crudItems';

  export default {
    name: 'TaskList',
    mixins: [crudItemsMixin],
    created() {
      // fetch('https://jsonplaceholder.typicode.com/todos')
      //   .then(respuesta => respuesta.json())
      //     .then(datos => this.taskList = datos)
      //   .catch(error => console.error(error))

      toDoService.get()
      .then(items => this.items = items.data);
    },
    components: {
      TaskElement
    }
  }
</script>