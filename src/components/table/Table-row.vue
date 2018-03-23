<template>
  <tr id="table-row" class="table__row" @click="activateRow">
    <td class="cell" v-for="(val, prop, i) in newRow" :key="i">
      <img class="preview-img" v-show="prop == 'preview'" :src="val" alt='preview'>
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
    resizeColumn: Function,
    ageHandler: Function
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
    }
  }
}
</script>


<style lang="scss">

.table__row:nth-child(2n){
    background-color: lighten(gray, 40%);
}

.table__body .table__row_active{
  transition: .2s;
  background-color: lighten(green, 60%);
}

.preview-img{
  width:50px;
  height: 50px;
}

</style>

