function ActionList()	{
	this.tasks = [];
	this.taskId = 0;
}

ActionList.prototype.addToActionList = function(task) {
	
	task.id = this.taskId += 1;
	this.tasks.push(task);

}

function SingleTask(taskName, notes, date, id, done) {
	this.taskName = taskName;
	this.notes = notes;
	this.date = date;
	this.id = id;
	this.done = false;
}

var actionList = new ActionList();

var task1 = new SingleTask('dishes', 'they must be clear', 'NOW!');


actionList.addToActionList(task1);

console.log(task1);
console.log(actionList.tasks)

$(document).ready(function() {
	console.log('JavaScipt is working');

	//on click function
	$('form').submit(function(event) {
		event.preventDefault();
		console.log('click');
	});
});
