function ActionList() {
	this.tasks = [];
	this.taskId = 0;
}

ActionList.prototype.addToActionList = function(task) {
	task.id = this.taskId += 1;
	this.tasks.push(task);
};

ActionList.prototype.deleteListItems = function()	{

	for (let i = 0; i < this.tasks.length; i++) {
		if(this.tasks[i]){
			if(this.tasks[i].done === "checked") {
				delete this.tasks[i];
			}
		}
		
	}

	// this.tasks.forEach(function(task, index)	{
	// 	console.log(task);
	// 	if (task.done === "checked") {
	// 		actionList.tasks.splice(index, 1);
	// 	} else {
	// 		console.log(task +"- cleared");
	// 	}
	// }); 
};

function SingleTask(taskName, notes, date, id, done) {
	this.taskName = taskName;
	this.notes = notes;
	this.date = date;
	this.id = id;
	this.done = '';
}

var actionList = new ActionList();

function buildActionList() {
	var taskName = $('#task').val();
	var notes = $('#notes').val();
	var date = $('#date').val();
	actionList.addToActionList(new SingleTask(taskName, notes, date));
	console.log(actionList.tasks);
}

function printToDom() {
	var printString = [];
	actionList.tasks.forEach(function(list) {
		printString.push(
			"<ul> <div class='form-check'> <input id=" +
				list.id +
				" class='form-check-input' type='checkbox' value='done' id='defaultCheck1' " +
				list.done +
				'>' +
				list.taskName +
				'</div></ul>'
		);
	});
	$('.output').html(printString.join(''));
}



var countChecked = function() {
	var n = actionList.tasks.length - $('input:checked').length;
	$('#items-left').html(n);
	console.log(n);
};



function checkBoxListeners() {
	$('input[type=checkbox]').on('click', function() {
		countChecked();
		if (actionList.tasks[this.id - 1].done === 'checked') {
			actionList.tasks[this.id - 1].done = '';
		} else {
			actionList.tasks[this.id - 1].done = 'checked';
		}
		console.log(actionList.tasks[this.id - 1].done);
	});

}

$(document).ready(function() {
	console.log('JavaScipt is working');

	$('#delete').click(function(){
		actionList.deleteListItems();
		printToDom();
		checkBoxListeners();
	});
	
	//on click function
	$('form').submit(function(event) {
		event.preventDefault();
		buildActionList();

		countChecked();
		printToDom();


		checkBoxListeners();

	});
});
