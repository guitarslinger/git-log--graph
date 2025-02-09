import { ref, defineComponent } from 'vue'
import { selected_git_action, refresh_main_view } from './store.js'
import GitInput from './GitInput.vue'

export default defineComponent({
	components: { GitInput },
	setup() {
		let keep_open = ref(false)

		function success() {
			if (! keep_open.value)
				selected_git_action.value = null
		}

		return {
			keep_open,
			success,
			refresh_main_view,
			selected_git_action
		}
	},
})
