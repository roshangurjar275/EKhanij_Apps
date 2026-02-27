import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { STATUS_LABELS } from '@ekhanij/shared';

const mock = {
  projectName: 'Block A Exploration',
  agencyName: 'GSI',
  districts: 'Sample District',
  projectStatus: 'ONGOING',
  approximateProgressPercent: 35,
  status: 'APPROVED',
  mineralCommodity: 'Critical minerals',
  sourceOfFunding: 'NMEDT',
  budgetSanctioned: '50,00,000',
  budgetAccrued: '12,00,000',
  lastUpdated: '2025-02-01',
};

export default function ProjectDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mock.projectName}</Text>
      <Text style={styles.status}>{STATUS_LABELS[mock.status] ?? mock.status}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Agency</Text>
        <Text style={styles.value}>{mock.agencyName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Districts</Text>
        <Text style={styles.value}>{mock.districts}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Project status</Text>
        <Text style={styles.value}>
          {mock.projectStatus} ({mock.approximateProgressPercent}%)
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Mineral commodity</Text>
        <Text style={styles.value}>{mock.mineralCommodity}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Budget Sanctioned / Accrued</Text>
        <Text style={styles.value}>₹{mock.budgetSanctioned} / ₹{mock.budgetAccrued}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Last updated</Text>
        <Text style={styles.value}>{mock.lastUpdated}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fafaf9' },
  title: { fontSize: 18, fontWeight: '700', color: '#1c1917' },
  status: {
    marginTop: 8,
    fontSize: 14,
    color: '#15803d',
    backgroundColor: '#dcfce7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  row: { marginTop: 16 },
  label: { fontSize: 12, color: '#78716c' },
  value: { fontSize: 16, color: '#1c1917', marginTop: 2 },
});
