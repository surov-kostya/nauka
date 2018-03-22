<template>
  <tr id="table-row" class="table__row" @click="activateRow">
    <td class="cell" v-for="(val, prop) in newRow" :key="newRow[prop]">
      <img v-show="prop == 'preview'" :src="val +'/50/50'" alt='preview'>
      <input type="checkbox" v-show="prop == 'remote'" :checked="val"/>
      <span v-show="prop !== 'preview' && prop !== 'remote' " class="cell__data">{{val}}</span>
      <span class="cell__border" @mousedown="resizeColumn"></span>
    </td>  
  </tr>
</template>


<script>

export default {
  props: {
    row: Object,
    resizeColumn: Function
  },
  data () {
    return {
    }
  },
  computed:{   
    newRow: function(){
      return {
        preview: this.row.preview,
        firstName: this.row.firstName,
        lastName: this.row.lastName,
        birthday: this.row.birthday,
        age: this.ageHandler(this.row.birthday),
        position: this.row.position,
        remote: this.row.remote === 'Нет' ? false : true,
        address: this.row.address
      }
    }
  },
  methods:{   
    activateRow: function(e){
      let siblings = document.querySelectorAll('.table__row');
      for (let i=0; i<=siblings.length; i++){
        if (siblings[i] !== undefined){
          siblings[i].classList.remove('table__row_active')
        }
      }
      e.currentTarget.classList.add('table__row_active')
    }, 
    ageHandler: function(bday){
      return (new Date(Date.now() - Date.parse(bday)).getFullYear() - 1970)
    }
  }
}
</script>


<style lang="scss">

tr{
  &:nth-child(2n){
    background-color: lighten(gray, 40%);
  }

  + .table__row_active{
    transition: .3s;
    background-color: lighten(green, 60%);
  }
}


</style>

