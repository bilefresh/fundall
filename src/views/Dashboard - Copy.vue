<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <div class="card border-0 shadow rounded">
          <div class="card-body">
            {{ isLoggedIn }}
            <hr>
            <button @click="logout" class="btn btn-primary btn-md">LOGOUT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


data() {
					return {
						user_details: 'tt'
					}
				},
				
	mounted() {
		axios
				.get('https://campaign.fundall.io/api/v1/base/profile', 
					{
				headers : {
					Accept: 'application/json',
					Authorization: 'Bearer ' + this.$store.state.token
					}
					}, 
				)
				.then((response) => {this.user_details = response.data; }).catch((error) => console.log(error.toJSON))
		console.log(this.user_details);
	},
	
				
	computed: {
      isLoggedIn: function () {
		console.log(this.$store.state.token);
        
		
		return this.$store.getters.isLoggedIn;
      },
	
		currentUser() {
			console.log('this is it ' , this.status,  this.$store.state);
			return this.$store.state.status;
    }
    },






import axios from 'axios'
  export default {
	
	mounted() {
		axios
				.get('https://campaign.fundall.io/api/v1/base/profile', 
					{
				headers : {
					Accept: 'application/json',
					Authorization: 'Bearer ' + this.$store.state.token
					}
					}, 
				)
				.then((response) => console.log(response)).catch((error) => console.log(error.toJSON()))
		return 'text';
	},
	
    computed: {
      isLoggedIn: function () {
        return this.$store.getters.isLoggedIn;
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