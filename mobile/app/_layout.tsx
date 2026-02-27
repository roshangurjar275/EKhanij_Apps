import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#2e6f54' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '600' },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'E-Khanij 2.0 — Exploration' }} />
        <Stack.Screen name="exploration/index" options={{ title: 'Dashboard' }} />
        <Stack.Screen name="exploration/applications/index" options={{ title: 'My Applications' }} />
        <Stack.Screen name="exploration/applications/[id]" options={{ title: 'Application detail' }} />
        <Stack.Screen name="exploration/projects/index" options={{ title: 'Projects Onboarded' }} />
        <Stack.Screen name="exploration/projects/[id]" options={{ title: 'Project detail' }} />
        <Stack.Screen name="exploration/onboard" options={{ title: 'Fill Onboarding Form' }} />
        <Stack.Screen name="exploration/blocks" options={{ title: 'Exploration Blocks' }} />
        <Stack.Screen name="exploration/status" options={{ title: 'Check Status' }} />
        <Stack.Screen name="exploration/verify" options={{ title: 'Field verification' }} />
      </Stack>
    </>
  );
}
