import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landing from './components/landing/landing';
import contact from './components/contact/contact';
import books from './components/books/books';
import blog from './components/blog/blog';
import blogPost from './components/blog/blogPost';
import about from './components/about/about';
import worldCreator from './components/books/worldCreator';
import charCreator from './components/books/charCreator';

export default (
    <Switch >
        <Route exact path = '/' component = {landing} />
        <Route path = '/contact' component = {contact} />
        <Route path = '/books' component = {books} />
        <Route path = '/worldCreator' component = {worldCreator} />
        <Route path = '/charCreator' component = {charCreator} />
        <Route path = '/blog' component = {blog} />
        <Route path = '/blogPost' component={blogPost} />
        <Route path = '/about' component = {about} />
    </Switch >
)