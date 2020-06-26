<template>
  <div>
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
            <a class="navbar-item is-active" href="#">Newest</a>
            <a class="navbar-item" href="#">In Progress</a>
            <a class="navbar-item" href="#">Finished</a>
          </div>
        </div>
      </div>
    </nav>
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <a
            @click="toggleFormDisplay"
            v-if="!isFormDisplayed"
            class="button is-primary is-block is-alt is-large"
            href="#"
          >
            New
            Goal
          </a>
          <div v-if="isFormDisplayed" class="create-form">
            <form>
              <div class="field">
                <div class="control">
                  <input v-model="newGoal.title" class="input" type="text" placeholder="Goal title" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <textarea v-model="newGoal.notes" class="textarea" placeholder="Notes"></textarea>
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link" @click="createNewGoal">Create Goal</button>
                  <button class="button" v-if="isFormDisplayed" @click="toggleFormDisplay">Hide Form</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="column is-9">
          <div class="box content">
            <goal-item v-for="goal in goals" :goal="goal" :user="user" :key="goal.id"></goal-item>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Goal from './components/Goal'

export default {
  name: "App",
  components: {
    "goal-item": Goal
  },
  data() {
    return {
      user: {
        name: "Phil Chan",
        id: "-Aj34jknvncx98812"
      },
      newGoal: {
        title: "",
        notes: ""
      },
      isFormDisplayed: false,
      goals: {
        "1546968934": {
          id: "1546968934",
          title: "Learn Vue.js",
          notes: "Started new vue course",
          progress: 0,
          category: "1546969049",
          createdAt: 1546969144391,
          updatedAt: 1546969144391
        },
        "1546969212": {
          id: "1546969212",
          title: "Read Malcolm Gladwell Books",
          notes: "Good stuff",
          progress: 0,
          category: "1546969049",
          createdAt: 1546969144391,
          updatedAt: 1546969144391
        }
      },
      categories: {
        "1546969049": { text: "books" },
        "1546969225": { text: "movies" }
      },
      methods: {
        toggleFormDisplay() {
          this.isFormDisplayed = !this.isFormDisplayed
        },
        createNewGoal() {
          const id = Math.random().toString(10).substr(2, 10)
          this.goals = {
            ...this.goals,
            [id]: {
              id,
              title: this.newGoal.title,
              notes: this.newGoal.notes,
              progress: 0,
              category: 'dummy',
              createdAt: new Date(),
              updatedAt: new Date()
            }
          }
          this.newGoal = {
            title: '',
            notes: ''
          }
          this.isFormDisplayed = false
        }
      }
    };
  }
};
</script>

<style>
html,body {
  font-family: 'Open Sans', serif;
  background: #F2F6FA;
}
footer {
  background-color: #F2F6FA !important;
}
.topNav {
  border-top: 5px solid #3498DB;
}
.topNav .container {
  border-bottom: 1px solid #E6EAEE;
}
.container .columns {
  margin: 3rem 0;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
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
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8F99A3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #E6EAEE;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.menu-list li{
  padding: 5px;
}

.navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}
</style>
