<template>
    <div class="top">
			<a href="/"><img src='fundall.png'></a>
			
		</div>
		<div  class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="content">
						<img class="padup" src='home.png'>
						<p class="padup main left" >
							<b><span class="green-text">Welcome!</span> Let’s get to know you.</b>
						</p>
						<p class="main-21 left" >
							Your first step toward a better financial lifestyle starts here.
						</p>
					</div>
				</div>
				
				<div class="col-md-1">
					
				</div>
				
				<div class="col-md-7">
					<form class="signup-form" @submit.prevent="register">
						<div class="form-group">
							<div class="row">
								<div class="col green">
									<label class="label">First Name</label>
									<input  type="text" class="input form-control" v-model="first_name" placeholder="First Name" required="required">
								</div>
								<div class="col green">
									<label class="label">Last Name</label>
									<input type="text" class="input form-control" v-model="last_name" placeholder="Last Name" required="required">
								</div>
							</div>        	
						</div>
						<div class="form-group green">
								<label class="label">Email Address</label>
							<input type="email" class="input form-control" v-model="email" placeholder="Email" required="required">
						</div>
						<div class="form-group green">
							<label>Password</label>
						<input type="password" class="input form-control" v-model="password" placeholder="Password" required="required">
						</div>
						<div class="form-group green">
							<label>Confirm Password</label>
							<input type="password" class="input form-control" v-model="confirm_password" placeholder="Confirm Password" required="required">
						</div>        
						<div class="form-group">
							<button type="submit" class="signup-btn">SIGN UP</button>
						</div>
						<p style="padding-top: 15px; text-align: center;">Already have an account? <a href="/">Login Here</a></p> 
					</form>
					<p style="padding: 33px 99px 51px 93px; text-align: center; color: #97A19D;">By clicking on Login, you agree to our <a href="#">Terms & Conditions and Privacy Policy</a></p>
				</div>
			</div>
		</div>
</template>

<script>
    export default {
		data() {
					return {
						first_name: '',
						last_name: '',
						email: '',
						password: '',
						confirm_password: ''
					}
				},

				methods: {
					register() {
						let first_name     = this.first_name
						let last_name     = this.last_name
						let email    = this.email
						let password = this.password
						let confirm_password = this.confirm_password
						this.$store
							.dispatch("REGISTER", {
								first_name,
								last_name,
								email,
								password,
								confirm_password
							})
							.then(() => this.$router.push("/dashboard"))
							.catch(err => console.log(err))
					}
				}        
	}
    
</script>