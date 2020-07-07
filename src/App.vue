<template>
  <div>
    <nav-bar @filterSelected="setFilter"></nav-bar>
    <section class="container">
      <div class="columns">
        <goal-form :categories="categories"></goal-form>
        <div class="column is-9">
          <div class="box content" :class="{fetching: isFetching, 'has-error': error}">
            <div v-if="error">{{ error }}</div>
            <div v-else>
              <div v-if="isFetching">Loading...</div>
              <div v-if="isDataLoaded">
                <goal-item
                  v-for="goal in filteredGoals"
                  :goal="goal"
                  :user="user"
                  :key="goal.id"
                  :categories="categories"
                ></goal-item>
              </div>
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
import Nav from "./components/Nav";
import Form from "./components/Form";

import store from "./store";
// import fakeApi from '@/lib/fakeApi'
// import { fetchGoals, fetchCategories, fetchUser, deleteGoal } from '@/api'

export default {
  name: "App",
  components: {
    "nav-bar": Nav,
    "goal-item": Goal,
    "goal-form": Form
  },
  data() {
    const {
      state: { goals, categories }
    } = store;
    return {
      user: {},
      goals,
      categories,
      error: null,
      isFetching: false,
      filter: 'all'
    };
  },
  created() {
    // only run once to populate local storage
    // fakeApi.seedDb()

    this.isFetching = true;
    store
      .fetchGoals()
      .then(() => {
        this.isFetching = false;
      })
      .catch(err => {
        this.error = err;
        this.isFetching = false;
      });
    this.user = store.fetchUser();
    store.fetchCategories();
    // no idea why he included this, shit instructor:
    //   .then(categories => {
    //   console.log(categories)
    // })
  },
  methods: {
    setFilter(filterOption) {
      this.filter = filterOption
    }
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
      return Object.keys(this.goals).length;
    },
    goalMotivation() {
      if (this.goalLength && this.goalLength < 5) {
        return "Nice to see some goals";
      } else if (this.goalLength >= 5) {
        return "So many goals, good job";
      } else {
        return "No goals?";
      }
    },
    isDataLoaded() {
      return this.goalsLength && this.categoriesLength;
    },
    goalsLength() {
      return Object.keys(this.goals).length;
    },
    categoriesLength() {
      return Object.keys(this.categories).length;
    },
    filteredGoals() {
      const allGoals = Object.values(this.goals)

      if (this.filter === 'all') {
        return this.goals
      } else if (this.filter === 'inprogress') {
        return allGoals.filter(goal => goal.progress > 0 && goal.progress < 100)
      } else if (this.filter === 'finished') {
        return allGoals.filter(goal => goal.progress > 99)
      } else if (this.filter === 'notstarted') {
        return allGoals.filter(goal => goal.progress === 0)
      }

      return this.goals
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
