export const state = () => ({
    questions: [],
    index: 0,
})

export const mutations = {
    init(state, questions) {
        state.questions = questions;
    },
    nextIndex(state) {
        state.index++;
    },
    prevIndex(state) {
        state.index--;
    }
}
