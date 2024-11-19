<template>
  <div>
    <h2>게시글 목록</h2>
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control" />
        </div>
        <div class="col-3">
					<select v-model="params._limit" class="form-select">
						<option value="3">3개씩 보기</option>
						<option value="6">6개씩 보기</option>
						<option value="9">9개씩 보기</option>
					</select>
        </div>
      </div>
    </form>
    <hr class="my-4">
    <div class="row g-3">
      <div v-for="post in posts" :key="post.UUID" class="col-4">
        <PostItem 
          :title="post.TITLE" 
          :content="post.CONTENT" 
          :created-at="post.REG_DTM"
          @click="goPage(post.UUID)">
      </PostItem>
      </div>
    </div>
  
    
  </div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from './PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';

import { getPosts } from '@/api/posts';
import { ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const posts = ref([]);
const router = useRouter();
// paging 관련 
const params = ref({
  _sort: 'createdAt',
  _order: 'desc',
  _limit: 3,
  _page: 1,
  title_like: ''
});

const totalCount = ref(0);

const fetchPosts = async () => {
  //const { data } = await getPosts(params.value);
  try {
    getPosts({
      ...params.value
    }).then(res => {
      console.log(res.data);
      posts.value = res.data.boardList;
    })
  } catch(err) {
    console.log('err : ', err);
  }  
};

const goPage = (uuid) => {
  router.push(`/posts/${uuid}`);
};

fetchPosts();
/* watchEffect에 callback 함수를 넣어주면 callback함수에서 사용하는 값이 변경되는 경우 함수를 재실행 해준다. */

</script>

<style lang="scss" scoped>

</style>