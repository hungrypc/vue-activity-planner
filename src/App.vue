<template>
  <div>
    <nav-bar></nav-bar>
    <section class="container">
      <div class="columns">
        <goal-form          
          
          :categories="categories"
          @goalCreated="addGoal"
        ></goal-form>
        <div class="column is-9">
          <div class="box content">
            <goal-item v-for="goal in goals" :goal="goal" :user="user" :key="goal.id"></goal-item>
            <div class="goal-length">Currently {{ goalLength }} activities</div>
            <div class="goal-motivation">{{ goalMotivation }}</div>            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Goal from "./components/Goal";
import Nav from "./components/Nav"
import Form from "./components/Form";
import { fetchGoals, fetchCategories, fetchUser } from '@/api'

export default {
  name: "App",
  components: {
    "nav-bar": Nav,
    "goal-item": Goal,
    "goal-form": Form
  },
  data() {
    return {
      user: {},
      goals: {},
      categories: {}
    };
  },
  created() {
    this.goals = fetchGoals()
    this.user = fetchUser()
    this.categories = fetchCategories()
  },
  methods: {
    addGoal(newGoal) {
      console.log(newGoal)
    }
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
