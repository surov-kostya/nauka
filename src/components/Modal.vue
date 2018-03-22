<template>
    <div class="modal">
        <div class="modal__photo">
            <img :src="'val' +'/200/200'" alt='photo'>
        </div>
        <form @submit.prevent="formSubmit">
            <div class="modal__form">
                <div class="modal__left">
                    <input  type="text" name="firstName" placeholder="Имя">
                    <input  type="text" name="lastName" placeholder="Фамилия">
                    <input  type="date" name="birthday" placeholder="01/01/01">
                    <select  name="position">
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
                    <input  type="text" name="city" placeholder="Город">
                    <input  type="text" name="street" placeholder="Улица">
                    <input  type="text" name="house" placeholder="Дом">
                    <input  type="text" name="flat" placeholder="Квартира">
                    <label> Загрузите фотографию
                        <input type="file" name="photo">
                    </label>
                </div>
                
            </div>
            <div class="modal__btns">
                <button type="submit">Отправить</button>
                <button type="reset">Очистить</button>
            </div>          
        </form>
    </div>
</template>

<script>
export default {
    props:{
        employees: Array
    },
    computed:{
        
    },
    methods:{   
        formSubmit: function(e){
            let newEmployee = {
                preview: e.target.preview.value,            
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                birthday: e.target.birthday.value,
                position: e.target.position.value,
                remote: e.target.remote.checked,
                address: `${e.target.city.value}, ${e.target.street.value}, ${e.target.house.value}, ${e.target.flat.value}`
            }
            this.employees.push(newEmployee)
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
    width: 90%;
    margin: 0 auto;
    box-shadow: 3px 3px 10px 0px;
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

</style>
