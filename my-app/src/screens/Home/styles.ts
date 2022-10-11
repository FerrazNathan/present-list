import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    height: 56,
    backgroundColor: '#1f1e25',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginTop: 10,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
});