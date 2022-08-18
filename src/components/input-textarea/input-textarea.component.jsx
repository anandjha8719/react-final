import './input-textarea.styles.scss'
import { useContext } from "react";
import { HomeContext } from '../../contexts/home.context';

const InputTextarea = () => {
    const {setCurrentText} = useContext(HomeContext);
    return (
        <textarea
          className="input"
          onChange={(event) => setCurrentText(event.target.value)}>
        </textarea>
    )
    
}

export default InputTextarea;