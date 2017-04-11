import React from 'react';

/*页面标题组件，可传参*/
export default class Title extends React.Component {
    constructor(props) {
        super(props);       
    }       

    render() {
        const titleStyle = {
            padding:'5px 20px',
            background:'#ECECEC',
            marginBottom: 10,
            letterSpacing:4,
            borderRadius:5,
            overflow:'hidden',
        };        
        return (
            <div style={titleStyle} ><h2>{this.props.name}</h2></div>
        )
    }
}
        