// TemplateExpressions.jsx

const TemplateExpressions = () => {
    const animal = {
      nome: "Preço",
      preco: 10.00
    }
  const imagem='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5f4UUxFQxteVjb7WJeQMwpd7auPGk8IAUDxjJzSoQZmlwPmPzh3x5BUuUijMXveNm8IA&usqp=CAU'
    return (
      <div>
        <h2>{animal.nome}</h2>
        <p>Preço: R$ {animal.preco}</p>
        <img src={imagem}/>
      </div>
    )
  }
  
  export default TemplateExpressions