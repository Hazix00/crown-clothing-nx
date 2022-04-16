import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withRouter( Child: FC<any> ) {
    return ( props: any ) => {
      const location = useLocation();
      const navigate = useNavigate();
      return <Child { ...props } navigate={ navigate } location={ location } />;
    }
  }

const MenuItem: FC<any> = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div 
    style={{
        backgroundImage:`url(${imageUrl})`
    }}
    className="background-image"></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);