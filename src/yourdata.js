// Skills Icons
import htmlIcon from "./images/html.svg"
import rappiIcon from "./images/rappi-black.png"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import me from './images/me.jpeg';
import redux from './images/redux.jpg';
import flexboxIcon from './images/flexbox.png';
import flanddl from "./images/flan-ddl.jpg"
import flanddl_crema from "./images/flan-ddl-crema.png"
import flancrema from "./images/flan-crema.jpg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "chetan",
  headerTagline: [
    //Line 1 For Header
    "Only for Flans",
    //Line 2 For Header
    // "for",
    //Line 3 For Header
    // "Flans",
  ],
  //   Header Paragraph
  headerParagraph:
    "Desafía mis gávilos, mis sentidos. Me provoca. Suave y cristalino dulzor, destruye mi débil égida. Me subyuga.",

  //Contact Email
  contactEmail: "gomezger.a9@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Flan con dulce de leche", //Project Title - Add Your Project Title Here
      para:
        "El clásico. El que no puede faltar. El que es con dulce de leche, obvio.",
      //Project Image - Add Your Project Image Here
      imageSrc: flanddl,
      //Project URL - Add Your Project Url Here
      url: "https://recetasargentinas.net/flan-con-dulce-de-leche/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Project Two", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        flanddl_crema,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        flancrema,
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },


    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Me gusta el flan.",
  aboutParaTwo:
  "El flan es un postre que se prepara con huevos enteros, leche y azúcar.",
  aboutParaThree:
  "El huevo, al cocerse al baño María, se cuaja y toma la forma del molde, adquiriendo una textura ligera, gelatinosa y cremosa. ",
  aboutImage:
  me,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: reactIcon,
      para:
       "Hago más que nada React Native, me siento cómodo y puedo lograr cosas interesantes en poco tiempo.",
    },
    {
      id: 2,
      img: flexboxIcon,
      para:
        "Hacer Flexbox es divertido, versátil y directo, maquetar es mucho más simple y conciso. Conocer la diferencia entre alignItems y justifyContent es un alivio.",
    },
    {
      id: 3,
      img: redux,
      para:
        "Redux? Lo tengo. Action Types? Así es. Reducers? Pues claro. Action Creators? Adentro.",
    },

    
  ],
  skills2: [
    {
      id: 1,
      img: rappiIcon,
      para:
        "Dónde encontrar flanes? En Rappi.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Sobre mí",
  promotionPara:
    `Soy Germán, esto es un template y me pareció correcto hacer un gran portfolio con flanes como foco principal. Hago desarrollo mobile en `,
  promotionPara2: 
  'Hice esto porque tuve las oportunidades para hacerlo y ¿por qué no? Me gusta programar, ver algún tipo de serie rara con buenos hilos narrativos y andar en bicicleta.',
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "¿Tenés alguna aplicación mobile en mente?",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/gg-ballin" },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
