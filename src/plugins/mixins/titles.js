export default {
	methods: {
		getDynamicTitle (title) {
			this.head.title = title
			this.$emit('updateHead')
			return title
		}
	},
}
