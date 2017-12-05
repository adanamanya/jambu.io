import React from 'react';
import PropTypes from 'prop-types';
import { withCurrentUser, getSetting, registerSetting, Components, registerComponent, ModalTrigger } from 'meteor/vulcan:core';
import { Header, Sticky } from 'semantic-ui-react';
import { Link } from 'react-router';
import { FormattedMessage } from 'meteor/vulcan:i18n';
import Button from 'react-bootstrap/lib/Button';
  const Header2 = (props, context) => {
  const logoUrl = getSetting('logoUrl');
  const siteTitle = getSetting('title', 'My App');
  const tagline = getSetting('tagline');
  return (
  
    <div className="header-wrapper">
    <Header>
    <text className='text1'>
    <Link className='text1' to={{pathname: "/", query: {cat: "random"}}}>
    - Random -
    </Link> 
    </text>
    <text className='text1'>
    <Link className='text1' to={{pathname: "/", query: {cat: "news"}}}>
     - News - 
    </Link>
    </text>
    <text className='text1'>
     <Link className='text1' to={{pathname: "/", query: {cat: "tech"}}}>
     - Tech - 
     </Link>
    </text>
    <text className='text1'>
     <Link className='text1' to={{pathname: "/", query: {cat: "animanga"}}}>
     - Anime/Manga - 
     </Link>
    </text>
    <text className='text1'>
    <Link className='text1' to={{pathname: "/", query: {cat: "game"}}}>
     - Game -
     </Link>
    </text>
    <text className='text1'>
    <Link className='text1' to={{pathname: "/Games"}}>
     - Browse -
     </Link>
    </text>
    </Header>
      <div className="header">
        <div className="logo">
          <Components.Logo logoUrl={logoUrl} siteTitle={siteTitle} />
          {tagline ? <h2 className="tagline">{tagline}</h2> : "" }
        </div>
        <div className="nav">
          <div className="nav-user">
            {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
          </div>
          <div className="nav-new-post">
            <Components.PostsNewButton/>
          </div>
        </div>

      </div>
    </div>

  )
}

Header2.displayName = "Header";

Header2.propTypes = {
  currentUser: PropTypes.object,
};

registerComponent('Header', Header2, withCurrentUser,);
