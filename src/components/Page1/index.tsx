import React from 'react';
import "./style.css"
import { GetUsers, GetRepos } from "../../actions/asyncActions"
import { useDispatch} from "react-redux"
import { connect } from "react-redux"
import { AiOutlineSearch } from 'react-icons/ai';
// import { withRouter} from 'react-router'
interface EnumServiceItem {
    username: string;
    avatar_url: string;
    login: string;
    repos_url:string
}
// interface Page1Props extends Array<EnumServiceItem>{}

interface Page1Props {
    users?: {
        items: EnumServiceItem[]
    }
    history?:any
}

interface Page1State {
    
}

class Page1 extends React.Component<Page1Props, Page1State> {

    state = {
        search:""
    }
    changeListener = (e: any) => {
        this.setState({ search: e.target.value })
        
    }

    userListener = (repolink: any, name:string) => {
        
        // GetRepos(repolink)
        this.props.history.push(`/${name}`)
    }
    render() {

        const data = this.props.users ? this.props.users.items.map(d => { 
            return (
                // <Link to={ d.login}>
                <div className="user-box" onClick={() => this.userListener(d.repos_url,d.login)}>
                    <div className="avatar">
                        <img src={ d.avatar_url} alt="" style={{ maxWidth: "60px", borderRadius:"50px"}}/>
                    </div>
                    <div className="user-name">{ d.login}</div>
                    </div>
                    // </Link>
            )
        }): null
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="search-box">
                        <input type="text" className="search-txt" value={ this.state.search} onChange={this.changeListener }/>
                        <a className="search-button" onClick={() => GetUsers(this.state.search)}>
                            <AiOutlineSearch className="search-btn"/>
                        </a>
                    </div>
                    <div className="box">
                        {this.props.users && <h3 className="user-heading">Users</h3>}
                    <div className="results-box">

                        { data}
                    </div>
                    </div>

                </div>
                
            </div>
         );
    }
}

// export default Page1;
const mapStateToProps = (store: any) => {
  return {
      ...store,
      users: store.users
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1)