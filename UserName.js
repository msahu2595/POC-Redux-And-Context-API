import React from 'react';
import {createContext, useState, useContext, useMemo} from 'react';
import {Text, TextInput, View} from 'react-native';

const UserContext = createContext({
  userName: '',
  setUserName: () => {},
});

function UserName() {
  const [userName, setUserName] = useState('John Smith');
  const value = useMemo(() => ({userName, setUserName}), [userName]);

  return (
    <UserContext.Provider value={value}>
      <Text style={{fontSize: 16, padding: 8}}>Using Context API:</Text>
      <UserNameInput />
      <UserInfo />
    </UserContext.Provider>
  );
}

function UserNameInput() {
  const {userName, setUserName} = useContext(UserContext);
  const changeHandler = value => setUserName(value);
  return (
    <TextInput
      style={{borderWidth: 1, borderColor: 'red', padding: 8}}
      type="text"
      value={userName}
      onChangeText={changeHandler}
    />
  );
}

function UserInfo() {
  const {userName} = useContext(UserContext);
  return (
    <View>
      <Text style={{margin: 8}}>{userName}</Text>
    </View>
  );
}

export default UserName;
