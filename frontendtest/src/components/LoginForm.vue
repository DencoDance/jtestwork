<template>
  <form class="loginForm" @submit="checkForm">
    <div class="form-group">
      <div v-if="errors.length">
        <b>Пожалуйста исправьте указанные ошибки:</b>
        <ul>
          <li v-for="error in errors" :key="error.id">{{ error }}</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="loginemail">
            <span class>Email</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="Your email"
            id="loginemail"
            class="form-control"
            type="email"
            v-model="email"
            name="email"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="loginpass">
            <span class>Password</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="Your password"
            id="loginpass"
            class="form-control"
            type="password"
            v-model="userPassword"
            name="userPassword"
          />
        </div>
      </div>
    </div>
    <div class="button-group sdsd">
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      email: null,
      userPassword: null
    };
  },
  methods: {
    checkForm: function(e) {
      if (this.email && this.userPassword) {
        return true;
      }
      this.errors = [];

      if (!this.email) {
        this.errors.push("Требуется указать почтовый адрес.");
      }

      if (!this.userPassword) {
        this.errors.push("Требуется указать пароль.");
      }
      e.preventDefault();
    }
  }
};
</script>
