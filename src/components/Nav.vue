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
            <a @click="emitFilter('all')" :class="{'is-active': filterOption === 'all'}" class="navbar-item" >All</a>
            <a @click="emitFilter('inprogress')" :class="{'is-active': filterOption === 'inprogress'}" class="navbar-item" >In Progress</a>
            <a @click="emitFilter('finished')" :class="{'is-active': filterOption === 'finished'}" class="navbar-item" >Finished</a>
            <a @click="emitFilter('notstarted')" :class="{'is-active': filterOption === 'notstarted'}" class="navbar-item" >Not Started</a>
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
  data () {
    return {
      filterOption: 'all'
    }
  },
  methods: {
    emitFilter(filterOption) {
      this.filterOption = filterOption
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
