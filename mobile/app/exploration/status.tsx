import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { STATUS_LABELS } from '@ekhanij/shared';

export default function StatusScreen() {
  const [appId, setAppId] = useState('');
  const [ackDate, setAckDate] = useState('');
  const [result, setResult] = useState<{ applicationNumber: string; status: string } | null>(null);

  const onSearch = () => {
    if (!appId.trim() || !ackDate.trim()) return;
    setResult({
      applicationNumber: appId.trim(),
      status: 'UNDER_SCRUTINY',
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.hint}>Application ID and acknowledgement date</Text>
      <TextInput
        style={styles.input}
        placeholder="Application number"
        value={appId}
        onChangeText={setAppId}
        placeholderTextColor="#78716c"
      />
      <TextInput
        style={styles.input}
        placeholder="Acknowledgement date (YYYY-MM-DD)"
        value={ackDate}
        onChangeText={setAckDate}
        placeholderTextColor="#78716c"
      />
      <TouchableOpacity style={styles.button} onPress={onSearch}>
        <Text style={styles.buttonText}>Check status</Text>
      </TouchableOpacity>
      {result && (
        <View style={styles.result}>
          <Text style={styles.resultTitle}>Status</Text>
          <Text style={styles.resultAppNo}>{result.applicationNumber}</Text>
          <Text style={styles.resultStatus}>
            {STATUS_LABELS[result.status] ?? result.status}
          </Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fafaf9' },
  hint: { fontSize: 14, color: '#57534e', marginBottom: 12 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d6d3d1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2e6f54',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  result: {
    marginTop: 24,
    backgroundColor: '#ecfdf5',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#a7f3d0',
  },
  resultTitle: { fontSize: 14, fontWeight: '600', color: '#065f46' },
  resultAppNo: { fontSize: 15, color: '#1c1917', marginTop: 4 },
  resultStatus: { fontSize: 14, color: '#047857', marginTop: 4 },
});
