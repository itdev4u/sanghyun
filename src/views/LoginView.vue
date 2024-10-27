<template>
  <form @submit.prevent>
    <div class="row mb-3">
      <label for="id" class="col-sm-2 col-form-label">아이디</label>
      <div class="col-sm-10">
        <input type="text" v-model="form.id" class="form-control" id="id" name="id">
      </div>
    </div>
    <div class="row mb-3">
      <label for="password" class="col-sm-2 col-form-label">비밀번호</label>
      <div class="col-sm-10">
        <input type="password" v-model="form.password" class="form-control" id="password" name="password">
      </div>
    </div>
    <!--fieldset class="row mb-3">
      <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </div>
    </fieldset-->
    <!--div class="row mb-3">
      <div class="col-sm-10 offset-sm-2">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck1">
          <label class="form-check-label" for="gridCheck1">
            Example checkbox
          </label>
        </div>
      </div>
    </div-->
    <div class="row g-2">
      <div class="col-auto">
          <button type="button" class="btn btn-primary" @click="login">Sign in</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
          <button class="btn btn-outline-dark" @click="regist">회원가입</button>
      </div>    
    </div>  
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { loginMember } from '@/api/posts';

const form = ref({
  id: null,
  password: null,
});

const login = () => {
  try {
    loginMember({
      ...form.value
    }).then(res => {
      console.log(res.data);
      if(res.data.RESULT === 'SUCCESS') {
        alert('로그인 성공했습니다.');
      } else {
        alert('아이디와 비밀번호를 확인 바랍니다.');
      }
    })
  } catch(err) {
    console.log('err : ', err);
  }
};
</script>

<style lang="scss" scoped>

</style>