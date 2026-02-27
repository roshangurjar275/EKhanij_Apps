import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function FieldVerifyScreen() {
  const [applicationId, setApplicationId] = useState('');
  const [remarks, setRemarks] = useState('');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'Location is required for field verification.');
      return;
    }
    const loc = await Location.getCurrentPositionAsync({});
    setLocation({
      lat: loc.coords.latitude,
      lng: loc.coords.longitude,
    });
  };

  const submit = () => {
    if (!applicationId.trim()) return;
    Alert.alert(
      'Verification recorded',
      `Application: ${applicationId}\nLocation: ${location ? `${location.lat}, ${location.lng}` : 'Not captured'}\nRemarks: ${remarks || '—'}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Application ID</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. EK/EL/2025/001234"
        value={applicationId}
        onChangeText={setApplicationId}
        placeholderTextColor="#78716c"
      />
      <Text style={styles.label}>Capture location (for site visit)</Text>
      <TouchableOpacity style={styles.locationBtn} onPress={getLocation}>
        <Text style={styles.locationBtnText}>
          {location ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` : 'Get current location'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.label}>Remarks</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Observations, discrepancies..."
        value={remarks}
        onChangeText={setRemarks}
        placeholderTextColor="#78716c"
        multiline
      />
      <TouchableOpacity style={styles.submitBtn} onPress={submit}>
        <Text style={styles.submitBtnText}>Submit verification</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fafaf9' },
  label: { fontSize: 14, fontWeight: '500', color: '#44403c', marginBottom: 8 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d6d3d1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
  },
  textArea: { minHeight: 80, textAlignVertical: 'top' },
  locationBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2e6f54',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
  },
  locationBtnText: { color: '#2e6f54', fontWeight: '500', textAlign: 'center' },
  submitBtn: {
    backgroundColor: '#2e6f54',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  submitBtnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
