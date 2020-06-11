<template>
	<div>
	<button @click="getAjax">getAJAX</button>
	<button @click="postAjax">飞度科技</button>
		<button @click="getAdd">增加</button>
		<button @click="getSub">减少</button>	
		{{$store.gettes}}
		{{count}}<br />
		{{ajaxData}}
		<div>
			<ul>
				<li v-for="item, index in list" :key="index">
					<input type="text" v-model="item.val"><span @click='edit(item)'>修改</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import {mapState, mapActions, mapMutations} from 'vuex'
	export default {
		creted () {
			// this.getAjax()
		},
		data () {
			return {
				list: [
					{name: 1, val:'我是测试数据1'},
					{name: 2, val:'我是测试数据2'},
					{name: 3, val:'我是测试数据3'},
					{name: 4, val:'我是测试数据4'},
					{name: 5, val:'我是测试数据5'},
					{name: 6, val:''},
				]
			}
		},
		computed: {
			...mapState(['count', 'ajaxData'])
		},
		methods: {
			async postAjax () {
				let obj = {
					appId: "0154981b-11c5-49ad-839d-a3420af507d8",
					loginNum: "15201284237",
					password: "e10adc3949ba59abbe56e057f20f883e"
				}
				let datas = await this.$http.post('https://admin.ifreedo.cn/cloudlink/cloudlink-core-framework/login/login', obj)
					this.$store.dispatch('getToken', 'xxxxx')
			},
			// getAdd () {
			// 	this.$store.dispatch('getAdd')
			// },
			// getSub () {
			// 	this.$store.dispatch('getSub')
			// },
			...mapMutations(['ADD', 'SUB', 'AJAX']),
			getAjax () {
				let datas = [{name: 'admin', age:20}]
				this.AJAX(datas)
			},
			edit (item) {
				console.log(item, 9999)
			},
			...mapActions(['getAdd', 'getSub'])
		}
	}
</script>