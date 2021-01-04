import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'

import HomeScreen from '../screens/HomeScreen';
import TakeLeaveScreen from '../screens/TakeLeaveScreen';
import SalaryScreen from '../screens/SalaryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreateMeeting from '../screens/HomeScreen/CreateMeeting';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
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

const TakeLeaveStack = createStackNavigator();

function TakeLeaveStackScreen(props) {
  return (
    <TakeLeaveStack.Navigator>
      <TakeLeaveStack.Screen 
      name="TakeLeave"
      children={() => <TakeLeaveScreen {...props} />}
      options = {{
        title: 'Đơn xin nghỉ phép',
        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          //borderColor: "#fff",
          elevation: 0,
        },
        headerLeft: null,
        cardStyle: { backgroundColor: 'white' }, 
      }}
      />
    </TakeLeaveStack.Navigator>
  );
}

const SalaryStack = createStackNavigator();

function SalaryStackScreen() {
  return (
    <SalaryStack.Navigator>
      <SalaryStack.Screen 
      name="Salary" component={SalaryScreen}
      options = {{
        title: 'Lương',
        headerTitleAlign: 'center',
        headerLeft: null,
        cardStyle: { backgroundColor: 'white' }, 
        headerStyle: {
          borderBottomWidth: 1,
          //borderColor: "#fff",
          elevation: 0,
        },
      }} 
      />
    </SalaryStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen(props) {
  const [isEdit, setEdit] = useState(false);
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen 
      name="Profile"
      children={() => <ProfileScreen {...props} isEdit={isEdit} />}
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

export default function TabEmp(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            }
          if (route.name === 'TakeLeave') {
            iconName = focused ? 'filetext1' : 'filetext1';
            }
          if (route.name === 'Salary') {
            iconName = focused ? 'wallet' : 'wallet';
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
        <Tab.Screen name="TakeLeave">
          {() => <TakeLeaveStackScreen {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Salary" component={SalaryStackScreen} />
        <Tab.Screen name="Profile">
          {() => <ProfileStackScreen {...props}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}