<style scoped>
#app{
	background: #FCFBFC;
	border: 10px solid #FFFFFF;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
	border-radius: 40px;
	margin: 87px 64px 88px;
	padding: 35px 88px 125px 66px;
	height: 849px;
}
ul{
margin-bottom: 0;
}
</style>

<template>
			<div  class="container" >
				<div class="row">
					<div class="col-md-5">
					<div class="top">
				<a href="/"><img src='fundall.png'></a>
  
			</div>
						<div class="contact-info">
							<div class="contact-details">
								<img class="contact-img" src="avatar.png"/>
								<span style="display:block">
									<p class="no-mb main-28" >{{user.success.data.firstname}} {{user.success.data.lastname}}</p>
									<p class="no-mb main-21">{{user.success.data.email}}</p>
								</span>
							</div>
							<br />
							<p class="main-21 no-mb">Target Monthly Expenses</p>
							<p class="main-28">N596,000</p>
							<img class="contact-img" src="rec.png"/>
							
						</div>
						<br />
						<div class="expenses">
							<p style="padding: 14px 0 0 14px;">Daily Expenses summary</p>
							<div style="">
								<p class="expenses-title">Date<span style="float: right;">Amount</span></p>
								<ul class="no-marg-b">
									<li>30 Nov, 2018 <span style="float: right;" class="green-text">N30,000</span></li>
									<hr />
									<li>30 Nov, 2018 <span style="float: right;" class="green-text">N30,000</span></li>
									<hr />
									<li>30 Nov, 2018 <span style="float: right;" class="green-text">N30,000</span></li>
									<!-- <hr /> -->
									
								</ul>
								<p class="expenses-nav"><input type="text" style="width: 25px;"> of 5 &nbsp;	<i class="fas fa-chevron-circle-left green-text font20"></i> &nbsp; <i class="fas fa-chevron-circle-right green-text font20"></i></p>
							</div>
						</div>
					</div>
					
					<!-- <div class="col-md-1"> -->
						
					<!-- </div> -->
					
					<div class="col-md-6">
						<form class="expenses-form" action="/examples/actions/confirmation.php" method="post">
							<div class="dashboard-welcome">
								<span style="display:block; margin-bottom: 11px;">
									<p class="no-mb main-22"><b>Welcome back, <span class="green-text">{{user.success.data.firstname}}</span></b></p>
									<p class="no-mb main-15">Now, let’s get your expenses for this month</p>
								</span>
								<img style="margin-top: -60px; margin-left: 20px;" src="welcome.png"/>
							</div>
							<br />
							<div class="expenses-form-contents">
									<div class="form-group green">
										<label class="label">Target Monthly Expenses</label>
									<input type="text" style="width: 400px;" class="expenses-input form-control" v-model="expenses" placeholder="Target Monthly Expenses" required="required">
								</div>
								<div class="form-group green">
									<label>Date</label>
								<input type="date" style="width: 400px;" class="expenses-input form-control" v-model="date" placeholder="date" required="required">
								</div>
								
								<p>Today’s Expenses</p>
								
								<div class="form-group">
									<div class="row">
										<div class="col green">
											<input  type="text" class="expenses-input form-control" v-model="exp1_title" placeholder="Pizza" required="required">
										</div>
										<div class="col green">
											<input type="text" class="expenses-input form-control" v-model="exp1" placeholder="10,000" required="required">
										</div>
									</div>        	
								</div>
								
								<div class="form-group">
									<div class="row">
										<div class="col green">
											<input  type="text" class="expenses-input form-control" v-model="exp2_title" placeholder="Textbook" required="required">
										</div>
										<div class="col green">
											<input type="text" class="expenses-input form-control" v-model="exp2" placeholder="10,000" required="required">
										</div>
									</div>        	
								</div>
								
								<div class="form-group">
									<div class="row">
										<div class="col green">
											<input  type="text" class="expenses-input form-control" v-model="exp3_title" placeholder="Tuition fee" required="required">
										</div>
										<div class="col green">
											<input type="text" class="expenses-input form-control" v-model="exp3" placeholder="10,000" required="required">
										</div>
									</div>        	
								</div>
								
								<div class="form-group right" style="display: inline-flex; align-items: center;">
										<label class="label">Total Actual Expenses: N &nbsp; </label>
									<input type="text" style="width:115px" class="input form-control" name="email" placeholder="40,000.00" required="required" >
								</div>
								
								<div class="form-group center">
									<button type="submit" class="expenses-btn">SAVE TODAY’S EXPENSES</button>
								</div>
							</div>
							</form>
						
					</div>
				</div>
			</div>
	
</template>

<script>
import axios from 'axios'
  export default {
  
	data() {
					return {
						user: '',
						error: ''
					}
				},

	async mounted() {
  try {
    this.user = await axios.get('https://campaign.fundall.io/api/v1/base/profile', 
					{
				headers : {
					Accept: 'application/json',
					Authorization: 'Bearer ' + this.$store.state.token
					}
					}, 
				).then(res => res.data);
    this.error = null;
	console.log(this.user.success.data);
  } catch (error) {
    this.user = null;
    this.error = error;
  }
},
	
    methods: {
      logout: function () {
        this.$store.dispatch("LOGOUT").then(() => {
          this.$router.push("/");
        });
      }
    }

  }
</script>