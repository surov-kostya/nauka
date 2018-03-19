<template>
  <table id="table">
    <thead>
      <th v-for="(head, key) in tableHeader" :key="key">
        {{ head }}
        <span class="cell__border" @mousedown="mouseDown"></span>
      </th>
    </thead>
    <tbody>
      <app-table-row v-for="(employee, num) in employees" 
        :key="num" 
        :row="employee"
        :mouseDown="mouseDown"
      ></app-table-row>
    </tbody>
    

  </table>
</template>

<script>

function mouseMove(e){
  
}

import AppTableRow from "./Table-row.vue"
export default {
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
      ],
      employees: [
        {
          id: 0,
          preview: "https://picsum.photos/50/50/?random",
          firstName: "Василий",
          lastName: "Игнатьев",
          birthday: "1980-04-23",
          position: "Маркетолог",
          remote: "Нет",
          address: "СПб, ул. Лени Голикова, д. 5, кв. 100"
        },
        {
          id: 1,
          preview: "https://picsum.photos/50/50?random",
          firstName: "Василий",
          lastName: "Игнатьев",
          birthday: "1980-04-23",
          position: "Маркетолог",
          remote: "Нет",
          address: "СПб, ул. Лени Голикова, д. 5, кв. 100"
        },
        {
          id: 2,
          preview: "https://picsum.photos/50/50?random",
          firstName: "Василий",
          lastName: "Игнатьев",
          birthday: "1980-04-23",
          position: "Маркетолог",
          remote: "Нет",
          address: "СПб, ул. Лени Голикова, д. 5, кв. 100"
        }
      ]
    }
  },
  methods:{
    mouseDown: function(e){
      this.cell = e.target.parentElement;
      let cellWidth = cell.offsetWidth;
      let startX = e.screenX;
      window.addEventListener('mousemove', mouseMove)
    }
  },
  components:{
    AppTableRow
  }
}
</script>

<style lang="scss">

.table__row{
  &:nth-child(2n -1){
    background-color: lighten(gray, 40%);
  }

  &:hover{
    background-color: lighten(green, 60%);
  }
}

table{
  border: 2px solid black;
  border-right: 0;
}

thead{
  background-color: lighten(gray, 20%);
}

th, td {
  position: relative;
  padding: 5px 10px 5px 5px;
}

th {
  border-bottom: 2px solid black;
}
  

.cell__border{
  position: absolute;
  right: -2px;
  top:-2px;
  bottom:-2px;
  border-right: 3px solid black;

  &:hover{
    cursor: col-resize;
  }
}

</style>
