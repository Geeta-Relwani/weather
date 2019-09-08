import React from 'react';

class Title extends React.Component{
    render(){
        return(
            <div>
                <h1 className="title-container__title">Weather Finder</h1>
                <h4 className="title-container__subtitle">Find out temperature, conditions and more...</h4>
            </div>
        );
    }
}

export default Title;