import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExplorationDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Quick actions (SRS)</Text>
      <View style={styles.actions}>
        <Link href="/exploration/projects" asChild>
          <TouchableOpacity style={styles.btnPrimary}>
            <Text style={styles.btnPrimaryText}>Projects Onboarded</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/exploration/onboard" asChild>
          <TouchableOpacity style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Fill Onboarding Form</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/exploration/status" asChild>
          <TouchableOpacity style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Check status</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/exploration/blocks" asChild>
          <TouchableOpacity style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Exploration blocks</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/exploration/verify" asChild>
          <TouchableOpacity style={styles.btnSecondary}>
            <Text style={styles.btnSecondaryText}>Field verification</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fafaf9' },
  heading: { fontSize: 18, fontWeight: '600', color: '#1c1917', marginBottom: 16 },
  actions: { gap: 12 },
  btnPrimary: {
    backgroundColor: '#2e6f54',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnPrimaryText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  btnSecondary: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d6d3d1',
  },
  btnSecondaryText: { color: '#44403c', fontWeight: '500', fontSize: 16 },
});
