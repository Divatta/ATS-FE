import axios from 'axios'

const axiosIns = axios.create({ 
    baseURL : 'https://ats-be-n81k.onrender.com'
})

const JobApi = {
    getAll : ()=>{
        return axiosIns.request({
            url : '/api/v1/jobs/all',
            method : 'GET'
        })
    },
    create : ()=>{
        return axiosIns.request({
            url : '/api/v1/jobs/create',
            method : 'POST'
        })
    },
    update: (job, id)=>{
        return axiosIns.request({
            url : `/api/v1/jobs/update/${id}`,
            method : 'PATCH',
            data : jobs
        })
    },
    delete : (id)=>{
        return axiosIns.request({
            url : `/api/v1/product/delete/${id}`,
            method : "DELETE"
        })
    }
}

export default JobApi