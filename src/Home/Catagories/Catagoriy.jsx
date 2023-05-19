import React, { useEffect, useState } from 'react';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './app.css';
import Animal from './Animal';
import Cars from './Cars';
import Humans from './Humans';




const Catagoriy = () => {

const [toyRobots, setToyRobot]=useState([]);
const [animals, setAnimal]=useState([]);
const [humans, setHuman]=useState([]);
const [cars, setCars]=useState([]);

// console.log(animals);

    
          useEffect(()=>{
        fetch(`http://localhost:5000/toyRobots/`)
        .then(res=>res.json())
        .then(result=>setToyRobot(result))
             
        const animal=toyRobots.filter(toyRobot=>toyRobot.subCategories=='AnimalToyRobot');
        setAnimal(animal);
        const human=toyRobots.filter(toyRobot=>toyRobot.subCategories=='HumanToyRobot');
        setHuman(human);
        const Car=toyRobots.filter(toyRobot=>toyRobot.subCategories=='VechileToyRobot');
        setCars(Car);
        return () => {
            console.log('Cleanup is running!'); 
          };
      
         },[toyRobots])

   
  

   
      
      
  
    return (

     <>
     <h1 className='text-center text-5xl font-bold my-5 '>Toy Robot Category</h1>
     
     <div className="app-container">
     <Tabs>
        <TabList>
          <Tab>As Human Toy Robot</Tab>
          <Tab>Vehicle Toy Robot</Tab>
          <Tab>Animals Toy Robot</Tab>
        </TabList>

        <TabPanel>
          <h2 className='text-center font-bold text-2xl'>As Human Toy Robots</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                humans.map(humanObj=><Humans key={humanObj._id} humanRobot={humanObj}></Humans>)
            }
         </div>
        </TabPanel>
        
        <TabPanel>
        <h2 className='text-center font-bold text-2xl'>Vehicle Toy Robots </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cars.map(carObj=><Cars key={carObj._id} carRobot={carObj}></Cars>)
            }
         </div>
        </TabPanel>
        
        <TabPanel>
        <h2 className='text-center font-bold text-2xl'> Animal Toy Robots</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                animals.map(animalObj=><Animal key={animalObj._id} animalObj={animalObj}></Animal>)
            }
         </div>
        </TabPanel>
      </Tabs>
      </div>
     </>
    );
  };
export default Catagoriy;