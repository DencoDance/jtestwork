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
          <label for="loginfirstname">
            <span class>Fistname</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="John"
            id="loginfirstname"
            class="form-control"
            type="text"
            v-model="firstName"
            name="firstName"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="loginlastname">
            <span class>Lastname</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="Doe"
            id="loginlastname"
            class="form-control"
            type="text"
            v-model="secondName"
            name="secondName"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="birthDate">
            <span class>Date of Birth</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            id="birthDate"
            class="form-control"
            type="date"
            v-model="age"
            name="age"
            min="0"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="loginemail">
            <span class>Email</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="example@exaple.com"
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
          <label for="loginphone">
            <span class>Phone</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="+38(090) 999 99 99"
            id="loginphone"
            class="form-control"
            type="tel"
            v-model="userNumber"
            name="userNumber"
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
            placeholder="min 8 digits"
            id="loginpass"
            class="form-control"
            type="password"
            v-model="userPassword"
            name="userPassword"
          />
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-12 col-md-4 left">
          <label for="loginpass">
            <span class>Confirm password</span>
          </label>
        </div>
        <div class="col-sm-12 col-md-8">
          <input
            placeholder="min 8 digits"
            id="loginpass"
            class="form-control"
            type="password"
            v-model="userConfirmPassword"
            name="userConfirmPassword"
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
      firstName: null,
      secondName: null,
      email: null,
      userNumber: null,
      userPassword: null,
      userConfirmPassword: null
    };
  },
  methods: {
    checkForm: function(e) {
      if (
        this.firstName &&
        this.age &&
        this.secondName &&
        this.email &&
        this.userNumber &&
        this.userPassword &&
        this.userPassword == this.userConfirmPassword
      ) {
        return true;
      }

      this.errors = [];

      if (!this.firstName) {
        this.errors.push("Требуется указать имя.");
      }
      if (!this.age) {
        this.errors.push("Требуется указать возраст.");
      }
      if (!this.secondName) {
        this.errors.push("Требуется указать фамилию.");
      }
      if (!this.email) {
        this.errors.push("Требуется указать почтовый адрес.");
      }
      if (!this.userNumber) {
        this.errors.push("Требуется указать номер телефона.");
      }
      if (!this.userPassword) {
        this.errors.push("Требуется указать пароль.");
      }
      if (this.userPassword !== this.userConfirmPassword) {
        this.errors.push("Пароли не совпадают.");
      }

      e.preventDefault();
    }
  }
};
</script>
