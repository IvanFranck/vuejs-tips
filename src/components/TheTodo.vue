<template>
    <section>
        <div class="todo-container">
            <div class="todo__header">
                <h2>Todo App</h2>
                <form class="todo-form" @submit.prevent="()=>{}">
                    <div class="form-group">
                        <input 
                            placeholder="Nouvelle tâche" 
                            type="text" id="todo" 
                        >
                        <div class="action">
                            <button type="submit">Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="todo__resume">
                <p>0 tâches terminées, 0 tâches restantes</p>
            </div>

            <ul class="todo__list">
                <li>
                    <input type="checkbox" name="" id=""> <span>Faire les courses</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section{
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
    font-size: 2rem;
}

.todo-container{
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 23rem;
}

.todo__resume{
    font-size: .9rem;
    width: 100%;
}

.todo__list{
    margin-top: 12px;
    font-size: 1rem;
    list-style: none;
}


.todo__resume::after{
    position: fixed;
    margin-top: 4px;
    width: 23rem;
    content: '';
    border: 1px ridge  var(--vt-c-white-mute);
}

.form-group{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1rem;
    gap: 4px;
    overflow: hidden;
}
.form-group input{
    height: 37px;
    padding: 1px 8px;
    border: none;
    flex: 1 1 100%;
    border-radius: 4px;
    font-size: 1.1rem;
}

input:focus{
    border: none;
    outline: none;
}

.action button{
    cursor: pointer;
    font-size: 1.1rem;
    border-radius: 4px;
    height: 38px;
    padding: 0px 8px; 
    border: none;
    background-color: var(--vt-c-indigo);
    color: var(--vtc-c-white);
}

.action button:hover{
   
    background-color: #223141;
}

</style>