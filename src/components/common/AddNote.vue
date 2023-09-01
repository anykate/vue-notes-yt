<script setup>
import { ref } from 'vue'
const title = ref('')
const content = ref('')
const handleForm = (e) => {
    console.log('form-submitted')
}
</script>

<template>
    <div class="rs__notes-content">
        <form @submit.prevent="handleForm">
            <input
                type="text"
                class="rs__input-title"
                placeholder="Note title..."
                v-model="title"
            />
            <textarea
                id="content"
                v-model="content"
                placeholder="Note Content..."
            />
            <button
                type="submit"
                class="rs__form-save-btn"
            >
                <span class="material-symbols-outlined">save</span>
            </button>
        </form>
    </div>
</template>
