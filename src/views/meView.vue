<template>
    <div>
        个人中心
        <bottomBar active="/me"></bottomBar>
  </div>
</template>

<script>
import bottomBar from "../components/bottomBar.vue";

export default {
  components: {
    bottomBar
  }
}
</script>