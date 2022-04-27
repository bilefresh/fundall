<template>

	<div class="top">
			<a href="/"><img src='fundall.png'></a>
			
		</div>
		<div  class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="content">
						<img class="padup" src='login.png'>
						<p class="padup main left" >
							<b><span class="green-text">Welcome back! </span>
							<br/>
							We miss you.</b>
						</p>
					</div>
				</div>
				
				<div class="col-md-1">
					
				</div>
				
				<div class="col-md-7">
					<form class="signup-form" @submit.prevent="login">
						<p class="main-34">Holla</p>
						<p class="main-20">Sign in to the vibe!</p>
						<br /><br />
						<div class="form-group green">
								<label class="label">Email Address</label>
							<input type="email" class="input form-control" v-model="email" placeholder="Email" required="required">
						</div>
						<div class="form-group green">
							<label>Password</label>
						<input type="password" class="input form-control" v-model="password" placeholder="Password" required="required">
						</div>       
						<div class="form-group">
							<button type="submit" class="signup-btn">LOGIN</button>
						</div>
						<p style="padding-top: 15px; text-align: center;">Don’t have an account?  <a href="sign-up.html">Register Here</a></p> 
						<p style="text-align: center; color: #97A19D;">By clicking on Login, you agree to our <a href="#">Terms & Conditions and Privacy Policy</a></p>
					</form>
					
				</div>
			</div>
		</div>
</template>

<script>
  export default {
	
    data() {
      return {
        email: '',
        password: ''
      }
    },
	//this.$router.push("/dashboard")
	methods: {
      login() {
        let email    = this.email
        let password = this.password
        this.$store
          .dispatch("LOGIN", {
            email,
            password
          })
          .then(() =>this.$router.push({name: 'Dashboard', params: {firstname: 'Farouk', lastname: 'Tried'}}))
          .catch(err => console.log(err))
      }
    }
    

  }
</script>