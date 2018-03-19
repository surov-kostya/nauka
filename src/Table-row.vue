<template>
  <tr id="table-row">
    <td v-for="prop in newRow"> {{prop}} <span class="border"></span> </td>
    
    <!-- <td> {{newRow.preview}} </td>
    <td class="border"></td>
    <td> {{ newRow.firstName }}</td>
    <td class="border"></td>
    <td> {{ newRow.lastName }}</td>
    <td class="border"></td>
    <td> {{ newRow.birthday }}</td>
    <td class="border"></td>
    <td> {{ newRow.age }} </td>
    <td class="border"></td>
    <td> {{ newRow.position }}</td>
    <td class="border"></td>
    <td> {{ newRow.remote }}</td>
    <td class="border"></td>
    <td> {{ newRow.address }}</td>
    <td class="border"></td> -->
  </tr>
</template>


<script>

export default {
  props: {
    row: Object
  },
  data () {
    return {
    }
  },
  computed:{
    // newPreview: function(){
    //   return `<img src='${this.row.preview}' />`
    // },
    newRow: function(){
      return {
        preview: this.row.preview,
        firstName: this.row.firstName,
        lastName: this.row.lastName,
        birthday: this.row.birthday,
        age: this.ageHandler(this.row.birthday),
        position: this.row.position,
        remote: this.row.remote,
        address: this.row.address
      }
    }
  },
  methods:{
    ageHandler: function(bday){
      return (new Date(Date.now() - Date.parse(bday)).getFullYear() - 1970)
    }
  }
}
</script>


<style lang="scss">


</style>