export default {
    state: {
        name: 'chao',
        age: 18,
        studentList: []
    },
    getters: {
        newStudentList(state) {
            return state.studentList.map(student => `姓名：${student.name} 年龄：${student.age}`)
        }
    },
    mutations: {
        changeStudentList(state, { tempObj, name }) {
            state.studentList.push(tempObj);
            state.name = name;
        }
    },
    actions: {
        changeStudentList({ commit }, payload) {
            setTimeout(() => {
                commit('changeStudentList', payload);
            }, 1000);
        }
    }
}