import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    success: '',
    token: localStorage.getItem('token') || '',
  user: {} || ''
  },

  mutations: {
    AUTH_REQUEST(state) {
      state.status = 'loading'
    },

    AUTH_SUCCESS(state, token, user) {
      state.status = 'success'
      state.token   = token
      state.user    = user
    },

    AUTH_ERROR(state) {
      state.status = 'error'
    },

    AUTH_LOGOUT(state) {
      state.status = ''
      state.token = ''
    },

  },

  actions: {
    LOGIN({ commit }, user) {

      return new Promise((resolve, reject) => {

        commit('AUTH_REQUEST')
        axios.post('https://campaign.fundall.io/api/v1/login', {
					
					email: user.email, 
					password:  user.password,
					},
					{
				headers : {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + 'API_TOKEN'
					}
					}, 
		).then(response => {
			
            
            const user  = response.data.success.user
			const token = user.access_token

            // localStorage.setItem('token', token)
            // localStorage.setItem('user', JSON.stringify(user))
			// localStorage.setItem('user', user)
			commit('AUTH_SUCCESS', token, user)
            axios.defaults.headers.common['Authorization'] = "Bearer" +token
            
		
            resolve(response)
			console.log(user)

        }).catch(err => { 

            commit('AUTH_ERROR')
            localStorage.removeItem('token')
			console.log(err.toJSON())
            reject(err)

        })
      })
    },

    REGISTER({ commit }, user) {

      return new Promise((resolve, reject) => {

        commit('AUTH_REQUEST') 
        axios.post('https://campaign.fundall.io/api/v1/register', {
					
					firstname: user.first_name,
					lastname: user.last_name,
					email: user.email,
					password: user.password,
					password_confirmation: user.confirm_password,
					},
					{
				headers : {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + 'API_TOKEN'
					}
					}, 
				)
          
        .then(response => {

            const token = response.data.token
            const user  = response.data.user

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))

            axios.defaults.headers.common['Authorization'] = "Bearer" +token
            commit('AUTH_SUCCESS', token, user)

            resolve(response)
			console.log(response)
        }).catch(err => { 

            commit('AUTH_ERROR')
            localStorage.removeItem('token')
			console.log(err.toJSON())
            reject(err)

        })
      })
    },

    LOGOUT({ commit }) {
      return new Promise((resolve) => {
        commit('AUTH_LOGOUT')
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },

  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
	users: state => state.user,
  },

  modules: {
  }
})
