import React from 'react';
import {Breadcrumb } from 'antd';
import { Link } from 'react-router';
import EditForm from './components/editForm.jsx';

export default class EditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const titleStyle = {
            padding:'10px 20px',
            background:'#ECECEC',
            marginBottom: 10,
            letterSpacing:4,
            borderRadius:5,
            fontSize:20,
            overflow:'hidden',
        };
        return (
            <div>
                <div style={titleStyle}>

                    {/*面包屑导航*/}
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item><Link to="/campaign">广告系列</Link></Breadcrumb.Item>

                        {/*从路由中获得的参数*/}
                        <Breadcrumb.Item>编辑广告系列{this.props.params.rowId}</Breadcrumb.Item>                
                    </Breadcrumb>
                </div>
                <EditForm editData = {this.props.params.rowId}/>
            </div>       
        );
    }
}