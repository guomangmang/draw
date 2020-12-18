import axios from '../http'; // 导入http中创建的axios实例



  // 待配对的生产数据
  export const PairedProData = () => {
    return axios({
      url: `/unmatched/manufacture/list`,
      method: 'get',
      })
}

  // 待配对的质检数据
  export const PairedQaData = () => {
    return axios({
      url: `/unmatched/test/list`,
      method: 'get',
      })
}

  // 已经配对的数据
  export const PairedData = (item_per_page,page,date,batch) => {
    return axios({
      url: `/matched/list?item_per_page=${item_per_page}&page=${page}&date=${date}&batch=${batch}`,
      method: 'get',
      })
}


  // 已经配对的详细数据
  export const PairedFullData = (id) => {
    return axios({
      url: `/matched/${id}/detail`,
      method: 'get',
      })
}

