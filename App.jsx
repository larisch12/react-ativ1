//Estrutura padrão
import TemplateExpressions from "./componentes/TemplateExpressions.jsx";
import Componentes from "./componentes/Componentes.jsx";
function App(){
  return(
    <div>
      <h1>Vendo Cachorro</h1>
      <p>Cachorro da raça julgadora, julga todas as suas ações. Possui pelagem caramelo sobrancelha lacradora rara. </p>
      <TemplateExpressions/>
      <Componentes/>
    </div>
  );
}
export default App