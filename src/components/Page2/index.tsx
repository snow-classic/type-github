import React from 'react';
import { connect } from "react-redux"
import { GetUsers, GetRepos , GetReadame} from "../../actions/asyncActions"
import { Modal, Button } from 'antd';
import ReactMarkdown from 'react-markdown'

import "./style.css"

interface EnumServiceItem {
    name :string
}
interface Page2Props {
    history: any;
    repos?: EnumServiceItem[],
    readame: any,
    children?: JSX.Element|JSX.Element[];
}
 
interface Page2State {
    
}
 
class Page2 extends React.Component<Page2Props, Page2State> {
    state = {
        isModalVisible: false,
        project:""
    }

    componentDidMount = () => {
        var rawurl = this.props.history.location.pathname
        rawurl = rawurl.substr(rawurl.indexOf('/') + 1);
        console.log(this.props)
        GetRepos(this.getUsername(this.props.history.location.pathname))
    }
    getUsername(data:any) {
            var rawurl = data
        rawurl = rawurl.substr(rawurl.indexOf('/') + 1);
        return rawurl
    }
    showModal = () => {
        this.setState({isModalVisible:true})
    // setIsModalVisible(true);
    };

    handleOk = () => {
    this.setState({isModalVisible:false})
    };

    handleCancel = () => {
    this.setState({isModalVisible:false})
    };
    projectClickHander = (e: any) => {
        const data = {
            user: this.getUsername(this.props.history.location.pathname),
            project:e.target.innerText
        }
        this.setState({project:e.target.innerText})
        GetReadame(data)
    this.setState({isModalVisible: true})
    }
    
    render() {
        console.log("page 2", this.props)
        const data = this.props.repos ? this.props.repos.map(d => {
            return (
                <div className="repo-box" onClick={ this.projectClickHander}>
                    <div className="repo-name">{ d.name}</div>
                </div>
            )
        }) : null
        return (
            <div className="wrapper2">
                <div className="heading-bar">Projects of { this.getUsername(this.props.history.location.pathname)}</div>
                <div className="container2">
                    <div className="projects">
                        {data}
                    <Modal title={`READAME.md . ${this.state.project} Project`} visible={this.state.isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} width={1000}>
                            <div>
                                <ReactMarkdown>{ this.props.readame? this.props.readame.toString(): ""}</ReactMarkdown>
                           </div>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}
 
// export default Page1;
const mapStateToProps = (store: any) => {
    // console.log("store in page 2", store)
  return {
      ...store,
      repos: store.repos,
      readame:store.readame
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2)


