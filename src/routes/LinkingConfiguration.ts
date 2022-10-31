/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from '../@types/navigation'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Main: {
            screens: {
              Home: 'one'
            }
          },
          Plus: {
            screens: {
              Plus: 'two'
            }
          },
          User: {
            screens: {
              User: 'three'
            }
          }
        }
      },
      Pix: '*',
      ShowExpenses: '*',
      Home: '*',
      Wallet: '*'
    }
  }
}

export default linking
