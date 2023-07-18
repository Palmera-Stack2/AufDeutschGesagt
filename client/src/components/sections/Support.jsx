import supportStyle from './Support.module.css';


const Support = () => {
  return (
    <div className={supportStyle.paymentSection}>
      <div className={supportStyle.header}>
        <h4 className={supportStyle.headOne}>&quot;Your Support makes a Difference&quot;</h4>
      </div>
      <div className={supportStyle.buttons}>
        <div className={supportStyle.btnOne}>
        <a href='https://www.paypal.com/home' target='_blank' rel='noreferrer'><button className={supportStyle.One}>PayPal</button></a>
        </div>
        <div className={supportStyle.btnTwo}>
        <a href='https://www.patreon.com/' target='_blank' rel='noreferrer'><button className={supportStyle.Two}>Patreon</button></a>
        </div>
      </div>
    </div>
  );
}
export default Support;