import axios from 'axios'

const axiosIns = axios.create({ 
    baseURL : 'https://ats-be-n81k.onrender.com'
})

const OfferApi = {
    getalloffer : ()=>{
        return axiosIns.request({
            url : '/api/v1/offer/all',
            method : 'GET'
        })
    },
    createoffer : ()=>{
        return axiosIns.request({
            url : '/api/v1/offer/createoffer',
            method : 'POST'
        })
    },
    updateoffer: (offer, id)=>{
        return axiosIns.request({
            url : `/api/v1/offer/updateoffer/${id}`,
            method : 'PATCH',
            data : offer
        })
    },
    deleteoffer : (id)=>{
        return axiosIns.request({
            url : `/api/v1/offer/deleteoffer/${id}`,
            method : "DELETE"
        })
    }
}

export default OfferApi