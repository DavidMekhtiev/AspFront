<template>
    <div class=" absolute w-full h-full top-0 left-0 overflow-auto">
        <!-- Admin home page -->
        <div v-if="role == 'Admin'" class="grid grid-cols-3 w-96 bg-gray-900 h-80 absolute top-1/3 left-1/2 -ml-56 rounded">
            <a href="/teachers">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/conference-call--v1.png"/>
                    <span class=" text-white -ml-1">Teachers</span>
                </div>
            </a>
            <a href="/students">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/students.png"/>
                    <span class=" text-white -ml-1">Students</span>
                </div>
            </a>
            <a href="/centers">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/city-buildings.png"/>
                    <span class=" text-white">Centers</span>
                </div>
            </a>
            <a href="/roles">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/collaborator-male.png"/>
                    <span class=" text-white ml-2">Roles</span>
                </div>
            </a>
            <a href="/cities">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/skyscrapers.png"/>
                    <span class=" text-white ml-1">Cities</span>
                </div>
            </a>
            <a href="/countries">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/australia-country.png"/>
                    <span class=" text-white -ml-1">Countries</span>
                </div>
            </a>
            <button class="col-span-3" @click="logout()">
                <div class="pt-4 pl-44 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/export.png"/>
                    <span class=" text-white -ml-44">Logout</span>
                </div>
            </button>
        </div>

        <!-- Teacher home page -->
        <div v-if="role == 'Teacher'" class="grid grid-cols-2 w-96 bg-gray-900 h-48 absolute top-1/3 left-1/2 -ml-56 rounded">
            <a href="/students">
                <div class="pt-4 pl-16 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/students.png"/>
                    <span class=" text-white -ml-1">Students</span>
                </div>
            </a>
            <a href="/centers">
                <div class="pt-4 pl-16 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/city-buildings.png"/>
                    <span class=" text-white">Centers</span>
                </div>
            </a>
            <button class="col-span-2" @click="logout()">
                <div class="pt-4 pl-44 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/export.png"/>
                    <span class=" text-white -ml-44">Logout</span>
                </div>
            </button>
        </div>


        <!-- Owner home page -->
        <div v-if="role == 'Owner'" class="grid grid-cols-3 w-96 bg-gray-900 h-96 absolute top-1/3 left-1/2 -ml-56 rounded">
            <a href="/teachers">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/conference-call--v1.png"/>
                    <span class=" text-white -ml-1">Teachers</span>
                </div>
            </a>
            <a href="/students">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/students.png"/>
                    <span class=" text-white -ml-1">Students</span>
                </div>
            </a>
            <a href="/centers">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/city-buildings.png"/>
                    <span class=" text-white">Centers</span>
                </div>
            </a>
            <a href="/roles">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/collaborator-male.png"/>
                    <span class=" text-white ml-2">Roles</span>
                </div>
            </a>
            <a href="/cities">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/skyscrapers.png"/>
                    <span class=" text-white ml-1">Cities</span>
                </div>
            </a>
            <a href="/countries">
                <div class="pt-4 pl-9 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/australia-country.png"/>
                    <span class=" text-white -ml-1">Countries</span>
                </div>
            </a>
            <a href="/admins" class=" col-span-3">
                <div class="pt-4 pl-40 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/conference-call--v1.png"/>
                    <span class=" text-white -ml-1">Admins</span>
                </div>
            </a>
            <button class="col-span-3" @click="logout()">
                <div class="pt-4 pl-44 hover:bg-gray-800">
                    <img src="https://img.icons8.com/ios/50/ffffff/export.png"/>
                    <span class=" text-white -ml-44">Logout</span>
                </div>
            </button>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
    data() {
        return {
            role: null
        };
    },
    async mounted(){
        this.checkAuth();
    },
    methods: {
        async logout(){
            localStorage.removeItem('token');
            this.checkAuth();
        },
        async checkAuth(){
            if(localStorage.token !== undefined){
                this.role = localStorage.role;
            }else{
                this.$router.push({ path: '/login' });
            }
        }
    },
};
</script>
