import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>
               {this.props.city && this.props.country && <p>City: {this.props.city} Country: {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.description && <p>Description:  {this.props.description}</p>}
                { this.props.humidity && <p>Humidity:  {this.props.humidity}</p>}
                { this.props.pressure && <p>Pressure: {this.props.pressure}</p>}
                {this.props.seaLevel && <p>Sea-Level:  {this.props.seaLevel}</p>}
                {this.props.error &&<p>Error: {this.props.error}</p>}
        
            </div>
        );
    }
}

export default Weather;