import React,{useState}  from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props) {
    const{ index, title, description} = props
    return(
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2' >
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-indigo-200'> {index} </p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'> {title} </h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    ) 
}

export default function Generator(props) {
    const{muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout}=props
    const [showModal, setShowModal] = useState(false)
    //let showModal = false
    function toogleModal(){
        setShowModal(!showModal)
    }
    function updateMuscles(muscleGroup){
        if(muscles.includes(muscleGroup)){
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }
        if(muscles.length > 2){
            return
        }
        if(poison !== "individual"){
            setMuscles(!muscleGroup)
            setShowModal(false)
            return
        }
        
        setMuscles([...muscles,muscleGroup])
        if(muscles === 2){
            setShowModal(false)
        }
    }

  return (
    <SectionWrapper id={'generate'} header={"Generate your workout"} title={['It\'s', ' HUGE', 'o\'clock']}>
        <Header 
        index={'01'} 
        title={'Pick your poison'} 
        description={"Select the workout you wish to endure."}/>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type,typeIndex) => {
            return(
                <button onClick={() =>{
                    setMuscles([])
                    setPoison(type) 
                }} className={' bg-indigo-950 border duration-200 px-4 hover:border-purple-400 py-3 rounded-lg ' 
                + (type === poison ? 'border-purple-950 bg-purple-400' : 'border-white ' )} key={typeIndex}>
                    <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                </button>
            )
        })}
        </div>
        <Header 
        index={'02'} 
        title={'Lock on targets'} 
        description={"Select the muscles judged for annihilation."}/>
        <div className='bg-indigo-950 border border-solid border-indigo-400 rounded-lg flex flex-col'>
            <button onClick={toogleModal} className='relative p-3 flex items-center justify-center hover:bg-purple-400'>
                <p className='capitalize'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down "></i>
            </button>
            {showModal && (
                <div className='flex flex-col pb-3'>
                    {(poison === 'individual' ? WORKOUTS [poison] : Object.keys(WORKOUTS [poison])).map((muscleGroup, muscleGroupIndex) => { 
                        return(
                        <button onClick={()=>{
                        updateMuscles(muscleGroup)}}
                        key={muscleGroupIndex}
                        className={'hover:text-purple-400 duration-200' + muscles.includes(muscleGroup) ? 'text-white' : ' text-purple-700'}  >
                            <p className='uppercase hover:text-purple-400'>{muscleGroup.replaceAll('_' , ' ')}</p>
                        </button>
                    )})}
                </div>
            ) }
        </div>
        <Header 
        index={'03'} 
        title={'Become Juggernaut'} 
        description={"Select the ultimate objective."}/>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme,schemeIndex) => {
            return( 
                <button onClick={() => {
                    console.log(scheme)
                    setGoal(scheme) 
                 }} className={' bg-indigo-950 border duration-200  hover:border-indigo-400 py-3 rounded-lg px-4' 
                 + (scheme === goal ? 'border-indigo-950 bg-purple-500' : 'border-purple-400 ' )} key={schemeIndex}>
                     <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                 </button>
            )
        })}
        </div>
        <Button func={updateWorkout} text={"Formulate"}></Button>
    </SectionWrapper>
    
  )
}
