import React, { useState } from 'react'
import { LocalData } from '../data/LocalData'
import { Property } from '../data/Property'

/* Burde nok ikke brukes any her */
export default function InputForm(props: any) {

    const properties: Property[] = LocalData.getProperties()

    const [property, setProperty] = useState(properties[0])
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [isPosting, setIsPosting] = useState(false)
    
    

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        console.log("submitting...");

        setIsPosting(true)
        LocalData.savePost(title, body, property).then(() => {
            props.onSubmit()
            setTitle("")
            setBody("")
            console.log("submitted!")
            setIsPosting(false)
        })
    }
    

     

    const loadProperties = () => { return (
            properties.map((property: Property) => (
            <option key={property.name} value={property.name}>{property.name}</option>
            )))
    }
   

    /* Muligens en dårlig måte å gjlre det på siden jeg må opprette et nytt objekt hver gang den endres.  */
    const handlePropertyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newObj = {name: event.target.value}
        setProperty(newObj)
    }
    
    return (
        <div className='feed_form'>
            <h2>Skriv et nytt innlegg</h2>
            <form 
                onSubmit={handleSubmit}>
                <label>
                    Bygg
                    <select
                    disabled={isPosting} 
                    onChange={handlePropertyChange} >
                    {loadProperties()}
                    </select>
                </label>
                <label>
                    Tittel
                <input 
                    disabled={isPosting}
                    type="text" 
                    placeholder="Tittel"
                    required
                    value={title}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                  />
                </label>
                <label>
                    Beskrivelse
                    <textarea 
                    disabled={isPosting}
                    placeholder="Fyll inn en beskrivelse"
                    required
                    value={body}
                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setBody(event.target.value)} />
                </label>
                <button disabled={isPosting} type="submit">Lagre</button>
                <p className={isPosting ? 'feed_form--loading' : 'feed_form--notLoading'}>Lagrer...</p>
            </form>
        </div>
    )
}
