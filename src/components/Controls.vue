<template>
  <div class="controls">
      <button class="controls__btn" @click="add">Добавить</button>
      <button class="controls__btn" @click="edit">Редактировать</button>
      <button class="controls__btn" @click="remove">Удалить</button>
  </div>
</template>

<<script>
export default {
  methods:{
      add: function(){
          this.$emit('addEmployee')
      },
      edit: function(){
          this.$emit('editEmployee')
      },
      remove: function(){
          this.$emit('removeEmployee')
      }
  }
}
</script>

<style lang="scss">

.controls{
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.controls__btn{
    margin-right: 25px;
    height: 25px;
    cursor: pointer;
}

</style>
