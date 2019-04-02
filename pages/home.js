// This is main entry page for route '/home'
import React from 'react';
import * as Sentry from '@sentry/browser';
import {EventEmitter} from "events"
import withRoot from '../src/with-root';
import localforage from 'localforage';
import CourseList from '../src/components/courses-list';
import Header from '../src/components/header';

var bus = new EventEmitter();

class Home extends React.Component {
	componentDidMount() {
		Sentry.init({ dsn: 'https://dac738139bd14514bbec319da7c8b28c@sentry.io/1417825' });
		this.configSentryOnMount();
	}
	 componentDidCatch(error, errorInfo) {
		this.triggerSentry(error, errorInfo);
		}
		 configSentryOnMount= async ()=>{
			let userId = await localforage.getItem('authResponse').then((value)=>{
				let id = value ? value.user.id : 'non logged in user';
				return id;
		 })
		 Sentry.configureScope((scope) => {
			scope.setExtra("userId", userId);
		  });
		 }
		 triggerSentry=async (error, errorInfo)=>{
		  let userId = await localforage.getItem('authResponse').then((value)=>{
			 let id = value ? value.user.id : 'non logged in user';
			 return id;
		})
		Sentry.configureScope((scope) => {
			scope.setExtra("userId", userId);
		  });
		this.setState({ error });
		Sentry.withScope(scope => {
		  Object.keys(errorInfo).forEach(key => {
			scope.setExtra(errorInfo, errorInfo[key])
		  });
		  Sentry.captureException(error);
		});
		};
	render() {
		return (
	<div>
		   <Header bus={bus} searchHidden={false}/>
		   <CourseList bus={bus}/> 
	</div>
);
	  }
}

export default withRoot(Home);
