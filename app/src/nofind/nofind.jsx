import React from 'react';

export default class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let styleP = {
            textAlign:'center',
            fontFamily:'cursive',
            fontSize:35,
            marginTop:'14%'
        }
        let styleH = {
            textAlign:'center',
            fontFamily:'cursive',
            fontSize:100    
        }
        return (
            <div>
                <p style={styleP} >OOPS! - Could not Find it</p>
                <h1 style={styleH} >404</h1>
            </div>
        );
    }
}

