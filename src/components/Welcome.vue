<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">ようこそ</h2>
        <form @submit.prevent="enterChat">
          <label for="name">名前を入力してください</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods:{
    enterChat(){
      if(this.name){
        this.$router.push({
          name: 'Chat',
          params: {
            name: this.name
          }
        })
      }else{
        this.feedback = 'チャットを利用するには名前の入力が必要です。'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
