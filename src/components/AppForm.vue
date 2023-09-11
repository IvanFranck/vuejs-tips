<script lang="ts" setup>
import {ref, computed} from "vue"

const password = ref('')
const hasUppercase = computed(()=>{
    const uppercaseRegex = /[A-Z]/;
    return uppercaseRegex.test(password.value);
})
const hasNumber = ref(false)
const hasSpecialChar = ref(false)
const handleSubmit = () => {
    validate()
}

const validate = () => {

    // Regex pour vérifier si le mot de passe contient au moins un caractère numérique
    const numberRegex = /\d/;
    hasNumber.value = numberRegex.test(password.value);

    // Regex pour vérifier si le mot de passe contient au moins un caractère spécial
    const specialCharRegex = /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/;
    hasSpecialChar.value = specialCharRegex.test(password.value);
}
</script>

<template>
    <div class="form-container">
        <form action="" @submit.prevent="handleSubmit">
            <p> Entrer votre mot de passe</p>
            <div class="form-group">
                <input 
                    placeholder="password" 
                    type="text" id="pass" 
                    v-model="password" 
                    @input="validate"
                >
                <ul class="rules-list">
                    <li :class="{'passed': hasUppercase}">Contient au moins une majuscule</li>
                    <li :class="{'passed': hasNumber}">Contient un caratère numérique</li>
                    <li :class="{'passed': hasSpecialChar}">Contient un caractère spécial</li>
                </ul>
            </div>
            <div class="action">
                <button type="submit">Suivant</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.form-container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
}

.form-container p{
    margin-bottom: 12px;
}
.form-group{
    display: flex;
    flex-direction: column;
    justify-content: start;
    font-size: 1rem;
    gap: 4px;
}
.form-group input{
    height: 44px;
    padding: 1px 8px;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
}

input:focus{
    border: none;
    outline: none;
}

.rules-list{
    padding: 12px 20px;
}
.rules-list .passed{
    text-decoration: line-through;
    color: rgba(235, 235, 235, 0.42);
}

.action button{
    cursor: pointer;
    font-size: 1.1rem;
    border-radius: 4px;
    padding: 8px 12px;
    border: none;
    background-color: var(--vt-c-indigo);
    color: var(--vtc-c-white);
}

.action button:hover{
   
    background-color: #223141;
}
</style>