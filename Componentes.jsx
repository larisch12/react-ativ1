import React from 'react'

const Componentes = () => {
    let nome = 'Carlão'
    let idade = 10
    let peso = 20.5

    const cachorro = {
        nome: 'Carlão',
        idade: 10,
        peso: 20.5,
        raça: 'Cachorro Julgador'
    }

    return (
        <div>
            <p>
                Olá, meu nome é {nome}, tenho {idade} anos.
                Cachorro: {cachorro.nome},
                Idade: {cachorro.idade} anos 
            </p>
        </div>
    )
}
export default Componentes