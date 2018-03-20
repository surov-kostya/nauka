<template>
  <div id="app">
    <app-table :employees="employees"></app-table>
  </div>
</template>

<script>
import AppTable from './Table.vue'
export default {
  name: 'app',
  data () {
    return {
      employees:[]
    }
  },
  components:{
    AppTable
  },
  created() {
    fetch('/src/employees.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.employees = data;
      })
      .catch((error) => {
          console.log(error);
      });
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
