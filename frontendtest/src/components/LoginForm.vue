<template>
  <form class="loginForm">
    <div class="form-group">
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
export default {};
</script>
