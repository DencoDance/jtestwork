<template>
  <form class="loginForm">
    <div class="form-group">
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
