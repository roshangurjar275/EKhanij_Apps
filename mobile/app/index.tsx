import { Link } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Khanij 2.0</Text>
      <Text style={styles.badge}>Exploration & Resource (SRS V1.2)</Text>
      <Text style={styles.subtitle}>
        Projects Onboarded, Agency Onboarding Form, State Admin review. Check status and field verification.
      </Text>

      <View style={styles.grid}>
        {[
          { href: '/exploration', label: 'Dashboard', desc: 'Overview & quick actions' },
          { href: '/exploration/projects/', label: 'Projects Onboarded', desc: 'SRS agency view' },
          { href: '/exploration/onboard', label: 'Fill Onboarding Form', desc: 'Exploration Area Details' },
          { href: '/exploration/blocks', label: 'Exploration Blocks', desc: 'EL blocks by tranche' },
          { href: '/exploration/status', label: 'Check Status', desc: 'Track by ID & date' },
          { href: '/exploration/verify', label: 'Field verification', desc: 'Site visit & capture' },
        ].map((item) => (
          <Link key={item.href} href={item.href as any} asChild>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.cardTitle}>{item.label}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fafaf9',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1c1917',
  },
  badge: {
    marginTop: 4,
    fontSize: 14,
    color: '#2e6f54',
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 15,
    color: '#57534e',
    lineHeight: 22,
  },
  grid: {
    marginTop: 24,
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e7e5e4',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1c1917',
  },
  cardDesc: {
    marginTop: 4,
    fontSize: 14,
    color: '#78716c',
  },
});
