import { api } from "./api";

export async function loginRequest(email, password) {
    try {
        const request = await api.post('login', { email, password })

        return request.data
    } catch (error) {
        console.log(error)
    }
}

export function setUserLocalStorage(user) {
    localStorage.setItem('u', JSON.stringify(user))
}


export function getUserLocalStorage() {
    const json = localStorage.getItem('u')
    if (!json) {
        return null
    }
    const user = JSON.parse(json)

    return user ?? null
}