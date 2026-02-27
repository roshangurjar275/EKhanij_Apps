import { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { STATUS_LABELS } from '@ekhanij/shared';
import type { ExplorationProject } from '@ekhanij/shared';

const mockProjects: ExplorationProject[] = [
  {
    id: '1',
    projectName: 'Block A Exploration',
    agencyId: 'ag1',
    agencyName: 'GSI',
    districts: ['Sample District'],
    area: 'Block A',
    sourceOfFunding: 'NMEDT',
    mineralCommodityType: 'PEL',
    mineralCommodity: 'Critical minerals',
    levelOfExploration: 'G2',
    budgetSanctioned: 50_00_000,
    budgetAccrued: 12_00_000,
    projectStatus: 'ONGOING',
    approximateProgressPercent: 35,
    status: 'APPROVED',
    lastUpdated: '2025-02-01',
    kmlUploaded: true,
    previousWorkStudyUploaded: true,
    geologicalReportUploaded: false,
  },
];

export default function ProjectsScreen() {
  const [list] = useState(mockProjects);

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>No projects</Text>}
        renderItem={({ item }) => (
          <Link href={`/exploration/projects/${item.id}` as any} asChild>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.projectName}>{item.projectName}</Text>
              <Text style={styles.meta}>{item.agencyName} · {item.mineralCommodity}</Text>
              <Text style={styles.meta2}>
                {item.projectStatus}
                {item.approximateProgressPercent != null && ` (${item.approximateProgressPercent}%)`}
              </Text>
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
  projectName: { fontSize: 16, fontWeight: '600', color: '#1c1917' },
  meta: { fontSize: 14, color: '#57534e', marginTop: 4 },
  meta2: { fontSize: 13, color: '#78716c', marginTop: 2 },
  statusWrap: { marginTop: 8 },
  status: {
    fontSize: 12,
    color: '#15803d',
    backgroundColor: '#dcfce7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
});
