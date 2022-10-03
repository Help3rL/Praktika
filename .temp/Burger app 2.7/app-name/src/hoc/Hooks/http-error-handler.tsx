import { Axios, AxiosError, AxiosInstance, AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from 'axios';
import {useState, useEffect} from 'react'


export default (httpClient:AxiosInstance) => {
    const [error, setError] = useState<any>(null)
            
        const reqInterceptor = httpClient.interceptors.request.use((req:AxiosRequestConfig) =>{
            setError(null)
            return req;
        })
        const resInterceptor = httpClient.interceptors.response.use (
         (res:AxiosResponse) => res,
         (err:AxiosError) => {
            setError(err)
         }
        )

        useEffect(() => {
            return () => {
                httpClient.interceptors.request.eject(reqInterceptor)
                httpClient.interceptors.request.eject(resInterceptor)
            };
        }, [reqInterceptor, resInterceptor]); 
       
        const errorConfirmedHandler = ():void => {
            setError(null)
        }
        return [error, errorConfirmedHandler] as const
}