<template>
  <div class="form-group">
    <div class="row">
      <div class="col-sm-12 col-md-4 left">
        <label for="userEmail">
          <span class>Email</span>
        </label>
      </div>
      <div class="col-sm-12 col-md-8">
        <input
          placeholder="example@email.com"
          id="userEmail"
          class="form-control"
          type="text"
          name="email"
          v-validate="'required|email'"
          v-model="user.email"
        />
        <div class="help-block alert alert-danger" v-show="errors.has('email')">
          {{ errors.first("email") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: ""
      }
    };
  }
};
</script>
