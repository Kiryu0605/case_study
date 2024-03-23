<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="Task"></div>

    <!-- Task actions -->
    <button @click="completeTask">Complete</button>
    <button @click="deleteTask">Delete</button>
  </div>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    completeTask() {
      // Handle task completion
      this.$emit('complete', this.taskId);
    },
    deleteTask() {
      // Handle task deletion
      this.$emit('delete', this.taskId);
    }
  }
}
</script>
