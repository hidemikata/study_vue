<template>
  <div class="signup">
    <h2>ユーザー登録</h2>
    <form @submit.prevent="singup">
      <div>
        メール:
        <input type="text" placeholder="メール" v-model="username" required>
      </div>
      <div>
        パスワード:
        <input type="password" placeholder="パスワード" v-model="password" required>
      </div>
      <div>
        パスワード(確認):
        <input type="password" placeholder="パスワード(確認)" v-model="passwordConfirm" required>
      </div>
      <button>登録</button>
    </form>
    <router-link to="/login">ログイン</router-link>
    <router-link to="/confirm">確認コード入力</router-link>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      password: '',
      passwordConfirm: ''
    }
  },
  methods: {
    singup () {
      if (this.username && (this.password === this.passwordConfirm)) {
        this.$cognito.signUp(this.username, this.password)
          .then(resutl => {
            // 登録に成功したら、確認コードの入力画面を表示
            this.$router.replace('/confirm')
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

