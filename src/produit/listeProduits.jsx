import { useEffect, useState } from 'react';
import axios from 'axios';
import FormProduits from './formProduit';
export default function ListeProduits() {
    const [produits, setProduits] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/produits')
            .then(response => {
                setProduits(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    const ajoutProduit=(newProduit)=>{
        setProduits([...produits,newProduit])
    }

    return (
        <div>
            <button onClick={()=>{setIsModalOpen(true)}}>Ajouter</button>
            <h1>Liste des Produits</h1>
            <table>
                <thead><tr><th>Id</th><th>Name</th><th>Price</th></tr></thead>
                <tbody>{
                    produits.map(produit => (
                        <tr key={produit.id}>
                            <td>{produit.id}</td>
                            <td>{produit.name}</td>
                            <td>{produit.price}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <FormProduits isOpen={isModalOpen} 
                          onClose={() => {setIsModalOpen(false)}} 
                          onProduitAjoute={ajoutProduit}
                          />
        </div>
    );
}