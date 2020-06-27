<template>
  <div class="column is-3">
    <a
      @click="toggleFormDisplay"
      v-if="!isFormDisplayed"
      class="button is-primary is-block is-alt is-large"
      href="#"
    >New Goal</a>
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
        <div class="field">
          <div class="control">
            <select v-model='newGoal.category' class="select">
              <option disabled value="">Please select a category</option>
              <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.text }}</option>              
            </select>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link"
              @click="createNewGoal"
              :disabled="!isFormValid"
            >Create Goal</button>
            <button class="button is-text" v-if="isFormDisplayed" @click="toggleFormDisplay">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "goal-form",
  props: {
    isFormDisplayed: Boolean,
    newGoal: Object,
    createNewGoal: Function,
    categories: Object
  },
  methods: {
    toggleFormDisplay() {
      this.isFormDisplayed = !this.isFormDisplayed;
    },
  },
  computed: {
    isFormValid() {
      return this.newGoal.title
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
