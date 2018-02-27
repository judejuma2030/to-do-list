// Back-end

// Constructor
function TaskItem(name) {
    this.taskName = name;
  }

  // Contact.prototype.fullName = function() {
  //     return this.firstName + " " + this.lastName;
  // }

  // Front-end
  $(document).ready(function() {
      $("form#new-task").submit(function(event) {
        event.preventDefault();{}
        var userTaskInput = $("input#new-task-item").val();

        // var newContact = new Contact(inputtedFirstName, inputtedLastName);
        var newTaskItem = new TaskItem(userTaskInput);

        $("ul#to-do-list").append("<li><span class='task'>" + newTaskItem.taskName + "</span><button id='deleteTaskButton'>delete</button></li>");

        // $("input#new-first-name").val("");
        // $("input#new-last-name").val("");

        $("ul#to-do-list").on("click", "button", function(event) {
          event.preventDefault();
          $(this).parent().remove();
        });
      });
  });
