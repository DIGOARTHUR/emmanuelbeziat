<template>
	<nav class="social" v-once>
		<Item :url="social.twitter" name="Twitter">
			<path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
		</Item>

		<Item :url="social.instagram" name="Instagram">
			<path d="m16.569616,2.139245a5.291136,5.291136 0 0 1 5.291136,5.291136l0,9.13924a5.291136,5.291136 0 0 1 -5.291136,5.291136l-9.139239,0a5.291136,5.291136 0 0 1 -5.29113,-5.291136l0,-9.13924a5.291136,5.291136 0 0 1 5.29113,-5.291136l9.139239,0m0,-1.92405l-9.139239,0a7.236831,7.236831 0 0 0 -7.215181,7.215186l0,9.13924a7.236831,7.236831 0 0 0 7.215181,7.215187l9.139239,0a7.236831,7.236831 0 0 0 7.215187,-7.215187l0,-9.13924a7.236831,7.236831 0 0 0 -7.215187,-7.215186z"/>
			<path d="m18.286835,4.303799a1.3781,1.3781 0 1 0 1.378103,1.378101a1.3781,1.3781 0 0 0 -1.378103,-1.378101z"/>
			<path d="m12.064935,7.783923a4.252149,4.252149 0 1 1 -4.249743,4.249747a4.256959,4.256959 0 0 1 4.249743,-4.249747m0,-1.924048a6.176199,6.176199 0 1 0 6.188231,6.173796a6.176199,6.176199 0 0 0 -6.188231,-6.173796z"/>
		</Item>

		<Item :url="social.github" name="GitHub">
			<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
		</Item>

		<Item :url="social.linkedin" name="LinkedIn">
			<path d="M24,23.47V14.59c0-4.75-2.54-7-5.92-7a5.12,5.12,0,0,0-4.64,2.55V8H8.3c.06,1.45,0,15.48,0,15.48h5.14V14.83a3.43,3.43,0,0,1,.17-1.26,2.82,2.82,0,0,1,2.64-1.88c1.86,0,2.61,1.42,2.61,3.5v8.28ZM2.88,5.88a2.68,2.68,0,1,0,0-5.35,2.68,2.68,0,1,0-.07,5.35ZM5.45,23.47V8H.3V23.47Z"/>
		</Item>

		<Item :url="social.codepen" name="CodePen">
			<path d="M24 8.182l-.018-.087-.017-.05c-.01-.024-.018-.05-.03-.075-.003-.018-.015-.034-.02-.05l-.035-.067-.03-.05-.044-.06-.046-.045-.06-.045-.046-.03-.06-.044-.044-.04-.015-.02L12.58.19c-.347-.232-.796-.232-1.142 0L.453 7.502l-.015.015-.044.035-.06.05-.038.04-.05.056-.037.045-.05.06c-.02.017-.03.03-.03.046l-.05.06-.02.06c-.02.01-.02.04-.03.07l-.01.05C0 8.12 0 8.15 0 8.18v7.497c0 .044.003.09.01.135l.01.046c.005.03.01.06.02.086l.015.05c.01.027.016.053.027.075l.022.05c0 .01.015.04.03.06l.03.04c.015.01.03.04.045.06l.03.04.04.04c.01.013.01.03.03.03l.06.042.04.03.01.014 10.97 7.33c.164.12.375.163.57.163s.39-.06.57-.18l10.99-7.28.014-.01.046-.037.06-.043.048-.036.052-.058.033-.045.04-.06.03-.05.03-.07.016-.052.03-.077.015-.045.03-.08v-7.5c0-.05 0-.095-.016-.14l-.014-.045.044.003zm-11.99 6.28l-3.65-2.44 3.65-2.442 3.65 2.44-3.65 2.44zm-1.034-6.674l-4.473 2.99L2.89 8.362l8.086-5.39V7.79zm-6.33 4.233l-2.582 1.73V10.3l2.582 1.726zm1.857 1.25l4.473 2.99v4.82L2.89 15.69l3.618-2.417v-.004zm6.537 2.99l4.474-2.98 3.613 2.42-8.087 5.39v-4.82zm6.33-4.23l2.583-1.72v3.456l-2.583-1.73zm-1.855-1.24L13.042 7.8V2.97l8.085 5.39-3.612 2.415v.003z"/>
		</Item>
	</nav>
</template>

<script>
import { social } from '@/config'
import Item from '@/components/layout/SocialItem'

export default {
	name: 'SocialLinks',

	data () {
		return {
			social
		}
	},

	components: {
		Item
	}
}
</script>

<style lang="stylus" scoped>
@require '~@/assets/styles/variables.styl'
@require '~@/assets/styles/mixins.styl'

.social
	display flex
	flex-wrap wrap
	justify-content center
	gap 4px

	@media $mq-desktop
		margin-top 1rem
</style>
