import supportStyle from './Support.module.css';
import fondo from "../../assets/fondoSupport2.png"
import pixelImg from '../../assets/pixelRobin.png';
import Patreon from '../../assets/patreon.png';
import Paypal from '../../assets/paypal.png';
const Support = () => {
  return (
    <div id='ünterstützen' className={supportStyle.supportSection}>
      <div className={supportStyle.supportBackground}>

        <img className={supportStyle.supportBackgroundImg} src={fondo}></img>

        <div className={supportStyle.supportContent}>
          <h2 className={supportStyle.supporth2}>Auf Deutsch gesagt! ist ein Herzensprojekt, das Zeit <br /> und Geld kostet. <br />Wenn dir die kostenfreien Inhalte gefallen, kannst du hier Danke sagen </h2>

          <img className={supportStyle.supportPixelImg} src={pixelImg}></img>

        </div>

        <a href='https://www.patreon.com/aufdeutschgesagt' target='blanc'><img className={supportStyle.supportPatreon} src={Patreon}></img></a>
        <a href='https://www.paypal.com/paypalme/aufdeutschgesagt?locale.x=de_DE' target='blanc'><img className={supportStyle.supportPaypal} src={Paypal}></img></a>




      </div>
    </div>
  );
}

export default Support;