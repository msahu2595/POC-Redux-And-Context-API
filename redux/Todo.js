import React, {useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getTodo} from './actions';

const Todo = () => {
  const dispatch = useDispatch();
  const {loading, error, data, message} = useSelector(
    state => state,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  console.log(data?.length);

  return (
    <>
      {loading && <Text>Loading</Text>}
      {error && <Text style={{backgroundColor: 'pink'}}>{message}</Text>}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text
            style={{
              color: item.completed ? 'green' : 'red',
              paddingVertical: 8,
            }}>{`${item.id}: ${item.title}`}</Text>
        )}
        keyExtractor={({id}) => id}
      />
    </>
  );
};

export default Todo;

// import React, {useEffect} from 'react';
// import {FlatList, SafeAreaView, Text} from 'react-native';
// import {shallowEqual, useDispatch, useSelector} from 'react-redux';
// import {reset, setData, setError, setLoading} from './actions';
// import axios from 'axios';

// const Todo = () => {
//   const dispatch = useDispatch();
//   const {loading, error, data, message} = useSelector(
//     state => state,
//     shallowEqual,
//   );

//   useEffect(() => {
//     async function getTodo() {
//       try {
//         dispatch(reset());
//         dispatch(setLoading(true));
//         const result = await axios.get(
//           'https://jsonplaceholder.typicode.com/todos',
//         );
//         dispatch(
//           setData({data: result?.data, message: 'Successfully get todo.'}),
//         );
//         dispatch(setLoading(false));
//       } catch (err) {
//         console.log(err);
//         dispatch(
//           setError({
//             error: true,
//             message: `Got Error: ${err.message}` ?? 'Got unknown error.',
//           }),
//         );
//         dispatch(setLoading(false));
//       }
//     }
//     getTodo();
//   }, [dispatch]);

//   console.log(data?.length);

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white', margin: 16}}>
//       {loading && <Text>Loading</Text>}
//       {error && <Text style={{backgroundColor: 'pink'}}>{message}</Text>}
//       <FlatList
//         data={data}
//         renderItem={({item}) => (
//           <Text style={{paddingVertical: 8}}>{item.title}</Text>
//         )}
//         keyExtractor={({id}) => id}
//       />
//     </SafeAreaView>
//   );
// };

// export default Todo;
