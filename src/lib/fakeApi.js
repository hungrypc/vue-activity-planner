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
  get(resource) {
    // simulating fetching from db 
    return new Promise((res, rej) => {
      if (!data[resource]) {
        rej(new Error('just statisfying linter'))
      }
      setTimeout(() => {
        res({...data[resource]})
      }, 500)
    })
  }

  post(resource, item) {
    return new Promise((res, rej) => {
      if (!item) {
        rej(new Error('nothing to save'))
      }
      data[resource][item.id] = item
      res(item)
    })
  }

  delete(resource, item) {
    return new Promise((res, rej) => {
      if (!item) {
        rej(new Error('nothing to delete'))
      }
      delete data[resource][item.id]
      res(item)
    })
  }
}

export default new FakeApi()