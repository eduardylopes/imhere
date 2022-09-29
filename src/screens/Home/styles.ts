import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6d6d6d',
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: { color: '#FFFFFF', fontSize: 16 },
  input: {
    flex: 1,
    backgroundColor: '#1f1e25',
    color: '#ffffff',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 36,
    width: '100%',
    flexDirection: 'row',
  },
});
