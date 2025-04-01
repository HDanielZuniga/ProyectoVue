<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "Hello World!"
    }
  }
}
</script>

<style scoped>
.hello {
  font-size: 20px;
  margin: 20px 0;
}
</style>
