import { reactive, onMounted, onUnmounted, toRefs } from "@vue/composition-api"

export default function () {

    const state = reactive({
        x: 0,
        y: 0
    })
    const update = e => {
        state.x = e.pageX
        state.y = e.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', update)
    })

    onUnmounted(() => {
        window.addEventListener('mousemove', update)
    })

    return {...toRefs(state)}
}