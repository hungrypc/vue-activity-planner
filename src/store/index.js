import fakeApi from '@/lib/fakeApi'

const store = {
  state: {
    goals: {},
    categories: {},
  },

  fetchGoals() {
  return fakeApi.get('goals')
  },

  createGoal(goal) {
    goal.id = Math.random().toString(10).substr(2, 10)
    goal.progress = 0
    goal.createdAt = new Date()
    goal.updatedAt = new Date()

    return fakeApi.post('goals', goal)
  },

  fetchCategories() {
    return fakeApi.get('categories')
  },

  fetchUser() {
    return {
      name: "Phil Chan",
      id: "-Aj34jknvncx98812"
    }
  },

  deleteGoal(goal) {
    return fakeApi.delete('goals', goal)
  }
}

export default store