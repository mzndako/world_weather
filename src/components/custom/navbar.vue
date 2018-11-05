<template>
<b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

 

    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
           <router-link :to="{path: '/'}">
                <b-navbar-brand> 
                Home  
            </b-navbar-brand>
            </router-link>
        </b-navbar-nav>

        <!-- Right aligned  nav items -->
       

    </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
