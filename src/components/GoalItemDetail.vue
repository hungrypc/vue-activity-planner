<template>
  <article class="post">
    <div class="goal-title-wrapper">
      <h4 class="goal-title">{{ goal.title }}</h4>
      <i @click="toggleMenu" class="fas fa-cog goal-settings"></i>
    </div>
    <p class="goal-category">{{ textUtility_capitalize(categories[goal.category].text) }}</p>
    <p>{{ goal.notes }}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/images/user.png" />
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">{{ user.name }}</a> updated {{ goal.updatedAt | timePrettier }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>Progress: <span :class="'color-' + computeProgress">{{ goal.progress }}%</span></span>
        <!-- <span>Progress: <span :style={"color": computeProgress}>{{ goal.progress }}%</span></span> -->
      </div>
      <div v-if="isMenuDisplayed" class="goal-control">
        <a class="button is-warning" @click="$emit('toggleUpdate', true)">Edit</a>
        <a class="button is-danger" @click="deleteGoal">Delete</a>
      </div>
    </div>
  </article>
</template>

<script>
import textUtility from '@/mixins/textUtility'

export default {
  name: "goal-item",
  props: {
    goal: {
      title: String,
      notes: String,
      progress: Number,
      category: String,
      createdAt: Date,
      updatedAt: Date
    },
    user: {
      name: String,
      id: String
    },
    categories: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isMenuDisplayed: false
    }
  },
  mixins: [textUtility],
  computed: {
    computeProgress() {
      const progress = this.goal.progress
      if (progress <= 0) {
        return 'red'
      } else if (progress > 0 && progress <= 50) {
        return 'orange'
      } else {
        return 'green'
      }
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuDisplayed = !this.isMenuDisplayed
    },
    deleteGoal() {
      this.$emit('goalDeleted', this.goal)
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
