/**
 * Drafts Emails
 */
import React, { useEffect } from 'react';
import { useDispatch  } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// Components
import EmailListing from './emailListing';
import EmailDetail from './emailDetail';

// Redux actions
import { GET_DRAFTS_EMAILS} from "actions/Types";

function Drafts(props){
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch({ type: GET_DRAFTS_EMAILS });
		// eslint-disable-next-line react-hooks/exhaustive-deps		
	},[]);

	const { match } = props;
	return (
		<Switch>
			<Route exact path={match.url} component={EmailListing} />
			<Route path={`${match.url}/:id`} component={EmailDetail} />
		</Switch>
	);
}

export default Drafts;