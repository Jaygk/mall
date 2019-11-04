<template>
  <div class="detail-rate">
    <div class="rate-top">
      <h3>用户评价</h3>
      <span>更多</span>
    </div>

    <div class="comment" v-if="detailRateList.length">
      <div class="comment-item" v-for="item in detailRateList">
        <div class="avatar">
          <img :src="item.user.avatar" alt="">
          <span>{{item.user.uname}}</span>
        </div>

        <div class="content">
          <p>{{item.content}}</p>
          <div class="content-info">
            <span class="date">{{item.created | format}}</span>
            <span class="style">{{item.style}}</span>
          </div>
        </div>

        <div class="comment-image">
          <img :src="itemImg" alt="" v-for="itemImg in item.images">
        </div>
      </div>
    </div>

    <div v-else class="no-comment">
      <p>暂无评论</p>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'

  export default {
    name: 'DetailRate',
    data() {
      return {}
    },
    props: {
      detailRateList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    filters: {
      format(value) {
        const date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
    }
  }
</script>

<style scoped>
  .detail-rate {
    font-size: 13px;
    padding-left: 8px;
  }

  .rate-top {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    align-items: center;
    padding-left: 8px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
  }

  .rate-top h3 {
    font-size: 14px;
    font-weight: normal;
  }

  .comment-item .avatar {
    /*margin-top: 15px;*/
    display: flex;
    align-items: center;
  }

  .avatar img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }

  .avatar span {
    font-size: 14px;
    /*font-weight: 800;*/
    color: #000;
    display: inline-block;
    margin-left: 10px;
  }

  .comment-item .content {
    margin: 10px 0;
  }

  .content .content-info {
    margin-top: 8px;
    color: #9d9d9d;
  }

  .content-info span {
    display: inline-block;
    height: 22px;
    line-height: 22px;
  }

  .content-info .style {
    margin-left: 8px;
  }

  .comment-image img {
    width: 70px;
    height: 70px;
    display: inline-block;
    margin-right: 8px;
  }
  .no-comment {
    padding-left: 8px;
  }
</style>
