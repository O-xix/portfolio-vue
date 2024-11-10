<script setup>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';
import router from '@/router';

const formData = reactive({
    email: '',
    password: '',
});
const message = ref('');
const success = ref(false);

const submitForm = async () => {
    try {
        const response = await axios.post('/login', formData);
        console.log(response);
        localStorage.setItem('token', response.data.access_token
        );

        if (response.status === 200) {
            message.value = 'Login Successful';
            success.value = true;

            formData.email = '';
            formData.password = '';
            router.push({ name: 'home' });
        } else {
            message.value = 'Invalid login credentials';
            success.value = false;
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            message.value = 'Invalid login credentials';
        } else {
            message.value = 'An error occurred: ' + (error.response?.data.message || error.message);
        }
        success.value = false;
    }
};

// Redirect if already authenticated
onMounted(() => {
    if (localStorage.getItem('token')) {
        router.push({ name: 'home' });
    }
});
</script>

<template>
    <div class="main-container">
        <div class="h-screen items-center justify-center flex flex-col">
            <div class="block rounded-full h-32 w-32 p-8 avatar "></div>
            <form @submit.prevent="submitForm">
                <div class="my-4">
                    <input type="email" id="email" name="email"
                        class=" w-full py-2 px-3 text-[#8B8B8B] opacity-[0.4] border-b-8  border-[#ffffff] "
                        v-model="formData.email" placeholder="ENTER YOUR EMAIL*" />
                </div>
                <div class="my-4">
                    <input type="password" id="password" name="password"
                        class=" w-full py-2 px-3 text-[#8B8B8B] opacity-[0.4] border-b-8  border-[#ffffff] "
                        v-model="formData.password" placeholder="ENTER YOUR PASSWORD*" />
                </div>

                <button class="h-16 w-64 border-2 bg-[#0078ff] text-center py-4 font-bold font-xl text-white"
                    type="submit">LOGIN</button>
            </form>
            <div class="text-black inline-block px-4 py-4">Don't have an account ? <RouterLink
                    class="inline text-[#0000ff]" to="">Register now</RouterLink>
            </div>


        </div>


    </div>

</template>

<style scoped>
.main-container {
    height: 100vh;
    width: 100%;
    background-image: url('/images/bgimage.svg');
    background-position: center;
    background-size: cover;
}

.avatar {
    background-image: url('images/Ellipse.svg');
    background-position: center;
    background-size: cover;
}
</style>
