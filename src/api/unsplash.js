import axios from 'axios'

export default axios.create({ 
    
    baseUrl: "https://api.unsplash.com", 
    headers:{   

        Authorization: "Client-ID kT-9YxAvrMlgWSi4-BK_YfpAzVIKEm-GEBGiKkrEWn0"

    } 

})