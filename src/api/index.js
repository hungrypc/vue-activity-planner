export const fetchGoals = () => {
  return {
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
  }
}

export const createGoal = (goal) => {
  goal.id = Math.random().toString(10).substr(2, 10)
  goal.progress = 0
  goal.createdAt = new Date()
  goal.updatedAt = new Date()

  return goal
}

export const fetchCategories = () => {
  return {
    "1546969049": { id: "1546969049", text: "books" },
    "1546969225": { id: "1546969225", text: "movies" }
  }
}

export const fetchUser = () => {
  return {
    name: "Phil Chan",
    id: "-Aj34jknvncx98812"
  }
}