import fakeApi from '@/lib/fakeApi'

export const fetchGoals = () => {
  return fakeApi.get('goals')
}

export const createGoal = (goal) => {
  goal.id = Math.random().toString(10).substr(2, 10)
  goal.progress = 0
  goal.createdAt = new Date()
  goal.updatedAt = new Date()

  return fakeApi.post('goals', goal)
}

export const fetchCategories = () => {
  return fakeApi.get('categories')
}

export const fetchUser = () => {
  return {
    name: "Phil Chan",
    id: "-Aj34jknvncx98812"
  }
}