<template>
  <div>
    <h2>게시글 목록</h2>
    <form @submit.prevent>
      <div class="row g-3">
        <div class="col">
          <input v-model="params.title_like" type="text" class="form-control" @keyup.enter="fetchPosts()"/>
        </div>
        <div class="col-3">
					<select v-model="params._limit" class="form-select" @change="fetchPosts()">
						<option value="3">3개씩 보기</option>
						<option value="6">6개씩 보기</option>
						<option value="9">9개씩 보기</option>
					</select>
        </div>
      </div>
    </form>
    총 {{ totalCount }}개
    <hr class="my-4">
    <div class="row g-3">
      <div v-for="post in posts" :key="post.UUID" class="col-4">
        <PostItem 
          :title="post.TITLE" 
          :content="post.CONTENT" 
          :created-at="post.REG_DTM"
          :createUserNm="post.USER_NM"
          @click="goPage(post.UUID)">
      </PostItem>
      </div>
    </div>
  
    <hr class="my-4"></hr>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: !( params._page > 1) }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="--params._page">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in pageCount" :key="page" class="page-item" :class="{ active: params._page === page }">
          <a class="page-link" href="#" @click.prevent="params._page = page">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !(params._page < pageCount) }">
          <a class="page-link" href="#" aria-label="Next"  @click.prevent="++params._page">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>     
    
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
//const pageCount = computed(() => Math.ceil(totalCount.value / params.value._limit));
let pageCount = 0;


const fetchPosts = async () => {
  try {
    getPosts({
      ...params.value
    }).then(res => {      
      posts.value = res.data.boardList;
      totalCount.value = res.data.totalCount;
      computePageCount();
    })
  } catch(err) {
    console.log('err : ', err);
  }  
};

const computePageCount = () => {
  pageCount = Math.ceil(totalCount.value / params.value._limit);
  console.log('pageCount : ', pageCount);
};

const goPage = (uuid) => {
  router.push(`/posts/${uuid}`);
};

//fetchPosts();
watchEffect(fetchPosts);
</script>

<style lang="scss" scoped>

</style>