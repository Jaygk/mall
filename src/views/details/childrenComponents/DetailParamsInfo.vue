<template>
  <div class="detail-params-info">
    <h3>参数信息</h3>
    <div class="good-model">
      <table>
        <tr v-for="item in detailItemParams.tables">
          <td v-for="c in item">
            {{c}}
          </td>
        </tr>
      </table>
    </div>

    <div class="good-info">
      <table>
        <tr v-for="item in detailItemParams.model">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParamsInfo',
    data() {
      return {}
    },
    props: {
      detailItemParams: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {

    }
  }
</script>

<style scoped>
  .detail-params-info {
    margin-top: 15px;
    width: 100%;
    font-size: 13px;
  }

  .detail-params-info h3 {
    margin-left: 8px;
    font-size: 14px;
    font-weight: normal;
  }

  .good-model table {
    width: 100%;
    /*padding-left: 8px;*/
    /*border-bottom: 2px solid #ccc;*/
  }

  .good-model table tr {
    border-bottom: 1px solid #ccc;
    margin-left: 8px;
    width: 95%;
    display: flex;
    align-items: center;
    height: 45px;
  }

  .good-model table td {
    /*width: 45px;*/
    height: 24px;
    line-height: 24px;
    flex: 1;
  }

  .good-info {
    margin-top: 15px;
  }

  .good-info table {
    width: 100%;
  }

  .good-info table tr {
    margin-left: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    height: 45px;
    border-bottom: 1px solid #f3f3f3;
  }

  .good-info table td {
    height: 24px;
    line-height: 24px;
  }

  .good-info table .key {
    flex: 2.6;
  }

  .good-info table .value {
    flex: 7.4;
    color: var(--color-tint);
  }
</style>
