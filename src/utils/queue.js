class Queue {
	constructor() {
   	this.timer = null
		this.queuelist = []
		this.executeFun  = null

  }
	add (res) {
		this.queuelist.push(res)
	}
	delete (index, id) {
		this.queuelist.forEach((res, index)=>{
			if(res.id = id) {
				this.queuelist.splice(index, 1)
			}
		})
	}
	getList () {
		return this.queuelist
	}

	execute (index) {
		this.executeFun(this.queuelist[index])
	}

}

export default Queue