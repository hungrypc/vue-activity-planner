const goals = {
  "1546968934": {
    id: "1546968934",
    title: "Learn Vue.js",
    notes: "Started new vue course",
    progress: 80,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391
  },
  "1546969212": {
    id: "1546969212",
    title: "Read Malcolm Gladwell Books",
    notes: "Good stuff",
    progress: 40,
    category: "1546969049",
    createdAt: 1546969144391,
    updatedAt: 1546969144391
  }
}

export const fetchGoals = () => {
  // simulating fetching from db 
  return new Promise((res, rej) => {
    if (goals.length === 0) {
      rej(new Error('just statisfying linter'))
    }
    setTimeout(() => {
      res(goals)
    }, 500)
  })
}

export const createGoal = (goal) => {
  goal.id = Math.random().toString(10).substr(2, 10)
  goal.progress = 0
  goal.createdAt = new Date()
  goal.updatedAt = new Date()

  return new Promise((res, rej) => {
    if (!goal.category || !goal.title) {
      rej(new Error('fill in details'))
    } else {
      res(goal)
    }
  })
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