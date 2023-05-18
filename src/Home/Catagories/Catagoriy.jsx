import React from 'react';
import './tab.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Catagoriy = () => {
    return (
      <div className="app-container">
        <Tabs>
          <TabList>
            <Tab>Category 1</Tab>
            <Tab>Category 2</Tab>
            <Tab>Category 3</Tab>
          </TabList>
  
          <TabPanel>
            <h2>Subcategories of Category 1</h2>
            <ul>
              <li>Subcategory 1.1</li>
              <li>Subcategory 1.2</li>
              <li>Subcategory 1.3</li>
            </ul>
          </TabPanel>
          
          <TabPanel>
            <h2>Subcategories of Category 2</h2>
            <ul>
              <li>Subcategory 2.1</li>
              <li>Subcategory 2.2</li>
              <li>Subcategory 2.3</li>
            </ul>
          </TabPanel>
          
          <TabPanel>
            <h2>Subcategories of Category 3</h2>
            <ul>
              <li>Subcategory 3.1</li>
              <li>Subcategory 3.2</li>
              <li>Subcategory 3.3</li>
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    );
  };
export default Catagoriy;