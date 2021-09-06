<template>
<div class=" absolute w-full h-full top-0 left-0 overflow-auto">
  <div class=" absolute top-1/3 left-1/2 -ml-72 bg-gray-900 text-white p-2 rounded">
    <a class=" border mb-2 p-1 rounded-sm hover:bg-white hover:text-black" href="/">Home</a>
    <button class=" border mb-2 p-1 rounded-sm hover:bg-white hover:text-black" v-on:click="showModal = true" @click="createShow = true">Add Country</button>
    <table class=" border-collapse border">
      <thead>
        <tr>
          <th class=" border">ID</th>
          <th class=" border">Name</th>
          <th class=" border">Delete</th>
          <th class=" border">Edit</th>
        </tr>
      </thead>
      <tbody class=" text-center">
        <tr v-for="country in countries" :key="country.id">
          <td class=" border">{{ country.id }}</td>
          <td class=" border">{{ country.name }}</td>
          <td class=" border p-1">
            <button class=" hover:bg-white hover:text-black w-full" v-on:click="deleteCountry(country)">
              X
            </button>
          </td>
          <td class=" border p-1">
            <button class=" hover:bg-white hover:text-black w-full" v-on:click="fillBlanks(country)" @click="showModal = true; createShow = false">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
  <!-- modal create -->
  <div class="absolute bg-black w-screen h-screen opacity-50 z-10" v-if="showModal"/>
  <div class=" absolute top-1/4 left-1/2 -ml-32 bg-gray-900 text-white p-2 w-96 rounded z-20" v-if="showModal">
    <button class=" border mb-2 p-1 rounded-sm hover:bg-white hover:text-black" v-on:click="showModal = false" @click="clearVar()">Close</button>
    <div class="">
      <div class="text-4xl justify-center flex" v-if="createShow == true">Create</div>
      <div class="text-4xl justify-center flex" v-if="createShow == false">Edit</div>
      <div class="flex mt-5 -mx-3">
        <div class="w-full px-3">
          <label for="" class="text-xs font-semibold px-1">Название</label>
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
              type="text"
              v-model="name"
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
              placeholder="Russia"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center mt-5">
        <div class="px-3 mb-5">
          <button
            class="block hover:bg-white hover:text-black border text-white rounded-lg px-5 py-2 font-semibold ml-7"
            @click="checkFields()"
            v-if="createShow == true"
          >
            Create
          </button>
        </div>

        <div class="px-3 mb-5">
          <button
            class="block hover:bg-white hover:text-black border text-white rounded-lg px-5 py-2 font-semibold"
            @click="checkFields()"
            v-if="createShow == false"
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
      countries: null,
      showModal: false,
      createShow: false,
      name: null,
      id: null
    };
  },
  async mounted(){
      this.getCountries();
  },
  methods: {
    checkFields() {
      if (this.name == null) {
        alert("Not all fields are correct");
      } else {
        if(this.createShow == true){
          this.create();
        }else{
          this.editCountry();
        }
      }
    },
    async create(){
      const newCountry = {
        Name: this.name
      };
      let anyError = false;
      await axios
        .post("https://localhost:44302/api/country/", newCountry)
        .catch((error) => {
          anyError = true;
          alert(error.response.data.errorText);
        });

      if (!anyError) {
        this.showModal = false;
        this.createShow = false;
        this.clearVar();
        this.getCountries();
      }
    },
    async editCountry(){
      const country = {
        Id: this.id,
        Name: this.name,
      };
      let anyError = false;
      await axios
        .put("https://localhost:44302/api/country/", country)
        .catch((error) => {
          anyError = true;
          alert(error.response.data.errorText);
        });

      if (!anyError) {
        this.showModal = false;
        this.clearVar();
        this.getCountries();
      }
    },
    async deleteCountry(country)
    {
      await axios
      .delete("https://localhost:44302/api/country/" + country.id);
  
      this.countries.splice(this.countries.indexOf(country),1);
    },
    async getCountries(){
      await axios
      .get("https://localhost:44302/api/country/")
      .then(response => (this.countries = response.data));
      this.clearVar();
    },
    async fillBlanks(country){
        this.name = country.name;
        this.id = country.id;
    },
    async clearVar(){
        this.name = null;
        this.id = null;
    }
  },
};
</script>


