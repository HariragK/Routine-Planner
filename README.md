# Daily Routine Planner - Improved Version

## Overview
A modern, responsive web application for planning and managing daily routines built according to KTU 2024 GXEST203 (Foundations of Computing) standards.

## Key Improvements from Original

### 1. **HTML Structure**
- Semantic HTML5 tags (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper language attribute and character encoding
- Responsive viewport meta tag
- Improved accessibility and SEO

### 2. **CSS Styling**
- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Color Scheme**: Professional color variables using CSS custom properties
- **Layout**: CSS Grid and Flexbox for modern layouts
- **Hover Effects**: Smooth transitions and visual feedback
- **Typography**: Consistent font hierarchy and spacing
- **Responsive Tables**: Tables adapt to smaller screens
- **Gradient Backgrounds**: Modern gradient effects for tip cards

### 3. **JavaScript Functionality**
- **LocalStorage Integration**: Tasks persist across browser sessions
- **Task Manager Class**: Object-oriented task management
- **Form Validator Class**: Reusable validation logic
- **Enhanced Validation**: Detailed error messages for each field
- **Dynamic Content**: Auto-populate routine page with stored tasks
- **Success Messages**: Visual feedback after form submissions
- **Sorting**: Tasks automatically sort by time

### 4. **User Experience**
- **Delete & Clear Functions**: Manage tasks efficiently
- **Priority Levels**: Tasks can be assigned priority (Low/Medium/High)
- **Status Tracking**: Tasks show pending/completed status
- **Empty State**: Helpful message when no tasks exist
- **Smooth Animations**: Buttons and cards have hover effects
- **Error Handling**: Clear, actionable error messages

### 5. **File Structure**
```
index.html      - Home page with feature cards
routine.html    - View and manage daily routine
planner.html    - Add new tasks with time and priority
tips.html       - Productivity tips and best practices
contact.html    - Contact form with validation
style.css       - Modern, responsive stylesheet
script.js       - Utility functions and validators
```

## Features

### Home Page
- Welcome message with call-to-action
- Feature cards linking to main functionality
- Step-by-step guide on how to use the planner

### Routine Page
- Display all tasks in a table format
- Show task status (Pending/Completed)
- Delete individual tasks
- Clear all tasks at once
- Responsive table design

### Add Task Page
- Input task name
- Select specific time
- Choose priority level
- Real-time validation
- Success confirmation

### Tips Page
- 6 productivity tips with descriptions
- Best practices list
- Responsive card-based layout

### Contact Page
- Name field validation
- Email format validation
- Subject and message fields
- Minimum character requirements
- Message storage in localStorage

## Technical Standards (KTU GXEST203)

✓ **HTML5**: Semantic markup, proper document structure
✓ **CSS3**: Media queries, CSS variables, Flexbox, Grid
✓ **JavaScript ES6+**: Classes, arrow functions, const/let
✓ **Responsive Design**: Mobile-first approach, breakpoints at 768px and 480px
✓ **Form Handling**: Validation, error handling, user feedback
✓ **Data Persistence**: LocalStorage for data management
✓ **Accessibility**: Semantic elements, proper labels
✓ **Performance**: Minimal external dependencies, efficient code

## Responsive Breakpoints

- **Desktop**: 1200px and above (full 3-column layouts)
- **Tablet**: 768px - 1199px (2-column layouts)
- **Mobile**: Below 768px (single column, stacked navigation)

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## How to Use

1. **Add a Task**:
   - Go to "Add Task" page
   - Enter task name and select time
   - Choose priority level
   - Click "Add Task"

2. **View Routine**:
   - Go to "Routine" page
   - See all scheduled tasks
   - Delete individual tasks or clear all

3. **Delete Tasks**:
   - Click "Delete" button next to any task
   - Or click "Clear All" to remove everything

4. **Data Persistence**:
   - All tasks are saved in browser's localStorage
   - Data persists across browser sessions
   - Closing browser doesn't lose data

5. **Contact**:
   - Fill out contact form with all required fields
   - Messages are stored locally
   - Validation provides helpful error messages

## LocalStorage Keys

- `tasks`: Array of task objects
- `contactMessages`: Array of contact form submissions

## Validation Rules

**Task Addition**:
- Task name must not be empty
- Time must be selected

**Contact Form**:
- Name: minimum 2 characters
- Email: valid email format
- Message: minimum 10 characters

## Future Enhancement Ideas

- User authentication
- Cloud synchronization
- Task categories/tags
- Recurring tasks
- Notifications/reminders
- Dark mode toggle
- Export to PDF
- Collaboration features

## Code Quality

- Clean, readable code with proper naming conventions
- Modular JavaScript with reusable classes
- DRY (Don't Repeat Yourself) principles
- Proper error handling
- No console errors or warnings

## Author

Created for KTU GXEST203 - Foundations of Computing (2024 Scheme)

## License

Educational use - KTU Academic Project
