fetch('http://localhost:8000/api/test')
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then(error => {
            const e = new Error("Ошибка")
            e.data = error
            throw e
        })
    })
    .then(response => console.log(response))
    .catch(error => console.log("error", error))