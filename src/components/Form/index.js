import { useState } from "react";
import {Categories} from "../Category";
import styles from "./Form.module.css";

function Form() {

    const [url,setUrl]= useState("")
    const [category,setCategory]= useState("")
    const [videos, setVideos] = useState([])
    const [erros, setErros] = useState("")

    function validarUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if(!regex.test(url) || url.length < 43){
            setErros('Erro: URL Inválida')
            return false
        } else {
            return url.substring(32, 43)
        }
    }

    function onSave(e) {
        e.preventDefault()

        if(!category || category ==="-") {
            setErros('ERRO: Escolha uma Categoria')
            return
        }else{
            setErros('')
        }

        const urlVideo = validarUrl(url)
        if(urlVideo && category) {
            const newVideo = {url, category}
        setVideos([...videos, newVideo])
        localStorage.setItem("videos",JSON.stringify([...videos, newVideo]))
        setUrl("")
        setCategory("")
    }else {
        setErros('ERRO: Escolha uma Url Valida')
    }
        }

    return(
        <section className={styles.container}>
            <h2>Cadastro de Videos</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do Vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength={43}
                        maxLength={43}
                    />
                </div>
                <div>
                <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-" >Selecione uma Categoria</option>
                        { Categories.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button type="submit">Cadastrar</button>
                </div>
                <div>
                    { erros }
                </div>
            </form>
        </section>
    );
}

export default Form;