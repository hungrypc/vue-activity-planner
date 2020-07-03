<template>
  <div>
    <GoalItemUpdate 
      v-if="isUpdateActive" 
      :goal="goal" 
      :categories="categories" 
      :user="user" 
      @toggleUpdate="changeUpdateState"
    />
    <GoalItemDetail 
      v-else
      :goal="goal" 
      :categories="categories" 
      :user="user" 
      @toggleUpdate="changeUpdateState"
    />
  </div>
</template>

<script>
import GoalItemDetail from "./GoalItemDetail";
import GoalItemUpdate from "./GoalItemUpdate";

export default {
  name: "goal-item",
  components: {
    GoalItemDetail,
    GoalItemUpdate
  },
  props: {
    goal: {
      required: true,
      type: Object
    },
    categories: {
      required: true,
      type: Object
    },
    user: {
      name: String,
      id: String
    }
  },
  data() {
    return {
      isUpdateActive: false
    };
  },
  methods: {
    changeUpdateState(isUpdate) {
      this.isUpdateActive = isUpdate
    }
  }
};
</script>

<style lang="scss">
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8f99a3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}

.post h4 {
  margin-bottom: 5px !important;
}

.goal-category {
  color: #8f99a3;
}

.color-red {
  color: red;
}
.color-orange {
  color: orange;
}
.color-green {
  color: green;
}

.goal-settings {
  float: right;
  font-size: 22px;
  
  &:hover {
    cursor: pointer;
  };
}

.goal-control {
  margin: 20px 0 0 0;

  a {
    margin-right: 5px;
  }
}

.goal-category {
  margin: 10px 0;
}
.goal-notes {
  margin-bottom: 10px;
}
</style>
