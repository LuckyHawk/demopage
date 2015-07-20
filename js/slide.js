function SlideComponent(obj){
				this.wrapEle = obj.element;
				this.width = obj.width;
				this.height = obj.height;
				this.left = 0;
				this.gap = 0;
				
}

SlideComponent.prototype = {
	init:function(){
		var that = this;
		var viewport = document.createElement('div');
		viewport.className = "viewport";
		viewport.id = "viewport";
		viewport.style.width = this.width + 'px';

		var slidewrap = document.createElement('div');
		slidewrap.className = "slidewrap";
		slidewrap.id = "slidewrap";
		slidewrap.style.left = '0px';

		var a_l = document.createElement('a');
		var a_r = document.createElement('a');
		a_l.className = "Larrow fl";
		a_l.href = "javascript:;";
		//a_l.textContent = "left"
		a_r.className = "Rarrow fr";
		a_r.href = "javascript:;";
		//a_r.textContent = "right";

		//this.left = parseInt(slidewrap.style.left);
		this.gap = parseInt(viewport.style.width);

		slidewrap.innerHTML = '<div class="slide"><img src="./homeimages/xian.jpg" alt=""></div><div class="slide"><img src="./homeimages/jielun.jpg" alt=""></div><div class="slide"><img src="./homeimages/jielun1.jpg" alt=""></div><div class="slide"><img src="./homeimages/cheng.jpg" alt=""></div><div class="slide"><img src="./homeimages/run1.jpg" alt=""></div><div class="slide"><img src="./homeimages/run2.jpg" alt=""></div><div class="slide"><img src="./homeimages/run3.jpg" alt=""></div><div class="slide"><img src="./homeimages/run4.jpg" alt=""></div><div class="slide"><img src="./homeimages/tianjin.jpg" alt=""></div><div class="slide"><img src="./homeimages/tianjin2.jpg" alt=""></div><div class="slide"><img src="./homeimages/tianjin3.jpg" alt=""></div><div class="slide"><img src="./homeimages/tianjin4.jpg" alt=""></div><div class="slide"><img src="./homeimages/tianjin5.jpg" alt=""></div><div class="slide"><img src="./homeimages/tianjin6.jpg" alt=""></div>';

		viewport.appendChild(slidewrap);
		viewport.appendChild(a_l);
		viewport.appendChild(a_r);
		this.wrapEle.appendChild(viewport);

		this.set_slidewrap_width(slidewrap);

		function slideleft(){//图片向左滑动
			if(Math.abs(parseInt(slidewrap.style.left)) + that.width < parseInt(slidewrap.style.width)){
				// that.left -= that.gap;
				// slidewrap.style.left = that.left + "px";
				that.SlideLeftSlow();
			}else{
				slidewrap.style.left = 0 + 'px';
				that.left = 0;
			}
		}
		function slideright(){
			if(parseInt(slidewrap.style.left) < 0){
				// that.left += that.gap;
				// slidewrap.style.left = that.left + "px";
				that.SlideRightSlow();
			}else{
				slidewrap.style.left = -parseInt(slidewrap.style.width) + that.width + 'px';
				that.left = -parseInt(slidewrap.style.width) + that.width;
			}
			
		}
		// this.addE(a_l);
		// this.addE(a_r);
		this.addEvent(a_l,'click',slideright);
		this.addEvent(a_r,'click',slideleft);
	},
	set_slidewrap_width:function(slidewrap){
		var len = slidewrap.getElementsByTagName('div').length;
		var x = len*window.parseInt(getComputedStyle(document.getElementsByClassName('slide')[0]).width);
		slidewrap.style.width = x + 'px';
	},
	// addE:function(a_ele){//为左右a标签添加click事件,向左向右滑动事件
	// 	if(a_ele.textContent == "left"){
	// 		this.addEvent(a_ele,'click',this.slideleft);
	// 	}else if(a_ele.textContent == "right"){
	// 		this.addEvent(a_ele,'click',this.slideright);
	// 	}
	// },
	addEvent:function(ele,type,handle){
		if(ele.addEventListener){
			ele.addEventListener(type,handle,false);
		}else{
			ele.attachEvent('on'+type,handle);
		}
	},

	SlideLeftSlow:function(){
		var cur_left = parseInt(slidewrap.style.left);
		var cur_gap = this.gap;
		var count = 0;
		var sub_gap = cur_gap/20;

		var setIntervalID = setInterval(function(){
			if(count >= 20)
				clearInterval(setIntervalID);
			else{
				cur_left -= sub_gap;
				slidewrap.style.left = cur_left + "px";
				count ++;
			}
		},25)
	},
	SlideRightSlow:function(){
		var cur_left = parseInt(slidewrap.style.left);
		var cur_gap = this.gap;
		var count = 0;
		var sub_gap = this.gap/20;

		var setIntervalID = setInterval(function(){
			if(count >= 20)
				clearInterval(setIntervalID);
			else{
				cur_left += sub_gap;
				slidewrap.style.left = cur_left + "px";
				count ++;
			}
		},25)
	}
}

