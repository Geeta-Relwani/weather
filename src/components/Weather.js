import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div className="weather__info">
               {
                   this.props.city && this.props.country && 
                   <p className="weather__key">City: 
                   <span className="weather__value">{this.props.city}</span> 
                   Country: 
                   <span className="weather__value">{this.props.country}</span>
                   </p>
                }
                {
                    this.props.temperature &&
                    <p className="weather__key">Temperature: 
                    <span className="weather__value"> {this.props.temperature}</span>
                    </p>
                }
                {
                    this.props.description && 
                    <p className="weather__key">Description:  
                    <span className="weather__value"> {this.props.description}</span>
                    </p>}
                { 
                    this.props.humidity &&
                     <p className="weather__key">Humidity:  
                    <span className="weather__value"> {this.props.humidity}</span>
                     </p>}
                { 
                    this.props.pressure &&
                     <p className="weather__key">Pressure:
                          <span className="weather__value"> {this.props.pressure}</span>
                          </p>}
                {this.props.seaLevel &&
                     <p className="weather__key">
                         Sea-Level:  
                         <span className="weather__value"> {this.props.seaLevel}</span>
                         </p>}
                {this.props.error &&<p className="weather__key">Error:
                     <span className="weather__value"> {this.props.error}</span>
                     </p>}
        
            </div>
        );
    }
}

export default Weather;