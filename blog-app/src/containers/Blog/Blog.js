import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from '../NewPost/NewPost';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class Blog extends Component {  

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts' exact>Posts</NavLink></li>
                            <li><NavLink to='/new-post'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path='/new-post' component={NewPost} />                    
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not Found !</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                </Switch>
                
            </div>
        );
    }
}

export default Blog;