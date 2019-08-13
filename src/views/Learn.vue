<template>
  <div>
    {{ name }}
    {{ coursePrice }}
    <button @click="handleClick">改变</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  methods: {
    handleClick() {
      this.$store.commit("learn/changePrice", { price: 20 });
    }
  },
  computed: {
      ...mapState('learn', ['name']),
      ...mapGetters('learn', ['coursePrice'])
  }
};
</script>
