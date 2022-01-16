import React, {useState, useEffect} from 'react'
import Modal from '../Components/Modal'
import './GetCharacters.css'

const GetCharacters = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState([true])
    
  
    const promises = props.film.characters.map((url)=>
    fetch(url).then((res) => res.json()));
    
    useEffect(() => {
        Promise.all(promises).then((res) => { 
            setCharacters(res) 
            setLoading(false) 
        })    
    },[isOpen]);
    return (
        <div>
            <button className="titleButton" onClick={() => setIsOpen(true)}> {props.film.title} | {props.film.release_date}</button>
            
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
             <h2>{props.film.title}</h2>
             
             {loading && <div>Loading...</div>}
        
             {characters.sort((a,b) => a.name > b.name ? 1 : -1).map((char, index) =>
                <p className="characters" key={index} > {char.name} </p> 
            )}
            </Modal>
        </div>
    )
}

export default GetCharacters
