<script>
	import Queue from './utils/queue'
	import Timer from './utils/timer'
	let queue  = new Queue()
	let timer  = new Timer()


	function addlist () {
		queue.add(timer)
		timer.beginFn()
		queue.execute(0)
	}

	function getlist () {
		return queue.getList()
	}

	queue.executeFun = function(obj){
		obj.beginFn()
	}




	export default {
		addlist,
		getlist
	}

</script>