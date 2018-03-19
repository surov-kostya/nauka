<template>
  <tr id="table-row" :class="'table__row table__row_' + rowId" >
    <td class="cell" v-for="(val, prop) in newRow" :key="newRow[prop]">
      <img v-show="prop == 'preview'" :src="val">
      <span v-show="prop !== 'preview'" class="cell__data">{{val}}</span>
      <span class="cell__border" @mousedown="mouseDown"></span>
    </td>
    
  </tr>
</template>


<script>

export default {
  props: {
    row: Object,
    mouseDown: Function
  },
  data () {
    return {
    }
  },
  computed:{    
    rowId: function(){
      return this.row.id
    },
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