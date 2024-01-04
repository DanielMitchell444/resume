
import styles from '../src/App.module.css'
import Header from './Components/Header';
import Gradient from './Components/Gradient';
import Resume from './Components/Resume';
import Personal from './Components/Personal';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Contacts from './Components/Contacts';
import { useReactToPrint } from 'react-to-print'
import { useState, useRef } from 'react';
import CV from './Components/SampleCV';
import { v4 as uuidv4 } from 'uuid'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Login from './Components/Login';
function App() {
  
  
 const pdfRef = useRef();

 const [login, setLogin] = useState(false)

  const [values, setValues] = useState( {
    color1: "rgb(91, 205, 188)",
    color2: "rgb(100, 277, 104)",
    firstName: "",
    lastName: "",
    title: "",
    fileName: "",
    fileSRC: "",
     skills: [
      {
      name: "",
      id: uuidv4(),
      }
     ],
     experience: [
      {
       id: uuidv4(),
       position: "",
       company: "",
       startDate: "",
       endDate: "",
       responsibilities: "",
      }
     ],

     school: "",
     degree: "",
     address: "",
     email: "",
     phone: "",
     link: ""

    }
);
const componentRef = useRef()
const handlePrint = useReactToPrint({ content: () => componentRef.current,
                                      documentTitle: `${values.firstName}'s Resume`})



const downloadPDF = () => {
  const input = componentRef.current;
  html2canvas(input).then((canvas) => {
   const imgData = canvas.toDataURL('image/png')
   const pdf = new jsPDF('p','mm','a4',true);
   const pdfWidth = pdf.internal.pageSize.getWidth();
   const pdfHeight = pdf.internal.pageSize.getHeight();
   const imgWidth = canvas.width;
   const imgHeight = canvas.height;
   const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
   const imgX = (pdfWidth - imgWidth * ratio) / 2;
   const imgY = 0;
   pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
   pdf.save('Resume.pdf');
  })
}


const [input, setInput] = useState([
  {
   type: "text",
   id: 1,
   value: "",
   name: ""
  },
 ]
 )

 const [image, setImage] = useState();

const [experience, addExperience] = useState(false);


const [stuff2, setStuff2] = useState( {
   position2: "",
   company2: "",
   startDate2: "",
   endDate2: "",
   responsibilities2: "",

  })

const [skills, setSkills2] = useState ({
  skills: [
    {
  skill2: "",
  skills3: "",
  skills4: "",
    }
  ]
})

const handleFile = (event) => {
 setValues({
  ...values,
  fileName: event.target.files[0].name,
  fileSRC: URL.createObjectURL(event.target.files[0])
 })

 event.target.value = ""

}

const addInput = () => {
setInput(
 s => {
  return [
  ...s,
  {
   type: "text",
   id: 1,
   value: "" ,
  }
  ]
 } 
)
}

const handleChange2 = (e) => {
 e.preventDefault();

 const index = e.target.id

 setInput(
  s => {
    const newArr = s.slice();
    newArr[index].value = e.target.value
    
    return newArr
  })
}

const loadSampleCV = (e) => {
  setValues(CV);
   e = ""
}

const addExperienceHandler = () => {
  setValues({...values, experience: [...values.experience, {
    name: "",
    id: uuidv4(), 
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    responsibilities: ""

  
  }]})
}

const addSkills = () => {
  setValues({...values,skills :[...values.skills ,{id: uuidv4(), name: ""}]})
}
  const handleChange = (event) => {
   let {name, value} = event.target

   setValues({
   ...values,
   [name]: value,
  })
  }

const deleteExperience = (id) => {
  setValues({...values, experience : values.experience.filter(experience => experience.id !== id)})
}

const deleteSkills = (id) => {
  setValues({...values, skills : values.skills.filter(skill => skill.id !== id)})
}

const handleExperience = (e,id) =>{
  setValues({...values,
            experience: values.experience.map(experience =>{
              if(experience.id === id)
                experience[e.target.name] = e.target.value
              return experience
            })})
}

  const getColor1 = (e) => {
    setValues({...values, color1: e.target.value})
  }

  const getColor2 = (e) => {
   setValues({...values, color2: e.target.value});
  }



  const handleChange3 = (event) => {
    let {name, value} = event.target;

    setSkills2({
      ...skills,
     [name]: value,
  })
  }

  
  const handleSkill = (e) =>{
    setValues({...values,
              skills: values.skills.map(skill =>{
                if(skill.id === e.target.id)
                  skill.name = e.target.value
                return skill
              })
    })
  }


  const handleDynamicInputs = (event) => {
   let {name, value} = event.target;

   setStuff2({
    ...stuff2,
    [name]: value,
   })
  }

  const handleInputChange = () => {

  }
  



  return (
    
    <div className = {styles.App}>
     <div className= {styles.fields}>
     <Header 
     loadCV = {loadSampleCV}
     handlePrint = {handlePrint}
     PDF = {downloadPDF}
     />
     <Gradient 
      values = {values}
      getColor1 = {getColor1}
      getColor2 = {getColor2}
     />
     <Personal
      values = {values}
      setValue = {handleChange}
      handleFile = {handleFile}
     />

     <Experience 
     values = {values}
     setValue = {addExperienceHandler}
     stuff2 = {stuff2}
     setValue2= {handleExperience}
     deleteExperience = {deleteExperience}

     />
     <Education 
     values = {values}
     setValue={addExperienceHandler}
     setValue2 = {addExperience}
     handleChange = {handleChange}
     />
     <Skills 
     values = {values}
     addStuff = {addInput}
     change = {handleChange}
     dynamic = {handleDynamicInputs}
     input = {input}
     handleSkills = {handleSkill}
     skills = {skills}
     addSkills2 = {addSkills}
     deleteSkills = {deleteSkills}
     
     />
     <Contacts 
      change = {handleChange}
      values = {values}

     />
    </div>
    <div className= {styles.Resume}>
     <Resume 
     values = {values}
     stuff2 = {stuff2}
     addInput = {addInput}
     experiences = {addExperience}
     input = {input}
     image = {image}
     reference = {componentRef}
     PDF = {pdfRef}
     

     />
    </div>
    </div>
  );
}

export default App;
