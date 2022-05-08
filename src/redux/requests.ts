import axios,{AxiosResponse} from "axios";

export async function getData(url:string){
    return axios.get(url).then(
        (response: AxiosResponse<any>) => response)
            .catch(error => error);
}

export async function postData(url: string, data: any){
    return axios.post(url, data,{ headers: {'Content-Type': 'application/json'} })
            .then((response: AxiosResponse<any>) => response);
}