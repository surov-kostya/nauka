<template>
  <div id="app">
    <div class="main" v-if="state.main">
      <app-controls
        @addEmployee="addEmployee"
        @editEmployee="editEmployee"
        @removeEmployee="removeEmployee"
      ></app-controls>
      <app-table :employees="employees"></app-table>      
    </div>  
    <app-modal v-else :employees="employees"></app-modal>  
  </div>
</template>

<script>
import AppTable from './components/table/Table.vue'
import AppControls from './components/Controls.vue'
import AppModal from './components/Modal.vue'
export default {
  name: 'app',
  data () {
    return {
      state:{
        main:true
      },
      employees:[]
    }
  },
  components:{
    AppTable,
    AppControls,
    AppModal
  },
  methods:{
    addEmployee: function(){
      this.state.main=false;
    },
    editEmployee: function(){
      let employees = document.querySelectorAll('.table__row')
      for (let i=0; i<=employees.length; i++){
        if (employees[i] !== undefined && employees[i].classList.contains('table__row_active')){
          
        }
      }
      this.state.main=false;      
    },
    removeEmployee: function(){
      let employees = document.querySelectorAll('.table__row')
      for (let i=0; i<=employees.length; i++){
        if (employees[i] !== undefined && employees[i].classList.contains('table__row_active')){
          this.employees.splice(i, 1);
        }
      }
      
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

.main{
  width: 90%;
  margin: 0 auto;
}
</style>
