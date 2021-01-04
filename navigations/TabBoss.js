import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'

import HomeScreen from '../screens/HomeScreen';
import ApprovalScreen from '../screens/ApprovalScreen';
import ListEmployeeScreen from '../screens/ListEmployeeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateMeeting from '../screens/HomeScreen/CreateMeeting';
import LeavingForm from '../screens/ApprovalScreen/LeavingForm';

const HomeStack = createStackNavigator();

function HomeStackScreen({ handleLogout }) {
  return (
    <HomeStack.Navigator initialRouteName="Profile">
      <HomeStack.Screen 
        name="Home" component={HomeScreen} 
        options= {{
          headerShown: false,
        cardStyle: { backgroundColor: 'white' }, 
        }}/>
      <HomeStack.Screen 
        name="CreateMeeting" component={CreateMeeting} 
        options= {{
        cardStyle: { backgroundColor: 'white' },
        headerStyle: {
          borderBottomWidth: 1,
          //borderColor: "#fff",
          elevation: 0,
        },
        headerLeft: ({onPress}) => (
          <Feather
            size={25}
            name='chevron-left'
            onPress={onPress}
            style={{marginLeft: 5}}
          />
        )
        }}
      />
    </HomeStack.Navigator>
  );
}

const ListEmployeeStack = createStackNavigator();

function ListEmployeeStackScreen() {
  return (
    <ListEmployeeStack.Navigator>
      <ListEmployeeStack.Screen 
      name="ListEmployeeScreen" component={ListEmployeeScreen}
      options = {{
        title: 'Danh sách nhân viên',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          //borderColor: "#fff",
          elevation: 0,
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerLeft: null,
        headerRight: ()=>(
          <AntDesign name="adduser" size={30} color="#000" />
        ),
        headerRightContainerStyle: {
          marginRight: 15,
        },
        cardStyle: { backgroundColor: 'white' }, 
      }}
      />
    </ListEmployeeStack.Navigator>
  );
}

const ApprovalStack = createStackNavigator();

function ApprovalStackScreen() {
  return (
    <ApprovalStack.Navigator>
      <ApprovalStack.Screen 
      name="ApprovalScreen" component={ApprovalScreen}
      options = {{
        title: 'Phê duyệt nghỉ phép',
        headerLeft: null,
        headerTitleAlign: 'center',
        cardStyle: { backgroundColor: 'white' }, 
        headerStyle: {
          borderBottomWidth: 1,
          elevation: 0,
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }} 
      />
      <ApprovalStack.Screen 
      name="LeavingForm" component={LeavingForm}
      options = {{
        title: 'Chi tiết',
        headerTitleAlign: 'center',
        cardStyle: { backgroundColor: 'white' }, 
        headerStyle: {
          borderBottomWidth: 1,
          //borderColor: "#fff",
          elevation: 0,
        },
      }} 
      />
    </ApprovalStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen(props) {
  const [isEdit, setEdit] = useState(false);
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
      name="Profile"
      children={() => 
      <ProfileScreen 
        {...props}
        isEdit={isEdit}
      />}
      options = {{
        title: 'Thông tin cá nhân',
        headerTitleAlign: 'center',
        headerLeft: null,
        headerRight: () => (
          <Feather 
            name="edit-3" 
            size={25} 
            color="#000"
            onPress={() => setEdit(!isEdit)} />
        ),
        headerStyle: {
          borderBottomWidth: 1,
          //borderColor: "#fff",
          elevation: 0,
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerRightContainerStyle: {
          marginRight: 15,
        },
        cardStyle: { backgroundColor: 'white' }, 
      }}>
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function TabBoss(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            }
          if (route.name === 'ListEmployee') {
            iconName = focused ? 'account-group' : 'account-group-outline';
            }
          if (route.name === 'Approval') {
            iconName = focused ? 'clipboard-check' : 'clipboard-check-outline';
          }
          if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
            }
          return <MaterialCommunityIcons name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="ListEmployee" component={ListEmployeeStackScreen} />
        <Tab.Screen name="Approval" component={ApprovalStackScreen} />
        <Tab.Screen name="Profile">
          {() => <ProfileStackScreen {...props}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}