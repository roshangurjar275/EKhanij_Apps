import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { STATUS_LABELS } from '@ekhanij/shared';

// Mock: in real app fetch by id
const mock = {
  applicationNumber: 'EK/EL/2025/001234',
  type: 'EL',
  status: 'UNDER_SCRUTINY',
  mineral: 'Critical minerals',
  district: 'Sample District',
  area: 'Block A',
  areaHectares: 500,
  submittedAt: '2025-01-15',
};

export default function ApplicationDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.appNo}>{mock.applicationNumber}</Text>
      <Text style={styles.status}>{STATUS_LABELS[mock.status] ?? mock.status}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Type</Text>
        <Text style={styles.value}>{mock.type}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Mineral</Text>
        <Text style={styles.value}>{mock.mineral}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>District / Area</Text>
        <Text style={styles.value}>{mock.district} / {mock.area}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Area (ha)</Text>
        <Text style={styles.value}>{mock.areaHectares}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Submitted</Text>
        <Text style={styles.value}>{mock.submittedAt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fafaf9' },
  appNo: { fontSize: 18, fontWeight: '700', color: '#1c1917' },
  status: {
    marginTop: 8,
    fontSize: 14,
    color: '#b45309',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  row: { marginTop: 16 },
  label: { fontSize: 12, color: '#78716c' },
  value: { fontSize: 16, color: '#1c1917', marginTop: 2 },
});
