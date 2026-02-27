import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import type { ExplorationBlock } from '@ekhanij/shared';

const mockBlocks: ExplorationBlock[] = [
  {
    id: '1',
    blockCode: 'EL-MP-2025-001',
    state: 'Madhya Pradesh',
    district: 'Sample District',
    mineral: 'Critical minerals',
    areaHectares: 500,
    tranche: 2,
    status: 'AUCTION_LIVE',
    auctionEndDate: '2025-03-15',
  },
];

export default function BlocksScreen() {
  const [list] = useState(mockBlocks);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>No blocks</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.code}>{item.blockCode}</Text>
            <Text style={styles.mineral}>{item.mineral}</Text>
            <Text style={styles.meta}>
              {item.district}, {item.state} · {item.areaHectares} ha · Tranche {item.tranche}
            </Text>
            <Text style={styles.status}>{item.status}</Text>
          </View>
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
  code: { fontSize: 14, fontWeight: '600', color: '#2e6f54' },
  mineral: { fontSize: 16, fontWeight: '600', color: '#1c1917', marginTop: 4 },
  meta: { fontSize: 14, color: '#57534e', marginTop: 4 },
  status: { fontSize: 12, color: '#15803d', marginTop: 6 },
});
