import './output-section.styles.scss'
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { HomeContext } from '../../contexts/home.context';

const OutputSection = () => {
    const {currentText} = useContext(HomeContext);
    console.log(currentText);
    return (
        <article className="output">
            <ReactMarkdown>{currentText}</ReactMarkdown>
        </article>
    )
 
}

export default OutputSection;