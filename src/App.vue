<template>
  <div v-if="isDataLoaded">
    <nav-bar></nav-bar>
    <section class="container">
      <div class="columns">
        <goal-form          
          :categories="categories"
          
        ></goal-form>
        <div class="column is-9">
          <div class="box content" :class="{fetching: isFetching, 'has-error': error}">
            <div v-if="error">
              {{ error }}
            </div>
            <div v-else>
              <div v-if="isFetching">
                Loading...
              </div>
              <goal-item 
                v-for="goal in goals" 
                :goal="goal" 
                :user="user" 
                :key="goal.id" 
                :categories="categories"
                
              ></goal-item>
              <div v-if="!isFetching">
                <div class="goal-length">Currently {{ goalLength }} activities</div>
                <div class="goal-motivation">{{ goalMotivation }}</div>            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Vue from 'vue'
import Goal from "./components/Goal";
import Nav from "./components/Nav"
import Form from "./components/Form";

import store from './store'
// import { fetchGoals, fetchCategories, fetchUser, deleteGoal } from '@/api'

export default {
  name: "App",
  components: {
    "nav-bar": Nav,
    "goal-item": Goal,
    "goal-form": Form
  },
  data() {
    const { state: { goals, categories } } = store
    return {
      user: {},
      goals,
      categories,
      error: null,
      isFetching: false
    };
  },
  created() {
    this.isFetching = true
    store.fetchGoals().then(() => {      
      this.isFetching = false
    })
    .catch(err => {
      this.error = err
      this.isFetching = false
    })
    this.user = store.fetchUser()
    store.fetchCategories()
    // no idea why he included this, shit instructor:
    //   .then(categories => {
    //   console.log(categories)
    // })
  },
  methods: {
    // addGoal(newGoal) {
    //   // this.goals[newGoal.id] = newGoal
    //   Vue.set(this.goals, newGoal.id, newGoal)
    // },
    // handleGoalDelete(goal) {
    //   store.deleteGoal(goal).then(deletedGoal => {
    //     Vue.delete(this.goals, deletedGoal.id)
    //   })
    // }
  },
  computed: {
    goalLength() {
      return Object.keys(this.goals).length
    },
    goalMotivation() {
      if (this.goalLength && this.goalLength < 5) {
        return 'Nice to see some goals'
      } else if (this.goalLength >= 5) {
        return 'So many goals, good job'
      } else {
        return 'No goals?'
      }
    },
    isDataLoaded() {
      return this.goalsLength && this.categoriesLength
    },
    goalsLength() {
      return Object.keys(this.goals).length
    },
    categoriesLength() {
      return Object.keys(this.categories).length
    }
  }
};
</script>

<style>
html,
body {
  font-family: "Open Sans", serif;
  background: #f2f6fa;
}
footer {
  background-color: #f2f6fa !important;
}

.fetching {
  border: 2px solid teal;
}

.has-error {
  border: 2px solid red;
}

aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}

article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li {
  padding: 5px;
}

.goal-motivation {
  float: right;
}

.goal-length {
  display: inline-block;
}
</style>
