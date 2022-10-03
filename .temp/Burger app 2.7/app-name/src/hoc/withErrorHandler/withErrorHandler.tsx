import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Hocs'
import { VoidFunction } from '../../components/UI/Modal/Modal';

import useHttpErrorHandler from '../Hooks/http-error-handler'


// WrappedComponent ir props any kadangi nezinom koks componentas kokius propsus gali paduoti.
const withErrorHandler = (WrappedComponent:any, axios:AxiosInstance) => {
    return (props:any) => {
            const errorHandler = useHttpErrorHandler(axios)
            const error:AxiosError|null = errorHandler[0]
            const clearError:VoidFunction = errorHandler[1]
            return (
                <Aux>
                    <Modal show = {error}
                    modalClosed ={clearError}>
                        {error ? error.response?.data : null} 
                    </Modal>
                    <WrappedComponent {...props} />
                </Aux>
                
            )
        }
    }


export default withErrorHandler;