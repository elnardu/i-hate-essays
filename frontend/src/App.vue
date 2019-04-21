<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>
                Logout
            </router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                hardCodeAccount: {
                    username: "lgreguri",
                    password: "password"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>

<style>
/* #app, body, html {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
} */
body {
        background-color: rgb(184, 184, 184);
}
h1 {
    padding: 0;
    margin-top: 0;
}
#app {
    width: 1024px;
    margin: auto;
}
</style>
          