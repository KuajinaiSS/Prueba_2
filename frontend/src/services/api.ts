import axios , { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody)
};


const product = {

        // Obtener la lista de productos
        list: () => requests.get('/api/products'),

        // Agregar un nuevo producto
        create: (product: any) => requests.post('/api/products', product),

        // Actualizar un producto existente
        update: (id: number, product: any) => requests.put(`/api/products/${id}`, product),

        // Eliminar un producto
        delete: (id: number) => requests.del(`/api/products/${id}`)

}

const agent = { product };
export default agent;