<<<<<<< HEAD
import { Toast } from "native-base";

register = (data) => {
    return dispatch => {
        fetch('http://192.168.1.157:8080/api/v1/auth/register',{
=======
register = (data) => {
    return dispatch => {
        console.log(data);
        fetch('http://192.168.1.157:8080/family-budget/api/v1/auth/register',{
>>>>>>> 80ea3bc7be412c1973e7fb2ec3f6896a15f829db
                method: 'POST',
                body: JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }
        )
        .then(response => {
            if (response.ok) {
<<<<<<< HEAD
                Toast.show({
                    text: "Informações cadastradas com sucesso. Informe os dados cadastrados para realizar o login.",
                    buttonText: "OK",
                    duration: 3000
                });

                return dispatch({ type: 'REGISTER' });
            } else {
                console.log(response);
                Toast.show({
                    text: "Wrong password!",
                    buttonText: "Okay",
                    duration: 3000
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
        
=======
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
>>>>>>> 80ea3bc7be412c1973e7fb2ec3f6896a15f829db
    }
}

export default {
    register,
}