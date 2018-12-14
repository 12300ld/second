<template>
  <div class="loading">
  <img src="../../static/images/loading.gif" alt="" />
  </div>
</template>

<script>
export default {
  name: 'loading',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '@/assets/sass/index.scss';
	
	img{
		width:100%;
	}
</style>
