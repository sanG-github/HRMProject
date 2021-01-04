import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Pending from './Pending'
import Approved from './Approved'
import firebase from '../../firebase'

const db = firebase.firestore();

const TopTab =  createMaterialTopTabNavigator();

	function FTopTab(props) {
		return (
		<TopTab.Navigator
		tabBarOptions={{
			labelStyle: { fontWeight: 'bold' },
			indicatorStyle :{
				backgroundColor:'black',
			},
		}}
		>
			<TopTab.Screen 
				name="Pending" 
				children={() => <Pending {...props} />}
				options = {{
					title: 'Chưa duyệt',
				}} 
			/>
			<TopTab.Screen 
				name="Approved" 
				children={() => <Approved {...props} />}
				options = {{
					title: 'Đã duyệt', 
				}} 
			/>
		</TopTab.Navigator>
	);
}

const ApprovalScreen = ({navigation}) => {

	const [data, setData] = useState({});

	useEffect(() => {
		console.log('reload');
		let isMounted = true;
		if(isMounted)
			getMarker();
		return () => { isMounted = false }; 
	}, [])

	async function getMarker() {
		const snapshot = await db.collection('Approval').get()
		let tmpData, listData = [];
		snapshot.docs.map(doc => {
			tmpData = JSON.parse(JSON.stringify(doc.data()));
			listData.push(tmpData);
		});

		setData(listData);
	}
  
    return(
        <FTopTab data={data} setData={setData}/>
    );     
}

export default ApprovalScreen;