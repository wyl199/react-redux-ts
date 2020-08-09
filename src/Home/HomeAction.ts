import axios from "axios";

export enum Method {
    Get = 'GET',
    Post = 'POST',
    Put = 'PUT',
    Delete = 'DELETE'
}

/** 创建普通的action */
const createAction = (type: string, payload: any) => () => (dispatch: any) => dispatch({type, payload});
/** 创建接口类的action */
const createAxiosAction = (type: string, url: string, method = Method.Get ) => () => (dispatch: any) => {
    const promise: any = method === Method.Get ? axios.get(url) : 
                    method === Method.Post ? axios.post(url) : 
                    method === Method.Put ? axios.put(url) : 
                    axios.delete(url);
                    
    promise.then((res: { data: any; }) => dispatch({type, payload: res.data}));
}

export const actions = {
    getHomeData: createAction('EXAMPLE', '_'),
    getApiData: createAxiosAction('GET_API', 'http://apis.juhe.cn/mobile/get')
}