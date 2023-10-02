import React, { useEffect, useRef } from 'react';
import HeroVideo from '../components/HeroVideo';
import Footer from '../components/Footer';
import CardContact from '../components/CardContact';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';

const AvisoPrivacidad = () => {
    
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Title />
        <div className='mt-[100px] mx-10 '>
            <h4 className='stella-orange font-bold text-2xl'>Aviso de Privacidad</h4>
            <p className='whitespace-break-spaces mt-4'>
                Para Stella Solar es muy importante el respeto y la preservación de la confianza de nuestros clientes, colegas y vendedores. Su información personal siempre será tratada de manera confidencial y de acuerdo con las leyes, las directivas, los reglamentos y los principios aplicables a la protección de datos personales.
                <br />
                De conformidad con lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y a los requisitos que dicha legislación establece, Stella Solar da a conocer el presente documento:
                <br />
                Para efectos del presente Aviso de Privacidad, se entenderá por:
                <br />
                <br />
                <strong>Aviso de Privacidad:</strong> Se refiere al presente documento, el cual es puesto a disposición del <strong>TITULAR</strong>, previo al tratamiento de sus datos personales, de conformidad con el artículo 15 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                <br />
                <br />
                <strong>Datos personales:</strong> Cualquier información concerniente a una persona física identificada o identificable.
                <br />
                <br />
                <strong>Datos personales sensibles:</strong> Aquellos datos personales que afecten a la esfera más íntima del <strong>TITULAR</strong>, o cuya utilización indebida pueda dar origen a discriminación o conlleve un riesgo grave para éste. En particular, se consideran sensibles aquellos que puedan revelar aspectos como origen racial o étnico, estado de salud presente y futuro, información genética, creencias religiosas, filosóficas y morales, afiliación sindical, opiniones políticas, preferencia sexual.
                <br />
                <br />
                <strong>Derechos ARCO:</strong> Se refiere a los derechos de acceso, cancelación, rectificación y oposición con los que cuenta el <strong>TITULAR</strong> en relación a sus datos personales.
                <br />
                <br />
                <strong>Encargado:</strong> La persona física o moral que sola o conjuntamente con otras trate datos personales por cuenta del responsable.
                <br />
                <br />
                <strong>Ley:</strong>  Ley Federal de Protección de Datos Personales en Posesión de los Particulares y/o su  Reglamento.
                <br />
                <br />
                <strong>Responsable:</strong> Stella Solar, en su carácter de persona moral privada que decide sobre el tratamiento de datos personales.
                <br />
                <br />
                <strong><strong>Titular</strong>:</strong> La persona física a quien corresponden los datos personales.
                <br />
                <br />
                <strong>Tratamiento:</strong> Obtención, uso, divulgación o almacenamiento de datos personales por cualquier medio. El uso abarca cualquier acción de acceso, manejo, aprovechamiento, transferencia o disposición de datos personales.
                <br />
                <br />

                El presente Aviso de Privacidad se pone a disposición del <strong>TITULAR</strong>, en cumplimiento a lo dispuesto por la Ley Federal de Protección de Datos Personales en posesión de los Particulares, así como demás disposiciones legales aplicables.
                <br />
                <br />

                Con el compromiso de observar los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad en el tratamiento de datos personales y los derechos de privacidad y autodeterminación informativa, hace constar en el presente aviso de privacidad lo siguiente:
                <br />
                <br />

                1) La Empresa tratará su información y datos personales como confidenciales y mantendrá medidas preventivas dirigidas a protegerla contra pérdida, mal uso, acceso no autorizado, alteración o destrucción, no la divulgará para otro propósito que no sea el establecido en el presente Aviso de Privacidad. Su información será tratada como confidencial y será administrada durante el tiempo necesario para lograr los fines mencionados en el presente Aviso Privacidad, el cual podrá actualizarse para reflejar los cambios en nuestras prácticas para recabar información, para la utilización de la información, y en materia de seguridad.
                <br />
                
                2) Los datos personales que tratará Stella Solar, incluyendo la obtención, uso, divulgación o almacenamiento de tales datos por cualquier medio de acceso, manejo, aprovechamiento, transferencia o disposición, son aquellos que usted en su calidad de <strong>TITULAR</strong>, ha proporcionado o proporcione a Stella Solar y aquellos a los que Stella Solar tiene acceso legítimamente por haber sido proporcionados para los fines que más adelante se señalan.
                <br />
                
                A continuación se enlistan algunos de los datos personales a que se refiere este apartado:
                <br />
                1.       Nombre
                <br />
                2.       Compañía
                <br />
                3.       Dirección
                <br />
                4.       Información de contacto laboral, incluyendo teléfono, correo electrónico y otros.
                <br />
                <br />
                La lista anterior debe entenderse como enunciativa, más no limitativa de aquellos datos de carácter personal que serán tratados por Stella Solar, en el entendido que se trata de datos personales de la misma naturaleza.
                <br />
                <br />
                

                3) Stella Solar hace de su conocimiento que los datos personales del <strong>titular</strong> serán tratados por Stella Solar y/o las empresas afiliadas o subsidiarias de la misma, encargadas que actúen en nombre de bioMérieux México y terceros, distintos a Stella Solar o al <strong>titular</strong> de los datos, quienes deberán cumplir con el presente Aviso de Privacidad.
                <br />
                <br />
                

                4) Las finalidades del tratamiento de los datos personales del <strong>TITULAR</strong> por parte de Stella Solar, son las que se enuncian a continuación, así como todas aquellas que resulten análogas:
                <br />
                1.       Envío de publicidad informativa relativa a energía renovable.
                <br />
                2.       Fines informativos, administrativos y/o comerciales relacionados con Stella Solar.
                <br />
                <br />

                3) Al accesar al presente sitio de internet y aceptar el presente Aviso de Privacidad, usted en su carácter de <strong>TITULAR</strong> otorga expresamente a Stella Solar o su consentimiento para la transferencia nacional e internacional de sus datos personales, siempre que el receptor de los datos asuma las mismas obligaciones asumidas por Stella Solar. Asimismo, Stella Solar se compromete a transferir solo aquella información que sea necesaria para la misma finalidad con la que se emite el presente aviso.
                <br />
                <br />

                4) También podemos compartir su información:
                <br />
                I. Cuando alguna autoridad gubernamental o diverso funcionario gubernamental responsable de hacer cumplir la ley solicite o requiera razonablemente dicha información;
                <br />
                II. Cuando lo exija la ley o en respuesta a algún proceso legal; 
                <br />
                III. Cuando sea razonablemente necesario para llevar a cabo una investigación de carácter legal.
                <br />
                <br />
                

                5) Stella Solar establecerá y mantendrá medidas de seguridad, administrativas, técnicas y físicas que permitan proteger los datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Estas medidas no serán menores a aquellas que mantenga Stella Solar para el manejo de su propia información.
                <br />
                <br />

                6) Derechos: Conforme a la Ley de Protección de Datos Personales Usted tiene el derecho de ejercer en cualquier momento sus derechos de acceso, rectificación, cancelación y oposición los Derechos ARCO de su información, mediante una solicitud por escrito dirigida a contacto@stellasolar.mx, quien podrá solicitarle para su protección y beneficio, documentación que acredite correcciones a los datos en caso de que solicite rectificación de los mismos. Usted puede solicitar que se cancelen sus datos personales que Stella Solar conserva. Asimismo Usted podrá limitar el uso y distribución de sus datos personales a través de una solicitud por escrito a La Empresa. No obstante lo anterior, es posible que La Empresa se vea obligada conforme a la legislación aplicable a conservar algunos o todos sus datos personales. Es importante que los cambios que pretenda hacer a sus datos personales sean correctos y no se eliminarán aquellos datos que por obligación o disposición legal deba de conservar la empresa.
                <br />
                <br />
                La solicitud deberá ser presentada por el <strong>TITULAR</strong> o su representante legal, a la dirección antes mencionada, dicha solicitud deberá contener:
                <br />
                i)  El nombre completo del <strong>TITULAR</strong> y domicilio u otro medio para comunicarle la respuesta, incluyendo dirección de correo electrónico.
                <br />
                ii)  Los documentos que acrediten su identidad o la del representante legal,
                <br />
                iii) La descripción clara y precisa de los datos personales respecto de lo que busca ejercer sus derechos,
                <br />
                iv) Cualquier otro elemento que facilite la localización de los datos personales del <strong>TITULAR</strong>.
                <br />
                <br />
                Stella Solar comunicará al <strong>titular</strong> en máximo 20 (veinte) días naturales, contados a partir de haber recibido la solicitud de acceso, rectificación, cancelación u oposición, la determinación adoptada, a efecto de que se haga efectiva dentro de los 15 días naturales siguientes. Estos plazos podrán ser ampliados por un periodo igual cuando a discreción de Stella Solar, las circunstancias del caso lo justifiquen.
                <br />
                <br />
                El derecho de acceso procede cuando el <strong>titular</strong> desee conocer cuáles de sus datos personales obran en poder de bioMérieux México y el aviso de privacidad que le es aplicable.
                <br />
                <br />
                Se dará cumplimiento a una solicitud de acceso, poniendo a disposición del <strong>TITULAR</strong> o su representante, previo acreditamiento de su identidad, los documentos donde obren los datos personales requeridos, ya sea mediante copias fotostáticas, un CD que contenga dicha información, un dispositivo USB o cualquier otro medio que determine Stella Solar. La entrega de los datos será gratuita siempre y cuando no se repita la solicitud de acceso en un periodo menor a 12 meses. El <strong>TITULAR</strong> únicamente cubrirá los costos de reproducción en copias u otros formatos.
                <br />
                <br />
                El <strong>TITULAR</strong> podrá rectificar sus datos personales cuando estos sean inexactos o incompletos, indicando en la solicitud de rectificación las modificaciones que deban realizarse y aportando a Stella Solar la documentación que sustente su petición. En caso de ser procedente la solicitud del <strong>TITULAR</strong>, Stella Solar deberá informar de los cambios de que se trate a los encargados del tratamiento y a terceros, en caso de que haya habido transferencias de datos en los términos del presente Aviso de Privacidad.
                <br />
                <br />
                El derecho de cancelación consiste en la supresión del dato y puede ir precedido por un periodo de bloqueo en el que los datos no podrán ser objeto de tratamiento. No procederá la cancelación de los datos personales en los casos previstos por la Ley.
                <br />
                <br />
                El <strong>TITULAR</strong> tendrá derecho en todo momento y por causa legítima a oponerse al tratamiento de sus datos. De resultar procedente la solicitud, Stella Solar no podrá tratar los datos del <strong>TITULAR</strong>.
                <br />
                <br />
                Stella Solar podrá negar el acceso a los datos personales, o realizar la rectificación o cancelación o conceder la oposición cuando el solicitante no sea el <strong>TITULAR</strong> o el representante legal no esté debidamente acreditado para ello, cuando en su base de datos no se encuentren los datos personales del <strong>titular</strong>, cuando se lesionen derechos de un tercero, cuando exista un impedimento legal o una resolución de una autoridad competente que restrinja el acceso a los datos personales o no permita su rectificación, cancelación u oposición y cuando la rectificación, cancelación u oposición haya sido previamente realizada.
                <br />
                <br />

                7)  En caso de que se efectúen cambios al presente Aviso de Privacidad, Stella Solar los hará del conocimiento del <strong>titular</strong> mediante notificación escrita que será publicada en la página de Internet www.stellasolar.mx si resulta procedente, a través del correo electrónico que el <strong>TITULAR</strong> le haya notificado a Stella Solar previamente. Si el <strong>TITULAR</strong> está de acuerdo con las modificaciones hechas al Aviso de Privacidad deberá entregar el documento que incluya dichas modificaciones, debidamente firmado con atención a Stella Solar dentro de los siguientes 5 días hábiles.
                <br />
                <br />

                8)    El consentimiento para el tratamiento de datos personales podrá ser revocado mediante aviso por escrito, que el <strong>TITULAR</strong> proporcione por escrito, dirigido al correo electrónico señalado en el presente Aviso de Privacidad , en el cual incluya las razones por las que revoca el consentimiento.
                <br />
                <br />

                9)  Stella Solar dará trámite a las solicitudes de acceso, rectificación, cancelación y oposición, labor que estará a su cargo, cuyo domicilio físico se encuentra ubicado en la dirección señalada al inicio del presente aviso y cuyo correo electrónico para cualquier duda o comentario respecto al presente Aviso de Privacidad se ha señalado anteriormente.
                <br />
                <br />
                Al proporcionarnos sus datos Usted reconoce que entiende y acepta la recopilación y transmisión de su información y datos personales por parte de Stella Solar según se señala en el presente Aviso de Privacidad.</p>

        </div>
    
      </div>

      
      
      <Footer />
    </>
  );
};

export default AvisoPrivacidad;
