/*navigation and subscription*/
import Home from "../Images/home.PNG"
import Shorts from "../Images/shorts.PNG"
import Subscription from "../Images/abonements.PNG"
import Librairy from "../Images/bibliotheque.PNG"
import History from "../Images/historique.PNG"
import Tendances from "../Images/tendances.PNG"
import Musique from "../Images/musiques.PNG"
import FilmesTv from "../Images/films.PNG"
import Direct from "../Images/direct.PNG"
import JeuxVideo from "../Images/jeux_video.PNG"
import Actualites from "../Images/actualite.PNG"
import Sport from "../Images/sports.PNG"
import Savoirs from "../Images/savoir_culture.PNG"
import ModeBeaute from "../Images/mode_beaute.PNG"
import PlusChaine from "../Images/plus_chaine.PNG"
import Prenium from "../Images/logo.PNG"
import YoutubeMusic from "../Images/youtube_music.PNG"
import YoutubeKids from "../Images/youtube_kid.PNG"
import YoutubeTv from "../Images/youtube_tv.PNG"
import Parametres from "../Images/parametre.PNG"
import HistoSignals from "../Images/historique_signal.PNG"
import Aide from "../Images/aide.PNG"
import EnvoieCom from "../Images/envoir_com.PNG"



export default function Nav() {

    return (
        <div id="nav">
            <div className="firstSection">
            <a className="LinkNav" href="index.html"> <img src={Home} alt="Accueil"/> <p className="LinkText">Home</p> </a>
            <a className="LinkNav" href="index.html"> <img src={Shorts} alt="shorts"/> <p className="LinkText">Shorts</p> </a>
            <a className="LinkNav" href="index.html"> <img src={Subscription} alt="abonnements"/> <p className="LinkText">Abonnements</p> </a>
            </div>
            <div className="secondSection">
            <a className="LinkNav" href="index.html"> <img src={Librairy} alt="bibliothèque"/> <p className="LinkText">Bibliothèque</p> </a>
            <a className="LinkNav" href="index.html"> <img src={History} alt="historique"/> <p className="LinkText">Historique</p> </a>
            </div>
            <div className="Subscription">

            </div>
            <div className="Explore">
            <a className="LinkNav" href="index.html"> <img src={Tendances} alt="tendances" /> <p className="LinkText">Tendances</p> </a>
            <a className="LinkNav" href="index.html"> <img src={Musique} alt="musique"/> <p className="LinkText">Musique</p> </a>
            <a className="LinkNav" href="index.html"> <img src={FilmesTv} alt="film et television"/> <p className="LinkText">Films et TV</p> </a>
            <a className="LinkNav" href="index.html"> <img src={Direct} alt="direct"/> <p className="LinkText">Direct</p> </a>
            <a className="LinkNav" href="index.html"> <img src={JeuxVideo} alt="jeux vidéo"/> <p className="LinkText">Jeux vidéo</p> </a>
            <a className="LinkNav" href="index.html"> <img src={Actualites} alt="actualités"/> <p className="LinkText">Actualités</p> </a>
            <a className="LinkNav" href="index.html"> <img src={Sport} alt="sports"/> <p className="LinkText">Sport</p> </a>
            <a className="LinkNav" href="index.html"> <img src={Savoirs} alt="savoirs et culture"/> <p className="LinkText">Savoirs & Cultures</p> </a>
            <a className="LinkNav" href="index.html"> <img src={ModeBeaute} alt="mode et beauté"/> <p className="LinkText">Mode et beauté</p> </a>
            </div>
             <div className="More">
             <a className="LinkNav" href="index.html"> <img src={PlusChaine} alt="decouvrir d'autres chaines"/> <p className="LinkText">Chaînes</p> </a>
             </div>
             
             <div className="Other">
             <a className="LinkNav" href="index.html"> <img src={Prenium} alt="Premium"/> <p className="LinkText">Youtube Premium</p> </a>
             <a className="LinkNav" href="index.html"> <img src={YoutubeMusic} alt="Music"/> <p className="LinkText">Youtube Music</p> </a>
             <a className="LinkNav" href="index.html"> <img src={YoutubeKids} alt="Kids"/> <p className="LinkText">Youtube Kids</p> </a>
             <a className="LinkNav" href="index.html"> <img src={YoutubeTv} alt="tv"/> <p className="LinkText">Youtube TV</p> </a>
             </div>
             <div className="ParametreAide">
             <a className="LinkNav" href="index.html"> <img src={Parametres} alt="parametres"/> <p className="LinkText">Paramètres</p> </a>
             <a className="LinkNav" href="index.html"> <img src={HistoSignals} alt="historique signalement"/> <p className="LinkText">Historique des signalements</p> </a>
             <a className="LinkNav" href="index.html"> <img src={Aide} alt="aide"/> <p className="LinkText">Aide</p> </a>
             <a className="LinkNav" href="index.html"> <img src={EnvoieCom} alt="envoie des commentaires"/> <p className="LinkText">Envoyer des commentaires</p> </a>
             </div>
             <div className="Footer">
                    <a className="FooterLink" href="index.html">About</a>
                    <a className="FooterLink" href="index.html">Press</a>
                    <a className="FooterLink" href="index.html">Copyright</a> <br/>
                    <a className="FooterLink" href="index.html">Contact us</a>
                    <a className="FooterLink" href="index.html">Creators</a> <br/>
                    <a className="FooterLink" href="index.html">Advertise</a>
                    <a className="FooterLink" href="index.html">Developers</a> <br/>
                    <a className="FooterLink" href="index.html">Reports hateful content under LCEN</a> <br/>

                    <a className="FooterLink" href="index.html">Terms</a>
                    <a className="FooterLink" href="index.html">Privacy</a>
                    <a className="FooterLink" href="index.html">Policy & Safety</a> <br/>
                    <a className="FooterLink" href="index.html">How Youtube works</a> <br/>
                    <a className="FooterLink" href="index.html">Test new features</a>
                    
                    <p className="Footer-copyright">&copy; 2022 Google LLC</p>

             </div>
        </div>
    )
}