<template>
	<div :class="`github-card card-${align}`">
		<img :src="github.stats" alt="github stats" loading="lazy" v-if="cards.stats">
		<img :src="github.languages" alt="Github stats" loading="lazy" v-if="cards.languages">
	</div>
</template>

<script>
import { github } from '@/config'

export default {
	name: 'GithubCards',

	props: {
		align: {
			type: String,
			default: 'center'
		},
		cards: {
			type: Object,
			default: () => {
				return {
					stats: true,
					languages: true
				}
			}
		}
	},

	data () {
		return {
			github
		}
	}
}
</script>

<style lang="stylus" scoped>
.github-card
	margin-bottom 1rem
	@supports (content-visibility auto)
		content-visibility auto

.card-center
	text-align center

.card-left
	text-align left

.card-row
	display flex
	align-items flex-start

.card-column
	display flex
	flex-direction column
</style>
