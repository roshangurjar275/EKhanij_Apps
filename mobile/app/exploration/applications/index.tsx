import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { STATUS_LABELS } from '@ekhanij/shared';
import type { ExplorationApplication } from '@ekhanij/shared';

const mockApps: ExplorationApplication[] = [
  {
    id: '1',
    applicationNumber: 'EK/EL/2025/001234',
    type: 'EL',
    status: 'UNDER_SCRUTINY',
    mineral: 'Critical minerals',
    district: 'Sample District',
    area: 'Block A',
    areaHectares: 500,
    applicantName: 'Demo',
    submittedAt: '2025-01-15',
    lastUpdated: '2025-02-01',
  },
];

export default function ApplicationsScreen() {
  const [list] = useState(mockApps);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>No applications</Text>}
        renderItem={({ item }) => (
          <Link href={`/exploration/applications/${item.id}` as any} asChild>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.appNo}>{item.applicationNumber}</Text>
              <Text style={styles.meta}>{item.type} · {item.mineral}</Text>
              <View style={styles.statusWrap}>
                <Text style={styles.status}>{STATUS_LABELS[item.status] ?? item.status}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fafaf9' },
  empty: { textAlign: 'center', color: '#78716c', marginTop: 24 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e7e5e4',
  },
  appNo: { fontSize: 15, fontWeight: '600', color: '#1c1917' },
  meta: { fontSize: 14, color: '#57534e', marginTop: 4 },
  statusWrap: { marginTop: 8 },
  status: {
    fontSize: 12,
    color: '#b45309',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
});
