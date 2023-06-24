import api from "./api";

function createHeaders() {
    return {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }
}

export async function listVeiculos() {
    const auth = createHeaders()
    const {data} = await api.get("/veiculos",auth)
    return data.data
}