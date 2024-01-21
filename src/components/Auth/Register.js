import React , {useState}from "react";
import { Link } from "react-router-dom";

const Register =()=> {
    //to controle the visibility of the terms
    const [isModalOpen, setModalOpen]=useState (false);

    // fucntion to open the terms 
    const openModal=()=>{
        setModalOpen(true);
    };
     // funstion to close the terms
    const closeModal=()=>{
        setModalOpen(false);
    };


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Créer votre Compte DNS 
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nom@mail.com" required=""/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div>
                      <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmer password</label>
                      <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300"
                        >J'accepte les 
                         <a onClick={openModal}
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#"
                            > Termes et conditions </a></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white  bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    Créer un compte</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Vous avez déjà un compte? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Se Connecter ici</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
{isModalOpen &&(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
    data-modal-backdrop="static">
    <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
    <h2 className="text-lg font-semibold mb-4">Termes et conditions</h2>
            {/* Add your terms and conditions content here */}
            <p>Your terms and conditions content goes here.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring focus:border-primary-300"
            >
              Fermer
            </button>

    </div>










    </div>
  
)}
</section>

    );
};

export default Register;