<template>
  <table id="table">
    <thead>
      <th>Превью<span class="border"></span></th>
      <th>Имя<span class="border"></span></th>
      <th>Фамилия<span class="border"></span></th>
      <th>Дата Рождения<span class="border"></span></th>
      <th>Возраст<span class="border"></span></th>
      <th>Должность<span class="border"></span></th>
      <th>Удаленная работа<span class="border"></span></th>
      <th>Адрес проживания<span class="border"></span></th>
    </thead>
    <tbody>
      <app-table-row v-for="employee in employees" :key="employees[employee]" :row="employee"></app-table-row>
    </tbody>
    

  </table>
</template>

<script>

// let eployeesList = fetch("./rows.json")
//   .then(function(respons){
//     return respons.json();
//   })

import AppTableRow from "./Table-row.vue"
export default {
  data () {
    return {
      employees: [
        {
          preview: "https://picsum.photos/50/50/?random",
          firstName: "Василий",
          lastName: "Игнатьев",
          birthday: "1980-04-23",
          position: "Маркетолог",
          remote: "Нет",
          address: "СПб, ул. Лени Голикова, д. 5, кв. 100"
        },
        {
          preview: "https://picsum.photos/50/50?random",
          firstName: "Василий",
          lastName: "Игнатьев",
          birthday: "1980-04-23",
          position: "Маркетолог",
          remote: "Нет",
          address: "СПб, ул. Лени Голикова, д. 5, кв. 100"
        },
        {
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
  components:{
    AppTableRow
  }
}
</script>

<style lang="scss">

table{
  border: 2px solid black;
  border-right: 0;
}

th, td {
  position: relative;
  padding: 5px 10px 5px 5px;
}

th {
  border-bottom: 2px solid black;
}
  

.border{
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
