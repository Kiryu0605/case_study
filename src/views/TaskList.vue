<!-- TaskList.vue -->
<template>
    <div>
        <div class="/">
            <h2>Task List</h2>
            <task v-for="task in tasks" 
            :key="task.id" :task="task"
            @complete="completeTask" 
            @delete="deleteTask"
            @edit="editTask(task.id)" />
        </div>
        <button @click="createTask">Create Task</button>

        <!-- Create form or modal -->
        <div v-if="createMode">
            <h3>Create Task</h3>
            <form @submit.prevent="saveNewTask">
                <label for="newDescription">Description:</label>
                <input type="text" id="newDescription" v-model="newTaskDescription" required>
                <button type="submit">Create Task</button>
                <button @click="cancelCreate">Cancel</button>
            </form>
        </div>

        <!-- Edit form or modal -->
        <div v-if="editMode">
            <h3>Edit Task</h3>
            <form @submit.prevent="saveEditedTask">
                <label for="editDescription">Description:</label>
                <input type="text" id="editDescription" v-model="editedTaskDescription" required>
                <button type="submit">Save Changes</button>
                <button @click="cancelEdit">Cancel</button>
            </form>
        </div>

    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    components: {
        Task
    },
    props: ['task'],
    data() {
        return {
            editMode: false,
            createMode: false,
            editedTaskId: null,
            editedTaskDescription: '',
            newTaskDescription: '',
        };
    },
    methods: {
        completeTask(taskId) {
            console.log("Task completed:", taskId);
        },
        deleteTask(taskId) {
            console.log("Task deleted:", taskId);
        },
        editTask(taskId) {
            console.log("Task edited:", taskId);

            // Open edit form or modal
            this.editMode = true;
            this.editedTaskId = taskId;

            // Set the initial value of the edited task description
            this.editedTaskDescription = this.tasks.find(task => task.id === taskId).description;
        },
        createTask() {

            // Open create form or modal
            this.createMode = true;
        },
        saveNewTask() {

            // Implement logic to save the new task
            console.log("Creating task with description:", this.newTaskDescription);

            // After saving, close the create form or modal
            this.createMode = false;
        },
        cancelCreate() {

            // Cancel creation and close the create form or modal
            this.createMode = false;
        },
        saveEditedTask() {

            // Implement logic to save changes made to the task
            console.log("Saving changes to task:", this.editedTaskId);

            // After saving, close the edit form or modal
            this.editMode = false;
        },
        cancelEdit() {

            // Cancel editing and close the edit form or modal
            this.editMode = false;
        }
    }
}
</script>

<style>
.task-list {
  margin-bottom: 20px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input {
  width: 90%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-primary {
  background-color: #007bff;
  color: #fff;
  margin-right: 95px;
}

.button-primary:hover {
  background-color: #0056b3;
}

.button-secondary {
  background-color: #ccc;
  color: #333;
}

.button-secondary:hover {
  background-color: #bbb;
}

.button-group {
  display: flex;
  justify-content: flex-end;
}
</style> 