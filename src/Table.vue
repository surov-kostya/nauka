<template>
  <table id="table">
    <thead>
      <th>Превью</th>
      <th>Имя</th>
      <th>Фамилия</th>
      <th>Дата Рождения</th>
      <th>Возраст</th>
      <th>Должность</th>
      <th>Удаленная работа</th>
      <th>Адрес проживания</th>
    </thead>
    <tbody>
      <app-table-row v-for="employee in employees" row="employee"></app-table-row>
    </tbody>
    

  </table>
</template>

<script>
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

</style>
