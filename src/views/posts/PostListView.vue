<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4">
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem 
          :title="post.title" 
          :content="post.content" 
          :created-at="post.createdAt"
          @click="goPage(post.id)">
      </PostItem>
      </div>
    </div>
    <hr class="my-4"></hr>
    <AppCard>
      <PostDetailView id="1"></PostDetailView>
    </AppCard>
    
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from './PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';

import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);
const router = useRouter();

/* STEP 1 */
/*
const fetchPosts = () => {  
  const response = getPosts();
  console.log('response : ', response);
  posts.value = getPosts();
  promise 객체는 getPosts().then 으로 값을 받아야 한다.
};
*/
/* STEP 1 END */

/* STEP 2 */
/*
const fetchPosts = () => {
  getPosts().then(response => {
    console.log('response : ', response);
  }).catch(error => {
    console.error('Error : ', error);
  });
};
*/
/* STEP 2 END */

/* STEP 3 */
const fetchPosts = async () => {
  const {data} = await getPosts();
  posts.value = data;
  console.dir(response);
}
/* STEP 3 END */
fetchPosts();

const goPage = (id) => {
  router.push(`/posts/${id}`);
  //router.push('/posts/' + id);
  /*
  router.push{{
    name: 'PostDetail',
    params : {
      id
    }
  }}
  */
};
</script>

<style lang="scss" scoped>

</style>