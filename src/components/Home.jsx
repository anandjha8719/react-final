
import { useLocalStorage } from "../useLocalStorage";
import {useNavigate} from 'react-router-dom'



export const Home = () => {

const navigate = useNavigate();
const navigateToGraphPage = () => {
    
    navigate('/parse-excel');
  };

const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
        <h2>Enter Your name</h2>
        <form className="form">
        <input
            className="input-box"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            aria-label="fullname"
        />
        <input className="submit-button" type="submit" value="Submit"></input>
        </form>
        <button onClick={navigateToGraphPage} className="other-page" > to graph page</button>
    </div>
    
  );


}
