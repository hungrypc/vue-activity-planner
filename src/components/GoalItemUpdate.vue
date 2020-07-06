<template>
  <article class="post">
    <div class="goal-title">
      <!-- TODO: Add v-model -->
      <input v-model="goalToUpdate.title" type="text" class="input">
      <i class="fas fa-cog goal-settings" @click="isMenuDisplayed = !isMenuDisplayed" />
    </div>
    <div class="goal-category">
      <!-- TODO: add v-model and iterate categories in option  -->
      <select v-model="goalToUpdate.category" class="select">
        <option disabled value="">Please select one</option>
        <option v-for="category in categories"
                :key="category.id"
                :value="category.id">{{ category.text }}</option>
      </select>
    </div>
    <div class="control goal-notes">
      <!-- TODO: Add v-model here -->
      <textarea v-model="goalToUpdate.notes"
                class="textarea"
                placeholder="Write some notes here" />
    </div>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/images/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">{{ user.name }}</a> updated {{ goalToUpdate.updatedAt | timePrettier }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <!-- TODO: Add v-model here -->
        <input id="progress"
               v-model="goalToUpdate.progress"
               type="range"
               name="progress"
               min="0" max="100" value="90" step="10">
        <label for="progress">{{ goalToUpdate.progress }} %</label>
      </div>
    </div>
    <div v-if="isMenuDisplayed" class="goal-control">
      <!-- TODO: create function 'updategoal' to console log 'goal' -->
      <a class="button is-warning" @click="updateGoal">Commit Update</a>
      <!-- TODO: Emit Event to Cancel Edit Mode -->
      <a class="button is-danger" @click="$emit('toggleUpdate', false)">Cancel</a>
    </div>
  </article> 
</template>

<script>
import textUtility from '@/mixins/textUtility'
import store from '@/store'

export default {
  mixins: [textUtility],
  props: {
    categories: {
      type: Object,
      required: true
    },
    goal: {
      type: Object,
      required: true
    },
    user: {
      name: String,
      id: String
    },
  },
  data () {
    return {
      isMenuDisplayed: true,
      goalToUpdate: {...this.goal}
    }
  },
  methods: {
    updateGoal() {
      store.updateGoal(this.goalToUpdate)
        .then(() => {
          this.$emit('toggleUpdate', false)
        })
    }
  }
}
</script>

<style scoped>
input {
  width: 50%;
}
</style>