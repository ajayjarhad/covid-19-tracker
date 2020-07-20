import React from 'react'

import {Cards,Chart,CountryPicker} from './Components'
import styles from './App.module.css'
import {fetchData} from './api'
import coronaLogo from './images/image.png'

class App extends React.Component {

state = {
    data : {},
    country:''
}
    async componentDidMount() {
        const fetchedData = await fetchData()

        this.setState({data:fetchedData})
    }
    handleCountryChange = async(country)=>{
        const fetchedData = await fetchData(country)
        
        this.setState({ data:fetchedData,country:country })
         
    }

    render(){
    const {data,country} = this.state

        return(
            <div className={styles.container}>
                <img src={coronaLogo}  alt ='Covid-19 Logo' className={styles.image}/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App