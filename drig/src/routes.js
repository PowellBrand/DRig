import React from 'react';
import { Switch, Route } from 'react-router-dom';
import landing from './components/landing/landing';
import contact from './components/contact/contact';
import books from './components/books/books';
import blog from './components/blog/blog';
import about from './components/about/about';

export default (
    <Switch >
        <Route exact path = '/' component = {landing} />
        <Route path = '/contact' component = {contact} />
        <Route path = '/books' component = {books} />
        <Route path = '/blog' component = {blog} />
        <Route path = '/about' component = {about} />
    </Switch >
)