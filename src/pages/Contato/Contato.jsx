import React from 'react';
import styles from './Contato.module.css';
import logoImage from '../../assets/images/pininga-logo.png';
import folhaBackground from '../../assets/images/folha-background-1.png';
import plantaBackground from '../../assets/images/planta-background.png';
import instagramIcon from '../../assets/images/instagram-icon.png';
import tripadvisorIcon from '../../assets/images/tripadvisor-icon-1.png';

function Contato() {
  return (
    <div className={styles.container}>
      <img src={folhaBackground} alt="Folha decorativa" className={styles.folhaBackground} />
      <img src={plantaBackground} alt="Planta decorativa" className={styles.plantaBackground} />
      <div className={styles.logoContainer}>
        <img src={logoImage} alt="Pininga Logo" className={styles.logo} />
      </div>

      <div className={styles.content}>
        <div className={styles.socialColumns}>
          <div className={styles.socialColumn}>
            <h3 className={styles.socialTitle}>ACOMPANHE O NOSSO TRABALHO</h3>
            <a href="https://www.instagram.com/piningaatins/" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" className={styles.socialIcon} />
            </a>
          </div>
          
          <div className={styles.socialColumn}>
            <a href="https://www.tripadvisor.com.br/Restaurant_Review-g2348788-d24205470-Reviews-Pininga-Barreirinhas_State_of_Maranhao.html" target="_blank" rel="noopener noreferrer">
              <img src={tripadvisorIcon} alt="TripAdvisor" className={styles.socialIcon} />
            </a>
          </div>

          <div className={styles.verticalText}>
            <span>CONTATO</span>
          </div>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <h3>Reservas</h3>
            <p className={styles.infoPhone}>
              <svg className={styles.icon} width="42px" height="42px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9821 0.648214 16.0179 1.6875 17.8393L0 24L6.30536 22.3393C8.05714 23.2946 10.0071 23.7857 11.9946 23.7857C18.5518 23.7857 23.8875 18.45 23.8875 11.8929C23.8875 8.71607 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.475 21.3161 6.94821 20.4321L6.58929 20.2232L2.85 21.2054L3.85714 17.5607L3.62679 17.1857C2.65714 15.6054 2.14286 13.775 2.14286 11.8929C2.14286 6.43929 6.54107 2.04107 12 2.04107C14.6411 2.04107 17.1214 3.07232 18.9857 4.94464C20.85 6.81696 21.8464 9.29732 21.8464 11.8929C21.8464 17.3464 17.4482 21.7875 11.9946 21.7875ZM17.4214 14.3839C17.1321 14.2393 15.6589 13.5161 15.3964 13.4196C15.1339 13.3232 14.9357 13.275 14.7375 13.5643C14.5393 13.8536 13.9661 14.5286 13.7946 14.7268C13.623 14.925 13.4464 14.9464 13.1571 14.8018C12.8679 14.6571 11.8929 14.3357 10.7357 13.3071C9.82500 12.5036 9.21429 11.5125 9.03750 11.2232C8.86071 10.9339 9.01607 10.775 9.16607 10.6304C9.30000 10.5 9.46071 10.2857 9.60536 10.1143C9.75000 9.94286 9.79821 9.82232 9.89464 9.62411C9.99107 9.42589 9.94286 9.25446 9.87054 9.10982C9.79821 8.96518 9.19286 7.49196 8.94643 6.91339C8.70000 6.35089 8.45357 6.43393 8.26607 6.42321C8.09464 6.41250 7.89643 6.41250 7.69821 6.41250C7.50000 6.41250 7.18929 6.48482 6.92679 6.77411C6.66429 7.06339 5.89286 7.78661 5.89286 9.25982C5.89286 10.733 6.95357 12.1580 7.09821 12.3562C7.24286 12.5545 9.20893 15.6161 12.2518 16.9179C13.0232 17.2554 13.623 17.4589 14.0946 17.6089C14.8714 17.8607 15.5786 17.825 16.1411 17.7518C16.7625 17.6679 17.9571 17.025 18.2036 16.3500C18.45 15.675 18.45 15.0964 18.3777 14.9786C18.3054 14.8607 18.1071 14.7964 17.4214 14.3839Z" fill="currentColor"/>
              </svg>
              +55 98 98425-9190
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3>Endereço</h3>
            <p className={styles.addressContainer}>
              <svg className={styles.addressIcon} width="42px" height="42px" viewBox="0 0 1024 1024" fill="#000000" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" fill="" />
                </svg>
              <span className={styles.addressText}>
                RUA PRINCIPAL, POVOADO DE ATINS, LENÇÓIS MARANHENSES
              </span>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3>HORÁRIO DE FUNCIONAMENTO:</h3>
            <p className={styles.OpenHours}>Aberto todos os dias das 19h às 22h.</p>
          </div>
        </div>

        <div className={styles.mapContainer}>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8043910497395!2d-42.743355824125274!3d-2.570291297407891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7f1e934ff31ff4b%3A0x6d86deb89f0cce98!2sRestaurante%20Pininga!5e0!3m2!1spt-BR!2sbr!4v1746226278300!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Pininga"
        ></iframe>
        </div>
        <div>
            <svg className={styles.waveSvg} viewBox="0 0 2500 300" >
                <path fill="#000000" d="M462.20293000542597,0C357.7124253933804,0 255.9305480195334,18.78676071622355 159.80900705371678,63.61801410743354C110.60227889310907,86.74552360282149 65.8057514921324,120.22137818773741 19.550732501356496,149.73846988605538C9.20238741182855,156.12805208898538 -11.945740640260437,177.31090613130766 8.716223548562136,186.65219750406948C9.758003255561594,187.20781334780253 10.903960933260997,187.45089527943574 12.11937059142703,187.45089527943574C19.72436245252307,187.45089527943574 30.211611502984276,178.2485078676072 32.32989690721651,174.84536082474227C57.922951709169844,144.84210526315792 88.41237113402063,134.49376017362997 120.4297341291373,113.83179598480739C184.88117200217042,72.99403147042867 256.72924579489967,48.85946825827455 330.55670103092785,39.518176885512766C382.74986435160065,32.9896907216495 435.7069994574064,30.801953336950636 488.7335865436788,30.801953336950636C519.709169831796,30.801953336950636 550.6847531199132,31.565925122083573 581.5561584373305,32.64243081931634C693.7558328811721,37.08735756918069 801.5105805751492,70.04232230059687 910.758545849159,93.65599565925123C1011.1513836136735,115.81117742810636 1109.5648399348888,147.7938144329897 1208.9506239826371,173.87303309820948C1262.0813890396093,187.65925122083564 1316.2192078133478,201.44546934346178 1370.3570265870865,208.80737927292463C1446.1291372761802,219.15572436245256 1522.9083016820402,223.5659251220836 1599.1665762344005,230.47639717851334C1607.049376017363,230.96256104177974 1615.9045035268584,232.9419424850787 1624.2734671730875,233.91427021161152C1701.538795442214,241.31090613130766 1779.2902875746067,250.16603364080302 1857.0417797069995,254.5762344004341C1876.5577862181226,255.58328811720025 1895.205642973413,256.03472599023337 1913.263157894737,256.03472599023337C2000.5642973412916,256.03472599023337 2074.6695604991864,245.58220293000545 2168.0130222463376,237.83830710797616C2183.257731958763,236.3450895279436 2227.5680954964732,228.49701573521438 2241.840477482366,224.05208898535003C2303.861096039067,205.36950623982642 2365.3608247422685,184.67281606077051 2427.346717308736,164.49701573521438C2446.0293000542597,158.59359739555077 2465.2327726532826,141.36950623982642 2458.843190450353,128.06945198046668C2455.3705914270213,120.53391209983725 2449.7797069994576,117.99891481280525 2443.494302767228,117.99891481280525C2433.7362995116664,117.99891481280525 2422.3461747151387,124.07596310363543 2414.5675529028763,127.06239826370053C2360.4297341291376,147.7243624525231 2308.271296798698,174.28974498100928 2252.6749864351605,186.6174715138362C2178.361367335866,203.84156266956055 2101.616928920239,216.13456321215415 2025.8100922409117,219.08627238198594C1981.881714595768,220.99620184481827 1937.9880629408576,222.03798155181775 1894.1291372761805,222.03798155181775C1780.7835051546394,222.03798155181775 1667.7156809549651,215.0927835051547 1554.8562126966906,198.4243081931634C1459.8806294085732,184.63809007053723 1363.4465545306568,182.17254476397184 1269.929462832339,157.58654367878466C1134.6022788931093,121.67986977753671 998.3027672273469,89.66250678242004 862.489419424851,55.73521432447104C745.3933803581118,26.21812262615301 626.8041237113403,7.01465002712968 506.7216494845361,1.111231687466088C491.82419967444383,0.38198589256646776 476.9962018448183,0 462.20293000542597,0Z" />
            </svg>
        </div>
        <div className={styles.pressSection}>
          <h2 className={styles.pressTitle}>IMPRENSA</h2>
          <div className={styles.pressGrid}>
            <div className={styles.pressItem}>
              <h3>O Globo</h3>
              <div className={styles.pressYear}>2024</div>
              <p>"Para chegar lá, é preciso viajar quatro horas de carro de São Luis até Barreirinhas, de onde pega-se um barco. Foi lá que esse vilarejo voltado ao turismo começou a mudar. Outros dois Piningas com menu degustação e La Pizza, com forno à lenha e carta 444 confeitaria são a evolução desse movimento."</p>
            </div>
            <div className={styles.pressItem}>
              <h3>Catraca Livre</h3>
              <div className={styles.pressYear}>2024</div>
              <p>"Pininga é o melhor restaurante na vila da ata, gastronomia autoral e contemporânea, com menu todo da estação inspirado na cozinha local, com produtos disponíveis na região. O ambiente é sofisticado e nada, o prato está ali em cada garfada proporcionada pelo Chef Jessica"</p>
            </div>
            <div className={styles.pressItem}>
              <h3>Casa da Gaubi</h3>
              <div className={styles.pressYear}>2024</div>
              <p>"Diferente de tudo o que já provamos, o Pininga é um verdadeiro evento. De uma deliciosa e criativa cozinha contemporânea, o restaurante tem uma menu degustação com três tempos e o cardápio muda toda dia. Os ingredientes são excelentes e o serviço impecável. Além disso, o ambiente é lindo e a vista de frente para lagoa não mais encontra em nenhum outro lugar. Daria 6 estrelas"</p>
            </div>
            <div className={styles.pressItem}>
              <h3>She Traveler</h3>
              <div className={styles.pressYear}>2024</div>
              <p>"O Pininga não é só um restaurante, é uma experiência internacional. Situado à beira do rio, o estabelecimento é conhecido por seus pratos autorais e ganhou o coração de todos que passam por lá"</p>
            </div>
            <div className={styles.pressItem}>
              <h3>Issuu</h3>
              <div className={styles.pressYear}>2024</div>
              <p>"Pininga started out as a dream for its three founders who discovered a place to call home in the delta where the river meets the sea. Here, they created an intimate and creative cuisine cooked with art. At Pininga, we serve a three-course menu that changes daily, based on available local ingredients, which make each dish unique. Seasonally brings the flavors of the surrounding land to the dining table with a modern flair"</p>
            </div>
            <div className={styles.pressItem}>
              <h3>Coissa de Mineiro</h3>
              <div className={styles.pressYear}>2024</div>
              <p>"O Pininga aposta em um menu que muda diariamente, conforme disponibilidade dos produtos locais. Da cozinha saem a identidade autoral com respeito aos ingredientes locais que o chef"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
