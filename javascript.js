window.onload = function() {
	var allChecked = document.querySelector("#allChecked");
	var checked = document.querySelectorAll("#checked");

	// 实现勾选全选后，子选项勾选框全部选中；全选取消后，子选项勾选框全部取消选中
	allChecked.onclick = function() {
		for(var i=0; i<checked.length; i++) {
			checked[i].checked = allChecked.checked;
		}
	}
	// 实现当全部子选项勾选框选中后，全选勾选
	for(var i=0; i<checked.length; i++) {
		checked[i].onclick = function() {
			var flag = true;
			for(var j=0; j<checked.length; j++) {
				if(!checked[j].checked) {
					flag = false;
					break;
				}
			}
		allChecked.checked = flag;
		}
	}

	var items = document.querySelectorAll(".items");
	for (var i=0; i<items.length; i++) {
		// 实现鼠标移入后，该行高亮显示
		items[i].onmouseover = function() {
			this.className = "items_onmouseover";
		}
		// 实现鼠标移开后，该行恢复原来的样式
		items[i].onmouseout = function() {
			this.className = "";
		}
	}
}
