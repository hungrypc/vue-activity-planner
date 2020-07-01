export default {
  data() {
    return {
      utilityName: 'text utility'
    }
  },
  methods: {
    capitalize(word) {
      if (word && typeof word === 'string') {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    }
  },
}