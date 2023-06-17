import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    width: '35%',
    borderWidth: 1,
    alignSelf: 'center'
  },
  bigbutton: {
    marginVertical: 10,
    width: '35%',
    borderWidth: 1,
    alignSelf: 'center'
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    alignSelf: 'center'
  },
  textInput: {
    height: 40,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    width: '35%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginBottom: 10
  },
  todoTask: {
    height: 40,
    width: '35%',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'red',
    textAlign: 'center',
    marginTop: 10
  },
  doneTask: {
    height: 40,
    width: '35%',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    color: 'white',
    alignSelf: 'center',
    backgroundColor: 'green',
    textAlign: 'center',
    marginTop: 10
  }
});

export default styles;
