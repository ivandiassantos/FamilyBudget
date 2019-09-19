import { Toast } from "native-base";

register = (data) => {
    return dispatch => {
        fetch('http://192.168.1.157:8080/api/v1/auth/register',{
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
        .then(response => {
            if (response.ok) {
                Toast.show({
                    text: "Informações cadastradas com sucesso. Informe os dados cadastrados para realizar o login.",
                    buttonText: "OK",
                    duration: 4000
                });

                return dispatch({ type: 'REGISTER' });
            } else {
                console.log(response);
                Toast.show({
                    text: "Usuário já está cadastrado.",
                    buttonText: "",
                    duration: 5000
                });

            }
        })
        .catch(function (error) {
            Toast.show({
                text: "Não foi possível realizar o cadastro.",
                buttonText: "OK",
                duration: 3000
            });
            throw error;
        });
        
    }
}

authenticate = (data) => {
    return dispatch => {
        fetch('http://192.168.1.157:8080/api/v1/auth/authenticate',{
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
                Toast.show({
                    text: "Login e/ou senha inválido(s).",
                    buttonText: "",
                    duration: 5000
                });

            }
        })
        .then(response => {
            console.log('Response: ', response);
            return dispatch({ type: 'AUTHENTICATE' });

        })
        .catch(function (error) {
            Toast.show({
                text: "Não foi possível realizar o login.",
                buttonText: "OK",
                duration: 5000
            });
            throw error;
        });
        
    }
}
export default {
    register,
    authenticate,
}