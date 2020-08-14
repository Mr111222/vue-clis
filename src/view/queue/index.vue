<template>
	<div>
		现在是{{time}}S,<br>{{msg}} 
	</div>
</template>
<script>
export default {
	data () {
		return {
			time: 9,
			msg: '',
			timer: null
		}
	},
	mounted () {
		this.getNew()
		this.$once('hook:beforeDestroy', ()=>{
			clearInterval(this.timer)
		})
	},
	methods: {
		getNew () {
			this.time = 9
			this.timer = setInterval(()=>{
				this.time --
				if(this.time < 0) {
					clearInterval(this.timer)
					this.getNew()
				}
			}, 1000)
			this.ajax()
		},
		ajax (){
			this.msg = `数据更新啦${new Date()}`
		}
	}
}
	
</script>