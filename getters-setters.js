class User {
    set name(value){
        if(value.length < 1){
            throw new Error('Por favor, escolha um nome para o usuario')
        }
        this._name = value;
    }
    get name(){
        return this._name;
    }
    set password(value){
        if(value.length < 6){
            throw new Error('A senha deve ter no mínimo 6 caracteres')
        }
        this._password = value;
    }
    get password(){
        return '*'.repeat(this._password.length);
    }
}
const newUser = new User()
newUser.name = 'Erick'
newUser.password = '123456'
console.log(newUser.name)
//Erick
console.log(newUser.password)
//******