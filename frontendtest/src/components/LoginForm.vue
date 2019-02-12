<template>
  <form class="loginForm" @submit.prevent="login">
    <div class="form-group">
      <user-email-input></user-email-input>
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="userPassEntering">
            <span class>Password</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="Your password"
            id="userPassEntering"
            class="form-control"
            type="password"
            v-validate="'required|min:8'"
            name="password"
            v-model.lazy="user.password"
          />
          <div
            class="help-block alert alert-danger"
            v-show="errors.has('password')"
          >
            {{ errors.first("password") }}
          </div>
        </div>
      </div>
    </div>
    <div class="button-group sdsd">
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </form>
</template>

<script>
import UserEmailInput from "@/components/UserEmailInput.vue";
export default {
  data() {
    return {
      user: {
        password: ""
      }
    };
  },
  components: {
    "user-email-input": UserEmailInput
  }
};
// methods: {
//   login: function {
//     this.$validator.validateAll().then(() => {
//       this.$http.post('api/user', this.user)
//       .then(Response => {
//         this.$router.push()
//       })
//     })
//   }
// }
</script>
