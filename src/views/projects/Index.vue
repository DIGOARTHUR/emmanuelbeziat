<template>
	<section class="projects">
		<Search placeholder="Recherche…" label="Rechercher" v-model="searchTerms" />

		<keep-alive>
			<GithubCards :cards="{ stats: true, languages: false }" />
		</keep-alive>

		<template v-if="projects && projects.length">
			<transition-group name="list" tag="div" class="post-list">
				<Project v-for="project in projects" :key="`repo-${project.id}`" :project="project" />
			</transition-group>
		</template>

		<Loader mini v-else />
	</section>
</template>

<script>
import { mapGetters } from 'vuex'
import slug from 'slug'
import Project from '@/views/projects/Project'
import Search from '@/components/Search'
import GithubCards from '@/components/GithubCards'
import Loader from '@/components/Loader'
import namespace from '@/plugins/mixins/namespace'

export default {
	name: 'Projects',

	mixins: [namespace],

	data () {
		return {
			namespace: 'projects',
			searchTerms: ''
		}
	},

	computed: {
		...mapGetters('projects', ['list']),

		projects () {
			return this.list.filter(project => slug(project.name).includes(slug(this.searchTerms.toLowerCase())))
		}
	},

	components: {
		Search,
		Project,
		GithubCards,
		Loader
	}
}
</script>
