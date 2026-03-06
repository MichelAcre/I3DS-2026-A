/* Importa o hook useState do React para gerenciar estados locais no componente */
import { useState } from "react";
/* Importa os estilos CSS modulares para o componente */
import styles from "./LanguageDropdown.module.css";

/* Array de objetos representando os idiomas disponíveis para tradução, com código e rótulo */
const languages = [
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "en", label: "English" },
];

// originalText assumed to be english by default
// onTranslate callback is invoked with new text whenever the language changes
const LanguageDropdown = ({ originalText, onTranslate }) => {
  /* Estado para armazenar o idioma selecionado atualmente, inicializado como "en" (inglês) */
  const [selected, setSelected] = useState("en");
  /* Estado para controlar se a tradução está em andamento, usado para mostrar indicador de carregamento */
  const [loading, setLoading] = useState(false);

  /* Função assíncrona chamada quando o usuário seleciona um novo idioma no dropdown */
  const handleChange = async (e) => {
    /* Obtém o código do idioma selecionado (ex: "pt", "es") */
    const lang = e.target.value;
    /* Atualiza o estado selected com o novo idioma */
    setSelected(lang);
    /* Se o idioma selecionado for inglês, não precisa traduzir */
    if (lang === "en") {
      /* Chama o callback onTranslate com o texto original */
      onTranslate(originalText);
      return; /* Sai da função */
    }
    /* Define loading como true para mostrar o indicador de carregamento */
    setLoading(true);
    /* Bloco try-catch para lidar com possíveis erros na requisição */
    try {
      /* Faz uma requisição GET para a API não oficial do Google Translate */
      const res = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${lang}&dt=t&q=${encodeURIComponent(originalText)}` /* URL da API com parâmetros: idioma de origem (en), destino (lang), e texto codificado */,
      );
      /* Converte a resposta para JSON */
      const data = await res.json();
      /* Extrai o texto traduzido do array de resposta e chama onTranslate; usa fallback para originalText se falhar */
      onTranslate(data[0][0][0] || originalText);
    } catch (err) {
      /* Se ocorrer erro na requisição ou processamento */
      /* Loga o erro no console para depuração */
      console.error("translation error", err);
      /* Chama onTranslate com o texto original como fallback */
      onTranslate(originalText);
    }
    /* Define loading como false após a conclusão (sucesso ou erro) */
    setLoading(false);
  };

  /* Renderiza o JSX do componente */
  return (
    /* Container principal com estilos CSS */
    <div className={styles.container}>
      {/* Rótulo para o select, associado via htmlFor */}
      <label htmlFor="lang-select">Traduzir sinopse:</label>
      {/* Elemento select com valor controlado pelo estado selected e onChange
      chamando handleChange */}
      <select id="lang-select" value={selected} onChange={handleChange}>
        {/* Mapeia o array languages para criar opções */}
        {languages.map((l) => (
          /* Cada opção tem key única (código) e value (código) */
          <option key={l.code} value={l.code}>
            {l.label} {/* Texto exibido da opção (rótulo do idioma) */}
          </option>
        ))}
      </select>
      {/* Condicionalmente renderiza o indicador de carregamento se loading for
      true */}
      {loading && <p className={styles.loading}>Traduzindo...</p>}
    </div>
  );
};

/* Exporta o componente como padrão para uso em outros arquivos */
export default LanguageDropdown;
