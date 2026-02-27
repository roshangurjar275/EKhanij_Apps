import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import {
  SOURCE_OF_FUNDING_OPTIONS,
  LEVEL_OF_EXPLORATION_OPTIONS,
  MINERAL_COMMODITY_TYPES,
  PROJECT_STATUS_OPTIONS,
  FURTHER_ACTION_OPTIONS,
} from '@ekhanij/shared';

/** SRS UC-02: Fill Agency Onboarding for Exploration - mobile */
export default function OnboardScreen() {
  const [projectName, setProjectName] = useState('');
  const [area, setArea] = useState('');
  const [sourceOfFunding, setSourceOfFunding] = useState('NMEDT');
  const [mineralCommodityType, setMineralCommodityType] = useState('PEL');
  const [mineralCommodity, setMineralCommodity] = useState('');
  const [levelOfExploration, setLevelOfExploration] = useState('G1');
  const [budgetSanctioned, setBudgetSanctioned] = useState('');
  const [budgetAccrued, setBudgetAccrued] = useState('');
  const [projectStatus, setProjectStatus] = useState<'WIP' | 'ONGOING' | 'COMPLETED'>('WIP');
  const [progressPercent, setProgressPercent] = useState('');
  const [furtherAction, setFurtherAction] = useState('NO_ACTION');
  const [kmlUploaded, setKmlUploaded] = useState(false);

  const submit = () => {
    if (!projectName.trim()) {
      Alert.alert('Validation', 'Project name is required.');
      return;
    }
    if (!kmlUploaded) {
      Alert.alert('Validation', 'KML upload is mandatory (SRS).');
      return;
    }
    Alert.alert('Submitted', 'Project saved. In production this would submit to server.');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Fill Agency Onboarding (SRS UC-02)</Text>

      <Text style={styles.label}>Project name *</Text>
      <TextInput
        style={styles.input}
        value={projectName}
        onChangeText={setProjectName}
        placeholder="Project name"
        placeholderTextColor="#78716c"
      />

      <Text style={styles.label}>Area</Text>
      <TextInput
        style={styles.input}
        value={area}
        onChangeText={setArea}
        placeholder="Area"
        placeholderTextColor="#78716c"
      />

      <Text style={styles.label}>Source of Funding</Text>
      <View style={styles.rowWrap}>
        {SOURCE_OF_FUNDING_OPTIONS.map((o) => (
          <TouchableOpacity
            key={o.value}
            style={[styles.chip, sourceOfFunding === o.value && styles.chipSelected]}
            onPress={() => setSourceOfFunding(o.value)}
          >
            <Text style={[styles.chipText, sourceOfFunding === o.value && styles.chipTextSelected]}>
              {o.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Mineral Commodity Type</Text>
      <View style={styles.rowWrap}>
        {MINERAL_COMMODITY_TYPES.map((o) => (
          <TouchableOpacity
            key={o.value}
            style={[styles.chip, mineralCommodityType === o.value && styles.chipSelected]}
            onPress={() => setMineralCommodityType(o.value)}
          >
            <Text style={[styles.chipText, mineralCommodityType === o.value && styles.chipTextSelected]}>
              {o.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Mineral commodity *</Text>
      <TextInput
        style={styles.input}
        value={mineralCommodity}
        onChangeText={setMineralCommodity}
        placeholder="Open text"
        placeholderTextColor="#78716c"
      />

      <Text style={styles.label}>Level of Exploration (G1–G4/NA)</Text>
      <View style={styles.rowWrap}>
        {LEVEL_OF_EXPLORATION_OPTIONS.map((o) => (
          <TouchableOpacity
            key={o.value}
            style={[styles.chip, levelOfExploration === o.value && styles.chipSelected]}
            onPress={() => setLevelOfExploration(o.value)}
          >
            <Text style={[styles.chipText, levelOfExploration === o.value && styles.chipTextSelected]}>
              {o.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Budget Sanctioned / Accrued</Text>
      <View style={styles.row2}>
        <TextInput
          style={[styles.input, styles.half]}
          value={budgetSanctioned}
          onChangeText={setBudgetSanctioned}
          placeholder="Sanctioned"
          keyboardType="numeric"
          placeholderTextColor="#78716c"
        />
        <TextInput
          style={[styles.input, styles.half]}
          value={budgetAccrued}
          onChangeText={setBudgetAccrued}
          placeholder="Accrued"
          keyboardType="numeric"
          placeholderTextColor="#78716c"
        />
      </View>

      <Text style={styles.label}>Project status</Text>
      <View style={styles.rowWrap}>
        {PROJECT_STATUS_OPTIONS.map((o) => (
          <TouchableOpacity
            key={o.value}
            style={[styles.chip, projectStatus === o.value && styles.chipSelected]}
            onPress={() => setProjectStatus(o.value as 'WIP' | 'ONGOING' | 'COMPLETED')}
          >
            <Text style={[styles.chipText, projectStatus === o.value && styles.chipTextSelected]}>
              {o.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {(projectStatus === 'ONGOING' || projectStatus === 'WIP') && (
        <>
          <Text style={styles.label}>Approximate Progress %</Text>
          <TextInput
            style={styles.input}
            value={progressPercent}
            onChangeText={setProgressPercent}
            placeholder="0–100"
            keyboardType="numeric"
            placeholderTextColor="#78716c"
          />
        </>
      )}

      {projectStatus === 'COMPLETED' && (
        <>
          <Text style={styles.label}>Further Action by Agency *</Text>
          <View style={styles.rowWrap}>
            {FURTHER_ACTION_OPTIONS.map((o) => (
              <TouchableOpacity
                key={o.value}
                style={[styles.chip, furtherAction === o.value && styles.chipSelected]}
                onPress={() => setFurtherAction(o.value)}
              >
                <Text style={[styles.chipText, furtherAction === o.value && styles.chipTextSelected]}>
                  {o.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}

      <TouchableOpacity
        style={styles.checkbox}
        onPress={() => setKmlUploaded(!kmlUploaded)}
      >
        <Text style={styles.checkboxText}>
          {kmlUploaded ? '☑' : '☐'} KML uploaded (mandatory)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitBtn} onPress={submit}>
        <Text style={styles.submitBtnText}>Save as Draft / Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fafaf9' },
  content: { padding: 20, paddingBottom: 40 },
  heading: { fontSize: 18, fontWeight: '600', color: '#1c1917', marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '500', color: '#44403c', marginTop: 12, marginBottom: 6 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d6d3d1',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
  },
  rowWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  row2: { flexDirection: 'row', gap: 12 },
  half: { flex: 1 },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d6d3d1',
  },
  chipSelected: { backgroundColor: '#2e6f54', borderColor: '#2e6f54' },
  chipText: { fontSize: 14, color: '#44403c' },
  chipTextSelected: { color: '#fff' },
  checkbox: { marginTop: 20 },
  checkboxText: { fontSize: 15, color: '#44403c' },
  submitBtn: {
    backgroundColor: '#2e6f54',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  submitBtnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
