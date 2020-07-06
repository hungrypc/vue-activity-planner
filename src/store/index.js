import Vue from 'vue'
import fakeApi from '@/lib/fakeApi'

const store = {
  state: {
    goals: {},
    categories: {},
  },

  fetchGoals() {
    return fakeApi.get('goals')
      .then(goals => {

        Object.keys(goals).forEach(key => 
          // Vue.set(this.state.goals, key, goals[key])
          this.setItem('goals', key, goals[key])
        )

        return goals
    })
  },

  createGoal(goal) {
    goal.id = Math.random().toString(10).substr(2, 10)
    goal.progress = 0
    goal.createdAt = new Date()
    goal.updatedAt = new Date()

    return fakeApi.post('goals', goal)
      .then(createdGoal => {
        this.setItem('goals', createdGoal.id, createdGoal)
        return createdGoal
      })
  },

  updateGoal(goal) {
    goal.updatedAt = new Date()

    return fakeApi.post('goals', goal)
      .then(updatedGoal => {
        this.setItem('goals', updatedGoal.id, updatedGoal)
        return updatedGoal
      })
  },

  fetchCategories() {
    return fakeApi.get('categories')
      .then(categories => {
        Object.keys(categories).forEach(key => 
          // Vue.set(this.state.categories, key, categories[key])
          this.setItem('categories', key, categories[key])
        )
        return categories
      })
  },

  setItem(resource, id, item) {
    Vue.set(this.state[resource], id, item)
  },

  fetchUser() {
    return {
      name: "Phil Chan",
      id: "-Aj34jknvncx98812"
    }
  },

  deleteGoal(goal) {
    return fakeApi.delete('goals', goal)
    .then(deletedGoal => {
      Vue.delete(this.state.goals, goal.id)
      return deletedGoal
    })
  }
}

export default store