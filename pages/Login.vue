<template>
  <div class="justify-center flex">
    <div class="w-1/3 mt-10">
      <div class="text-4xl justify-center flex">Authorization</div>
      <div class="flex mt-5 -mx-3">
        <div class="w-full px-3 mb-5">
          <label for="" class="text-xs font-semibold px-1">Email</label>
          <div class="flex">
            <div class="w-10 pl-1 text-center flex items-center justify-center">
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
              "
              placeholder="lelouch_vi_britania@example.com"
            />
          </div>
        </div>
      </div>
      <div class="flex -mx-3">
        <div class="w-full px-3">
          <label for="" class="text-xs font-semibold px-1">Password</label>
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
              type="password"
              v-model="password"
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
              "
              placeholder="************"
            />
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center mt-5">
        <div class="px-3 mb-5">
          <button
            class="
              block
              bg-blue-700
              hover:bg-blue-500
              text-white
              rounded-lg
              px-5
              py-2
              font-semibold
            "
            @click="checkFields()"
          >
            SIGN IN
          </button>
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
      email: null,
      password: null,
    };
  },
  methods: {
    checkFields() {
      if (this.email == null || this.password == null) {
        alert("All fields must be filed in");
      } else {
        this.login();
      }
    },
    async login() {
      let anyError = false;
      const user = {
        Email: this.email,
        Password: this.password,
      };
      const resp = await axios
        .post("https://localhost:44302/login",user)
        .catch((error) => {
          anyError = true;
          alert(error.response.data.errorText);
        });
      if (!anyError) {
        console.log(resp.data);
        this.$router.push({ path: '/' , params: { auth: resp.data }});
      }
    },
  },
};
</script>
