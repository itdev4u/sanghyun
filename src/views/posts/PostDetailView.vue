<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ post.createdAt }}</p>
    <hr class="my-4"/>
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove(props.id)">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {  useRoute, useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';
import { deletePost } from '@/api/posts';

const props = defineProps({
  id: String,
});

const router = useRouter();
//const route = useRoute();
//const id = route.params.id;
/**
 * ref
 * 장점 : 객체할당이 가능 / primitive, 참조형도 가능
 * 단점 : form.value.title
 */
const post = ref({});

const fetchPost = async () => {
  try {
    const { data }  = await getPostById(props.id);
    //console.log(data);
    setPost(data);
  } catch(error) {
    console.error(error);
  }
};
const setPost = (data) => {
  post.value.title = data.boardMap.TITLE;
  post.value.content = data.boardMap.CONTENT;
  post.value.createdAt = data.boardMap.REG_DTM;
};

fetchPost();

const remove = async (id) => {
  if(confirm('삭제하시겠습니까?')) {
    try {
      await deletePost(id);
      router.push({ name: 'PostList'});
    } catch(err) {
      console.error(err);
    }
  } 
}
const goListPage = () => router.push({ name: 'PostList'});
const goEditPage = () => router.push({ name: 'PostEdit', params: { id: props.id }});
</script>

<style lang="scss" scoped>

</style>