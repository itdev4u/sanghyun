<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">이름</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.UUID">
          <th scope="row">{{ member.UUID}}</th>
          <td>{{ member.ID }}</td>
          <td>{{ member.USER_NM}}</td>
        </tr>
      </tbody>
    </table>    
  </div>
</template>
<script setup>
import  { getMembers } from '@/api/posts';
import { ref } from 'vue';

const members = ref([]);
const params = ref({});

const fetchMembers = async () => {
  try {
    getMembers({
      ...params.value
    }).then(res => {
      members.value = res.data.memberList;
    })
  } catch(err) {
    console.log('err : ', err);
  }
};

fetchMembers();
</script>
<style>
</style>