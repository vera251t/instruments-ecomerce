import axios from "axios"

const useAuth = () => {

    const createUser = (url, data) => {
        axios.post(url, data)
            .then(res =>console.log(res.data))
            .catch(err => console.log(err))
    }

    const loginUser = (url, data) => {
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("users", JSON.stringify(res.data.user))
            })
            .catch(err => console.log(err))
    }

    return { createUser, loginUser }
}

export default useAuth