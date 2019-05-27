window.setTimeout(function() {
	var todoList = [];
	while(ch !== "quit")
	{
		var ch = prompt("What do you want to do?");
		if(ch === "new")
		{
			todoList.push(prompt("Add a new item"));
		}
		else if(ch === "list")
		{
			console.log(todoList);
		}
	}
}, 500);