// == 值比较  === 类型比较 $(id) ---->  document.getElementById(id)
function $(id){
    return typeof id === 'string' ? document.getElementById(id):id;
}

// 当页面加载完毕
window.onload = function(){
    // 拿到所有的标题(li标签) 和 标题对应的内容(div)
    var titles = $('tab-header').getElementsByTagName('li');
    var divs = $('tab-content').getElementsByClassName('dom');
    // 判断
    if(titles.length != divs.length) return;
    // 遍历
    for(var i=0; i<titles.length; i++){
        // 取出li标签
        var li = titles[i];
        li.id = i;
//        console.log(li);
        // 监听鼠标的移动
		li.onclick = function(){
        //li.onmousemove = function(){
            for(var j=0; j<titles.length; j++){
                titles[j].className = '';
                divs[j].style.display = 'none';
            }
            this.className = 'selected';
            divs[this.id].style.display = 'block';
        }
    }
	//alert("" + location.hash);
	if( location.hash ===  "#privacypolicy"){
		//alert("" );
		//var privacypolicy = document.getElementById("privacypolicy");
		//privacypolicy.click();
		//alert("privacypolicy");
		titles[titles.length - 1].click();
	}

}


window.onhashchange = function(){
	
	
	
	
	
}
