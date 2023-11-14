import axios from "axios";

const companyApi = axios.create({
    companyBaseURL: 'http://localhost:9091/api/v1/company',
});

export const saveWorker = (token, workerData) => {
    return companyApi.post('/save/worker?token=' + token , {...workerData });
};

/*
/save/worker/' + token , Path Variable
 */

export default companyApi;