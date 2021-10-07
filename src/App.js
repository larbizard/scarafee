import logo from './scarafee_logo_manuel.png';
import './App.css';
import {offreFixe} from './offreFixe';
import {offreFlexible} from './offreFlexible';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Scarafee</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Offre de lancement rentrée 2021</h1>
        <h2>-Valable jusqu’au 31 décembre 2021-</h2>
        <p>
            Chers parents,<br/>
            J’ai le plaisir de vous annoncer en avant-première le début de l’aventure
            « Scarafée ».<br/>
            Scarafée c’est une chenille-scarabée née en 2017 qui tisse sans relâche son cocon
            pour se transformer en papillon et ainsi prendre son envol en octobre 2021.<br/>
            Scarafée a d’abord accompagné les enfants de maternelle en classe multi-âges,
            pour ensuite devenir professeur des écoles en classe d’élémentaire.<br/>
            Aujourd’hui, Scarafée se lance dans l’aide aux devoirs et le soutien scolaire après
            la classe, en petits groupes de 4 à 6 enfants, en mathématiques et en français.
        </p>
        <h2>Voici les tarifs de lancement : (*la séance dure 90min)</h2>
        <h3>Offre fixe</h3>
        <table>
          <tr>
            <th>Nombre de fois par semaine</th>
            <th>Tarif hebdomadaire</th>
            <th>Tarif horaire</th>
            <th>Tarif mensuel</th>
          </tr>
          {
            offreFixe.map((data, key) => {
              return (
                <tr>
                  <th>{data.seanceParSemaine} dhs</th>
                  <th>{data.tarifHebdomadaire} dhs</th>
                  <th>{data.tarifHoraire} dhs</th>
                  <th>{data.tarifMensuel} dhs</th>
                </tr>
              )}
            )
          }
        </table>

        <h3>Offre flexible</h3>
        <table>
          <tr>
            <th></th>
            <th>Nombre d’heures</th>
            <th>Tarif de la formule</th>
            <th>Tarif horaire</th>
            <th>Nombre de séances</th>
            <th>Offerts</th>
          </tr>
          {
            offreFlexible.map((data, key) => {
              return (
                <tr>
                  <th>{data.nom}</th>
                  <th>{data.nombreHeures}</th>
                  <th>{data.tarif} dhs</th>
                  <th>{data.tarifHoraire} dhs</th>
                  <th>{data.nombreSeances}</th>
                  <th>{data.offerts * 60} min</th>
                </tr>
              )}
            )
          }
        </table>
        <ul>
          <li>Réservation sur whatssup au <a href="https://wa.me/212672912362">06 72 91 23 62</a> (Nombre de places limitées)</li>
          <li>Localisation : Quartier Almaz - Résidence CasaView – Casablanca.</li>
        </ul>
        <h3>Scarafée croit au potentiel de chaque enfant et à l’école autrement.</h3>
        <h3>A bientôt.</h3>
        <h3>Scarafée</h3>
        <p>
        Quelques inspirations de Scarafée :<br/>
        « La joie d’apprendre est aussi indispensable à l’intelligence que la respiration à un coureur. »<br/>
        Maria Montessori<br/>
        « Enseigner, ce n’est pas remplir un vase c’est allumer un feu. »<br/>
        Montaigne<br/>
        « Tous les enfants ont du génie, le tout c’est de le faire apparaître. »<br/>
        Charlie Chaplin<br/>
        « C’est le rôle essentiel du professeur d’éveiller la joie de travailler et de connaitre. »<br/>
        Albert Einstein<br/>
        « L’éducation est l’arme la plus puissante qu’on peut utiliser pour changer le monde. »<br/>
        Nelson Mandela<br/>
        « Tu t’es trompé, c’est fantastique ! Qu’apprends-tu de cette erreur ? »<br/>
        Jane Nelson
        </p>
      </header>
    </div>
  );
}

export default App;
