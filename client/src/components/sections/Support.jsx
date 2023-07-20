import supportStyle from './Support.module.css';

const Support = () => {
  return (
    <div className={supportStyle.supportSection}>
      <div className={supportStyle.hrLine}>
          <hr className={supportStyle.hr} />
      </div>
      <div className={supportStyle.header}>
        <h4 className={supportStyle.heading}>
           &quot;Your support makes <br /> 
           a difference&quot;
        </h4>
      </div>  
      <div className={supportStyle.supportContent}>
        <div className={supportStyle.supportText1}>          
        <img className={supportStyle.supportImage} src="./src/assets/patreon.png"></img>
        <h4><a href="https://www.patreon.com/aufdeutschgesagt/about">Be a Patron !</a></h4>
        </div>
        <div className={supportStyle.supportText2}>
        <img className={supportStyle.supportImage2} src="./src/assets/paypal.jpg"></img>
        <h4><a href="https://www.paypal.com/">Make a Change !</a> </h4>
        </div>
      </div>
    </div>
  );
}

export default Support;