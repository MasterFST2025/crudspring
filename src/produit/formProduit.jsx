import axios from 'axios';
import Modal from 'react-modal'
export default function FormProduits({isOpen,onClose,onProduitAjoute}) {

    const sendData=(e)=>{
      //désactiver le comportement par défaut du formulaire
        e.preventDefault();
        //Récupérer les données du formulaire
        const formData=new FormData(e.target.parentElement);
        const produit=Object.fromEntries(formData);
        
        axios.post('http://localhost:8080/produits',produit)
        .then(response=>{
            console.log('Produit ajouté avec succès',response.data);
            onProduitAjoute(response.data)
            onClose();
        })
        .catch(error=>{
            console.error('Erreur lors de l\'ajout du produit',error);
        });
    }

    return (
      <Modal isOpen={isOpen} onRequestClose={onClose}
      

      >
        <form>
        <input type="text" name="id" id="id" placeholder='Id' /><br />
        <input type="text" name="name" id="name" placeholder='Name' /><br />
        <input type="text" name="price" id="price" placeholder='Price' /><br />
        <button onClick={sendData}>Enregistrer</button>
        </form>
      </Modal>
    );
}