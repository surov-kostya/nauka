<template>
    <div class="modal">
        <div class="modal__photo">
            <img v-show="photoExists" class="modal__img" :src="'val' +'/200/200'" alt='photo'>
        </div>
        <form @submit.prevent="formSubmit">
            <div class="modal__form" v-if="curEmpl !== null">
                <div class="modal__left">
                    <input  :value="employees[curEmpl].firstName" type="text" name="firstName" placeholder="Имя">
                    <input  :value="employees[curEmpl].lastName" type="text" name="lastName" placeholder="Фамилия">
                    <input  :value="employees[curEmpl].birthday" type="date" name="birthday" placeholder="01/01/01">
                    <select :value="employees[curEmpl].position" name="position">
                        <option value="" disabled selected>Должность</option>
                        <option value="Маркетолог">Маркетолог</option>
                        <option value="Диретор">Диретор</option>
                        <option value="Консультант">Консультант</option>
                    </select>
                    <label >Удаленная работа
                        <input :checked="employees[curEmpl].remote === 'Нет' ? false : true" type="checkbox" name="remote" placeholder="Имя">
                    </label>
                </div>
                <div class="modal__right">
                    <input :value="employees[curEmpl].address.split(', ')[0]" type="text" name="city" placeholder="Город">
                    <input :value="employees[curEmpl].address.split(', ')[1]" type="text" name="street" placeholder="Улица">
                    <input :value="employees[curEmpl].address.split(', ')[2]" type="text" name="house" placeholder="Дом">
                    <input :value="employees[curEmpl].address.split(', ')[3]" type="text" name="flat" placeholder="Квартира">
                    <input :value="employees[curEmpl].link" type="text" name="link" placeholder="Ссылка на фото http:\\vk.com\myavatar.jpg">
                </div>                
            </div>

            <div class="modal__form" v-else>
                <div class="modal__left">
                    <input  type="text" name="firstName" placeholder="Имя">
                    <input  type="text" name="lastName" placeholder="Фамилия">
                    <input  type="date" name="birthday" placeholder="01/01/01">
                    <select name="position">
                        <option value="" disabled selected>Должность</option>
                        <option value="Маркетолог">Маркетолог</option>
                        <option value="Диретор">Диретор</option>
                        <option value="Консультант">Консультант</option>
                    </select>
                    <label >Удаленная работа
                        <input type="checkbox" name="remote" placeholder="Имя">
                    </label>
                </div>
                <div class="modal__right">
                    <input type="text" name="city" placeholder="Город">
                    <input type="text" name="street" placeholder="Улица">
                    <input type="text" name="house" placeholder="Дом">
                    <input type="text" name="flat" placeholder="Квартира">
                    <input type="text" name="link" placeholder="Ссылка на фото http:\\vk.com\myavatar.jpg">
                </div>                
            </div>

            <div class="modal__btns">
                <button @click="sendBtnPress" type="submit">Отправить</button>
                <button type="reset">Очистить</button>
            </div>          
        </form>
    </div>
</template>

<script>
export default {
    props:{
        employees: Array,
        curEmpl: Number
    },
    data(){
        return{
            photoExists: false,
            form: document.querySelector('form')
        }
    },
    methods:{   
        formSubmit: function(e){            
            let newEmployee = {
                preview: e.target.link.value,            
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                birthday: e.target.birthday.value,
                position: e.target.position.value,
                remote: e.target.remote.checked,
                address: `${e.target.city.value}, ${e.target.street.value}, ${e.target.house.value}, ${e.target.flat.value}`
            }
            if (this.curEmpl === null){
                this.employees.push(newEmployee)
            } else {
                this.employees.splice(this.curEmpl, 1, newEmployee)
            }
        },
        sendBtnPress: function(){
            this.$emit('submitSent')
        }
    }
}
</script>

<style scoped lang="scss">
.modal{
    display: flex;
    border: 1px solid black;
    border-radius: 7px;
    padding: 30px 10px;
    justify-content: center;
    margin: 0 auto;
    box-shadow: 3px 3px 10px 0px;
    width:90%;
}

.modal__photo{
    display: flex;
    flex-flow:column;
    justify-content: space-between;
    margin-right: 50px;
}

.modal__form{
    display: flex;
    flex-wrap:wrap;
}

.modal__left{
    display: flex;
    flex-flow: column;
    margin-right: 50px;
}

.modal__right{
    display: flex;
    flex-flow: column;
}

input, select{
    margin-bottom: 20px;
}

button{
    margin-right: 10px;
}

.modal__photo{
    background-image: url(/src/assets/default.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 200px;
    height:200px;
}

.modal__img{
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom:0;
}

</style>
