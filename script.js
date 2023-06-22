function Task(title, description) {
    this.title = title
    this.description = description
    //this.dueDate = dueDate
    //this.priority = priority
}

document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let task = new Task(title, description)
    console.log(task)
})