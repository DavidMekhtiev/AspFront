<template>
    <div class="left-0 w-32 bg-gray-900 h-screen">
        <a href="http://localhost:3000/">
            <div class="pt-4 pl-9 hover:bg-gray-800">
            <img src="https://img.icons8.com/ios/50/ffffff/home--v1.png"/>
            <span class=" text-white ml-1">Home</span>
            </div>
        </a>
        <a href="">
            <div class="pt-4 pl-9 hover:bg-gray-800">
            <img src="https://img.icons8.com/ios/50/ffffff/conference-call--v1.png"/>
            <span class=" text-white -ml-1">Teachers</span>
            </div>
        </a>
        <a href="">
            <div class="pt-4 pl-9 hover:bg-gray-800">
            <img src="https://img.icons8.com/ios/50/ffffff/students.png"/>
            <span class=" text-white -ml-1">Students</span>
            </div>
        </a>
        <a href="">
            <div class="pt-4 pl-9 hover:bg-gray-800">
            <img src="https://img.icons8.com/ios/50/ffffff/city-buildings.png"/>
            <span class=" text-white">Centers</span>
            </div>
        </a>
        <button v-on:click="test" class="text-white">Test</button>
    </div>
    
</template>

<script>
import axios from "axios";
export default {
    props: ['auth'],
    data() {
        return {
        
        };
    },
    async mounted(){
    },
    methods: {
        test(){
            console.log(this.$props);
        }
    },
};
</script>
