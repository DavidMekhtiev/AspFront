<template>
<div class=" absolute w-full h-full top-0 left-0 overflow-auto">
  <div class=" absolute top-1/3 left-1/2 -ml-80 bg-gray-900 text-white p-2 rounded">
    <a class=" border mb-2 p-1 rounded-sm hover:bg-white hover:text-black" href="/">Home</a>
    <table class=" border-collapse border mt-2">
      <thead>
        <tr>
          <th class=" border">ID</th>
          <th class=" border">First name</th>
          <th class=" border">Middle name</th>
          <th class=" border">Last name</th>
          <th class=" border">Email</th>
          <th class=" border">IIN</th>
          <th class=" border">Delete</th>
          <th class=" border">Edit</th>
        </tr>
      </thead>
      <tbody class=" text-center">
        <tr v-for="admin in admins" :key="admin.Id">
          <td class=" border">{{ admin.id }}</td>
          <td class=" border">{{ admin.firstName }}</td>
          <td class=" border">{{ admin.middleName }}</td>
          <td class=" border">{{ admin.lastName }}</td>
          <td class=" border">{{ admin.email }}</td>
          <td class=" border">{{ admin.iin }}</td>
          <td class=" border p-1">
            <button class=" hover:bg-white hover:text-black w-full" v-on:click="deleteAdmin(admin)">
              X
            </button>
          </td>
          <td class=" border p-1">
            <button class=" hover:bg-white hover:text-black w-full" v-on:click="fillBlanks(admin)" @click="showModal = true">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <!-- modal edit -->
  <div class="absolute bg-black w-screen h-screen opacity-50 z-10" v-if="showModal"/>
  <div class=" absolute top-1/4 left-1/2 -ml-32 bg-gray-900 text-white p-2 w-96 rounded z-20" v-if="showModal">
    <button class=" border mb-2 p-1 rounded-sm hover:bg-white hover:text-black" v-on:click="showModal = false" @click="clearVar()">Close</button>
    <div class="">
      <div class="text-4xl justify-center flex">Edit</div>
      <div class="flex mt-5 -mx-3">
        <div class="w-full px-3">
          <label for="" class="text-xs font-semibold px-1">Почта</label>
          <div class="flex">
            <div
              class="
                w-10
                z-10
                pl-1
                text-center
                pointer-events-none
                flex
                items-center
                justify-center
              "
            >
              <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="email"
              v-model="email"
              class="
                w-full
                -ml-10
                pl-10
                pr-3
                py-2
                rounded-lg
                border-2 border-gray-200
                outline-none
                focus:border-indigo-500
                text-black
              "
              placeholder="petr_yan@example.com"
            />
          </div>
        </div>
      </div>
      <div class="flex -mx-3">
        <div class="w-full px-3">
          <label for="" class="text-xs font-semibold px-1">Имя</label>
          <div class="flex">
            <div
              class="
                w-10
                pl-1
                text-center
                pointer-events-none
                flex
                items-center
                justify-center
              "
            >
              <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              v-model="firstName"
              class="
                w-full
                -ml-10
                pl-10
                pr-3
                py-2
                rounded-lg
                border-2 border-gray-200
                outline-none
                focus:border-indigo-500
                text-black
              "
              placeholder="Давид"
            />
          </div>
        </div>
      </div>
      <div class="flex -mx-3">
        <div class="w-full px-3">
          <label for="" class="text-xs font-semibold px-1">Фамилия</label>
          <div class="flex">
            <div
              class="
                w-10
                pl-1
                text-center
                pointer-events-none
                flex
                items-center
                justify-center
              "
            >
              <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              v-model="lastName"
              class="
                w-full
                -ml-10
                pl-10
                pr-3
                py-2
                rounded-lg
                border-2 border-gray-200
                outline-none
                focus:border-indigo-500
                text-black
              "
              placeholder="Мехтиев"
            />
          </div>
        </div>
      </div>
      <div class="flex -mx-3">
        <div class="w-full px-3">
          <label for="" class="text-xs font-semibold px-1">Отчество</label>
          <div class="flex">
            <div
              class="
                w-10
                pl-1
                text-center
                pointer-events-none
                flex
                items-center
                justify-center
              "
            >
              <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              v-model="middleName"
              class="
                w-full
                -ml-10
                pl-10
                pr-3
                py-2
                rounded-lg
                border-2 border-gray-200
                outline-none
                focus:border-indigo-500
                text-black
              "
              placeholder="Низамиевич"
            />
          </div>
        </div>
      </div>
      <div class="flex -mx-3">
        <div class="w-full px-3">
          <label for="" class="text-xs font-semibold px-1">ИИН</label>
          <div class="flex">
            <div
              class="
                w-10
                pl-1
                text-center
                pointer-events-none
                flex
                items-center
                justify-center
              "
            >
              <i class="mdi mdi-lock-outline text-gray-400 text-lg"></i>
            </div>
            <input
              type="text"
              v-model="iin"
              class="
                w-full
                -ml-10
                pl-10
                pr-3
                py-2
                rounded-lg
                border-2 border-gray-200
                outline-none
                focus:border-indigo-500
                text-black
              "
              placeholder="11111111111111"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center mt-5">
        <div class="px-3 mb-5">
          <button
            class="block hover:bg-white hover:text-black border text-white rounded-lg px-5 py-2 font-semibold"
            @click="checkFields()"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      admins: null,
      showModal: false,
      email: null,
      firstName: null,
      lastName: null,
      middleName: null,
      iin: null,
      id: null
    };
  },
  async mounted(){
      this.getAdmins();
  },
  methods: {
    checkFields() {
      if (this.email == null || this.firstName == null || this.lastName == null || this.middleName == null || this.iin == null) {
        alert("Not all fields are correct");
      } else {
        this.editAdmin();
      }
    },
    async editAdmin(){
      const user = {
        Id: this.id,
        Email: this.email,
        FirstName: this.firstName,
        LastName: this.lastName,
        MiddleName: this.middleName,
        IIN: this.iin,
        RoleId: 1,
      };
      let anyError = false;
      await axios
        .put("https://localhost:44302/api/users", user)
        .catch((error) => {
          anyError = true;
          alert(error.response.data.errorText);
        });

      if (!anyError) {
        this.showModal = false;
        this.clearVar();
        this.getAdmins();
      }
    },
    async deleteAdmin(admin)
    {
      await axios
      .delete("https://localhost:44302/api/users/" + admin.id);
  
      this.admins.splice(this.admins.indexOf(admin),1);
    },
    async getAdmins(){
      await axios
      .get("https://localhost:44302/api/users/roles/1")
      .then(response => (this.admins = response.data));
      this.clearVar();
    },
    async fillBlanks(admin){
        this.email = admin.email;
        this.firstName = admin.firstName;
        this.lastName = admin.lastName;
        this.middleName = admin.middleName;
        this.iin = admin.iin;
        this.id = admin.id;
    },
    async clearVar(){
        this.email = null;
        this.firstName = null;
        this.lastName = null;
        this.middleName = null;
        this.iin = null;
    }
  },
};
</script>


