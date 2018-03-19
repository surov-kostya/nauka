<template>
  <tr id="table-row">
    <!-- <td> <img v-bind:src="row.preview"> </td>
    <td> {{ row.firstName }}</td>
    <td> {{ row.lastName }}</td>
    <td> {{ row.birthday }}</td> -->
    <!-- <td> {{ bday(row.birthday) }} </td> -->
    <!-- <td> {{ row.position }}</td>
    <td> {{ row.remote }}</td>
    <td> {{ row.address }}</td> -->
  </tr>
</template>

<script>

// let eployeesList = fetch("./rows.json")
//   .then(function(respons){
//     return respons.json();
//   })

export default {
  props: {
    row: Object
  },
  data () {
    return {
      
    }
  },
  methods:{
    age(bday){
      return (new Date(Date.now() - Date.parse(bday)).getFullYear() - 1970)
    }
  }
}
</script>

<style lang="scss">

</style>
