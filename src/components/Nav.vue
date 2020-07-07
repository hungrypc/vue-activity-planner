<template>
  <div class="nav">
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <h1>Goal Planner</h1>
        </div>
      </div>
    </nav>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a @click="emitFilter('all')" class="navbar-item is-active" >All</a>
            <a @click="emitFilter('inprogress')" class="navbar-item is-active" >In Progress</a>
            <a @click="emitFilter('finished')" class="navbar-item" >Finished</a>
            <a @click="emitFilter('notstarted')" class="navbar-item" >Not Started</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: [],
  methods: {
    emitFilter(filterOption) {
      this.$emit('filterSelected', filterOption)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.topNav {
  border-top: 5px solid #3498db;
}
.topNav .container {
  border-bottom: 1px solid #e6eaee;
}
.container .columns {
  margin: 3rem 0;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
.navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}
</style>
