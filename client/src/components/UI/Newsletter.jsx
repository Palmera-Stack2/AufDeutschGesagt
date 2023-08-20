import { useState } from "react";
import newsLetterStyle from "./Newsletter.module.css";
import axios from "axios";

const Newsletter = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(!showPrivacyPolicy);
  };

  const successMessage = () => {
    return alert("You have successfully submit your email!");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isChecked) {
      // Mostrar un mensaje de error indicando que deben aceptar la Política de Privacidad
      return alert("Bite lessen Sie die Datenschutzerklärung");
    }

    const data = {
      fName: formData.fName,
      lName: formData.lName,
      email: formData.email,
    };

    try {
      const response = await axios.post("/api/mail/signup", data);
      console.log(response, "testing");
      successMessage();
      setFormData({
        fName: "",
        lName: "",
        email: "",
      });
    } catch (error) {
      console.log("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className={newsLetterStyle.newsLetterContainer}>
      {showPrivacyPolicy && (
        <div className={newsLetterStyle.privacyPolicyDiv}>
          <div className={newsLetterStyle.paragraphPolicy}>
            <strong>Datenschutzerklärung von Site #1</strong> <br />
            Um Informationen zu den personenbezogenen Daten, dem Zweck und den
            Parteien, welchen diese Daten mitgeteilt werden, zu erhalten,
            kontaktieren Sie den Eigentümer
            <br />
            <br />
            <hr />
            <br />
            <strong>Anbieter und Verantwortlicher</strong> <br />
            Auf Deutsch Gesagt, Augusterburger Ufer 6 22049 Hamburg
            <br />
            E-Mail-Adresse des Anbieters:{" "}
            <strong>auf-deutsch-gesagt@gmx.de</strong>
            <br />
            <br />
            <hr />
            <br />
            <strong>Arten der erhobenen Daten</strong>
            <br />
            Der Eigentümer stellt keine Auflistung der erhobenen
            personenbezogenen Daten zur Verfügung. Vollständige Details zu jeder
            Art von verarbeiteten personenbezogenen Daten werden in den dafür
            vorgesehenen Abschnitten dieser Datenschutzerklärung oder punktuell
            durch Erklärungstexte bereitgestellt, die vor der Datenerhebung
            angezeigt werden. Personenbezogene Daten können vom Nutzer
            freiwillig angegeben oder, im Falle von Nutzungsdaten, automatisch
            erhoben werden, wenn diese Anwendung genutzt wird. Sofern nicht
            anders angegeben, ist die Angabe aller durch diese Anwendung
            angeforderten Daten obligatorisch. Weigert sich der Nutzer, die
            Daten anzugeben, kann dies dazu führen, dass diese Anwendung dem
            Nutzer ihre Dienste nicht zur Verfügung stellen kann. In Fällen, in
            denen diese Anwendung die Angabe personenbezogener Daten
            ausdrücklich als freiwillig bezeichnet, dürfen sich die Nutzer dafür
            entscheiden, diese Daten ohne jegliche Folgen für die Verfügbarkeit
            oder die Funktionsfähigkeit des Dienstes nicht anzugeben. Nutzer,
            die sich darüber im Unklaren sind, welche personenbezogenen Daten
            obligatorisch sind, können sich an den Anbieter wenden. Jegliche
            Verwendung von Cookies oder anderer Tracking-Tools durch diese
            Anwendung oder Anbieter von Drittdiensten, die durch diese Anwendung
            eingesetzt werden, dient dem Zweck, den vom Nutzer gewünschten
            Dienst zu erbringen, und allen anderen Zwecken, die im vorliegenden
            Dokument und, falls vorhanden, in der Cookie-Richtlinie beschrieben
            sind. Die Nutzer sind für alle personenbezogenen Daten Dritter
            verantwortlich, die durch diese Anwendung beschafft, veröffentlicht
            oder weitergegeben werden, und bestätigen, dass sie die Zustimmung
            zur Übermittlung personenbezogener Daten etwaiger Dritter an diese
            Anwendung eingeholt haben.
            <br />
            <br />
            <hr />
            <br />
            <strong>Art und Ort der Datenverarbeitung</strong>
            <br />
            <br />
            <strong>Verarbeitungsmethoden</strong>
            <br />
            Der Anbieter verarbeitet die Nutzerdaten auf ordnungsgemäße Weise
            und ergreift angemessene Sicherheitsmaßnahmen, um den unbefugten
            Zugriff und die unbefugte Weiterleitung, Veränderung oder
            Vernichtung von Daten zu vermeiden. Die Datenverarbeitung wird
            mittels Computern oder IT-basierten Systemen nach organisatorischen
            Verfahren und Verfahrensweisen durchgeführt, die gezielt auf die
            angegebenen Zwecke abstellen. Zusätzlich zum Verantwortlichen
            könnten auch andere Personen intern (Personalverwaltung, Vertrieb,
            Marketing, Rechtsabteilung, Systemadministratoren) oder extern – und
            in dem Fall soweit erforderlich, vom Verantwortlichen als
            Auftragsverarbeiter benannt (wie Anbieter technischer
            Dienstleistungen, Zustellunternehmen, Hosting-Anbieter,
            IT-Unternehmen oder Kommunikationsagenturen) - diese Anwendung
            betreiben und damit Zugriff auf die Daten haben. Eine aktuelle Liste
            dieser Beteiligten kann jederzeit vom Anbieter verlangt werden.
            <br />
            <br />
            <strong>Rechtsgrundlagen der Verarbeitung</strong>
            <br />
            Der Anbieter darf personenbezogene Daten von Nutzern nur dann
            verarbeiten, wenn einer der folgenden Punkte zutrifft:
            <br />
            <br />
            <li>
              Die Nutzer haben ihre Einwilligung für einen oder mehrere
              bestimmte Zwecke erteilt. Hinweis: In einigen Gesetzgebungen kann
              es dem Anbieter gestattet sein, personenbezogene Daten zu
              verarbeiten, bis der Nutzer einer solchen Verarbeitung
              widerspricht („Opt-out“), ohne sich auf die Einwilligung oder eine
              andere der folgenden Rechtsgrundlagen verlassen zu müssen. Dies
              gilt jedoch nicht, wenn die Verarbeitung personenbezogener Daten
              dem europäischen Datenschutzrecht unterliegt;
            </li>
            <li>
              {" "}
              die Datenerhebung ist für die Erfüllung eines Vertrages mit dem
              Nutzer und/oder für vorvertragliche Maßnahmen daraus erforderlich;
            </li>
            <li>
              die Verarbeitung ist für die Erfüllung einer rechtlichen
              Verpflichtung, der der Anbieter unterliegt, erforderlich;
            </li>
            <li>
              {" "}
              die Verarbeitung steht im Zusammenhang mit einer Aufgabe, die im
              öffentlichen Interesse oder in Ausübung hoheitlicher Befugnisse,
              die dem Anbieter übertragen wurden, durchgeführt wird;
            </li>
            <li>
              die Verarbeitung ist zur Wahrung der berechtigten Interessen des
              Anbieters oder eines Dritten erforderlich.
            </li>
            <br />
            In jedem Fall erteilt der Anbieter gerne Auskunft über die konkrete
            Rechtsgrundlage, auf der die Verarbeitung beruht, insbesondere
            darüber, ob die Angabe personenbezogener Daten eine gesetzliche oder
            vertragliche Verpflichtung oder eine Voraussetzung für den Abschluss
            eines Vertrages ist.
            <br />
            <br />
            <strong>Ort</strong>
            <br />
            Die Daten werden in der Niederlassung des Anbieters und an allen
            anderen Orten, an denen sich die an der Datenverarbeitung
            beteiligten Stellen befinden, verarbeitet.
            <br />
            <br />
            Je nach Standort der Nutzer können Datenübertragungen die
            Übertragung der Daten des Nutzers in ein anderes Land als das eigene
            beinhalten. Um mehr über den Ort der Verarbeitung der übermittelten
            Daten zu erfahren, können die Nutzer den Abschnitt mit den
            ausführlichen Angaben zur Verarbeitung der personenbezogenen Daten
            konsultieren.
            <br />
            <br />
            Wenn umfassendere Standards anwendbar sind, gilt zusätzlich
            Folgendes:
            <br />
            <br />
            Die Nutzer haben auch das Recht, sich über die Rechtsgrundlage der
            Datenübermittlung in ein Land außerhalb der Europäischen Union oder
            an eine internationale Organisation, die dem Völkerrecht unterliegt
            oder von zwei oder mehr Ländern gegründet wurde, wie beispielsweise
            die UNO, sowie sich über die vom Anbieter ergriffenen
            Sicherheitsmaßnahmen zum Schutz ihrer Daten aufklären zu lassen.
            <br />
            <br />
            Wenn eine solche Übermittlung stattfindet, kann der Nutzer mehr
            darüber erfahren, indem er die entsprechenden Abschnitte dieses
            Dokuments überprüft oder sich mit dem Anbieter über die im
            Kontaktteil angegebenen Informationen in Verbindung setzt.
            <br />
            <br />
            <strong>Speicherdauer</strong> <br />
            Personenbezogene Daten werden so lange verarbeitet und gespeichert,
            wie es der Zweck erfordert, zu dem sie erhoben wurden.
            <br />
            <br />
            Daher gilt:
            <br />
            <br />
            <li>
              Personenbezogene Daten, die zu Zwecken der Erfüllung eines
              zwischen dem Anbieter und dem Nutzer geschlossenen Vertrages
              erhoben werden, werden bis zur vollständigen Erfüllung dieses
              Vertrages gespeichert.
            </li>
            <br />
            <li>
              Personenbezogene Daten, die zur Wahrung der berechtigten
              Interessen des Anbieters erhoben werden, werden so lange
              aufbewahrt, wie es zur Erfüllung dieser Zwecke erforderlich ist.
              Nutzer können nähere Informationen über die berechtigten
              Interessen des Anbieters in den entsprechenden Abschnitten dieses
              Dokuments oder durch Kontaktaufnahme zum Anbieter erhalten.
            </li>
            <br />
            <br />
            Darüber hinaus ist es dem Anbieter gestattet, personenbezogene Daten
            für einen längeren Zeitraum zu speichern, wenn der Nutzer in eine
            solche Verarbeitung eingewilligt hat, solange die Einwilligung nicht
            widerrufen wird. Darüber hinaus kann der Anbieter verpflichtet sein,
            personenbezogene Daten für einen längeren Zeitraum aufzubewahren,
            wenn dies zur Erfüllung einer gesetzlichen Verpflichtung oder auf
            Anordnung einer Behörde erforderlich ist.
            <br />
            <br />
            Nach Ablauf der Aufbewahrungsfrist werden personenbezogene Daten
            gelöscht. Daher können das Auskunftsrecht, das Recht auf Löschung,
            das Recht auf Berichtigung und das Recht auf Datenübertragbarkeit
            nach Ablauf der Aufbewahrungsfrist nicht geltend gemacht werden.
            <br />
            <br />
            <hr />
            <br />
            <strong>Die Rechte der Nutzer</strong>
            <br />
            Die Nutzer können bestimmte Rechte in Bezug auf ihre vom Anbieter
            verarbeiteten Daten ausüben.
            <br />
            <br />
            Nutzer, die Anspruch auf umfassendere Standards haben, können alle
            nachstehend beschriebenen Rechte ausüben. In allen anderen Fällen
            kann sich der Nutzer beim Anbieter erkundigen, welche Rechte für ihn
            gelten.
            <br />
            <br />
            Nutzer haben im gesetzlich zulässigen Umfang insbesondere das Recht,
            Folgendes zu tun:
            <br />
            <br />
            <li>
              <strong>Die Einwilligungen jederzeit widerrufen.</strong> Hat der
              Nutzer zuvor in die Verarbeitung personenbezogener Daten
              eingewilligt, so kann er die eigene Einwilligung jederzeit
              widerrufen.
            </li>
            <br />
            <li>
              <strong>
                Widerspruch gegen die Verarbeitung ihrer Daten einlegen.
              </strong>{" "}
              Der Nutzer hat das Recht, der Verarbeitung seiner Daten zu
              widersprechen, wenn die Verarbeitung auf einer anderen
              Rechtsgrundlage als der Einwilligung erfolgt. Weitere
              Informationen hierzu sind weiter unten aufgeführt.
            </li>
            <br />
            <li>
              <strong>Auskunft bezüglich ihrer Daten erhalten.</strong> Der
              Nutzer hat das Recht zu erfahren, ob die Daten vom Anbieter
              verarbeitet werden, über einzelne Aspekte der Verarbeitung
              Auskunft zu erhalten und eine Kopie der Daten zu erhalten.
            </li>
            <br />
            <li>
              <strong>Überprüfen und berichtigen lassen.</strong> Der Nutzer hat
              das Recht, die Richtigkeit seiner Daten zu überprüfen und deren
              Aktualisierung oder Berichtigung zu verlangen.
            </li>
            <br />
            <li>
              <strong>
                Einschränkung der Verarbeitung ihrer Daten verlangen.
              </strong>
              Die Nutzer haben das Recht, die Verarbeitung ihrer Daten
              einzuschränken. In diesem Fall wird der Anbieter die Daten zu
              keinem anderen Zweck als der Speicherung verarbeiten.
            </li>
            <br />
            <li>
              <strong>
                Löschung oder anderweitiges Entfernen der personenbezogenen
                Daten verlangen.
              </strong>{" "}
              Die Nutzer haben das Recht, vom Anbieter die Löschung ihrer Daten
              zu verlangen.
            </li>
            <br />
            <li>
              <strong>
                Ihre Daten erhalten und an einen anderen Verantwortlichen
                übertragen lassen.
              </strong>{" "}
              Der Nutzer hat das Recht, seine Daten in einem strukturierten,
              gängigen und maschinenlesbaren Format zu erhalten und, sofern
              technisch möglich, ungehindert an einen anderen Verantwortlichen
              übermitteln zu lassen.
            </li>
            <br />
            <li>
              <strong>Beschwerde einreichen.</strong> Die Nutzer haben das
              Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde
              einzureichen.
            </li>
            <br />
            <br />
            <strong>
              Details zum Widerspruchsrecht bezüglich der Verarbeitung
            </strong>
            <br />
            Werden personenbezogene Daten im öffentlichen Interesse, in Ausübung
            eines dem Anbieter übertragenen hoheitlichen Befugnisses oder zur
            Wahrung der berechtigten Interessen des Anbieters verarbeitet, kann
            der Nutzer dieser Verarbeitung widersprechen, indem er einen
            Rechtfertigungsgrund angibt, der sich auf seine besondere Situation
            bezieht.
            <br />
            <br />
            Nutzer werden darüber informiert, dass sie der Verarbeitung der
            personenbezogenen Daten für Direktwerbung jederzeit unentgeltlich
            ohne Angabe von Gründen widersprechen können. Widerspricht der
            Nutzer der Verarbeitung für Zwecke der Direktwerbung, so werden die
            personenbezogenen Daten nicht mehr für diese Zwecke verarbeitet. Ob
            der Anbieter personenbezogene Daten für Direktwerbungszwecke
            verarbeitet, können die Nutzer den entsprechenden Abschnitten dieses
            Dokuments entnehmen.
            <br />
            <strong>Wie die Rechte ausgeübt werden können</strong>
            Alle Anfragen zur Ausübung der Nutzerrechte können über die in
            diesem Dokument angegebenen Kontaktdaten an den Anbieter gerichtet
            werden. Anfragen können kostenlos gestellt werden und werden vom
            Anbieter so früh wie möglich, spätestens innerhalb eines Monats,
            beantwortet und den Nutzern die gesetzlich vorgeschriebenen
            Informationen zur Verfügung gestellt. Jede Berichtigung oder
            Löschung personenbezogener Daten oder die Einschränkung der
            Verarbeitung teilt der Anbieter allen Empfängern, denen
            personenbezogene Daten offengelegt wurden, mit, falls es welche
            gibt. Es sei denn, dies erweist sich als unmöglich oder ist mit
            einem unverhältnismäßigen Aufwand verbunden. Der Anbieter
            unterrichtet den Nutzer über diese Empfänger, wenn der Nutzer dies
            verlangt.
            <br />
            <br />
            <hr />
            <br />
            <strong>Anwendbarkeit umfassenderer Standards</strong>
            <br />
            Während die meisten Bestimmungen dieses Dokuments alle Nutzer
            betreffen, gelten einige Bestimmungen ausdrücklich nur, wenn die
            Verarbeitung personenbezogener Daten umfassenderen Schutzstandards
            unterliegt.
            <br />
            Solche umfassendere Standards sind anwendbar wenn die Verarbeitung:
            <br />
            <li>
              von einem in der EU niedergelassenen Anbieter durchgeführt wird;
            </li>
            <li>
              sich auf die personenbezogenen Daten von Nutzern bezieht, die sich
              in der EU befinden und gleichzeitig das Angebot von bezahlten oder
              unbezahlten Waren oder Dienstleistungen an diese Nutzer betrifft;
            </li>
            <li>
              die personenbezogenen Daten von Nutzern, die sich in der EU
              befinden, betrifft und es dem Anbieter ermöglicht, das Verhalten
              dieser Nutzer in der EU zu überwachen.
            </li>
            <br />
            <hr />
            <br />
            <strong>
              Weitere Informationen über die Erhebung und Verarbeitung von Daten
            </strong>
            <br />
            <br />
            <strong>Rechtliche Maßnahmen</strong>
            <br />
            Die personenbezogenen Daten des Nutzers können vom Anbieter zu
            Zwecken der Rechtsdurchsetzung innerhalb oder in Vorbereitung
            gerichtlicher Verfahren verarbeitet werden, die sich daraus ergeben,
            dass diese Anwendung oder die dazugehörigen Dienste nicht
            ordnungsgemäß genutzt wurden. Der Nutzer erklärt, sich dessen
            bewusst zu sein, dass der Anbieter von den Behörden zur Herausgabe
            von personenbezogenen Daten verpflichtet werden könnte.
            <br />
            <br />
            <strong>
              Weitere Informationen über die personenbezogenen Daten des Nutzers
            </strong>
            <br />
            Zusätzlich zu den in dieser Datenschutzerklärung aufgeführten
            Informationen kann diese Anwendung dem Nutzer auf Anfrage weitere
            kontextbezogene Informationen zur Verfügung stellen, die sich auf
            bestimmte Dienste oder auf die Erhebung und Verarbeitung
            personenbezogener Daten beziehen.
            <br />
            <br />
            <strong>Systemprotokolle und Wartung</strong>
            <br />
            Diese Anwendung und die Dienste von Dritten können zu Betriebs- und
            Wartungszwecken Dateien erfassen, die die über diese Anwendung
            stattfindende Interaktion aufzeichnen (Systemprotokolle), oder
            andere personenbezogene Daten (z. B. IP-Adresse) zu diesem Zweck
            verwenden.
            <b />
            <br />
            <strong>
              Nicht in dieser Datenschutzerklärung enthaltene Informationen
            </strong>
            <br />
            Weitere Informationen über die Erhebung oder Verarbeitung
            personenbezogener Daten können jederzeit vom Anbieter über die
            aufgeführten Kontaktangaben angefordert werden.
            <br />
            <br />
            <strong>Wie „Do Not Track“ Anfragen behandelt werden</strong>
            <br />
            Diese Anwendung unterstützt keine Nicht-Verfolgen-Anfragen („Do Not
            Track”) durch Webbrowser. Die Information, ob integrierte
            Drittdienste das Nicht-Verfolgen Protokoll unterstützen, entnehmen
            Nutzer der Datenschutzerklärung des jeweiligen Dienstes.
            <br />
            <br />
            <strong>Änderungen dieser Datenschutzerklärung</strong>
            <br />
            Der Anbieter behält sich vor, jederzeit Änderungen an dieser
            Datenschutzerklärung vorzunehmen, indem Nutzer auf dieser Seite und
            gegebenenfalls über diese Anwendung und/oder - soweit technisch und
            rechtlich möglich – durch das Versenden einer Mitteilung über dem
            Anbieter vorliegende Kontaktdaten der Nutzer informiert werden.
            Nutzern wird daher nahe gelegt, diese Seite regelmäßig aufzurufen
            und insbesondere das am Seitenende angegebene Datum der letzten
            Änderung zu prüfen.
            <br />
            <br />
            Soweit Änderungen eine auf der Einwilligung des Nutzers basierte
            Datennutzung betreffen, so wird der Anbieter - soweit erforderlich -
            eine neue Einwilligung einholen.
            <br />
            <br />
            <i>Letzte Aktualisierung: 15 Juli 2023</i>
            <br />
            <br />
            iubenda hostet diese Inhalte und erhebt nur die personenbezogenen
            Daten, die unbedingt erforderlich sind, um sie zur Verfügung zu
            stellen.
          </div>
        </div>
      )}
      <div className={newsLetterStyle.newsForm}>
        <form
          action="/"
          className={newsLetterStyle.signIn}
          method="POST"
          onSubmit={handleSubmit}
        >
          <h1 className={newsLetterStyle.form_h1}>
            Melde dich für meinen Newsletter an!
          </h1>
          <input
            type="text"
            name="fName"
            className={newsLetterStyle.top}
            placeholder="Name"
            value={formData.fName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lName"
            className={newsLetterStyle.middle}
            placeholder="Nachname"
            value={formData.lName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="email"
            className={newsLetterStyle.bottom}
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <button className={newsLetterStyle.newsButton} type="submit">
            Meld mich an!
          </button>
          {/* <p className={newsLetterStyle.copyright}>&copy; 2023</p> */}
          <div className={newsLetterStyle.privacyPolicyWrapper}>
            <button
              onClick={handlePrivacyPolicyClick}
              className={newsLetterStyle.privacyButton}
            >
              Datenschutzerklärung
            </button>
            <br />
            <br />
            <label className={newsLetterStyle.checkbox}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className={newsLetterStyle.checkbox_input}
              />
              Ich habe die Datenschutzerklärung gelesen und stimme ihr zu.
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
