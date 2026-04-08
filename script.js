function addTask() {
    let task = document.getElementById("task").value;

    if (task == "") {
        alert("Enter a task");
        return false;
    }

    alert("Task Added Successfully!");
    return false;
}

function validateForm() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Name cannot be empty");
        return false;
    }

    alert("Form submitted!");
    return false;
}
