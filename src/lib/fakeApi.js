const data = {
  goals: {
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
  },
  categories: {
    "1546969049": { id: "1546969049", text: "books" },
    "1546969225": { id: "1546969225", text: "movies" }
  }
}

class FakeApi {

  seedDb() {
    this.commitData(data)
  }

  commitData(data) {
    localStorage.setItem('goal_data', JSON.stringify(data))
  }

  getData() {
    const goalData = localStorage.getItem('goal_data')
    return JSON.parse(goalData)
  }

  get(resource) {
    // simulating fetching from db 
    return new Promise((res, rej) => {
      if (!data[resource]) {
        rej(new Error('just statisfying linter'))
      }
      setTimeout(() => {
        const data = this.getData()
        res({...data[resource]})
      }, 500)
    })
  }

  post(resource, item) {
    return new Promise((res, rej) => {
      if (!item) {
        rej(new Error('nothing to save'))
      }
      const data = this.getData()
      data[resource][item.id] = item
      this.commitData(data)
      res(item)
    })
  }

  delete(resource, item) {
    return new Promise((res, rej) => {
      if (!item) {
        rej(new Error('nothing to delete'))
      }
      const data = this.getData()
      delete data[resource][item.id]
      this.commitData(data)
      res(item)
    })
  }
}

export default new FakeApi()