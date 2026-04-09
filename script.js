// LocalStorage Management
const TaskManager = {
  // Get all tasks from localStorage
  getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  },

  // Add new task
  addTask(task) {
    const tasks = this.getTasks();
    tasks.push({
      ...task,
      id: Date.now(),
      completed: false
    });
    tasks.sort((a, b) => a.time.localeCompare(b.time));
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return task;
  },

  // Delete task by index
  deleteTask(index) {
    const tasks = this.getTasks();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },

  // Clear all tasks
  clearAll() {
    localStorage.removeItem('tasks');
  },

  // Mark task as completed
  toggleTask(index) {
    const tasks = this.getTasks();
    if (tasks[index]) {
      tasks[index].completed = !tasks[index].completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
};

// Form Validation
const FormValidator = {
  // Validate email format
  isValidEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  },

  // Validate name (minimum 2 characters)
  isValidName(name) {
    return name.trim().length >= 2;
  },

  // Validate task name
  isValidTask(task) {
    return task.trim().length > 0;
  },

  // Validate time format
  isValidTime(time) {
    return time.match(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/);
  }
};

// Contact Form Validation
function validateForm(e) {
  if (e) e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const msg = document.getElementById('msg');

  if (!name || !email || !msg) return false;

  // Clear previous errors
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(el => el.textContent = '');

  let isValid = true;

  // Validate name
  if (!FormValidator.isValidName(name.value)) {
    if (document.getElementById('nameError')) {
      document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
    }
    isValid = false;
  }

  // Validate email
  if (!FormValidator.isValidEmail(email.value)) {
    if (document.getElementById('emailError')) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address';
    }
    isValid = false;
  }

  // Validate message
  if (msg.value.trim().length < 10) {
    if (document.getElementById('msgError')) {
      document.getElementById('msgError').textContent = 'Message must be at least 10 characters';
    }
    isValid = false;
  }

  if (!isValid) return false;

  // Store message
  const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
  messages.push({
    name: name.value,
    email: email.value,
    message: msg.value,
    timestamp: new Date().toLocaleString()
  });
  localStorage.setItem('contactMessages', JSON.stringify(messages));

  // Show success message
  const successMsg = document.getElementById('success-msg');
  if (successMsg) {
    successMsg.style.display = 'block';
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 4000);
  }

  // Reset form
  name.value = '';
  email.value = '';
  msg.value = '';

  return false;
}

// Task Addition
function addTask() {
  const taskInput = document.getElementById('task');
  const timeInput = document.getElementById('time');

  if (!taskInput || !timeInput) return false;

  // Clear previous errors
  const errorElements = document.querySelectorAll('.error');
  errorElements.forEach(el => el.textContent = '');

  let isValid = true;

  // Validate task
  if (!FormValidator.isValidTask(taskInput.value)) {
    if (document.getElementById('taskError')) {
      document.getElementById('taskError').textContent = 'Task name cannot be empty';
    }
    isValid = false;
  }

  // Validate time
  if (!timeInput.value) {
    if (document.getElementById('timeError')) {
      document.getElementById('timeError').textContent = 'Please select a time';
    }
    isValid = false;
  }

  if (!isValid) return false;

  // Add task to localStorage
  TaskManager.addTask({
    name: taskInput.value.trim(),
    time: timeInput.value
  });

  // Show success message
  const successMsg = document.getElementById('success-msg');
  if (successMsg) {
    successMsg.style.display = 'block';
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 3000);
  }

  // Reset form
  taskInput.value = '';
  timeInput.value = '';

  return false;
}

// Initialize page on load
document.addEventListener('DOMContentLoaded', function() {
  // Set active navigation link
  const currentLocation = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Utility function to format time
function formatTime(time) {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TaskManager, FormValidator };
}
