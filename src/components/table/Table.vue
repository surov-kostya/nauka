<template>
  <table id="table">
    <thead>
      <th v-for="(head, key) in tableHeader" 
          :key="key" 
          @click="sortTable">
        {{ head }}
        <span class="cell__border" @mousedown="resizeColumn"></span>
      </th>
    </thead>
    <tbody class="table__body">
      <app-table-row v-for="(employee, num) in employees" 
        :key="num" 
        :row="employee"
        :resizeColumn="resizeColumn"
        :ageHandler="ageHandler"
      ></app-table-row>
    </tbody>
  </table>
</template>

<script>

import AppTableRow from "./Table-row.vue"
export default {
  props:{
    employees: Array
  },
  data () {
    return {
      tableHeader:[
        "Превью",
        "Имя", 
        "Фамилия", 
        "Дата рождения", 
        "Возраст", 
        "Должность",
        "Удаленная работа",
        "Адрес проживания"
      ]
    }
  },
  methods:{
    resizeColumn: function(e){
      let cell = e.target.parentElement;
      let cellWidth = cell.offsetWidth;
      let startX = e.screenX;

      function mouseMove(e){
        let currentX = e.screenX;
        let newCellWidth = cellWidth + currentX - startX;
        cell.style.width = newCellWidth + 'px';
      };

      window.addEventListener('mousemove', mouseMove);

      window.addEventListener('mouseup', ()=>{
        window.removeEventListener('mousemove', mouseMove);
      })
    },
    sortTable: function(e){
      switch (e.target.innerText) {
        case "Имя":
          this.employees.sort((a, b)=>{
            return a.firstName < b.firstName ? -1 : 1;
          });
          break;
        case "Фамилия":
          this.employees.sort((a, b)=>{
            return a.lastName < b.lastName ? -1 : 1;
          });
          break;
        case "Дата рождения":
          this.employees.sort((a, b)=>{
           return a.birthday < b.birthday ? -1 : 1;
          });
          break;
        case "Возраст":
          this.employees.sort((a, b)=>{
            return this.ageHandler(a.birthday) < this.ageHandler(b.birthday) ? -1 : 1;
          });
          break;
        case "Должность":
          this.employees.sort((a, b)=>{
            return a.position < b.position ? -1 : 1;
          });
          break;
        case "Удаленная работа":
          this.employees.sort((a, b)=>{
            return a.remote < b.remote ? -1 : 1;
          });
          break;
        case "Адрес проживания":
          this.employees.sort((a, b)=>{
            return a.address < b.address ? -1 : 1;
          });
          break;
      }
    },
    ageHandler: function(bday){
      return (new Date(Date.now() - Date.parse(bday)).getFullYear() - 1970)
    }
  },
  components:{
    AppTableRow
  }
}
</script>

<style lang="scss">



table{
  border-collapse: collapse;
  border: 1px solid black;
  border-right: 0;
  box-shadow: 3px 3px 10px 0px;
  margin-bottom: 50px;
}

thead{
  background-color: lighten(gray, 20%);
}

th, td {
  position: relative;
  padding: 5px;
  cursor: pointer;
}

th {
  border-bottom: 2px solid black;
}

.cell__border{
  position: absolute;
  right: -2px;
  top:-1px;
  bottom:-2px;
  border-right: 2px solid black;
  padding-right:5px;

  &:hover{
    cursor: col-resize;
  }
}

</style>
