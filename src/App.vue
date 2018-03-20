<template>
  <div id="app">
    <app-controls
      @addEmployee="addEmployee"
      @editEmployee="editEmployee"
      @removeEmployee="removeEmployee"
    ></app-controls>
    <app-table :employees="employees"></app-table>
  </div>
</template>

<script>
import AppTable from './components/table/Table.vue'
import AppControls from './components/Controls.vue'
export default {
  name: 'app',
  data () {
    return {
      employees:[]
    }
  },
  components:{
    AppTable,
    AppControls
  },
  methods:{
    addEmployee: function(){
      
    },
    editEmployee: function(){

    },
    removeEmployee: function(){

    }
  },
  created() {
    fetch('/src/assets/employees.json')
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
  font-family: Helvetica, Arial, sans-serif;
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
