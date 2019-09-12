register = (data) => {
    return dispatch => {
        console.log(data);
        fetch('http://192.168.1.157:8080/family-budget/api/v1/auth/register',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(response);
                throw new Error('Erro ao cadastrar');

            }
        })
        .then(response => {
            dispatch({ type: 'REGISTER' });
            return response;
        })
        .catch(function (error) {
            throw error;
        });
    }
}

export default {
    register,
}