;(function(w){

	function getElementsByClassName(classname){
		var result = [];
		var tmpresult;
		if(document.getElementsByClassName)
		{
			result = document.getElementsByClassName(classname);
			return result;
		}else{
			tmpresult = document.getElementsByTagName('*');
			for(var i in tmpresult){
				if(tmpresult[i].className.indexOf(classname) != -1){
					result.push(tmpresult[i]);
				}
			}
		}
		return result;
	}



	var ele = document.getElementById('move');
	var clientX,clientY,moving;
	var mousedownHandle = function(event){
		event = event || window.event;
		clientX = event.clientX;
		clientY = event.clientY;
		moving = !0;
	}
	var mousemoveHandle = function(event){
		if(!moving){
			return;
		}
		event = event || window.event;
		var newClientX = event.clientX,newClientY = event.clientY;
		var left = parseInt(window.getComputedStyle(ele).left) || 0,
			top = parseInt(window.getComputedStyle(ele).top) || 0;
			
		ele.style.left = left + (newClientX - clientX) + 'px';
		ele.style.top = top + (newClientY - clientY) + 'px';
		clientX = newClientX;
		clientY = newClientY;
	}
	var mouseupHandle = function(){
		moving = !1;
	}

	ele.addEventListener('mousedown',mousedownHandle,false);
	ele.addEventListener('mousemove',mousemoveHandle,false);
	ele.addEventListener('mouseup',mouseupHandle,false);


})(window)