<template>
  <article class="post">
    <h4>{{ goal.title }}</h4>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/images/user.png" />
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">{{ user.name }}</a> updated {{ goal.updatedAt }} minutes ago &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <span>Progress Bar Here</span>
      </div>
    </div>
  </article>
</template>

<script>
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
    }
  }
};
</script>

<style>
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
</style>
