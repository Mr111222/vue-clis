Timer = function(){
	var num = 0
	var timer = null
	this.beginFn = function () {
		timer = setInterval(()=>{
			num ++
		}, 1000)
	}
	this.stopFn = function () {
		clearInterval(timer)
	}
	this.getNum  = function () {
		return num
	}
}

module.exports = Timer