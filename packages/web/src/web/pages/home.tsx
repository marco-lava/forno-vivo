import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Flame, Phone, MapPin, Clock, Wheat, Leaf, Menu, X } from 'lucide-react';

const telephone = 'tel:+390000000000';
const categories = ['Pizze classiche', 'Le nostre speciali', 'Antipasti', 'Bevande'] as const;
type Category = typeof categories[number];
const dishes: Record<Category, {name: string; ingredients: string; price: string; tag?: string}[]> = {
  'Pizze classiche': [
    {name:'Margherita', ingredients:'Pomodoro San Marzano, fiordilatte, basilico fresco, olio EVO', price:'8', tag:'LA TRADIZIONE'},
    {name:'Marinara', ingredients:'Pomodoro San Marzano, aglio, origano, olio EVO', price:'7'},
    {name:'Diavola', ingredients:'Pomodoro, fiordilatte, salame piccante, basilico', price:'10'},
    {name:'Quattro Formaggi', ingredients:'Fiordilatte, gorgonzola, provola, Parmigiano Reggiano', price:'11'},
    {name:'Capricciosa', ingredients:'Pomodoro, fiordilatte, prosciutto cotto, funghi, carciofi, olive', price:'12'},
    {name:'Napoli', ingredients:'Pomodoro, fiordilatte, alici, capperi, origano', price:'10'},
  ],
  'Le nostre speciali': [
    {name:'La Forno Vivo', ingredients:'Provola, salsiccia, friarielli, olio EVO',price:'14',tag:'LA NOSTRA FIRMA'},
    {name:'Burrata e pomodorini',ingredients:'Burrata, pomodorini, basilico, olio EVO',price:'13'},
    {name:'Pistacchio e mortadella',ingredients:'Fiordilatte, mortadella, crema e granella di pistacchio',price:'15'},
    {name:'Ortolana',ingredients:'Fiordilatte, melanzane, zucchine, peperoni',price:'12'},
  ],
  'Antipasti': [
    {name:'Bruschette al pomodoro',ingredients:'Pane tostato, pomodoro fresco, basilico, olio EVO',price:'6'},
    {name:'Frittatina di pasta',ingredients:'Bucatini, besciamella, piselli, prosciutto cotto',price:'4'},
    {name:'Burrata di Puglia',ingredients:'Burrata fresca, pomodorini e pane caldo',price:'9'},
    {name:'Tagliere da condividere',ingredients:'Selezione di salumi e formaggi, pane del forno',price:'16'},
  ],
  'Bevande': [
    {name:'Acqua naturale o frizzante',ingredients:'Bottiglia da 75 cl',price:'2,50'},
    {name:'Birra artigianale',ingredients:'Bionda o ambrata, bottiglia da 33 cl',price:'6'},
    {name:'Bibite',ingredients:'Cola, aranciata, gassosa — 33 cl',price:'3'},
    {name:'Vino della casa',ingredients:'Rosso o bianco, calice',price:'5'},
  ],
};
const hours = [ ['Lunedì','Chiuso'], ['Martedì','19:00 – 23:00'], ['Mercoledì','19:00 – 23:00'], ['Giovedì','19:00 – 23:00'], ['Venerdì','19:00 – 00:00'], ['Sabato','12:30 – 15:00 / 19:00 – 00:00'], ['Domenica','12:30 – 15:00 / 19:00 – 23:00'] ];

export default function Home() {
  const [category,setCategory] = useState<Category>('Pizze classiche');
  const [navOpen,setNavOpen] = useState(false);
  return <>
    <header className="header" id="inizio">
      <a href="#inizio" className="brand" aria-label="Forno Vivo, inizio pagina"><Flame size={31} strokeWidth={1.6}/><span>FORNO VIVO<small>PIZZERIA · CUCINA ITALIANA</small></span></a>
      <nav className={navOpen?'nav is-open':'nav'} aria-label="Navigazione principale">
        <a href="#menu" onClick={()=>setNavOpen(false)}>Il menu</a><a href="#filosofia" onClick={()=>setNavOpen(false)}>La nostra passione</a><a href="#dove" onClick={()=>setNavOpen(false)}>Dove siamo</a>
      </nav>
      <a href={telephone} className="header-call"><Phone size={15}/> Prenota un tavolo <ArrowUpRight size={16}/></a>
      <button className="mobile-menu" onClick={()=>setNavOpen(!navOpen)} aria-label={navOpen?'Chiudi menu':'Apri menu'} aria-expanded={navOpen}>{navOpen?<X/>:<Menu/>}</button>
    </header>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <picture className="hero-photo"><source media="(max-width: 600px)" srcSet="/images/hero-800.webp"/><img src="/images/hero-1600.webp" alt="Pizza napoletana appena sfornata, con pomodoro, mozzarella e basilico fresco" width="1600" height="1068" fetchPriority="high"/></picture>
        <div className="hero-shade"/>
        <div className="hero-content">
          <div className="eyebrow"><span/> IMPASTO LENTO. PASSIONE VERA.</div>
          <h1 id="hero-title">IL FUOCO.<br/>LA FARINA.<br/><span>LA FELICITÀ.</span></h1>
          <p>La pizza come dovrebbe essere.<br/>Un impasto che riposa, ingredienti che parlano.<br/>E un forno che non smette di emozionare.</p>
          <div className="hero-actions"><a className="button primary" href={telephone}><Phone size={18}/> Prenota un tavolo <ArrowUpRight size={19}/></a><a className="menu-link" href="#menu">Scopri il menu <ArrowDown size={16}/></a></div>
          <div className="hero-note"><span/> A tavola o da asporto. Basta una chiamata.</div>
        </div>
        <div className="pizza-seal"><span>FATTA CON</span><Flame size={27}/><strong>PASSIONE</strong><small>OGNI GIORNO</small></div>
        <div className="hero-bottom"><span>NAPOLI NEL CUORE. SEMPRE.</span><span>SCROLL PER ASSAPORARE <ArrowDown size={13}/></span></div>
      </section>
      <section className="philosophy" id="filosofia" aria-label="La nostra passione">
        <div><Wheat/><span><strong>48 ore di lievitazione</strong><small>Il tempo è il nostro ingrediente segreto.</small></span></div>
        <div><Flame/><span><strong>Il calore del forno</strong><small>Cornicione alto. Cuore morbido.</small></span></div>
        <div><Leaf/><span><strong>Ingredienti, non compromessi</strong><small>Buoni, freschi e scelti con cura.</small></span></div>
      </section>
      <section id="menu" className="menu-section section-wrap">
        <div className="section-top"><div><div className="eyebrow">IL NOSTRO MENU</div><h2>POCHE COSE.<br/><span>FATTE BENE.</span></h2></div><p>Dalla prima bruschetta all’ultima fetta.<br/>Scegli quello che ti fa venire fame.</p></div>
        <div className="menu-layout"><div className="menu-main">
          <div className="tabs" role="tablist" aria-label="Categorie del menu">{categories.map(c=><button key={c} role="tab" id={`tab-${categories.indexOf(c)}`} aria-selected={category===c} aria-controls="dishes" tabIndex={category===c?0:-1} onKeyDown={e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const i=(categories.indexOf(c)+(e.key==='ArrowRight'?1:3))%4;setCategory(categories[i]);document.getElementById(`tab-${i}`)?.focus();}}} onClick={()=>setCategory(c)} className={category===c?'active':''}>{c}</button>)}</div>
          <div role="tabpanel" id="dishes" aria-labelledby={`tab-${categories.indexOf(category)}`} tabIndex={0}><ul className="dish-list">{dishes[category].map(d=><li key={d.name}><div><div className="dish-heading"><strong>{d.name}</strong>{d.tag&&<span>{d.tag}</span>}</div><p>{d.ingredients}</p></div><span className="price">€ {d.price}</span></li>)}</ul></div>
          <p className="allergen-note">Hai allergie o intolleranze? Parlane con noi prima di ordinare.<br/>Menu e prezzi dimostrativi · Coperto € 2 a persona.</p>
        </div><aside className="menu-photo"><img src="/images/menu-pizza.webp" alt="Dettaglio del cornicione dorato di una pizza con mozzarella, salsiccia e basilico" width="650" height="975" loading="lazy"/><div><span>IL SEGRETO? NESSUN SEGRETO.</span><p>Solo cose buone.<br/>E le mani in pasta.</p></div></aside></div>
        <div className="takeaway"><div><span className="takeaway-icon"><Phone size={23}/></span><div><h3>IL TUO DIVANO. LA NOSTRA PIZZA.</h3><p>Ordina per asporto al telefono. Al resto pensiamo noi.</p></div></div><a className="button outline" href={telephone}>Ordina per asporto <ArrowUpRight size={18}/></a></div>
      </section>
      <section className="location" id="dove"><div className="section-wrap location-grid"><div className="location-copy"><div className="eyebrow">CI VEDIAMO QUI</div><h2>UN POSTO A TAVOLA.<br/><span>TI ASPETTA.</span></h2><p>Per una serata tra amici, una pizza al volo<br/>o una buona scusa per stare insieme.</p><div className="address"><MapPin size={20}/><div><strong>Nel cuore di Napoli</strong><span>Indirizzo del locale da inserire · Demo</span></div></div><a className="button dark-button" href={telephone}><Phone size={17}/> Prenota con una chiamata <ArrowUpRight size={18}/></a><small className="phone-demo">Telefono demo: +39 000 000 0000 · Non operativo</small></div><div className="hours"><h3><Clock size={19}/> QUANDO IL FORNO È ACCESO</h3><table><caption className="sr-only">Orari di apertura dimostrativi</caption><tbody>{hours.map(([day,time])=><tr key={day} className={time==='Chiuso'?'closed':''}><th scope="row">{day}</th><td>{time==='Chiuso'?<span>Riposo del forno</span>:time}</td></tr>)}</tbody></table><p>Orari dimostrativi · Asporto durante gli orari di apertura.</p></div></div></section>
      <section className="map-section" aria-label="Mappa di Napoli, posizione dimostrativa"><iframe title="Google Maps: Napoli, città di riferimento della demo" src="https://maps.google.com/maps?q=Napoli%2C%20Italia&z=14&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a href="https://www.google.com/maps/search/?api=1&query=Napoli%2C+Italia" target="_blank" rel="noopener noreferrer" className="map-link"><MapPin size={17}/> Napoli · Mappa dimostrativa <ArrowUpRight size={17}/></a></section>
    </main>
    <footer className="footer"><a href="#inizio" className="brand"><Flame size={27}/><span>FORNO VIVO<small>LA SEMPLICITÀ HA UN SAPORE.</small></span></a><div>© {new Date().getFullYear()} Forno Vivo · Progetto dimostrativo<br/><small>Locale, menu e contatti di esempio. Foto da Unsplash.</small></div><a href="#menu">Buon appetito. <ArrowUpRight size={15}/></a></footer>
    <div className="mobile-call-bar"><a href={telephone} className="button primary"><Phone size={19}/> Chiama Ora <span>PRENOTA O ORDINA</span><ArrowUpRight size={19}/></a></div>
  </>;
}