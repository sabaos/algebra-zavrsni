import "../style.css";

const About = () =>{
    return <div className="background">
        <div className="wrapper">
            <h1 className="title">"Chatty" - gdje razgovori postaju stvarnost!</h1>
            
            <div className="about1">Naša vizija je stvoriti siguran i poticajan digitalni prostor gdje razgovori postaju autentični odnosi. "Chatty" je mjesto gdje možete upoznati nove ljude, dijeliti ideje i otkriti inspiraciju iz različitih kultura i pozadina.
</div>
            <div className="about2">Vaša privatnost i sigurnost su naš prioritet. Uvijek se trudimo osigurati sigurno okruženje i čuvati vaše podatke tajno. Naši algoritmi također rade na tome da vam pomognu u pronalaženju "srodne duše" - ljudi s kojima dijelite iste vrijednosti i interese. Možda ćete pronaći prijatelja za cijeli život ili čak ljubav svog života putem "Chatty"-ja.</div>

            <div className="about3">Postanite dio naše globalne zajednice i doživite svijet na potpuno nov način. Bez obzira želite li razgovarati o strastima, dobiti savjet ili proširiti svoje vidike, "Chatty" je tu da vas podrži i poveže s ljudima koji će vam pružiti jedinstveno iskustvo.
</div>

<img src={require('./img/chatty_icon_about.png')} className='img1'></img>
<img src={require('./img/verified.png')} className='img2'></img>
<img src={require('./img/global.png')} className='img3'></img>
            </div>

            
        
        
    </div>
}
export default About;