<template>
    <div>
      <h1>Posts</h1>
      <input type="text" placeholder="Añadir item" v-model="newItem">
      <input type="button" value="Agregar item" @click="addItem()"><br>
      <input type="search" placeholder="Filtrar por titulo de items" v-model="itemFilter">
      <ul>
        <li
          v-for="(item, $index) in filteredItems"
          :key="item.id"
          @eliminateItem="eliminateItem($index)">
          {{ item.title }}
      </li>
      </ul>
      
    </div>
  </template>
  
  <script>
    import postService from '../services/PostService.js';
    import {crudItemsMixin} from '../mixins/crudItems';
  
    export default {
      name: 'PostList',
      mixins: [crudItemsMixin],
      created() {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        //   .then(respuesta => respuesta.json())
        //     .then(datos => this.taskList = datos)
        //   .catch(error => console.error(error))
  
        postService.get()
        .then(items => this.items = items.data);
      },
    }
  </script>