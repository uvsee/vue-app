# 完整的导航解析流程
1. 导航被触发。
2. 在失活的组件里调用离开守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。

## 全局守卫
- beforeEach
- beforeResolve
- afterEach

## 路由独享守卫
- beforeEnter

## 组件内守卫
- beforeRouteLeave
- beforeRouteEnter
- beforeRouteUpdate
- to from next

### 进入某一路径时，执行顺序
- beforeEach -> beforeEnter -> beforeRouteEnter -> beforeResolve -> afterEach

# 动态路由
- /question/:id
- this.$route.params.xx
- this.$route.query.xx

# 路由元信息
- 存储路由信息 meta
- to.meta
- to.matched

# Vuex

## state
- this.$store.state.xx
- mapState(['xx'])
- mapState({
    newXxx: state => state.xx
})

## getters
- this.$store.getters.xx
- mapGetters(['xx'])
- mapGetters({
    newXxx: 'xx'
})
- getters: {
    func (stete, getters) {
        return 'xx'
    }
}

## mutations
- 改变vuex中的状态
- 只能执行同步的
- this.$store.commit('xx')
- mapMutations(['xx'])
- mapMutations({
    newXx: 'xx'
})

## actions
- 提交mutations，让mutations去改变状态
- 能执行异步
- this.$store.dispatch(['xx'])
- mapActions(['xx'])
- mapActions({
    newXx: 'xx'
})

## modules
- 根据功能让vuex分模块
- state放在每个模块下，getters、mutations、actions放在全局

### 无namespaced
- 获取state：this.$store.moduleName.xx
- 获取getters：this.$store.getters.xx
- 操作mutations：this.$store.commit('xx')
- 操作actions：this.$store.dispatch('xx')
- 可以通过mapXxx方式拿到getters、mutations、actions，但是不能拿到state，如果想通过这种方式获取state，需要加命名空间：namespaced:true

### 有namespaced 建议使用这种
- 获取state：this.$store.moduleName.xx
- 获取getters：this.$store['moduleName/getters'].xx
- 操作mutations：this.$store.commit('moduleName/xx')
- 操作actions：this.$store.dispatch('moduleName/xx')
- 可以通过mapXxx：mapXxx('moduleName', ['xx']) mapXxx('moduleName', {})
- abcdefghijklmonpqr