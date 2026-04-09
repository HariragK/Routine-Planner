# Daily Routine Planner

## Overview
A web application for planning and managing daily routines built according to KTU 2024 GXEST203 (Foundations of Computing) standards.

## Features

### Home Page
- Welcome message with navigation
- Feature cards linking to main functionality
- Quick start guide

### Routine Page
- Display all tasks in a table format
- Show task status (Pending/Completed)
- Delete individual tasks
- Clear all tasks at once
- Responsive table design

### Add Task Page
- Input task name
- Select specific time
- Choose priority level (Low/Medium/High)
- Form validation with error messages
- Success confirmation

### Tips Page
- Productivity tips and best practices
- Responsive card-based layout

### Contact Page
- Name, email, subject, and message fields
- Form validation
- Message storage in localStorage

## Technical Details

**HTML5**: Semantic markup with proper document structure
**CSS3**: Responsive design with media queries and CSS variables
**JavaScript**: LocalStorage for data persistence, form validation

## Responsive Design

- **Desktop**: Full 3-column layouts
- **Tablet** (768px): 2-column layouts
- **Mobile** (480px and below): Single column, stacked elements

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers

## How to Use

1. **Add a Task**: Go to "Add Task", enter task name and time, click "Add Task"
2. **View Routine**: Go to "Routine" to see all scheduled tasks
3. **Delete Tasks**: Click "Delete" next to any task or "Clear All" to remove everything
4. **Contact**: Fill out the contact form and submit

## Data Storage

- Tasks saved in browser's localStorage
- Data persists across browser sessions
- Contact messages also stored locally

## Validation Rules

**Task Addition**:
- Task name must not be empty
- Time must be selected

**Contact Form**:
- Name: minimum 2 characters
- Email: valid email format required
- Message: minimum 10 characters

## File Structure

```
index.html      - Home page
routine.html    - View and manage routine
planner.html    - Add new tasks
tips.html       - Productivity tips
contact.html    - Contact form
style.css       - Stylesheet with responsive design
script.js       - Form validation and task management
```

## Author

Created for KTU GXEST203 - Foundations of Computing (2024 Scheme)
