import React from 'react';
import ReactGA from 'react-ga';
export const withGATag = (WrappedComponent) => {
class triggerGATag extends React.Component {

    
    componentDidMount() {
    console.log('GA component mounted');
    ReactGA.initialize('UA-135762938-1');
    ReactGA.pageview(window.location.pathname);
    }
    
    render(){
        return(
            <WrappedComponent/>
        )
    }
} 

return triggerGATag;
}