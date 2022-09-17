import { ColorValue, Text, View } from 'react-native'
import { THEME } from '../../theme'

import { styles } from './styles'

interface Props {
  label: string
  value: string
  colorvalue?: ColorValue
}


export function DuoInfo({ label, value, colorvalue = THEME.COLORS.TEXT }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>
      <Text 
        style={[styles.value, { color: colorvalue }]}
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  )
}