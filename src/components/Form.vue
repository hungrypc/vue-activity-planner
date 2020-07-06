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
            <select v-model="newGoal.category" class="select">
              <option disabled value>Please select a category</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >{{ category.text }}</option>
            </select>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link"
              @click.prevent="createNewGoal"
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
// import { createGoal } from "@/api";
import store from '@/store'

export default {
  name: "goal-form",
  props: {
    categories: Object
  },
  data() {
    return {
      isFormDisplayed: false,
      newGoal: {
        title: "",
        notes: "",
        category: ""
      }
    };
  },
  methods: {
    toggleFormDisplay() {
      this.isFormDisplayed = !this.isFormDisplayed;
    },
    resetNewGoal() {
      this.newGoal = {
        title: "",
        notes: "",
        category: ""
      };
    },
    createNewGoal() {
      store.createGoal({...this.newGoal})
        .then(() => {
          this.resetNewGoal()
          this.isFormDisplayed = false
        })
      // createGoal(this.newGoal)
      //   .then(goal => {
      //     this.$emit("goalCreated", { ...goal });
      //     this.resetNewGoal()
      //     this.isFormDisplayed = false;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //     alert("Fill in details");
      //   });
    }
  },
  computed: {
    isFormValid() {
      return this.newGoal.title && this.newGoal.category;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
