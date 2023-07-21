import supportStyle from './Support.module.css';

const Support = () => {
  return (
    <div className={supportStyle.supportSection}>
      <div className={supportStyle.supportHrLine}>
          <hr className={supportStyle.supportHr} />
      </div>
      <div className={supportStyle.supportHeader}>
        <h4 className={supportStyle.supportHeading}>
           &quot;Your support makes <br /> 
           a difference&quot;
        </h4>
      </div>  
      <div className={supportStyle.supportContent}>
        <div className={supportStyle.supportTextOne}>          
        <img className={supportStyle.supportImageOne} src="./src/assets/patreon.png"></img>
        <h4 className={supportStyle.supportPatreon}><a href="https://www.patreon.com/aufdeutschgesagt/about">Be a Patron !</a></h4>
        </div>
        <div className={supportStyle.supportTextTwo}>
        <img className={supportStyle.supportImageTwo} src="./src/assets/paypal.jpg"></img>
        <h4><a href="https://www.paypal.com/">Make a Change !</a> </h4>
        </div>
      </div>
    </div>
  );
}

export default Support;