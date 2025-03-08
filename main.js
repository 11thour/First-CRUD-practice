
		function addToList() {
			var input = document.getElementById("input").value;
			var node = document.createElement("LI");
			var textnode = document.createTextNode(input);
			node.appendChild(textnode);
			document.getElementById("list").appendChild(node);
			var button = document.createElement("button");
			button.innerHTML = "X";
			button.onclick = function() {
				node.remove();
			}
			node.appendChild(button);
			var updateButton = document.createElement("button");
			updateButton.innerHTML = "Update";
			updateButton.onclick = function() {
				var updatedInput = prompt("Enter the updated information:");
				textnode.nodeValue = updatedInput;
			}
			node.appendChild(updateButton);
		}
